// LA DESIO - Privé Loyalty, Customer Profile, Saved Creations & Order History (INR Edition)

const PROFILE_KEY = 'ladesio_profile_v2';
const CREATIONS_KEY = 'ladesio_creations_v1';
const ORDERS_KEY = 'ladesio_orders_v1';
const FRIENDS_KEY = 'ladesio_friends_v2';

export const DUMMY_FRIENDS = [
  {
    id: 'friend_chiara',
    name: 'Vinoth Kumar',
    handle: '@vinokutty',
    avatar: 'Assets/Profile/vinoth.jpeg',
    bio: 'Obsessed with Bronte pistachios, silky mascarpone, and delicate choux pastry.',
    tier: 'Royale Member',
    location: 'Trichy',
    creationsCount: 2,
    ordersCount: 24,
    creations: [
      {
        id: 'chiara_c1',
        name: 'Bronte Pistachio Oro Torte',
        recipe: 'Cheesecake + Bronte Pistachio + Pistachio Mousse + Hazelnuts + White Chocolate Silk',
        price: 545,
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80',
        createdDate: '18 Feb 2026',
        nutrition: { calories: 340, protein: '9g', carbs: '32g', fats: '20g' },
        config: {
          base: 'base-cheesecake',
          flavor: 'flavor-pistachio',
          filling: 'filling-pistachio-mousse',
          toppings: ['top-hazelnuts', 'top-gold-leaf'],
          sauce: 'sauce-white-chocolate',
          name: 'Bronte Pistachio Oro Torte'
        }
      },
      {
        id: 'chiara_c2',
        name: 'Espresso Amore Mousse',
        recipe: 'Genoese Sponge + Espresso Arabica + Vanilla Silk + Blueberries + Dark Drizzle',
        price: 465,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
        createdDate: '24 Feb 2026',
        nutrition: { calories: 290, protein: '7g', carbs: '36g', fats: '12g' },
        config: {
          base: 'base-cake',
          flavor: 'flavor-coffee',
          filling: 'filling-vanilla-cream',
          toppings: ['top-blueberries', 'top-gold-leaf'],
          sauce: 'sauce-dark-chocolate',
          name: 'Espresso Amore Mousse'
        }
      }
    ]
  },
  {
    id: 'friend_vikram',
    name: 'Tharun R K',
    handle: '@tharunchocoboy',
    avatar: 'Assets/Profile/tharun.jpeg',
    bio: 'Sports nutritionist & dessert lover. Formulating 35g+ whey isolate brownies and guilt-free low-carb Basque cheesecakes.',
    tier: 'Élite Member',
    location: 'Bengaluru, India',
    creationsCount: 2,
    ordersCount: 19,
    creations: [
      {
        id: 'vikram_c1',
        name: '35g Whey Noir Power Brownie',
        recipe: 'Whey Brownie (30g P) + Pure CFM Whey (+15g P) + Valrhona Ganache + Protein Crisps (+8g P)',
        price: 545,
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
        createdDate: '01 Mar 2026',
        nutrition: { calories: 340, protein: '35g', carbs: '18g', fats: '12g' },
        config: {
          base: 'base-whey-brownie',
          flavor: 'flavor-whey-isolate',
          filling: 'filling-chocolate-ganache',
          toppings: ['top-protein-crisps', 'top-almonds'],
          sauce: 'sauce-dark-chocolate',
          name: '35g Whey Noir Power Brownie'
        }
      },
      {
        id: 'vikram_c2',
        name: 'Pro-Basque Vanilla Fuel Gateau',
        recipe: 'Pro-Basque Cheesecake (25g P) + Bourbon Vanilla + Vanilla Silk + Chia Almond Crunch',
        price: 535,
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
        createdDate: '04 Mar 2026',
        nutrition: { calories: 310, protein: '28g', carbs: '14g', fats: '15g' },
        config: {
          base: 'base-protein-cheesecake',
          flavor: 'flavor-vanilla',
          filling: 'filling-vanilla-cream',
          toppings: ['top-chia-almond', 'top-strawberries'],
          sauce: 'sauce-white-chocolate',
          name: 'Pro-Basque Vanilla Fuel Gateau'
        }
      }
    ]
  },
  {
    id: 'friend_elena',
    name: 'Jeneefar',
    handle: '@jeneefarking',
    avatar: 'Assets/Profile/jeneefar.jpeg',
    bio: 'Luxury food stylist & berry devotee. If it doesn\'t have alpine wild strawberries, Champagne cream, and 24k gold leaf, count me out!',
    tier: 'Royale Member',
    location: 'Kerala',
    creationsCount: 2,
    ordersCount: 38,
    creations: [
      {
        id: 'elena_c1',
        name: 'Wild Fragola Gold Crown Tart',
        recipe: 'Cheesecake + Wild Strawberry + Berry Compote + Hand-Cut Strawberries + 24k Gold Flourish',
        price: 595,
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
        createdDate: '28 Feb 2026',
        nutrition: { calories: 295, protein: '7g', carbs: '34g', fats: '14g' },
        config: {
          base: 'base-cheesecake',
          flavor: 'flavor-strawberry',
          filling: 'filling-berry-compote',
          toppings: ['top-strawberries', 'top-gold-leaf'],
          sauce: 'sauce-strawberry',
          name: 'Wild Fragola Gold Crown Tart'
        }
      },
      {
        id: 'elena_c2',
        name: 'Caramello Étoile Brioche Waffle',
        recipe: 'Belgian Waffle + Salted Caramel + Caramel Confit + Roasted Piedmont Hazelnuts + Fleur de Sel',
        price: 490,
        image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80',
        createdDate: '06 Mar 2026',
        nutrition: { calories: 360, protein: '6g', carbs: '42g', fats: '16g' },
        config: {
          base: 'base-waffle',
          flavor: 'flavor-caramel',
          filling: 'filling-caramel-confit',
          toppings: ['top-hazelnuts', 'top-choc-chips'],
          sauce: 'sauce-caramel',
          name: 'Caramello Étoile Brioche Waffle'
        }
      }
    ]
  }
];

