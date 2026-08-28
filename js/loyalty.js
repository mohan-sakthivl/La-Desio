// LA DESIO - Privé Loyalty, Customer Profile, Saved Creations & Order History (INR Edition)

const PROFILE_KEY = 'ladesio_profile_v1';
const CREATIONS_KEY = 'ladesio_creations_v1';
const ORDERS_KEY = 'ladesio_orders_v1';

export class LoyaltyManager {
  constructor() {
    this.profile = this.loadProfile();
    this.creations = this.loadCreations();
    this.orders = this.loadOrders();
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
      name: 'Ananya Sharma',
      email: 'ananya.sharma@ladesio.com',
      phone: '+91 98201 44892',
      tier: 'Élite', // Amore, Élite, Royale
      points: 2450,
      nextTierPoints: 4000,
      joinedDate: 'November 2024',
      savedAddresses: [
        {
          id: 'addr_1',
          name: 'Ananya Sharma (Home)',
          address: 'Pali Hill, Bandra West, Apt 702',
          city: 'Mumbai',
          postal: '400050',
          country: 'India',
          phone: '+91 98201 44892',
          isDefault: true
        },
        {
          id: 'addr_2',
          name: 'Studio Atelier',
          address: 'Worli Sea Face, Tower B',
          city: 'Mumbai',
          postal: '400030',
          country: 'India',
          phone: '+91 98201 44892',
          isDefault: false
        }
      ]
    };

    try {
      const saved = localStorage.getItem(PROFILE_KEY);
      return saved ? { ...defaultProfile, ...JSON.parse(saved) } : defaultProfile;
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
        status: 'Delivered',
        statusColor: 'emerald',
        items: [
          { name: 'The Desio Royale Hamper', qty: 1, price: 2450 },
          { name: 'Velvet Noir', qty: 2, price: 495 }
        ],
        total: 3440,
        deliverySlot: 'Express Artisanal — 14 Feb, 6:00 PM',
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
    const newOrder = {
      id: orderId,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'Preparing in Atelier',
      statusColor: 'amber',
      ...orderData
    };

    this.orders.unshift(newOrder);
    this.saveOrders();

    // Add loyalty points (1 point per ₹10 spent)
    const pointsEarned = Math.round(orderData.total / 10);
    this.profile.points += pointsEarned;
    this.checkTierUpgrade();
    this.saveProfile();

    return newOrder;
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

  // Save new custom creation
  saveCustomCreation(creation) {
    const newCreation = {
      id: 'creation_' + Date.now(),
      createdDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      ...creation
    };

    this.creations.unshift(newCreation);
    this.saveCreations();
    return newCreation;
  }

  deleteCreation(id) {
    this.creations = this.creations.filter(c => c.id !== id);
    this.saveCreations();
  }

  getData() {
    return {
      profile: this.profile,
      creations: this.creations,
      orders: this.orders
    };
  }
}

export const loyaltyStore = new LoyaltyManager();
