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

  loadCart() {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load cart from storage', e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
    this.notify();
  }

  loadWishlist() {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveWishlist() {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(this.wishlist));
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
    const subtotal = this.cart.reduce((sum, item) => {
      const unitPrice = item.price || 0;
      return sum + (unitPrice * item.quantity);
    }, 0);

    const deliveryThreshold = 999.00;
    let standardDelivery = subtotal > 0 ? (subtotal >= deliveryThreshold ? 0.00 : 99.00) : 0.00;

    let discount = 0.00;
    if (this.activePromo) {
      if (this.activePromo.type === 'percent') {
        discount = (subtotal * this.activePromo.value) / 100;
      } else if (this.activePromo.type === 'free_delivery') {
        standardDelivery = 0.00;
      }
    }

    const total = Math.max(0, subtotal - discount + standardDelivery);

    return {
      items: this.cart,
      itemCount,
      subtotal,
      discount,
      delivery: standardDelivery,
      total,
      activePromo: this.activePromo,
      wishlist: this.wishlist,
      freeDeliveryAway: Math.max(0, deliveryThreshold - subtotal)
    };
  }
}

export const cartStore = new CartManager();