export class LoyaltyManager {
  constructor() {
    this.profile = this.loadProfile();
    this.creations = this.loadCreations();
    this.orders = this.loadOrders();
    this.friends = this.loadFriends();
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notify() {
    this.listeners.forEach(cb => cb(this.getData()));
  }

  loadProfile() {
    const defaultProfile = {
      name: 'Roody Cruz',
      avatar: 'Assets/Profile/roody.jpg',
      bio: 'Haute patisserie enthusiast & dark cacao devotee. Passionate about custom artisanal desserts, authentic Bronte pistachio, and high-protein creations in Chennai.',
      email: 'theroodyy@gmail.com',
      phone: '+91 93453 96700',
      city: 'Chennai',
      tier: 'Élite', // Amore, Élite, Royale
      points: 2450,
      nextTierPoints: 4000,
      joinedDate: 'August 2026',
      savedAddresses: [
        {
          id: 'addr_1',
          name: 'Roody Cruz (Home)',
          address: 'No.60/A Gnanamani St,West Jafferkhanpet',
          city: 'Chennai',
          postal: '6000 83',
          country: 'India',
          phone: '+91 93453 96700',
          isDefault: true
        },
        {
          id: 'addr_2',
          name: 'SLA INSTITUTE - KK NAGAR',
          address: 'P.T Rajan Salai, KK Nagar',
          city: 'Chennai',
          postal: '6000 83',
          country: 'India',
          phone: '+91 98201 44892',
          isDefault: false
        }
      ]
    };

    try {
      const saved = localStorage.getItem(PROFILE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.avatar && parsed.avatar.includes('images.unsplash.com/photo-1535713875002-d1d0cf377fde')) {
          parsed.avatar = defaultProfile.avatar;
        }
        return { ...defaultProfile, ...parsed };
      }
      return defaultProfile;
    } catch (e) {
      return defaultProfile;
    }
  }

