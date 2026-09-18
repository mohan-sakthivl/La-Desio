// LA DESIO - Shopping Cart & Checkout Data Store (INR Edition)
// Handles Cart persistence, Promo Codes, Quantities, and Delivery estimation

const CART_STORAGE_KEY = 'ladesio_cart_v1';
const WISHLIST_STORAGE_KEY = 'ladesio_wishlist_v1';

export class CartManager {
  constructor() {
    this.cart = this.loadCart();
    this.wishlist = this.loadWishlist();
    this.activePromo = null;
    this.promoCodes = {
      'LADESIO10': { type: 'percent', value: 10, description: '10% Privé Welcome Courtesy' },
      'ROYALE20': { type: 'percent', value: 20, description: '20% Royale Tier Exclusive' },
      'SWEETDESIO': { type: 'free_delivery', value: 99.00, description: 'Complimentary Artisanal Delivery' }
    };
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notify() {
    this.listeners.forEach(cb => cb(this.getSummary()));
  }

  getCurrentUserId() {
    try {
      if (typeof loyaltyStore !== 'undefined' && loyaltyStore && typeof loyaltyStore.getActiveUser === 'function') {
        const u = loyaltyStore.getActiveUser();
        if (u && u.id) return u.id;
      }
      const savedUid = localStorage.getItem('ladesio_active_user_id_v4');
      if (savedUid) return savedUid;
    } catch (e) {}
    return null;
  }

  getCartStorageKey(userId) {
    const uid = userId !== undefined ? userId : this.getCurrentUserId();
    return uid ? `ladesio_cart_user_${uid}` : 'ladesio_cart_guest';
  }

  getWishlistStorageKey(userId) {
    const uid = userId !== undefined ? userId : this.getCurrentUserId();
    return uid ? `ladesio_wishlist_user_${uid}` : 'ladesio_wishlist_guest';
  }

  loadCart(userId) {
    try {
      const uid = userId !== undefined ? userId : this.getCurrentUserId();
      const key = this.getCartStorageKey(uid);
      let saved = localStorage.getItem(key);
      if (!saved && uid) {
        saved = localStorage.getItem(CART_STORAGE_KEY);
      }
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load cart from storage', e);
      return [];
    }
  }

  saveCart(userId) {
    try {
      const uid = userId !== undefined ? userId : this.getCurrentUserId();
      const key = this.getCartStorageKey(uid);
      localStorage.setItem(key, JSON.stringify(this.cart));
      if (uid) {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
      }
    } catch (e) {
      console.error('Failed to save cart', e);
    }
    this.notify();
  }

  loadWishlist(userId) {
    try {
      const uid = userId !== undefined ? userId : this.getCurrentUserId();
      const key = this.getWishlistStorageKey(uid);
      let saved = localStorage.getItem(key);
      if (!saved && uid) {
        saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      }
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveWishlist(userId) {
    try {
      const uid = userId !== undefined ? userId : this.getCurrentUserId();
      const key = this.getWishlistStorageKey(uid);
      localStorage.setItem(key, JSON.stringify(this.wishlist));
      if (uid) {
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(this.wishlist));
      }
    } catch (e) {}
    this.notify();
  }

  onLogin(userId) {
    if (!userId) return;
    if (this.currentLoggedInUserId === userId) return;
    this.currentLoggedInUserId = userId;
    this.cart = this.loadCart(userId);
    this.wishlist = this.loadWishlist(userId);
    this.activePromo = null;
    this.notify();
  }

  onLogout(userId) {
    this.currentLoggedInUserId = null;
    const uid = userId !== undefined ? userId : this.getCurrentUserId();
    if (uid) {
      try {
        localStorage.setItem(this.getCartStorageKey(uid), JSON.stringify(this.cart));
        localStorage.setItem(this.getWishlistStorageKey(uid), JSON.stringify(this.wishlist));
      } catch (e) {}
    }
    this.cart = [];
    this.wishlist = [];
    this.activePromo = null;
    try {
      localStorage.removeItem('ladesio_cart_guest');
      localStorage.removeItem('ladesio_wishlist_guest');
      localStorage.removeItem(CART_STORAGE_KEY);
      localStorage.removeItem(WISHLIST_STORAGE_KEY);
    } catch (e) {}
    this.notify();
  }

  // Add Item to Cart
  addItem(item) {
    // Check if duplicate standard product exists
    const existingIndex = this.cart.findIndex(i => {
      if (item.isCustom) {
        return i.isCustom && i.customConfigKey === item.customConfigKey;
      }
      return i.id === item.id && JSON.stringify(i.options || {}) === JSON.stringify(item.options || {});
    });

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += (item.quantity || 1);
    } else {
      this.cart.push({
        uid: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        ...item,
        quantity: item.quantity || 1
      });
    }

    try {
      localStorage.removeItem('ladesio_last_placed_order');
    } catch (e) {}
    if (typeof window !== 'undefined' && window.checkoutManager) {
      window.checkoutManager.lastPlacedOrder = null;
      window.checkoutManager.currentStep = 1;
    }
    this.saveCart();
  }

  // Update item quantity
  updateQuantity(uid, delta) {
    const item = this.cart.find(i => i.uid === uid);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeItem(uid);
    } else {
      this.saveCart();
    }
  }

