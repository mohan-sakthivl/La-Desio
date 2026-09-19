// LA DESIO - Master Application Controller & Router (INR Edition)
import { CATEGORIES, PRODUCTS, DESSERT_BUILDER_OPTIONS, TRENDING_CREATIONS, INGREDIENT_STORIES, INSTAGRAM_POSTS, FAQS, BOUTIQUES } from './data.js';
import { cartStore } from './cart.js';
import { loyaltyStore } from './loyalty.js';
import { DessertBuilder } from './builder.js';
import { CheckoutManager } from './checkout.js';

export const HERO_SLIDES = [
  {
    badge: 'Signature Masterpiece',
    title: 'Velvet Noir Royale',
    subtitle: '72% Single-Origin Cocoa • Piedmont Hazelnuts • 24k Gold',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
    productId: 'desio-velvet-noir'
  },
  {
    badge: 'Seasonal Atelier',
    title: 'Caramel Étoile',
    subtitle: 'Burnt Madagascar Vanilla Caramel • Fleur de Sel • Dark Ganache',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=85',
    productId: 'desio-caramel-etoile'
  },
  {
    badge: 'Authentic Italian',
    title: 'Sicilian Pistachio Tiramisu',
    subtitle: 'Rich Bronte Pistachio Cream • Espresso Ladyfingers • Creamy Mascarpone',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85',
    productId: 'desio-pistachio-royale'
  },
  {
    badge: 'Mindful Creation',
    title: 'Wild Berry & Açaí Parfait',
    subtitle: 'Desio Natural • Forest Berries • Medjool Date Sweetening',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85',
    productId: 'desio-berry-bliss-natural'
  },
  {
    badge: 'Grand Tart',
    title: 'Wild Strawberry & White Chocolate Tart',
    subtitle: 'Alpine Wild Strawberries • Tahitian Vanilla Ganache • Butter Cookie Crust',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85',
    productId: 'desio-strawberry-rose'
  }
];

export const INTRO_VIDEO_CHAPTERS = [
  {
    start: 0.0,
    end: 0.95,
    badge: 'Signature Reserve',
    title: 'Velvet Noir Royale',
    subtitle: '72% Single-Origin Cocoa • Piedmont Hazelnut • 24K Gold Leaf',
    productId: 'desio-velvet-noir',
    ctaText: 'Taste Velvet Noir'
  },
  {
    start: 0.95,
    end: 1.90,
    badge: 'Classic Italian',
    title: 'Sicilian Pistachio Royale',
    subtitle: 'Authentic Bronte Pistachio Cream & Crisp Almond Sablé',
    productId: 'desio-pistachio-royale',
    ctaText: 'Taste Pistachio Royale'
  },
  {
    start: 1.90,
    end: 2.85,
    badge: 'Seasonal Atelier',
    title: 'Wild Strawberry Grand Tart',
    subtitle: 'Alpine Forest Berries & Tahitian Bourbon Vanilla Ganache',
    productId: 'desio-strawberry-rose',
    ctaText: 'Taste Strawberry Tart'
  },
  {
    start: 2.85,
    end: 3.80,
    badge: 'Chef Selection',
    title: 'Salted Caramel Étoile',
    subtitle: 'Slow-Simmered Salted Butter Caramel & Roasted Pecan Crunch',
    productId: 'desio-caramel-etoile',
    ctaText: 'Taste Caramel Étoile'
  },
  {
    start: 3.80,
    end: 4.75,
    badge: 'Authentic Milanese',
    title: 'Tiramisu Classico',
    subtitle: 'Espresso Savoiardi Ladyfingers & Dusted Cocoa Velvet',
    productId: 'desio-pistachio-royale',
    ctaText: 'Taste Tiramisu'
  },
  {
    start: 4.75,
    end: 5.70,
    badge: 'Artisanal Chocolatier',
    title: 'Fudge Noir Praline Brownie',
    subtitle: 'Molten Valrhona Cocoa Ganache & Slow-Roasted Hazelnuts',
    productId: 'desio-velvet-noir',
    ctaText: 'Taste Fudge Brownie'
  },
  {
    start: 5.70,
    end: 6.65,
    badge: 'Natural Harvest',
    title: 'Wild Berry Mascarpone',
    subtitle: 'Fresh Forest Blueberries & Madagascan Bourbon Vanilla',
    productId: 'desio-berry-bliss-natural',
    ctaText: 'Taste Wild Berry'
  },
  {
    start: 6.65,
    end: 10.0,
    badge: 'House of La Desio',
    title: 'Where Cravings Become Creations',
    subtitle: 'Fine Italian Handcrafted Luxury Patisserie & Bespoke 3D Studio',
    productId: null,
    ctaText: null
  }
];

export const FULL_SIZE_BANNER_IMAGES = [
  {
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1920&q=85',
    title: 'Velvet Noir Royale',
    subtitle: '72% Single-Origin Venezuelan Cocoa & 24K Edible Gold Leaf',
    badge: 'Signature Reserve',
    productId: 'desio-velvet-noir'
  },
  {
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1920&q=85',
    title: 'Wild Strawberry & White Chocolate Grand Tart',
    subtitle: 'Alpine Wild Strawberries & Tahitian Vanilla Ganache',
    badge: 'Seasonal Patisserie',
    productId: 'desio-strawberry-rose'
  },
  {
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1920&q=85',
    title: 'Sicilian Pistachio Tiramisu',
    subtitle: 'Sicilian Bronte Pistachio Cream & Espresso Soaked Ladyfingers',
    badge: 'Classic Italian',
    productId: 'desio-pistachio-royale'
  },
  {
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1920&q=85',
    title: 'Salted Caramel Layered Mousse Cake',
    subtitle: 'Burnt Madagascar Vanilla Caramel & Salted Butter Ganache',
    badge: 'Chef Selection',
    productId: 'desio-caramel-etoile'
  },
  {
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=85',
    title: 'Artisanal Italian Bakery',
    subtitle: 'Handcrafted Daily with Master Italian Craftsmanship',
    badge: 'Master Italian Patisserie',
    productId: 'desio-velvet-noir'
  }
];

class LaDesioApp {
  constructor() {
    // Expose global references immediately
    if (typeof window !== 'undefined') {
      window.ladesioApp = this;
      window.cartStore = cartStore;
      window.loyaltyStore = loyaltyStore;
    }

    this.currentRoute = 'home';
    this.selectedCategory = 'all';
    this.searchQuery = '';
    this.heroSlideIndex = 0;
    this.heroCarouselTimer = null;
    this.dishesBannerTimer = null;
    this.fullBannerSlideIndex = 0;
    this.fullBannerTimer = null;
    this.introVideoActiveChapter = 0;

    this.activeFilter = {
      priceMax: 3500,
      dietary: 'all',
      onlyEggless: false,
      sortBy: 'recommended'
    };

    this.emailAuthStep = 'email';
    this.emailAuthEmail = '';
    this.emailAuthOtp = '';
    this.mobileAuthStep = 'phone';
    this.mobileAuthPhone = '';
    this.mobileAuthOtp = '';
    this.otpTimerInterval = null;

    this.init();
  }

  init() {
    this.setupRouter();
    this.setupEventListeners();
    this.setupCartListeners();
    this.setupLoyaltyListeners();
    this.renderNavigationBadges();
    this.renderCurrentView();
    this.checkBirthdayGreeting();

    // Global references for inline HTML event handlers
    if (typeof window !== 'undefined') {
      window.ladesioApp = this;
      window.cartStore = cartStore;
      window.loyaltyStore = loyaltyStore;
    }
  }

  clearTimers() {
    if (this.heroCarouselTimer) {
      clearInterval(this.heroCarouselTimer);
      this.heroCarouselTimer = null;
    }
    if (this.dishesBannerTimer) {
      clearInterval(this.dishesBannerTimer);
      this.dishesBannerTimer = null;
    }
    if (this.fullBannerTimer) {
      clearInterval(this.fullBannerTimer);
      this.fullBannerTimer = null;
    }
  }

  navigateTo(route) {
    const targetHash = '#' + route;
    if (window.location.hash === targetHash) {
      const [r, p] = route.split('/');
      this.triggerPageTransition(r, p);
    } else {
      window.location.hash = targetHash;
    }
  }

  handleHeaderAuthClick(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (loyaltyStore && loyaltyStore.isUserAuthenticated()) {
      this.navigateTo('account');
    } else {
      this.navigateTo('login');
    }
  }

  togglePfpDropdown(e) {
    if (e) {
      if (e.stopPropagation) e.stopPropagation();
      if (e.preventDefault) e.preventDefault();
    }
    if (!loyaltyStore.isUserAuthenticated()) {
      this.navigateTo('login');
      return;
    }
    const dropdown = document.getElementById('headerPfpDropdown');
    if (dropdown) {
      const isHidden = dropdown.classList.contains('hidden');
      if (isHidden) {
        this.renderNavigationBadges();
        dropdown.classList.remove('hidden');
      } else {
        dropdown.classList.add('hidden');
      }
    }
  }

  closePfpDropdown() {
    const dropdown = document.getElementById('headerPfpDropdown');
    if (dropdown) dropdown.classList.add('hidden');
  }

  navigateToAccountTab(tab) {
    this.closePfpDropdown();
    this.activeAccountTab = tab;
    this.navigateTo('account/' + tab);
  }


  playObstacleChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {}
  }


  // ==========================================
  // MOBILE SEARCH & ADD FRIEND CONTROLLER
  // ==========================================
  handleFriendSearchInput(query) {
    const mount = document.getElementById('friendSearchResultsMount');
    if (!mount) return;

    const trimmed = (query || '').trim();
    if (!trimmed) {
      mount.classList.add('hidden');
      mount.innerHTML = '';
      return;
    }

    const cleanDigits = loyaltyStore.cleanPhone(trimmed);
    const results = loyaltyStore.searchUsersByMobile(trimmed);

    mount.classList.remove('hidden');

    let html = '<div class="space-y-2">';

    if (results.length > 0) {
      html += '<p class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] font-semibold">Registered Privé Members Found:</p>';
      results.forEach(u => {
        html += `
          <div class="p-3.5 rounded-2xl bg-[#1A0A06] border border-[#B8945B]/40 flex items-center justify-between gap-3 shadow-md">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-11 h-11 rounded-full bg-gradient-to-br from-[#B8945B] to-[#E6CA85] p-0.5 shrink-0 overflow-hidden">
                <img src="${u.avatar}" alt="${u.name}" class="w-full h-full object-cover rounded-full" onerror="this.outerHTML='<span class=\\'w-full h-full rounded-full bg-[#180A06] text-[#E6CA85] text-xs font-serif font-bold flex items-center justify-center\\'>👑</span>'" />
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-2">
                  <h5 class="font-display text-sm font-bold text-white truncate">${u.name}</h5>
                  <span class="px-2 py-0.2 rounded-full bg-[#B8945B]/20 text-[#E6CA85] text-[9px] font-serif uppercase font-bold">${u.tier}</span>
                </div>
                <p class="text-xs text-[#E6CA85] font-mono">${u.displayPhone} • 📍 ${u.city}</p>
              </div>
            </div>

            ${u.isAlreadyFriend ? `
              <div class="flex items-center gap-2 shrink-0">
                <span class="px-2.5 py-1 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-[11px] font-serif font-semibold flex items-center gap-1 shadow-sm">
                  <span>✓</span> In Circle
                </span>
                <button type="button" onclick="window.ladesioApp.handleRemoveFriend('${u.friendId || u.id}', '${u.name}')"
                        class="px-3 py-1 rounded-xl border border-rose-500/40 hover:border-rose-500 bg-rose-950/40 hover:bg-rose-900/60 text-rose-200 hover:text-white text-xs font-serif transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
                        title="Remove ${u.name} from Circle">
                  <span>🗑️</span> Remove
                </button>
              </div>
            ` : `
              <button type="button" onclick="window.ladesioApp.handleAddFriendFromSearch('${u.id}')"
                      class="px-4 py-1.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider shrink-0 flex items-center gap-1 shadow-md hover:scale-105 transition-transform">
                <span>➕</span> Add Friend
              </button>
            `}
          </div>
        `;
      });
    }

    // If clean digits has 10 digits and not found or to allow adding directly
    if (cleanDigits.length === 10 && !results.some(r => loyaltyStore.cleanPhone(r.phone) === cleanDigits)) {
      html += `
        <div class="p-4 rounded-2xl bg-[#1A0A06] border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md mt-2">
          <div>
            <p class="text-xs text-stone-200">Mobile number: <strong class="text-[#E6CA85] font-mono">+91 ${cleanDigits}</strong></p>
            <p class="text-[11px] text-stone-400">Not in default preset users. Would you like to invite and add this mobile number directly?</p>
          </div>
          <button type="button" onclick="window.ladesioApp.handleAddFriendDirect('${cleanDigits}')"
                  class="px-4 py-2 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider shrink-0 flex items-center justify-center gap-1.5 shadow-md">
            <span>➕</span> Add Mobile Friend
          </button>
        </div>
      `;
    } else if (results.length === 0 && cleanDigits.length < 10) {
      html += `
        <div class="p-3 text-center text-xs text-stone-400 font-serif">
          No members found matching "${query}". Enter a 10-digit mobile number (e.g. 9790496706, 9566783614) or name.
        </div>
      `;
    }

    html += '</div>';
    mount.innerHTML = html;
  }

  clearFriendSearch() {
    const input = document.getElementById('friendMobileSearchInput');
    if (input) input.value = '';
    const mount = document.getElementById('friendSearchResultsMount');
    if (mount) {
      mount.classList.add('hidden');
      mount.innerHTML = '';
    }
  }

  handleAddFriendFromSearch(userId) {
    const user = loyaltyStore.users.find(u => u.id === userId);
    if (!user) return;

    const res = loyaltyStore.addFriendByMobile(user.phone, user.name, user.city);
    if (res.success) {
      if (window.showToast) window.showToast(res.message, 'success');
      this.clearFriendSearch();
      this.activeAccountTab = 'friends';
      this.renderAccountView();
    } else {
      if (window.showToast) window.showToast(res.message, 'warning');
    }
  }

  handleAddFriendDirect(phone, name = '') {
    const res = loyaltyStore.addFriendByMobile(phone, name);
    if (res.success) {
      if (window.showToast) window.showToast(res.message, 'success');
      this.clearFriendSearch();
      this.activeAccountTab = 'friends';
      this.renderAccountView();
    } else {
      if (window.showToast) window.showToast(res.message, 'warning');
    }
  }

  handleRemoveFriend(friendId, friendName = '') {
    const displayName = friendName || 'this friend';
    const confirmed = (typeof window.confirm === 'function') 
      ? window.confirm(`Are you sure you want to remove ${displayName} from your Atelier Circle?`)
      : true;
    if (!confirmed) return;

    const res = loyaltyStore.removeFriend(friendId);
    if (res.success) {
      if (window.showToast) window.showToast(res.message, 'info');
      if (this.selectedFriendId === friendId) {
        this.selectedFriendId = null;
      }
      this.activeAccountTab = 'friends';
      this.renderAccountView();
      // Also update search results if search is active
      const searchInput = document.getElementById('friendMobileSearchInput');
      if (searchInput && searchInput.value.trim()) {
        this.handleFriendSearchInput(searchInput.value);
      }
    } else {
      if (window.showToast) window.showToast(res.message || 'Could not remove friend.', 'warning');
    }
  }

  openAddFriendModal() {
    let modal = document.getElementById('addFriendModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'addFriendModal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#1F0D08] to-[#140603] border-2 border-[#B8945B]/50 shadow-2xl p-6 sm:p-7 space-y-5 text-[#FFFDF9]">
        <!-- Close Button -->
        <button onclick="window.ladesioApp.closeAddFriendModal()" 
                class="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/40 border border-[#B8945B]/30 hover:border-[#B8945B] flex items-center justify-center text-stone-300 hover:text-white transition-colors">
          ✕
        </button>

        <!-- Header -->
        <div class="border-b border-[#B8945B]/30 pb-3">
          <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold">Atelier Circle</span>
          <h3 class="font-display text-xl sm:text-2xl text-white font-bold mt-0.5">Add Friend by Mobile Number</h3>
          <p class="text-xs text-[#D6C2B0] mt-0.5">Connect with fellow dessert lovers to share recipes and order creations.</p>
        </div>

        <form onsubmit="event.preventDefault(); window.ladesioApp.submitAddFriendModal();" class="space-y-4">
          <!-- Mobile Number Input -->
          <div class="space-y-1.5">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Friend's 10-Digit Mobile Number *</label>
            <div class="flex items-center rounded-xl border border-[#B8945B]/40 bg-[#120502] focus-within:border-[#E6CA85] overflow-hidden shadow-inner">
              <span class="px-3.5 py-3 text-xs font-mono text-[#E6CA85] font-bold border-r border-[#B8945B]/30 bg-black/40">
                🇮🇳 +91
              </span>
              <input type="tel" id="modalAddFriendPhone" required maxlength="10"
                     placeholder="97904 96706"
                     class="w-full px-3.5 py-3 bg-transparent text-white text-xs font-mono outline-none" />
            </div>
            <span class="text-[10px] text-stone-400">Enter a 10-digit Indian mobile number.</span>
          </div>

          <!-- Friend's Name -->
          <div class="space-y-1.5">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Friend's Name (Optional)</label>
            <input type="text" id="modalAddFriendName"
                   placeholder="e.g. Vinoth Kumar, Sneha Patel"
                   class="w-full px-3.5 py-2.5 rounded-xl bg-[#120502] border border-[#B8945B]/40 text-xs text-white placeholder-stone-500 outline-none" />
          </div>

          <!-- City / Location -->
          <div class="space-y-1.5">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">City / Location (Optional)</label>
            <input type="text" id="modalAddFriendCity"
                   placeholder="e.g. Chennai, Bengaluru, Mumbai"
                   value="Chennai"
                   class="w-full px-3.5 py-2.5 rounded-xl bg-[#120502] border border-[#B8945B]/40 text-xs text-white placeholder-stone-500 outline-none" />
          </div>

          <!-- Submit Button -->
          <button type="submit" 
                  class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 mt-2">
            <span>Connect & Add to Circle</span> ✨
          </button>
        </form>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  closeAddFriendModal() {
    const modal = document.getElementById('addFriendModal');
    if (modal) modal.classList.add('hidden');
  }

  submitAddFriendModal() {
    const phoneInput = document.getElementById('modalAddFriendPhone')?.value;
    const nameInput = document.getElementById('modalAddFriendName')?.value;
    const cityInput = document.getElementById('modalAddFriendCity')?.value || 'Chennai';

    const res = loyaltyStore.addFriendByMobile(phoneInput, nameInput, cityInput);
    if (res.success) {
      if (window.showToast) window.showToast(res.message, 'success');
      this.closeAddFriendModal();
      this.activeAccountTab = 'friends';
      this.renderAccountView();
    } else {
      if (window.showToast) window.showToast(res.message, 'warning');
    }
  }

  triggerPageTransition(route, param, callback) {
    const routeInfoMap = {
      'home': { title: 'LA DESIO', sub: 'Luxury Italian Patisserie & Bakery' },
      'menu': { title: 'THE DESSERT MENU', sub: 'Handcrafted Cakes, Tarts & Tiramisu' },
      'builder': { title: '3D DESSERT STUDIO', sub: 'Design Your Custom Dessert in 3D' },
      'natural': { title: 'DESIO NATURAL', sub: 'Healthy, High-Protein & Ancient Grains' },
      'account': { title: 'VIP MEMBER ACCOUNT', sub: 'Your Saved Creations & Privileges' },
      'login': { title: 'MEMBER SIGN IN', sub: 'Access Your Profile & Welcome Rewards' },
      'checkout': { title: 'SECURE CHECKOUT', sub: 'Fast & Fresh Artisanal Delivery' },
      'tracker': { title: 'ORDER TRACKER', sub: 'Live Fresh Delivery Updates' },
      'orders': { title: 'ORDER HISTORY', sub: 'Your Past Dessert Orders & Invoices' }
    };

    const info = routeInfoMap[route] || { title: 'LA DESIO', sub: 'Haute Patisserie & Atelier' };

    const executeViewSwitch = () => {
      this.currentRoute = route;
      this.routeParam = param;
      this.renderNavigationBadges();
      this.renderCurrentView();
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (callback) callback();
    };

    if (window.ladesioSoundscape && typeof window.ladesioSoundscape.showCurtain === 'function') {
      window.ladesioSoundscape.showCurtain(info.title, info.sub, 380, executeViewSwitch);
    } else {
      const curtain = document.getElementById('atelierCurtainLoader');
      const progress = document.getElementById('curtainProgressBar');
      const titleElem = curtain ? curtain.querySelector('h1') : null;
      const subtitleElem = curtain ? curtain.querySelector('p') : null;

      if (!curtain) {
        executeViewSwitch();
        return;
      }

      if (titleElem) titleElem.textContent = info.title;
      if (subtitleElem) subtitleElem.textContent = info.sub;

      curtain.style.display = 'flex';
      curtain.classList.remove('curtain-parted');

      if (progress) {
        progress.style.width = '0%';
        setTimeout(() => { progress.style.width = '55%'; }, 40);
        setTimeout(() => { progress.style.width = '100%'; }, 160);
      }

      setTimeout(() => {
        executeViewSwitch();
      }, 200);

      setTimeout(() => {
        curtain.classList.add('curtain-parted');
        setTimeout(() => {
          curtain.style.display = 'none';
          if (titleElem) titleElem.textContent = 'LA DESIO';
          if (subtitleElem) subtitleElem.textContent = 'Haute Patisserie & Atelier';
        }, 420);
      }, 380);
    }
  }

  setupRouter() {
    let isInitialBoot = true;

    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      const [route, param] = hash.split('/');
      if (route === 'wishlist') {
        this.openWishlistDrawer();
        return;
      }
      if (route === 'account' && (!loyaltyStore || !loyaltyStore.isUserAuthenticated())) {
        this.navigateTo('login');
        return;
      }

      if (isInitialBoot) {
        isInitialBoot = false;
        this.currentRoute = route;
        this.routeParam = param;
        this.renderCurrentView();
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }

      this.triggerPageTransition(route, param);
    };

    window.addEventListener('hashchange', handleHash);
    if (!window.location.hash) {
      window.location.hash = '#home';
    }
    handleHash();
  }

  setupEventListeners() {
    // Search input listener
    const searchInput = document.getElementById('globalSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.renderSearchResults(e.target.value);
      });
    }

    // Close modals on escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });
  }

  setupCartListeners() {
    cartStore.subscribe((summary) => {
      this.renderNavigationBadges();
      this.renderCartDrawerContent(summary);
      if (this.currentRoute === 'checkout' && window.checkoutManager && window.checkoutManager.currentStep !== 3 && !window.checkoutManager.lastPlacedOrder) {
        window.checkoutManager.render();
      }
    });
  }

  setupLoyaltyListeners() {
    loyaltyStore.subscribe((data) => {
      const activeUser = loyaltyStore && typeof loyaltyStore.getActiveUser === 'function' ? loyaltyStore.getActiveUser() : null;
      if (activeUser && activeUser.id) {
        if (typeof cartStore !== 'undefined' && cartStore.onLogin) {
          cartStore.onLogin(activeUser.id);
        }
      }
      if (this.currentRoute === 'account') {
        this.renderAccountView();
      }
      this.renderNavigationBadges();
      this.checkBirthdayGreeting();
    });
  }

  renderNavigationBadges() {
    const header = document.getElementById('mainHeader') || document.querySelector('header');
    if (header) {
      if (this.currentRoute === 'login' || this.currentRoute === 'register') {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
    }

    const summary = cartStore.getSummary();
    const cartBadges = document.querySelectorAll('.cart-count-badge');
    cartBadges.forEach(badge => {
      badge.textContent = summary.itemCount;
      badge.style.display = summary.itemCount > 0 ? 'inline-flex' : 'none';
    });

    const wishlistBadges = document.querySelectorAll('.wishlist-count-badge');
    wishlistBadges.forEach(badge => {
      badge.textContent = summary.wishlist.length;
      badge.style.display = summary.wishlist.length > 0 ? 'inline-flex' : 'none';
    });

    // Update active page indicator title in header
    const routeTitles = {
      'home': 'HOME',
      'menu': 'THE DESIO MENU',
      'builder': 'CREATE DESSERT',
      'natural': 'DESIO NATURAL',
      'gifting': 'LUXURY GIFTING',
      'story': 'OUR HERITAGE',
      'boutiques': 'LOCATIONS',
      'support': 'SUPPORT & CONCIERGE',
      'account': 'VIP ACCOUNT',
      'checkout': 'CHECKOUT'
    };

    const activeTitleElem = document.getElementById('activePageTitle');
    if (activeTitleElem) {
      activeTitleElem.textContent = routeTitles[this.currentRoute] || 'DESSERT ATELIER';
    }

    const headerSignInLink = document.getElementById('headerSignInLink');
    const headerProfileBtn = document.getElementById('headerProfileBtn');
    const pfpDropdown = document.getElementById('headerPfpDropdown');
    const isAuth = loyaltyStore && loyaltyStore.isUserAuthenticated() && loyaltyStore.profile;

    if (isAuth) {
      const prof = loyaltyStore.profile;
      const firstName = (prof.name || 'Privé').split(' ')[0];
      const initials = (prof.name || 'Member').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

      // In authenticated state: HIDE "Sign In" link, SHOW PFP Avatar button
      if (headerSignInLink) {
        headerSignInLink.classList.add('hidden');
        headerSignInLink.classList.remove('inline-flex');
      }

      if (headerProfileBtn) {
        headerProfileBtn.classList.remove('hidden');
        headerProfileBtn.classList.add('flex');
      }

      const headerPfpAvatar = document.getElementById('headerPfpAvatar');
      const headerPfpInitials = document.getElementById('headerPfpInitials');
      const dropdownPfpName = document.getElementById('dropdownPfpName');
      const dropdownPfpEmail = document.getElementById('dropdownPfpEmail');
      const dropdownPfpTier = document.getElementById('dropdownPfpTier');
      const dropdownPfpInitials = document.getElementById('dropdownPfpInitials');
      const dropdownAvatarContainer = document.getElementById('dropdownPfpAvatar');

      if (headerPfpInitials) headerPfpInitials.textContent = initials;
      if (dropdownPfpInitials) dropdownPfpInitials.textContent = initials;
      if (dropdownPfpName) dropdownPfpName.textContent = prof.name;
      if (dropdownPfpEmail) dropdownPfpEmail.textContent = prof.email || prof.displayPhone || prof.phone || '';
      if (dropdownPfpTier) dropdownPfpTier.textContent = `✨ ${prof.tier || 'Privé'} Member • ${prof.points || 0} Pts`;

      if (prof.avatar) {
        if (headerPfpAvatar) {
          headerPfpAvatar.innerHTML = `<img src="${prof.avatar}" alt="${prof.name}" class="w-full h-full object-cover rounded-full" onerror="this.outerHTML='<span class=\\'w-full h-full rounded-full bg-[#180A06] text-[#E6CA85] text-xs font-serif font-bold flex items-center justify-center\\'>${initials}</span>'" />`;
        }
        if (dropdownAvatarContainer) {
          dropdownAvatarContainer.innerHTML = `<img src="${prof.avatar}" alt="${prof.name}" class="w-full h-full object-cover rounded-full" onerror="this.outerHTML='<span class=\\'w-full h-full rounded-full bg-[#180A06] text-[#E6CA85] text-xs font-serif font-bold flex items-center justify-center\\'>${initials}</span>'" />`;
        }
      } else {
        if (headerPfpAvatar) {
          headerPfpAvatar.innerHTML = `<span id="headerPfpInitials" class="w-full h-full rounded-full bg-[#180A06] text-[#E6CA85] text-xs font-serif font-bold flex items-center justify-center">${initials}</span>`;
        }
        if (dropdownAvatarContainer) {
          dropdownAvatarContainer.innerHTML = `<div id="dropdownPfpInitials" class="w-full h-full rounded-full bg-[#180A06] text-[#E6CA85] font-serif font-bold text-sm flex items-center justify-center">${initials}</div>`;
        }
      }
    } else {
      // In unauthenticated guest state: SHOW "Sign In" link, HIDE PFP Avatar button
      if (headerSignInLink) {
        headerSignInLink.classList.remove('hidden');
        headerSignInLink.classList.add('inline-flex');
        headerSignInLink.setAttribute('href', '#login');
        headerSignInLink.setAttribute('title', 'Sign In or Register Profile');
      }

      if (headerProfileBtn) {
        headerProfileBtn.classList.add('hidden');
        headerProfileBtn.classList.remove('flex');
      }

      if (pfpDropdown) {
        pfpDropdown.classList.add('hidden');
      }

      // Reset dropdown fields so no cached profile is ever visible
      const dropdownPfpName = document.getElementById('dropdownPfpName');
      const dropdownPfpEmail = document.getElementById('dropdownPfpEmail');
      const dropdownPfpTier = document.getElementById('dropdownPfpTier');
      const dropdownPfpInitials = document.getElementById('dropdownPfpInitials');
      const headerPfpInitials = document.getElementById('headerPfpInitials');

      if (dropdownPfpName) dropdownPfpName.textContent = 'Privé Member';
      if (dropdownPfpEmail) dropdownPfpEmail.textContent = '';
      if (dropdownPfpTier) dropdownPfpTier.textContent = '✨ Privé Club';
      if (dropdownPfpInitials) dropdownPfpInitials.textContent = '👑';
      if (headerPfpInitials) headerPfpInitials.textContent = '👑';
    }

    // Update active nav links desktop
    document.querySelectorAll('.nav-link, a[data-nav]').forEach(link => {
      const navTarget = link.getAttribute('data-nav') || link.getAttribute('href')?.replace('#', '');
      if (navTarget === this.currentRoute) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Mobile nav active states
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
      const route = item.getAttribute('data-route') || item.getAttribute('href')?.replace('#', '');
      if (route === this.currentRoute) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  renderCurrentView() {
    const mainContainer = document.getElementById('app-main-content');
    if (!mainContainer) return;

    this.clearTimers();

    // Hide main navigation bar on authentication routes (login / register) for distraction-free luxury portal
    const header = document.getElementById('mainHeader') || document.querySelector('header');
    if (header) {
      if (this.currentRoute === 'login' || this.currentRoute === 'register') {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
    }

    this.renderNavigationBadges();

    switch (this.currentRoute) {
      case 'home':
        this.renderHomeView(mainContainer);
        break;
      case 'menu':
        this.renderMenuView(mainContainer);
        break;
      case 'builder':
        this.renderBuilderView(mainContainer);
        break;
      case 'natural':
        this.renderNaturalView(mainContainer);
        break;
      case 'gifting':
        this.renderGiftingView(mainContainer);
        break;
      case 'story':
        this.renderStoryView(mainContainer);
        break;
      case 'boutiques':
        this.renderBoutiquesView(mainContainer);
        break;
      case 'support':
        this.renderSupportView(mainContainer);
        break;
      case 'account':
        this.renderAccountView(mainContainer);
        break;
      case 'login':
        this.renderLoginView(mainContainer, 'signin');
        break;
      case 'register':
        this.renderLoginView(mainContainer, 'register');
        break;
      case 'checkout':
        this.renderCheckoutView(mainContainer);
        break;
      case 'product':
        if (this.routeParam) {
          const prod = PRODUCTS.find(p => p.id === this.routeParam);
          if (prod) {
            this.openProductModal(prod.id);
            this.renderMenuView(mainContainer);
            return;
          }
        }
        this.renderMenuView(mainContainer);
        break;
      default:
        this.renderHomeView(mainContainer);
    }
  }

  // ==========================================
  // HOME PAGE VIEW
  // ==========================================
  renderHomeView(container) {
    const signatureProducts = PRODUCTS.filter(p => p.category === 'signature').slice(0, 6);
    const naturalProducts = PRODUCTS.filter(p => p.category === 'natural').slice(0, 4);

    container.innerHTML = `
      <!-- ========================================== -->
      <!-- FULL-WIDTH SEAMLESS CINEMATIC VIDEO BANNER -->
      <!-- ========================================== -->
      <section id="introVideoBannerContainer"
               class="relative w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] bg-[#060302] overflow-hidden border-b border-[#B8945B]/20 select-none group">
        
        <!-- Background Video Element -->
        <video id="desioIntroVideo"
               class="w-full h-full object-cover object-center transition-opacity duration-700"
               playsinline
               muted
               autoplay
               loop
               preload="auto"
               poster="Assets/video/raw/dessert1_velvet_noir.jpg">
          <source src="Assets/video/la_desio_intro_ad.mp4?v=4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>

        <!-- Ambient Luxury Dark Vignettes -->
        <div class="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
        <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none"></div>

        <!-- Bottom Narrative & Chapter Tracking Overlay -->
        <div class="absolute bottom-5 sm:bottom-6 inset-x-0 z-20 pointer-events-auto">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <!-- Active Dessert Story Details -->
            <div class="max-w-xl space-y-1 sm:space-y-1.5 text-white">
              <div class="flex items-center gap-2">
                <span id="videoChapterBadge" class="px-2.5 py-0.5 rounded bg-[#B8945B]/90 text-[#140A06] text-[10px] sm:text-xs font-serif uppercase tracking-widest font-bold">
                  Signature Reserve
                </span>
              </div>

              <h3 id="videoChapterTitle" class="font-display text-xl sm:text-2xl md:text-3xl text-white drop-shadow-md leading-tight">
                Velvet Noir Royale
              </h3>

              <p id="videoChapterDesc" class="text-xs sm:text-sm text-[#F8F1E7]/80 font-light drop-shadow line-clamp-1">
                72% Single-Origin Venezuelan Cocoa • Piedmont Hazelnut Praline • 24K Gold Leaf
              </p>
            </div>

            <!-- CTAs for the Customer -->
            <div class="flex items-center gap-3 shrink-0">
              <button id="videoOrderFeaturedBtn"
                      onclick="window.ladesioApp.openFeaturedVideoProduct()"
                      class="px-5 py-2.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center gap-2 cursor-pointer">
                <span id="videoOrderFeaturedText">Taste Velvet Noir</span> →
              </button>
              <a href="#menu" class="px-4 py-2.5 rounded-xl bg-black/60 hover:bg-black/90 backdrop-blur border border-white/30 text-white font-serif text-xs font-semibold tracking-wider uppercase transition-all">
                Explore Menu
              </a>
            </div>
          </div>
        </div>

      </section>

      <!-- HERO SECTION (AREA BELOW BANNER) -->
      <section class="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-hero-dark pt-16 pb-20 border-b border-[#B8945B]/30 select-none">
        
        <!-- Ambient Gold Glow & Flourishes -->
        <div class="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#B8945B]/15 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#E6CA85]/10 blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Hero Content -->
            <div class="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B8945B]/15 border border-[#B8945B]/50 text-[#E6CA85] text-xs font-serif tracking-widest uppercase shadow-md">
                <span class="w-1.5 h-1.5 rounded-full bg-[#E6CA85] animate-ping"></span>
                Italian Luxury Patisserie & Atelier
              </div>

              <h1 class="font-display text-4xl sm:text-5xl md:text-6xl text-[#FFFDF9] leading-[1.1] tracking-tight drop-shadow-md">
                WHERE CRAVINGS<br />
                <span class="text-gold-gradient font-normal italic font-serif-elegant">BECOME CREATIONS.</span>
              </h1>

              <p class="text-sm sm:text-base text-[#D6C2B0] max-w-lg mx-auto lg:mx-0 font-sans font-light leading-relaxed">
                Discover exquisite handcrafted Italian desserts or compose a bespoke creation that is entirely and unapologetically your own.
              </p>

              <!-- Hero CTAs -->
              <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="#menu" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1C0A05] text-[#E6CA85] border border-[#B8945B]/60 hover:bg-[#B8945B] hover:text-[#180703] hover:border-[#E6CA85] font-serif text-xs font-semibold tracking-widest uppercase shadow-xl text-center flex items-center justify-center gap-2 transition-all">
                  <span>EXPLORE THE MENU</span> →
                </a>
                <a href="#builder" class="w-full sm:w-auto px-8 py-4 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-widest uppercase shadow-xl text-center flex items-center justify-center gap-2 transition-all">
                  <span>CREATE YOUR DESSERT</span> ✨
                </a>
              </div>

              <!-- Badges -->
              <div class="pt-6 border-t border-[#B8945B]/25 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#E6CA85]">
                <div class="flex items-center gap-2">
                  <span class="text-[#E6CA85] text-base">✦</span>
                  <span class="text-[#D6C2B0]">Handcrafted Daily</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[#E6CA85] text-base">✦</span>
                  <span class="text-[#D6C2B0]">Desio Natural Range</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[#E6CA85] text-base">✦</span>
                  <span class="text-[#D6C2B0]">Bespoke Studio</span>
                </div>
              </div>
            </div>

            <!-- Right Hero Visual Medal & Plated Masterpiece (Automatic Carousel) -->
            <div class="lg:col-span-6 relative flex items-center justify-center">
              
              <!-- Luxury Rotating Circular Seal Frame -->
              <div class="relative w-full max-w-lg aspect-square flex items-center justify-center">
                <div class="absolute inset-0 rounded-full border border-[#B8945B]/40 animate-spin" style="animation-duration: 40s;"></div>
                <div class="absolute inset-4 rounded-full border border-dashed border-[#E6CA85]/30"></div>

                <!-- Main Hero Dessert Plate Display (Interactive Automatic Carousel) -->
                <div id="heroCarouselContainer"
                     class="relative z-10 w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-[#B8945B]/60 bg-[#160703] group select-none">
                  
                  <!-- Slides Container -->
                  <div class="w-full h-full relative overflow-hidden">
                    ${HERO_SLIDES.map((slide, idx) => `
                      <div class="hero-carousel-slide absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === this.heroSlideIndex ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'}"
                           data-slide-index="${idx}">
                        <img src="${slide.image}"
                             alt="${slide.title}"
                             onerror="this.src='https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85'"
                             class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        
                        <!-- Slide Gradient Overlay & Caption -->
                        <div class="absolute inset-0 bg-gradient-to-t from-[#160703]/95 via-[#160703]/40 to-transparent flex flex-col justify-end p-6 text-white">
                          <div class="flex items-center justify-between gap-3">
                            <div class="min-w-0 flex-1">
                              <span class="text-[10px] uppercase tracking-widest text-[#E6CA85] font-serif font-semibold">${slide.badge}</span>
                              <h3 class="font-display text-2xl text-white truncate">${slide.title}</h3>
                              <p class="text-xs text-[#F8F1E7]/80 font-sans mt-0.5 line-clamp-1">${slide.subtitle}</p>
                            </div>
                            <button onclick="window.ladesioApp.openProductModal('${slide.productId}')"
                                    class="px-4 py-2 rounded-lg btn-gold-luxury font-serif text-xs font-semibold tracking-wider text-white shadow-lg">
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    `).join('')}
                  </div>

                  <!-- Carousel Controls: Prev & Next Buttons -->
                  <button onclick="event.stopPropagation(); window.ladesioApp.prevHeroSlide()"
                          class="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-[#B8945B] text-white backdrop-blur border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md focus:outline-none text-lg font-bold"
                          aria-label="Previous slide">
                    ‹
                  </button>
                  <button onclick="event.stopPropagation(); window.ladesioApp.nextHeroSlide()"
                          class="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-[#B8945B] text-white backdrop-blur border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md focus:outline-none text-lg font-bold"
                          aria-label="Next slide">
                    ›
                  </button>

                  <!-- Carousel Pagination Dots -->
                  <div class="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur border border-white/10">
                    ${HERO_SLIDES.map((_, idx) => `
                      <button onclick="event.stopPropagation(); window.ladesioApp.setHeroSlide(${idx})"
                              class="hero-carousel-dot w-2 h-2 rounded-full transition-all ${idx === this.heroSlideIndex ? 'bg-[#E6CA85] w-5' : 'bg-white/40 hover:bg-white/70'}"
                              aria-label="Slide ${idx + 1}"></button>
                    `).join('')}
                  </div>

                </div>

                <!-- Floating Italian Emblem Seal (Transparent Background) -->
                <div class="absolute -top-4 -right-4 w-28 h-28 z-20 drop-shadow-2xl animate-float-slow hidden sm:block pointer-events-none">
                  <img src="Assets/Logo/emblem_transparent.png" alt="La Desio Seal" class="w-full h-full object-contain filter drop-shadow" />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      <!-- SIGNATURE DESSERTS COLLECTION -->
      <section class="py-24 bg-[#140704] border-b border-[#B8945B]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-2xl mx-auto mb-14">
            <span class="text-xs uppercase tracking-widest text-[#E6CA85] font-semibold font-serif">Haute Patisserie</span>
            <h2 class="font-display text-3xl sm:text-4xl text-[#FFFDF9] mt-1 drop-shadow-md">THE LA DESIO COLLECTION</h2>
            <div class="gold-filigree-divider"><span>✦ ❖ ✦</span></div>
            <p class="text-xs sm:text-sm text-[#D6C2B0]">
              Our revered signature creations, each meticulously balanced by master pastry artisans using single-origin cacao and Mediterranean ingredients.
            </p>
          </div>

          <!-- Product Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            ${signatureProducts.map(product => this.renderProductCard(product)).join('')}
          </div>

          <div class="text-center mt-14">
            <a href="#menu" class="inline-block px-10 py-4 rounded-xl btn-chocolate-luxury font-serif text-xs font-semibold tracking-widest uppercase shadow-2xl">
              VIEW COMPLETE MENU CATALOG →
            </a>
          </div>

        </div>
      </section>

      <!-- INTERACTIVE CREATE YOUR DESSERT STUDIO TEASER -->
      <section class="py-24 bg-[#140704] relative overflow-hidden border-b border-[#B8945B]/20" id="home-builder-section">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs uppercase tracking-widest text-[#E6CA85] font-semibold font-serif">The Bespoke Studio</span>
            <h2 class="font-display text-3xl sm:text-4xl text-[#FFFDF9] mt-1 drop-shadow-md">CREATE YOUR OWN DESIO</h2>
            <div class="gold-filigree-divider"><span>✦ ❖ ✦</span></div>
            <p class="text-xs sm:text-sm text-[#D6C2B0]">
              Why choose one combination when you can create your own? Select your base, flavor, filling, toppings, sauce, and name your masterpiece.
            </p>
          </div>

          <!-- Mounted Interactive Dessert Studio Component -->
          <div id="homeDessertStudioMount"></div>

        </div>
      </section>

      <!-- DESIO NATURAL COLLECTION SPOTLIGHT -->
      <section class="py-10 sm:py-12 bg-[#140704] border-b border-[#B8945B]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div class="space-y-1.5 max-w-2xl">
              <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#B8945B]/15 text-[#E6CA85] text-[10px] font-serif tracking-wider uppercase border border-[#B8945B]/40 shadow-sm">
                <span>🌿</span> 0% Artificial Sweeteners • Naturally Sweetened
              </div>
              <h2 class="font-display text-2xl sm:text-3xl text-[#FFFDF9] drop-shadow-md">
                THE DESIO NATURAL COLLECTION
              </h2>
              <p class="text-xs text-[#D6C2B0] leading-relaxed">
                Mindful ingredient-conscious desserts sweetened solely with Medjool dates, Alfonso mango purée, wild blossom honey, and 80% raw Peruvian cacao.
              </p>
              <div class="flex flex-wrap items-center gap-2 pt-1 text-[10px] text-[#F8F1E7]">
                <span class="px-2 py-0.5 rounded-full bg-[#1A0905] border border-[#B8945B]/30 text-[#E6CA85]">🌴 Medjool Dates</span>
                <span class="px-2 py-0.5 rounded-full bg-[#1A0905] border border-[#B8945B]/30 text-[#E6CA85]">🍓 Mountain Fruit Purées</span>
                <span class="px-2 py-0.5 rounded-full bg-[#1A0905] border border-[#B8945B]/30 text-[#E6CA85]">🍫 80% Raw Cacao</span>
                <span class="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-semibold">✓ 0% Refined Sugar</span>
              </div>
            </div>

            <div class="shrink-0">
              <a href="#natural" class="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-lg">
                <span>Explore Collection</span> →
              </a>
            </div>
          </div>

          <!-- Desio Natural Product Cards (Sleek Compact Grid) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            ${naturalProducts.map(product => this.renderProductCard(product, true)).join('')}
          </div>

        </div>
      </section>

      <!-- INGREDIENT STORY -->
      <section class="py-24 bg-[#140704] border-b border-[#B8945B]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-2xl mx-auto mb-14">
            <span class="text-xs uppercase tracking-widest text-[#E6CA85] font-semibold font-serif">Purity & Origins</span>
            <h2 class="font-display text-3xl sm:text-4xl text-[#FFFDF9] mt-1 drop-shadow-md">WHAT GOES INTO YOUR DESIO?</h2>
            <div class="gold-filigree-divider"><span>✦ ❖ ✦</span></div>
            <p class="text-xs sm:text-sm text-[#D6C2B0]">
              We source single-origin estates and pristine harvests so every bite reveals authentic depth.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${INGREDIENT_STORIES.map(story => `
              <div class="rounded-2xl overflow-hidden border border-[#B8945B]/35 shadow-xl luxury-card">
                <div class="h-44 overflow-hidden zoom-container relative border-b border-[#B8945B]/25">
                  <img src="${story.image}" alt="${story.title}" class="w-full h-full object-cover" />
                  <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur text-[10px] text-[#E6CA85] font-serif uppercase tracking-wider border border-[#B8945B]/40">
                    ${story.tag}
                  </span>
                </div>
                <div class="p-5 space-y-2">
                  <h4 class="font-serif text-base font-bold text-[#FFFDF9]">${story.title}</h4>
                  <p class="text-xs text-[#D6C2B0] leading-relaxed">${story.description}</p>
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </section>

      <!-- TRENDING CUSTOMER CREATIONS -->
      <section class="py-24 bg-[#140704] border-b border-[#B8945B]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-2xl mx-auto mb-14">
            <span class="text-xs uppercase tracking-widest text-[#E6CA85] font-semibold font-serif">Community Atelier</span>
            <h2 class="font-display text-3xl sm:text-4xl text-[#FFFDF9] mt-1 drop-shadow-md">CREATIONS WORTH SHARING</h2>
            <div class="gold-filigree-divider"><span>✦ ❖ ✦</span></div>
            <p class="text-xs sm:text-sm text-[#D6C2B0]">
              Discover popular recipes composed by clients in our bespoke studio. Try their recipe with a single tap.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${TRENDING_CREATIONS.map(item => `
              <div class="luxury-card rounded-2xl border border-[#B8945B]/40 p-5 shadow-2xl flex flex-col justify-between space-y-4 transition-all duration-300 bg-gradient-to-b from-[#583324] to-[#3E2014]">
                <div>
                  <div class="flex items-center gap-3 mb-3">
                    <img src="${item.creatorAvatar}" alt="${item.creator}" class="w-8 h-8 rounded-full object-cover border border-[#B8945B]/60" />
                    <div>
                      <h5 class="font-serif text-sm font-bold text-[#FFFDF9]">${item.name}</h5>
                      <span class="text-[10px] text-[#E6CA85]">Created by ${item.creator}</span>
                    </div>
                  </div>

                  <div class="relative h-40 rounded-xl overflow-hidden mb-3 border border-[#B8945B]/25">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" />
                    <span class="absolute bottom-2 right-2 bg-[#180804]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] text-[#E6CA85] font-semibold shadow border border-[#B8945B]/30">
                      ❤️ ${item.likes}
                    </span>
                  </div>

                  <p class="text-[11px] text-[#E8D7C7] line-clamp-2 italic font-serif">"${item.recipe}"</p>
                </div>

                <div class="pt-2 border-t border-[#B8945B]/25 flex items-center justify-between">
                  <span class="font-display font-bold text-base text-[#FFFDF9]">₹${item.price}</span>
                  <button onclick='window.ladesioApp.cloneTrendingCreation(${JSON.stringify(item.config).replace(/'/g, "\\'")})'
                          class="px-3.5 py-1.5 rounded-lg btn-gold-luxury text-[11px] font-serif font-semibold tracking-wider shadow-md">
                    TRY CREATION
                  </button>
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </section>

      <!-- LUXURY GIFTING SECTION -->
      <section class="py-24 bg-[#140704] text-[#FFFDF9] relative overflow-hidden border-b border-[#B8945B]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-6 space-y-6">
              <span class="text-xs uppercase tracking-widest text-[#E6CA85] font-semibold font-serif">Exquisite Gestures</span>
              <h2 class="font-display text-3xl sm:text-4xl md:text-5xl text-[#FFFDF9]">
                A LITTLE DESIO<br />
                <span class="text-gold-gradient font-serif-elegant font-normal italic">FOR SOMEONE SPECIAL.</span>
              </h2>
              <div class="gold-filigree-divider !mx-0"><span>✦ ❖ ✦</span></div>
              <p class="text-xs sm:text-sm text-[#D6C2B0] leading-relaxed font-light">
                Present extraordinary moments. Our velvet touch gift hampers, gold seal wax accents, and custom calligraphy cards transform dessert into an unforgettable memory.
              </p>

              <div class="flex flex-wrap gap-2 text-xs">
                <span class="px-3 py-1.5 rounded-lg bg-[#28120B] border border-[#B8945B]/45 text-[#E6CA85] shadow-md">🎁 Dessert Chests</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#28120B] border border-[#B8945B]/45 text-[#E6CA85] shadow-md">✨ Celebration Boxes</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#28120B] border border-[#B8945B]/45 text-[#E6CA85] shadow-md">🌹 Couple's Collection</span>
                <span class="px-3 py-1.5 rounded-lg bg-[#28120B] border border-[#B8945B]/45 text-[#E6CA85] shadow-md">✉️ Digital Gift Cards</span>
              </div>

              <div class="pt-4">
                <a href="#gifting" class="inline-block px-8 py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-widest uppercase shadow-xl">
                  EXPLORE GIFTING COLLECTION →
                </a>
              </div>
            </div>

            <div class="lg:col-span-6 relative">
              <div class="relative rounded-2xl overflow-hidden border-2 border-[#B8945B]/70 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=85"
                     alt="La Desio Royale Hamper"
                     class="w-full h-[420px] object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span class="text-xs text-[#E6CA85] font-serif uppercase tracking-widest">The Flagship Presentation</span>
                  <h4 class="font-display text-2xl text-white">The Desio Royale Hamper</h4>
                  <p class="text-xs text-[#D6C2B0] mt-1">6-Piece Handcrafted Signature Patisserie Selection</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- INSTAGRAM / SOCIAL SECTION -->
      <section class="py-24 bg-[#140704] border-b border-[#B8945B]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs uppercase tracking-widest text-[#E6CA85] font-semibold font-serif">@LADESIO.OFFICIAL</span>
            <h2 class="font-display text-3xl sm:text-4xl text-[#FFFDF9] mt-1 drop-shadow-md">FOLLOW THE DESIO</h2>
            <div class="gold-filigree-divider"><span>✦ ❖ ✦</span></div>
            <p class="text-xs sm:text-sm text-[#D6C2B0]">
              Tag #WhereCravingsBecomeCreations to be featured on our Milan salon gallery.
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            ${INSTAGRAM_POSTS.map(post => `
              <div class="relative aspect-square rounded-xl overflow-hidden group cursor-pointer border border-[#B8945B]/30 hover:border-[#E6CA85]/70 transition-colors">
                <img src="${post.image}" alt="Social post" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-white text-center">
                  <span class="text-base mb-1 text-[#E6CA85]">❤️ ${post.likes}</span>
                  <p class="text-[9px] text-[#D6C2B0] line-clamp-3">${post.caption}</p>
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </section>
    `;

    // Initialize Hero Carousel, Dishes Banner & Cinematic Intro Video Ad Banner
    this.initHeroCarousel();
    this.initDishesBannerCarousel();
    this.initIntroVideoBanner();


    // Mount Interactive Dessert Studio on Home
    const studioMount = document.getElementById('homeDessertStudioMount');
    if (studioMount) {
      window.dessertStudio = new DessertBuilder('homeDessertStudioMount', () => {
        this.openCartDrawer();
      });
      window.dessertStudio.init();
    }
  }

  // ==========================================
  // HERO CAROUSEL CONTROLLER METHODS
  // ==========================================
  initHeroCarousel() {
    this.stopHeroCarouselTimer();
    const container = document.getElementById('heroCarouselContainer');
    if (!container) return;

    // Pause auto-rotation on mouse enter, resume on mouse leave
    container.onmouseenter = () => this.stopHeroCarouselTimer();
    container.onmouseleave = () => this.startHeroCarouselTimer();

    // Start auto-advancing
    this.startHeroCarouselTimer();
  }

  startHeroCarouselTimer() {
    this.stopHeroCarouselTimer();
    this.heroCarouselTimer = setInterval(() => {
      this.nextHeroSlide();
    }, 3500);
  }

  stopHeroCarouselTimer() {
    if (this.heroCarouselTimer) {
      clearInterval(this.heroCarouselTimer);
      this.heroCarouselTimer = null;
    }
  }

  setHeroSlide(index) {
    const total = HERO_SLIDES.length;
    this.heroSlideIndex = ((index % total) + total) % total;

    const slides = document.querySelectorAll('.hero-carousel-slide');
    slides.forEach((slide, idx) => {
      if (idx === this.heroSlideIndex) {
        slide.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
        slide.classList.add('opacity-100', 'pointer-events-auto', 'z-10');
      } else {
        slide.classList.remove('opacity-100', 'pointer-events-auto', 'z-10');
        slide.classList.add('opacity-0', 'pointer-events-none', 'z-0');
      }
    });

    const dots = document.querySelectorAll('.hero-carousel-dot');
    dots.forEach((dot, idx) => {
      if (idx === this.heroSlideIndex) {
        dot.className = 'hero-carousel-dot w-5 h-2 rounded-full transition-all bg-[#E6CA85]';
      } else {
        dot.className = 'hero-carousel-dot w-2 h-2 rounded-full transition-all bg-white/40 hover:bg-white/70';
      }
    });
  }

  nextHeroSlide() {
    this.setHeroSlide(this.heroSlideIndex + 1);
  }

  prevHeroSlide() {
    this.setHeroSlide(this.heroSlideIndex - 1);
  }

  // ==========================================
  // TOP DISHES BANNER CAROUSEL CONTROLLER
  // ==========================================
  initDishesBannerCarousel() {
    if (this.dishesBannerTimer) {
      clearInterval(this.dishesBannerTimer);
      this.dishesBannerTimer = null;
    }
    const track = document.getElementById('dishesBannerTrack');
    if (!track) return;

    // Automatic smooth advancement
    this.dishesBannerTimer = setInterval(() => {
      const currentTrack = document.getElementById('dishesBannerTrack');
      if (!currentTrack || typeof currentTrack.scrollBy !== 'function') return;
      if (currentTrack.scrollLeft + currentTrack.clientWidth >= currentTrack.scrollWidth - 10) {
        if (typeof currentTrack.scrollTo === 'function') {
          currentTrack.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          currentTrack.scrollLeft = 0;
        }
      } else {
        currentTrack.scrollBy({ left: 240, behavior: 'smooth' });
      }
    }, 3200);

    track.onmouseenter = () => {
      if (this.dishesBannerTimer) {
        clearInterval(this.dishesBannerTimer);
        this.dishesBannerTimer = null;
      }
    };

    track.onmouseleave = () => {
      this.initDishesBannerCarousel();
    };
  }

  scrollDishesBanner(direction) {
    const track = document.getElementById('dishesBannerTrack');
    if (!track) return;
    if (typeof track.scrollBy === 'function') {
      track.scrollBy({ left: direction * 240, behavior: 'smooth' });
    } else {
      track.scrollLeft += direction * 240;
    }
  }

  // ==========================================
  // INTRO VIDEO AD HERO BANNER CONTROLLER
  // ==========================================
  initIntroVideoBanner() {
    const video = document.getElementById('desioIntroVideo');
    if (!video) return;

    this.introVideoActiveChapter = 0;
    this.updateVideoChapterUI(0);

    // Track timeupdate to update active chapter and 5 progress bar segments
    video.ontimeupdate = () => {
      const cur = video.currentTime;

      // Find active chapter
      const chapterIdx = INTRO_VIDEO_CHAPTERS.findIndex(ch => cur >= ch.start && cur < ch.end);
      if (chapterIdx !== -1 && chapterIdx !== this.introVideoActiveChapter) {
        this.introVideoActiveChapter = chapterIdx;
        this.updateVideoChapterUI(chapterIdx);
      }

      // Update the 5 timeline segments
      INTRO_VIDEO_CHAPTERS.forEach((ch, idx) => {
        const segEl = document.getElementById(`videoSeg${idx + 1}`);
        if (!segEl) return;
        if (cur < ch.start) {
          segEl.style.width = '0%';
        } else if (cur >= ch.end) {
          segEl.style.width = '100%';
        } else {
          const segPercent = Math.min(100, Math.max(0, ((cur - ch.start) / (ch.end - ch.start)) * 100));
          segEl.style.width = `${segPercent}%`;
        }
      });
    };

    // Keep play/pause icon in sync
    video.onplay = () => {
      const icon = document.getElementById('introVideoPlayPauseIcon');
      if (icon) icon.textContent = '❚❚';
    };
    video.onpause = () => {
      const icon = document.getElementById('introVideoPlayPauseIcon');
      if (icon) icon.textContent = '▶';
    };

    // Mute/unmute sync
    video.onvolumechange = () => {
      const muteIcon = document.getElementById('introVideoMuteIcon');
      const muteText = document.getElementById('introVideoMuteText');
      if (video.muted || video.volume === 0) {
        if (muteIcon) muteIcon.textContent = '🔇';
        if (muteText) muteText.textContent = 'Sound Off';
      } else {
        if (muteIcon) muteIcon.textContent = '🔊';
        if (muteText) muteText.textContent = 'Sound On';
      }
    };

    // Ensure smooth autoplay
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const playIcon = document.getElementById('introVideoPlayPauseIcon');
        if (playIcon) playIcon.textContent = '▶';
      });
    }
  }

  updateVideoChapterUI(chapterIndex) {
    const ch = INTRO_VIDEO_CHAPTERS[chapterIndex];
    if (!ch) return;

    const badge = document.getElementById('videoChapterBadge');
    const idxEl = document.getElementById('videoChapterIndex');
    const title = document.getElementById('videoChapterTitle');
    const desc = document.getElementById('videoChapterDesc');
    const btn = document.getElementById('videoOrderFeaturedBtn');
    const btnText = document.getElementById('videoOrderFeaturedText');

    if (badge) badge.textContent = ch.badge;
    if (idxEl) idxEl.textContent = `0${chapterIndex + 1} / 0${INTRO_VIDEO_CHAPTERS.length}`;
    if (title) title.textContent = ch.title;
    if (desc) desc.textContent = ch.subtitle;

    if (btn) {
      if (ch.ctaText) {
        btn.style.display = 'inline-flex';
        if (btnText) btnText.textContent = ch.ctaText;
      } else {
        btn.style.display = 'none';
      }
    }
  }

  toggleIntroVideoAudio() {
    const video = document.getElementById('desioIntroVideo');
    if (!video) return;
    video.muted = !video.muted;
    if (!video.muted) {
      video.volume = 0.85;
      const muteIcon = document.getElementById('introVideoMuteIcon');
      const muteText = document.getElementById('introVideoMuteText');
      if (muteIcon) muteIcon.textContent = '🔊';
      if (muteText) muteText.textContent = 'Sound On';
    } else {
      const muteIcon = document.getElementById('introVideoMuteIcon');
      const muteText = document.getElementById('introVideoMuteText');
      if (muteIcon) muteIcon.textContent = '🔇';
      if (muteText) muteText.textContent = 'Sound Off';
    }
  }

  toggleIntroVideoPlayback() {
    const video = document.getElementById('desioIntroVideo');
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  restartIntroVideo() {
    const video = document.getElementById('desioIntroVideo');
    if (!video) return;
    video.currentTime = 0;
    video.play();
  }

  seekIntroVideoToChapter(chapterIdx) {
    const video = document.getElementById('desioIntroVideo');
    if (!video) return;
    const ch = INTRO_VIDEO_CHAPTERS[chapterIdx];
    if (ch) {
      video.currentTime = ch.start + 0.05;
      video.play();
      this.introVideoActiveChapter = chapterIdx;
      this.updateVideoChapterUI(chapterIdx);
    }
  }

  openFeaturedVideoProduct() {
    const ch = INTRO_VIDEO_CHAPTERS[this.introVideoActiveChapter || 0];
    if (ch && ch.productId) {
      this.openProductModal(ch.productId);
    } else {
      this.openDessertStudio();
    }
  }

  // Backwards compatibility aliases
  initFullBannerCarousel() {
    this.initIntroVideoBanner();
  }
  startFullBannerTimer() {}
  stopFullBannerTimer() {}
  setFullBannerSlide(idx) {
    this.seekIntroVideoToChapter(idx);
  }
  nextFullBannerSlide() {
    const nextIdx = ((this.introVideoActiveChapter + 1) % INTRO_VIDEO_CHAPTERS.length);
    this.seekIntroVideoToChapter(nextIdx);
  }
  prevFullBannerSlide() {
    const prevIdx = ((this.introVideoActiveChapter - 1 + INTRO_VIDEO_CHAPTERS.length) % INTRO_VIDEO_CHAPTERS.length);
    this.seekIntroVideoToChapter(prevIdx);
  }

  // ==========================================
  // MENU CATALOG VIEW
  // ==========================================
  renderMenuView(container) {
    const filteredProducts = PRODUCTS.filter(p => {
      // Category filter
      if (this.selectedCategory !== 'all') {
        if (this.selectedCategory === 'signature' && p.category !== 'signature') return false;
        if (this.selectedCategory === 'natural' && p.category !== 'natural') return false;
        if (this.selectedCategory === 'protein' && (p.category !== 'protein' && p.secondaryCategory !== 'protein' && !p.proteinRich)) return false;
        if (this.selectedCategory === 'gifting' && p.category !== 'gifting') return false;
        if (!['signature', 'natural', 'protein', 'gifting'].includes(this.selectedCategory)) {
          if (p.category !== this.selectedCategory && p.secondaryCategory !== this.selectedCategory) return false;
        }
      }

      // Eggless Toggle Filter
      if (this.activeFilter.onlyEggless && !p.isEggless) {
        return false;
      }

      // Dietary filter
      if (this.activeFilter.dietary !== 'all') {
        if (this.activeFilter.dietary === 'eggless' && !p.isEggless) return false;
        if (!p.dietary.some(d => d.toLowerCase().includes(this.activeFilter.dietary.toLowerCase()))) {
          return false;
        }
      }

      // Price filter
      if (p.price > this.activeFilter.priceMax) return false;

      return true;
    });

    // Sorting
    if (this.activeFilter.sortBy === 'price-low') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.activeFilter.sortBy === 'price-high') {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (this.activeFilter.sortBy === 'rating') {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    const hasActiveFilters = this.activeFilter.onlyEggless || this.activeFilter.dietary !== 'all' || this.activeFilter.priceMax < 3500 || this.selectedCategory !== 'all' || this.activeFilter.sortBy !== 'recommended';
    const isBirthdayDiscount = (typeof loyaltyStore !== 'undefined' && typeof loyaltyStore.isBirthdayDiscountAvailable === 'function' && loyaltyStore.isBirthdayDiscountAvailable());
    const activePatron = (typeof loyaltyStore !== 'undefined' && typeof loyaltyStore.getActiveUser === 'function') ? loyaltyStore.getActiveUser() : null;

    container.innerHTML = `
      <div class="section-collection py-16 border-b border-[#B8945B]/25">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span class="text-xs uppercase tracking-widest text-[#E6CA85] font-semibold font-serif">Patisserie Catalog</span>
          <h1 class="font-display text-4xl sm:text-5xl text-[#FFFDF9] mt-1 drop-shadow-md">THE DESIO MENU</h1>
          <div class="gold-filigree-divider"><span>✦ ❖ ✦</span></div>
          <p class="text-xs sm:text-sm text-[#D6C2B0] max-w-xl mx-auto">
            Explore our curated menu of handcrafted cakes, tarts, high-protein patisserie, and mindful creations.
          </p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        ${isBirthdayDiscount ? `
          <!-- Birthday Privilege Menu Banner -->
          <div class="mb-8 p-4 sm:p-6 rounded-3xl bg-gradient-to-r from-[#2F130A] via-[#1A0804] to-[#2F130A] border-2 border-amber-400/90 shadow-[0_0_40px_rgba(230,202,133,0.35)] flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B8945B] via-[#F5D796] to-[#B8945B] text-black text-3xl flex items-center justify-center font-bold shadow-xl shrink-0 border border-white/40">
                🎂
              </div>
              <div class="space-y-1">
                <div class="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                  <span class="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-[#F5D796] text-black text-[10px] font-serif font-black uppercase tracking-wider shadow-sm">
                    🎁 30% BIRTHDAY GIFT ACTIVE
                  </span>
                  <span class="text-[11px] text-emerald-400 font-serif font-semibold">
                    ✓ Gifted on all creations below
                  </span>
                </div>
                <h3 class="font-display text-xl sm:text-2xl text-white font-bold tracking-wide">
                  ${(loyaltyStore && typeof loyaltyStore.hasUserBeenWishedThisYear === 'function' && loyaltyStore.hasUserBeenWishedThisYear(activePatron))
                    ? `🎁 Exclusive Birthday Gift Active (30% OFF on 1 Treat)`
                    : `Happy Birthday, ${activePatron ? activePatron.name : 'Dear Friend'}! 🎂 Enjoy 30% OFF Today!`
                  }
                </h3>
                <p class="text-xs text-[#D6C2B0] max-w-xl font-serif leading-relaxed">
                  ${(loyaltyStore && typeof loyaltyStore.hasUserBeenWishedThisYear === 'function' && loyaltyStore.hasUserBeenWishedThisYear(activePatron))
                    ? `Your 30% birthday privilege is automatically applied to 1 handcrafted dessert in your shopping bag today.`
                    : `Wishing you a day filled with sweetness, laughter, and delight. Enjoy 30% off your choice of handcrafted dessert today!`
                  }
                </p>
              </div>
            </div>
            <div class="shrink-0 flex flex-col items-center md:items-end gap-1">
              <div class="px-4 py-2 rounded-xl bg-amber-400/20 border border-amber-400/80 text-amber-300 text-xs font-mono font-bold tracking-wider shadow-md">
                🎉 30% BIRTHDAY GIFT
              </div>
              <span class="text-[10px] text-[#A89280] italic">Enjoy your special celebration today</span>
            </div>
          </div>
        ` : ''}
        
        <!-- Haute Patisserie Category Navigation -->
        <div class="mb-5">
          <div class="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
            ${CATEGORIES.map(cat => `
              <button onclick="window.ladesioApp.setMenuCategory('${cat.id}')"
                      class="px-4 py-2.5 rounded-2xl text-xs font-serif font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer shrink-0 ${this.selectedCategory === cat.id ? 'bg-gradient-to-r from-[#DFBA73] via-[#E8CD8C] to-[#C9A46B] text-[#140602] font-bold shadow-[0_4px_20px_rgba(223,186,115,0.35)] ring-1 ring-[#FFFDF9]/40 transform scale-[1.02]' : 'bg-[#180804] text-[#D6C2B0] border border-[#B8945B]/30 hover:border-[#E6CA85] hover:text-[#FFFDF9] hover:bg-[#240F08] shadow-sm'}">
                <span>${cat.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Unified Luxury Filter Bar & Controls -->
        <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#180905] via-[#1F0C07] to-[#180905] border border-[#B8945B]/35 shadow-2xl mb-8">
          <div class="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            
            <!-- Left: Dietary Controls & Integrated 100% Eggless Toggle -->
            <div class="flex flex-wrap items-center gap-2 sm:gap-3">
              <!-- Integrated 100% Eggless Toggle Pill -->
              <button type="button"
                      onclick="window.ladesioApp.toggleEgglessFilter()"
                      class="px-3.5 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all flex items-center gap-2 shadow-sm cursor-pointer shrink-0 ${this.activeFilter.onlyEggless ? 'bg-emerald-950 border-2 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.35)] ring-1 ring-emerald-400/40' : 'bg-[#220E08] text-[#D6C2B0] border border-[#B8945B]/35 hover:border-emerald-500/60 hover:text-white'}">
                <span class="w-2 h-2 rounded-full ${this.activeFilter.onlyEggless ? 'bg-emerald-400 animate-pulse ring-2 ring-emerald-300' : 'bg-emerald-500'}"></span>
                <span>🌱 100% Eggless Only</span>
                ${this.activeFilter.onlyEggless ? '<span class="text-[9px] bg-emerald-500/30 text-emerald-200 px-1.5 py-0.2 rounded font-mono font-bold">ON</span>' : ''}
              </button>

              <!-- Dietary Select Dropdown -->
              <div class="flex items-center gap-1.5">
                <span class="text-[11px] font-serif text-[#A89280] hidden sm:inline">Dietary:</span>
                <div class="relative">
                  <select onchange="window.ladesioApp.setDietaryFilter(this.value)"
                          class="appearance-none pl-3 pr-8 py-2 rounded-xl border border-[#B8945B]/40 bg-[#220E08] text-[#FFFDF9] text-xs font-serif focus:outline-none focus:border-[#E6CA85] cursor-pointer shadow-sm">
                    <option value="all" ${this.activeFilter.dietary === 'all' ? 'selected' : ''}>All Dietary Notes</option>
                    <option value="high protein" ${this.activeFilter.dietary === 'high protein' ? 'selected' : ''}>High Protein & Whey</option>
                    <option value="no added refined sugar" ${this.activeFilter.dietary === 'no added refined sugar' ? 'selected' : ''}>No Added Refined Sugar</option>
                    <option value="vegetarian" ${this.activeFilter.dietary === 'vegetarian' ? 'selected' : ''}>Vegetarian</option>
                    <option value="vegan" ${this.activeFilter.dietary === 'vegan' ? 'selected' : ''}>Vegan & Dairy-Free</option>
                    <option value="gluten-free" ${this.activeFilter.dietary === 'gluten-free' ? 'selected' : ''}>Gluten-Free</option>
                  </select>
                  <span class="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#E6CA85] text-[10px]">▼</span>
                </div>
              </div>
            </div>

            <!-- Right: Price Range, Sort, Count & Reset -->
            <div class="flex flex-wrap items-center gap-3 sm:gap-4 ml-auto">
              <!-- Price Slider -->
              <div class="flex items-center gap-2">
                <span class="text-[11px] font-serif text-[#A89280]">Max:</span>
                <span class="font-mono font-bold text-xs text-[#E6CA85] px-2 py-1 rounded-lg bg-[#220E08] border border-[#B8945B]/30 min-w-[54px] text-center">₹${this.activeFilter.priceMax}</span>
                <input type="range" min="300" max="3500" step="100" value="${this.activeFilter.priceMax}"
                       oninput="window.ladesioApp.setPriceFilter(this.value)"
                       class="w-20 sm:w-28 accent-[#E6CA85] cursor-pointer" />
              </div>

              <!-- Sort Select -->
              <div class="flex items-center gap-1.5">
                <span class="text-[11px] font-serif text-[#A89280] hidden md:inline">Sort:</span>
                <div class="relative">
                  <select onchange="window.ladesioApp.setSortFilter(this.value)"
                          class="appearance-none pl-3 pr-8 py-2 rounded-xl border border-[#B8945B]/40 bg-[#220E08] text-[#FFFDF9] text-xs font-serif focus:outline-none focus:border-[#E6CA85] cursor-pointer shadow-sm">
                    <option value="recommended" ${this.activeFilter.sortBy === 'recommended' ? 'selected' : ''}>Recommended</option>
                    <option value="price-low" ${this.activeFilter.sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                    <option value="price-high" ${this.activeFilter.sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                    <option value="rating" ${this.activeFilter.sortBy === 'rating' ? 'selected' : ''}>Top Rated</option>
                  </select>
                  <span class="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#E6CA85] text-[10px]">▼</span>
                </div>
              </div>

              <!-- Reset Filters Button (Shown when filters active) -->
              ${hasActiveFilters ? `
                <button onclick="window.ladesioApp.resetFilters()"
                        class="px-2.5 py-1.5 rounded-xl text-[11px] font-serif font-bold text-amber-300 hover:text-white border border-amber-400/40 bg-amber-950/40 hover:bg-amber-900/60 transition-colors flex items-center gap-1 shadow-sm cursor-pointer">
                  <span>✕</span> Reset
                </button>
              ` : ''}

              <!-- Results Counter -->
              <div class="text-[11px] font-serif text-[#D6C2B0] pl-1 hidden sm:inline-block">
                <span class="font-mono font-bold text-white">${filteredProducts.length}</span> creations
              </div>
            </div>

          </div>
        </div>

        <!-- Product Grid -->
        ${filteredProducts.length > 0 ? `
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            ${filteredProducts.map(p => this.renderProductCard(p)).join('')}
          </div>
        ` : `
          <div class="text-center py-16 bg-[#180905] rounded-2xl border border-[#B8945B]/30 p-8">
            <div class="text-3xl mb-2">🍰</div>
            <h4 class="font-display text-xl text-[#FFFDF9]">No desserts match your selected filters</h4>
            <p class="text-xs text-[#D6C2B0] mt-1 mb-4">Try clearing some dietary filters or widening your price range.</p>
            <button onclick="window.ladesioApp.resetFilters()" class="px-6 py-2 rounded-lg btn-gold-luxury font-serif text-xs font-semibold">
              Reset Filters
            </button>
          </div>
        `}

      </div>
    `;
  }

  // ==========================================
  // DEDICATED DESSERT BUILDER PAGE
  // ==========================================
  renderBuilderView(container) {
    container.innerHTML = `
      <div class="w-full min-h-[calc(100vh-4.25rem)] lg:max-h-[calc(100vh-4.25rem)] bg-gradient-to-b from-[#140603] via-[#1A0A06] to-[#120502] flex flex-col justify-start px-2 sm:px-4 lg:px-6 py-2 sm:py-3 max-w-7xl mx-auto">
        <div id="fullDessertStudioMount" class="w-full flex-1 flex flex-col justify-center"></div>
      </div>
    `;

    window.dessertStudio = new DessertBuilder('fullDessertStudioMount', () => {
      this.openCartDrawer();
    });
    window.dessertStudio.init();
  }

  // ==========================================
  // DESIO NATURAL DEDICATED PAGE
  // ==========================================
  renderNaturalView(container) {
    const naturalProducts = PRODUCTS.filter(p => p.category === 'natural');

    container.innerHTML = `
      <div class="bg-gradient-to-b from-[#152618] via-[#170C07] to-[#120502] py-8 sm:py-10 border-b border-[#8A9A86]/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#8A9A86]/20 text-[#A3E635] text-[10px] font-serif tracking-wider uppercase mb-2 border border-[#8A9A86]/35">
            <span>🌿</span> The Mindful Patisserie Collection
          </div>
          <h1 class="font-display text-3xl sm:text-4xl text-[#FFFDF9] drop-shadow-md">DESIO NATURAL</h1>
          <p class="font-serif-elegant italic text-base sm:text-lg text-[#E6CA85] mt-1">"Thoughtfully crafted. Naturally inspired."</p>
          <div class="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#B8945B] to-transparent mx-auto mt-2 mb-2"></div>
          <p class="text-xs text-[#D6C2B0] max-w-xl mx-auto leading-relaxed">
            Mindful patisserie crafted without artificial sweeteners and reduced reliance on refined sugars, celebrating Medjool dates, wild raw honey, and concentrated fruit purées.
          </p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        <!-- Educational Pillars Banner (Compact 1-row strip) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="p-3.5 rounded-xl luxury-card border border-[#8A9A86]/40 shadow-md flex items-center gap-3">
            <span class="text-2xl shrink-0">🍓</span>
            <div>
              <h4 class="font-serif text-xs font-bold text-[#FFFDF9]">Real Fruit & Purées</h4>
              <p class="text-[11px] text-[#D6C2B0]">Mountain strawberries, wild berries & Alphonso mangoes.</p>
            </div>
          </div>

          <div class="p-3.5 rounded-xl luxury-card border border-[#8A9A86]/40 shadow-md flex items-center gap-3">
            <span class="text-2xl shrink-0">🌴</span>
            <div>
              <h4 class="font-serif text-xs font-bold text-[#FFFDF9]">Naturally Sweetened</h4>
              <p class="text-[11px] text-[#D6C2B0]">Sun-cured Medjool dates & wild raw blossom honey.</p>
            </div>
          </div>

          <div class="p-3.5 rounded-xl luxury-card border border-[#8A9A86]/40 shadow-md flex items-center gap-3">
            <span class="text-2xl shrink-0">🍫</span>
            <div>
              <h4 class="font-serif text-xs font-bold text-[#FFFDF9]">80% Raw Cacao</h4>
              <p class="text-[11px] text-[#D6C2B0]">Single-origin raw Peruvian cacao with deep cocoa complexity.</p>
            </div>
          </div>
        </div>

        <!-- Natural Products Grid -->
        <div>
          <div class="flex items-center justify-between mb-5 border-b border-[#B8945B]/20 pb-2">
            <div>
              <h3 class="font-display text-xl text-[#FFFDF9]">The Natural Atelier Menu</h3>
              <p class="text-[11px] text-[#D6C2B0]">Transparent ingredients, clean nutrition, and zero synthetic additives.</p>
            </div>
            <span class="text-xs font-mono text-[#E6CA85] font-bold px-2.5 py-0.5 rounded-full bg-[#1A0905] border border-[#B8945B]/30">
              ${naturalProducts.length} Creations
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            ${naturalProducts.map(p => this.renderProductCard(p, true)).join('')}
          </div>
        </div>

      </div>
    `;
  }

  // ==========================================
  // GIFTING & CELEBRATION PAGE
  // ==========================================
  renderGiftingView(container) {
    const giftProducts = PRODUCTS.filter(p => p.category === 'gifting');

    container.innerHTML = `
      <div class="bg-[#3A1F17] text-[#FFFDF9] py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Exquisite Gestures</span>
          <h1 class="font-display text-4xl sm:text-5xl text-white mt-1">LA DESIO GIFTING</h1>
          <p class="font-serif-elegant italic text-xl text-[#E6CA85] mt-2">"A Little Desio For Someone Special."</p>
          <div class="w-16 h-[1px] bg-[#B8945B] mx-auto mt-4 mb-4"></div>
          <p class="text-xs sm:text-sm text-[#F8F1E7]/80 max-w-xl mx-auto">
            Luxury presentation chests, handcrafted gift boxes, personalized Italian calligraphy cards, and digital e-gift vouchers.
          </p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        <!-- Gift Hampers Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${giftProducts.map(p => {
            const pricing = this.getProductPricing(p);
            return `
            <div class="luxury-card rounded-2xl border border-[#B8945B]/40 p-6 shadow-2xl flex flex-col md:flex-row gap-6 transition-all duration-300 bg-gradient-to-b from-[#583324] to-[#3E2014]">
              <div class="w-full md:w-1/2 h-64 rounded-xl overflow-hidden relative border border-[#B8945B]/30">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" />
                <div class="absolute top-3 left-3 flex flex-col gap-1 z-10">
                  ${pricing.isBirthdayDiscount ? `
                    <span class="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 via-[#F5D796] to-amber-400 text-black text-[9.5px] font-serif font-black tracking-wider uppercase shadow-xl border border-amber-300 flex items-center gap-1 animate-pulse">
                      <span>🎂</span> 30% OFF BIRTHDAY
                    </span>
                  ` : ''}
                  <span class="px-3 py-1 rounded-full bg-[#180804] text-[#E6CA85] text-[10px] font-serif uppercase tracking-wider border border-[#B8945B]/50 backdrop-blur-md font-semibold shadow">
                    ${p.badge}
                  </span>
                </div>
              </div>
              <div class="w-full md:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <h3 class="font-display text-2xl text-[#FFFDF9]">${p.name}</h3>
                  <p class="text-xs text-[#E6CA85] font-serif italic">${p.subtitle}</p>
                  <p class="text-xs text-[#E8D7C7] mt-2 leading-relaxed font-normal">${p.description}</p>
                </div>
                <div class="pt-4 border-t border-[#B8945B]/25 flex items-center justify-between">
                  <div>
                    ${pricing.isBirthdayDiscount ? `
                      <span class="text-xs text-rose-400/90 line-through font-mono">₹${pricing.originalPrice}</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="font-display font-bold text-xl text-[#F5D796]">₹${pricing.price}</span>
                        <span class="text-[9px] font-bold text-emerald-400 uppercase bg-emerald-950/80 border border-emerald-500/50 px-1.5 py-0.2 rounded">30% OFF</span>
                      </div>
                    ` : `
                      <span class="text-xs text-[#C4B2A3] line-through ${p.originalPrice ? '' : 'hidden'}">₹${p.originalPrice}</span>
                      <span class="font-display font-bold text-xl text-[#FFFDF9]">₹${p.price}</span>
                    `}
                  </div>
                  <button onclick="window.ladesioApp.quickAddToCart('${p.id}')"
                          class="px-5 py-2 rounded-lg btn-gold-luxury font-serif text-xs font-semibold shadow-md">
                    Order Gift Box
                  </button>
                </div>
              </div>
            </div>
            `;
          }).join('')}
        </div>

        <!-- Digital Gift Card Studio -->
        <div class="bg-[#180804] rounded-3xl border border-[#B8945B]/40 p-8 shadow-2xl">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-6 space-y-4">
              <span class="text-xs uppercase tracking-widest text-[#E6CA85] font-semibold font-serif">Instant E-Gifting</span>
              <h3 class="font-display text-3xl text-[#FFFDF9]">La Desio Digital Gift Pass</h3>
              <p class="text-xs text-[#D6C2B0] leading-relaxed">
                Allow your loved ones to design their own dream dessert in our studio. Delivered instantly via email with your bespoke message.
              </p>

              <div class="space-y-3 pt-2 text-xs">
                <div>
                  <label class="block font-semibold text-[#FFFDF9] mb-1">Select Gift Amount</label>
                  <div class="flex gap-2">
                    <button class="px-4 py-2 rounded-lg border border-[#B8945B] bg-[#B8945B] text-[#140602] font-bold shadow-md">₹1,000</button>
                    <button class="px-4 py-2 rounded-lg border border-[#B8945B]/40 bg-[#241009] text-[#E6CA85] font-bold hover:bg-[#B8945B]/20">₹2,500</button>
                    <button class="px-4 py-2 rounded-lg border border-[#B8945B]/40 bg-[#241009] text-[#E6CA85] font-bold hover:bg-[#B8945B]/20">₹5,000</button>
                  </div>
                </div>

                <div>
                  <label class="block font-semibold text-[#FFFDF9] mb-1">Recipient Email</label>
                  <input type="email" placeholder="recipient@example.com"
                         class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-[#241009] text-[#FFFDF9]" />
                </div>

                <div>
                  <label class="block font-semibold text-[#FFFDF9] mb-1">Personal Greeting</label>
                  <textarea rows="2" placeholder="To someone who deserves something truly exquisite..."
                            class="w-full p-2.5 rounded-lg border border-[#B8945B]/40 bg-[#241009] text-[#FFFDF9] font-serif text-xs"></textarea>
                </div>

                <button onclick="window.showToast('Gift Pass added to bag!', 'success')"
                        class="w-full py-3 rounded-lg btn-gold-luxury font-serif text-xs font-semibold tracking-wider shadow-lg">
                  Purchase Digital Gift Card (₹1,000)
                </button>
              </div>
            </div>

            <div class="lg:col-span-6 flex justify-center">
              <div class="w-full max-w-sm aspect-[1.6/1] rounded-2xl bg-gradient-to-br from-[#3A1F17] via-[#23120C] to-[#150A06] text-[#FFFDF9] border-2 border-[#B8945B] p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
                <div class="absolute -right-8 -bottom-8 w-32 h-32 opacity-10">
                  <img src="Assets/Logo/emblem_transparent.png" alt="Seal" />
                </div>
                <div class="flex justify-between items-start">
                  <img src="Assets/Logo/logo_gold_transparent.png" alt="La Desio" class="h-6 object-contain" />
                  <span class="font-serif italic text-xs text-[#E6CA85]">E-GIFT PASS</span>
                </div>
                <div>
                  <span class="text-[10px] uppercase text-white/60 tracking-wider">Gift Value</span>
                  <p class="font-display text-3xl text-gold-gradient font-bold">₹1,000</p>
                </div>
                <div class="flex justify-between items-end text-[10px] text-white/70">
                  <span>WHERE CRAVINGS BECOME CREATIONS.</span>
                  <span class="font-mono text-[#E6CA85]">DESIO-GIFT-2025</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    `;
  }

  // ==========================================
  // BRAND STORY & HERITAGE
  // ==========================================
  renderStoryView(container) {
    container.innerHTML = `
      <div class="bg-[#3A1F17] text-[#FFFDF9] py-20">
        <div class="max-w-5xl mx-auto px-4 text-center space-y-4">
          <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Italian Heritage & Artistry</span>
          <h1 class="font-display text-4xl sm:text-6xl text-white">THE STORY OF LA DESIO</h1>
          <p class="font-serif-elegant italic text-2xl text-[#E6CA85]">"Cravings Deserve Creativity."</p>
          <div class="w-20 h-[1px] bg-[#B8945B] mx-auto mt-4 mb-6"></div>
          <p class="text-sm sm:text-base text-[#F8F1E7]/80 max-w-2xl mx-auto leading-relaxed font-light">
            We don't simply make desserts. We create experiences around taste, choice, and craftsmanship.
          </p>
        </div>
      </div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        <!-- Story Block 1 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div class="space-y-4 text-xs sm:text-sm text-[#6B3E2E] leading-relaxed">
            <span class="text-xs uppercase tracking-widest text-[#B8945B] font-bold">01 • The Genesis</span>
            <h3 class="font-display text-2xl sm:text-3xl text-[#3A1F17]">Born in Milan, Reimagined for the World</h3>
            <p>
              La Desio was born in the historic patisserie ateliers of Northern Italy, where the passion for balance, cream, and single-origin cocoa has been perfected across generations.
            </p>
            <p>
              Yet, we noticed that modern dessert culture lacked personalization. Patisseries offered rigid menus, while ingredient-conscious choices often compromised on pure culinary decadence.
            </p>
          </div>
          <div class="rounded-2xl overflow-hidden border border-[#B8945B]/30 shadow-xl">
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                 alt="Italian Patisserie" class="w-full h-80 object-cover" />
          </div>
        </div>

        <!-- Story Block 2 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <div class="rounded-2xl overflow-hidden border border-[#B8945B]/30 shadow-xl md:order-2">
            <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
                 alt="Pastry Chef" class="w-full h-80 object-cover" />
          </div>
          <div class="space-y-4 text-xs sm:text-sm text-[#6B3E2E] leading-relaxed md:order-1">
            <span class="text-xs uppercase tracking-widest text-[#B8945B] font-bold">02 • Craftsmanship Without Compromise</span>
            <h3 class="font-display text-2xl sm:text-3xl text-[#3A1F17]">The Alchemy of Real Ingredients</h3>
            <p>
              Whether it is our signature Velvet Noir layered with 72% Venezuelan cocoa or our Desio Natural range sweetened solely with Medjool dates and cold-pressed strawberries, every recipe begins with raw respect for terroir.
            </p>
            <p>
              No shortcuts. No synthetic flavors. Just uncompromised Italian patisserie mastery.
            </p>
          </div>
        </div>

      </div>
    `;
  }

  // ==========================================
  // BOUTIQUES & CONCIERGE CONTACT
  // ==========================================
  renderBoutiquesView(container) {
    container.innerHTML = `
      <div class="bg-[#F8F1E7]/50 py-12 border-b border-[#B8945B]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Flagship Salons</span>
          <h1 class="font-display text-4xl sm:text-5xl text-[#3A1F17] mt-1">ATELIERS & BOUTIQUES</h1>
          <div class="w-16 h-[1px] bg-[#B8945B] mx-auto mt-3 mb-3"></div>
          <p class="text-xs sm:text-sm text-[#6B3E2E] max-w-xl mx-auto">
            Experience the aroma of roasted cocoa and freshly whipped cream in person.
          </p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        <!-- Boutique Locations Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${BOUTIQUES.map(b => `
            <div class="bg-gradient-to-b from-[#462619] to-[#351B11] rounded-2xl border border-[#B8945B]/30 overflow-hidden shadow-lg luxury-card">
              <img src="${b.image}" alt="${b.city}" class="w-full h-44 object-cover" />
              <div class="p-5 space-y-2 text-xs">
                <h4 class="font-serif text-base font-bold text-[#FFFDF9]">${b.city}</h4>
                <p class="text-[#E8D7C7] leading-relaxed">${b.address}</p>
                <p class="text-[#D6C2B0] pt-1"><strong>Hours:</strong> ${b.hours}</p>
                <p class="text-[#E6CA85] font-semibold">📞 ${b.phone}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Contact & Concierge Form -->
        <div class="max-w-3xl mx-auto bg-[#FFFDF9] rounded-3xl border border-[#B8945B]/30 p-8 shadow-xl">
          <div class="text-center mb-8">
            <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Concierge Inquiry</span>
            <h3 class="font-display text-2xl sm:text-3xl text-[#3A1F17] mt-1">Reserve or Inquire</h3>
            <p class="text-xs text-[#6B3E2E] mt-1">For bespoke wedding dessert tables, private events, or corporate gifting.</p>
          </div>

          <form onsubmit="event.preventDefault(); window.showToast('Thank you. Our concierge will contact you shortly.', 'success'); this.reset();"
                class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label class="block font-semibold text-[#3A1F17] mb-1">Your Name</label>
              <input type="text" required class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white" placeholder="e.g. Ananya Sharma" />
            </div>
            <div>
              <label class="block font-semibold text-[#3A1F17] mb-1">Email Address</label>
              <input type="email" required class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white" placeholder="ananya@example.com" />
            </div>
            <div class="sm:col-span-2">
              <label class="block font-semibold text-[#3A1F17] mb-1">Inquiry Type</label>
              <select class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white text-[#3A1F17]">
                <option>Bespoke Event & Wedding Desserts</option>
                <option>Corporate Luxury Gifting Hamper</option>
                <option>Private Atelier Tasting Session</option>
                <option>General Patisserie Question</option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label class="block font-semibold text-[#3A1F17] mb-1">Message</label>
              <textarea rows="3" required class="w-full p-3 rounded-lg border border-[#B8945B]/40 bg-white font-serif" placeholder="Tell us about your celebration..."></textarea>
            </div>
            <div class="sm:col-span-2 pt-2">
              <button type="submit" class="w-full py-3 rounded-lg btn-chocolate-luxury font-serif text-xs font-semibold tracking-wider">
                Send Concierge Request
              </button>
            </div>
          </form>
        </div>

        <!-- FAQs Accordion -->
        <div class="max-w-3xl mx-auto space-y-4">
          <div class="text-center mb-6">
            <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Client Curiosities</span>
            <h3 class="font-display text-2xl text-[#3A1F17]">Frequently Asked Questions</h3>
          </div>

          <div class="space-y-3">
            ${FAQS.map((faq, idx) => `
              <details class="bg-[#FFFDF9] rounded-xl border border-[#B8945B]/30 p-4 shadow-sm group">
                <summary class="font-serif font-bold text-sm text-[#3A1F17] cursor-pointer flex justify-between items-center list-none">
                  <span>${faq.q}</span>
                  <span class="text-[#B8945B] transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p class="text-xs text-[#6B3E2E] mt-3 leading-relaxed border-t border-[#B8945B]/20 pt-3">
                  ${faq.a}
                </p>
              </details>
            `).join('')}
          </div>
        </div>

      </div>
    `;
  }

  // ==========================================
  // CUSTOMER SUPPORT & ATELIER CONCIERGE VIEW
  // ==========================================
  renderSupportView(container = document.getElementById('app-main-content')) {
    const activeUser = loyaltyStore && typeof loyaltyStore.getActiveUser === 'function' ? loyaltyStore.getActiveUser() : null;
    const defaultName = activeUser ? (activeUser.name || '') : '';
    const defaultEmail = activeUser ? (activeUser.email || '') : '';
    const defaultPhone = activeUser ? (activeUser.phone || '') : '';

    container.innerHTML = `
      <div class="min-h-screen pb-20">
        
        <!-- LUXURY HERO BANNER -->
        <div class="relative py-14 md:py-20 bg-gradient-to-b from-[#140603] via-[#1F0A05] to-[#140603] border-b border-[#B8945B]/30 overflow-hidden text-center px-4">
          <!-- Background Ambient Glow & Monogram Watermark -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#B8945B]/10 blur-3xl pointer-events-none"></div>
          <div class="absolute -right-10 -bottom-10 opacity-5 pointer-events-none select-none">
            <img src="Assets/Logo/emblem_transparent.png" alt="" class="w-80 h-80 object-contain" />
          </div>

          <div class="relative z-10 max-w-4xl mx-auto space-y-3.5">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#B8945B]/50 text-[10px] font-serif tracking-[0.25em] text-[#E6CA85] uppercase shadow-md">
              <span>⚜️</span>
              <span>HAUTE PATISSERIE CONCIERGE DESK</span>
            </div>

            <h1 class="font-display text-3xl sm:text-5xl lg:text-6xl text-[#FFFDF9] font-bold tracking-wide">
              Client Care & Tasting Inquiries
            </h1>

            <p class="text-xs sm:text-sm text-[#D6C2B0] font-serif max-w-2xl mx-auto leading-relaxed">
              We welcome every culinary curiosity, bespoke 3D creation inquiry, and patron reflection. Our concierge ensures your sweet journeys across our flagship ateliers remain sublime.
            </p>

            <div class="flex flex-wrap items-center justify-center gap-3 pt-2 text-[11px] text-stone-300">
              <span class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A0905] border border-[#B8945B]/30">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Concierge Service</span>
              </span>
              <span class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A0905] border border-[#B8945B]/30">
                <span>⏱️</span>
                <span>Avg. Response: &lt; 2 Hours</span>
              </span>
            </div>
          </div>
        </div>

        <!-- MAIN SUPPORT WRAPPER -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-10">
          
          <!-- 3 LUXURY CONTACT TOUCHPOINT CARDS -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            <!-- Card 1: Official Email Desk -->
            <div class="p-6 rounded-3xl bg-[#1C0A05]/95 backdrop-blur-md border border-[#B8945B]/40 hover:border-[#E6CA85] shadow-xl flex flex-col justify-between space-y-4 group transition-all">
              <div class="space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2D140C] to-[#120502] border border-[#B8945B]/50 flex items-center justify-center text-xl shadow-lg text-[#E6CA85] group-hover:scale-105 transition-transform">
                  ✉️
                </div>
                <div>
                  <span class="text-[10px] uppercase tracking-widest text-[#E6CA85] font-serif font-bold block">Official Patron Dispatch</span>
                  <h3 class="text-sm sm:text-base font-serif font-bold text-white mt-0.5 break-all">mohan.sakthivl@gmail.com</h3>
                  <p class="text-xs text-[#D6C2B0] pt-1 leading-relaxed">Direct patron desk for order modifications, corporate gifting, and chef reflections.</p>
                </div>
              </div>
              <div class="pt-2 flex items-center gap-2">
                <a href="mailto:mohan.sakthivl@gmail.com?subject=La%20Desio%20Patron%20Inquiry" 
                   class="flex-1 py-2 px-3 rounded-xl btn-gold-luxury text-center text-xs font-serif font-semibold tracking-wider uppercase transition-all shadow-md">
                  Send Email →
                </a>
                <button type="button" 
                        onclick="navigator.clipboard.writeText('mohan.sakthivl@gmail.com'); if(window.showToast) window.showToast('Copied mohan.sakthivl@gmail.com to clipboard', 'success');"
                        class="py-2 px-3 rounded-xl border border-[#B8945B]/40 hover:border-[#E6CA85] text-[#E6CA85] hover:text-white bg-[#140804] text-xs font-serif transition-colors cursor-pointer"
                        title="Copy Email Address">
                  📋 Copy
                </button>
              </div>
            </div>

            <!-- Card 2: Priority Concierge Phone Helpline -->
            <div class="p-6 rounded-3xl bg-[#1C0A05]/95 backdrop-blur-md border border-[#B8945B]/40 hover:border-[#E6CA85] shadow-xl flex flex-col justify-between space-y-4 group transition-all">
              <div class="space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2D140C] to-[#120502] border border-[#B8945B]/50 flex items-center justify-center text-xl shadow-lg text-[#E6CA85] group-hover:scale-105 transition-transform">
                  📱
                </div>
                <div>
                  <span class="text-[10px] uppercase tracking-widest text-[#E6CA85] font-serif font-bold block">Priority Helpline Desk</span>
                  <h3 class="text-sm sm:text-base font-serif font-bold text-white mt-0.5">+91 98401 23456</h3>
                  <p class="text-xs text-[#D6C2B0] pt-1 leading-relaxed">Available 09:00 AM – 11:30 PM IST daily for active dispatch and delivery coordination.</p>
                </div>
              </div>
              <div class="pt-2">
                <a href="tel:+919840123456" 
                   class="w-full block py-2 px-3 rounded-xl border border-[#B8945B]/50 hover:bg-[#B8945B] hover:text-[#120502] text-[#E6CA85] text-center text-xs font-serif font-semibold tracking-wider uppercase transition-all shadow-md">
                  Call Concierge 📞
                </a>
              </div>
            </div>

            <!-- Card 3: Flagship Atelier Kitchens -->
            <div class="p-6 rounded-3xl bg-[#1C0A05]/95 backdrop-blur-md border border-[#B8945B]/40 hover:border-[#E6CA85] shadow-xl flex flex-col justify-between space-y-4 group transition-all">
              <div class="space-y-3">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2D140C] to-[#120502] border border-[#B8945B]/50 flex items-center justify-center text-xl shadow-lg text-[#E6CA85] group-hover:scale-105 transition-transform">
                  🏛️
                </div>
                <div>
                  <span class="text-[10px] uppercase tracking-widest text-[#E6CA85] font-serif font-bold block">In-Person Tasting Salons</span>
                  <h3 class="text-sm sm:text-base font-serif font-bold text-white mt-0.5">Chennai • Bengaluru • Kochi</h3>
                  <p class="text-xs text-[#D6C2B0] pt-1 leading-relaxed">Private tasting rooms available by appointment for wedding & celebration cakes.</p>
                </div>
              </div>
              <div class="pt-2">
                <a href="#boutiques" 
                   class="w-full block py-2 px-3 rounded-xl border border-[#B8945B]/50 hover:bg-[#B8945B] hover:text-[#120502] text-[#E6CA85] text-center text-xs font-serif font-semibold tracking-wider uppercase transition-all shadow-md">
                  View Boutiques & Maps →
                </a>
              </div>
            </div>

          </div>

          <!-- 2-COLUMN SPLIT: QUERY SUBMITTER FORM + FAQ ACCORDION -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- LEFT COLUMN: QUERY & EXPERIENCE SUBMISSION FORM (7 COLS) -->
            <div class="lg:col-span-7 bg-[#1C0A05] rounded-3xl p-6 sm:p-8 lg:p-9 border border-[#B8945B]/40 shadow-2xl relative overflow-hidden space-y-6">
              
              <!-- Subtle Gold Accents -->
              <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E6CA85] to-transparent"></div>
              <div class="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#E6CA85]/40 pointer-events-none"></div>

              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <span class="text-base">✉️</span>
                  <span class="text-[10px] uppercase font-serif tracking-[0.25em] text-[#E6CA85] font-bold">CONCIERGE DISPATCH FORM</span>
                </div>
                <h2 class="font-display text-2xl sm:text-3xl font-bold text-white">
                  Submit a Query or Share an Experience
                </h2>
                <p class="text-xs text-[#D6C2B0] leading-relaxed font-serif">
                  Submissions are dispatched directly to <span class="text-[#E6CA85] font-semibold underline">mohan.sakthivl@gmail.com</span> and logged with an official reference ticket.
                </p>
              </div>

              <!-- Interactive Form -->
              <form id="supportQueryForm" onsubmit="window.ladesioApp.handleSupportQuerySubmit(event)" class="space-y-4">
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <!-- Name Input -->
                  <div class="space-y-1.5">
                    <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Your Name *</label>
                    <input type="text" id="supportNameInput" required
                           value="${defaultName}"
                           placeholder="e.g. Arjun Sundaram"
                           class="w-full px-4 py-3 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
                  </div>

                  <!-- Email Input -->
                  <div class="space-y-1.5">
                    <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Email Address *</label>
                    <input type="email" id="supportEmailInput" required
                           value="${defaultEmail}"
                           placeholder="e.g. arjun@example.com"
                           class="w-full px-4 py-3 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <!-- Mobile Phone Input -->
                  <div class="space-y-1.5">
                    <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Mobile Number (Optional)</label>
                    <div class="flex items-center rounded-xl border border-[#B8945B]/35 bg-[#120502] overflow-hidden">
                      <span class="px-3 py-3 text-xs font-mono text-[#E6CA85] border-r border-[#B8945B]/25 bg-black/40">🇮🇳 +91</span>
                      <input type="tel" id="supportPhoneInput" maxlength="10"
                             value="${defaultPhone ? defaultPhone.replace('+91', '').trim() : ''}"
                             placeholder="98401 23456"
                             class="w-full px-3 py-3 bg-transparent text-white text-xs font-mono outline-none" />
                    </div>
                  </div>

                  <!-- Inquiry Reason / Category -->
                  <div class="space-y-1.5">
                    <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Purpose of Message *</label>
                    <select id="supportCategoryInput" required
                            class="w-full px-4 py-3 rounded-xl auth-input text-xs font-sans bg-[#120502] text-white">
                      <option value="experience">💬 Share an Atelier Experience / Feedback</option>
                      <option value="order">📦 Delivery Status & Cold-Chain Tracking</option>
                      <option value="bespoke">🎂 Bespoke 3D Studio & Multi-Tier Customization</option>
                      <option value="gifting">🎁 Corporate, Wedding & VIP Gifting Concierge</option>
                      <option value="ingredients">🌿 Dietary, 100% Eggless & Purity Queries</option>
                      <option value="general">❓ General Inquiries & Atelier Information</option>
                    </select>
                  </div>
                </div>

                <!-- Subject Line -->
                <div class="space-y-1.5">
                  <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Subject / Topic *</label>
                  <input type="text" id="supportSubjectInput" required
                         placeholder="e.g. Inquiring about a custom wedding tiered cake for December"
                         class="w-full px-4 py-3 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
                </div>

                <!-- Message / Story Textarea -->
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between">
                    <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Your Message / Reflections *</label>
                    <span class="text-[10px] text-stone-400">Be as detailed as you like</span>
                  </div>
                  <textarea id="supportMessageInput" required rows="5"
                            placeholder="Share your experience, tasting reflections, celebration date, or any specific questions you have for our master chefs..."
                            class="w-full px-4 py-3 rounded-xl auth-input text-xs font-sans placeholder-stone-500 resize-y leading-relaxed"></textarea>
                </div>

                <!-- Submit Button -->
                <div class="pt-2">
                  <button type="submit" id="supportSubmitBtn"
                          class="w-full py-4 rounded-xl btn-gold-luxury font-serif text-xs font-bold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.99] cursor-pointer">
                    <span>Dispatch Query to Concierge (mohan.sakthivl@gmail.com)</span>
                    <span class="text-base">✉️</span>
                  </button>
                </div>

                <!-- Trust Guarantee Notice -->
                <p class="text-[11px] text-stone-400 text-center font-serif pt-1">
                  🔒 Your confidential submission will open your email client pre-addressed to <span class="text-[#E6CA85]">mohan.sakthivl@gmail.com</span> and be logged into your private ticket registry.
                </p>

              </form>

              <!-- Live Submission Confirmation Banner (hidden by default) -->
              <div id="supportSuccessBanner" class="hidden p-5 rounded-2xl bg-[#140804] border border-[#B8945B]/60 shadow-xl space-y-3">
                <div class="flex items-center gap-2.5 text-emerald-400 font-serif font-bold text-sm">
                  <span>✨</span>
                  <span>Dispatch Confirmed — Ticket Reference Generated</span>
                </div>
                <div class="p-3.5 rounded-xl bg-black/60 border border-[#B8945B]/30 font-mono text-xs space-y-1">
                  <div class="flex items-center justify-between">
                    <span class="text-stone-400">Reference ID:</span>
                    <span id="supportTicketId" class="text-[#E6CA85] font-bold">#LD-SUPPORT-10294</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-stone-400">Recipient:</span>
                    <span class="text-white">mohan.sakthivl@gmail.com</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-stone-400">Status:</span>
                    <span class="text-emerald-400">Delivered to Concierge Queue</span>
                  </div>
                </div>
                <p class="text-xs text-[#D6C2B0] font-serif leading-relaxed">
                  A representative will review your message and reply to your provided email address shortly. Thank you for connecting with La Desio Haute Patisserie.
                </p>
                <button type="button" onclick="document.getElementById('supportSuccessBanner').classList.add('hidden'); document.getElementById('supportQueryForm').classList.remove('hidden');"
                        class="text-xs font-serif text-[#E6CA85] hover:underline cursor-pointer">
                  ← Submit another query
                </button>
              </div>

            </div>

            <!-- RIGHT COLUMN: FREQUENTLY ASKED QUESTIONS (5 COLS) -->
            <div class="lg:col-span-5 space-y-4">
              
              <div class="p-5 rounded-3xl bg-[#1A0905] border border-[#B8945B]/40 shadow-xl space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold">KNOWLEDGE SANCTUARY</span>
                  <span class="text-[10px] text-stone-400 font-mono">7 Curated Answers</span>
                </div>
                <h3 class="font-display text-xl sm:text-2xl font-bold text-white">Frequently Asked Questions</h3>
                <p class="text-xs text-[#D6C2B0] font-serif leading-relaxed">
                  Immediate answers to common curiosities regarding our eggless formulations, 3D Studio, delivery chambers, and timing.
                </p>
              </div>

              <!-- Accordion Container -->
              <div class="space-y-3">
                ${this.renderSupportFaqList()}
              </div>

            </div>

          </div>

        </div>

      </div>
    `;
  }

  renderSupportFaqList() {
    const supportFaqs = [
      {
        q: 'Are all La Desio creations 100% eggless and animal gelatin-free?',
        a: 'Yes, without exception. Every creation across our menu and 3D Studio is 100% vegetarian, free of eggs and animal-derived gelatin. We use plant pectins, cold-pressed cocoa butters, and agar-agar where needed to achieve our signature velvety textures.'
      },
      {
        q: 'How does the 3D Bespoke Dessert Atelier work?',
        a: 'Our 3D Studio enables you to sculpt and personalize your dessert across 6 dimensions: Base, Flavor, Filling, Toppings, Luxury Sauce, and Custom Inscription in real-time WebGL. Once ordered, our master chefs prepare and dispatch your creation in 25–40 minutes.'
      },
      {
        q: 'How do you prevent mousses and ganaches from melting in transit?',
        a: 'Every order is transported inside our certified cold-chain chambers with active eco-chilled thermal insulation, maintaining a stable 4°C temperature from our ovens to your doorstep, regardless of ambient weather or traffic.'
      },
      {
        q: 'Can I schedule delivery for a future celebration or midnight birthday?',
        a: 'Yes! During checkout, you can select any future date up to 30 days ahead and choose specific time slots, including our signature Midnight White-Glove Surprise window (11:45 PM – 12:15 AM).'
      },
      {
        q: 'What is your policy for modifying or cancelling an order?',
        a: 'Because artisanal patisserie is freshly baked each dawn, orders may be modified or cancelled up to 2 hours prior to your scheduled dispatch time by calling our helpline or emailing mohan.sakthivl@gmail.com.'
      },
      {
        q: 'How do I earn and redeem La Desio Privé loyalty points?',
        a: 'Every patron receives 250 complimentary welcome points on registration and earns 1 point for every ₹10 spent. Points can be redeemed at checkout for direct discounts, complimentary anniversary cakes, and secret tasting invitations.'
      },
      {
        q: 'Can I include handwritten gift cards and custom gift wrapping?',
        a: 'Yes, complimentary handwritten Italian calligraphy gift cards and gilded satin ribbon sealing are available for every order at checkout at zero additional charge.'
      }
    ];

    return supportFaqs.map((faq, idx) => `
      <details class="bg-[#1C0A05] rounded-2xl border border-[#B8945B]/30 hover:border-[#E6CA85]/60 p-4 shadow-md group transition-all" ${idx === 0 ? 'open' : ''}>
        <summary class="font-serif font-bold text-xs sm:text-sm text-[#FFFDF9] cursor-pointer flex justify-between items-center list-none select-none">
          <span class="flex items-center gap-2">
            <span class="text-[#E6CA85] text-xs">✦</span>
            <span>${faq.q}</span>
          </span>
          <span class="text-[#B8945B] transition-transform duration-300 group-open:rotate-180 text-xs shrink-0 ml-2">▼</span>
        </summary>
        <p class="text-xs text-[#D6C2B0] mt-3 leading-relaxed border-t border-[#B8945B]/20 pt-3 font-serif">
          ${faq.a}
        </p>
      </details>
    `).join('');
  }

  handleSupportQuerySubmit(e) {
    if (e) e.preventDefault();

    const name = (document.getElementById('supportNameInput')?.value || '').trim();
    const email = (document.getElementById('supportEmailInput')?.value || '').trim();
    const phone = (document.getElementById('supportPhoneInput')?.value || '').trim();
    const category = document.getElementById('supportCategoryInput')?.value || 'general';
    const subject = (document.getElementById('supportSubjectInput')?.value || '').trim();
    const message = (document.getElementById('supportMessageInput')?.value || '').trim();

    if (!name || !email || !subject || !message) {
      if (window.showToast) window.showToast('Please fill in all required fields.', 'warning');
      return;
    }

    const ticketId = `LD-SUPPORT-${Math.floor(100000 + Math.random() * 900000)}`;

    // Save ticket locally so user can reference it
    try {
      const existing = JSON.parse(localStorage.getItem('ladesio_support_tickets') || '[]');
      existing.unshift({
        ticketId,
        date: new Date().toISOString(),
        name,
        email,
        phone,
        category,
        subject,
        message,
        status: 'Delivered to Concierge (mohan.sakthivl@gmail.com)'
      });
      localStorage.setItem('ladesio_support_tickets', JSON.stringify(existing.slice(0, 30)));
    } catch (err) {}

    // Prepare mailto link to open patron's mail client directly to mohan.sakthivl@gmail.com
    const emailSubject = encodeURIComponent(`[${ticketId}] ${subject}`);
    const emailBody = encodeURIComponent(
      `LA DESIO PATRON CONCIERGE DISPATCH\n` +
      `====================================\n` +
      `Ticket Reference: ${ticketId}\n` +
      `Patron Name: ${name}\n` +
      `Patron Email: ${email}\n` +
      `Contact Phone: ${phone ? '+91 ' + phone : 'Not provided'}\n` +
      `Inquiry Category: ${category}\n\n` +
      `MESSAGE / REFLECTIONS:\n` +
      `------------------------------------\n` +
      `${message}\n\n` +
      `Sent via La Desio Haute Patisserie Client Support Portal.`
    );

    const mailtoUrl = `mailto:mohan.sakthivl@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // 1. Dispatch real email via Node.js server (Nodemailer to mohan.sakthivl@gmail.com)
    try {
      const apiUrl = (typeof window !== 'undefined' && window.location.port === '5000')
        ? '/api/support/send-query'
        : 'http://localhost:5000/api/support/send-query';

      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ticketId,
          name,
          email,
          phone,
          category,
          subject,
          message
        })
      }).then(r => r.json()).then(data => {
        if (data && data.success) {
          console.log(`✨ [Support Desk]: Email query #${ticketId} dispatched to mohan.sakthivl@gmail.com`);
        }
      }).catch(err => {
        console.warn('Backend server offline, saved ticket locally:', err.message);
      });
    } catch (err) {}

    // Show UI confirmation
    const form = document.getElementById('supportQueryForm');
    const successBanner = document.getElementById('supportSuccessBanner');
    const ticketElem = document.getElementById('supportTicketId');

    if (ticketElem) ticketElem.textContent = `#${ticketId}`;
    if (form) form.classList.add('hidden');
    if (successBanner) {
      successBanner.classList.remove('hidden');
      // Add a mail client launch button if not already present
      let mailLink = document.getElementById('supportMailClientLink');
      if (!mailLink) {
        const linkWrapper = document.createElement('div');
        linkWrapper.className = 'pt-2 flex items-center gap-3';
        linkWrapper.innerHTML = `
          <a id="supportMailClientLink" href="${mailtoUrl}"
             class="py-2 px-4 rounded-xl border border-[#B8945B]/50 hover:bg-[#B8945B] hover:text-[#120502] text-[#E6CA85] text-xs font-serif transition-all inline-flex items-center gap-2">
            <span>✉️ Open in Your Email App</span>
          </a>
        `;
        successBanner.appendChild(linkWrapper);
      } else {
        mailLink.href = mailtoUrl;
      }
    }

    if (window.showToast) {
      window.showToast(`✨ Query dispatched! Ticket #${ticketId} created for mohan.sakthivl@gmail.com`, 'success');
    }
  }

  formatBirthdayReadable(bdayStr) {
    if (!bdayStr) return '';
    try {
      const parts = String(bdayStr).split('-');
      if (parts.length === 3) {
        const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      }
    } catch (e) {}
    return bdayStr;
  }

  // ==========================================
  // CUSTOMER ACCOUNT & LA DESIO PRIVÉ
  // ==========================================
  renderAccountView(container = document.getElementById('app-main-content')) {
    if (!loyaltyStore.isUserAuthenticated()) {
      this.currentRoute = 'login';
      window.location.hash = '#login';
      this.renderLoginView(container, 'signin');
      return;
    }
    if (!this.activeAccountTab) {
      this.activeAccountTab = 'creations';
    }
    const data = loyaltyStore.getData();
    let { profile, creations, orders, friends = [] } = data;
    if (profile && !profile.birthday) {
      const remembered = loyaltyStore.getRememberedBirthday(profile.id, profile.phone, profile.email);
      if (remembered) {
        profile.birthday = remembered;
        loyaltyStore.updateProfile({ birthday: remembered });
      }
    }

    container.innerHTML = `
      <!-- Privé Account Hero Header -->
      <div class="bg-gradient-to-b from-[#180A06] to-[#241009] text-[#FFFDF9] pt-10 pb-4 border-b border-[#B8945B]/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <!-- TOP ROW: Member Details (Left) + Balanced Metrics Dual Cards (Right) -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <!-- Left: Member Identity & Bio (7 cols) -->
            <div class="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <!-- Avatar Display (Clean luxury frame) -->
              <div class="relative shrink-0">
                <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#B8945B] to-[#E6CA85] p-1 shadow-2xl overflow-hidden relative">
                  ${profile.avatar ? `
                    <img src="${profile.avatar}" alt="${profile.name}" class="w-full h-full object-cover rounded-full" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
                    <div class="w-full h-full rounded-full bg-[#1A0A06] items-center justify-center text-2xl font-serif text-[#E6CA85] font-bold" style="display:none;">
                      ${(profile.name || 'Member').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                    </div>
                  ` : `
                    <div class="w-full h-full rounded-full bg-[#1A0A06] flex items-center justify-center text-2xl font-serif text-[#E6CA85] font-bold">
                      ${(profile.name || 'Member').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                    </div>
                  `}
                </div>
              </div>

              <div class="space-y-1.5 flex-1 min-w-0">
                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span class="text-[10px] uppercase tracking-widest text-[#E6CA85] font-serif font-bold">La Desio Privé Member</span>
                  <span class="text-stone-500 text-xs">•</span>
                  <span class="text-[11px] text-[#D6C2B0] font-serif">📍 ${profile.city || 'Chennai'}</span>
                </div>
                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <h2 class="font-display text-2xl sm:text-3xl text-white font-bold">${profile.name}</h2>
                  <button onclick="window.ladesioApp.openEditProfileModal()" 
                          class="px-3 py-1 rounded-lg border border-[#B8945B]/40 hover:border-[#B8945B] text-[#E6CA85] hover:text-white bg-[#1A0A06]/70 text-xs font-serif transition-all flex items-center gap-1.5 shadow-sm cursor-pointer">
                    <span>✏️</span> Edit Profile & Bio
                  </button>
                  <!-- Minimal Music Icon Button -->
                  <button type="button"
                          onclick="window.ladesioSoundscape.toggleSoundscape()" 
                          class="soundscape-toggle-btn w-8 h-8 rounded-full border border-[#B8945B]/50 hover:border-[#E6CA85] text-[#E6CA85] hover:text-white bg-[#1A0A06]/80 flex items-center justify-center shadow-sm cursor-pointer transition-all relative"
                          title="Parisian Salon Music (Click to Toggle)">
                    <span class="music-icon text-sm leading-none">♫</span>
                    <span class="soundscape-pulse-dot absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 hidden animate-pulse border border-[#180A06]"></span>
                  </button>
                </div>
                <!-- Credentials Row: DOB, Mobile Number & Email ID -->
                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1.5 pt-1 text-xs text-[#D6C2B0]">
                  ${profile.birthday ? `
                    <span class="inline-flex items-center gap-1.5 text-[#E6CA85] bg-[#140603] px-2.5 py-1 rounded-lg border border-[#B8945B]/30 font-medium">
                      <span>🎂</span> <span>${this.formatBirthdayReadable(profile.birthday)}</span>
                    </span>
                  ` : `
                    <button type="button" onclick="window.ladesioApp.openEditProfileModal()" 
                            class="inline-flex items-center gap-1.5 text-[#E6CA85] hover:text-white bg-[#140603] px-2.5 py-1 rounded-lg border border-dashed border-[#B8945B]/50 hover:border-[#E6CA85] transition-all cursor-pointer">
                      <span>🎂</span> <span class="underline">Add Birthday (30% OFF)</span>
                    </button>
                  `}

                  ${profile.phone ? `
                    <span class="inline-flex items-center gap-1.5 text-white font-mono bg-[#140603] px-2.5 py-1 rounded-lg border border-[#B8945B]/30">
                      <span>📱</span> <span>${profile.displayPhone || ('+91 ' + profile.phone)}</span>
                    </span>
                  ` : `
                    <button type="button" onclick="window.ladesioApp.openEditProfileModal()" 
                            class="inline-flex items-center gap-1.5 text-[#E6CA85] hover:text-white bg-[#140603] px-2.5 py-1 rounded-lg border border-dashed border-[#B8945B]/50 hover:border-[#E6CA85] transition-all cursor-pointer">
                      <span>📱</span> <span class="underline">Add Mobile Number</span>
                    </button>
                  `}

                  ${profile.email ? `
                    <span class="inline-flex items-center gap-1.5 text-white bg-[#140603] px-2.5 py-1 rounded-lg border border-[#B8945B]/30">
                      <span>✉️</span> <span>${profile.email}</span>
                    </span>
                  ` : `
                    <button type="button" onclick="window.ladesioApp.openEditProfileModal()" 
                            class="inline-flex items-center gap-1.5 text-[#E6CA85] hover:text-white bg-[#140603] px-2.5 py-1 rounded-lg border border-dashed border-[#B8945B]/50 hover:border-[#E6CA85] transition-all cursor-pointer">
                      <span>✉️</span> <span class="underline">Add Email ID</span>
                    </button>
                  `}

                  <span class="text-stone-500 text-[11px] self-center">• Client since ${profile.joinedDate || '2026'}</span>
                </div>
                ${profile.bio ? `
                  <p class="text-xs text-[#E6CA85]/90 italic max-w-xl leading-relaxed bg-black/25 p-2.5 rounded-xl border-l-2 border-[#B8945B]">
                    “${profile.bio}”
                  </p>
                ` : ''}
              </div>
            </div>

            <!-- Right: Balanced Metrics Dual Cards (5 cols) -->
            <div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
              <!-- Card 1: Privé Status Card -->
              <div class="p-4 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 text-center shadow-lg flex flex-col justify-between">
                <div>
                  <span class="text-[9px] text-[#E6CA85] uppercase tracking-widest font-semibold block">Privé Tier Status</span>
                  <span class="font-display text-base sm:text-lg text-gold-gradient font-bold">✨ ${profile.tier}</span>
                </div>
                <div class="w-full bg-black/50 h-1.5 rounded-full my-2.5 overflow-hidden">
                  <div class="bg-gradient-to-r from-[#B8945B] to-[#E6CA85] h-full" style="width: ${(profile.points / profile.nextTierPoints) * 100}%"></div>
                </div>
                <span class="text-[10px] text-[#D6C2B0] font-mono">${profile.points} / ${profile.nextTierPoints} Pts to Royale</span>
              </div>

              <!-- Card 2: Quick Metrics Summary Card -->
              <div class="p-3.5 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 shadow-lg flex flex-col justify-between text-xs space-y-1.5">
                <div class="flex items-center justify-between border-b border-[#B8945B]/20 pb-1">
                  <span class="text-[#D6C2B0]">Saved Recipes:</span>
                  <strong class="text-[#E6CA85] font-mono font-bold">${creations.length}</strong>
                </div>
                <div class="flex items-center justify-between border-b border-[#B8945B]/20 pb-1">
                  <span class="text-[#D6C2B0]">Total Orders:</span>
                  <strong class="text-[#E6CA85] font-mono font-bold">${orders.length}</strong>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-[#D6C2B0]">Friends Circle:</span>
                  <strong class="text-[#E6CA85] font-mono font-bold">${friends.length}</strong>
                </div>
              </div>
            </div>

          </div>

          <!-- BOTTOM ROW: Interactive Luxury Navigation Tabs -->
          <div class="flex items-center gap-2 sm:gap-4 pt-1 border-b border-[#B8945B]/20 pb-0 overflow-x-auto">
            <button onclick="window.ladesioApp.setActiveAccountTab('creations')"
                    class="pb-3 px-3 sm:px-4 font-serif text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 border-b-2 whitespace-nowrap ${this.activeAccountTab === 'creations' ? 'border-[#E6CA85] text-[#E6CA85] font-bold' : 'border-transparent text-[#D6C2B0] hover:text-white'}">
              <span>✨ My Saved Creations</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] ${this.activeAccountTab === 'creations' ? 'bg-[#B8945B] text-black font-bold' : 'bg-black/40 text-stone-300'}">${creations.length}</span>
            </button>

            <button onclick="window.ladesioApp.setActiveAccountTab('orders')"
                    class="pb-3 px-3 sm:px-4 font-serif text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 border-b-2 whitespace-nowrap ${this.activeAccountTab === 'orders' ? 'border-[#E6CA85] text-[#E6CA85] font-bold' : 'border-transparent text-[#D6C2B0] hover:text-white'}">
              <span>📦 Order History & Invoices</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] ${this.activeAccountTab === 'orders' ? 'bg-[#B8945B] text-black font-bold' : 'bg-black/40 text-stone-300'}">${orders.length}</span>
            </button>

            <button onclick="window.ladesioApp.setActiveAccountTab('friends')"
                    class="pb-3 px-3 sm:px-4 font-serif text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 border-b-2 whitespace-nowrap ${this.activeAccountTab === 'friends' ? 'border-[#E6CA85] text-[#E6CA85] font-bold' : 'border-transparent text-[#D6C2B0] hover:text-white'}">
              <span>👥 Friends & Atelier Circle</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] ${this.activeAccountTab === 'friends' ? 'bg-[#B8945B] text-black font-bold' : 'bg-black/40 text-stone-300'}">${friends.length}</span>
            </button>

            <button onclick="window.ladesioApp.setActiveAccountTab('loyalty')"
                    class="pb-3 px-3 sm:px-4 font-serif text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 border-b-2 whitespace-nowrap ${this.activeAccountTab === 'loyalty' ? 'border-[#E6CA85] text-[#E6CA85] font-bold' : 'border-transparent text-[#D6C2B0] hover:text-white'}">
              <span>👑 Privé Tier & Addresses</span>
            </button>
          </div>

        </div>
      </div>

      <!-- Tab Content Area -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        ${this.activeAccountTab === 'creations' ? `
          <!-- TAB 1: SAVED CREATIONS -->
          <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#B8945B]/20 pb-4">
              <div>
                <h3 class="font-display text-2xl text-[#FFFDF9]">My Saved Atelier Creations</h3>
                <p class="text-xs text-[#D6C2B0] mt-0.5">Your bespoke handcrafted recipes designed in the studio. Easily reload, refine, or reorder.</p>
              </div>
              <a href="#builder" class="px-5 py-2.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider shadow-lg inline-flex items-center gap-2 w-fit">
                <span>✨</span> Craft New Dessert
              </a>
            </div>

            ${creations.length > 0 ? `
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                ${creations.map(creation => `
                  <div class="p-3.5 rounded-2xl bg-[#241009] border border-[#B8945B]/30 hover:border-[#B8945B] shadow-xl flex flex-col justify-between transition-all group">
                    <div class="space-y-2">
                      <div class="relative rounded-xl overflow-hidden h-36 border border-[#B8945B]/20">
                        <img src="${creation.image}" alt="${creation.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span class="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#180A06]/90 border border-[#B8945B]/40 text-[#E6CA85] text-[9.5px] font-serif uppercase tracking-wider font-semibold">
                          Bespoke Recipe
                        </span>
                        <span class="absolute bottom-2 right-2 px-2 py-0.5 rounded-lg bg-black/85 font-display font-bold text-xs text-[#FFFDF9]">
                          ₹${creation.price}
                        </span>
                      </div>

                      <div>
                        <div class="flex items-center justify-between gap-1">
                          <h4 class="font-serif font-bold text-sm text-[#FFFDF9] truncate">${creation.name}</h4>
                          <span class="text-[9.5px] text-[#D6C2B0] font-mono shrink-0">${creation.createdDate}</span>
                        </div>
                        <p class="text-[11px] text-[#E6CA85] mt-0.5 leading-snug line-clamp-1">
                          ${creation.recipe}
                        </p>
                      </div>

                      <!-- Nutrition pill if available -->
                      ${creation.nutrition ? `
                        <div class="flex items-center justify-between p-1.5 rounded-lg bg-[#180A06] border border-[#B8945B]/20 text-[9.5px] text-[#D6C2B0]">
                          <span>⚡ <strong class="text-[#E6CA85]">${creation.nutrition.calories} kcal</strong></span>
                          <span>P: ${creation.nutrition.protein}g • C: ${creation.nutrition.carbs}g</span>
                        </div>
                      ` : ''}
                    </div>

                    <!-- Action Buttons -->
                    <div class="pt-2.5 border-t border-[#B8945B]/20 mt-2.5 flex items-center gap-1.5">
                      <button onclick='window.ladesioApp.cloneTrendingCreation(${JSON.stringify(creation.config || {}).replace(/'/g, "\\'")})'
                              class="flex-1 py-1.5 px-2 rounded-lg border border-[#B8945B]/50 hover:border-[#B8945B] hover:bg-white/5 text-[#FFFDF9] text-[11px] font-serif font-semibold transition-all flex items-center justify-center gap-1">
                        <span>✏️</span> Edit
                      </button>
                      <button onclick='window.ladesioApp.quickOrderCustomCreation(${JSON.stringify(creation).replace(/'/g, "\\'")})'
                              class="flex-1 py-1.5 px-2 rounded-lg btn-gold-luxury text-[11px] font-serif font-semibold tracking-wider transition-all flex items-center justify-center gap-1 shadow-md">
                        <span>🛒</span> Order
                      </button>
                      <button onclick="if(confirm('Remove this recipe from your saved creations?')) window.loyaltyStore.deleteCreation('${creation.id}')"
                              class="p-1.5 rounded-lg hover:bg-red-500/20 text-stone-400 hover:text-red-400 text-xs transition-all"
                              title="Delete Creation">
                        🗑️
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : `
              <div class="py-16 text-center rounded-3xl bg-[#241009] border border-[#B8945B]/20 p-8 space-y-4">
                <div class="w-16 h-16 rounded-full bg-[#180A06] border border-[#B8945B]/40 mx-auto flex items-center justify-center text-3xl">
                  ✨
                </div>
                <h4 class="font-display text-xl text-[#FFFDF9]">No Bespoke Creations Saved Yet</h4>
                <p class="text-xs text-[#D6C2B0] max-w-md mx-auto">
                  Step into the Create Studio to design your dream Italian patisserie dessert with gourmet bases, fillings, and luxury toppings.
                </p>
                <a href="#builder" class="inline-block px-8 py-3 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider shadow-lg">
                  Enter Create Studio
                </a>
              </div>
            `}
          </div>
        ` : ''}

        ${this.activeAccountTab === 'orders' ? `
          <!-- TAB 2: ORDER HISTORY -->
          <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#B8945B]/20 pb-4">
              <div>
                <h3 class="font-display text-2xl text-[#FFFDF9]">Order History & Consignment Invoices</h3>
                <p class="text-xs text-[#D6C2B0] mt-0.5">Real-time status, courier tracking, and complete itemized receipts for your patisserie orders.</p>
              </div>
              <a href="#menu" class="px-5 py-2.5 rounded-xl btn-chocolate-luxury font-serif text-xs font-semibold tracking-wider shadow-md w-fit">
                Explore Full Menu
              </a>
            </div>

            ${orders.length > 0 ? `
              <div class="space-y-6">
                ${orders.map(order => `
                  <div class="rounded-2xl bg-[#241009] border border-[#B8945B]/30 hover:border-[#B8945B] shadow-xl overflow-hidden transition-all">
                    
                    <!-- Order Top Banner -->
                    <div class="p-4 sm:p-5 bg-[#1C0C07] border-b border-[#B8945B]/20 flex flex-wrap items-center justify-between gap-4">
                      <div class="flex flex-wrap items-center gap-3 sm:gap-4">
                        <span class="font-mono font-bold text-sm text-[#E6CA85]">${order.id}</span>
                        <span class="text-xs text-[#D6C2B0]">${order.date} ${order.time ? '• ' + order.time : ''}</span>
                        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1.5 ${
                          order.status === 'Delivered'
                            ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/50'
                            : 'bg-amber-950/80 text-amber-300 border border-amber-700/50'
                        }">
                          <span class="w-1.5 h-1.5 rounded-full ${order.status === 'Delivered' ? 'bg-emerald-400' : 'bg-amber-400 animate-ping'}"></span>
                          ${order.status}
                        </span>
                      </div>

                      <div class="flex items-center gap-2">
                        <button onclick="window.ladesioApp.openOrderTracker('${order.id}')"
                                class="px-3.5 py-1.5 rounded-lg border border-[#B8945B]/60 hover:border-[#B8945B] hover:bg-[#B8945B]/10 text-[#FFFDF9] font-serif text-xs font-semibold tracking-wider transition-all flex items-center gap-1.5 shadow-sm">
                          <span>🚚</span> Track Order
                        </button>
                        <button onclick="window.ladesioApp.reorderOrder('${order.id}')"
                                class="px-3.5 py-1.5 rounded-lg btn-gold-luxury font-serif text-xs font-semibold tracking-wider transition-all flex items-center gap-1.5 shadow-md">
                          <span>🔁</span> Reorder All
                        </button>
                      </div>
                    </div>

                    <!-- Order Body Content -->
                    <div class="p-4 sm:p-6 space-y-4">
                      
                      <!-- Itemized List -->
                      <div class="space-y-3">
                        <span class="text-[10px] uppercase tracking-widest text-[#E6CA85] font-semibold block">Ordered Items:</span>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          ${(order.items || []).map(item => `
                            <div class="p-3 rounded-xl bg-[#180A06] border border-[#B8945B]/20 flex items-center gap-3">
                              <img src="${item.image || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'}"
                                   alt="${item.name}"
                                   class="w-12 h-12 rounded-lg object-cover border border-[#B8945B]/30 shrink-0" />
                              <div class="flex-1 min-w-0">
                                <h5 class="font-serif font-bold text-xs text-[#FFFDF9] truncate">${item.name}</h5>
                                ${item.subtitle ? `<p class="text-[10px] text-[#D6C2B0] truncate">${item.subtitle}</p>` : ''}
                                <span class="text-[11px] text-[#E6CA85] font-semibold block mt-0.5">Qty: ${item.qty || 1} × ₹${item.price}</span>
                              </div>
                              <span class="font-display font-bold text-xs text-[#FFFDF9] shrink-0">
                                ₹${((item.qty || 1) * item.price)}
                              </span>
                            </div>
                          `).join('')}
                        </div>
                      </div>

                      <!-- Delivery & Payment Meta -->
                      <div class="pt-3 border-t border-[#B8945B]/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-[#D6C2B0]">
                        <div>
                          <span class="block text-[10px] uppercase text-[#E6CA85] font-semibold">Delivery Destination</span>
                          <span class="font-medium text-[#FFFDF9]">${order.address?.street || 'Artisanal Address'}, ${order.address?.city || 'Chennai'}</span>
                          ${order.address?.phone ? `<span class="block text-[11px] text-stone-400 font-mono">${order.address.phone}</span>` : ''}
                        </div>

                        <div>
                          <span class="block text-[10px] uppercase text-[#E6CA85] font-semibold">Consignment Schedule</span>
                          <span class="font-medium text-[#FFFDF9]">${order.deliverySlot}</span>
                          <span class="block text-[11px] font-mono text-[#B8945B]">${order.trackingNumber}</span>
                        </div>

                        <div class="sm:col-span-2 lg:col-span-1 bg-[#180A06] p-3 rounded-xl border border-[#B8945B]/25 space-y-1">
                          <div class="flex justify-between text-[11px]">
                            <span>Subtotal:</span>
                            <span>₹${(order.subtotal || order.total).toFixed(2)}</span>
                          </div>
                          ${order.discount ? `
                            <div class="flex justify-between text-[11px] text-[#B8945B]">
                              <span>Discount:</span>
                              <span>-₹${order.discount.toFixed(2)}</span>
                            </div>
                          ` : ''}
                          <div class="flex justify-between font-display font-bold text-sm text-[#FFFDF9] border-t border-[#B8945B]/20 pt-1">
                            <span>Total Paid:</span>
                            <span class="text-gold-gradient">₹${order.total.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                `).join('')}
              </div>
            ` : `
              <div class="py-16 text-center rounded-3xl bg-[#241009] border border-[#B8945B]/20 p-8 space-y-4">
                <div class="w-16 h-16 rounded-full bg-[#180A06] border border-[#B8945B]/40 mx-auto flex items-center justify-center text-3xl">
                  🛍️
                </div>
                <h4 class="font-display text-xl text-[#FFFDF9]">No Orders Placed Yet</h4>
                <p class="text-xs text-[#D6C2B0] max-w-md mx-auto">
                  Your luxury patisserie journey begins here. Explore our signature collection or create your own masterpiece.
                </p>
                <a href="#menu" class="inline-block px-8 py-3 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider shadow-lg">
                  Explore The Menu
                </a>
              </div>
            `}
          </div>
        ` : ''}

        ${this.activeAccountTab === 'loyalty' ? `
          <!-- TAB 3: PRIVÉ TIER & ADDRESSES -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <!-- Left: Tier Privileges -->
            <div class="lg:col-span-7 bg-[#241009] rounded-2xl border border-[#B8945B]/30 p-6 shadow-xl space-y-6">
              <div>
                <span class="text-[10px] uppercase tracking-widest text-[#E6CA85] font-serif font-bold">Privé Privileges</span>
                <h3 class="font-display text-2xl text-white mt-1">Élite Member Benefits</h3>
                <p class="text-xs text-[#D6C2B0] mt-0.5">As an honored member of La Desio Privé, your atelier orders receive exceptional treatment.</p>
              </div>

              <div class="space-y-3 text-xs text-[#F8F1E7]/90">
                <div class="p-3.5 rounded-xl bg-[#180A06] border border-[#B8945B]/20 flex items-start gap-3">
                  <span class="text-lg text-[#E6CA85]">✦</span>
                  <div>
                    <h5 class="font-serif font-bold text-white">Complimentary 24k Gold Leaf Finish</h5>
                    <p class="text-[11px] text-[#D6C2B0]">Hand-applied 24k edible gold leaf embellishment on all custom studio creations.</p>
                  </div>
                </div>

                <div class="p-3.5 rounded-xl bg-[#180A06] border border-[#B8945B]/20 flex items-start gap-3">
                  <span class="text-lg text-[#E6CA85]">✦</span>
                  <div>
                    <h5 class="font-serif font-bold text-white">Priority Atelier Preparation</h5>
                    <p class="text-[11px] text-[#D6C2B0]">Immediate dispatch and queue bypass with our express master chocolatiers.</p>
                  </div>
                </div>

                <div class="p-3.5 rounded-xl bg-[#180A06] border border-[#B8945B]/20 flex items-start gap-3">
                  <span class="text-lg text-[#E6CA85]">✦</span>
                  <div>
                    <h5 class="font-serif font-bold text-white">Private Tasting Invitations</h5>
                    <p class="text-[11px] text-[#D6C2B0]">VIP access to seasonal releases before public menu availability.</p>
                  </div>
                </div>

                <div class="p-3.5 rounded-xl bg-[#180A06] border border-[#B8945B]/20 flex items-start gap-3">
                  <span class="text-lg text-[#E6CA85]">✦</span>
                  <div>
                    <h5 class="font-serif font-bold text-white">Birthday Haute Patisserie Hamper</h5>
                    <p class="text-[11px] text-[#D6C2B0]">A handcrafted complimentary anniversary box delivered to your doorstep.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: Saved Delivery Addresses -->
            <div class="lg:col-span-5 bg-[#241009] rounded-2xl border border-[#B8945B]/30 p-6 shadow-xl space-y-4">
              <div class="flex items-center justify-between border-b border-[#B8945B]/20 pb-3">
                <h3 class="font-display text-lg text-[#FFFDF9]">Saved Delivery Destinations</h3>
                <span class="text-[10px] text-[#E6CA85] font-serif uppercase tracking-widest font-semibold">Flagship Fleet</span>
              </div>

              ${(profile.savedAddresses && profile.savedAddresses.length > 0) ? `
                <div class="space-y-3 text-xs">
                  ${profile.savedAddresses.map(addr => `
                    <div class="p-4 rounded-xl border ${addr.isDefault ? 'border-[#B8945B] bg-[#1C0C07]' : 'border-stone-800 bg-[#180A06]'} space-y-1">
                      <div class="flex items-center justify-between">
                        <span class="font-bold text-[#FFFDF9]">${addr.name}</span>
                        ${addr.isDefault ? `<span class="px-2 py-0.5 rounded-full bg-[#B8945B]/20 border border-[#B8945B]/40 text-[#E6CA85] text-[9px] uppercase font-bold">Default</span>` : ''}
                      </div>
                      <p class="text-[#D6C2B0] text-[11px]">${addr.address}, ${addr.city} • ${addr.postal}</p>
                      <p class="text-stone-400 text-[10px] font-mono">Contact: ${addr.phone}</p>
                    </div>
                  `).join('')}
                </div>
              ` : `
                <div class="p-6 text-center rounded-xl bg-[#180A06] border border-[#B8945B]/20 space-y-2">
                  <span class="text-2xl block">📍</span>
                  <h5 class="font-serif font-semibold text-white text-xs">No Saved Addresses</h5>
                  <p class="text-[11px] text-[#D6C2B0]">Your delivery destinations will be automatically saved here during your first artisanal checkout.</p>
                </div>
              `}
            </div>

          </div>
        ` : ''}

        ${this.activeAccountTab === 'friends' ? `
          <!-- TAB 4: FRIENDS & ATELIER CIRCLE -->
          ${(() => {
            if (this.selectedFriendId && friends.length > 0) {
              const friend = friends.find(f => f.id === this.selectedFriendId) || friends[0];
              if (!friend) return '';
              return `
                <div class="space-y-8">
                  <!-- Navigation Back to Friends List -->
                  <div class="flex items-center justify-between">
                    <button onclick="window.ladesioApp.backToFriendsList()" 
                            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#241009] border border-[#B8945B]/40 hover:border-[#B8945B] text-[#E6CA85] hover:text-white text-xs font-serif transition-all shadow-md">
                      <span>←</span> Back to Friends Circle
                    </button>
                    <span class="text-[10px] uppercase font-serif tracking-widest text-[#D6C2B0]">Atelier Circle / ${friend.name}</span>
                  </div>

                  <!-- Friend Hero Spotlight Banner -->
                  <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1F0D08] to-[#241009] border border-[#B8945B]/40 shadow-2xl relative overflow-hidden">
                    <div class="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
                      <!-- Friend Avatar Display (Clean luxury frame) -->
                      <div class="relative shrink-0">
                        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#B8945B] to-[#E6CA85] p-1 shrink-0 shadow-2xl overflow-hidden relative">
                          <img id="activeFriendSpotlightAvatar" src="${friend.avatar}" alt="${friend.name}" class="w-full h-full object-cover rounded-full" />
                        </div>
                      </div>

                      <div class="flex-1 text-center md:text-left space-y-2.5">
                        <div class="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                          <h3 class="font-display text-2xl sm:text-3xl text-white font-bold">${friend.name}</h3>
                          <span class="px-2.5 py-0.5 rounded-full bg-[#B8945B]/20 border border-[#B8945B]/40 text-[#E6CA85] text-[10px] font-serif uppercase font-bold tracking-wider">
                            ✨ ${friend.tier}
                          </span>
                          <button onclick="window.ladesioApp.openEditFriendProfileModal('${friend.id}')"
                                  class="px-2.5 py-1 rounded-lg border border-[#B8945B]/40 hover:border-[#B8945B] text-[#E6CA85] hover:text-white bg-[#1A0A06]/80 text-xs font-serif transition-all flex items-center gap-1.5 shadow-sm">
                            <span>✏️</span> Edit Name & Photo
                          </button>
                          <button onclick="window.ladesioApp.handleRemoveFriend('${friend.id}', '${friend.name}')"
                                  class="px-2.5 py-1 rounded-lg border border-rose-500/40 hover:border-rose-500 text-rose-300 hover:text-white bg-rose-950/40 hover:bg-rose-900/60 text-xs font-serif transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                                  title="Remove ${friend.name} from Circle">
                            <span>🗑️</span> Remove Friend
                          </button>
                        </div>
                        <p class="text-xs text-[#E6CA85] font-mono">${friend.handle} • 📍 ${friend.location}</p>
                        <p class="text-xs text-[#D6C2B0] leading-relaxed max-w-2xl bg-black/25 p-3.5 rounded-xl border-l-2 border-[#B8945B]">
                          “${friend.bio}”
                        </p>

                        <div class="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs">
                          <div class="px-3.5 py-1.5 rounded-xl bg-[#180A06] border border-[#B8945B]/30 flex items-center gap-2">
                            <span class="text-[#D6C2B0]">Bespoke Recipes:</span>
                            <strong class="text-[#E6CA85] font-mono">${friend.creations.length}</strong>
                          </div>
                          <div class="px-3.5 py-1.5 rounded-xl bg-[#180A06] border border-[#B8945B]/30 flex items-center gap-2">
                            <span class="text-[#D6C2B0]">Atelier Orders:</span>
                            <strong class="text-[#E6CA85] font-mono">${friend.ordersCount || 20}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Friend Creations Grid -->
                  <div class="space-y-6">
                    <div class="flex items-center justify-between border-b border-[#B8945B]/20 pb-3">
                      <div>
                        <h4 class="font-display text-xl text-[#FFFDF9]">Handcrafted Creations by ${friend.name}</h4>
                        <p class="text-xs text-[#D6C2B0]">Custom dessert formulas designed in our atelier studio. Remix them or order directly.</p>
                      </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      ${friend.creations.map(c => `
                        <div class="p-5 rounded-2xl bg-[#241009] border border-[#B8945B]/30 hover:border-[#B8945B] shadow-xl flex flex-col justify-between transition-all group">
                          <div class="space-y-3">
                            <div class="relative rounded-xl overflow-hidden aspect-video border border-[#B8945B]/20">
                              <img src="${c.image}" alt="${c.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                              <span class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#180A06]/90 border border-[#B8945B]/40 text-[#E6CA85] text-[10px] font-serif uppercase tracking-wider font-semibold">
                                Recipe by ${friend.name.split(' ')[0]}
                              </span>
                              <span class="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-lg bg-black/80 font-display font-bold text-sm text-[#FFFDF9]">
                                ₹${c.price}
                              </span>
                            </div>

                            <div>
                              <div class="flex items-center justify-between">
                                <h5 class="font-serif font-bold text-base text-[#FFFDF9]">${c.name}</h5>
                                <span class="text-[10px] text-[#D6C2B0] font-mono">${c.createdDate}</span>
                              </div>
                              <p class="text-xs text-[#E6CA85] mt-1 leading-relaxed">
                                ${c.recipe}
                              </p>
                            </div>

                            <!-- Nutrition Bar with High Protein Callout -->
                            ${c.nutrition ? `
                              <div class="p-2.5 rounded-xl bg-[#180A06] border border-[#B8945B]/30 space-y-1">
                                <div class="flex items-center justify-between text-[11px]">
                                  <span class="text-stone-300 font-mono">⚡ ${c.nutrition.calories} kcal</span>
                                  <span class="px-2 py-0.5 rounded-md ${parseInt(c.nutrition.protein) >= 20 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold' : 'text-[#E6CA85]'} text-[10px] font-mono">
                                    💪 Protein: ${c.nutrition.protein}
                                  </span>
                                </div>
                                <div class="flex items-center justify-between text-[10px] text-stone-400">
                                  <span>Carbs: ${c.nutrition.carbs}</span>
                                  <span>Fats: ${c.nutrition.fats}</span>
                                </div>
                              </div>
                            ` : ''}
                          </div>

                          <!-- Actions: Remix and Order -->
                          <div class="pt-4 border-t border-[#B8945B]/20 mt-4 flex items-center gap-2.5">
                            <button onclick="window.ladesioApp.remixFriendCreation('${friend.id}', '${c.id}')"
                                    class="flex-1 py-2.5 px-3 rounded-xl border border-[#B8945B] hover:bg-[#B8945B]/20 text-[#E6CA85] hover:text-white text-xs font-serif font-semibold transition-all flex items-center justify-center gap-1.5 shadow-sm">
                              <span>✨</span> Remix in Studio
                            </button>
                            <button onclick="window.ladesioApp.orderFriendCreation('${friend.id}', '${c.id}')"
                                    class="flex-1 py-2.5 px-3 rounded-xl btn-gold-luxury text-xs font-serif font-semibold tracking-wider transition-all flex items-center justify-center gap-1 shadow-md">
                              <span>🛒</span> Order (₹${c.price})
                            </button>
                          </div>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                </div>
              `;
            } else {
              return `
                <div class="space-y-6">
                                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#B8945B]/20 pb-4">
                    <div>
                      <h3 class="font-display text-2xl text-[#FFFDF9]">Atelier Friends Circle</h3>
                      <p class="text-xs text-[#D6C2B0] mt-0.5">Explore handcrafted bespoke recipes from fellow patisserie connoisseurs. Tap any friend to discover & order their signature creations.</p>
                    </div>
                    <div class="flex items-center gap-3">
                      <span class="text-xs font-serif text-[#E6CA85] bg-[#180A06] px-3.5 py-1.5 rounded-full border border-[#B8945B]/30 shrink-0">
                        🌟 ${friends.length} Circle Friends
                      </span>
                      <button type="button" onclick="window.ladesioApp.openAddFriendModal()"
                              class="px-4 py-2 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-md shrink-0 cursor-pointer">
                        <span>➕ Add Friend</span>
                      </button>
                    </div>
                  </div>

                  <!-- PROMINENT SEARCH BAR TO SEARCH & ADD FRIENDS BY MOBILE NUMBER -->
                  <div class="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#220B06] to-[#140603] border-2 border-[#B8945B]/60 shadow-2xl space-y-4">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h4 class="font-display text-lg text-white font-bold flex items-center gap-2">
                          <span>🔍</span> Search Friends by Mobile Number
                        </h4>
                        <p class="text-xs text-[#D6C2B0]">Search any member's 10-digit mobile number (or name) to find, connect, and view their creations.</p>
                      </div>
                    </div>

                    <!-- Search Input Bar with Country Flag -->
                    <div class="relative flex items-center rounded-2xl bg-black/70 border border-[#B8945B]/50 focus-within:border-[#E6CA85] overflow-hidden shadow-inner">
                      <div class="px-4 py-3 text-xs font-mono text-[#E6CA85] font-bold border-r border-[#B8945B]/30 bg-[#1A0804] flex items-center gap-1.5 shrink-0">
                        <span>🇮🇳 +91</span>
                      </div>
                      <input type="text"
                             id="friendMobileSearchInput"
                             oninput="window.ladesioApp.handleFriendSearchInput(this.value)"
                             placeholder="Search by 10-digit mobile number (e.g. 97904 96706, 95667 83614, 96774 07374) or name..."
                             class="w-full px-4 py-3 bg-transparent text-white text-xs font-mono placeholder-stone-500 focus:outline-none" />
                      <button type="button" 
                              onclick="window.ladesioApp.clearFriendSearch()"
                              class="px-4 py-3 text-stone-400 hover:text-white text-xs font-bold transition-colors cursor-pointer">
                        ✕
                      </button>
                    </div>

                    <!-- Live Real-Time Search Results Mount -->
                    <div id="friendSearchResultsMount" class="hidden space-y-3 pt-2"></div>
                  </div>

                  <div class="flex items-center justify-between pt-1">
                    <h4 class="font-display text-xl text-[#FFFDF9]">Active Circle Friends (${friends.length})</h4>
                  </div>

                  ${friends.length > 0 ? `
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                      ${friends.map(f => `
                        <div class="p-6 rounded-3xl bg-[#241009] border border-[#B8945B]/30 hover:border-[#B8945B] shadow-xl flex flex-col justify-between transition-all group hover:-translate-y-1">
                          <div class="space-y-4">
                            <!-- Friend Avatar & Info -->
                            <div class="flex items-start justify-between gap-3">
                              <div class="flex items-center gap-3.5">
                                <div class="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#B8945B] to-[#E6CA85] p-0.5 shrink-0 shadow-lg overflow-hidden"
                                     onclick="event.stopPropagation(); window.ladesioApp.viewFriendProfile('${f.id}')"
                                     title="View ${f.name}'s profile">
                                  <img src="${f.avatar}" alt="${f.name}" class="w-full h-full object-cover rounded-full" />
                                </div>
                                <div>
                                  <span class="text-[9px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold block">${f.tier}</span>
                                  <h4 class="font-display text-lg text-white font-bold">${f.name}</h4>
                                  <p class="text-[11px] text-[#D6C2B0]">${f.handle} • 📍 ${f.location}</p>
                                </div>
                              </div>
                              <div class="flex items-center gap-1.5 shrink-0">
                                <button onclick="event.stopPropagation(); window.ladesioApp.openEditFriendProfileModal('${f.id}')"
                                        class="p-2 rounded-xl bg-[#180A06] hover:bg-[#3A1F17] border border-[#B8945B]/30 hover:border-[#B8945B] text-[#E6CA85] hover:text-white text-xs transition-colors shrink-0"
                                        title="Edit Friend Name, Bio & Photo">
                                  ✏️
                                </button>
                                <button onclick="event.stopPropagation(); window.ladesioApp.handleRemoveFriend('${f.id}', '${f.name}')"
                                        class="p-2 rounded-xl bg-[#180A06] hover:bg-rose-950/70 border border-rose-500/30 hover:border-rose-500 text-rose-300 hover:text-white text-xs transition-colors shrink-0"
                                        title="Remove ${f.name} from Circle">
                                  🗑️
                                </button>
                              </div>
                            </div>

                            <!-- Bio -->
                            <p class="text-xs text-[#D6C2B0] line-clamp-3 italic leading-relaxed bg-[#180A06] p-3 rounded-xl border-l-2 border-[#B8945B]">
                              “${f.bio}”
                            </p>

                            <!-- Signature Creations Teaser -->
                            <div class="space-y-2 pt-1">
                              <span class="text-[10px] uppercase font-serif tracking-wider text-[#E6CA85] font-semibold block">Signature Creations:</span>
                              <div class="grid grid-cols-2 gap-2">
                                ${(f.creations || []).slice(0, 2).map(c => `
                                  <div class="rounded-xl overflow-hidden bg-[#180A06] border border-[#B8945B]/20 p-2 text-left">
                                    <img src="${c.image}" alt="${c.name}" class="w-full h-16 object-cover rounded-lg mb-1.5" />
                                    <p class="text-[11px] font-serif font-bold text-[#FFFDF9] truncate">${c.name}</p>
                                    <p class="text-[10px] text-[#E6CA85] font-mono">₹${c.price} ${c.nutrition?.protein ? `• ${c.nutrition.protein} P` : ''}</p>
                                  </div>
                                `).join('')}
                              </div>
                            </div>
                          </div>

                          <!-- Actions: View creations & Remove -->
                          <div class="mt-6 flex items-center gap-2">
                            <button onclick="window.ladesioApp.viewFriendProfile('${f.id}')"
                                    class="flex-1 py-2.5 px-3 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md">
                              <span>View ${f.name.split(' ')[0]}'s Profile</span>
                              <span>→</span>
                            </button>
                            <button onclick="event.stopPropagation(); window.ladesioApp.handleRemoveFriend('${f.id}', '${f.name}')"
                                    class="py-2.5 px-3 rounded-xl border border-rose-500/40 hover:border-rose-500 bg-rose-950/40 hover:bg-rose-900/60 text-rose-200 hover:text-white text-xs font-serif transition-colors flex items-center justify-center gap-1 shadow-sm shrink-0 cursor-pointer"
                                    title="Remove ${f.name} from Circle">
                              <span>🗑️</span> Remove
                            </button>
                          </div>
                        </div>
                      `).join('')}
                    </div>
                  ` : `
                    <div class="py-14 text-center rounded-3xl bg-[#241009] border border-[#B8945B]/20 p-8 space-y-4">
                      <div class="w-16 h-16 rounded-full bg-[#180A06] border border-[#B8945B]/40 mx-auto flex items-center justify-center text-3xl">
                        👥
                      </div>
                      <h4 class="font-display text-xl text-[#FFFDF9]">Your Friends Circle is Empty</h4>
                      <p class="text-xs text-[#D6C2B0] max-w-md mx-auto">
                        Connect with fellow patisserie connoisseurs! Search by their 10-digit mobile number above or tap "Add Friend" to add them to your circle and discover their bespoke recipes.
                      </p>
                      <button type="button" onclick="window.ladesioApp.openAddFriendModal()" class="inline-block px-8 py-3 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider shadow-lg">
                        ➕ Connect With Connoisseurs
                      </button>
                    </div>
                  `}
                </div>
              `;
            }
          })()}
        ` : ''}

      </div>
    `;

    if (window.ladesioSoundscape) {
      window.ladesioSoundscape.updateSoundUI();
    }
  }

  // ==========================================
  // CHECKOUT PAGE VIEW
  // ==========================================
  renderCheckoutView(container) {
    if (!loyaltyStore.isUserAuthenticated()) {
      this.pendingRedirectRoute = 'checkout';
      this.renderLoginView(container, 'signin');
      if (window.showToast) {
        window.showToast('Please sign in or create an account to proceed with your order.', 'info');
      }
      return;
    }
    container.innerHTML = `
      <div class="w-full min-h-[calc(100vh-4.25rem)] lg:max-h-[calc(100vh-4.25rem)] bg-gradient-to-b from-[#140603] via-[#1A0A06] to-[#120502] flex flex-col justify-start px-2 sm:px-4 lg:px-6 py-2 sm:py-3 max-w-7xl mx-auto overflow-y-auto lg:overflow-hidden">
        <div id="checkoutFlowMount" class="w-full flex-1 flex flex-col justify-start min-h-0"></div>
      </div>
    `;
    const summary = cartStore.getSummary();
    if (summary && summary.items.length > 0) {
      try {
        localStorage.removeItem('ladesio_last_placed_order');
      } catch (e) {}
    }
    window.checkoutManager = new CheckoutManager('checkoutFlowMount', () => {
      this.renderNavigationBadges();
    });
    if (summary && summary.items.length > 0) {
      window.checkoutManager.lastPlacedOrder = null;
      window.checkoutManager.currentStep = 1;
    }
    window.checkoutManager.init();
  }

  // ==========================================
  // REUSABLE BESPOKE ATELIER CARD COMPONENT (INR)
  // ==========================================
  getProductPricing(product) {
    if (!product) return { price: 0, originalPrice: 0, isBirthdayDiscount: false, savings: 0, discountPercent: 0 };
    const isBirthday = (typeof loyaltyStore !== 'undefined' && typeof loyaltyStore.isBirthdayDiscountAvailable === 'function' && loyaltyStore.isBirthdayDiscountAvailable());
    const standardPrice = Number(product.price || 0);
    if (isBirthday) {
      const discountedPrice = Math.round(standardPrice * 0.7); // 30% OFF
      return {
        isBirthdayDiscount: true,
        originalPrice: standardPrice,
        price: discountedPrice,
        savings: standardPrice - discountedPrice,
        discountPercent: 30
      };
    }
    return {
      isBirthdayDiscount: false,
      originalPrice: product.originalPrice || null,
      price: standardPrice,
      savings: 0,
      discountPercent: 0
    };
  }

  renderProductCard(product, isNatural = false) {
    const inWishlist = cartStore.isInWishlist(product.id);
    const pricing = this.getProductPricing(product);
    
    // Find index or generate catalog opus number
    let productIndex = 1;
    if (typeof PRODUCTS !== 'undefined' && Array.isArray(PRODUCTS)) {
      const idx = PRODUCTS.findIndex(p => p.id === product.id);
      if (idx !== -1) productIndex = idx + 1;
    }
    const opusNumber = `OPUS N° ${String(productIndex).padStart(2, '0')}`;

    return `
      <div class="atelier-gallery-card flex flex-col justify-between group relative shadow-2xl rounded-sm">
        
        <!-- Architectural Corner Filigrees -->
        <div class="atelier-corner-accent atelier-corner-tl"></div>
        <div class="atelier-corner-accent atelier-corner-br"></div>

        <!-- Museum Passe-Partout Framed Artwork -->
        <div class="p-2.5 pb-0">
          <div class="relative h-64 overflow-hidden cursor-pointer bg-[#160703] border border-[#B8945B]/25 group/img"
               onclick="window.ladesioApp.openProductModal('${product.id}')">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            
            <!-- Archival Passe-Partout Vignette Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#150703]/95 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5">
              <span class="text-[#E6CA85] text-[10px] font-cinzel tracking-[0.2em] uppercase flex items-center gap-1.5 drop-shadow-md">
                <svg class="w-3.5 h-3.5 text-[#E6CA85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" stroke-width="1.6"></circle>
                  <path d="M21 21l-4.35-4.35" stroke-width="1.6" stroke-linecap="round"></path>
                </svg>
                Inspect Tasting Notes
              </span>
              <span class="text-[9px] font-mono text-[#E6CA85]/80 uppercase tracking-widest">[ OPUS VIEW ]</span>
            </div>

            <!-- Top Left: Archival Catalog Number & Gilded Seal -->
            <div class="absolute top-2.5 left-2.5 flex flex-col items-start gap-1.5 z-10">
              ${pricing.isBirthdayDiscount ? `
                <span class="px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 via-[#F5D796] to-amber-400 text-black text-[9.5px] font-serif font-black tracking-wider uppercase shadow-xl border border-amber-300 flex items-center gap-1.5 animate-pulse">
                  <span>🎂</span> 30% OFF BIRTHDAY
                </span>
              ` : ''}
              <span class="archival-opus-badge">
                <span class="text-[#DFBA73]">❖</span> ${opusNumber} • ${product.badge ? product.badge.toUpperCase() : 'SIGNATURE'}
              </span>
              <span class="sigillo-dietary-pure ${product.isEggless ? '' : 'border-rose-500/50 text-rose-300 bg-rose-950/80'}"
                    title="${product.isEggless ? '100% Eggless Pure Vegetarian' : 'Contains Egg'}">
                <span class="w-1.5 h-1.5 rounded-full ${product.isEggless ? 'bg-emerald-400' : 'bg-rose-400'}"></span>
                <span>${product.isEggless ? 'PURO VEGETARIANO' : 'TRADIZIONALE'}</span>
              </span>
            </div>

            <!-- Top Right: Delicate Hairline Wishlist Seal -->
            <button onclick="event.stopPropagation(); window.ladesioApp.toggleWishlist('${product.id}')"
                    class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-[#160703]/90 border ${inWishlist ? 'border-rose-500/80 shadow-[0_0_12px_rgba(244,63,94,0.4)]' : 'border-[#B8945B]/40 hover:border-[#E6CA85]'} flex items-center justify-center transition-all hover:scale-110 shadow-lg z-10 group/wish"
                    title="${inWishlist ? 'Remove from Wishlist' : 'Save to Bespoke Wishlist'}"
                    data-wishlist-btn="${product.id}">
              <svg data-wishlist-icon="${product.id}" class="w-4 h-4 transition-all duration-300 ${inWishlist ? 'fill-rose-500 text-rose-500 scale-110' : 'fill-none text-[#D4AF37] group-hover/wish:text-white'}" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Card Content: Italian Haute Editorial Hierarchy -->
        <div class="p-5 pt-3.5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <!-- Rating & Preparation Time Row -->
            <div class="flex items-center justify-between text-xs mb-2 border-b border-[#B8945B]/15 pb-2">
              <div class="rating-diamond-seal cursor-pointer hover:opacity-85"
                   onclick="window.ladesioApp.openProductModal('${product.id}')"
                   title="Verified Connoisseur Reviews">
                <span class="diamond-glyph">✦</span>
                <span class="diamond-glyph">✦</span>
                <span class="diamond-glyph">✦</span>
                <span class="diamond-glyph">✦</span>
                <span class="diamond-glyph">✦</span>
                <strong class="font-cinzel text-xs text-[#FFFDF9] ml-1">${product.rating.toFixed(2)}</strong>
                <span class="text-[#C4B2A3]/60 text-[10px] font-sans font-light">(${product.reviewsCount})</span>
              </div>

              <!-- Prep Time with Hairline Vector Clock -->
              <div class="flex items-center gap-1.5 text-[10px] font-cinzel tracking-widest text-[#E6CA85]/80 uppercase">
                <svg class="w-3 h-3 text-[#B8945B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" stroke-width="1.5"></circle>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7v5l3 2"></path>
                </svg>
                <span>${product.prepTime ? product.prepTime.split(' ')[0] : '15'} MIN</span>
              </div>
            </div>

            <!-- Dessert Name in Monumental Editorial Serif -->
            <h3 class="font-bodoni text-2xl text-[#FFFDF9] group-hover:text-[#E6CA85] transition-colors leading-tight tracking-tight cursor-pointer"
                onclick="window.ladesioApp.openProductModal('${product.id}')">
              ${product.name}
            </h3>

            <!-- Sommelier Tasting Notes Script -->
            <p class="sommelier-tasting-notes text-xs mt-1 tracking-wide">
              “${product.subtitle}”
            </p>

            <!-- Description -->
            <p class="text-[11.5px] text-[#D8C6B6] mt-2 line-clamp-2 leading-relaxed font-light">
              ${product.description}
            </p>

            <!-- Dietary Tags in Fine Italian Small Caps -->
            <div class="flex flex-wrap gap-1.5 mt-3">
              ${product.dietary.slice(0, 2).map(d => `
                <span class="px-2 py-0.5 rounded-sm bg-[#1A0A05] text-[9.5px] text-[#E6CA85] border border-[#B8945B]/30 font-cinzel uppercase tracking-widest">
                  ${d}
                </span>
              `).join('')}
            </div>

            <!-- Nutrition Highlights with Minimalist Vector Accents -->
            ${product.nutrition ? `
              <div class="mt-3 px-3 py-1.5 rounded-sm bg-[#160703] border border-[#B8945B]/25 flex items-center justify-between text-[10.5px]">
                <div class="flex items-center gap-1.5 font-cinzel text-[#FFFDF9]">
                  <svg class="w-3 h-3 text-[#E6CA85]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"></path>
                  </svg>
                  <span>${product.nutrition.calories} <span class="text-[8.5px] font-sans text-[#B8945B] tracking-wider">KCAL</span></span>
                </div>
                <div class="flex items-center gap-2 font-mono text-[9.5px] text-[#E6CA85]">
                  <span>PRO: <strong class="text-[#FFFDF9]">${product.nutrition.protein}</strong></span>
                  <span class="text-[#B8945B]/30">|</span>
                  <span>CARB: <strong class="text-[#FFFDF9]">${product.nutrition.carbs}</strong></span>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Bottom Action Row: Prezzo & Haute Buttons -->
          <div class="pt-3.5 border-t border-[#B8945B]/20 flex items-center justify-between gap-2">
            <div>
              <span class="text-[8px] uppercase tracking-[0.24em] text-[#B8945B] block font-cinzel font-semibold">PREZZO</span>
              <div class="flex items-baseline gap-1.5 flex-wrap">
                ${pricing.isBirthdayDiscount ? `
                  <span class="text-[11px] text-rose-400/90 line-through font-mono">₹${pricing.originalPrice}</span>
                  <span class="font-bodoni font-bold text-2xl text-[#F5D796] tracking-tight">₹${pricing.price}</span>
                  <span class="text-[9px] font-bold text-emerald-400 uppercase bg-emerald-950/90 border border-emerald-500/50 px-1.5 py-0.2 rounded shadow-xs">30% OFF</span>
                ` : `
                  ${product.originalPrice ? `<span class="text-[11px] text-[#A89280] line-through font-mono">₹${product.originalPrice}</span>` : ''}
                  <span class="font-bodoni font-bold text-2xl text-[#FFFDF9] tracking-tight">₹${product.price}</span>
                `}
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="window.ladesioApp.openProductModal('${product.id}')"
                      class="btn-atelier-inspect rounded-sm shadow-sm" title="Explore Atelier Notes & Customizations">
                Inspect
              </button>
              <button onclick="window.ladesioApp.quickAddToCart('${product.id}')"
                      class="btn-atelier-acquire rounded-sm shadow-md" title="Add to Bespoke Shopping Bag">
                + Bag
              </button>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  // ==========================================
  // PRODUCT DETAIL MODAL (INR)
  // ==========================================
  openProductModal(productId) {
    let product = PRODUCTS.find(p => p.id === productId);
    if (!product && productId) {
      const cleanKey = String(productId).replace('desio-', '').replace(/-/g, ' ').toLowerCase();
      product = PRODUCTS.find(p => p.id.toLowerCase().includes(cleanKey) || p.name.toLowerCase().includes(cleanKey)) || PRODUCTS[0];
    } else if (!product) {
      product = PRODUCTS[0];
    }
    if (!product) return;

    const modal = document.getElementById('productDetailModal');
    const content = document.getElementById('productModalContent');
    if (!modal || !content) return;

    const pricing = this.getProductPricing(product);
    const inWishlist = cartStore.isInWishlist(product.id);

    let selectedModifiers = {
      extraSauce: false,
      iceCream: false,
      goldPackaging: false,
      quantity: 1
    };

    const updatePrice = () => {
      let base = pricing.price;
      if (selectedModifiers.extraSauce) base += 50;
      if (selectedModifiers.iceCream) base += 90;
      if (selectedModifiers.goldPackaging) base += 120;
      return (base * selectedModifiers.quantity);
    };

    content.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-start">
        
        <!-- Left Photography Gallery & Shrunk Customer Reviews -->
        <div class="md:col-span-5 space-y-2.5">
          <div class="relative rounded-2xl overflow-hidden border border-[#B8945B]/30 shadow-lg aspect-[16/10] sm:aspect-[4/3] max-h-[210px] md:max-h-[230px] w-full">
            <img id="modalMainImage" src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
            <span class="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#3A1F17] text-[#E6CA85] text-[10px] font-serif uppercase tracking-wider">
              ${product.badge}
            </span>
            <button onclick="window.ladesioApp.toggleWishlist('${product.id}')"
                    data-wishlist-btn="${product.id}"
                    class="absolute top-2 right-2 w-7 h-7 rounded-full bg-[#160703]/90 border ${inWishlist ? 'border-rose-500/80 shadow-[0_0_12px_rgba(244,63,94,0.4)]' : 'border-[#B8945B]/40 hover:border-[#E6CA85]'} flex items-center justify-center transition-all hover:scale-110 shadow-lg z-10 group/modalwish"
                    title="${inWishlist ? 'Remove from Wishlist' : 'Save to Bespoke Wishlist'}">
              <svg data-wishlist-icon="${product.id}" class="w-3.5 h-3.5 transition-all duration-300 ${inWishlist ? 'fill-rose-500 text-rose-500 scale-110' : 'fill-none text-[#D4AF37] group-hover/modalwish:text-white'}" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>

          <!-- Gallery Thumbnails -->
          <div class="flex gap-2">
            ${product.gallery.map(img => `
              <button onclick="document.getElementById('modalMainImage').src = '${img}'"
                      class="w-10 h-10 rounded-lg overflow-hidden border border-[#B8945B]/30 focus:ring-2 focus:ring-[#B8945B]">
                <img src="${img}" class="w-full h-full object-cover" />
              </button>
            `).join('')}
          </div>

          <!-- Shrunk Customer Reviews Module (Moved to Left Side under gallery) -->
          <div class="p-2.5 rounded-xl bg-[#180804] border border-[#B8945B]/35 space-y-1.5 text-xs">
            <div class="flex items-center justify-between border-b border-[#B8945B]/20 pb-1">
              <div class="flex items-center gap-1.5">
                <span class="text-amber-400 font-bold text-xs">★</span>
                <span class="font-display font-bold text-xs text-[#FFFDF9]">${product.rating.toFixed(2)}</span>
                <span class="text-[#D6C2B0]/70 text-[10px]">(${product.reviewsCount} reviews)</span>
              </div>
              <span class="px-2 py-0.2 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-[9px] font-serif">
                ✓ Verified Buyers
              </span>
            </div>

            <div class="space-y-1">
              ${(product.reviews || [
                { author: 'Atelier Patron', city: 'Chennai', rating: 5, date: 'Recent', title: 'Exceptional Balance', comment: 'Every layer of this dessert was executed with culinary precision.' }
              ]).slice(0, 1).map(r => `
                <div class="p-1.5 rounded-lg bg-[#241109] border border-[#B8945B]/20 space-y-0.5 text-left">
                  <div class="flex items-center justify-between">
                    <span class="font-serif font-bold text-[#E6CA85] text-[10px]">${r.author} <span class="text-stone-400 font-normal">(${r.city || 'Chennai'})</span></span>
                    <span class="text-amber-400 text-[9px]">${'★'.repeat(r.rating || 5)}</span>
                  </div>
                  <p class="text-[10px] text-[#D6C2B0] italic leading-snug line-clamp-2">"${r.comment}"</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Right Specs & Modifiers (Compact & Zero Scroll) -->
        <div class="md:col-span-7 space-y-2.5">
          ${pricing.isBirthdayDiscount ? `
            <div class="p-2 rounded-xl bg-gradient-to-r from-amber-950/70 via-[#1A0905] to-amber-950/70 border border-amber-500/60 text-amber-300 text-xs flex items-center justify-between shadow-lg">
              <span class="font-bold flex items-center gap-1.5 font-serif text-[11px]">
                <span>🎂</span> Exclusive 30% Birthday Privilege Active
              </span>
              <span class="text-[9px] bg-amber-400 text-black px-2 py-0.5 rounded-full font-black uppercase tracking-wider">30% OFF</span>
            </div>
          ` : ''}

          <div>
            <div class="flex items-center justify-between text-xs text-[#E6CA85] mb-0.5">
              <span class="flex items-center gap-2">
                <span class="px-2 py-0.2 rounded-md text-[9px] font-bold border ${product.isEggless ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300' : 'bg-rose-950/70 border-rose-600/50 text-rose-300'} flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full ${product.isEggless ? 'bg-emerald-400' : 'bg-rose-500'}"></span>
                  <span>${product.isEggless ? '100% Eggless' : 'Contains Egg'}</span>
                </span>
              </span>
              <span class="text-[#D6C2B0]/70 font-mono text-[10.5px]">${product.servingSize}</span>
            </div>
            <h2 class="font-display text-xl sm:text-2xl text-[#FFFDF9] leading-tight">${product.name}</h2>
            <p class="text-[11px] font-serif italic text-[#E6CA85]">${product.subtitle}</p>
            ${pricing.isBirthdayDiscount ? `
              <div class="flex items-baseline gap-2 mt-0.5">
                <span class="text-xs text-rose-400/90 line-through font-mono">₹${pricing.originalPrice}</span>
                <span class="font-display text-2xl text-[#F5D796] font-bold">₹${pricing.price}</span>
                <span class="text-[9.5px] font-bold text-emerald-400 uppercase bg-emerald-950/80 border border-emerald-500/50 px-1.5 py-0.2 rounded shadow-xs">30% OFF</span>
              </div>
            ` : `
              <p class="font-display text-xl text-[#FFFDF9] font-bold mt-0.5">₹${product.price}</p>
            `}
          </div>

          <p class="text-[11px] text-[#D6C2B0] leading-snug line-clamp-2">${product.description}</p>

          <!-- Nutritional & Macro Profile Module -->
          ${product.nutrition ? `
            <div class="p-2 rounded-xl bg-[#180804] border border-[#B8945B]/35 shadow-md space-y-1">
              <div class="flex items-center justify-between text-[10px]">
                <span class="font-serif uppercase tracking-wider font-bold text-[#FFFDF9] flex items-center gap-1">
                  <span class="text-[#E6CA85]">⚡</span> Nutrition & Macros
                </span>
                <span class="font-mono text-[#E6CA85] bg-[#B8945B]/15 px-1.5 py-0.2 rounded-full border border-[#B8945B]/30 text-[9px]">
                  ${product.nutrition.serving}
                </span>
              </div>

              <!-- Macro Metric Grid -->
              <div class="grid grid-cols-4 gap-1.5 text-center">
                <div class="py-1 px-1.5 rounded-lg bg-[#241109] border border-[#B8945B]/25">
                  <span class="block text-[8px] text-[#E6CA85] uppercase font-semibold">Calories</span>
                  <span class="font-display font-bold text-xs text-[#FFFDF9]">${product.nutrition.calories} <span class="text-[7.5px] font-sans font-normal text-[#D6C2B0]/60">kcal</span></span>
                </div>
                <div class="py-1 px-1.5 rounded-lg bg-[#241109] border border-[#B8945B]/25">
                  <span class="block text-[8px] text-[#E6CA85] uppercase font-semibold">Protein</span>
                  <span class="font-display font-bold text-xs text-[#FFFDF9]">${product.nutrition.protein}</span>
                </div>
                <div class="py-1 px-1.5 rounded-lg bg-[#241109] border border-[#B8945B]/25">
                  <span class="block text-[8px] text-[#E6CA85] uppercase font-semibold">Carbs</span>
                  <span class="font-display font-bold text-xs text-[#FFFDF9]">${product.nutrition.carbs}</span>
                </div>
                <div class="py-1 px-1.5 rounded-lg bg-[#241109] border border-[#B8945B]/25">
                  <span class="block text-[8px] text-[#E6CA85] uppercase font-semibold">Fats</span>
                  <span class="font-display font-bold text-xs text-[#FFFDF9]">${product.nutrition.fats}</span>
                </div>
              </div>
            </div>
          ` : ''}

          <!-- Artisanal Modifiers -->
          <div class="p-2 rounded-xl bg-[#180804] border border-[#B8945B]/35 space-y-1 text-[10.5px]">
            <h4 class="font-serif font-bold text-[#FFFDF9] text-xs">Custom Patisserie Modifiers</h4>
            
            <label class="flex items-center justify-between cursor-pointer">
              <span class="flex items-center gap-1.5 text-[#D6C2B0]">
                <input type="checkbox" id="modExtraSauce" class="rounded text-[#B8945B] accent-[#B8945B]" />
                Extra Warm Chocolate / Berry Coulis
              </span>
              <span class="font-semibold text-[#E6CA85]">+₹50</span>
            </label>

            <label class="flex items-center justify-between cursor-pointer">
              <span class="flex items-center gap-1.5 text-[#D6C2B0]">
                <input type="checkbox" id="modIceCream" class="rounded text-[#B8945B] accent-[#B8945B]" />
                Artisanal Madagascar Vanilla Gelato Scoop
              </span>
              <span class="font-semibold text-[#E6CA85]">+₹90</span>
            </label>

            <label class="flex items-center justify-between cursor-pointer">
              <span class="flex items-center gap-1.5 text-[#D6C2B0]">
                <input type="checkbox" id="modGoldPackaging" class="rounded text-[#B8945B] accent-[#B8945B]" />
                Luxury Keepsake Wooden Box with Wax Seal
              </span>
              <span class="font-semibold text-[#E6CA85]">+₹120</span>
            </label>
          </div>

          <!-- Accordion Specs -->
          <div class="space-y-1 text-[11px] border-t border-[#B8945B]/25 pt-1.5">
            <details class="group cursor-pointer">
              <summary class="font-serif font-bold text-[#FFFDF9] flex justify-between items-center group-hover:text-[#E6CA85]">
                <span>✦ Key Ingredients</span>
                <span class="text-[#E6CA85] text-xs">▼</span>
              </summary>
              <p class="text-[#D6C2B0] mt-0.5 pl-2 leading-relaxed text-[10.5px]">${product.ingredients.join(' • ')}</p>
            </details>

            <details class="group cursor-pointer">
              <summary class="font-serif font-bold text-[#FFFDF9] flex justify-between items-center group-hover:text-[#E6CA85]">
                <span>✦ Allergens & Dietary</span>
                <span class="text-[#E6CA85] text-xs">▼</span>
              </summary>
              <p class="text-[#D6C2B0] mt-0.5 pl-2 leading-relaxed text-[10.5px]">
                Dietary: ${product.isEggless ? '🟢 100% Eggless Pure Vegetarian' : '🔴 Contains Egg'}<br/>
                Allergens: ${product.allergens.join(', ') || 'None'}
              </p>
            </details>

            <details class="group cursor-pointer">
              <summary class="font-serif font-bold text-[#FFFDF9] flex justify-between items-center group-hover:text-[#E6CA85]">
                <span>✦ Storage & Serving Advice</span>
                <span class="text-[#E6CA85] text-xs">▼</span>
              </summary>
              <p class="text-[#D6C2B0] mt-0.5 pl-2 leading-relaxed text-[10.5px]">${product.storageInfo}</p>
            </details>
          </div>

          <!-- Quantity & Add to Cart -->
          <div class="pt-2 border-t border-[#B8945B]/30 flex items-center gap-2.5">
            <div class="flex items-center border border-[#B8945B]/40 rounded-lg bg-[#180804] overflow-hidden text-xs">
              <button onclick="let q = document.getElementById('modalQty'); q.value = Math.max(1, parseInt(q.value)-1)"
                      class="px-2.5 py-1.5 text-[#FFFDF9] hover:bg-[#B8945B]/20 font-bold">-</button>
              <input type="number" id="modalQty" value="1" min="1" max="10"
                     class="w-9 text-center font-bold text-[#FFFDF9] bg-transparent focus:outline-none text-xs" />
              <button onclick="let q = document.getElementById('modalQty'); q.value = parseInt(q.value)+1"
                      class="px-2.5 py-1.5 text-[#FFFDF9] hover:bg-[#B8945B]/20 font-bold">+</button>
            </div>

            <button id="modalAddToCartBtn"
                    class="flex-1 py-2.5 rounded-lg btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-lg">
              <span>Add to Shopping Bag</span> • ₹${pricing.price}
            </button>

            <button onclick="window.ladesioApp.toggleWishlist('${product.id}')"
                    data-wishlist-btn="${product.id}"
                    class="w-10 h-10 rounded-lg border ${inWishlist ? 'border-rose-500/80 bg-rose-950/40 shadow-[0_0_12px_rgba(244,63,94,0.3)]' : 'border-[#B8945B]/40 bg-[#180804] hover:border-[#E6CA85]'} flex items-center justify-center transition-all shadow-md group/modalwishbtn"
                    title="${inWishlist ? 'Remove from Wishlist' : 'Save to Bespoke Wishlist'}">
              <svg data-wishlist-icon="${product.id}" class="w-4 h-4 transition-all duration-300 ${inWishlist ? 'fill-rose-500 text-rose-500 scale-110' : 'fill-none text-[#D4AF37] group-hover/modalwishbtn:text-white'}" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>

        </div>

      </div>
    `;

    // Hook listeners for dynamic price update in modal
    const modExtraSauce = document.getElementById('modExtraSauce');
    const modIceCream = document.getElementById('modIceCream');
    const modGoldPackaging = document.getElementById('modGoldPackaging');
    const modalQty = document.getElementById('modalQty');
    const addBtn = document.getElementById('modalAddToCartBtn');

    const refreshBtnPrice = () => {
      selectedModifiers.extraSauce = modExtraSauce?.checked || false;
      selectedModifiers.iceCream = modIceCream?.checked || false;
      selectedModifiers.goldPackaging = modGoldPackaging?.checked || false;
      selectedModifiers.quantity = parseInt(modalQty?.value || 1);
      const calculated = updatePrice();
      if (addBtn) addBtn.innerHTML = `<span>Add to Shopping Bag</span> • ₹${calculated}`;
    };

    [modExtraSauce, modIceCream, modGoldPackaging, modalQty].forEach(el => {
      if (el) el.addEventListener('change', refreshBtnPrice);
    });

    if (addBtn) {
      addBtn.onclick = () => {
        const unitPrice = pricing.price + (selectedModifiers.extraSauce ? 50 : 0) + (selectedModifiers.iceCream ? 90 : 0) + (selectedModifiers.goldPackaging ? 120 : 0);
        const item = {
          id: product.id,
          name: product.name,
          subtitle: product.subtitle,
          price: unitPrice,
          originalPrice: pricing.originalPrice,
          isBirthdayDiscount: pricing.isBirthdayDiscount,
          image: product.image,
          quantity: selectedModifiers.quantity,
          options: {
            extraSauce: selectedModifiers.extraSauce,
            iceCream: selectedModifiers.iceCream,
            goldPackaging: selectedModifiers.goldPackaging
          }
        };

        cartStore.addItem(item);
        this.closeAllModals();
        this.openCartDrawer();
        window.showToast(`"${product.name}" added to bag!`, 'success');
      };
    }

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  // ==========================================
  // WISHLIST SLIDEOVER & DRAWER (INR)
  // ==========================================
  openWishlistDrawer() {
    const drawer = document.getElementById('wishlistDrawer');
    if (drawer) {
      drawer.classList.remove('translate-x-full');
      document.getElementById('wishlistBackdrop')?.classList.remove('hidden');
      this.renderWishlistDrawerContent();
    }
  }

  closeWishlistDrawer() {
    const drawer = document.getElementById('wishlistDrawer');
    if (drawer) {
      drawer.classList.add('translate-x-full');
      document.getElementById('wishlistBackdrop')?.classList.add('hidden');
    }
  }

  renderWishlistDrawerContent() {
    const itemsContainer = document.getElementById('wishlistDrawerItems');
    const summaryContainer = document.getElementById('wishlistDrawerSummary');
    if (!itemsContainer) return;

    const wishlistIds = cartStore.wishlist || [];
    const wishlistItems = PRODUCTS.filter(p => wishlistIds.includes(p.id));

    if (wishlistItems.length === 0) {
      itemsContainer.innerHTML = `
        <div class="text-center py-16 px-4">
          <span class="text-4xl block mb-2 text-rose-400">♥</span>
          <h4 class="font-display text-lg text-[#3A1F17]">Your Wishlist is Empty</h4>
          <p class="text-xs text-[#6B3E2E] mt-1 mb-4 font-light">Save your favorite handcrafted desserts to indulge anytime.</p>
          <button onclick="window.ladesioApp.closeWishlistDrawer(); window.location.hash='#menu'"
                  class="px-6 py-2.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold">
            Explore Collection ✨
          </button>
        </div>
      `;
      if (summaryContainer) summaryContainer.innerHTML = '';
      return;
    }

    itemsContainer.innerHTML = `
      <div class="space-y-3">
        ${wishlistItems.map(item => `
          <div class="p-3 rounded-2xl bg-white border border-[#B8945B]/20 shadow-sm flex items-center gap-3 text-xs group hover:border-[#B8945B]/40 transition-all">
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover border border-[#B8945B]/30 shrink-0" />
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-start">
                <h5 class="font-serif font-bold text-[#3A1F17] truncate">${item.name}</h5>
                <button onclick="window.ladesioApp.toggleWishlist('${item.id}')"
                        class="text-gray-400 hover:text-red-500 text-sm ml-2" title="Remove from Wishlist">
                  ✕
                </button>
              </div>
              <p class="text-[11px] text-[#B8945B] font-serif italic truncate">${item.subtitle}</p>
              
              <div class="flex items-center justify-between mt-2 pt-1 border-t border-[#B8945B]/10">
                <span class="font-display font-bold text-sm text-[#3A1F17]">₹${item.price}</span>
                <button onclick="window.ladesioApp.quickAddToCart('${item.id}')"
                        class="px-3 py-1 rounded-lg btn-chocolate-luxury text-[11px] font-serif font-semibold">
                  + Add to Bag
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    if (summaryContainer) {
      summaryContainer.innerHTML = `
        <div class="space-y-2">
          <button onclick="window.ladesioApp.addAllWishlistToCart()"
                  class="w-full py-3 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-lg">
            <span>Move All Items to Bag</span> 🛍️
          </button>
          <button onclick="window.ladesioApp.clearWishlist()"
                  class="w-full py-2 text-[11px] text-gray-500 hover:text-red-600 font-serif text-center transition-colors">
            Clear Wishlist
          </button>
        </div>
      `;
    }
  }

  addAllWishlistToCart() {
    const wishlistIds = cartStore.wishlist || [];
    const wishlistItems = PRODUCTS.filter(p => wishlistIds.includes(p.id));
    if (wishlistItems.length === 0) return;

    wishlistItems.forEach(p => {
      const pricing = this.getProductPricing(p);
      cartStore.addItem({
        id: p.id,
        name: p.name,
        subtitle: p.subtitle,
        price: pricing.price,
        originalPrice: pricing.originalPrice,
        isBirthdayDiscount: pricing.isBirthdayDiscount,
        image: p.image,
        quantity: 1
      });
    });

    this.closeWishlistDrawer();
    this.openCartDrawer();
    window.showToast(`${wishlistItems.length} dessert(s) moved to your shopping bag!`, 'success');
  }

  clearWishlist() {
    cartStore.wishlist = [];
    cartStore.saveWishlist();
    this.renderNavigationBadges();
    this.renderWishlistDrawerContent();
    document.querySelectorAll('[data-wishlist-icon]').forEach(icon => {
      icon.setAttribute('fill', 'none');
      icon.classList.remove('fill-rose-500', 'text-rose-500', 'scale-110');
      icon.classList.add('fill-none', 'text-[#D4AF37]');
    });
    document.querySelectorAll('[data-wishlist-btn]').forEach(btn => {
      btn.setAttribute('title', 'Save to Bespoke Wishlist');
      btn.classList.remove('border-rose-500/80', 'bg-rose-950/40', 'shadow-[0_0_12px_rgba(244,63,94,0.4)]', 'shadow-[0_0_12px_rgba(244,63,94,0.3)]');
      btn.classList.add('border-[#B8945B]/40');
    });
    window.showToast('Wishlist cleared.', 'info');
  }

  // ==========================================
  // CART SLIDEOVER & DRAWER (INR)
  // ==========================================
  openCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    if (drawer) {
      drawer.classList.remove('translate-x-full');
      document.getElementById('cartBackdrop')?.classList.remove('hidden');
    }
  }

  closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    if (drawer) {
      drawer.classList.add('translate-x-full');
      document.getElementById('cartBackdrop')?.classList.add('hidden');
    }
  }

  renderCartDrawerContent(summary) {
    const itemsContainer = document.getElementById('cartDrawerItems');
    const summaryContainer = document.getElementById('cartDrawerSummary');
    if (!itemsContainer || !summaryContainer) return;

    if (summary.items.length === 0) {
      itemsContainer.innerHTML = `
        <div class="text-center py-16 px-4">
          <span class="text-4xl block mb-2">🛍️</span>
          <h4 class="font-display text-lg text-[#3A1F17]">Your Bag is Empty</h4>
          <p class="text-xs text-[#6B3E2E] mt-1 mb-4">Discover our signature collection or create your bespoke creation.</p>
          <button onclick="window.ladesioApp.closeCartDrawer(); window.location.hash='#menu'"
                  class="px-6 py-2 rounded-lg btn-chocolate-luxury font-serif text-xs">
            Explore Menu
          </button>
        </div>
      `;
      summaryContainer.innerHTML = '';
      return;
    }

    // Free delivery progress meter
    const freeDeliveryText = summary.freeDeliveryAway > 0
      ? `Add <strong>₹${summary.freeDeliveryAway.toFixed(2)}</strong> more for Complimentary Delivery`
      : `<span class="text-emerald-700 font-bold">✨ You have unlocked Complimentary Delivery!</span>`;

    const freeDeliveryPercent = Math.min(100, ((999 - summary.freeDeliveryAway) / 999) * 100);

    itemsContainer.innerHTML = `
      <!-- Free Shipping Meter -->
      <div class="p-3 rounded-xl bg-[#F8F1E7] border border-[#B8945B]/30 mb-4 text-xs">
        <p class="text-[#6B3E2E] text-center mb-1.5">${freeDeliveryText}</p>
        <div class="w-full bg-white h-1.5 rounded-full overflow-hidden border border-[#B8945B]/20">
          <div class="bg-gradient-to-r from-[#B8945B] to-[#3A1F17] h-full" style="width: ${freeDeliveryPercent}%"></div>
        </div>
      </div>

      <!-- Item List -->
      <div class="space-y-4">
        ${summary.items.map(item => `
          <div class="p-3 rounded-xl bg-white border border-[#B8945B]/20 shadow-sm flex items-start gap-3 text-xs">
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover border border-[#B8945B]/30 shrink-0" />
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-start">
                <h5 class="font-serif font-bold text-[#3A1F17] truncate">${item.name}</h5>
                <button onclick="window.cartStore.removeItem('${item.uid}')" class="text-gray-400 hover:text-red-500 text-sm ml-2">✕</button>
              </div>
              <p class="text-[11px] text-[#6B3E2E] line-clamp-1">${item.subtitle || ''}</p>
              
              <div class="flex items-center justify-between mt-2">
                <div class="flex items-center border border-[#B8945B]/30 rounded bg-[#F8F1E7]">
                  <button onclick="window.cartStore.updateQuantity('${item.uid}', -1)" class="px-2 py-0.5 font-bold text-[#3A1F17]">-</button>
                  <span class="px-2 text-xs font-bold">${item.quantity}</span>
                  <button onclick="window.cartStore.updateQuantity('${item.uid}', 1)" class="px-2 py-0.5 font-bold text-[#3A1F17]">+</button>
                </div>
                <div class="text-right">
                  ${item.isBirthdayDiscount ? `
                    <span class="text-[10px] text-stone-400 line-through font-mono block">₹${(item.originalPrice * item.quantity).toFixed(2)}</span>
                    <span class="font-display font-bold text-sm text-[#3A1F17]">₹${((item.originalPrice * item.quantity) - (item.birthdayDiscountAmount || 0)).toFixed(2)}</span>
                    <span class="text-[9px] bg-amber-100 text-amber-900 border border-amber-300 font-bold px-1.5 py-0.5 rounded block mt-0.5">
                      🎂 30% Birthday Treat (${item.quantity > 1 ? '1 unit discounted' : 'Applied'})
                    </span>
                  ` : `
                    <span class="font-display font-bold text-sm text-[#3A1F17]">₹${(item.price * item.quantity).toFixed(2)}</span>
                  `}
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    summaryContainer.innerHTML = `
      ${summary.isBirthdayOrder ? `
        <!-- Birthday Privilege Banner -->
        <div class="mb-4 p-3 rounded-2xl bg-gradient-to-r from-amber-950/50 via-[#1A0A06] to-amber-950/50 border border-[#B8945B]/60 text-xs shadow-md">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-lg">🎂</span>
              <div>
                <span class="font-serif font-bold text-[#E6CA85] block">30% Birthday Treat Applied!</span>
                <span class="text-[10px] text-[#D6C2B0]">Saving ₹${(summary.birthdayDiscount || 0).toFixed(2)} on 1 Birthday Treat${summary.birthdayDiscountItemName ? ` (${summary.birthdayDiscountItemName})` : ''}</span>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-amber-400 text-black font-mono font-bold text-[10px] tracking-wider uppercase">30% OFF (1 TREAT)</span>
          </div>
        </div>
      ` : `
        <!-- Promo Code Input -->
        <div class="mb-4">
          <div class="flex gap-2">
            <input type="text" id="promoCodeInput" placeholder="Promo code (e.g. LADESIO10)"
                   class="flex-1 px-3 py-2 rounded-lg border border-[#B8945B]/40 text-xs text-[#3A1F17] focus:outline-none uppercase" />
            <button onclick="window.ladesioApp.applyPromoCode()"
                    class="px-4 py-2 rounded-lg btn-chocolate-luxury font-serif text-xs font-semibold">
              Apply
            </button>
          </div>
          ${summary.activePromo ? `
            <div class="mt-1 flex justify-between items-center text-[10px] text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
              <span>✓ ${summary.activePromo.description}</span>
              <button onclick="window.cartStore.removePromo()" class="text-red-500 font-bold">Remove</button>
            </div>
          ` : ''}
        </div>
      `}

      <!-- Price Breakdown -->
      <div class="space-y-1.5 text-xs text-[#6B3E2E] border-t border-[#B8945B]/20 pt-3">
        <div class="flex justify-between">
          <span>Creations Subtotal:</span>
          <span class="font-mono font-semibold">₹${summary.subtotal.toFixed(2)}</span>
        </div>
        ${summary.birthdayDiscount > 0 ? `
          <div class="flex justify-between text-amber-900 font-bold bg-amber-50 px-2.5 py-1.5 rounded-lg border border-amber-300 shadow-xs">
            <span class="flex items-center gap-1">🎂 30% Birthday Treat (1 Item):</span>
            <span class="font-mono text-amber-800">-₹${summary.birthdayDiscount.toFixed(2)}</span>
          </div>
        ` : ''}
        ${summary.promoDiscount > 0 ? `
          <div class="flex justify-between text-[#B8945B]">
            <span>Promo Code Discount:</span>
            <span class="font-mono">-₹${summary.promoDiscount.toFixed(2)}</span>
          </div>
        ` : ''}
        <div class="flex justify-between">
          <span>Delivery:</span>
          <span>${summary.delivery === 0 ? '<span class="text-emerald-700 font-semibold">FREE</span>' : '₹' + summary.delivery.toFixed(2)}</span>
        </div>
        <div class="flex justify-between font-display font-bold text-base text-[#3A1F17] border-t border-[#B8945B]/30 pt-2">
          <span>Total:</span>
          <span class="text-gold-gradient">₹${summary.total.toFixed(2)}</span>
        </div>
      </div>

      <!-- Checkout Button -->
      <button onclick="window.ladesioApp.handleProceedToCheckout()"
              class="w-full mt-4 py-3 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-xl">
        <span>Proceed to Checkout</span> 💳
      </button>
    `;
  }

  // ==========================================
  // SEARCH & AUTOCOMPLETE MODAL
  // ==========================================
  openSearchModal() {
    const modal = document.getElementById('searchModal');
    if (modal) {
      modal.classList.remove('hidden');
      document.getElementById('globalSearchInput')?.focus();
      this.renderSearchResults('');
    }
  }

  renderSearchResults(query) {
    const container = document.getElementById('searchResultsContainer');
    if (!container) return;

    const clean = (query || '').toLowerCase().trim();
    let matches = PRODUCTS;
    if (clean) {
      matches = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(clean) ||
        p.subtitle.toLowerCase().includes(clean) ||
        p.flavor.toLowerCase().includes(clean) ||
        p.category.toLowerCase().includes(clean)
      );
    }

    if (matches.length === 0) {
      container.innerHTML = `
        <div class="text-center py-8 text-xs text-[#6B3E2E]">
          No desserts found for "${query}". Try searching for "Pistachio", "Chocolate", or "Natural".
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
        ${matches.slice(0, 8).map(p => `
          <div onclick="window.ladesioApp.closeAllModals(); window.ladesioApp.openProductModal('${p.id}')"
               class="p-2.5 rounded-xl border border-[#B8945B]/20 bg-white hover:bg-[#F8F1E7] cursor-pointer flex items-center gap-3 transition-all">
            <img src="${p.image}" alt="${p.name}" class="w-12 h-12 rounded-lg object-cover shrink-0" />
            <div class="flex-1 min-w-0">
              <h5 class="font-serif text-xs font-bold text-[#3A1F17] truncate">${p.name}</h5>
              <p class="text-[10px] text-[#6B3E2E] truncate">${p.subtitle}</p>
              <span class="text-xs font-semibold text-[#B8945B]">₹${p.price}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  closeAllModals() {
    document.querySelectorAll('.modal-wrapper').forEach(m => m.classList.add('hidden'));
    document.body.classList.remove('overflow-hidden');
    this.closeCartDrawer();
    this.closeWishlistDrawer();
  }

  // ==========================================
  // ACTION HANDLERS
  // ==========================================
  quickAddToCart(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const pricing = this.getProductPricing(prod);

    cartStore.addItem({
      id: prod.id,
      name: prod.name,
      subtitle: prod.subtitle,
      price: pricing.price,
      originalPrice: pricing.originalPrice,
      isBirthdayDiscount: pricing.isBirthdayDiscount,
      image: prod.image,
      quantity: 1
    });

    if (typeof window !== 'undefined' && window.ladesioSoundscape && typeof window.ladesioSoundscape.playCrystalChime === 'function') {
      window.ladesioSoundscape.playCrystalChime();
    }

    window.showToast(`"${prod.name}" added to bag!`, 'success');
  }

  toggleWishlist(productId) {
    const added = cartStore.toggleWishlist(productId);
    const prod = PRODUCTS.find(p => p.id === productId);
    if (added) {
      if (typeof window !== 'undefined' && window.ladesioSoundscape && typeof window.ladesioSoundscape.playCrystalChime === 'function') {
        window.ladesioSoundscape.playCrystalChime();
      }
      window.showToast(`"${prod?.name || 'Item'}" added to your Wishlist!`, 'success');
    } else {
      window.showToast(`"${prod?.name || 'Item'}" removed from Wishlist.`, 'info');
    }
    
    // Dynamically update matching heart icons across page (cards, modals, etc.)
    document.querySelectorAll(`[data-wishlist-icon="${productId}"]`).forEach(icon => {
      if (added) {
        icon.setAttribute('fill', 'currentColor');
        icon.classList.remove('fill-none', 'text-[#D4AF37]', 'text-gray-400');
        icon.classList.add('fill-rose-500', 'text-rose-500', 'scale-110');
      } else {
        icon.setAttribute('fill', 'none');
        icon.classList.remove('fill-rose-500', 'text-rose-500', 'scale-110');
        icon.classList.add('fill-none', 'text-[#D4AF37]');
      }
    });

    // Dynamically update matching wishlist buttons (borders, glows, titles)
    document.querySelectorAll(`[data-wishlist-btn="${productId}"]`).forEach(btn => {
      if (added) {
        btn.setAttribute('title', 'Remove from Wishlist');
        btn.classList.add('border-rose-500/80', 'shadow-[0_0_12px_rgba(244,63,94,0.4)]');
        btn.classList.remove('border-[#B8945B]/40');
      } else {
        btn.setAttribute('title', 'Save to Bespoke Wishlist');
        btn.classList.remove('border-rose-500/80', 'shadow-[0_0_12px_rgba(244,63,94,0.4)]', 'shadow-[0_0_12px_rgba(244,63,94,0.3)]', 'bg-rose-950/40');
        btn.classList.add('border-[#B8945B]/40');
      }
    });

    this.renderNavigationBadges();
    this.renderWishlistDrawerContent();
  }

  cloneTrendingCreation(config) {
    window.location.hash = '#builder';
    setTimeout(() => {
      if (window.dessertStudio) {
        window.dessertStudio.loadConfig(config);
      }
    }, 100);
  }

  quickOrderCustomCreation(creation) {
    cartStore.addItem({
      id: 'custom_reorder_' + Date.now(),
      name: creation.name,
      subtitle: creation.recipe,
      isCustom: true,
      price: creation.price,
      image: creation.image,
      quantity: 1
    });
    this.openCartDrawer();
    window.showToast(`"${creation.name}" added to your bag!`, 'success');
  }

  applyPromoCode() {
    const input = document.getElementById('promoCodeInput');
    const code = input?.value;
    const res = cartStore.applyPromo(code);
    window.showToast(res.message, res.success ? 'success' : 'info');
  }

  toggleEgglessFilter() {
    this.activeFilter.onlyEggless = !this.activeFilter.onlyEggless;
    this.renderMenuView(document.getElementById('app-main-content'));
  }

  setMenuCategory(catId) {
    this.selectedCategory = catId;
    this.renderMenuView(document.getElementById('app-main-content'));
  }

  setDietaryFilter(val) {
    this.activeFilter.dietary = val;
    this.renderMenuView(document.getElementById('app-main-content'));
  }

  setPriceFilter(val) {
    this.activeFilter.priceMax = parseFloat(val);
    this.renderMenuView(document.getElementById('app-main-content'));
  }

  setSortFilter(val) {
    this.activeFilter.sortBy = val;
    this.renderMenuView(document.getElementById('app-main-content'));
  }

  resetFilters() {
    this.selectedCategory = 'all';
    this.activeFilter = { priceMax: 3500, dietary: 'all', onlyEggless: false, sortBy: 'recommended' };
    this.renderMenuView(document.getElementById('app-main-content'));
  }

  setActiveAccountTab(tab) {
    this.activeAccountTab = tab;
    if (this.currentRoute === 'account') {
      this.renderAccountView();
    }
  }

  reorderOrder(orderId) {
    const data = loyaltyStore.getData();
    const order = (data.orders || []).find(o => o.id === orderId);
    if (!order || !order.items || order.items.length === 0) {
      if (window.showToast) window.showToast('No items found in this order.', 'info');
      return;
    }

    order.items.forEach(item => {
      cartStore.addItem({
        id: (item.isCustom ? 'custom_reorder_' : 'item_reorder_') + Date.now() + Math.floor(Math.random() * 1000),
        name: item.name,
        subtitle: item.subtitle || '',
        isCustom: !!item.isCustom,
        price: item.price,
        image: item.image || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
        quantity: item.qty || 1,
        options: item.options || {}
      });
    });

    this.renderNavigationBadges();
    this.openCartDrawer();
    if (window.showToast) {
      window.showToast(`All items from ${order.id} re-added to your shopping bag!`, 'success');
    }
  }

  openOrderTracker(orderId) {
    const data = loyaltyStore.getData();
    const order = (data.orders || []).find(o => o.id === orderId) || {
      id: orderId || 'DESIO-9142',
      status: 'Out on Live Dispatch',
      date: 'Today',
      deliverySlot: 'Express Artisanal — Within 14 Mins (Live Traffic)',
      trackingNumber: 'IN-EXP-9142-DESIO',
      address: { city: 'Chennai', street: 'No.60/A Gnanamani St, West Jafferkhanpet' },
      total: 1040,
      distanceKm: 3.8,
      estimatedMinutes: 14
    };

    let modal = document.getElementById('orderTrackerModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'orderTrackerModal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto';
      document.body.appendChild(modal);
    }

    const city = order.address?.city || 'Chennai';
    const street = order.address?.street || 'Patron Residence';
    const distanceKm = order.distanceKm || 3.8;
    const estMinutes = order.estimatedMinutes || 14;
    const trackingNo = order.trackingNumber || `IN-EXP-${String(order.id).replace('DESIO-', '')}-DESIO`;

    const origin = encodeURIComponent('LA DESIO Flagship Atelier, West Jafferkhanpet, Chennai');
    const destination = encodeURIComponent(`${street}, ${city}`);
    const googleEmbedUrl = `https://maps.google.com/maps?saddr=${origin}&daddr=${destination}&t=m&z=14&output=embed`;

    modal.innerHTML = `
      <div class="relative w-full max-w-4xl bg-[#180A06] rounded-3xl border border-[#B8945B]/40 shadow-2xl overflow-hidden my-auto text-[#FFFDF9] flex flex-col max-h-[92vh]">
        
        <!-- Google Maps Top Chrome Bar -->
        <div class="bg-[#120804] border-b border-[#B8945B]/30 p-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#10B981] via-[#047857] to-[#064E3B] border border-emerald-400/40 flex items-center justify-center text-xl shadow-lg">
              📍
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-display font-bold text-sm tracking-wide text-white">Google Maps Live Dispatch</span>
                <span class="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-[9.5px] font-bold animate-pulse flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  LIVE TRAFFIC ACTIVE
                </span>
              </div>
              <p class="text-[11px] text-[#D6C2B0] font-mono">Consignment ${trackingNo} • ${order.id}</p>
            </div>
          </div>

          <!-- Mode Switcher & Close -->
          <div class="flex items-center gap-2">
            <div class="inline-flex rounded-xl bg-black/60 p-1 border border-[#B8945B]/30 text-xs">
              <button id="trackerRadarBtn" onclick="window.ladesioApp.switchTrackerView('radar')"
                      class="px-3 py-1 rounded-lg font-serif text-[11px] font-semibold transition-all bg-[#B8945B] text-black shadow cursor-pointer">
                🚗 Traffic Radar
              </button>
              <button id="trackerEmbedBtn" onclick="window.ladesioApp.switchTrackerView('embed')"
                      class="px-3 py-1 rounded-lg font-serif text-[11px] font-semibold transition-all text-[#D6C2B0] hover:text-white cursor-pointer">
                🗺️ Satellite Embed
              </button>
            </div>
            <button onclick="window.ladesioApp.closeOrderTracker()"
                    class="w-9 h-9 rounded-xl bg-black/40 hover:bg-black/80 border border-[#B8945B]/30 hover:border-[#E6CA85] text-stone-300 hover:text-white flex items-center justify-center text-base transition-colors cursor-pointer"
                    title="Close Tracker">✕</button>
          </div>
        </div>

        <!-- Google Route Navigation Sub-Header Bar -->
        <div class="bg-[#1A0905] border-b border-[#B8945B]/20 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div class="flex items-center gap-2 overflow-x-auto py-0.5">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0"></span>
            <span class="text-stone-300 truncate max-w-[200px] sm:max-w-xs font-serif">LA DESIO Flagship (Jafferkhanpet)</span>
            <span class="text-[#E6CA85] font-bold">➔</span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#E6CA85] shrink-0"></span>
            <span class="text-white font-bold truncate max-w-[220px] sm:max-w-xs font-serif">${street}, ${city}</span>
          </div>

          <!-- Dynamic Live Countdown Pill -->
          <div class="flex items-center gap-3">
            <div class="px-3 py-1 rounded-xl bg-black/60 border border-[#B8945B]/40 flex items-center gap-2 font-mono">
              <span class="text-[#E6CA85] text-[11px]">⏱️ ETA:</span>
              <strong id="liveTrackerCountdown" class="text-emerald-400 font-bold text-xs">${estMinutes}:00</strong>
              <span class="text-[10px] text-stone-400">(${distanceKm} km)</span>
            </div>
          </div>
        </div>

        <!-- Scrollable Middle Section: Map & Telemetry -->
        <div class="overflow-y-auto flex-1 p-4 sm:p-6 space-y-5">
          
          <!-- MAP CONTAINER -->
          <div class="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#B8945B]/40 shadow-2xl">
            
            <!-- VIEW A: Interactive Traffic Radar View -->
            <div id="trackerRadarView" class="w-full h-full relative google-map-dark-canvas overflow-hidden select-none">
              
              <!-- SVG Road Network & Traffic Lines -->
              <svg class="absolute inset-0 w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="none">
                <!-- Background Secondary Grid Streets -->
                <line x1="0" y1="90" x2="800" y2="90" stroke="#1c2333" stroke-width="6" />
                <line x1="0" y1="180" x2="800" y2="180" stroke="#1c2333" stroke-width="8" />
                <line x1="0" y1="290" x2="800" y2="290" stroke="#1c2333" stroke-width="6" />
                <line x1="0" y1="390" x2="800" y2="390" stroke="#1c2333" stroke-width="8" />
                
                <line x1="120" y1="0" x2="120" y2="450" stroke="#1c2333" stroke-width="6" />
                <line x1="260" y1="0" x2="260" y2="450" stroke="#1c2333" stroke-width="8" />
                <line x1="420" y1="0" x2="420" y2="450" stroke="#1c2333" stroke-width="8" />
                <line x1="580" y1="0" x2="580" y2="450" stroke="#1c2333" stroke-width="6" />
                <line x1="710" y1="0" x2="710" y2="450" stroke="#1c2333" stroke-width="8" />

                <!-- Road Labels -->
                <text x="30" y="80" fill="#4b5563" font-size="10" font-family="sans-serif">Mount-Poonamallee Rd</text>
                <text x="270" y="30" fill="#4b5563" font-size="10" font-family="sans-serif">100 Feet Inner Ring</text>
                <text x="430" y="30" fill="#4b5563" font-size="10" font-family="sans-serif">Anna Salai Arterial</text>
                <text x="590" y="80" fill="#4b5563" font-size="10" font-family="sans-serif">Guindy Flyover Corridor</text>

                <!-- ACTIVE DISPATCH ROUTE: Primary Path with Live Traffic Segments -->
                <!-- Segment 1: FREE FLOW (Emerald Green) -->
                <path d="M 120 340 L 260 340 L 260 210 L 380 210" 
                      stroke="#10B981" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" class="opacity-90 shadow" />
                
                <!-- Segment 2: MODERATE TRAFFIC (Amber/Orange near junction) -->
                <path d="M 380 210 L 490 210 L 490 140" 
                      stroke="#F59E0B" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" class="opacity-95" />
                
                <!-- Segment 3: SLIGHT SLOWDOWN / HEAVY CONGESTION (Crimson red) with Smart Detour Bypass -->
                <path d="M 490 140 L 560 140" 
                      stroke="#EF4444" stroke-width="7" stroke-linecap="round" fill="none" opacity="0.4" stroke-dasharray="4 4" />
                
                <!-- Smart Detour Path (Cyan/Green flow) -->
                <path d="M 490 140 L 490 100 L 620 100 L 620 140 L 710 140" 
                      stroke="#10B981" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" class="opacity-95" />

                <!-- Animated Direction Arrows on the active route -->
                <path d="M 120 340 L 260 340 L 260 210 L 490 210 L 490 100 L 620 100 L 620 140 L 710 140"
                      stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" class="traffic-dash-flow opacity-80" />

                <!-- Radar Rings around Destination -->
                <circle cx="710" cy="140" r="30" fill="none" stroke="#E6CA85" stroke-width="1.5" class="radar-ping-ring" opacity="0.6" />
                <circle cx="710" cy="140" r="50" fill="none" stroke="#E6CA85" stroke-width="1" class="radar-ping-ring" opacity="0.3" />
              </svg>

              <!-- Origin Marker: LA DESIO Atelier -->
              <div class="absolute left-[120px] top-[340px] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div class="px-2 py-0.5 rounded-md bg-[#180A06] border border-[#B8945B] text-[9px] font-serif text-[#E6CA85] font-bold shadow-lg whitespace-nowrap mb-1">
                  🏛️ LA DESIO Hub
                </div>
                <div class="w-7 h-7 rounded-full bg-gradient-to-br from-[#B8945B] to-[#E6CA85] p-0.5 shadow-xl flex items-center justify-center text-black text-xs font-bold ring-4 ring-[#B8945B]/30">
                  🏰
                </div>
              </div>

              <!-- Destination Marker: Patron Home -->
              <div class="absolute left-[710px] top-[140px] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div class="px-2.5 py-1 rounded-md bg-emerald-950/90 border border-emerald-500 text-[10px] font-serif text-white font-bold shadow-2xl whitespace-nowrap mb-1 flex items-center gap-1">
                  <span>📍 Your Address</span>
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                </div>
                <div class="w-8 h-8 rounded-full bg-emerald-500 p-0.5 shadow-2xl flex items-center justify-center text-black text-sm font-bold ring-4 ring-emerald-500/40 animate-bounce">
                  🏠
                </div>
              </div>

              <!-- Live Moving Courier Vehicle Marker (Animated along path) -->
              <div id="liveCourierVehicle" 
                   class="absolute z-30 flex flex-col items-center transition-all duration-1000 ease-linear"
                   style="left: 420px; top: 210px; transform: translate(-50%, -50%);">
                
                <!-- Telemetry floating label -->
                <div class="px-2.5 py-1 rounded-xl bg-black/95 border border-[#E6CA85] text-[10px] text-[#E6CA85] font-mono shadow-2xl flex items-center gap-2 whitespace-nowrap mb-1.5 live-glow-badge">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Pierre M. (Chauffeur) • 34 km/h</span>
                </div>

                <!-- Vehicle Icon with Sonar Glow -->
                <div class="relative flex items-center justify-center">
                  <div class="absolute w-12 h-12 rounded-full bg-[#E6CA85]/25 radar-ping-ring"></div>
                  <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#B8945B] via-[#E6CA85] to-[#B8945B] p-1 shadow-2xl flex items-center justify-center text-black text-lg font-bold ring-4 ring-[#B8945B]/40">
                    🚐
                  </div>
                </div>
              </div>

              <!-- Google Maps Controls & Legend Overlay -->
              <!-- Top Left Traffic Badge -->
              <div class="absolute top-3 left-3 z-20 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#B8945B]/30 text-[10px] text-stone-300 font-mono flex items-center gap-2 shadow-lg">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Live Google Traffic Layer (Typical Evening Speed: 32 km/h)</span>
              </div>

              <!-- Bottom Left: Speed Legend -->
              <div class="absolute bottom-3 left-3 z-20 bg-black/85 backdrop-blur-md p-2.5 rounded-xl border border-[#B8945B]/30 text-[9.5px] font-mono text-stone-300 space-y-1 shadow-lg">
                <span class="text-[#E6CA85] font-bold block">Traffic Density:</span>
                <div class="flex items-center gap-3">
                  <span class="flex items-center gap-1"><span class="w-3 h-1.5 bg-[#10B981] rounded-full"></span> Fast (>40km/h)</span>
                  <span class="flex items-center gap-1"><span class="w-3 h-1.5 bg-[#F59E0B] rounded-full"></span> Slow (20-40km/h)</span>
                  <span class="flex items-center gap-1"><span class="w-3 h-1.5 bg-[#EF4444] rounded-full"></span> Congested (&lt;20km/h)</span>
                </div>
              </div>

              <!-- Bottom Right: Map Zoom & Recenter Controls -->
              <div class="absolute bottom-3 right-3 z-20 flex flex-col gap-1.5">
                <button type="button" onclick="window.ladesioApp.recenterOnCourier()" 
                        class="w-8 h-8 rounded-lg bg-black/80 hover:bg-[#B8945B] border border-[#B8945B]/40 text-[#E6CA85] hover:text-black flex items-center justify-center text-sm shadow transition-colors cursor-pointer"
                        title="Recenter on Courier">
                  🎯
                </button>
                <button type="button" onclick="if(window.showToast) window.showToast('Zoom Level: 14.5x (Atelier Precision)', 'info');" 
                        class="w-8 h-8 rounded-lg bg-black/80 hover:bg-[#B8945B] border border-[#B8945B]/40 text-[#E6CA85] hover:text-black flex items-center justify-center text-sm shadow transition-colors font-bold cursor-pointer"
                        title="Zoom In">
                  +
                </button>
                <button type="button" onclick="if(window.showToast) window.showToast('Zoom Level: 12.0x', 'info');" 
                        class="w-8 h-8 rounded-lg bg-black/80 hover:bg-[#B8945B] border border-[#B8945B]/40 text-[#E6CA85] hover:text-black flex items-center justify-center text-sm shadow transition-colors font-bold cursor-pointer"
                        title="Zoom Out">
                  −
                </button>
              </div>

            </div>

            <!-- VIEW B: Dynamic Google Maps Embed (iframe) -->
            <div id="trackerGoogleEmbedView" class="w-full h-full relative hidden">
              <iframe
                src="${googleEmbedUrl}"
                class="w-full h-full border-0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                title="Google Maps Live Directions">
              </iframe>
              <div class="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-[#B8945B]/40 text-[10px] text-[#E6CA85] font-mono z-10">
                <span>Google Maps Direct Satellite</span>
              </div>
            </div>

          </div>

          <!-- DISPATCH TELEMETRY & CHAUFFEUR DOSSIER (2 Columns) -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
            
            <!-- Left: Chauffeur & Vehicle Credentials -->
            <div class="md:col-span-6 bg-[#200E08] rounded-2xl border border-[#B8945B]/30 p-4 space-y-3 shadow-lg flex flex-col justify-between">
              <div class="flex items-start gap-3.5">
                <div class="relative shrink-0">
                  <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#B8945B] to-[#E6CA85] p-0.5 shadow-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                         alt="Chauffeur Pierre" class="w-full h-full object-cover rounded-full" />
                  </div>
                  <span class="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#200E08]" title="Active Online"></span>
                </div>

                <div class="space-y-0.5 flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <h4 class="font-serif font-bold text-sm text-white">Pierre Moreau</h4>
                    <span class="px-2 py-0.5 rounded-full bg-[#B8945B]/20 text-[#E6CA85] text-[10px] font-mono font-bold">4.98 ★</span>
                  </div>
                  <p class="text-[11px] text-[#E6CA85] font-serif">Senior Atelier Chauffeur • 1,420 Deliveries</p>
                  <p class="text-[10px] text-[#D6C2B0]">Vehicle: Mercedes Sprinter Cryo-Van (#TN-09-DE-9142)</p>
                </div>
              </div>

              <!-- Smart Climate Chamber Telemetry -->
              <div class="p-2.5 rounded-xl bg-[#140603] border border-[#B8945B]/20 flex items-center justify-between text-[11px] font-mono">
                <div class="flex items-center gap-1.5">
                  <span class="text-sky-300">❄️ Casket Sensor:</span>
                  <strong class="text-white">-4.2°C</strong>
                </div>
                <div class="flex items-center gap-1.5 text-emerald-400">
                  <span>● Nitrogen Shield Active</span>
                </div>
              </div>

              <!-- Chauffeur Action Controls -->
              <div class="flex items-center gap-2 pt-1">
                <a href="tel:+919345396700" 
                   class="flex-1 py-2 px-3 rounded-xl bg-[#180A06] border border-[#B8945B]/40 hover:border-[#E6CA85] text-[#E6CA85] hover:text-white font-serif text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5 shadow cursor-pointer">
                  <span>📞</span> Call Chauffeur
                </a>
                <button type="button" onclick="if(window.showToast) window.showToast('Priority SMS dispatched to Chauffeur Pierre', 'success');"
                        class="flex-1 py-2 px-3 rounded-xl bg-[#180A06] border border-[#B8945B]/40 hover:border-[#E6CA85] text-[#E6CA85] hover:text-white font-serif text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5 shadow cursor-pointer">
                  <span>💬</span> Message Chauffeur
                </button>
              </div>
            </div>

            <!-- Right: Real-Time Traffic & Route Intelligence Feed -->
            <div class="md:col-span-6 bg-[#200E08] rounded-2xl border border-[#B8945B]/30 p-4 space-y-2.5 shadow-lg flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between border-b border-[#B8945B]/20 pb-2 mb-2">
                  <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold">Live Traffic & Dispatch Log</span>
                  <span class="text-[10px] text-[#D6C2B0] font-mono">Auto-Refreshing</span>
                </div>

                <div class="space-y-2 text-[11px] max-h-36 overflow-y-auto pr-1">
                  <div class="flex items-start gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">● 16:15</span>
                    <p class="text-[#D6C2B0]">Artisanal dessert placed in liquid nitrogen cryo-casket (-4°C locked).</p>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">● 16:21</span>
                    <p class="text-[#D6C2B0]">Dispatched from LA Desio Flagship Atelier via West Jafferkhanpet.</p>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-amber-400 font-bold shrink-0">● 16:26</span>
                    <p class="text-stone-300">🚦 Google Traffic Alert: Anna Salai bottleneck detected (+2m). Automatic smart reroute applied via Guindy Inner Ring.</p>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-[#E6CA85] font-bold shrink-0">● Now</span>
                    <p class="text-white font-semibold">Cruising at 34 km/h along 100ft road corridor. Approximately 1.4 km remaining.</p>
                  </div>
                </div>
              </div>

              <!-- Order Reference & Total Badge -->
              <div class="pt-2 border-t border-[#B8945B]/20 flex items-center justify-between text-xs">
                <span class="text-[#D6C2B0]">Order Ref: <strong class="text-white font-mono">${order.id}</strong></span>
                <span class="text-gold-gradient font-display font-bold text-sm">Paid: ₹${order.total ? Number(order.total).toFixed(2) : '1,040.00'}</span>
              </div>
            </div>

          </div>

        </div>

        <!-- Footer Actions -->
        <div class="bg-[#120804] border-t border-[#B8945B]/30 p-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div class="flex items-center gap-2 text-xs text-[#D6C2B0]">
            <span>✨ White-Glove Handover:</span>
            <strong class="text-[#E6CA85]">Contactless Delivery with Temperature Seal</strong>
          </div>

          <div class="flex items-center gap-3">
            <button onclick="window.ladesioApp.reorderOrder('${order.id}'); window.ladesioApp.closeOrderTracker();"
                    class="py-2.5 px-5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-lg cursor-pointer">
              <span>🔁</span> Reorder Items
            </button>
            <button onclick="window.ladesioApp.closeOrderTracker()"
                    class="py-2.5 px-5 rounded-xl border border-white/20 hover:border-white text-white font-serif text-xs font-semibold transition-colors cursor-pointer">
              Close Tracker
            </button>
          </div>
        </div>

      </div>
    `;

    modal.classList.remove('hidden');

    // Start live vehicle simulation & countdown timer
    this.startTrackerSimulation(estMinutes);
  }

  closeOrderTracker() {
    if (this.trackerInterval) {
      clearInterval(this.trackerInterval);
      this.trackerInterval = null;
    }
    const modal = document.getElementById('orderTrackerModal');
    if (modal) modal.classList.add('hidden');
  }

  switchTrackerView(mode) {
    const radar = document.getElementById('trackerRadarView');
    const embed = document.getElementById('trackerGoogleEmbedView');
    const radarBtn = document.getElementById('trackerRadarBtn');
    const embedBtn = document.getElementById('trackerEmbedBtn');

    if (mode === 'embed') {
      if (radar) radar.classList.add('hidden');
      if (embed) embed.classList.remove('hidden');
      if (radarBtn) {
        radarBtn.className = 'px-3 py-1 rounded-lg font-serif text-[11px] font-semibold transition-all text-[#D6C2B0] hover:text-white cursor-pointer';
      }
      if (embedBtn) {
        embedBtn.className = 'px-3 py-1 rounded-lg font-serif text-[11px] font-semibold transition-all bg-[#B8945B] text-black shadow cursor-pointer';
      }
    } else {
      if (embed) embed.classList.add('hidden');
      if (radar) radar.classList.remove('hidden');
      if (embedBtn) {
        embedBtn.className = 'px-3 py-1 rounded-lg font-serif text-[11px] font-semibold transition-all text-[#D6C2B0] hover:text-white cursor-pointer';
      }
      if (radarBtn) {
        radarBtn.className = 'px-3 py-1 rounded-lg font-serif text-[11px] font-semibold transition-all bg-[#B8945B] text-black shadow cursor-pointer';
      }
    }
  }

  recenterOnCourier() {
    const courier = document.getElementById('liveCourierVehicle');
    if (courier) {
      courier.classList.add('scale-125');
      setTimeout(() => courier.classList.remove('scale-125'), 600);
    }
    if (window.showToast) {
      window.showToast('🎯 Radar Camera Centered on Courier Van #08', 'info');
    }
  }

  startTrackerSimulation(initialMinutes) {
    if (this.trackerInterval) {
      clearInterval(this.trackerInterval);
    }
    let totalSeconds = Math.max(120, Math.round((initialMinutes || 14) * 60));
    const countdownEl = document.getElementById('liveTrackerCountdown');
    const vehicleEl = document.getElementById('liveCourierVehicle');

    const waypoints = [
      { x: 260, y: 340 },
      { x: 260, y: 250 },
      { x: 340, y: 210 },
      { x: 420, y: 210 },
      { x: 490, y: 210 },
      { x: 490, y: 150 },
      { x: 490, y: 100 },
      { x: 550, y: 100 },
      { x: 620, y: 100 },
      { x: 670, y: 120 },
      { x: 700, y: 135 }
    ];

    let currentWaypointIdx = 3;

    this.trackerInterval = setInterval(() => {
      totalSeconds = Math.max(0, totalSeconds - 1);
      const mins = Math.floor(totalSeconds / 60);
      const secs = totalSeconds % 60;
      if (countdownEl) {
        countdownEl.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
      }

      if (totalSeconds % 4 === 0 && vehicleEl) {
        currentWaypointIdx = (currentWaypointIdx + 1) % waypoints.length;
        const pt = waypoints[currentWaypointIdx];
        vehicleEl.style.left = `${pt.x}px`;
        vehicleEl.style.top = `${pt.y}px`;
      }
    }, 1000);
  }

  // ==========================================
  // PRIVÉ PROFILE & FRIENDS ATELIER HELPERS
  // ==========================================
  openEditProfileModal() {
    const data = loyaltyStore.getData();
    let { profile } = data;
    if (profile && !profile.birthday) {
      const remembered = loyaltyStore.getRememberedBirthday(profile.id, profile.phone, profile.email);
      if (remembered) {
        profile.birthday = remembered;
        loyaltyStore.updateProfile({ birthday: remembered });
      }
    }

    let modal = document.getElementById('editProfileModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'editProfileModal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#1F0D08] to-[#180A06] border border-[#B8945B]/40 shadow-2xl p-6 sm:p-8 space-y-6 text-[#FFFDF9] max-h-[90vh] overflow-y-auto">
        <!-- Close Button -->
        <button onclick="window.ladesioApp.closeEditProfileModal()" 
                class="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/40 border border-[#B8945B]/30 hover:border-[#B8945B] flex items-center justify-center text-stone-300 hover:text-white transition-colors">
          ✕
        </button>

        <!-- Header -->
        <div class="border-b border-[#B8945B]/20 pb-4">
          <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold">Privé Member Settings</span>
          <h3 class="font-display text-2xl text-white font-bold mt-1">Edit Profile & Avatar</h3>
          <p class="text-xs text-[#D6C2B0] mt-0.5">Customize your patisserie identity, profile picture, and bio visible across La Desio.</p>
        </div>

        <form id="editProfileForm" onsubmit="event.preventDefault(); window.ladesioApp.saveProfileForm();" class="space-y-5">
          <!-- Avatar Preview & Upload -->
          <div class="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-2xl bg-[#241009] border border-[#B8945B]/30">
            <div class="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#B8945B] to-[#E6CA85] p-1 shrink-0 shadow-xl overflow-hidden">
              <img id="profileModalAvatarPreview" 
                   src="${profile.avatar || 'Assets/Profile/roody.jpg'}" 
                   alt="Avatar Preview" 
                   class="w-full h-full object-cover rounded-full" />
              <input type="hidden" id="editProfileAvatarValue" value="${profile.avatar || ''}" />
            </div>

            <div class="flex-1 text-center sm:text-left space-y-2">
              <label class="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-gold-luxury text-xs font-serif font-semibold shadow-md">
                <span>📁</span> Upload Photo from Computer
                <input type="file" id="profileAvatarFileInput" accept="image/*" class="hidden" onchange="window.ladesioApp.handleAvatarFileUpload(event)" />
              </label>
              <p class="text-[10px] text-stone-400">Supports JPG, PNG, GIF, WebP</p>
            </div>
          </div>

          <!-- Preset Luxury Avatars -->
          <div class="space-y-2">
            <label class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] block">Or choose a Privé Avatar preset:</label>
            <div class="flex items-center gap-3 overflow-x-auto pb-1">
              ${[
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
              ].map(url => `
                <button type="button" onclick="window.ladesioApp.setModalAvatarPreset('${url}')"
                        class="w-11 h-11 rounded-full p-0.5 border-2 border-transparent hover:border-[#E6CA85] focus:border-[#E6CA85] transition-all shrink-0 overflow-hidden">
                  <img src="${url}" class="w-full h-full object-cover rounded-full" />
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Name & City -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] block">Your Name</label>
              <input type="text" id="editProfileName" value="${profile.name || ''}" required
                     class="w-full px-3.5 py-2.5 rounded-xl bg-[#180A06] border border-[#B8945B]/30 focus:border-[#B8945B] text-white text-xs outline-none" />
            </div>
            <div class="space-y-1.5">
              <label class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] block">City</label>
              <input type="text" id="editProfileCity" value="${profile.city || 'Chennai'}" required
                     class="w-full px-3.5 py-2.5 rounded-xl bg-[#180A06] border border-[#B8945B]/30 focus:border-[#B8945B] text-white text-xs outline-none" />
            </div>
          </div>

          <!-- Date of Birth -->
          <div class="p-3.5 rounded-2xl bg-[#180A06] border border-[#B8945B]/30 space-y-2">
            <div class="flex items-center justify-between">
              <label class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] font-bold flex items-center gap-1.5">
                <span>🎂 Date of Birth (Annual 30% Privilege)</span>
              </label>
              ${profile.birthday && loyaltyStore.isUserBirthdayToday() ? `
                <span class="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40 animate-pulse">
                  🎉 Birthday Today! 30% OFF
                </span>
              ` : `
                <span class="text-[10px] font-mono font-bold text-[#E6CA85] bg-[#B8945B]/20 px-2 py-0.5 rounded-full border border-[#B8945B]/40">
                  30% OFF on Birthday
                </span>
              `}
            </div>

            <input type="date" id="editProfileBirthday" value="${profile.birthday || ''}" max="${new Date().toISOString().split('T')[0]}"
                   class="w-full px-3.5 py-2.5 rounded-xl bg-[#140603] border border-[#B8945B]/50 focus:border-[#E6CA85] text-white text-xs outline-none font-mono" />
            <p class="text-[10.5px] text-[#D6C2B0] leading-relaxed">
              Set your date of birth to receive an exclusive <strong>30% OFF discount</strong> on your birthday every year!
            </p>
          </div>

          <!-- Mobile Number & Email ID (Below DOB) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Mobile Number -->
            <div class="p-3.5 rounded-2xl bg-[#180A06] border border-[#B8945B]/30 space-y-1.5">
              <div class="flex items-center justify-between">
                <label class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] font-bold flex items-center gap-1.5">
                  <span>📱 Mobile Number</span>
                </label>
                ${profile.phone ? `
                  <span class="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">Verified</span>
                ` : `
                  <span class="text-[9px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-500/30">Optional</span>
                `}
              </div>
              <div class="relative flex items-center rounded-xl bg-[#140603] border border-[#B8945B]/50 focus-within:border-[#E6CA85] overflow-hidden">
                <span class="px-2.5 py-2 text-xs font-mono text-[#E6CA85] border-r border-[#B8945B]/25 bg-black/40">🇮🇳 +91</span>
                <input type="tel" id="editProfilePhone" maxlength="10"
                       value="${profile.phone ? profile.phone.replace(/\D/g, '').slice(-10) : ''}"
                       placeholder="e.g. 9345396700"
                       class="w-full px-3 py-2 bg-transparent text-white text-xs font-mono outline-none placeholder-stone-600" />
              </div>
              <p class="text-[10px] text-[#D6C2B0]">
                Used for SMS consignment tracking and mobile login.
              </p>
            </div>

            <!-- Email Address / ID -->
            <div class="p-3.5 rounded-2xl bg-[#180A06] border border-[#B8945B]/30 space-y-1.5">
              <div class="flex items-center justify-between">
                <label class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] font-bold flex items-center gap-1.5">
                  <span>✉️ Email Address</span>
                </label>
                ${profile.email ? `
                  <span class="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">Linked</span>
                ` : `
                  <span class="text-[9px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-500/30">Optional</span>
                `}
              </div>
              <div class="relative flex items-center rounded-xl bg-[#140603] border border-[#B8945B]/50 focus-within:border-[#E6CA85] overflow-hidden">
                <span class="pl-3 pr-1 text-stone-400 text-xs">✉️</span>
                <input type="email" id="editProfileEmail"
                       value="${profile.email || ''}"
                       placeholder="e.g. connoisseur@gmail.com"
                       class="w-full px-2.5 py-2 bg-transparent text-white text-xs font-sans outline-none placeholder-stone-600" />
              </div>
              <p class="text-[10px] text-[#D6C2B0]">
                Used for digital invoices, invites, and Gmail OTP.
              </p>
            </div>
          </div>

          <!-- Bio -->
          <div class="space-y-1.5">
            <label class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] block">Patisserie Bio & Flavor Passions</label>
            <textarea id="editProfileBio" rows="3" placeholder="Tell fellow foodies about your favorite notes (e.g. Bronte pistachio, high protein whey, dark truffles)..."
                      class="w-full px-3.5 py-2.5 rounded-xl bg-[#180A06] border border-[#B8945B]/30 focus:border-[#B8945B] text-white text-xs outline-none resize-none leading-relaxed">${profile.bio || ''}</textarea>
          </div>

          <!-- Submit Buttons -->
          <div class="flex items-center justify-end gap-3 pt-4 border-t border-[#B8945B]/20">
            <button type="button" onclick="window.ladesioApp.closeEditProfileModal()"
                    class="px-4 py-2.5 rounded-xl border border-stone-700 hover:border-stone-500 text-stone-300 text-xs font-serif transition-colors">
              Cancel
            </button>
            <button type="submit"
                    class="px-6 py-2.5 rounded-xl btn-gold-luxury text-xs font-serif font-semibold tracking-wider shadow-lg">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  closeEditProfileModal() {
    const modal = document.getElementById('editProfileModal');
    if (modal) modal.classList.add('hidden');
  }

  handleAvatarFileUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      if (window.showToast) window.showToast('Avatar image must be under 5MB.', 'warning');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      const preview = document.getElementById('editProfileAvatarPreview');
      const hidden = document.getElementById('editProfileAvatarValue');
      if (preview) preview.src = dataUrl;
      if (hidden) hidden.value = dataUrl;
    };
    reader.readAsDataURL(file);
  }

  selectPresetAvatar(url) {
    const preview = document.getElementById('editProfileAvatarPreview');
    const hidden = document.getElementById('editProfileAvatarValue');
    if (preview) preview.src = url;
    if (hidden) hidden.value = url;
  }

  setModalAvatarPreset(url) {
    this.selectPresetAvatar(url);
  }

  saveProfileForm() {
    const nameInput = document.getElementById('editProfileName');
    const cityInput = document.getElementById('editProfileCity');
    const bioInput = document.getElementById('editProfileBio');
    const avatarInput = document.getElementById('editProfileAvatarValue');
    const bdayInput = document.getElementById('editProfileBirthday');
    const emailInput = document.getElementById('editProfileEmail');
    const phoneInput = document.getElementById('editProfilePhone');

    const updated = {
      name: nameInput ? nameInput.value.trim() : 'Guest',
      city: cityInput ? cityInput.value.trim() : 'Chennai',
      bio: bioInput ? bioInput.value.trim() : '',
      avatar: avatarInput ? avatarInput.value : ''
    };

    if (emailInput) {
      const emailVal = emailInput.value.trim();
      if (emailVal) {
        if (!emailVal.includes('@') || !emailVal.includes('.')) {
          if (window.showToast) window.showToast('Please enter a valid email address.', 'warning');
          return;
        }
        updated.email = emailVal.toLowerCase();
      }
    }

    if (phoneInput) {
      const phoneVal = phoneInput.value.trim().replace(/\D/g, '');
      if (phoneVal) {
        if (phoneVal.length !== 10) {
          if (window.showToast) window.showToast('Please enter a valid 10-digit mobile number.', 'warning');
          return;
        }
        updated.phone = phoneVal;
      }
    }

    if (bdayInput && bdayInput.value) {
      updated.birthday = bdayInput.value;
      const curUser = loyaltyStore.getActiveUser() || loyaltyStore.getData().profile;
      if (loyaltyStore && typeof loyaltyStore.resetBirthdayWishedState === 'function') {
        loyaltyStore.resetBirthdayWishedState(curUser);
      }
      loyaltyStore.storeLockedBirthday(bdayInput.value, curUser?.id, updated.phone || curUser?.phone, updated.email || curUser?.email);
    }

    loyaltyStore.updateProfile(updated);
    this.closeEditProfileModal();
    this.renderAccountView();
    if (window.showToast) {
      window.showToast('Profile updated successfully!', 'success');
    }
    this.checkBirthdayGreeting();
    if (typeof cartStore !== 'undefined' && cartStore.notify) {
      cartStore.notify();
    }
    if (this.renderNavigationBadges) {
      this.renderNavigationBadges();
    }
  }

  // ==========================================
  // PRIVÉ BIRTHDAY PRIVILEGE & CELEBRATION MODALS
  // ==========================================
  openBirthdayPromptModal() {
    const user = loyaltyStore.getActiveUser();
    if (!user) {
      this.navigateTo('login');
      return;
    }

    let modal = document.getElementById('birthdayPromptModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'birthdayPromptModal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300';
      document.body.appendChild(modal);
    }

    const isAlreadySet = !!user.birthday;

    modal.innerHTML = `
      <div class="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#241009] to-[#180A06] border border-[#B8945B]/50 shadow-2xl p-6 sm:p-8 text-[#FFFDF9] space-y-5">
        <!-- Close Button -->
        <button onclick="window.ladesioApp.closeBirthdayPromptModal()" 
                class="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/40 border border-[#B8945B]/30 hover:border-[#B8945B] flex items-center justify-center text-stone-300 hover:text-white transition-colors cursor-pointer">
          ✕
        </button>

        <div class="text-center space-y-2">
          <div class="w-16 h-16 rounded-full bg-[#1A0905] border-2 border-[#B8945B] mx-auto flex items-center justify-center text-3xl shadow-lg">
            🎂
          </div>
          <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold block">
            Privé Privilege Program
          </span>
          <h3 class="font-display text-2xl text-white font-bold">
            ${isAlreadySet ? 'Your Registered Birthday' : 'Register Your Birthday'}
          </h3>
          <p class="text-xs text-[#D6C2B0] leading-relaxed">
            ${isAlreadySet 
              ? 'Your date of birth is permanently recorded. When you visit on your special day, enjoy 30% OFF any order!' 
              : 'Record your special day to receive an exclusive <strong>30% OFF discount</strong> on your birthday every year!'}
          </p>
        </div>

        <form onsubmit="event.preventDefault(); window.ladesioApp.saveQuickBirthday();" class="space-y-4">
          <div class="space-y-1.5 text-left">
            <label class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] font-bold block">
              ${isAlreadySet ? 'Registered Date of Birth:' : 'Select Your Date of Birth:'}
            </label>
            <input type="date" id="quickBirthdayInput" required
                   value="${user.birthday || ''}"
                   max="${new Date().toISOString().split('T')[0]}"
                   class="w-full px-3.5 py-3 rounded-xl bg-[#140603] border border-[#B8945B]/60 focus:border-[#E6CA85] text-white text-sm outline-none font-mono" />
            <div class="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-[10.5px] text-amber-200/90 leading-relaxed">
              🎂 Enjoy an exclusive <strong>30% OFF discount</strong> across our patisserie menu on your special day!
            </div>
          </div>

          <div class="flex items-center justify-end gap-3 pt-2">
            <button type="button" onclick="window.ladesioApp.closeBirthdayPromptModal()"
                    class="px-4 py-2.5 rounded-xl border border-stone-700 text-stone-300 text-xs font-serif">
              Close
            </button>
            <button type="submit"
                    class="px-6 py-2.5 rounded-xl btn-gold-luxury text-xs font-serif font-bold tracking-wider shadow-lg cursor-pointer">
              ${isAlreadySet ? 'Update Birthday ✨' : 'Save Birthday ✨'}
            </button>
          </div>
        </form>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  closeBirthdayPromptModal() {
    const modal = document.getElementById('birthdayPromptModal');
    if (modal) modal.classList.add('hidden');
  }

  saveQuickBirthday() {
    const input = document.getElementById('quickBirthdayInput');
    if (!input || !input.value) {
      if (window.showToast) window.showToast('Please select your date of birth.', 'warning');
      return;
    }
    const res = loyaltyStore.setBirthday(input.value);
    if (res.success) {
      if (window.showToast) window.showToast(res.message, 'success');
      this.closeBirthdayPromptModal();
      this.renderAccountView();
      this.checkBirthdayGreeting();
      if (typeof cartStore !== 'undefined' && cartStore.notify) {
        cartStore.notify();
      }
      if (this.renderNavigationBadges) {
        this.renderNavigationBadges();
      }
    } else {
      if (window.showToast) window.showToast(res.message, 'warning');
    }
  }

  checkBirthdayGreeting() {
    const user = loyaltyStore && typeof loyaltyStore.getActiveUser === 'function' ? loyaltyStore.getActiveUser() : null;
    const isBday = user ? loyaltyStore.isUserBirthdayToday() : false;
    const isAuth = loyaltyStore && typeof loyaltyStore.isUserAuthenticated === 'function' ? loyaltyStore.isUserAuthenticated() : false;

    // Must be patron's birthday AND patron must be authenticated
    if (!isBday || !user || !isAuth) {
      const banner = document.getElementById('atelierBirthdayBanner');
      if (banner) banner.remove();
      this.closeBirthdayCelebrationModal();
      return;
    }

    // Check if user has ALREADY been wished this year
    // "i dont want that wish wish me once even i login again thats enough"
    const alreadyWished = loyaltyStore && typeof loyaltyStore.hasUserBeenWishedThisYear === 'function'
      ? loyaltyStore.hasUserBeenWishedThisYear(user)
      : false;

    if (alreadyWished) {
      // User was already wished: DO NOT wish again, remove banner & modal
      const banner = document.getElementById('atelierBirthdayBanner');
      if (banner) banner.remove();
      this.closeBirthdayCelebrationModal();
      return;
    }

    // ONLY WISH ONCE: Permanently record wish now so subsequent logins or reloads never wish again
    if (loyaltyStore && typeof loyaltyStore.markUserBirthdayWished === 'function') {
      loyaltyStore.markUserBirthdayWished(user);
    }

    const discountAvail = loyaltyStore.isBirthdayDiscountAvailable();

    // Show top celebratory banner for this single initial birthday greeting session
    let banner = document.getElementById('atelierBirthdayBanner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'atelierBirthdayBanner';
      banner.className = 'w-full bg-gradient-to-r from-[#B8945B] via-[#F5D796] to-[#B8945B] text-[#160703] py-2 px-4 text-center text-xs font-serif font-bold flex items-center justify-between shadow-lg z-30 relative';
      const header = document.querySelector('header');
      if (header && header.parentNode) {
        header.parentNode.insertBefore(banner, header);
      } else {
        document.body.prepend(banner);
      }
    }

    banner.innerHTML = `
      <div class="flex-1 flex flex-wrap items-center justify-center gap-2">
        <span>🎂🎉</span>
        <span>Happy Birthday, ${user.name}! Wishing you a wonderful celebration!</span>
        ${discountAvail 
          ? `<span class="bg-[#160703] text-[#E6CA85] px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold">🎁 30% Birthday Gift on 1 Treat</span>
             <a href="#menu" class="underline font-bold text-black hover:text-[#3A1F17] text-xs ml-1 font-serif">Pick Your Birthday Treat →</a>`
          : `<span class="bg-[#160703]/80 text-[#E6CA85] px-2.5 py-0.5 rounded-full text-[10px] font-bold">✨ 30% Birthday Treat Enjoyed</span>`
        }
      </div>
      <button type="button" onclick="window.ladesioApp.dismissBirthdayBanner()" 
              class="ml-2 text-stone-900 hover:text-black hover:scale-110 p-1 text-sm font-bold transition-all cursor-pointer shrink-0"
              title="Dismiss greeting banner">
        ✕
      </button>
    `;

    // Show celebratory modal ONCE
    setTimeout(() => {
      this.showBirthdayCelebrationModal(user, discountAvail);
    }, 800);
  }

  dismissBirthdayBanner() {
    const banner = document.getElementById('atelierBirthdayBanner');
    if (banner) banner.remove();
  }

  showBirthdayCelebrationModal(user, discountAvail = true) {
    if (!user) return;
    if (loyaltyStore && typeof loyaltyStore.markUserBirthdayWished === 'function') {
      loyaltyStore.markUserBirthdayWished(user);
    }

    let modal = document.getElementById('birthdayCelebrationModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'birthdayCelebrationModal';
      modal.className = 'fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300';
      document.body.appendChild(modal);
    } else {
      modal.className = 'fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300';
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-3xl bg-gradient-to-b from-[#2B0E07] via-[#1C0904] to-[#100402] border-2 border-[#E6CA85]/80 shadow-[0_0_80px_rgba(230,202,133,0.45),inset_0_1px_0_rgba(255,245,225,0.4)] p-5 sm:p-7 text-[#FFFDF9] max-h-[92vh] overflow-y-auto">
        
        <!-- Ornate Gold Corner Ornaments -->
        <div class="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#E6CA85]/70 pointer-events-none"></div>
        <div class="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#E6CA85]/70 pointer-events-none"></div>
        <div class="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#E6CA85]/70 pointer-events-none"></div>
        <div class="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#E6CA85]/70 pointer-events-none"></div>

        <!-- Close Button -->
        <button onclick="window.ladesioApp.closeBirthdayCelebrationModal()" 
                class="absolute top-3.5 right-3.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-[#B8945B]/60 hover:border-[#E6CA85] flex items-center justify-center text-stone-300 hover:text-white transition-all cursor-pointer z-20 hover:scale-105 shadow-xl"
                title="Close greeting">
          ✕
        </button>

        <!-- Ambient Golden Candle Glow -->
        <div class="absolute top-0 left-1/3 w-80 h-32 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Horizontal 2-Column Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-center pt-2 sm:pt-0">
          
          <!-- Left Column: Heartfelt Birthday Greeting & Note -->
          <div class="text-center md:text-left space-y-2.5 sm:space-y-3">
            <div class="flex flex-col sm:flex-row items-center md:items-start gap-3">
              <!-- Festive Cake Emblem with Celebration Ribbon -->
              <div class="relative shrink-0">
                <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#FFE099] via-[#C9A46B] to-[#7D531E] p-[2px] shadow-[0_0_25px_rgba(230,202,133,0.55)] transform hover:scale-105 transition-transform">
                  <div class="w-full h-full rounded-[14px] bg-[#1A0703] flex items-center justify-center text-2xl sm:text-3xl">
                    🎂
                  </div>
                </div>
                <span class="absolute -bottom-1 -right-1 px-2 py-0.2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black text-[9px] font-extrabold uppercase tracking-wider shadow">
                  🎉 Day!
                </span>
              </div>

              <div class="space-y-0.5 text-center sm:text-left">
                <span class="font-script text-2xl sm:text-3xl text-[#E6CA85] tracking-wide block leading-tight">
                  Happy Birthday!
                </span>
                <h2 class="font-display text-base sm:text-lg lg:text-xl text-white font-black tracking-wide leading-snug uppercase">
                  HAPPY BIRTHDAY, ${(user.name || 'VALUED FRIEND').toUpperCase()}! 🥳
                </h2>
              </div>
            </div>

            <p class="text-xs sm:text-sm text-[#F5E6D3] font-serif leading-relaxed">
              Wishing you a truly magical day filled with immense joy, laughter, and unforgettable moments with those you cherish most!
            </p>

            <!-- Personal Signature Note from the Atelier -->
            <div class="pt-2 border-t border-[#B8945B]/25 text-[11px] font-serif text-[#C4AC97] italic">
              "Here’s to another magnificent year of happiness, sweet memories, and big dreams!"
              <div class="text-[#E6CA85] font-script text-base not-italic mt-0.5 font-normal">
                — With all our love, The LA DESIO Atelier Family 💛
              </div>
            </div>
          </div>

          <!-- Right Column: Birthday Gift Box & Celebratory Action -->
          <div class="relative rounded-2xl bg-gradient-to-b from-[#220B05] via-[#2A0E07] to-[#1A0603] border border-[#E6CA85]/60 p-4 sm:p-5 shadow-2xl text-center space-y-3">
            <!-- Decorative Ribbon Badge -->
            <div class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-400/10 border border-amber-400/50 text-[10px] font-serif uppercase tracking-widest text-[#F5D796] font-bold">
              🎁 A Special Birthday Gift For You
            </div>

            <!-- Gift Headline -->
            <div class="space-y-0.5">
              <div class="font-display text-4xl sm:text-5xl font-black text-gold-gradient tracking-tight drop-shadow-md leading-none">
                30% OFF
              </div>
              <p class="text-xs sm:text-sm font-serif text-[#E0CEBE] leading-snug pt-1">
                To sweeten your special day, we’re treating you to <span class="text-amber-300 font-bold">30% off your entire celebration feast</span> today!
              </p>
            </div>

            <!-- Glamorous Shimmer Action Button -->
            <div class="pt-1">
              <button onclick="window.ladesioApp.closeBirthdayCelebrationModal(); window.ladesioApp.navigateTo('menu');"
                      class="relative w-full px-6 py-3 rounded-2xl bg-gradient-to-r from-[#DFBA73] via-[#F3E3B5] to-[#C9A46B] text-[#160703] font-serif text-xs sm:text-sm font-black tracking-wider shadow-[0_4px_25px_rgba(230,202,133,0.55)] hover:shadow-[0_6px_35px_rgba(230,202,133,0.8)] flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all group overflow-hidden">
                <!-- Light Sweep Shimmer Animation -->
                <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <span class="text-base sm:text-lg">🕯️</span>
                <span>Make a Wish & Choose Your Treats →</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.style.display = 'flex';

    // Audio celebration: Play joyful claps and cheering "Hurray!" sound
    this.playClapsHurraySound();

    if (window.ladesioSoundscape && typeof window.ladesioSoundscape.triggerCelebrationEffects === 'function') {
      window.ladesioSoundscape.triggerCelebrationEffects();
    } else if (typeof window.triggerCelebrationEffects === 'function') {
      window.triggerCelebrationEffects();
    } else if (window.checkoutManager && typeof window.checkoutManager.triggerCelebrationConfetti === 'function') {
      window.checkoutManager.triggerCelebrationConfetti();
    }
  }

  playClapsHurraySound() {
    try {
      // 1. Audio element playback with cache-busted claps & hurray audio
      try {
        const audio = new Audio('Assets/claps_hurray.wav?v=5.3.0');
        audio.volume = 1.0;
        const p = audio.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
      } catch (e) {}

      // 2. Delegate to soundscape engine for synchronized Web Audio API clapping & cheering
      if (window.ladesioSoundscape && typeof window.ladesioSoundscape.playClapsHurraySound === 'function') {
        window.ladesioSoundscape.playClapsHurraySound();
      } else if (typeof window.playClapsHurraySound === 'function') {
        window.playClapsHurraySound();
      }
    } catch (e) {}
  }

  playLotteryWinSound() {
    this.playClapsHurraySound();
  }

  playBuzzerSound() {
    this.playClapsHurraySound();
  }

  closeBirthdayCelebrationModal() {
    const modal = document.getElementById('birthdayCelebrationModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.style.display = 'none';
    }
  }

  viewFriendProfile(friendId) {
    this.selectedFriendId = friendId;
    this.activeAccountTab = 'friends';
    this.renderAccountView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  backToFriendsList() {
    this.selectedFriendId = null;
    this.renderAccountView();
  }

  remixFriendCreation(friendId, creationId) {
    const data = loyaltyStore.getData();
    const friend = (data.friends || []).find(f => f.id === friendId);
    if (!friend) return;
    const creation = (friend.creations || []).find(c => c.id === creationId);
    if (!creation) return;

    window.location.hash = '#builder';
    setTimeout(() => {
      if (window.dessertStudio) {
        window.dessertStudio.loadConfig(creation.config || {});
        if (creation.name) {
          window.dessertStudio.state.name = `${creation.name} (Remix)`;
          const nameInput = document.getElementById('cakeNameInput');
          if (nameInput) nameInput.value = window.dessertStudio.state.name;
        }
        window.dessertStudio.render();
      }
    }, 150);

    if (window.showToast) {
      window.showToast(`Loaded ${friend.name}'s "${creation.name}" into Studio!`, 'success');
    }
  }

  orderFriendCreation(friendId, creationId) {
    const data = loyaltyStore.getData();
    const friend = (data.friends || []).find(f => f.id === friendId);
    if (!friend) return;
    const creation = (friend.creations || []).find(c => c.id === creationId);
    if (!creation) return;

    cartStore.addItem({
      id: 'friend_order_' + Date.now(),
      name: creation.name,
      subtitle: `Artisanal recipe by ${friend.name} (${friend.handle})`,
      isCustom: true,
      price: creation.price,
      image: creation.image,
      quantity: 1,
      options: creation.config || {}
    });

    this.renderNavigationBadges();
    this.openCartDrawer();
    if (window.showToast) {
      window.showToast(`Added ${friend.name}'s "${creation.name}" to your bag!`, 'success');
    }
  }

  openEditFriendProfileModal(friendId) {
    const friend = loyaltyStore.getFriend(friendId);
    if (!friend) return;

    let modal = document.getElementById('editFriendProfileModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'editFriendProfileModal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#1F0D08] to-[#180A06] border border-[#B8945B]/40 shadow-2xl p-6 sm:p-7 space-y-6 text-[#FFFDF9] max-h-[90vh] overflow-y-auto">
        <!-- Close Button -->
        <button onclick="window.ladesioApp.closeEditFriendProfileModal()" 
                class="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/40 border border-[#B8945B]/30 hover:border-[#B8945B] flex items-center justify-center text-stone-300 hover:text-white transition-colors">
          ✕
        </button>

        <!-- Header -->
        <div class="border-b border-[#B8945B]/20 pb-3.5">
          <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold">Atelier Circle Member</span>
          <h3 class="font-display text-2xl text-white font-bold mt-0.5">Edit ${friend.name}'s Profile</h3>
          <p class="text-xs text-[#D6C2B0] mt-0.5">Customize your friend's name, handle, location, bio, and profile picture.</p>
        </div>

        <form id="editFriendForm" onsubmit="event.preventDefault(); window.ladesioApp.saveFriendProfile('${friend.id}');" class="space-y-4">
          <!-- Active Preview & Upload Button -->
          <div class="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-2xl bg-[#241009] border border-[#B8945B]/30">
            <div class="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#B8945B] to-[#E6CA85] p-1 shrink-0 shadow-xl overflow-hidden">
              <img id="friendModalAvatarPreview" 
                   src="${friend.avatar}" 
                   alt="${friend.name} Preview" 
                   class="w-full h-full object-cover rounded-full" />
              <input type="hidden" id="editFriendAvatarValue" value="${friend.avatar}" />
            </div>

            <div class="flex-1 text-center sm:text-left space-y-2">
              <label class="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-gold-luxury text-xs font-serif font-semibold shadow-md">
                <span>📁</span> Choose Photo from Computer
                <input type="file" id="friendAvatarFileInput" accept="image/*" class="hidden" onchange="window.ladesioApp.handleFriendAvatarUpload(event, '${friend.id}')" />
              </label>
              <p class="text-[10px] text-stone-400">JPG, PNG, GIF, WebP (auto-saved)</p>
            </div>
          </div>

          <!-- Name & Handle Inputs -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div class="space-y-1">
              <label class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] block">Friend's Name</label>
              <input type="text" id="editFriendNameInput" value="${friend.name}" required
                     class="w-full px-3.5 py-2.5 rounded-xl bg-[#180A06] border border-[#B8945B]/30 focus:border-[#B8945B] text-white text-xs outline-none" />
            </div>
            <div class="space-y-1">
              <label class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] block">Social Handle</label>
              <input type="text" id="editFriendHandleInput" value="${friend.handle}"
                     class="w-full px-3.5 py-2.5 rounded-xl bg-[#180A06] border border-[#B8945B]/30 focus:border-[#B8945B] text-white text-xs outline-none" />
            </div>
          </div>

          <!-- Location -->
          <div class="space-y-1">
            <label class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] block">City / Location</label>
            <input type="text" id="editFriendLocationInput" value="${friend.location || ''}"
                   class="w-full px-3.5 py-2.5 rounded-xl bg-[#180A06] border border-[#B8945B]/30 focus:border-[#B8945B] text-white text-xs outline-none" />
          </div>

          <!-- Bio -->
          <div class="space-y-1">
            <label class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] block">Friend's Bio</label>
            <textarea id="editFriendBioInput" rows="2"
                      class="w-full px-3.5 py-2 rounded-xl bg-[#180A06] border border-[#B8945B]/30 focus:border-[#B8945B] text-white text-xs outline-none resize-none leading-relaxed">${friend.bio || ''}</textarea>
          </div>

          <!-- Or Enter Direct Image URL -->
          <div class="space-y-1">
            <label class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] block">Or paste image URL:</label>
            <input type="url" id="editFriendAvatarUrlInput" placeholder="https://images.unsplash.com/..."
                   class="w-full px-3.5 py-2 rounded-xl bg-[#180A06] border border-[#B8945B]/30 focus:border-[#B8945B] text-white text-xs outline-none"
                   oninput="window.ladesioApp.previewFriendAvatarUrl(this.value)" />
          </div>

          <!-- Preset Luxury Avatars -->
          <div class="space-y-1.5">
            <label class="text-[10px] font-serif uppercase tracking-wider text-[#E6CA85] block">Or pick a portrait preset:</label>
            <div class="flex items-center gap-2.5 overflow-x-auto pb-1">
              ${[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
              ].map(url => `
                <button type="button" onclick="window.ladesioApp.setModalFriendAvatarPreset('${url}')"
                        class="w-10 h-10 rounded-full p-0.5 border-2 border-transparent hover:border-[#E6CA85] focus:border-[#E6CA85] transition-all shrink-0 overflow-hidden">
                  <img src="${url}" class="w-full h-full object-cover rounded-full" />
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center justify-between pt-4 border-t border-[#B8945B]/20">
            <div class="flex items-center gap-3">
              <button type="button" onclick="window.ladesioApp.resetFriendProfile('${friend.id}')"
                      class="text-[11px] font-serif text-stone-400 hover:text-white underline">
                Reset Default
              </button>
              <button type="button" onclick="window.ladesioApp.closeEditFriendProfileModal(); window.ladesioApp.handleRemoveFriend('${friend.id}', '${friend.name}')"
                      class="text-[11px] font-serif text-rose-400 hover:text-rose-200 flex items-center gap-1 hover:underline cursor-pointer">
                <span>🗑️</span> Remove Friend
              </button>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" onclick="window.ladesioApp.closeEditFriendProfileModal()"
                      class="px-3.5 py-2 rounded-xl border border-stone-700 hover:border-stone-500 text-stone-300 text-xs font-serif transition-colors">
                Cancel
              </button>
              <button type="submit"
                      class="px-5 py-2 rounded-xl btn-gold-luxury text-xs font-serif font-semibold tracking-wider shadow-lg">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  closeEditFriendProfileModal() {
    const modal = document.getElementById('editFriendProfileModal');
    if (modal) modal.classList.add('hidden');
  }

  openEditFriendPhotoModal(friendId) {
    this.openEditFriendProfileModal(friendId);
  }

  closeEditFriendPhotoModal() {
    this.closeEditFriendProfileModal();
  }

  handleFriendAvatarUpload(event, friendId) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      if (window.showToast) window.showToast('Please select an image under 5MB.', 'info');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target.result;
      const preview = document.getElementById('friendModalAvatarPreview');
      if (preview) preview.src = base64;
      const hidden = document.getElementById('editFriendAvatarValue');
      if (hidden) hidden.value = base64;
      if (window.showToast) window.showToast('Photo ready! Click Save Changes to apply.', 'info');
    };
    reader.readAsDataURL(file);
  }

  setModalFriendAvatarPreset(url) {
    const preview = document.getElementById('friendModalAvatarPreview');
    if (preview) preview.src = url;
    const hidden = document.getElementById('editFriendAvatarValue');
    if (hidden) hidden.value = url;
  }

  previewFriendAvatarUrl(url) {
    if (!url || !url.trim().startsWith('http')) return;
    const preview = document.getElementById('friendModalAvatarPreview');
    if (preview) preview.src = url.trim();
    const hidden = document.getElementById('editFriendAvatarValue');
    if (hidden) hidden.value = url.trim();
  }

  saveFriendProfile(friendId) {
    const friend = loyaltyStore.getFriend(friendId);
    const nameInput = document.getElementById('editFriendNameInput');
    const handleInput = document.getElementById('editFriendHandleInput');
    const locationInput = document.getElementById('editFriendLocationInput');
    const bioInput = document.getElementById('editFriendBioInput');
    const hiddenAvatar = document.getElementById('editFriendAvatarValue');

    const newName = nameInput ? nameInput.value.trim() : (friend ? friend.name : '');
    if (!newName) {
      if (window.showToast) window.showToast('Please enter a friend name.', 'info');
      return;
    }

    const updatedData = {
      name: newName,
      handle: handleInput ? handleInput.value.trim() : (friend ? friend.handle : ''),
      location: locationInput ? locationInput.value.trim() : (friend ? friend.location : ''),
      bio: bioInput ? bioInput.value.trim() : (friend ? friend.bio : ''),
      avatar: hiddenAvatar ? hiddenAvatar.value.trim() : (friend ? friend.avatar : '')
    };

    const updated = loyaltyStore.updateFriend(friendId, updatedData);
    this.closeEditFriendProfileModal();
    this.renderAccountView();
    if (window.showToast) {
      window.showToast(`Updated profile for ${updated ? updated.name : 'friend'}!`, 'success');
    }
  }

  saveFriendPhoto(friendId) {
    this.saveFriendProfile(friendId);
  }

  resetFriendProfile(friendId) {
    const original = (DUMMY_FRIENDS || []).find(f => f.id === friendId);
    if (!original) return;
    loyaltyStore.updateFriend(friendId, {
      name: original.name,
      handle: original.handle,
      location: original.location,
      bio: original.bio,
      avatar: original.avatar
    });
    this.closeEditFriendProfileModal();
    this.renderAccountView();
    if (window.showToast) {
      window.showToast(`Restored default profile for ${original.name}!`, 'info');
    }
  }

  resetFriendPhoto(friendId) {
    this.resetFriendProfile(friendId);
  }

  handleProceedToCheckout() {
    this.closeCartDrawer();
    try {
      localStorage.removeItem('ladesio_last_placed_order');
    } catch (e) {}
    if (typeof window !== 'undefined' && window.checkoutManager) {
      window.checkoutManager.lastPlacedOrder = null;
      window.checkoutManager.currentStep = 1;
    }
    if (!loyaltyStore.isUserAuthenticated()) {
      this.pendingRedirectRoute = 'checkout';
      window.location.hash = '#login';
      if (window.showToast) {
        window.showToast('Please sign in or create an account to proceed with your order.', 'info');
      }
    } else {
      window.location.hash = '#checkout';
    }
  }




// ==========================================
  // LUXURY E-COMMERCE LOGIN & REGISTRATION PORTAL
  // ==========================================
  renderAccountLockScreen() {
    const container = document.getElementById('app-main-content');
    if (container) {
      this.renderLoginView(container, 'signin');
      return container.innerHTML;
    }
    return `<div id="loginPortalContainer"></div>`;
  }

  // 1-Tap Quick Demo Credentials Filler for instantaneous seamless testing
  fillDemoCredentials(emailId = 'loginEmailInput', passId = 'loginPasswordInput') {
    const emailElem = document.getElementById(emailId);
    const passElem = document.getElementById(passId);
    if (emailElem) emailElem.value = 'theroodyy@gmail.com';
    if (passElem) passElem.value = 'desio123';
    if (window.showToast) {
      window.showToast('Demo Connoisseur credentials loaded! Click Sign In to enter.', 'info');
    }
  }

  renderLoginView(container = document.getElementById('app-main-content'), initialTab = 'signin', authMethod = 'password') {
    if (!container) return;
    this.activeAuthTab = initialTab;
    this.activeAuthMethod = authMethod;
    if (!this.mobileAuthStep) this.mobileAuthStep = 'phone';

    container.innerHTML = `
      <div class="relative min-h-[92vh] py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center select-none">
        
        <!-- Ambient Warm Candlelight & Champagne Gold Glows -->
        <div class="absolute top-1/4 left-1/4 w-96 sm:w-[500px] h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute bottom-10 right-1/4 w-96 sm:w-[500px] h-96 bg-[#B8945B]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <!-- Top Navigation / Return to Boutique Header -->
        <div class="w-full mb-6 flex items-center justify-between pb-3 border-b border-[#B8945B]/25 relative z-10">
          <a href="#home" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#1A0905] hover:bg-[#B8945B] text-[#E6CA85] hover:text-[#180703] border border-[#B8945B]/40 hover:border-[#E6CA85] text-xs font-serif tracking-wider uppercase transition-all shadow-md group">
            <span class="transition-transform group-hover:-translate-x-1 font-bold">←</span>
            <span class="font-semibold">Return to Boutique</span>
          </a>

          <!-- Subtle Atelier Breadcrumb -->
          <div class="hidden sm:flex items-center gap-2 text-xs font-serif text-[#D6C2B0]">
            <span>La Desio</span>
            <span class="text-[#B8945B]">•</span>
            <span class="text-[#E6CA85]">Atelier Privé</span>
            <span class="text-[#B8945B]">•</span>
            <span class="text-stone-300" id="authBreadcrumbAction">${initialTab === 'signin' ? 'Client Sign In' : 'Privé Registration'}</span>
          </div>

          <!-- Brand Emblem & Logo -->
          <a href="#home" class="flex items-center gap-2.5 group">
            <img src="Assets/Logo/emblem_transparent.png" alt="LA DESIO" class="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105" />
            <img src="Assets/Logo/logo_gold_transparent.png" alt="LA DESIO" class="h-5 sm:h-6 w-auto object-contain" />
          </a>
        </div>

        <!-- HAUTE PATISSERIE SPLIT-SCREEN EDITORIAL GRID -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative z-10">
          
          <!-- LEFT COLUMN: ARTISANAL PATISSERIE EDITORIAL SHOWCASE -->
          <div class="hidden lg:flex lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#B8945B]/40 shadow-2xl flex-col justify-between p-8 xl:p-10 bg-cover bg-center h-full"
               style="background-image: linear-gradient(180deg, rgba(16, 7, 4, 0.78) 0%, rgba(26, 9, 5, 0.88) 55%, rgba(14, 5, 2, 0.98) 100%), url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85');">
            
            <!-- Ornate Corner Filigree -->
            <div class="atelier-corner-accent atelier-corner-tl"></div>
            <div class="atelier-corner-accent atelier-corner-br"></div>

            <!-- Top Crest & Philosophy -->
            <div class="space-y-6">
              <div class="flex items-center gap-3.5">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2D140C] to-[#140804] border border-[#B8945B]/60 flex items-center justify-center shadow-lg p-2">
                  <img src="Assets/Logo/emblem_transparent.png" alt="La Desio Emblem" class="w-full h-full object-contain" onerror="this.outerHTML='<span class=\'text-2xl\'>👑</span>'" />
                </div>
                <div>
                  <span class="text-[10px] uppercase font-serif tracking-[0.25em] text-[#E6CA85] font-bold block">HAUTE CONFISERIE ITALIENNE</span>
                  <h3 class="font-serif text-base tracking-wider uppercase text-white font-bold">La Desio Atelier Privé</h3>
                </div>
              </div>

              <div class="space-y-2.5">
                <span class="text-[10px] uppercase font-serif tracking-[0.3em] text-[#B8945B] font-bold block">Private Connoisseur Salon</span>
                <h2 class="font-display text-3xl xl:text-4xl font-bold text-[#FFFDF9] leading-tight">
                  Where Ephemeral Taste Becomes Timeless Art.
                </h2>
                <p class="text-xs text-[#D6C2B0] font-serif leading-relaxed pt-1">
                  Step into our private digital sanctuary. Handcrafted fresh each dawn by master Italian pâtissiers, featuring 100% eggless formulations, single-origin Venezuelan cacao, Tahitian vanilla beans, and white-glove chilled dispatch across our flagship ateliers.
                </p>
              </div>


              <!-- Artisanal Showcase Gallery (Vibrant Real Dessert Imagery) -->
              <div class="space-y-2.5 pt-1">
                <div class="flex items-center justify-between text-xs font-serif">
                  <span class="text-[10px] uppercase tracking-[0.2em] text-[#E6CA85] font-bold">TODAY'S ATELIER CREATIONS</span>
                  <span class="text-[10px] text-stone-400 font-serif italic">100% Eggless • Fresh Daily</span>
                </div>
                
                <div class="grid grid-cols-3 gap-3">
                  <!-- Dessert 1 -->
                  <div class="group/item relative rounded-2xl overflow-hidden border border-[#B8945B]/40 bg-black/40 hover:border-[#E6CA85] transition-all shadow-lg aspect-square">
                    <img src="Assets/video/raw/dessert2_pistachio.jpg" alt="Bronte Pistacchio" class="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-2.5">
                      <span class="text-[9px] font-serif text-[#E6CA85] uppercase tracking-wider font-bold truncate">Pistacchio</span>
                      <span class="text-[8px] text-stone-300 font-sans truncate">Sicilian Sublime</span>
                    </div>
                  </div>

                  <!-- Dessert 2 -->
                  <div class="group/item relative rounded-2xl overflow-hidden border border-[#B8945B]/40 bg-black/40 hover:border-[#E6CA85] transition-all shadow-lg aspect-square">
                    <img src="Assets/video/raw/dessert3_strawberry_tart.jpg" alt="Fraise Royale" class="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-2.5">
                      <span class="text-[9px] font-serif text-[#E6CA85] uppercase tracking-wider font-bold truncate">Fraise Tart</span>
                      <span class="text-[8px] text-stone-300 font-sans truncate">Wild Strawberry</span>
                    </div>
                  </div>

                  <!-- Dessert 3 -->
                  <div class="group/item relative rounded-2xl overflow-hidden border border-[#B8945B]/40 bg-black/40 hover:border-[#E6CA85] transition-all shadow-lg aspect-square">
                    <img src="Assets/video/raw/dessert5_tiramisu.jpg" alt="Tiramisù Classico" class="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-2.5">
                      <span class="text-[9px] font-serif text-[#E6CA85] uppercase tracking-wider font-bold truncate">Tiramisù</span>
                      <span class="text-[8px] text-stone-300 font-sans truncate">Venetian Reserve</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Chef's Philosophy & Signature Quote Plaque -->
              <div class="p-3.5 rounded-2xl bg-[#1A0905]/70 border border-[#B8945B]/35 shadow-lg space-y-1 relative overflow-hidden">
                <p class="text-xs italic text-[#E6CA85]/95 font-serif leading-relaxed">
                  “Pastry is not merely confectionery; it is an intimate expression of architecture, passion, and affection.”
                </p>
                <div class="flex items-center justify-between pt-0.5">
                  <span class="text-[10px] text-stone-400 font-serif block">— Chef Gianluca Rossi, Maître Pâtissier</span>
                  <span class="text-[9px] uppercase font-mono tracking-widest text-[#B8945B]/70">Florentine Heritage</span>
                </div>
              </div>
            </div>

            <!-- Atelier Dispatch & Encrypted Security Footnote -->
            <div class="pt-6 border-t border-[#B8945B]/25 flex items-center justify-between text-[11px] text-stone-400">
              <span class="flex items-center gap-1.5 text-stone-300">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Flagship Kitchens Active
              </span>
              <span class="font-serif italic text-stone-400">Chennai • Bengaluru • Kochi</span>
            </div>
          </div>

          <!-- RIGHT COLUMN: INTERACTIVE CLIENT PORTAL CARD -->
          <div class="lg:col-span-6 flex flex-col h-full">
            <div class="auth-glass-panel rounded-3xl p-6 sm:p-8 lg:p-9 text-[#FFFDF9] space-y-5 relative overflow-hidden border border-[#B8945B]/50 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(184,148,91,0.2)] h-full flex flex-col justify-between">
              
              <!-- Ornate Gold Corner Filigree -->
              <div class="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#E6CA85]/60 pointer-events-none"></div>
              <div class="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#E6CA85]/60 pointer-events-none"></div>
              <div class="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#E6CA85]/60 pointer-events-none"></div>
              <div class="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#E6CA85]/60 pointer-events-none"></div>

              <!-- Top Gold Shimmer Line -->
              <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E6CA85] to-transparent"></div>

              <!-- Card Header -->
              <div class="flex items-center justify-between pt-1">
                <div>
                  <span class="text-[10px] uppercase font-serif tracking-[0.25em] text-[#E6CA85] font-bold block">CLIENT PORTAL</span>
                  <h1 class="font-display text-2xl sm:text-3xl font-bold text-white mt-0.5 tracking-wide" id="authMainTitle">
                    ${initialTab === 'signin' ? 'Sign In to Your Sanctuary' : 'Join the Privé Circle'}
                  </h1>
                  <p class="text-xs text-[#D6C2B0] mt-1 font-serif" id="authSubTitle">
                    ${initialTab === 'signin' ? 'Enter your credentials to access your private salon, rewards & orders.' : 'Create your private member profile to enjoy bespoke creations & personalized tasting orders.'}
                  </p>
                </div>
                <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2D140C] via-[#1A0905] to-[#120502] border border-[#B8945B]/70 flex items-center justify-center shadow-lg p-2 shrink-0 ml-3">
                  <img src="Assets/Logo/emblem_transparent.png" alt="Emblem" class="w-full h-full object-contain" onerror="this.outerHTML='<span class=\'text-xl\'>👑</span>'" />
                </div>
              </div>

              <!-- Primary Segment Switcher (Sign In vs Create Account) -->
              <div class="grid grid-cols-2 p-1 rounded-2xl bg-[#140804] border border-[#B8945B]/30 text-xs font-serif font-semibold shadow-inner">
                <button type="button" onclick="window.ladesioApp.switchAuthTab('signin')" 
                        class="py-2.5 rounded-xl transition-all text-center ${initialTab === 'signin' ? 'bg-[#2A130B] text-[#E6CA85] shadow-md border border-[#B8945B]/40 font-bold' : 'text-stone-400 hover:text-white'}">
                  <span>Sign In</span>
                </button>
                <button type="button" onclick="window.ladesioApp.switchAuthTab('register')" 
                        class="py-2.5 rounded-xl transition-all text-center relative ${initialTab === 'register' ? 'bg-[#2A130B] text-[#E6CA85] shadow-md border border-[#B8945B]/40 font-bold' : 'text-stone-400 hover:text-white'}">
                  <span>Create Account</span>
                  <span class="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[9px] rounded-full bg-[#B8945B] text-[#120502] font-bold">+250 Pts</span>
                </button>
              </div>

              <!-- Dynamic Form Container (Password / Email OTP / Register) -->
              <div id="authDynamicFormArea">
                ${this.renderAuthFormContent(initialTab, authMethod)}
              </div>

              <!-- Luxury Trust Seal & Atelier Footnote -->
              <div class="pt-3 border-t border-[#B8945B]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-1">
                <span class="flex items-center gap-1.5 text-stone-300">
                  <span class="text-emerald-400">🔒</span> 256-Bit SSL Encrypted Client Portal
                </span>
                <span class="font-serif italic text-stone-400">Ateliers: Chennai • Bengaluru • Kochi</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    `;
  }

  // Generate the internal form HTML (Sign In vs Register and Email vs Mobile)
  renderAuthFormContent(tab = 'signin', method = 'email', isModal = false) {
    const emailCooldown = loyaltyStore.getCooldownRemaining('email', this.emailAuthEmail);
    const mobileCooldown = loyaltyStore.getCooldownRemaining('mobile', this.mobileAuthPhone);

    if (method === 'email' && this.emailAuthStep === 'otp' && emailCooldown > 0) {
      setTimeout(() => this.startOtpCooldownTimer('email', this.emailAuthEmail, isModal), 30);
    }
    if (method === 'mobile' && this.mobileAuthStep === 'otp' && mobileCooldown > 0) {
      setTimeout(() => this.startOtpCooldownTimer('mobile', this.mobileAuthPhone, isModal), 30);
    }

    if (tab === 'signin') {
      const activeMethod = method || this.activeAuthMethod || 'password';
      return `
        <!-- Auth Method Sub-Tabs (🔑 Password vs ✉️ Gmail OTP) -->
        <div class="flex items-center border-b border-[#B8945B]/30 pb-2.5 gap-6 text-xs font-serif">
          <button type="button" onclick="window.ladesioApp.switchAuthMethod('password', ${isModal})"
                  class="auth-tab-btn pb-1 whitespace-nowrap cursor-pointer transition-all ${activeMethod === 'password' ? 'active font-bold text-[#E6CA85] border-b-2 border-[#E6CA85]' : 'text-stone-400 hover:text-white'}">
            🔑 Password
          </button>
          <button type="button" onclick="window.ladesioApp.switchAuthMethod('email', ${isModal})"
                  class="auth-tab-btn pb-1 whitespace-nowrap cursor-pointer transition-all ${activeMethod === 'email' ? 'active font-bold text-[#E6CA85] border-b-2 border-[#E6CA85]' : 'text-stone-400 hover:text-white'}">
            ✉️ Gmail OTP
          </button>
        </div>

        <div class="space-y-4 pt-1">
          ${activeMethod === 'password' ? `
            <!-- EMAIL & PASSWORD FORM -->
            <form onsubmit="window.ladesioApp.handleEmailPasswordLogin(event, ${isModal})" class="space-y-4">
              
              <div class="space-y-1.5">
                <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Email Address or Connoisseur ID</label>
                <div class="relative flex items-center">
                  <span class="absolute left-3.5 text-stone-400 text-sm">✉️</span>
                  <input type="email" id="${isModal ? 'modalLoginEmailInput' : 'loginEmailInput'}" required
                         value=""
                         placeholder="e.g. connoisseur@ladesio.com"
                         class="w-full pl-10 pr-4 py-3 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
                </div>
              </div>

              <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Password</label>
                  <button type="button" onclick="window.ladesioApp.openForgotPasswordModal()"
                          class="text-[11px] font-serif text-[#E6CA85] hover:text-white underline cursor-pointer">
                    Forgot password?
                  </button>
                </div>
                <div class="relative flex items-center">
                  <span class="absolute left-3.5 text-stone-400 text-sm">🔒</span>
                  <input type="password" id="${isModal ? 'modalLoginPasswordInput' : 'loginPasswordInput'}" required
                         value=""
                         placeholder="••••••••"
                         class="w-full pl-10 pr-11 py-3 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
                  <button type="button" onclick="window.ladesioApp.togglePasswordVisibility('${isModal ? 'modalLoginPasswordInput' : 'loginPasswordInput'}', '${isModal ? 'modalLoginEyeIcon' : 'loginEyeIcon'}')"
                          class="absolute right-3.5 text-stone-400 hover:text-[#E6CA85] transition-colors p-1 cursor-pointer"
                          title="Show/Hide password">
                    <span id="${isModal ? 'modalLoginEyeIcon' : 'loginEyeIcon'}">👁️</span>
                  </button>
                </div>
              </div>

              <div class="flex items-center justify-between text-xs text-[#D6C2B0] pt-1">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" id="${isModal ? 'modalRememberMe' : 'rememberMe'}" checked 
                         class="w-4 h-4 rounded border-[#B8945B]/50 bg-[#120502] text-[#B8945B] focus:ring-0 focus:ring-offset-0 cursor-pointer" />
                  <span>Remember me on this device</span>
                </label>
              </div>

              <button type="submit" 
                      class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.99] cursor-pointer">
                <span>Sign In to Your Sanctuary</span> 🔑
              </button>

              <div class="pt-1 text-center">
                <button type="button" onclick="window.ladesioApp.switchAuthMethod('email', ${isModal})"
                        class="text-xs font-serif text-[#E6CA85] hover:underline cursor-pointer inline-flex items-center gap-1.5">
                  <span>Prefer instant verification code?</span>
                  <span class="font-bold underline">Sign in with Gmail OTP ✉️</span>
                </button>
              </div>
            </form>
          ` : `
            <!-- GMAIL & EMAIL OTP FLOW -->
            ${this.emailAuthStep === 'otp' ? `
              <form onsubmit="window.ladesioApp.handleVerifyEmailOtp(event, ${isModal})" class="space-y-4">
                <!-- Sleek Gmail Notification Banner -->
                <div class="p-3.5 rounded-2xl bg-[#1A0905] border border-[#B8945B]/50 shadow-xl space-y-1.5 text-left">
                  <div class="flex items-center justify-between text-[11px] text-[#E6CA85] font-bold">
                    <span class="flex items-center gap-1.5">
                      <span class="text-rose-400">✉️</span> GMAIL VERIFICATION SENT TO:
                    </span>
                    <span class="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/40">Dispatched</span>
                  </div>
                  <p class="text-xs text-white font-mono truncate">
                    ${this.emailAuthEmail || 'user@gmail.com'}
                  </p>
                  <p class="text-[11px] text-[#D6C2B0] pt-1 leading-relaxed">
                    Check your Gmail inbox. <span class="text-[#E6CA85]">If not visible in Primary, please check your <strong>Spam</strong> or <strong>Promotions</strong> folder.</span>
                  </p>
                </div>

                <div class="space-y-1.5">
                  <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Enter 6-Digit Gmail Verification Code (OTP)</label>
                  <input type="text" id="${isModal ? 'modalEmailAuthOtpInput' : 'emailAuthOtpInput'}" required maxlength="6"
                         value=""
                         placeholder="••••••"
                         autocomplete="one-time-code"
                         class="w-full px-4 py-3 rounded-xl border border-[#B8945B]/50 bg-[#120502] text-white text-base font-mono text-center tracking-[0.35em] outline-none focus:border-[#E6CA85]" />
                  <span class="text-[11px] text-stone-400">⏱️ Valid for 5 minutes</span>
                </div>

                <button type="submit" 
                        class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 cursor-pointer">
                  <span>Verify & Sign In</span> 👑
                </button>

                <div class="flex items-center justify-between text-xs text-[#D6C2B0] pt-1">
                  <button type="button" onclick="window.ladesioApp.resetEmailAuthStep(${isModal})" class="hover:text-white cursor-pointer">
                    ← Change Email
                  </button>
                  <button type="button" 
                          id="${isModal ? 'modalResendEmailOtpBtn' : 'resendEmailOtpBtn'}"
                          ${emailCooldown > 0 ? 'disabled' : ''}
                          onclick="window.ladesioApp.handleSendEmailOtp(null, '${this.emailAuthEmail}', ${isModal})" 
                          class="text-xs transition-all ${emailCooldown > 0 ? 'text-stone-500 cursor-not-allowed font-mono select-none' : 'text-[#E6CA85] font-bold hover:underline cursor-pointer'}">
                    ${emailCooldown > 0 ? `⏳ Resend in ${emailCooldown}s` : 'Resend Code to Gmail'}
                  </button>
                </div>
              </form>
            ` : `
              <form onsubmit="window.ladesioApp.handleSendEmailOtp(event, null, ${isModal})" class="space-y-4">
                <div class="space-y-1.5">
                  <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Enter Your Gmail / Email Address</label>
                  <div class="relative flex items-center">
                    <span class="absolute left-3.5 text-stone-400 text-sm">✉️</span>
                    <input type="email" id="${isModal ? 'modalEmailAuthInput' : 'emailAuthInput'}" required
                           value="${this.emailAuthEmail || ''}"
                           placeholder="e.g. yourname@gmail.com"
                           class="w-full pl-10 pr-4 py-3 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
                  </div>
                  <span class="text-[11px] text-stone-400">Works with any Gmail address. A 6-digit verification security code will be sent to your inbox.</span>
                </div>

                <button type="submit" 
                        class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.99] cursor-pointer">
                  <span>Send OTP to Gmail</span> ✉️
                </button>

                <div class="pt-1 text-center">
                  <button type="button" onclick="window.ladesioApp.switchAuthMethod('password', ${isModal})"
                          class="text-xs font-serif text-[#E6CA85] hover:underline cursor-pointer inline-flex items-center gap-1.5">
                    <span>Prefer account password?</span>
                    <span class="font-bold underline">Sign in with Password 🔑</span>
                  </button>
                </div>
              </form>
            `}
          `}
        </div>
      `;
    }

    // REGISTRATION FORM
    return `
      <form onsubmit="window.ladesioApp.handleEmailPasswordRegister(event, ${isModal})" class="space-y-3.5 pt-1">
        <div class="p-2.5 rounded-xl bg-gradient-to-r from-[#2A130B] to-[#1A0905] border border-[#B8945B]/40 text-[#E6CA85] text-xs flex items-center gap-2.5">
          <span class="text-base">🎁</span>
          <span><strong>Welcome Courtesy:</strong> 250 Privé Points will be automatically credited to your new profile.</span>
        </div>

        <div class="space-y-1">
          <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Full Name *</label>
          <input type="text" id="${isModal ? 'modalRegName' : 'regName'}" required placeholder="e.g. Arjun Sundaram"
                 class="w-full px-3.5 py-2.5 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="space-y-1">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Email Address *</label>
            <input type="email" id="${isModal ? 'modalRegEmail' : 'regEmail'}" required placeholder="arjun@ladesio.in"
                   class="w-full px-3.5 py-2.5 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
          </div>
          <div class="space-y-1">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Mobile Number *</label>
            <div class="flex items-center rounded-xl border border-[#B8945B]/35 bg-[#120502] overflow-hidden">
              <span class="px-2.5 py-2 text-xs font-mono text-[#E6CA85] border-r border-[#B8945B]/25 bg-black/40">🇮🇳 +91</span>
              <input type="tel" id="${isModal ? 'modalRegPhone' : 'regPhone'}" required maxlength="10" placeholder="98401 23456"
                     class="w-full px-2.5 py-2 bg-transparent text-white text-xs font-mono outline-none" />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="space-y-1">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Preferred Atelier City *</label>
            <select id="${isModal ? 'modalRegCity' : 'regCity'}"
                    class="w-full px-3 py-2.5 rounded-xl auth-input text-xs font-sans bg-[#120502] text-white">
              <option value="Chennai">Chennai Flagship (Alwarpet)</option>
              <option value="Bengaluru">Bengaluru Atelier (Indiranagar)</option>
              <option value="Kochi">Kochi Salon (Panampilly Nagar)</option>
              <option value="Trichy">Trichy Boutique</option>
              <option value="Mumbai">Mumbai Privé Lounge</option>
            </select>
          </div>
          <div class="space-y-1">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Create Secure Password *</label>
            <div class="relative flex items-center">
              <input type="password" id="${isModal ? 'modalRegPassword' : 'regPassword'}" required minlength="6"
                     placeholder="At least 6 characters"
                     oninput="window.ladesioApp.updatePasswordStrength(this.value, '${isModal ? 'modalStrengthBar' : 'strengthBar'}', '${isModal ? 'modalStrengthText' : 'strengthText'}')"
                     class="w-full px-3 py-2.5 pr-9 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
              <button type="button" onclick="window.ladesioApp.togglePasswordVisibility('${isModal ? 'modalRegPassword' : 'regPassword'}', '${isModal ? 'modalRegEye' : 'regEye'}')"
                      class="absolute right-2.5 text-stone-400 hover:text-white p-1">
                <span id="${isModal ? 'modalRegEye' : 'regEye'}">👁️</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Password Strength Meter -->
        <div class="space-y-1">
          <div class="flex items-center justify-between text-[10px] text-stone-400">
            <span>Password Security:</span>
            <span id="${isModal ? 'modalStrengthText' : 'strengthText'}" class="text-[#B8945B] font-semibold">Enter password</span>
          </div>
          <div class="h-1.5 w-full bg-[#120502] rounded-full overflow-hidden border border-[#B8945B]/20">
            <div id="${isModal ? 'modalStrengthBar' : 'strengthBar'}" class="h-full w-0 bg-stone-500 transition-all duration-300"></div>
          </div>
        </div>

        <div class="pt-1">
          <label class="flex items-start gap-2 text-[11px] text-stone-300 cursor-pointer">
            <input type="checkbox" required checked class="mt-0.5 rounded border-[#B8945B]/50 bg-[#120502] text-[#B8945B] focus:ring-0 cursor-pointer" />
            <span>I accept the La Desio Privé Charter, complimentary concierge privileges, and confidential data privacy.</span>
          </label>
        </div>

        <button type="submit" 
                class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 mt-2 transition-transform active:scale-[0.99]">
          <span>Create Privé Account & Claim 250 Points</span> ✨
        </button>
      </form>
    `;
  }

  // Switch between Sign In and Register tabs
  switchAuthTab(tab, isModal = false) {
    this.activeAuthTab = tab;
    if (isModal) {
      const area = document.getElementById('modalAuthDynamicArea');
      if (area) area.innerHTML = this.renderAuthFormContent(tab, this.activeAuthMethod || 'password', true);
      const title = document.getElementById('modalAuthTitle');
      if (title) title.textContent = tab === 'signin' ? 'Sign In to Your Sanctuary' : 'Join the Privé Circle';
      return;
    }

    const area = document.getElementById('authDynamicFormArea');
    if (area) area.innerHTML = this.renderAuthFormContent(tab, this.activeAuthMethod || 'password', false);

    const title = document.getElementById('authMainTitle');
    const subTitle = document.getElementById('authSubTitle');
    const breadcrumbAction = document.getElementById('authBreadcrumbAction');

    if (title) title.textContent = tab === 'signin' ? 'Sign In to Your Sanctuary' : 'Join the Privé Circle';
    if (subTitle) {
      subTitle.textContent = tab === 'signin' 
        ? 'Enter your credentials to access your private salon, rewards & orders.' 
        : 'Create your private member profile to enjoy bespoke creations & personalized tasting orders.';
    }
    if (breadcrumbAction) breadcrumbAction.textContent = tab === 'signin' ? 'Client Sign In' : 'Privé Registration';

    // Update segment buttons
    const container = document.getElementById('app-main-content');
    if (container) {
      const btns = container.querySelectorAll('.grid.grid-cols-2 button');
      if (btns && btns.length === 2) {
        if (tab === 'signin') {
          btns[0].className = 'py-2.5 rounded-xl transition-all text-center bg-[#2A130B] text-[#E6CA85] shadow-md border border-[#B8945B]/40 font-bold';
          btns[1].className = 'py-2.5 rounded-xl transition-all text-center relative text-stone-400 hover:text-white';
        } else {
          btns[0].className = 'py-2.5 rounded-xl transition-all text-center text-stone-400 hover:text-white';
          btns[1].className = 'py-2.5 rounded-xl transition-all text-center relative bg-[#2A130B] text-[#E6CA85] shadow-md border border-[#B8945B]/40 font-bold';
        }
      }
    }
  }

  // Switch between Email and Mobile auth sub-methods
  switchAuthMethod(method, isModal = false) {
    this.activeAuthMethod = method;
    this.mobileAuthStep = 'phone';
    this.emailAuthStep = 'email';
    if (isModal) {
      const area = document.getElementById('modalAuthDynamicArea');
      if (area) area.innerHTML = this.renderAuthFormContent('signin', method, true);
      return;
    }
    const area = document.getElementById('authDynamicFormArea');
    if (area) area.innerHTML = this.renderAuthFormContent('signin', method, false);
  }

  // Toggle Password Show/Hide
  togglePasswordVisibility(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      if (icon) icon.textContent = '🙈';
    } else {
      input.type = 'password';
      if (icon) icon.textContent = '👁️';
    }
  }

  // Live Password Strength Indicator
  updatePasswordStrength(val, barId = 'strengthBar', textId = 'strengthText') {
    const bar = document.getElementById(barId);
    const text = document.getElementById(textId);
    if (!bar || !text) return;

    if (!val) {
      bar.style.width = '0%';
      bar.className = 'h-full bg-stone-500 transition-all duration-300';
      text.textContent = 'Enter password';
      text.className = 'text-stone-400 font-semibold';
      return;
    }

    let score = 0;
    if (val.length >= 6) score += 1;
    if (val.length >= 9) score += 1;
    if (/[A-Z]/.test(val)) score += 1;
    if (/[0-9]/.test(val)) score += 1;
    if (/[^A-Za-z0-9]/.test(val)) score += 1;

    if (score <= 1) {
      bar.style.width = '25%';
      bar.className = 'h-full bg-rose-500 transition-all duration-300';
      text.textContent = 'Weak';
      text.className = 'text-rose-400 font-semibold';
    } else if (score <= 3) {
      bar.style.width = '60%';
      bar.className = 'h-full bg-amber-500 transition-all duration-300';
      text.textContent = 'Moderate';
      text.className = 'text-amber-400 font-semibold';
    } else {
      bar.style.width = '100%';
      bar.className = 'h-full bg-emerald-500 transition-all duration-300';
      text.textContent = 'Strong Privé Password';
      text.className = 'text-emerald-400 font-semibold';
    }
  }

  // Collapsible Connoisseur Persona Drawer
  toggleDemoDrawer() {
    const content = document.getElementById('demoDrawerContent');
    const chevron = document.getElementById('demoDrawerChevron');
    if (!content) return;
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      if (chevron) chevron.textContent = '▲';
    } else {
      content.classList.add('hidden');
      if (chevron) chevron.textContent = '▼';
    }
  }

  // Email + Password Sign In Handler
  handleEmailPasswordLogin(e, isModal = false) {
    if (e && e.preventDefault) e.preventDefault();
    const emailElem = document.getElementById(isModal ? 'modalLoginEmailInput' : 'loginEmailInput');
    const passElem = document.getElementById(isModal ? 'modalLoginPasswordInput' : 'loginPasswordInput');
    const email = emailElem ? emailElem.value.trim() : '';
    const password = passElem ? passElem.value : '';

    if (!email) {
      if (window.showToast) window.showToast('Please enter your email address.', 'warning');
      return;
    }

    const res = loyaltyStore.loginByEmail(email, password);
    if (res && res.success) {
      this.playObstacleChime();
      if (isModal) this.closeAuthModal();
      this.renderNavigationBadges();
      if (window.showToast) {
        window.showToast(res.message || 'Welcome to La Desio Privé!', 'success');
      }
      
      const redirect = sessionStorage.getItem('ladesio_auth_redirect');
      if (redirect === 'checkout') {
        sessionStorage.removeItem('ladesio_auth_redirect');
        this.navigateTo('checkout');
      } else {
        this.navigateTo('account');
      }
    } else {
      if (window.showToast) {
        window.showToast((res && res.message) || 'Unable to sign in. Please check credentials.', 'warning');
      }
    }
  }

  // Email + Password + Mobile Registration Handler
  handleEmailPasswordRegister(e, isModal = false) {
    if (e && e.preventDefault) e.preventDefault();
    const name = document.getElementById(isModal ? 'modalRegName' : 'regName')?.value;
    const email = document.getElementById(isModal ? 'modalRegEmail' : 'regEmail')?.value;
    const phone = document.getElementById(isModal ? 'modalRegPhone' : 'regPhone')?.value;
    const city = document.getElementById(isModal ? 'modalRegCity' : 'regCity')?.value;
    const password = document.getElementById(isModal ? 'modalRegPassword' : 'regPassword')?.value;

    const res = loyaltyStore.registerWithEmailAndPassword({
      name,
      email,
      phone,
      city,
      password
    });

    if (res.success) {
      this.playObstacleChime();
      if (isModal) this.closeAuthModal();
      this.renderNavigationBadges();
      if (window.showToast) {
        window.showToast(res.message, 'success');
      }
      window.location.hash = '#account';
      this.renderAccountView();
    } else {
      if (window.showToast) {
        window.showToast(res.message, 'warning');
      } else {
        alert(res.message);
      }
    }
  }

  // Social / One-Tap Auth Simulation
  handleSocialLogin(provider, isModal = false) {
    if (window.showToast) {
      window.showToast(`Connecting securely via ${provider}...`, 'info');
    }
    setTimeout(() => {
      // Default to Roody for social simulation
      const res = loyaltyStore.loginByPhone('9345396700');
      if (res.success) {
        this.playObstacleChime();
        if (isModal) this.closeAuthModal();
        this.renderNavigationBadges();
        if (window.showToast) {
          window.showToast(`Authenticated via ${provider}! Welcome back, ${res.user.name}.`, 'success');
        }
        window.location.hash = '#account';
        this.renderAccountView();
      }
    }, 600);
  }

  // 1-Click Connoisseur Preset Unlock
  demoQuickUnlock(phoneOrId) {
    const res = loyaltyStore.loginByPhone(phoneOrId);
    if (res.success) {
      this.playObstacleChime();
      this.closeAuthModal();
      this.renderNavigationBadges();
      if (window.showToast) {
        window.showToast(`👑 Connoisseur profile active: ${res.user.name} (${res.user.tier} Tier)`, 'success');
      }
      window.location.hash = '#account';
      this.renderAccountView();
    } else {
      if (window.showToast) window.showToast(res.message, 'warning');
    }
  }

  // ==========================================
  // FORGOT PASSWORD RECOVERY MODAL
  // ==========================================
  openForgotPasswordModal() {
    let modal = document.getElementById('forgotPasswordModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'forgotPasswordModal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-md auth-glass-panel rounded-3xl p-6 sm:p-8 space-y-5 text-[#FFFDF9] animate-float-slow">
        <button onclick="window.ladesioApp.closeForgotPasswordModal()"
                class="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/40 border border-[#B8945B]/30 hover:border-[#B8945B] flex items-center justify-center text-stone-300 hover:text-white transition-colors">
          ✕
        </button>

        <div class="text-center space-y-1.5">
          <div class="w-12 h-12 mx-auto rounded-full bg-[#1A0905] border border-[#B8945B]/50 flex items-center justify-center text-xl shadow-lg">
            🔑
          </div>
          <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold block">La Desio Privé Security</span>
          <h3 class="font-display text-2xl font-bold text-white">Reset Privé Password</h3>
          <p class="text-xs text-[#D6C2B0]">Enter your registered email address to receive a secure recovery key.</p>
        </div>

        <form onsubmit="window.ladesioApp.handleForgotPasswordSubmit(event)" class="space-y-4 pt-1">
          <div class="space-y-1.5">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Registered Email</label>
            <input type="email" id="forgotEmailInput" required value="theroodyy@gmail.com" placeholder="connoisseur@ladesio.com"
                   class="w-full px-3.5 py-3 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
          </div>

          <button type="submit" 
                  class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2">
            <span>Send Recovery Instructions</span> ✉️
          </button>
        </form>
      </div>
    `;
    modal.classList.remove('hidden');
  }

  closeForgotPasswordModal() {
    const modal = document.getElementById('forgotPasswordModal');
    if (modal) modal.classList.add('hidden');
  }

  handleForgotPasswordSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const email = document.getElementById('forgotEmailInput')?.value;
    const res = loyaltyStore.requestPasswordReset(email);
    this.closeForgotPasswordModal();
    if (window.showToast) {
      window.showToast(res.message, 'success');
    }
  }

  // ==========================================
  // SYNCHRONIZED LUXURY MODAL AUTHENTICATION
  // ==========================================
  openAuthModal(tab = 'signin') {
    let modal = document.getElementById('authModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'authModal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-lg auth-glass-panel rounded-3xl p-6 sm:p-8 space-y-5 text-[#FFFDF9] my-8 animate-float-slow">
        <!-- Close Button -->
        <button onclick="window.ladesioApp.closeAuthModal()"
                class="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/40 border border-[#B8945B]/30 hover:border-[#B8945B] flex items-center justify-center text-stone-300 hover:text-white transition-colors z-10">
          ✕
        </button>

        <!-- Header -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-[#140804] border border-[#B8945B]/50 flex items-center justify-center shadow-lg text-lg">
            👑
          </div>
          <div>
            <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold block">La Desio Privé Club</span>
            <h3 class="font-display text-xl font-bold text-white" id="modalAuthTitle">
              ${tab === 'signin' ? 'Sign In to La Desio' : 'Create Privé Membership'}
            </h3>
          </div>
        </div>

        <!-- Mode Switcher in Modal -->
        <div class="grid grid-cols-2 p-1 rounded-2xl bg-[#140804] border border-[#B8945B]/30 text-xs font-serif font-semibold">
          <button type="button" onclick="window.ladesioApp.switchAuthTab('signin', true)" 
                  class="py-2 rounded-xl transition-all text-center ${tab === 'signin' ? 'bg-[#2A130B] text-[#E6CA85] shadow-md border border-[#B8945B]/40 font-bold' : 'text-stone-400 hover:text-white'}">
            <span>Sign In</span>
          </button>
          <button type="button" onclick="window.ladesioApp.switchAuthTab('register', true)" 
                  class="py-2 rounded-xl transition-all text-center relative ${tab === 'register' ? 'bg-[#2A130B] text-[#E6CA85] shadow-md border border-[#B8945B]/40 font-bold' : 'text-stone-400 hover:text-white'}">
            <span>Create Account</span>
            <span class="hidden sm:inline-block ml-1 px-1.5 py-0.2 text-[9px] rounded-full bg-[#B8945B] text-[#120502] font-bold">+250 Pts</span>
          </button>
        </div>

        <!-- Dynamic Form Container inside Modal -->
        <div id="modalAuthDynamicArea">
          ${this.renderAuthFormContent(tab, 'email', true)}
        </div>

      </div>
    `;

    modal.classList.remove('hidden');
  }

  openMobileAuthModal(step = 'phone', phone = '', currentOtp = '') {
    this.mobileAuthStep = step;
    this.mobileAuthPhone = phone;
    this.mobileAuthOtp = currentOtp;
    this.openAuthModal('signin');
    this.switchAuthMethod('mobile', true);
  }

  closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.add('hidden');
  }

  // ==========================================
  // GMAIL / EMAIL & MOBILE OTP CONTROLLERS
  // ==========================================
  startOtpCooldownTimer(type = 'email', identifier, isModal = false) {
    if (this.otpTimerInterval) {
      clearInterval(this.otpTimerInterval);
      this.otpTimerInterval = null;
    }

    const updateTimerUI = () => {
      const remaining = loyaltyStore.getCooldownRemaining(type, identifier);
      const btnId = type === 'email'
        ? (isModal ? 'modalResendEmailOtpBtn' : 'resendEmailOtpBtn')
        : 'resendMobileOtpBtn';
      const btn = document.getElementById(btnId);

      if (!btn) {
        if (this.otpTimerInterval) {
          clearInterval(this.otpTimerInterval);
          this.otpTimerInterval = null;
        }
        return;
      }

      if (remaining > 0) {
        btn.disabled = true;
        btn.className = 'text-xs text-stone-500 cursor-not-allowed font-mono select-none';
        btn.innerHTML = `⏳ Resend in ${remaining}s`;
      } else {
        btn.disabled = false;
        btn.className = 'text-xs text-[#E6CA85] font-bold hover:underline cursor-pointer';
        btn.innerHTML = type === 'email' ? 'Resend Code to Gmail' : 'Resend Code';
        if (this.otpTimerInterval) {
          clearInterval(this.otpTimerInterval);
          this.otpTimerInterval = null;
        }
      }
    };

    updateTimerUI();
    this.otpTimerInterval = setInterval(updateTimerUI, 1000);
  }

  handleSendEmailOtp(e, overrideEmail, isModal = false) {
    if (e && e.preventDefault) e.preventDefault();
    const inputId = isModal ? 'modalEmailAuthInput' : 'emailAuthInput';
    let email = overrideEmail;
    if (!email) {
      const primaryInput = document.getElementById(inputId);
      const fallbackInput = document.getElementById(isModal ? 'emailAuthInput' : 'modalEmailAuthInput');
      email = (primaryInput ? primaryInput.value : (fallbackInput ? fallbackInput.value : ''));
    }
    email = String(email || '').trim();
    if (!email) {
      if (window.showToast) window.showToast('Please enter your email address.', 'warning');
      return;
    }
    const res = loyaltyStore.generateEmailOtp(email);

    if (res.success) {
      this.emailAuthStep = 'otp';
      this.emailAuthEmail = res.email;
      this.emailAuthOtp = res.otp;
      this.playObstacleChime();
      if (window.showToast) {
        window.showToast(`✉️ Verification code sent to ${res.email}! Please check your inbox.`, 'success');
      }
      // Re-render auth area
      if (isModal) {
        const area = document.getElementById('modalAuthDynamicArea');
        if (area) area.innerHTML = this.renderAuthFormContent('signin', 'email', true);
      } else {
        const area = document.getElementById('authDynamicFormArea');
        if (area) area.innerHTML = this.renderAuthFormContent('signin', 'email', false);
      }
      this.startOtpCooldownTimer('email', res.email, isModal);
    } else {
      if (window.showToast) {
        window.showToast(res.message, res.inCooldown ? 'info' : 'warning');
      } else {
        alert(res.message);
      }
    }
  }

  handleVerifyEmailOtp(e, isModal = false) {
    if (e && e.preventDefault) e.preventDefault();
    const inputId = isModal ? 'modalEmailAuthOtpInput' : 'emailAuthOtpInput';
    const primaryInput = document.getElementById(inputId);
    const fallbackInput = document.getElementById(isModal ? 'emailAuthOtpInput' : 'modalEmailAuthOtpInput');
    const otp = (primaryInput ? primaryInput.value : (fallbackInput ? fallbackInput.value : '')).trim();
    const res = loyaltyStore.verifyEmailOtp(this.emailAuthEmail, otp);

    if (res.success) {
      this.playObstacleChime();
      if (isModal) this.closeAuthModal();
      this.renderNavigationBadges();
      if (window.showToast) {
        window.showToast(res.message, 'success');
      }
      const redirect = sessionStorage.getItem('ladesio_auth_redirect');
      if (redirect === 'checkout') {
        sessionStorage.removeItem('ladesio_auth_redirect');
        this.navigateTo('checkout');
      } else {
        window.location.hash = '#account';
        this.renderAccountView();
      }
    } else {
      if (window.showToast) {
        window.showToast(res.message, 'warning');
      } else {
        alert(res.message);
      }
    }
  }

  resetEmailAuthStep(isModal = false) {
    this.emailAuthStep = 'email';
    if (isModal) {
      const area = document.getElementById('modalAuthDynamicArea');
      if (area) area.innerHTML = this.renderAuthFormContent('signin', 'email', true);
    } else {
      const area = document.getElementById('authDynamicFormArea');
      if (area) area.innerHTML = this.renderAuthFormContent('signin', 'email', false);
    }
  }

  handleSendMobileOtp(e, overridePhone) {
    if (e && e.preventDefault) e.preventDefault();
    const phone = overridePhone || document.getElementById('mobileAuthPhoneInput')?.value;
    const res = loyaltyStore.generateOtp(phone);

    if (res.success) {
      this.mobileAuthStep = 'otp';
      this.mobileAuthPhone = res.phone;
      this.mobileAuthOtp = res.otp;
      this.playObstacleChime();
      if (window.showToast) {
        window.showToast(`📲 Verification code sent to ${res.formattedPhone}! Please check your SMS.`, 'success');
      }
      // Re-render auth area with OTP step
      const isModal = !document.getElementById('authDynamicFormArea');
      if (isModal) {
        this.openAuthModal('signin');
        this.switchAuthMethod('mobile', true);
      } else {
        const area = document.getElementById('authDynamicFormArea');
        if (area) area.innerHTML = this.renderAuthFormContent('signin', 'mobile', false);
      }
      this.startOtpCooldownTimer('mobile', res.phone, isModal);
    } else {
      if (window.showToast) {
        window.showToast(res.message, res.inCooldown ? 'info' : 'warning');
      } else {
        alert(res.message);
      }
    }
  }

  handleVerifyMobileOtp(e) {
    if (e && e.preventDefault) e.preventDefault();
    const otp = document.getElementById('mobileAuthOtpInput')?.value;
    const res = loyaltyStore.verifyOtp(this.mobileAuthPhone, otp);

    if (res.success) {
      if (res.isNewUser) {
        this.switchAuthTab('register');
        if (window.showToast) window.showToast(res.message, 'info');
      } else {
        this.closeAuthModal();
        this.renderNavigationBadges();
        if (window.showToast) {
          window.showToast(res.message, 'success');
        }
        window.location.hash = '#account';
        this.renderAccountView();
      }
    } else {
      if (window.showToast) {
        window.showToast(res.message, 'warning');
      } else {
        alert(res.message);
      }
    }
  }

  handleRegisterNewMobileUser(e) {
    if (e && e.preventDefault) e.preventDefault();
    const name = document.getElementById('regNewMobileName')?.value;
    const city = document.getElementById('regNewMobileCity')?.value || 'Chennai';
    const address = document.getElementById('regNewMobileAddress')?.value || '';

    const res = loyaltyStore.registerWithMobile({
      phone: this.mobileAuthPhone,
      name,
      city,
      address
    });

    if (res.success) {
      this.closeAuthModal();
      this.renderNavigationBadges();
      if (window.showToast) {
        window.showToast(res.message, 'success');
      }
      window.location.hash = '#account';
      this.renderAccountView();
    }
  }

  handleLogout() {
    this.closePfpDropdown();
    this.closeAllModals();
    this.closeAuthModal();
    this.closeBirthdayCelebrationModal();

    // Immediately remove top celebratory birthday banner if present
    const banner = document.getElementById('atelierBirthdayBanner');
    if (banner) banner.remove();

    if (typeof this.closeWishlistDrawer === 'function') this.closeWishlistDrawer();
    if (typeof this.closeCartDrawer === 'function') this.closeCartDrawer();

    const previousUser = loyaltyStore && typeof loyaltyStore.getActiveUser === 'function' ? loyaltyStore.getActiveUser() : null;
    const prevUserId = previousUser ? previousUser.id : (loyaltyStore && loyaltyStore.profile ? loyaltyStore.profile.id : null);

    // Save previous user's cart/wishlist and clear active in-memory cart/wishlist
    if (typeof cartStore !== 'undefined' && typeof cartStore.onLogout === 'function') {
      cartStore.onLogout(prevUserId);
    } else if (typeof cartStore !== 'undefined') {
      cartStore.cart = [];
      cartStore.wishlist = [];
      cartStore.activePromo = null;
      if (cartStore.saveCart) cartStore.saveCart();
      if (cartStore.saveWishlist) cartStore.saveWishlist();
      if (cartStore.notify) cartStore.notify();
    }

    loyaltyStore.logout();
    this.pendingRedirectRoute = null;
    try {
      sessionStorage.removeItem('ladesio_auth_redirect');
      localStorage.removeItem('ladesio_auth_session_phone_v4');
      localStorage.removeItem('ladesio_active_user_id_v4');
      localStorage.removeItem('ladesio_profile_v2');
      localStorage.removeItem('pendingAuthEmail');
      localStorage.removeItem('ladesio_locked_birthday');
    } catch (e) {}


    
    // Update navigation immediately (cart & wishlist count badges become 0 / hidden)
    this.renderNavigationBadges();

    // Ensure birthday greeting banner and modal are removed
    this.checkBirthdayGreeting();
    
    // Always navigate to login page and render sign in form
    this.currentRoute = 'login';
    window.location.hash = '#login';
    const mainContainer = document.getElementById('app-main-content');
    if (mainContainer) {
      this.renderLoginView(mainContainer, 'signin');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (window.showToast) {
      window.showToast('You have signed out successfully.', 'info');
    }
  }
}

// Global Toast System
window.showToast = function(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `px-4 py-3 rounded-xl shadow-2xl border text-xs font-serif flex items-center gap-2 transform transition-all duration-300 translate-y-4 opacity-0 ${
    type === 'success'
      ? 'bg-[#3A1F17] text-[#E6CA85] border-[#B8945B]'
      : 'bg-neutral-900 text-white border-neutral-700'
  }`;

  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

// Initialize App safely whether DOMContentLoaded has already fired or not
function startLaDesioApp() {
  if (typeof window !== 'undefined' && !window.ladesioApp) {
    new LaDesioApp();
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startLaDesioApp);
  } else {
    startLaDesioApp();
  }
}