  saveProfile() {
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(this.profile));
    } catch (e) {}
    this.notify();
  }

  updateProfile(data) {
    this.profile = { ...this.profile, ...data };
    this.saveProfile();
    return this.profile;
  }

  loadFriends() {
    try {
      const saved = localStorage.getItem(FRIENDS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return DUMMY_FRIENDS.map(df => {
          const matched = parsed.find(f => f.id === df.id);
          if (!matched) return df;
          if (!matched.avatar || matched.avatar.includes('images.unsplash.com')) {
            matched.avatar = df.avatar;
          }
          if (matched.name === 'Chiara Rossi' || matched.name === 'Dr. Vikram Malhotra' || matched.name === 'Elena De Luca') {
            matched.name = df.name;
            matched.handle = df.handle;
            matched.location = df.location;
          }
          return { ...df, ...matched };
        });
      }
      return DUMMY_FRIENDS;
    } catch (e) {
      return DUMMY_FRIENDS;
    }
  }

  getFriend(id) {
    return this.friends.find(f => f.id === id);
  }

  saveFriends() {
    try {
      localStorage.setItem(FRIENDS_KEY, JSON.stringify(this.friends));
    } catch (e) {}
    this.notify();
  }

  updateFriend(id, data) {
    const idx = this.friends.findIndex(f => f.id === id);
    if (idx !== -1) {
      this.friends[idx] = { ...this.friends[idx], ...data };
      this.saveFriends();
      return this.friends[idx];
    }
    return null;
  }

  loadCreations() {
    const defaultCreations = [
      {
        id: 'creation_init_1',
        name: 'Nocturne Pistachio',
        createdDate: '12 Jan 2025',
        recipe: 'Fudge Brownie + Bronte Pistachio + Pistachio Mousse + Hazelnuts + Dark Chocolate Drizzle',
        price: 525,
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
        config: {
          base: 'base-brownie',
          flavor: 'flavor-pistachio',
          filling: 'filling-pistachio-mousse',
          toppings: ['top-hazelnuts', 'top-gold-leaf'],
          sauce: 'sauce-dark-chocolate',
          name: 'Nocturne Pistachio'
        }
      },
      {
        id: 'creation_init_2',
        name: 'Wild Fragola Tart',
        createdDate: '04 Feb 2025',
        recipe: 'Cheesecake + Wild Strawberry + Berry Compote + Strawberries + Strawberry Purée',
        price: 515,
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
        config: {
          base: 'base-cheesecake',
          flavor: 'flavor-strawberry',
          filling: 'filling-berry-compote',
          toppings: ['top-strawberries', 'top-blueberries'],
          sauce: 'sauce-strawberry',
          name: 'Wild Fragola Tart'
        }
      }
    ];

    try {
      const saved = localStorage.getItem(CREATIONS_KEY);
      return saved ? JSON.parse(saved) : defaultCreations;
    } catch (e) {
      return defaultCreations;
    }
  }

  saveCreations() {
    try {
      localStorage.setItem(CREATIONS_KEY, JSON.stringify(this.creations));
    } catch (e) {}
    this.notify();
  }

  loadOrders() {
    const defaultOrders = [
      {
        id: 'DESIO-8942',
        date: '14 Feb 2025',
        time: '18:30',
        status: 'Delivered',
        statusColor: 'emerald',
        items: [
          {
            name: 'The Desio Royale Hamper',
            qty: 1,
            price: 2450,
            image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
            subtitle: 'Curated 6-Piece Signature Collection'
          },
          {
            name: 'Velvet Noir',
            qty: 2,
            price: 495,
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
            subtitle: 'Dark Chocolate Mousse & Piedmont Hazelnut'
          }
        ],
        subtotal: 3440,
        discount: 0,
        deliveryFee: 0,
        total: 3440,
        paymentMethod: 'UPI / Google Pay',
        address: {
          fullName: 'Roody Cruz',
          phone: '+91 93453 96700',
          street: 'No.60/A Gnanamani St, West Jafferkhanpet',
          city: 'Chennai',
          postal: '6000 83'
        },
        deliverySlot: 'Express Artisanal — 14 Feb, 6:00 PM (Chennai)',
        trackingNumber: 'IN-EXP-8942-DESIO'
      }
    ];

    try {
      const saved = localStorage.getItem(ORDERS_KEY);
      return saved ? JSON.parse(saved) : defaultOrders;
    } catch (e) {
      return defaultOrders;
    }
  }

  saveOrders() {
    try {
      localStorage.setItem(ORDERS_KEY, JSON.stringify(this.orders));
    } catch (e) {}
    this.notify();
  }

  // Add newly placed order
  addOrder(orderData) {
    const orderId = 'DESIO-' + Math.floor(1000 + Math.random() * 9000);
    const now = new Date();
    const newOrder = {
      id: orderId,
      date: now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
      status: 'Preparing in Atelier',
      statusColor: 'amber',
      items: (orderData.items || []).map(i => ({
        name: i.name || 'Artisanal Creation',
        qty: i.qty || i.quantity || 1,
        price: i.price || 0,
        image: i.image || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
        subtitle: i.subtitle || (i.options?.toppings ? i.options.toppings.join(', ') : ''),
        isCustom: !!i.isCustom,
        options: i.options || null,
        customConfigKey: i.customConfigKey || null
      })),
      subtotal: orderData.subtotal || orderData.total || 0,
      discount: orderData.discount || 0,
      deliveryFee: orderData.deliveryFee || 0,
      total: orderData.total || 0,
      paymentMethod: orderData.paymentMethod || 'Credit / Debit Card',
      address: orderData.address || {
        fullName: 'Patisserie Client',
        phone: '+91 93453 96700',
        street: 'West Jafferkhanpet',
        city: 'Chennai'
      },
      deliverySlot: orderData.deliverySlot || 'Express Artisanal — Within 45 Mins (Chennai)',
      trackingNumber: orderData.trackingNumber || ('IN-EXP-' + Math.floor(1000 + Math.random() * 9000) + '-DESIO'),
      createdAt: now.toISOString()
    };

    this.orders.unshift(newOrder);
    this.saveOrders();

    // Add loyalty points (1 point per ₹10 spent)
    const pointsEarned = Math.round(newOrder.total / 10);
    this.profile.points += pointsEarned;
    this.checkTierUpgrade();
    this.saveProfile();

    return newOrder;
  }

  getOrder(id) {
    return this.orders.find(o => o.id === id);
  }

  deleteOrder(id) {
    this.orders = this.orders.filter(o => o.id !== id);
    this.saveOrders();
  }

  checkTierUpgrade() {
    if (this.profile.points >= 5000) {
      this.profile.tier = 'Royale';
    } else if (this.profile.points >= 2000) {
      this.profile.tier = 'Élite';
    } else {
      this.profile.tier = 'Amore';
    }
  }

  // Save new custom creation with deduplication and validation
  saveCustomCreation(creation) {
    const existingIndex = this.creations.findIndex(c => 
      c.name.trim().toLowerCase() === (creation.name || '').trim().toLowerCase() &&
      JSON.stringify(c.config) === JSON.stringify(creation.config)
    );

    const fullCreation = {
      name: creation.name || 'My La Desio Creation',
      createdDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      recipe: creation.recipe || 'Artisanal Custom Patisserie Recipe',
      price: creation.price || 495,
      image: creation.image || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
      nutrition: creation.nutrition || { calories: 340, protein: 5, carbs: 36, fats: 14 },
      config: creation.config || {}
    };

    if (existingIndex >= 0) {
      this.creations[existingIndex] = {
        ...this.creations[existingIndex],
        ...fullCreation,
        updatedDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
      };
      this.saveCreations();
      return this.creations[existingIndex];
    } else {
      const newCreation = {
        id: 'creation_' + Date.now(),
        ...fullCreation
      };
      this.creations.unshift(newCreation);
      this.saveCreations();
      return newCreation;
    }
  }

  deleteCreation(id) {
    this.creations = this.creations.filter(c => c.id !== id);
    this.saveCreations();
  }

  getData() {
    return {
      profile: this.profile,
      creations: this.creations,
      orders: this.orders,
      friends: this.friends
    };
  }
}

export const loyaltyStore = new LoyaltyManager();
if (typeof window !== 'undefined') {
  window.loyaltyStore = loyaltyStore;
}