  // Remove item
  removeItem(uid) {
    this.cart = this.cart.filter(i => i.uid !== uid);
    this.saveCart();
  }

  // Clear cart
  clearCart() {
    this.cart = [];
    this.activePromo = null;
    this.saveCart();
  }

  // Wishlist toggle
  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    let added = false;
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
    } else {
      this.wishlist.push(productId);
      added = true;
    }
    this.saveWishlist();
    return added;
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  // Promo code
  applyPromo(code) {
    const cleanCode = (code || '').trim().toUpperCase();
    if (this.promoCodes[cleanCode]) {
      this.activePromo = {
        code: cleanCode,
        ...this.promoCodes[cleanCode]
      };
      this.notify();
      return { success: true, message: `Promo code ${cleanCode} applied!` };
    }
    return { success: false, message: 'Invalid promo code. Try LADESIO10 or SWEETDESIO' };
  }

  removePromo() {
    this.activePromo = null;
    this.notify();
  }

  // Calculations in INR
  getSummary() {
    const itemCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);

    const isBirthdayActive = (typeof loyaltyStore !== 'undefined' && typeof loyaltyStore.isBirthdayDiscountAvailable === 'function' && loyaltyStore.isBirthdayDiscountAvailable());
    const isBirthdayOrder = !!isBirthdayActive;

    let regularSubtotal = 0;
    this.cart.forEach(item => {
      const regularUnitPrice = Number(item.originalPrice || (item.isBirthdayDiscount ? Math.round(item.price / 0.7) : item.price) || 0);
      item.originalPrice = regularUnitPrice;
      item.price = regularUnitPrice;
      item.isBirthdayDiscount = false;
      item.birthdayDiscountAmount = 0;
      regularSubtotal += (regularUnitPrice * item.quantity);
    });

    let birthdayDiscount = 0;
    let birthdayDiscountItemName = '';

    // If birthday offer is active, apply 30% discount to ONLY ONE PRODUCT (1 single unit)
    if (isBirthdayOrder && this.cart.length > 0) {
      let chosenItem = null;
      let highestPrice = -1;
      this.cart.forEach(item => {
        if (item.originalPrice > highestPrice) {
          highestPrice = item.originalPrice;
          chosenItem = item;
        }
      });

      if (chosenItem && chosenItem.originalPrice > 0) {
        const discountAmount = Math.round(chosenItem.originalPrice * 0.30);
        birthdayDiscount = discountAmount;
        chosenItem.isBirthdayDiscount = true;
        chosenItem.birthdayDiscountAmount = discountAmount;
        birthdayDiscountItemName = chosenItem.name;
        if (chosenItem.quantity === 1) {
          chosenItem.price = chosenItem.originalPrice - discountAmount;
        }
      }
    }

    const subtotalAfterBirthday = Math.max(0, regularSubtotal - birthdayDiscount);

    const deliveryThreshold = 999.00;
    let standardDelivery = regularSubtotal > 0 ? ((regularSubtotal >= deliveryThreshold || subtotalAfterBirthday >= deliveryThreshold) ? 0.00 : 99.00) : 0.00;

    let promoDiscount = 0.00;
    if (this.activePromo) {
      if (this.activePromo.type === 'percent') {
        promoDiscount = Math.round((subtotalAfterBirthday * this.activePromo.value) / 100);
      } else if (this.activePromo.type === 'free_delivery') {
        standardDelivery = 0.00;
      }
    }

    const totalDiscount = birthdayDiscount + promoDiscount;
    const total = Math.max(0, regularSubtotal - totalDiscount + standardDelivery);

    return {
      items: this.cart,
      itemCount,
      subtotal: regularSubtotal,
      birthdayDiscount,
      birthdayDiscountItemName,
      promoDiscount,
      discount: totalDiscount,
      isBirthdayOrder,
      delivery: standardDelivery,
      total,
      activePromo: this.activePromo,
      wishlist: this.wishlist,
      freeDeliveryAway: Math.max(0, deliveryThreshold - subtotalAfterBirthday)
    };
  }
}

export const cartStore = new CartManager();
if (typeof window !== 'undefined') {
  window.cartStore = cartStore;
}
