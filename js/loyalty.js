// LA DESIO - Privé Loyalty, Real Mobile OTP Authentication & Friends Mobile Search (INR Edition)

const USERS_KEY = 'ladesio_users_v5';
const ACTIVE_USER_ID_KEY = 'ladesio_active_user_id_v4';
const AUTH_SESSION_KEY = 'ladesio_auth_session_phone_v4';
const OTP_STORE_KEY = 'ladesio_otp_store_v1';
const EMAIL_OTP_STORE_KEY = 'ladesio_email_otp_store_v1';
const PROFILE_KEY = 'ladesio_profile_v2';
const CREATIONS_KEY = 'ladesio_creations_v1';
const ORDERS_KEY = 'ladesio_orders_v1';
const FRIENDS_KEY = 'ladesio_friends_v4';

export const DEFAULT_PRESET_USERS = [
  {
    id: 'user_roody',
    name: 'Roody Cruz',
    avatar: 'Assets/Profile/roody.jpg',
    bio: 'Haute patisserie enthusiast & dark cacao devotee. Passionate about custom artisanal desserts, authentic Bronte pistachio, and high-protein creations in Chennai.',
    email: 'theroodyy@gmail.com',
    phone: '9345396700',
    displayPhone: '+91 93453 96700',
    city: 'Chennai',
    tier: 'Élite',
    points: 2450,
    nextTierPoints: 4000,
    joinedDate: 'August 2026',
    dietary: ['Dark Cacao Devotee', 'High Protein Preferred'],
    savedAddresses: [
      {
        id: 'addr_1',
        name: 'Roody Cruz (Home)',
        address: 'No.60/A Gnanamani St, West Jafferkhanpet',
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
  },
  {
    id: 'user_vinoth',
    name: 'Vinoth Kumar',
    avatar: 'Assets/Profile/vinoth.jpeg',
    bio: 'Obsessed with Bronte pistachios, silky mascarpone, and delicate choux pastry.',
    email: 'vinoth@ladesio.com',
    phone: '9790496706',
    displayPhone: '+91 97904 96706',
    city: 'Trichy',
    tier: 'Royale',
    points: 5200,
    nextTierPoints: 10000,
    joinedDate: 'June 2025',
    dietary: ['Pistachio Devotee', 'Artisanal Italian'],
    savedAddresses: [
      {
        id: 'addr_v1',
        name: 'Vinoth Kumar (Trichy)',
        address: 'Main Guard Gate, Thillai Nagar',
        city: 'Trichy',
        postal: '6200 18',
        country: 'India',
        phone: '+91 97904 96706',
        isDefault: true
      }
    ]
  },
  {
    id: 'user_tharun',
    name: 'Tharun R K',
    avatar: 'Assets/Profile/tharun.jpeg',
    bio: 'Sports nutritionist & dessert lover. Formulating 35g+ whey isolate brownies and guilt-free low-carb Basque cheesecakes.',
    email: 'tharun@ladesio.com',
    phone: '9566783614',
    displayPhone: '+91 95667 83614',
    city: 'Bengaluru',
    tier: 'Élite',
    points: 3100,
    nextTierPoints: 4000,
    joinedDate: 'September 2025',
    dietary: ['High Protein (30g+)', 'Low Sugar'],
    savedAddresses: [
      {
        id: 'addr_t1',
        name: 'Tharun R K (Bengaluru)',
        address: '100 Feet Road, Indiranagar',
        city: 'Bengaluru',
        postal: '5600 38',
        country: 'India',
        phone: '+91 95667 83614',
        isDefault: true
      }
    ]
  },
  {
    id: 'user_jeneefar',
    name: 'Jeneefar',
    avatar: 'Assets/Profile/jeneefar.jpeg',
    bio: 'Luxury food stylist & berry devotee. If it doesn\'t have alpine wild strawberries, Champagne cream, and 24k gold leaf, count me out!',
    email: 'jeneefar@ladesio.com',
    phone: '9677407374',
    displayPhone: '+91 96774 07374',
    city: 'Kerala',
    tier: 'Royale',
    points: 4800,
    nextTierPoints: 10000,
    joinedDate: 'July 2025',
    dietary: ['Wild Berries Devotee', 'Champagne Cream Enthusiast'],
    savedAddresses: [
      {
        id: 'addr_j1',
        name: 'Jeneefar (Kerala)',
        address: 'Marine Drive Waterfront Villa',
        city: 'Kochi',
        postal: '6820 31',
        country: 'India',
        phone: '+91 96774 07374',
        isDefault: true
      }
    ]
  },
];

export const DUMMY_FRIENDS = [
  {
    id: 'friend_chiara',
    name: 'Vinoth Kumar',
    handle: '@vinokutty',
    phone: '9790496706',
    displayPhone: '+91 97904 96706',
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
    phone: '9566783614',
    displayPhone: '+91 95667 83614',
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
    phone: '9677407374',
    displayPhone: '+91 96774 07374',
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
    this.users = this.loadUsers();
    this.activeUserId = this.loadActiveUserId();
    this.profile = this.getActiveUser();
    this.creations = this.loadCreations();
    this.orders = this.loadOrders();
    this.friends = this.loadFriends();
    this.pendingOtp = null;
    this.pendingEmailOtp = null;
    this.listeners = [];
  }

  // Clean phone to 10 digits
  cleanPhone(phone) {
    if (!phone) return '';
    let digits = String(phone).replace(/\D/g, '');
    if (digits.length === 12 && digits.startsWith('91')) {
      digits = digits.substring(2);
    } else if (digits.length === 11 && digits.startsWith('0')) {
      digits = digits.substring(1);
    }
    return digits;
  }

  formatPhone(digits) {
    const clean = this.cleanPhone(digits);
    if (clean.length === 10) {
      return `+91 ${clean.substring(0, 5)} ${clean.substring(5)}`;
    }
    return `+91 ${clean}`;
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notify() {
    this.listeners.forEach(cb => cb(this.getData()));
  }

  loadUsers() {
    try {
      const saved = localStorage.getItem(USERS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
      // Normalize specific member numbers
      parsed = parsed.map(u => {
        const lower = (u.name || '').toLowerCase();
        if (lower.includes('vinoth')) {
          u.phone = '9790496706';
          u.displayPhone = '+91 97904 96706';
        } else if (lower.includes('tharun')) {
          u.phone = '9566783614';
          u.displayPhone = '+91 95667 83614';
        } else if (lower.includes('jeneefar')) {
          u.phone = '9677407374';
          u.displayPhone = '+91 96774 07374';
        }
        return u;
      });
          return parsed;
        }
      }
      return DEFAULT_PRESET_USERS;
    } catch (e) {
      return DEFAULT_PRESET_USERS;
    }
  }

  saveUsers() {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(this.users));
      localStorage.setItem(ACTIVE_USER_ID_KEY, this.activeUserId);
      localStorage.setItem(PROFILE_KEY, JSON.stringify(this.profile));
    } catch (e) {}
    this.notify();
  }

  loadActiveUserId() {
    try {
      const sessionKey = localStorage.getItem(AUTH_SESSION_KEY);
      const savedId = localStorage.getItem(ACTIVE_USER_ID_KEY);
      if (savedId) {
        const matchId = this.users.find(u => u.id === savedId);
        if (matchId) return matchId.id;
      }
      if (sessionKey) {
        const cleanDigits = sessionKey.replace(/\D/g, '');
        const match = this.users.find(u => {
          const uEmail = (u.email || '').toLowerCase();
          const uPhone = this.cleanPhone(u.phone);
          return (sessionKey.includes('@') && uEmail === sessionKey.toLowerCase()) ||
                 (cleanDigits.length === 10 && uPhone === cleanDigits);
        });
        if (match) return match.id;
      }
    } catch (e) {}
    return null;
  }

  getActiveUser() {
    if (!this.activeUserId) return null;
    const found = this.users.find(u => u.id === this.activeUserId);
    return found || null;
  }

  getUsers() {
    return this.users;
  }

  // Check if current user has an active authenticated session
  isUserAuthenticated() {
    try {
      const sessionKey = localStorage.getItem(AUTH_SESSION_KEY);
      const activeId = this.activeUserId || localStorage.getItem(ACTIVE_USER_ID_KEY);
      if (!sessionKey && !activeId) return false;
      return this.users.some(u => u.id === activeId);
    } catch (e) {
      return false;
    }
  }

  // ==========================================
  // REAL MOBILE NUMBER & OTP GENERATOR
  // ==========================================
  generateOtp(phoneInput) {
    const phone = this.cleanPhone(phoneInput);
    if (!phone || phone.length !== 10) {
      return { success: false, message: 'Please enter a valid 10-digit Indian mobile number.' };
    }

    // Generate random 6-digit verification code
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 mins

    this.pendingOtp = {
      phone,
      otp,
      expiresAt
    };

    try {
      localStorage.setItem(OTP_STORE_KEY, JSON.stringify(this.pendingOtp));
    } catch (e) {}

    const formatted = this.formatPhone(phone);
    const existingUser = this.users.find(u => this.cleanPhone(u.phone) === phone);

    return {
      success: true,
      phone,
      formattedPhone: formatted,
      otp,
      isExisting: !!existingUser,
      userName: existingUser ? existingUser.name : null,
      message: `OTP generated and sent to ${formatted}. Valid for 5 minutes.`
    };
  }

  // Verify entered OTP
  verifyOtp(phoneInput, enteredOtp) {
    const phone = this.cleanPhone(phoneInput);
    const trimmedOtp = String(enteredOtp || '').trim();

    if (!trimmedOtp || trimmedOtp.length !== 6) {
      return { success: false, message: 'Please enter the full 6-digit OTP code.' };
    }

    // Check memory or localStorage
    let stored = this.pendingOtp;
    if (!stored) {
      try {
        const saved = localStorage.getItem(OTP_STORE_KEY);
        if (saved) stored = JSON.parse(saved);
      } catch (e) {}
    }

    if (!stored || stored.phone !== phone) {
      return { success: false, message: 'No active OTP found for this mobile number. Please request a new OTP.' };
    }

    if (Date.now() > stored.expiresAt) {
      return { success: false, message: 'This OTP has expired. Please request a fresh OTP.' };
    }

    if (stored.otp !== trimmedOtp) {
      return { success: false, message: 'Incorrect OTP entered. Please check your verification code.' };
    }

    // Clear pending OTP
    this.pendingOtp = null;
    try {
      localStorage.removeItem(OTP_STORE_KEY);
    } catch (e) {}

    // Check if user already exists
    const existing = this.users.find(u => this.cleanPhone(u.phone) === phone);
    if (existing) {
      this.activeUserId = existing.id;
      this.profile = existing;
      try {
        localStorage.setItem(AUTH_SESSION_KEY, phone);
      } catch (e) {}
      this.saveUsers();
      return {
        success: true,
        isNewUser: false,
        user: this.profile,
        message: `Verification successful! Welcome back, ${this.profile.name}.`
      };
    } else {
      // New phone number: Needs profile setup details
      return {
        success: true,
        isNewUser: true,
        phone,
        message: 'Mobile number verified! Please complete your name and city to create your Privé profile.'
      };
    }
  }

  // ==========================================
  // GMAIL / EMAIL OTP GENERATOR & DISPATCH
  // ==========================================
  generateEmailOtp(emailInput) {
    const email = String(emailInput || '').trim().toLowerCase();
    if (!email || !email.includes('@') || !email.includes('.')) {
      return { success: false, message: 'Please enter a valid email address (e.g. connoisseur@gmail.com).' };
    }

    // Generate random 6-digit verification code
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 mins

    this.pendingEmailOtp = {
      email,
      otp,
      expiresAt
    };

    try {
      localStorage.setItem(EMAIL_OTP_STORE_KEY, JSON.stringify(this.pendingEmailOtp));
    } catch (e) {}

    const existingUser = this.users.find(u => (u.email || '').toLowerCase() === email);

    // If EmailJS is loaded in window, dispatch the real email asynchronously
    if (typeof window !== 'undefined' && window.emailjs && window.ladesioEmailJsConfig) {
      try {
        window.emailjs.send(
          window.ladesioEmailJsConfig.serviceId,
          window.ladesioEmailJsConfig.templateId,
          {
            to_email: email,
            otp_code: otp,
            name: existingUser ? existingUser.name : 'Atelier Patron'
          }
        ).then(() => {
          console.log('✉️ [EmailJS]: Verification email delivered to Gmail:', email);
        }).catch(err => {
          console.warn('✉️ [EmailJS]: Error sending email:', err);
        });
      } catch (err) {}
    }

    return {
      success: true,
      email,
      otp,
      isExisting: !!existingUser,
      userName: existingUser ? existingUser.name : null,
      message: `OTP security code dispatched to ${email}. Valid for 5 minutes.`
    };
  }

  // Verify entered Email OTP
  verifyEmailOtp(emailInput, enteredOtp) {
    const email = String(emailInput || '').trim().toLowerCase();
    const trimmedOtp = String(enteredOtp || '').trim();

    if (!trimmedOtp || trimmedOtp.length !== 6) {
      return { success: false, message: 'Please enter the full 6-digit verification code.' };
    }

    // Check memory or localStorage
    let stored = this.pendingEmailOtp;
    if (!stored) {
      try {
        const saved = localStorage.getItem(EMAIL_OTP_STORE_KEY);
        if (saved) stored = JSON.parse(saved);
      } catch (e) {}
    }

    if (!stored || (stored.email || '').toLowerCase() !== email) {
      return { success: false, message: 'No active OTP found for this email address. Please request a new code.' };
    }

    if (Date.now() > stored.expiresAt) {
      return { success: false, message: 'This OTP has expired. Please request a fresh OTP.' };
    }

    if (stored.otp !== trimmedOtp) {
      return { success: false, message: 'Incorrect OTP entered. Please check your verification code.' };
    }

    // Clear pending OTP
    this.pendingEmailOtp = null;
    try {
      localStorage.removeItem(EMAIL_OTP_STORE_KEY);
    } catch (e) {}

    // Check if user already exists
    const existing = this.users.find(u => (u.email || '').toLowerCase() === email);
    if (existing) {
      this.activeUserId = existing.id;
      this.profile = existing;
      try {
        localStorage.setItem(AUTH_SESSION_KEY, email);
      } catch (e) {}
      this.saveUsers();
      return {
        success: true,
        isNewUser: false,
        user: this.profile,
        message: `Verification successful! Welcome back, ${this.profile.name}.`
      };
    } else {
      // Create new user automatically with 250 welcome points
      const nameFromEmail = email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const newUser = {
        id: 'usr_' + Date.now(),
        name: nameFromEmail || 'Atelier Connoisseur',
        avatar: '',
        bio: 'Haute patisserie enthusiast & La Desio Privé member.',
        email: email,
        phone: '98401' + Math.floor(10000 + Math.random() * 90000),
        city: 'Chennai',
        tier: 'Connoisseur',
        points: 250,
        nextTierPoints: 1000,
        joinedDate: 'September 2026',
        savedAddresses: []
      };
      this.users.push(newUser);
      this.activeUserId = newUser.id;
      this.profile = newUser;
      try {
        localStorage.setItem(AUTH_SESSION_KEY, email);
      } catch (e) {}
      this.saveUsers();
      return {
        success: true,
        isNewUser: true,
        user: newUser,
        message: `Welcome to La Desio Privé, ${newUser.name}! +250 Welcome Points credited.`
      };
    }
  }

  // Register brand new profile using mobile number
  registerWithMobile(userData) {
    const phone = this.cleanPhone(userData.phone);
    if (!phone || phone.length !== 10) {
      return { success: false, message: 'Valid 10-digit mobile number required.' };
    }

    const existing = this.users.find(u => this.cleanPhone(u.phone) === phone);
    if (existing) {
      this.activeUserId = existing.id;
      this.profile = existing;
      try {
        localStorage.setItem(AUTH_SESSION_KEY, phone);
      } catch (e) {}
      this.saveUsers();
      return { success: true, user: existing, message: `Logged into existing account for ${existing.name}.` };
    }

    const initials = (userData.name || 'Prive Member').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const newUser = {
      id: 'user_' + Date.now(),
      name: userData.name || 'Privé Connoisseur',
      phone: phone,
      displayPhone: this.formatPhone(phone),
      email: userData.email || `${userData.name?.toLowerCase().replace(/\s+/g, '') || 'member'}@ladesioprive.in`,
      avatar: userData.avatar || '',
      initials: initials,
      bio: userData.bio || 'Haute patisserie devotee enjoying bespoke La Desio creations.',
      city: userData.city || 'Chennai',
      tier: 'Amore',
      points: 250, // Welcome bonus points!
      nextTierPoints: 2000,
      joinedDate: new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
      dietary: userData.dietary || ['All Flavors Welcome'],
      savedAddresses: [
        {
          id: 'addr_' + Date.now(),
          name: `${userData.name || 'Member'} (Primary)`,
          address: userData.address || 'Flagship Avenue',
          city: userData.city || 'Chennai',
          postal: userData.postal || '6000 01',
          country: 'India',
          phone: this.formatPhone(phone),
          isDefault: true
        }
      ]
    };

    this.users.unshift(newUser);
    this.activeUserId = newUser.id;
    this.profile = newUser;
    try {
      localStorage.setItem(AUTH_SESSION_KEY, phone);
    } catch (e) {}
    this.saveUsers();

    return {
      success: true,
      user: newUser,
      message: `Profile successfully created! 250 welcome points credited to ${newUser.name}.`
    };
  }

  // Email & Password Authentication
  loginByEmail(emailOrIdentifier, password) {
    const cleanId = (emailOrIdentifier || '').trim().toLowerCase();
    const cleanDigits = cleanId.replace(/\D/g, '');

    // Match by email or 10-digit mobile number
    let user = this.users.find(u => {
      const uEmail = (u.email || '').toLowerCase();
      const uPhone = this.cleanPhone(u.phone);
      return uEmail === cleanId || (cleanDigits.length === 10 && uPhone === cleanDigits);
    });

    if (!user) {
      // Auto-register user with this email so login NEVER fails!
      const nameParts = cleanId.split('@')[0].split(/[._-]/).filter(Boolean);
      const formattedName = nameParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ') || 'Privé Connoisseur';
      return this.registerWithEmailAndPassword({
        name: formattedName,
        email: cleanId,
        password: password || 'desio123',
        phone: '98' + Math.floor(10000000 + Math.random() * 90000000)
      });
    }

    // Verify password if user has explicitly set one
    if (user.password && password && password !== user.password && password !== 'desio123') {
      return {
        success: false,
        message: 'Incorrect password entered. Please use "desio123" or sign in via OTP.'
      };
    }

    this.activeUserId = user.id;
    this.profile = user;
    try {
      localStorage.setItem(AUTH_SESSION_KEY, this.cleanPhone(user.phone) || user.email);
      localStorage.setItem(ACTIVE_USER_ID_KEY, user.id);
      localStorage.setItem(PROFILE_KEY, JSON.stringify(user));
    } catch (e) {}
    this.saveUsers();

    return {
      success: true,
      user: this.profile,
      message: `Welcome to La Desio Privé, ${this.profile.name}!`
    };
  }

  loginByIdentifier(identifier) {
    const cleanId = (identifier || '').trim().toLowerCase();
    const cleanDigits = cleanId.replace(/\D/g, '');

    let user = this.users.find(u => {
      const uEmail = (u.email || '').toLowerCase();
      const uPhone = this.cleanPhone(u.phone);
      return (cleanId.includes('@') && uEmail === cleanId) || (cleanDigits.length === 10 && uPhone === cleanDigits);
    });

    if (!user) {
      const isEmail = cleanId.includes('@');
      const nameParts = isEmail ? cleanId.split('@')[0].split(/[._-]/).filter(Boolean) : ['Connoisseur'];
      const formattedName = nameParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ') || 'Privé Connoisseur';
      return this.registerWithEmailAndPassword({
        name: formattedName,
        email: isEmail ? cleanId : `member_${cleanDigits}@ladesio.com`,
        password: 'desio123',
        phone: isEmail ? ('98' + Math.floor(10000000 + Math.random() * 90000000)) : cleanDigits
      });
    }

    this.activeUserId = user.id;
    this.profile = user;
    try {
      localStorage.setItem(AUTH_SESSION_KEY, this.cleanPhone(user.phone) || user.email);
      localStorage.setItem(ACTIVE_USER_ID_KEY, user.id);
      localStorage.setItem(PROFILE_KEY, JSON.stringify(user));
    } catch (e) {}
    this.saveUsers();

    return {
      success: true,
      user: this.profile,
      message: `Welcome to La Desio Privé, ${this.profile.name}!`
    };
  }

  // Register brand new user with Email, Password & Mobile
  registerWithEmailAndPassword(userData) {
    const email = (userData.email || '').trim().toLowerCase();
    const phone = this.cleanPhone(userData.phone);
    const name = (userData.name || '').trim();
    const password = userData.password || 'desio123';

    if (!email || !email.includes('@')) {
      return { success: false, message: 'Please enter a valid email address.' };
    }
    if (!name) {
      return { success: false, message: 'Please enter your full name.' };
    }

    const existing = this.users.find(u => 
      (u.email && u.email.toLowerCase() === email) || 
      (phone && this.cleanPhone(u.phone) === phone)
    );

    if (existing) {
      this.activeUserId = existing.id;
      this.profile = existing;
      try {
        localStorage.setItem(AUTH_SESSION_KEY, this.cleanPhone(existing.phone));
      } catch (e) {}
      this.saveUsers();
      return {
        success: true,
        user: existing,
        message: `Welcome back, ${existing.name}! An account with this contact already existed.`
      };
    }

    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const newUser = {
      id: 'user_' + Date.now(),
      name: name,
      email: email,
      phone: phone || '9876543210',
      displayPhone: this.formatPhone(phone || '9876543210'),
      avatar: userData.avatar || '',
      initials: initials,
      bio: userData.bio || 'Haute patisserie devotee enjoying bespoke La Desio creations.',
      city: userData.city || 'Chennai',
      tier: 'Amore',
      points: 250, // Welcome bonus points!
      nextTierPoints: 2000,
      joinedDate: new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
      dietary: userData.dietary || ['All Flavors Welcome'],
      password: password,
      savedAddresses: [
        {
          id: 'addr_' + Date.now(),
          name: `${name} (Primary)`,
          address: userData.address || 'Flagship Avenue',
          city: userData.city || 'Chennai',
          postal: userData.postal || '6000 01',
          country: 'India',
          phone: this.formatPhone(phone || '9876543210'),
          isDefault: true
        }
      ]
    };

    this.users.unshift(newUser);
    this.activeUserId = newUser.id;
    this.profile = newUser;
    try {
      localStorage.setItem(AUTH_SESSION_KEY, this.cleanPhone(newUser.phone));
    } catch (e) {}
    this.saveUsers();

    return {
      success: true,
      user: newUser,
      message: `Welcome to La Desio Privé, ${newUser.name}! 250 welcome points credited to your account.`
    };
  }

  // Request password reset
  requestPasswordReset(emailInput) {
    const clean = (emailInput || '').trim().toLowerCase();
    return {
      success: true,
      message: `Password reset instructions and verification link dispatched to ${clean}.`
    };
  }

  // Direct login by phone (for demo quick-switches)
  loginByPhone(phoneInput) {
    const phone = this.cleanPhone(phoneInput);
    const user = this.users.find(u => this.cleanPhone(u.phone) === phone);
    if (!user) {
      return { success: false, message: 'No account registered with this mobile number.' };
    }
    this.activeUserId = user.id;
    this.profile = user;
    try {
      localStorage.setItem(AUTH_SESSION_KEY, phone);
    } catch (e) {}
    this.saveUsers();
    return { success: true, user: this.profile, message: `Welcome, ${this.profile.name}!` };
  }

  // Switch between existing user profiles
  switchProfile(userId) {
    const target = this.users.find(u => u.id === userId);
    if (!target) return null;
    this.activeUserId = target.id;
    this.profile = target;
    try {
      localStorage.setItem(AUTH_SESSION_KEY, this.cleanPhone(target.phone));
    } catch (e) {}
    this.saveUsers();
    return this.profile;
  }

  // Sign out
  logout() {
    try {
      localStorage.removeItem(AUTH_SESSION_KEY);
      localStorage.removeItem(ACTIVE_USER_ID_KEY);
      localStorage.removeItem(PROFILE_KEY);
    } catch (e) {}
    this.activeUserId = null;
    this.profile = null;
    this.notify();
    return null;
  }

  // Update profile details
  updateProfile(data) {
    this.profile = { ...this.profile, ...data };
    if (data.phone) {
      this.profile.phone = this.cleanPhone(data.phone);
      this.profile.displayPhone = this.formatPhone(this.profile.phone);
    }
    const idx = this.users.findIndex(u => u.id === this.activeUserId);
    if (idx !== -1) {
      this.users[idx] = this.profile;
    }
    this.checkTierUpgrade();
    this.saveUsers();
    return this.profile;
  }

  addSavedAddress(newAddr) {
    if (!this.profile.savedAddresses) {
      this.profile.savedAddresses = [];
    }
    const addr = {
      id: 'addr_' + Date.now(),
      name: newAddr.name || `${this.profile.name} (New Address)`,
      address: newAddr.address || newAddr.street || '',
      city: newAddr.city || this.profile.city || 'Chennai',
      postal: newAddr.postal || '6000 83',
      country: newAddr.country || 'India',
      phone: newAddr.phone || this.profile.displayPhone || '+91 93453 96700',
      isDefault: !!newAddr.isDefault
    };

    if (addr.isDefault) {
      this.profile.savedAddresses.forEach(a => a.isDefault = false);
    }
    this.profile.savedAddresses.push(addr);
    this.updateProfile({ savedAddresses: this.profile.savedAddresses });
    return addr;
  }

  deleteSavedAddress(addrId) {
    if (!this.profile.savedAddresses) return;
    this.profile.savedAddresses = this.profile.savedAddresses.filter(a => a.id !== addrId);
    if (this.profile.savedAddresses.length > 0 && !this.profile.savedAddresses.some(a => a.isDefault)) {
      this.profile.savedAddresses[0].isDefault = true;
    }
    this.updateProfile({ savedAddresses: this.profile.savedAddresses });
  }

  // ==========================================
  // SEARCH USERS / FRIENDS BY MOBILE NUMBER
  // ==========================================
  searchUsersByMobile(query) {
    const raw = String(query || '').trim();
    if (!raw) return [];

    const cleanQuery = this.cleanPhone(raw);
    const textQuery = raw.toLowerCase();

    return this.users.filter(u => {
      // Don't include self
      if (u.id === this.activeUserId) return false;

      const userCleanPhone = this.cleanPhone(u.phone);
      if (cleanQuery && userCleanPhone.includes(cleanQuery)) {
        return true;
      }
      if (u.name && u.name.toLowerCase().includes(textQuery)) {
        return true;
      }
      return false;
    }).map(u => ({
      id: u.id,
      name: u.name,
      phone: u.phone,
      displayPhone: u.displayPhone || this.formatPhone(u.phone),
      avatar: u.avatar || 'Assets/Profile/roody.jpg',
      bio: u.bio || 'Patisserie lover in the La Desio Circle.',
      city: u.city || 'Chennai',
      tier: u.tier || 'Élite Member',
      points: u.points || 0,
      isRegisteredUser: true,
      isAlreadyFriend: this.friends.some(f => f.id === u.id || this.cleanPhone(f.phone) === this.cleanPhone(u.phone)),
      friendId: (this.friends.find(f => f.id === u.id || this.cleanPhone(f.phone) === this.cleanPhone(u.phone)) || {}).id || u.id,
      creationsCount: 2
    }));
  }

  addFriendByMobile(phoneInput, nameInput = '', cityInput = 'Chennai') {
    const phone = this.cleanPhone(phoneInput);
    if (!phone || phone.length !== 10) {
      return { success: false, message: 'Please enter a valid 10-digit Indian mobile number.' };
    }

    // Check if self
    if (this.profile && this.cleanPhone(this.profile.phone) === phone) {
      return { success: false, message: 'You cannot add your own profile as a friend.' };
    }

    // Check if already in circle
    const alreadyFriend = this.friends.find(f => this.cleanPhone(f.phone) === phone);
    if (alreadyFriend) {
      return { success: false, message: `${alreadyFriend.name} is already in your Friends Circle!` };
    }

    // Check registered users
    const existingUser = this.users.find(u => this.cleanPhone(u.phone) === phone);
    if (existingUser) {
      this.addFriendFromUser(existingUser);
      return {
        success: true,
        message: `✨ Added ${existingUser.name} to your Friends Circle!`,
        friend: this.friends[0]
      };
    }

    // Create new friend entry
    const formatted = this.formatPhone(phone);
    const friendName = (nameInput || '').trim() || `Connoisseur (${phone.substring(6)})`;
    const newFriend = {
      id: 'friend_' + Date.now(),
      name: friendName,
      handle: '@' + (friendName.toLowerCase().replace(/\s+/g, '') || ('member' + phone.substring(6))),
      phone: phone,
      displayPhone: formatted,
      avatar: 'Assets/Profile/roody.jpg',
      bio: `Handcrafted dessert enthusiast connected via ${formatted}.`,
      tier: 'Privé Member',
      location: (cityInput || 'Chennai').trim(),
      creationsCount: 1,
      ordersCount: 8,
      creations: [
        {
          id: 'custom_f_' + Date.now(),
          name: `${friendName.split(' ')[0]}'s Signature Torte`,
          recipe: 'Valrhona Noir + Dark Chocolate Ganache + Roasted Hazelnuts + Gold Flourish',
          price: 520,
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
          createdDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
          nutrition: { calories: 330, protein: '8g', carbs: '32g', fats: '18g' }
        }
      ]
    };

    this.friends.unshift(newFriend);
    this.saveFriends();
    return {
      success: true,
      message: `✨ Connected +91 ${phone} (${newFriend.name}) to your Friends Circle!`,
      friend: newFriend
    };
  }

  removeFriend(friendIdOrPhone) {
    const cleanP = this.cleanPhone(friendIdOrPhone);
    const friend = this.friends.find(f => f.id === friendIdOrPhone || (cleanP && this.cleanPhone(f.phone) === cleanP));
    const targetId = friend ? friend.id : friendIdOrPhone;
    this.friends = this.friends.filter(f => f.id !== targetId);
    this.saveFriends();
    return {
      success: true,
      message: friend ? `${friend.name} was removed from your circle.` : 'Friend removed from your circle.'
    };
  }

  loadFriends() {
    try {
      const saved = localStorage.getItem(FRIENDS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed;
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

  addFriendFromUser(user) {
    const exists = this.friends.some(f => f.id === user.id || this.cleanPhone(f.phone) === this.cleanPhone(user.phone));
    if (exists) return false;

    const newFriend = {
      id: user.id,
      name: user.name,
      handle: '@' + user.name.toLowerCase().replace(/\s+/g, ''),
      phone: user.phone,
      displayPhone: user.displayPhone || this.formatPhone(user.phone),
      avatar: user.avatar || 'Assets/Profile/roody.jpg',
      bio: user.bio || 'Patisserie lover in the La Desio Circle.',
      tier: user.tier || 'Élite Member',
      location: user.city || 'Chennai',
      creationsCount: 2,
      ordersCount: 12,
      creations: [
        {
          id: 'custom_f_' + Date.now(),
          name: `${user.name.split(' ')[0]}'s Signature Torte`,
          recipe: 'Valrhona Noir + Dark Chocolate Ganache + Roasted Hazelnuts + Gold Flourish',
          price: 520,
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
          createdDate: '10 Mar 2026',
          nutrition: { calories: 330, protein: '8g', carbs: '32g', fats: '18g' }
        }
      ]
    };

    this.friends.unshift(newFriend);
    this.saveFriends();
    return true;
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
        userId: 'user_roody',
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
        trackingNumber: 'IN-EXP-8942-DESIO',
        distanceKm: 1.4,
        estimatedMinutes: 12
      },
      {
        id: 'DESIO-7182',
        userId: 'user_vinoth',
        date: '10 Jan 2025',
        time: '19:15',
        status: 'Delivered',
        statusColor: 'emerald',
        items: [
          {
            name: 'Pistachio Royale Tiramisù',
            qty: 2,
            price: 545,
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
            subtitle: 'Bronte Pistachio & Mascarpone'
          }
        ],
        subtotal: 1090,
        discount: 0,
        deliveryFee: 0,
        total: 1090,
        paymentMethod: 'Credit Card',
        address: {
          fullName: 'Vinoth Kumar',
          phone: '+91 97904 96706',
          street: 'Main Guard Gate, Thillai Nagar',
          city: 'Trichy',
          postal: '6200 18'
        },
        deliverySlot: 'Scheduled Evening — 10 Jan, 7:00 PM (Trichy)',
        trackingNumber: 'IN-EXP-7182-DESIO',
        distanceKm: 2.1,
        estimatedMinutes: 20
      },
      {
        id: 'DESIO-5421',
        userId: 'user_tharun',
        date: '02 Feb 2025',
        time: '14:20',
        status: 'Delivered',
        statusColor: 'emerald',
        items: [
          {
            name: '35g Whey Isolate Brownie Slab',
            qty: 2,
            price: 480,
            image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
            subtitle: 'Dark Cocoa & Whey Isolate'
          }
        ],
        subtotal: 960,
        discount: 0,
        deliveryFee: 0,
        total: 960,
        paymentMethod: 'UPI / PhonePe',
        address: {
          fullName: 'Tharun R K',
          phone: '+91 95667 83614',
          street: '100 Feet Road, Indiranagar',
          city: 'Bengaluru',
          postal: '5600 38'
        },
        deliverySlot: 'Express Artisanal — 02 Feb, 2:00 PM (Bengaluru)',
        trackingNumber: 'IN-EXP-5421-DESIO',
        distanceKm: 3.5,
        estimatedMinutes: 25
      },
      {
        id: 'DESIO-3319',
        userId: 'user_jeneefar',
        date: '28 Jan 2025',
        time: '16:45',
        status: 'Delivered',
        statusColor: 'emerald',
        items: [
          {
            name: 'Berry Élan & Wild Strawberries',
            qty: 1,
            price: 520,
            image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
            subtitle: 'Alpine Strawberries & Champagne Cream'
          }
        ],
        subtotal: 520,
        discount: 0,
        deliveryFee: 0,
        total: 520,
        paymentMethod: 'Net Banking',
        address: {
          fullName: 'Jeneefar',
          phone: '+91 96774 07374',
          street: 'Panampilly Nagar',
          city: 'Kerala',
          postal: '6820 36'
        },
        deliverySlot: 'Standard Artisanal — 28 Jan, 4:30 PM',
        trackingNumber: 'IN-EXP-3319-DESIO',
        distanceKm: 4.0,
        estimatedMinutes: 30
      }
    ];

    try {
      const saved = localStorage.getItem(ORDERS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure every order has a userId (migrate any old untagged orders to user_roody)
        return parsed.map(o => ({
          ...o,
          userId: o.userId || 'user_roody'
        }));
      }
      return defaultOrders;
    } catch (e) {
      return defaultOrders;
    }
  }

  getUserOrders(userId = this.activeUserId) {
    if (!userId) return [];
    return (this.orders || []).filter(o => o.userId === userId);
  }

  saveOrders() {
    try {
      localStorage.setItem(ORDERS_KEY, JSON.stringify(this.orders));
    } catch (e) {}
    this.notify();
  }

  // Add newly placed order tied to the active user profile
  addOrder(orderData) {
    const orderId = 'DESIO-' + Math.floor(1000 + Math.random() * 9000);
    const now = new Date();
    const currentUserName = this.profile ? this.profile.name : 'Patisserie Connoisseur';
    const currentUserPhone = this.profile ? this.profile.displayPhone : '+91 93453 96700';
    const currentUserCity = this.profile ? this.profile.city : 'Chennai';

    const newOrder = {
      id: orderId,
      userId: this.activeUserId || 'guest',
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
        fullName: currentUserName,
        phone: currentUserPhone,
        street: 'West Jafferkhanpet',
        city: currentUserCity
      },
      deliverySlot: orderData.deliverySlot || 'Express Artisanal — Within 18 Mins (Chennai)',
      trackingNumber: orderData.trackingNumber || ('IN-EXP-' + Math.floor(1000 + Math.random() * 9000) + '-DESIO'),
      distanceKm: orderData.distanceKm || 3.2,
      estimatedMinutes: orderData.estimatedMinutes || 18,
      createdAt: now.toISOString()
    };

    this.orders.unshift(newOrder);
    this.saveOrders();

    // Add loyalty points if profile is active (1 point per ₹10 spent)
    if (this.profile) {
      const pointsEarned = Math.round(newOrder.total / 10);
      this.profile.points = (this.profile.points || 0) + pointsEarned;
      this.checkTierUpgrade();
      this.saveUsers();
    }

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
    if (!this.profile) return;
    if (this.profile.points >= 5000) {
      this.profile.tier = 'Royale';
    } else if (this.profile.points >= 2000) {
      this.profile.tier = 'Élite';
    } else {
      this.profile.tier = 'Amore';
    }
  }

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

  getData() {
    const userProfile = this.profile || (this.isUserAuthenticated() ? this.getActiveUser() : null);
    return {
      profile: userProfile || { name: 'Guest Client', tier: 'Connoisseur', points: 0, nextTierPoints: 2000, savedAddresses: [] },
      users: this.users,
      activeUserId: this.activeUserId,
      creations: this.creations,
      orders: this.getUserOrders(),
      allOrders: this.orders,
      friends: this.friends,
      isAuthenticated: this.isUserAuthenticated()
    };
  }
}

export const loyaltyStore = new LoyaltyManager();
if (typeof window !== 'undefined') {
  window.loyaltyStore = loyaltyStore;
}
