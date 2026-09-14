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
    title: 'Pistachio di Bronte Tiramisù',
    subtitle: 'Sicilian Bronte Pistachio Cream • Espresso Savoiardi • Mascarpone',
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
    title: 'Fragola & White Chocolate Tart',
    subtitle: 'Alpine Wild Strawberries • Tahitian Vanilla Ganache • Butter Sablé',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85',
    productId: 'desio-strawberry-rose'
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
    title: 'Fragola & White Chocolate Grand Tart',
    subtitle: 'Alpine Wild Strawberries & Tahitian Vanilla Ganache',
    badge: 'Seasonal Patisserie',
    productId: 'desio-strawberry-rose'
  },
  {
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1920&q=85',
    title: 'Pistachio di Bronte Tiramisù',
    subtitle: 'Sicilian Bronte Pistachio Cream & Espresso Savoiardi',
    badge: 'Authentic Milanese',
    productId: 'desio-pistachio-royale'
  },
  {
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1920&q=85',
    title: 'Caramel Étoile Entremet',
    subtitle: 'Burnt Madagascar Vanilla Caramel & Fleur de Sel Ganache',
    badge: 'Atelier Selection',
    productId: 'desio-caramel-etoile'
  },
  {
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=85',
    title: 'Artisanal Milan Atelier',
    subtitle: 'Handcrafted Daily with Master Italian Craftsmanship',
    badge: 'Grand Haute Patisserie',
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

    this.activeFilter = {
      priceMax: 3500,
      dietary: 'all',
      onlyEggless: false,
      sortBy: 'recommended'
    };

    this.init();
  }

  init() {
    this.setupRouter();
    this.setupEventListeners();
    this.setupCartListeners();
    this.setupLoyaltyListeners();
    this.renderNavigationBadges();
    this.renderCurrentView();

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
    this.currentRoute = route;
    window.location.hash = '#' + route;
    this.renderCurrentView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  setupRouter() {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      const [route, param] = hash.split('/');
      if (route === 'wishlist') {
        this.openWishlistDrawer();
        return;
      }
      this.currentRoute = route;
      this.routeParam = param;
      this.renderCurrentView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      if (this.currentRoute === 'checkout' && window.checkoutManager) {
        window.checkoutManager.render();
      }
    });
  }

  setupLoyaltyListeners() {
    loyaltyStore.subscribe((data) => {
      if (this.currentRoute === 'account') {
        this.renderAccountView();
      }
    });
  }

  renderNavigationBadges() {
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
      'home': 'HOME SALON',
      'menu': 'THE DESIO MENU',
      'builder': 'CREATE DESSERT',
      'natural': 'DESIO NATURAL',
      'gifting': 'LUXURY GIFTING',
      'story': 'OUR HERITAGE',
      'boutiques': 'SALON LOCATIONS',
      'account': 'PRIVÉ ACCOUNT',
      'checkout': 'BESPOKE CHECKOUT'
    };

    const activeTitleElem = document.getElementById('activePageTitle');
    if (activeTitleElem) {
      activeTitleElem.textContent = routeTitles[this.currentRoute] || 'HAUTE PATISSERIE';
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
      <!-- FULL-WIDTH SLIDING IMAGE HERO CAROUSEL     -->
      <!-- ========================================== -->
      <section id="fullSizeBannerContainer"
               class="relative w-full h-[400px] sm:h-[500px] md:h-[580px] lg:h-[650px] bg-[#1A0B06] overflow-hidden border-b border-[#B8945B]/30 select-none group">
        
        <!-- Sliding Horizontal Track -->
        <div id="fullBannerTrack"
             class="flex w-full h-full transition-transform duration-700 ease-in-out"
             style="transform: translateX(-${this.fullBannerSlideIndex * 100}%);">
          ${FULL_SIZE_BANNER_IMAGES.map((slide, idx) => `
            <div class="w-full h-full shrink-0 relative overflow-hidden">
              <img src="${slide.image}"
                   alt="${slide.title}"
                   class="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
              
              <!-- Luxury Gradient Overlay & Slide Narrative -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 flex flex-col justify-end p-6 sm:p-12 lg:p-16">
                <div class="max-w-3xl space-y-2.5 text-white">
                  <div class="flex items-center gap-2">
                    <span class="inline-block px-3 py-1 rounded-full bg-[#B8945B] text-[#140A06] text-[10px] sm:text-xs font-serif uppercase tracking-widest font-bold shadow-md">
                      ${slide.badge}
                    </span>
                    <span class="text-xs font-serif text-[#E6CA85] tracking-wider uppercase hidden sm:inline">Collection No. 0${idx + 1}</span>
                  </div>

                  <h2 class="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-md leading-tight">
                    ${slide.title}
                  </h2>
                  
                  <p class="text-xs sm:text-sm md:text-base text-[#F8F1E7]/90 font-light max-w-xl drop-shadow line-clamp-2">
                    ${slide.subtitle}
                  </p>

                  <div class="pt-2 sm:pt-4 flex flex-wrap items-center gap-3">
                    <button onclick="window.ladesioApp.openProductModal('${slide.productId}')"
                            class="px-6 py-3 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center gap-2">
                      <span>View Creation</span> →
                    </button>
                    <a href="#menu" class="px-6 py-3 rounded-xl bg-black/40 hover:bg-black/70 backdrop-blur border border-white/30 text-white font-serif text-xs font-semibold tracking-wider uppercase transition-all">
                      Explore Full Menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Left & Right Arrow Navigation Controls -->
        <button onclick="event.stopPropagation(); window.ladesioApp.prevFullBannerSlide()"
                class="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-[#B8945B] text-white backdrop-blur border border-white/30 flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-110 shadow-2xl focus:outline-none text-2xl font-bold"
                aria-label="Previous slide">
          ‹
        </button>
        <button onclick="event.stopPropagation(); window.ladesioApp.nextFullBannerSlide()"
                class="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-[#B8945B] text-white backdrop-blur border border-white/30 flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-110 shadow-2xl focus:outline-none text-2xl font-bold"
                aria-label="Next slide">
          ›
        </button>

        <!-- Bottom Pagination Indicators & Slide Counter -->
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 backdrop-blur border border-white/20 shadow-xl">
          <div class="flex items-center gap-2">
            ${FULL_SIZE_BANNER_IMAGES.map((_, idx) => `
              <button onclick="event.stopPropagation(); window.ladesioApp.setFullBannerSlide(${idx})"
                      class="full-banner-dot h-2 rounded-full transition-all duration-300 ${idx === this.fullBannerSlideIndex ? 'bg-[#E6CA85] w-8' : 'bg-white/40 hover:bg-white/70 w-2.5'}"
                      aria-label="Go to slide ${idx + 1}"></button>
            `).join('')}
          </div>
          <span id="fullBannerCounter" class="text-[11px] font-mono text-[#E6CA85] font-bold pl-2 border-l border-white/20">
            0${this.fullBannerSlideIndex + 1} / 0${FULL_SIZE_BANNER_IMAGES.length}
          </span>
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
      <section class="py-24 bg-[#140704] border-b border-[#B8945B]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
            <div class="lg:col-span-7 space-y-4">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8945B]/15 text-[#E6CA85] text-xs font-serif tracking-wider uppercase border border-[#B8945B]/40 shadow-md">
                <span>✦</span> Ingredient-Conscious Patisserie
              </div>
              <h2 class="font-display text-3xl sm:text-4xl text-[#FFFDF9] drop-shadow-md">
                THE DESIO NATURAL COLLECTION
              </h2>
              <p class="font-serif-elegant italic text-lg text-[#E6CA85]">"Thoughtfully crafted. Naturally inspired."</p>
              <p class="text-xs sm:text-sm text-[#D6C2B0] leading-relaxed">
                A collection created for those who want to be more mindful of their ingredients without giving up the pleasure of dessert. Made without artificial sweeteners and with reduced reliance on refined sugar, utilizing real fruit purées, Medjool dates, and single-origin raw cacao.
              </p>

              <!-- Key Ingredient-Conscious Pillars -->
              <div class="grid grid-cols-2 gap-3 pt-2 text-xs text-[#F8F1E7]">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#E6CA85]"></span>
                  <span>No Artificial Sweeteners</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#E6CA85]"></span>
                  <span>Naturally Sweet Ingredients</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#E6CA85]"></span>
                  <span>Real Mountain Fruit Purées</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#E6CA85]"></span>
                  <span>Pure Patisserie Craft</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 text-right">
              <a href="#natural" class="inline-block px-8 py-4 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-widest uppercase shadow-xl">
                EXPLORE DESIO NATURAL →
              </a>
            </div>
          </div>

          <!-- Desio Natural Product Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

    // Initialize Hero Carousel, Dishes Banner & Full-Size Image Banner
    this.initHeroCarousel();
    this.initDishesBannerCarousel();
    this.initFullBannerCarousel();


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
  // FULL-SIZE IMAGE BANNER CONTROLLER METHODS
  // ==========================================
  initFullBannerCarousel() {
    this.stopFullBannerTimer();
    const container = document.getElementById('fullSizeBannerContainer');
    if (!container) return;

    // Pause auto-rotation on mouse enter, resume on mouse leave
    container.onmouseenter = () => this.stopFullBannerTimer();
    container.onmouseleave = () => this.startFullBannerTimer();

    // Touch swipe support
    let touchStartX = 0;
    container.ontouchstart = (e) => {
      touchStartX = e.touches[0].clientX;
      this.stopFullBannerTimer();
    };
    container.ontouchend = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (diff > 50) {
        this.nextFullBannerSlide();
      } else if (diff < -50) {
        this.prevFullBannerSlide();
      }
      this.startFullBannerTimer();
    };

    // Start auto-advancing
    this.startFullBannerTimer();
  }

  startFullBannerTimer() {
    this.stopFullBannerTimer();
    this.fullBannerTimer = setInterval(() => {
      this.nextFullBannerSlide();
    }, 4000);
  }

  stopFullBannerTimer() {
    if (this.fullBannerTimer) {
      clearInterval(this.fullBannerTimer);
      this.fullBannerTimer = null;
    }
  }

  setFullBannerSlide(index) {
    const total = FULL_SIZE_BANNER_IMAGES.length;
    this.fullBannerSlideIndex = ((index % total) + total) % total;

    const track = document.getElementById('fullBannerTrack');
    if (track) {
      track.style.transform = `translateX(-${this.fullBannerSlideIndex * 100}%)`;
    }

    const dots = document.querySelectorAll('.full-banner-dot');
    dots.forEach((dot, idx) => {
      if (idx === this.fullBannerSlideIndex) {
        dot.className = 'full-banner-dot h-2 rounded-full transition-all duration-300 bg-[#E6CA85] w-8';
      } else {
        dot.className = 'full-banner-dot h-2 rounded-full transition-all duration-300 bg-white/40 hover:bg-white/70 w-2.5';
      }
    });

    const counter = document.getElementById('fullBannerCounter');
    if (counter) {
      counter.textContent = `0${this.fullBannerSlideIndex + 1} / 0${total}`;
    }
  }

  nextFullBannerSlide() {
    this.setFullBannerSlide(this.fullBannerSlideIndex + 1);
  }

  prevFullBannerSlide() {
    this.setFullBannerSlide(this.fullBannerSlideIndex - 1);
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
        
        <!-- Category Tabs & Eggless Quick Filter -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div class="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            ${CATEGORIES.map(cat => `
              <button onclick="window.ladesioApp.setMenuCategory('${cat.id}')"
                      class="px-4 py-2 rounded-xl text-xs font-serif font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${this.selectedCategory === cat.id ? 'bg-[#B8945B] text-[#140602] font-bold shadow-lg ring-2 ring-[#E6CA85]/50' : 'bg-[#1F0C06] text-[#E6CA85] border border-[#B8945B]/30 hover:border-[#E6CA85]/60 hover:text-white'}">
                <span>${cat.name}</span>
              </button>
            `).join('')}
          </div>

          <!-- Prominent 100% Eggless Toggle Button -->
          <button type="button"
                  onclick="window.ladesioApp.toggleEgglessFilter()"
                  class="px-4 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all flex items-center gap-2 shadow-md cursor-pointer shrink-0 ${this.activeFilter.onlyEggless ? 'bg-emerald-600 text-white ring-2 ring-emerald-300 shadow-emerald-900/50' : 'bg-[#140602] text-emerald-400 border border-emerald-500/50 hover:bg-emerald-950/40'}">
            <span class="w-2.5 h-2.5 rounded-full ${this.activeFilter.onlyEggless ? 'bg-white' : 'bg-emerald-500'} ring-2 ring-emerald-400/40"></span>
            <span>🟢 100% Eggless Only</span>
            ${this.activeFilter.onlyEggless ? '<span class="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full">ACTIVE</span>' : ''}
          </button>
        </div>

        <!-- Filter Bar & Sorting -->
        <div class="p-4 rounded-2xl bg-[#180905] border border-[#B8945B]/35 shadow-xl mb-8 flex flex-wrap items-center justify-between gap-4 text-xs">
          
          <!-- Dietary Selection -->
          <div class="flex items-center gap-2">
            <span class="font-semibold text-[#FFFDF9]">Dietary:</span>
            <select onchange="window.ladesioApp.setDietaryFilter(this.value)"
                    class="px-3 py-1.5 rounded-lg border border-[#B8945B]/40 bg-[#241009] text-[#FFFDF9] focus:outline-none focus:ring-1 focus:ring-[#E6CA85]">
              <option value="all" ${this.activeFilter.dietary === 'all' ? 'selected' : ''}>All Selections</option>
              <option value="high protein" ${this.activeFilter.dietary === 'high protein' ? 'selected' : ''}>High Protein / Whey</option>
              <option value="no added refined sugar" ${this.activeFilter.dietary === 'no added refined sugar' ? 'selected' : ''}>No Added Refined Sugar</option>
              <option value="vegetarian" ${this.activeFilter.dietary === 'vegetarian' ? 'selected' : ''}>Vegetarian</option>
              <option value="eggless" ${this.activeFilter.dietary === 'eggless' ? 'selected' : ''}>Eggless</option>
              <option value="vegan" ${this.activeFilter.dietary === 'vegan' ? 'selected' : ''}>Vegan / Dairy-Free</option>
              <option value="gluten-free" ${this.activeFilter.dietary === 'gluten-free' ? 'selected' : ''}>Gluten-Free</option>
            </select>
          </div>

          <!-- Price Max Slider -->
          <div class="flex items-center gap-2">
            <span class="font-semibold text-[#FFFDF9]">Max Price:</span>
            <span class="font-bold text-[#E6CA85]">₹${this.activeFilter.priceMax}</span>
            <input type="range" min="300" max="3500" step="100" value="${this.activeFilter.priceMax}"
                   oninput="window.ladesioApp.setPriceFilter(this.value)"
                   class="w-24 sm:w-32 accent-[#E6CA85]" />
          </div>

          <!-- Sort Select -->
          <div class="flex items-center gap-2">
            <span class="font-semibold text-[#FFFDF9]">Sort:</span>
            <select onchange="window.ladesioApp.setSortFilter(this.value)"
                    class="px-3 py-1.5 rounded-lg border border-[#B8945B]/40 bg-[#241009] text-[#FFFDF9] focus:outline-none focus:ring-1 focus:ring-[#E6CA85]">
              <option value="recommended" ${this.activeFilter.sortBy === 'recommended' ? 'selected' : ''}>Recommended</option>
              <option value="price-low" ${this.activeFilter.sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-high" ${this.activeFilter.sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
              <option value="rating" ${this.activeFilter.sortBy === 'rating' ? 'selected' : ''}>Top Rated</option>
            </select>
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
      <div class="bg-[#160703] py-14 border-b border-[#B8945B]/25">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span class="text-xs uppercase tracking-widest text-[#E6CA85] font-semibold font-serif">Bespoke Patisserie Studio</span>
          <h1 class="font-display text-4xl sm:text-5xl text-[#FFFDF9] mt-1 drop-shadow-md">CREATE YOUR DESSERT</h1>
          <div class="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#B8945B] to-transparent mx-auto mt-3 mb-3"></div>
          <p class="text-xs sm:text-sm text-[#D6C2B0] max-w-xl mx-auto">
            Design your bespoke Italian dessert from base to sauce. Our master chefs prepare each custom creation fresh to order.
          </p>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div id="fullDessertStudioMount"></div>
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
      <div class="bg-gradient-to-b from-[#152618] via-[#170C07] to-[#120502] py-16 border-b border-[#8A9A86]/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8A9A86]/20 text-[#A3E635] text-xs font-serif tracking-wider uppercase mb-3 border border-[#8A9A86]/35">
            <span>🌿</span> The Mindful Patisserie Collection
          </div>
          <h1 class="font-display text-4xl sm:text-6xl text-[#FFFDF9] drop-shadow-md">DESIO NATURAL</h1>
          <p class="font-serif-elegant italic text-xl text-[#E6CA85] mt-2">"Thoughtfully crafted. Naturally inspired."</p>
          <div class="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#B8945B] to-transparent mx-auto mt-4 mb-4"></div>
          <p class="text-xs sm:text-sm text-[#D6C2B0] max-w-2xl mx-auto leading-relaxed">
            Created for those who want to be more mindful of ingredients without sacrificing the pure indulgence of authentic dessert. Made without artificial sweeteners and with reduced reliance on refined sugars.
          </p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        <!-- Educational Pillars Banner -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl luxury-card border border-[#8A9A86]/40 shadow-xl space-y-2">
            <span class="text-3xl">🍓</span>
            <h4 class="font-serif text-base font-bold text-[#FFFDF9]">Real Fruit & Purées</h4>
            <p class="text-xs text-[#D6C2B0] leading-relaxed">
              Natural flavor from mountain strawberries, wild blueberries, and Ratnagiri Alphonso mangoes without synthetic aromas.
            </p>
          </div>

          <div class="p-6 rounded-2xl luxury-card border border-[#8A9A86]/40 shadow-xl space-y-2">
            <span class="text-3xl">🌴</span>
            <h4 class="font-serif text-base font-bold text-[#FFFDF9]">Naturally Sweet Ingredients</h4>
            <p class="text-xs text-[#D6C2B0] leading-relaxed">
              Sweetened with sun-cured Medjool dates, wild raw blossom honey, and concentrated fruit reductions.
            </p>
          </div>

          <div class="p-6 rounded-2xl luxury-card border border-[#8A9A86]/40 shadow-xl space-y-2">
            <span class="text-3xl">🍫</span>
            <h4 class="font-serif text-base font-bold text-[#FFFDF9]">High-Percentage Cacao</h4>
            <p class="text-xs text-[#D6C2B0] leading-relaxed">
              80% Single-origin raw Peruvian cacao provides rich cocoa notes with less refined sweetness.
            </p>
          </div>
        </div>

        <!-- Natural Products Grid -->
        <div>
          <div class="text-center max-w-xl mx-auto mb-10">
            <h3 class="font-display text-2xl sm:text-3xl text-[#FFFDF9]">The Natural Atelier Menu</h3>
            <p class="text-xs text-[#D6C2B0] mt-1">Every recipe is clearly transparent about ingredients and allergens.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
          ${giftProducts.map(p => `
            <div class="luxury-card rounded-2xl border border-[#B8945B]/40 p-6 shadow-2xl flex flex-col md:flex-row gap-6 transition-all duration-300 bg-gradient-to-b from-[#583324] to-[#3E2014]">
              <div class="w-full md:w-1/2 h-64 rounded-xl overflow-hidden relative border border-[#B8945B]/30">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#180804] text-[#E6CA85] text-[10px] font-serif uppercase tracking-wider border border-[#B8945B]/50 backdrop-blur-md font-semibold shadow">
                  ${p.badge}
                </span>
              </div>
              <div class="w-full md:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <h3 class="font-display text-2xl text-[#FFFDF9]">${p.name}</h3>
                  <p class="text-xs text-[#E6CA85] font-serif italic">${p.subtitle}</p>
                  <p class="text-xs text-[#E8D7C7] mt-2 leading-relaxed font-normal">${p.description}</p>
                </div>
                <div class="pt-4 border-t border-[#B8945B]/25 flex items-center justify-between">
                  <div>
                    <span class="text-xs text-[#C4B2A3] line-through ${p.originalPrice ? '' : 'hidden'}">₹${p.originalPrice}</span>
                    <span class="font-display font-bold text-xl text-[#FFFDF9]">₹${p.price}</span>
                  </div>
                  <button onclick="window.ladesioApp.quickAddToCart('${p.id}')"
                          class="px-5 py-2 rounded-lg btn-gold-luxury font-serif text-xs font-semibold shadow-md">
                    Order Gift Box
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
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
  // CUSTOMER ACCOUNT & LA DESIO PRIVÉ
  // ==========================================
  renderAccountView(container = document.getElementById('app-main-content')) {
    if (!loyaltyStore.isUserAuthenticated()) {
      this.renderLoginView(container, 'signin');
      return;
    }
    if (!this.activeAccountTab) {
      this.activeAccountTab = 'creations';
    }
    const data = loyaltyStore.getData();
    const { profile, creations, orders, friends = [] } = data;

    container.innerHTML = `
      <!-- Privé Account Hero Header -->
      <div class="bg-gradient-to-b from-[#180A06] to-[#241009] text-[#FFFDF9] py-10 border-b border-[#B8945B]/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <!-- Avatar with Camera Badge & Edit Trigger -->
              <div class="relative group cursor-pointer shrink-0" onclick="window.ladesioApp.openEditProfileModal()" title="Click to edit profile & photo">
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
                  <div class="absolute inset-0 bg-black/50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="text-white text-xs font-serif font-bold">📷 Change</span>
                  </div>
                </div>
                <button type="button" class="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#B8945B] hover:bg-[#E6CA85] text-black text-xs flex items-center justify-center shadow-lg border-2 border-[#180A06] transition-colors" title="Change Avatar">
                  ✏️
                </button>
              </div>

              <div class="space-y-1.5">
                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span class="text-[10px] uppercase tracking-widest text-[#E6CA85] font-serif font-bold">La Desio Privé Member</span>
                  <span class="text-stone-500 text-xs">•</span>
                  <span class="text-[11px] text-[#D6C2B0] font-serif">📍 ${profile.city || 'Chennai'}</span>
                </div>
                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <h2 class="font-display text-2xl sm:text-3xl text-white font-bold">${profile.name}</h2>
                  <button onclick="window.ladesioApp.openEditProfileModal()" 
                          class="px-3 py-1 rounded-lg border border-[#B8945B]/40 hover:border-[#B8945B] text-[#E6CA85] hover:text-white bg-[#1A0A06]/70 text-xs font-serif transition-all flex items-center gap-1.5 shadow-sm">
                    <span>✏️</span> Edit Profile & Bio
                  </button>
                  
                </div>
                <p class="text-xs text-[#D6C2B0]">${profile.email} • Client since ${profile.joinedDate}</p>
                ${profile.bio ? `
                  <p class="text-xs text-[#E6CA85]/90 italic max-w-xl leading-relaxed bg-black/25 p-2.5 rounded-xl border-l-2 border-[#B8945B]">
                    “${profile.bio}”
                  </p>
                ` : ''}
              </div>
            </div>

            <!-- Tier Status & Quick Metric Pills -->
            <div class="flex flex-wrap items-center justify-center gap-3">
              <div class="p-3.5 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 text-center min-w-[170px] shadow-lg">
                <span class="text-[9px] text-[#E6CA85] uppercase tracking-widest font-semibold block">Privé Status</span>
                <span class="font-display text-lg text-gold-gradient font-bold">✨ ${profile.tier} Member</span>
                <div class="w-full bg-black/50 h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div class="bg-gradient-to-r from-[#B8945B] to-[#E6CA85] h-full" style="width: ${(profile.points / profile.nextTierPoints) * 100}%"></div>
                </div>
                <span class="text-[9px] text-[#D6C2B0] block mt-1">${profile.points} / ${profile.nextTierPoints} Points to Royale</span>
              </div>

              <div class="flex flex-col gap-1.5">
                <div class="px-3.5 py-1.5 rounded-xl bg-[#1A0905] border border-[#B8945B]/30 text-xs flex items-center justify-between gap-3">
                  <span class="text-[#D6C2B0]">Saved Recipes:</span>
                  <strong class="text-[#E6CA85] font-mono">${creations.length}</strong>
                </div>
                <div class="px-3.5 py-1.5 rounded-xl bg-[#1A0905] border border-[#B8945B]/30 text-xs flex items-center justify-between gap-3">
                  <span class="text-[#D6C2B0]">Total Orders:</span>
                  <strong class="text-[#E6CA85] font-mono">${orders.length}</strong>
                </div>
                <div class="px-3.5 py-1.5 rounded-xl bg-[#1A0905] border border-[#B8945B]/30 text-xs flex items-center justify-between gap-3">
                  <span class="text-[#D6C2B0]">Friends Circle:</span>
                  <strong class="text-[#E6CA85] font-mono">${friends.length}</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Interactive Luxury Navigation Tabs -->
          <div class="flex items-center gap-2 sm:gap-4 mt-8 border-b border-[#B8945B]/20 pb-0 overflow-x-auto">
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
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${creations.map(creation => `
                  <div class="p-5 rounded-2xl bg-[#241009] border border-[#B8945B]/30 hover:border-[#B8945B] shadow-xl flex flex-col justify-between transition-all group">
                    <div class="space-y-3">
                      <div class="relative rounded-xl overflow-hidden aspect-video border border-[#B8945B]/20">
                        <img src="${creation.image}" alt="${creation.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#180A06]/90 border border-[#B8945B]/40 text-[#E6CA85] text-[10px] font-serif uppercase tracking-wider font-semibold">
                          Bespoke Recipe
                        </span>
                        <span class="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-lg bg-black/80 font-display font-bold text-sm text-[#FFFDF9]">
                          ₹${creation.price}
                        </span>
                      </div>

                      <div>
                        <div class="flex items-center justify-between">
                          <h4 class="font-serif font-bold text-base text-[#FFFDF9]">${creation.name}</h4>
                          <span class="text-[10px] text-[#D6C2B0] font-mono">${creation.createdDate}</span>
                        </div>
                        <p class="text-xs text-[#E6CA85] mt-1 leading-relaxed line-clamp-2">
                          ${creation.recipe}
                        </p>
                      </div>

                      <!-- Nutrition pill if available -->
                      ${creation.nutrition ? `
                        <div class="flex items-center justify-between p-2 rounded-lg bg-[#180A06] border border-[#B8945B]/20 text-[10px] text-[#D6C2B0]">
                          <span>⚡ <strong>${creation.nutrition.calories} kcal</strong></span>
                          <span>P: ${creation.nutrition.protein}g • C: ${creation.nutrition.carbs}g • F: ${creation.nutrition.fats}g</span>
                        </div>
                      ` : ''}
                    </div>

                    <!-- Action Buttons -->
                    <div class="pt-4 border-t border-[#B8945B]/20 mt-4 flex items-center gap-2">
                      <button onclick='window.ladesioApp.cloneTrendingCreation(${JSON.stringify(creation.config || {}).replace(/'/g, "\\'")})'
                              class="flex-1 py-2 px-3 rounded-lg border border-[#B8945B]/50 hover:border-[#B8945B] hover:bg-white/5 text-[#FFFDF9] text-xs font-serif font-semibold transition-all flex items-center justify-center gap-1.5">
                        <span>✏️</span> Edit in Studio
                      </button>
                      <button onclick='window.ladesioApp.quickOrderCustomCreation(${JSON.stringify(creation).replace(/'/g, "\\'")})'
                              class="flex-1 py-2 px-3 rounded-lg btn-gold-luxury text-xs font-serif font-semibold tracking-wider transition-all flex items-center justify-center gap-1 shadow-md">
                        <span>🛒</span> Order (₹${creation.price})
                      </button>
                      <button onclick="if(confirm('Remove this recipe from your saved creations?')) window.loyaltyStore.deleteCreation('${creation.id}')"
                              class="p-2 rounded-lg hover:bg-red-500/20 text-stone-400 hover:text-red-400 text-sm transition-all"
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
            </div>

          </div>
        ` : ''}

        ${this.activeAccountTab === 'friends' ? `
          <!-- TAB 4: FRIENDS & ATELIER CIRCLE -->
          ${(() => {
            if (this.selectedFriendId) {
              const friend = friends.find(f => f.id === this.selectedFriendId) || friends[0];
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
                      <!-- Friend Avatar with Change Photo Trigger -->
                      <div class="relative group cursor-pointer shrink-0" onclick="window.ladesioApp.openEditFriendProfileModal('${friend.id}')" title="Click to edit ${friend.name}'s name & photo">
                        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#B8945B] to-[#E6CA85] p-1 shrink-0 shadow-2xl overflow-hidden relative">
                          <img id="activeFriendSpotlightAvatar" src="${friend.avatar}" alt="${friend.name}" class="w-full h-full object-cover rounded-full" />
                          <div class="absolute inset-0 bg-black/50 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span class="text-white text-xs font-serif font-bold">✏️ Edit</span>
                          </div>
                        </div>
                        <button type="button" class="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#B8945B] hover:bg-[#E6CA85] text-black text-xs flex items-center justify-center shadow-lg border-2 border-[#180A06] transition-colors" title="Edit Name & Photo">
                          ✏️
                        </button>
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

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${friends.map(f => `
                      <div class="p-6 rounded-3xl bg-[#241009] border border-[#B8945B]/30 hover:border-[#B8945B] shadow-xl flex flex-col justify-between transition-all group hover:-translate-y-1">
                        <div class="space-y-4">
                          <!-- Friend Avatar & Info -->
                          <div class="flex items-start justify-between gap-3">
                            <div class="flex items-center gap-3.5">
                              <div class="relative group cursor-pointer w-16 h-16 rounded-full bg-gradient-to-br from-[#B8945B] to-[#E6CA85] p-0.5 shrink-0 shadow-lg overflow-hidden"
                                   onclick="event.stopPropagation(); window.ladesioApp.openEditFriendProfileModal('${f.id}')"
                                   title="Click to edit ${f.name}'s name & photo">
                                <img src="${f.avatar}" alt="${f.name}" class="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300" />
                                <div class="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-white font-serif font-bold">
                                  ✏️ Edit
                                </div>
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
                              ${f.creations.slice(0, 2).map(c => `
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
                </div>
              `;
            }
          })()}
        ` : ''}

      </div>
    `;
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
    container.innerHTML = `<div id="checkoutFlowMount"></div>`;
    window.checkoutManager = new CheckoutManager('checkoutFlowMount', () => {
      this.renderNavigationBadges();
    });
    window.checkoutManager.init();
  }

  // ==========================================
  // REUSABLE PRODUCT CARD COMPONENT (INR)
  // ==========================================
  renderProductCard(product, isNatural = false) {
    const inWishlist = cartStore.isInWishlist(product.id);

    return `
      <div class="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 relative shadow-2xl">
        
        <!-- Image Container -->
        <div class="relative h-64 overflow-hidden zoom-container cursor-pointer bg-[#241109]"
             onclick="window.ladesioApp.openProductModal('${product.id}')">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span class="text-[#E6CA85] text-xs font-serif tracking-wider flex items-center gap-1.5">
              <span>✦</span> Tap to View Details & Modifiers
            </span>
          </div>

          <!-- Badge & Official FSSAI Dietary Mark -->
          <div class="absolute top-3 left-3 flex items-center gap-1.5 z-10">
            <span class="px-2.5 py-1 rounded-full bg-[#180804]/90 text-[#E6CA85] border border-[#B8945B]/60 backdrop-blur-md text-[10px] font-serif uppercase tracking-wider shadow-md font-semibold">
              ${product.badge}
            </span>
            <span class="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border ${product.isEggless ? 'border-emerald-500/80 text-emerald-300' : 'border-rose-600/80 text-rose-300'} flex items-center gap-1 text-[10px] font-serif font-bold shadow-md"
                  title="${product.isEggless ? '100% Eggless Pure Vegetarian' : 'Contains Egg'}">
              <span class="w-2 h-2 rounded-full ${product.isEggless ? 'bg-emerald-400 ring-2 ring-emerald-500/30' : 'bg-rose-500 ring-2 ring-rose-600/30'}"></span>
              <span>${product.isEggless ? 'Eggless' : 'Contains Egg'}</span>
            </span>
          </div>

          <!-- Wishlist Heart Button -->
          <button onclick="event.stopPropagation(); window.ladesioApp.toggleWishlist('${product.id}')"
                  class="card-wishlist-btn absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all hover:scale-110 shadow-md"
                  title="Save to Wishlist">
            <span data-wishlist-icon="${product.id}" class="${inWishlist ? 'text-rose-600 scale-125' : 'text-[#8C6838]'}">♥</span>
          </button>
        </div>

        <!-- Card Content (Rich Light Chocolate Shade Surface) -->
        <div class="p-5 flex-1 flex flex-col justify-between space-y-3 bg-gradient-to-b from-[#583324] to-[#3E2014]">
          <div>
            <div class="flex items-center justify-between text-xs text-[#E6CA85] font-medium mb-1.5">
              <span class="flex items-center gap-1.5 font-serif cursor-pointer hover:underline"
                    onclick="window.ladesioApp.openProductModal('${product.id}')"
                    title="Click to view verified customer reviews">
                <span class="text-amber-400 font-bold">★</span>
                <strong class="text-[#FFFDF9]">${product.rating.toFixed(2)}</strong>
                <span class="text-[#E8D7C7]/70 font-sans text-[11px]">(${product.reviewsCount} reviews)</span>
              </span>
              <span class="text-[#E8D7C7]/80 font-sans text-[11px]">⏱️ ${product.prepTime.split(' ')[0]} mins</span>
            </div>

            <h3 class="card-title font-display text-xl text-[#FFFDF9] group-hover:text-[#E6CA85] transition-colors leading-snug">
              ${product.name}
            </h3>

            <p class="card-subtitle text-xs text-[#E6CA85] font-serif italic mt-0.5 tracking-wide">
              ${product.subtitle}
            </p>

            <p class="card-description text-xs text-[#E8D7C7] mt-2 line-clamp-2 leading-relaxed font-light">
              ${product.description}
            </p>

            <!-- Dietary Tag Chips with Eggless Indicator -->
            <div class="flex flex-wrap gap-1.5 mt-3">
              <span class="px-2.5 py-0.5 rounded-full ${product.isEggless ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300' : 'bg-rose-950/70 border-rose-600/50 text-rose-300'} border text-[10px] font-serif flex items-center gap-1 font-semibold">
                <span class="w-1.5 h-1.5 rounded-full ${product.isEggless ? 'bg-emerald-400' : 'bg-rose-500'}"></span>
                <span>${product.isEggless ? '100% Eggless' : 'Contains Egg'}</span>
              </span>
              ${product.dietary.slice(0, 2).map(d => `
                <span class="px-2.5 py-0.5 rounded-full bg-[#240F06] text-[10px] text-[#E6CA85] border border-[#B8945B]/30 font-serif">
                  ${d}
                </span>
              `).join('')}
            </div>

            <!-- Calories & Macronutrient Quick Highlights -->
            ${product.nutrition ? `
              <div class="card-pill mt-3 px-3 py-2 rounded-xl bg-[#240F06] border border-[#B8945B]/30 flex items-center justify-between text-[11px]">
                <div class="flex items-center gap-1 font-serif font-bold text-[#FFFDF9]">
                  <span class="text-[#E6CA85]">⚡</span>
                  <span>${product.nutrition.calories} <span class="text-[9px] font-sans font-normal text-[#E8D7C7]/70">kcal</span></span>
                </div>
                <div class="flex items-center gap-2 text-[10px] text-[#E6CA85] font-medium">
                  <span title="Protein" class="${product.proteinRich ? 'px-1.5 py-0.5 rounded bg-[#B8945B]/30 border border-[#B8945B] text-white font-bold shadow-xs' : ''}">P: <strong class="text-[#FFFDF9]">${product.nutrition.protein}</strong></span>
                  <span class="text-[#B8945B]/40">•</span>
                  <span title="Carbohydrates">C: <strong class="text-[#FFFDF9]">${product.nutrition.carbs}</strong></span>
                  <span class="text-[#B8945B]/40">•</span>
                  <span title="Fats">F: <strong class="text-[#FFFDF9]">${product.nutrition.fats}</strong></span>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Bottom Action Row -->
          <div class="pt-4 border-t border-[#B8945B]/25 flex items-center justify-between gap-2">
            <div>
              ${product.originalPrice ? `<span class="text-[11px] text-[#C4B2A3] line-through mr-1 font-mono">₹${product.originalPrice}</span>` : ''}
              <span class="card-price font-display font-bold text-xl text-[#FFFDF9] tracking-tight">₹${product.price}</span>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="window.ladesioApp.openProductModal('${product.id}')"
                      class="card-customize-btn px-3 py-1.5 rounded-lg border border-[#B8945B]/60 text-[#E6CA85] hover:bg-[#B8945B] hover:text-[#1A0904] text-xs font-serif font-semibold transition-all">
                Customize
              </button>
              <button onclick="window.ladesioApp.quickAddToCart('${product.id}')"
                      class="px-3.5 py-1.5 rounded-lg btn-gold-luxury text-xs font-serif font-semibold shadow-md">
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

    let selectedModifiers = {
      extraSauce: false,
      iceCream: false,
      goldPackaging: false,
      quantity: 1
    };

    const updatePrice = () => {
      let base = product.price;
      if (selectedModifiers.extraSauce) base += 50;
      if (selectedModifiers.iceCream) base += 90;
      if (selectedModifiers.goldPackaging) base += 120;
      return (base * selectedModifiers.quantity);
    };

    content.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <!-- Left Photography Gallery -->
        <div class="md:col-span-6 space-y-3">
          <div class="relative rounded-2xl overflow-hidden border border-[#B8945B]/30 shadow-lg aspect-square">
            <img id="modalMainImage" src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
            <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#3A1F17] text-[#E6CA85] text-xs font-serif uppercase tracking-wider">
              ${product.badge}
            </span>
          </div>

          <!-- Gallery Thumbnails -->
          <div class="flex gap-2">
            ${product.gallery.map(img => `
              <button onclick="document.getElementById('modalMainImage').src = '${img}'"
                      class="w-16 h-16 rounded-lg overflow-hidden border border-[#B8945B]/30 focus:ring-2 focus:ring-[#B8945B]">
                <img src="${img}" class="w-full h-full object-cover" />
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Right Specs & Modifiers -->
        <div class="md:col-span-6 space-y-4">
          <div>
            <div class="flex items-center justify-between text-xs text-[#E6CA85] mb-1">
              <span class="flex items-center gap-2">
                <span class="text-amber-400">★ ${product.rating.toFixed(2)}</span>
                <span class="text-[#D6C2B0]/70">(${product.reviewsCount} reviews)</span>
                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold border ${product.isEggless ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300' : 'bg-rose-950/70 border-rose-600/50 text-rose-300'} flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full ${product.isEggless ? 'bg-emerald-400' : 'bg-rose-500'}"></span>
                  <span>${product.isEggless ? '100% Eggless' : 'Contains Egg'}</span>
                </span>
              </span>
              <span class="text-[#D6C2B0]/70 font-mono">${product.servingSize}</span>
            </div>
            <h2 class="font-display text-2xl sm:text-3xl text-[#FFFDF9]">${product.name}</h2>
            <p class="text-xs font-serif italic text-[#E6CA85]">${product.subtitle}</p>
            <p class="font-display text-2xl text-[#FFFDF9] font-bold mt-2">₹${product.price}</p>
          </div>

          <p class="text-xs text-[#D6C2B0] leading-relaxed">${product.description}</p>

          <!-- Nutritional & Macro Profile Module -->
          ${product.nutrition ? `
            <div class="p-3.5 rounded-xl bg-[#180804] border border-[#B8945B]/40 shadow-md space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-[11px] font-serif uppercase tracking-wider font-bold text-[#FFFDF9] flex items-center gap-1.5">
                  <span class="text-[#E6CA85]">⚡</span> Approximate Nutrition & Macros
                </span>
                <span class="text-[10px] font-mono text-[#E6CA85] bg-[#B8945B]/15 px-2 py-0.5 rounded-full border border-[#B8945B]/30">
                  ${product.nutrition.serving}
                </span>
              </div>

              <!-- Macro Metric Grid -->
              <div class="grid grid-cols-4 gap-2 text-center">
                <div class="p-2 rounded-lg bg-[#241109] border border-[#B8945B]/30 shadow-xs">
                  <span class="block text-[9px] text-[#E6CA85] uppercase font-semibold">Calories</span>
                  <span class="font-display font-bold text-sm text-[#FFFDF9]">${product.nutrition.calories} <span class="text-[9px] font-sans font-normal text-[#D6C2B0]/60">kcal</span></span>
                </div>
                <div class="p-2 rounded-lg bg-[#241109] border border-[#B8945B]/30 shadow-xs">
                  <span class="block text-[9px] text-[#E6CA85] uppercase font-semibold">Protein</span>
                  <span class="font-display font-bold text-sm text-[#FFFDF9]">${product.nutrition.protein}</span>
                </div>
                <div class="p-2 rounded-lg bg-[#241109] border border-[#B8945B]/30 shadow-xs">
                  <span class="block text-[9px] text-[#E6CA85] uppercase font-semibold">Carbs</span>
                  <span class="font-display font-bold text-sm text-[#FFFDF9]">${product.nutrition.carbs}</span>
                </div>
                <div class="p-2 rounded-lg bg-[#241109] border border-[#B8945B]/30 shadow-xs">
                  <span class="block text-[9px] text-[#E6CA85] uppercase font-semibold">Fats</span>
                  <span class="font-display font-bold text-sm text-[#FFFDF9]">${product.nutrition.fats}</span>
                </div>
              </div>
              
              ${product.nutrition.fiber ? `
                <div class="flex items-center justify-between text-[10px] text-[#D6C2B0] px-1 pt-1 border-t border-[#B8945B]/25">
                  <span>Dietary Fiber: <strong class="text-[#FFFDF9]">${product.nutrition.fiber}</strong></span>
                  <span class="text-[#E6CA85] font-serif italic">Artisanal Patisserie Craft</span>
                </div>
              ` : ''}
            </div>
          ` : ''}

          <!-- Artisanal Modifiers -->
          <div class="p-4 rounded-xl bg-[#180804] border border-[#B8945B]/35 space-y-2.5 text-xs">
            <h4 class="font-serif font-bold text-[#FFFDF9]">Custom Patisserie Modifiers</h4>
            
            <label class="flex items-center justify-between cursor-pointer">
              <span class="flex items-center gap-2 text-[#D6C2B0]">
                <input type="checkbox" id="modExtraSauce" class="rounded text-[#B8945B] accent-[#B8945B]" />
                Extra Warm Chocolate / Berry Coulis
              </span>
              <span class="font-semibold text-[#E6CA85]">+₹50</span>
            </label>

            <label class="flex items-center justify-between cursor-pointer">
              <span class="flex items-center gap-2 text-[#D6C2B0]">
                <input type="checkbox" id="modIceCream" class="rounded text-[#B8945B] accent-[#B8945B]" />
                Artisanal Madagascar Vanilla Gelato Scoop
              </span>
              <span class="font-semibold text-[#E6CA85]">+₹90</span>
            </label>

            <label class="flex items-center justify-between cursor-pointer">
              <span class="flex items-center gap-2 text-[#D6C2B0]">
                <input type="checkbox" id="modGoldPackaging" class="rounded text-[#B8945B] accent-[#B8945B]" />
                Luxury Keepsake Wooden Box with Wax Seal
              </span>
              <span class="font-semibold text-[#E6CA85]">+₹120</span>
            </label>
          </div>

          <!-- Accordion Specs -->
          <div class="space-y-2 text-xs border-t border-[#B8945B]/25 pt-3">
            <details class="group cursor-pointer">
              <summary class="font-serif font-bold text-[#FFFDF9] flex justify-between items-center group-hover:text-[#E6CA85]">
                <span>✦ Key Ingredients</span>
                <span class="text-[#E6CA85] text-xs">▼</span>
              </summary>
              <p class="text-[#D6C2B0] mt-1 pl-2 leading-relaxed">${product.ingredients.join(' • ')}</p>
            </details>

            <details class="group cursor-pointer">
              <summary class="font-serif font-bold text-[#FFFDF9] flex justify-between items-center group-hover:text-[#E6CA85]">
                <span>✦ Allergens & Dietary</span>
                <span class="text-[#E6CA85] text-xs">▼</span>
              </summary>
              <p class="text-[#D6C2B0] mt-1 pl-2 leading-relaxed">
                Dietary: ${product.isEggless ? '🟢 100% Eggless Pure Vegetarian' : '🔴 Contains Egg'}<br/>
                Allergens: ${product.allergens.join(', ') || 'None'}
              </p>
            </details>

            <details class="group cursor-pointer">
              <summary class="font-serif font-bold text-[#FFFDF9] flex justify-between items-center group-hover:text-[#E6CA85]">
                <span>✦ Storage & Serving Advice</span>
                <span class="text-[#E6CA85] text-xs">▼</span>
              </summary>
              <p class="text-[#D6C2B0] mt-1 pl-2 leading-relaxed">${product.storageInfo}</p>
            </details>
          </div>

          <!-- Verified Customer Reviews Module -->
          <div class="p-3.5 rounded-xl bg-[#180804] border border-[#B8945B]/35 space-y-2.5 text-xs">
            <div class="flex items-center justify-between border-b border-[#B8945B]/20 pb-2">
              <div class="flex items-center gap-1.5">
                <span class="text-amber-400 font-bold">★</span>
                <span class="font-display font-bold text-sm text-[#FFFDF9]">${product.rating.toFixed(2)}</span>
                <span class="text-[#D6C2B0]/70 text-[11px]">(${product.reviewsCount} customer reviews)</span>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-[10px] font-serif">
                ✓ Verified Atelier Buyers
              </span>
            </div>

            <div class="space-y-2 max-h-40 overflow-y-auto pr-1">
              ${(product.reviews || [
                { author: 'Atelier Patron', city: 'Chennai', rating: 5, date: 'Recent', title: 'Exceptional Balance', comment: 'Every layer of this dessert was executed with culinary precision.' }
              ]).map(r => `
                <div class="p-2.5 rounded-lg bg-[#241109] border border-[#B8945B]/20 space-y-1 text-left">
                  <div class="flex items-center justify-between">
                    <span class="font-serif font-bold text-[#E6CA85] text-[11px]">${r.author} <span class="text-stone-400 font-normal">(${r.city || 'Chennai'})</span></span>
                    <span class="text-amber-400 text-[10px]">${'★'.repeat(r.rating || 5)}</span>
                  </div>
                  <p class="font-serif font-semibold text-[#FFFDF9] text-[11px]">${r.title}</p>
                  <p class="text-[11px] text-[#D6C2B0] italic leading-relaxed">"${r.comment}"</p>
                  <span class="text-[9px] text-stone-400 block pt-0.5">${r.date} • Verified Purchase</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Quantity & Add to Cart -->
          <div class="pt-4 border-t border-[#B8945B]/30 flex items-center gap-3">
            <div class="flex items-center border border-[#B8945B]/40 rounded-lg bg-[#180804] overflow-hidden text-xs">
              <button onclick="let q = document.getElementById('modalQty'); q.value = Math.max(1, parseInt(q.value)-1)"
                      class="px-3 py-2 text-[#FFFDF9] hover:bg-[#B8945B]/20 font-bold">-</button>
              <input type="number" id="modalQty" value="1" min="1" max="10"
                     class="w-10 text-center font-bold text-[#FFFDF9] bg-transparent focus:outline-none" />
              <button onclick="let q = document.getElementById('modalQty'); q.value = parseInt(q.value)+1"
                      class="px-3 py-2 text-[#FFFDF9] hover:bg-[#B8945B]/20 font-bold">+</button>
            </div>

            <button id="modalAddToCartBtn"
                    class="flex-1 py-3 rounded-lg btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-lg">
              <span>Add to Shopping Bag</span> • ₹${product.price}
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
        const item = {
          id: product.id,
          name: product.name,
          subtitle: product.subtitle,
          price: product.price + (selectedModifiers.extraSauce ? 50 : 0) + (selectedModifiers.iceCream ? 90 : 0) + (selectedModifiers.goldPackaging ? 120 : 0),
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
      cartStore.addItem({
        id: p.id,
        name: p.name,
        subtitle: p.subtitle,
        price: p.price,
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
      icon.className = 'text-gray-400';
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
                <span class="font-display font-bold text-sm text-[#3A1F17]">₹${(item.price * item.quantity)}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    summaryContainer.innerHTML = `
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

      <!-- Price Breakdown -->
      <div class="space-y-1.5 text-xs text-[#6B3E2E] border-t border-[#B8945B]/20 pt-3">
        <div class="flex justify-between">
          <span>Subtotal:</span>
          <span>₹${summary.subtotal}</span>
        </div>
        ${summary.discount > 0 ? `
          <div class="flex justify-between text-[#B8945B]">
            <span>Discount:</span>
            <span>-₹${summary.discount.toFixed(2)}</span>
          </div>
        ` : ''}
        <div class="flex justify-between">
          <span>Delivery:</span>
          <span>${summary.delivery === 0 ? '<span class="text-emerald-700 font-semibold">FREE</span>' : '₹' + summary.delivery}</span>
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

    cartStore.addItem({
      id: prod.id,
      name: prod.name,
      subtitle: prod.subtitle,
      price: prod.price,
      image: prod.image,
      quantity: 1
    });

    window.showToast(`"${prod.name}" added to bag!`, 'success');
  }

  toggleWishlist(productId) {
    const added = cartStore.toggleWishlist(productId);
    const prod = PRODUCTS.find(p => p.id === productId);
    if (added) {
      window.showToast(`"${prod?.name || 'Item'}" added to your Wishlist!`, 'success');
    } else {
      window.showToast(`Removed from Wishlist.`, 'info');
    }
    
    // Dynamically update matching heart icons across page
    document.querySelectorAll(`span[data-wishlist-icon="${productId}"]`).forEach(icon => {
      icon.className = added ? 'text-rose-600 scale-125' : 'text-gray-400';
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
      id: orderId,
      status: 'Preparing in Atelier',
      date: 'Today',
      deliverySlot: 'Express Artisanal — Within 45 Mins (Chennai)',
      trackingNumber: 'IN-EXP-9142-DESIO',
      address: { city: 'Chennai', street: 'Salon Concierge' },
      total: 1040
    };

    let modal = document.getElementById('orderTrackerModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'orderTrackerModal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm';
      document.body.appendChild(modal);
    }

    const city = order.address?.city || 'Chennai';
    const isDelivered = order.status === 'Delivered';

    modal.innerHTML = `
      <div class="relative w-full max-w-lg bg-[#241009] rounded-3xl border border-[#B8945B]/40 shadow-2xl p-6 sm:p-8 space-y-6">
        <div class="flex items-center justify-between border-b border-[#B8945B]/30 pb-4">
          <div class="flex items-center gap-3">
            <span class="text-2xl text-[#E6CA85]">👑</span>
            <div>
              <span class="text-[10px] tracking-widest uppercase text-[#B8945B] font-semibold block">Artisanal Consignment Tracker</span>
              <h3 class="font-mono text-base font-bold text-[#FFFDF9]">${order.id}</h3>
            </div>
          </div>
          <button onclick="document.getElementById('orderTrackerModal').classList.add('hidden')"
                  class="text-gray-400 hover:text-[#E6CA85] text-lg font-bold">✕</button>
        </div>

        <!-- Real-Time Progress Timeline -->
        <div class="p-5 rounded-2xl bg-[#1A0A06] border border-[#B8945B]/25 space-y-4">
          <div class="flex items-center justify-between text-xs">
            <span class="text-[#D6C2B0]">Status: <strong class="text-[#E6CA85]">${order.status}</strong></span>
            <span class="font-mono text-[11px] text-stone-400">${order.trackingNumber || 'IN-EXP-DESIO'}</span>
          </div>

          <!-- 4-Step Progress Track -->
          <div class="relative pt-2">
            <div class="grid grid-cols-4 gap-1 text-center text-[9px] font-serif uppercase tracking-wider text-[#D6C2B0]">
              <div class="flex flex-col items-center">
                <div class="w-7 h-7 rounded-full bg-[#B8945B] text-black flex items-center justify-center font-bold mb-1 shadow">✓</div>
                <span>Confirmed</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-7 h-7 rounded-full ${isDelivered ? 'bg-[#B8945B] text-black' : 'bg-[#E6CA85] text-black ring-4 ring-[#B8945B]/30 animate-pulse'} flex items-center justify-center font-bold mb-1 shadow">2</div>
                <span>Atelier Prep</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-7 h-7 rounded-full ${isDelivered ? 'bg-[#B8945B] text-black' : 'bg-stone-800 text-stone-400 border border-stone-700'} flex items-center justify-center font-bold mb-1">3</div>
                <span>Chamber Chill</span>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-7 h-7 rounded-full ${isDelivered ? 'bg-[#B8945B] text-black' : 'bg-stone-800 text-stone-400 border border-stone-700'} flex items-center justify-center font-bold mb-1">4</div>
                <span>Express Dispatch</span>
              </div>
            </div>
            <div class="w-full bg-stone-800 h-1 rounded-full mt-3 overflow-hidden">
              <div class="bg-gradient-to-r from-[#B8945B] to-[#E6CA85] h-full transition-all duration-700 rounded-full"
                   style="width: ${isDelivered ? '100%' : '55%'}"></div>
            </div>
          </div>

          <p class="text-xs text-[#F8F1E7]/80 pt-2 leading-relaxed border-t border-[#B8945B]/20">
            ${isDelivered 
              ? `Delivered to your destination in <strong>${city}</strong>. We hope you enjoyed every handcrafted bite!` 
              : `Our master chocolatiers are completing hand finishing and velvet icing. Temperature-controlled courier dispatch ready for <strong>${city}</strong>.`
            }
          </p>
        </div>

        <!-- Destination Details -->
        <div class="p-4 rounded-xl bg-[#200E08] border border-[#B8945B]/20 space-y-2 text-xs">
          <div class="flex justify-between items-center text-[#D6C2B0]">
            <span>Destination:</span>
            <span class="font-bold text-[#FFFDF9]">${order.address?.street || 'City Destination'}, ${city}</span>
          </div>
          <div class="flex justify-between items-center text-[#D6C2B0]">
            <span>Delivery Schedule:</span>
            <span class="font-bold text-[#E6CA85]">${order.deliverySlot}</span>
          </div>
          <div class="flex justify-between items-center text-[#D6C2B0]">
            <span>Total Paid:</span>
            <span class="font-bold text-gold-gradient font-display text-sm">₹${order.total ? order.total.toFixed(2) : '0.00'}</span>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex items-center gap-3">
          <button onclick="window.ladesioApp.reorderOrder('${order.id}'); document.getElementById('orderTrackerModal').classList.add('hidden');"
                  class="flex-1 py-2.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 shadow-lg">
            <span>🔁</span> Reorder Items
          </button>
          <button onclick="document.getElementById('orderTrackerModal').classList.add('hidden')"
                  class="px-5 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-white font-serif text-xs font-semibold">
            Close
          </button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  // ==========================================
  // PRIVÉ PROFILE & FRIENDS ATELIER HELPERS
  // ==========================================
  openEditProfileModal() {
    const data = loyaltyStore.getData();
    const { profile } = data;

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
      if (window.showToast) window.showToast('Please select an image under 5MB.', 'info');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target.result;
      const preview = document.getElementById('profileModalAvatarPreview');
      if (preview) preview.src = base64;
      const hidden = document.getElementById('editProfileAvatarValue');
      if (hidden) hidden.value = base64;
      if (window.showToast) window.showToast('Photo ready! Click Save Changes to apply.', 'info');
    };
    reader.readAsDataURL(file);
  }

  setModalAvatarPreset(url) {
    const preview = document.getElementById('profileModalAvatarPreview');
    if (preview) preview.src = url;
    const hidden = document.getElementById('editProfileAvatarValue');
    if (hidden) hidden.value = url;
  }

  saveProfileForm() {
    const nameInput = document.getElementById('editProfileName');
    const cityInput = document.getElementById('editProfileCity');
    const bioInput = document.getElementById('editProfileBio');
    const avatarInput = document.getElementById('editProfileAvatarValue');

    const updated = {
      name: nameInput ? nameInput.value.trim() : 'Guest',
      city: cityInput ? cityInput.value.trim() : 'Chennai',
      bio: bioInput ? bioInput.value.trim() : '',
      avatar: avatarInput ? avatarInput.value : ''
    };

    loyaltyStore.updateProfile(updated);
    this.closeEditProfileModal();
    this.renderAccountView();
    if (window.showToast) {
      window.showToast('Profile & Bio updated successfully!', 'success');
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

  renderLoginView(container = document.getElementById('app-main-content'), initialTab = 'signin', authMethod = 'email') {
    if (!container) return;
    this.activeAuthTab = initialTab;
    this.activeAuthMethod = authMethod;
    if (!this.mobileAuthStep) this.mobileAuthStep = 'phone';

    container.innerHTML = `
      <div class="min-h-[82vh] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center">
        <!-- Breadcrumb & Brand Subhead -->
        <div class="mb-6 sm:mb-8 text-center sm:text-left">
          <div class="flex items-center justify-center sm:justify-start gap-2 text-xs font-serif tracking-wider uppercase text-stone-400">
            <a href="#home" class="hover:text-[#E6CA85] transition-colors">Home Salon</a>
            <span class="text-[#B8945B]/60">/</span>
            <span class="text-[#E6CA85] font-semibold">La Desio Privé Club</span>
            <span class="text-[#B8945B]/60">/</span>
            <span class="text-stone-300" id="authBreadcrumbAction">${initialTab === 'signin' ? 'Sign In' : 'Privé Registration'}</span>
          </div>
        </div>

        <!-- Split-Screen Editorial Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          <!-- LEFT COLUMN: EDITORIAL BRAND SHOWCASE (Desktop Luxury Editorial) -->
          <div class="hidden lg:flex lg:col-span-5 relative rounded-3xl overflow-hidden border border-[#B8945B]/40 shadow-2xl flex-col justify-between p-8 xl:p-10 bg-cover bg-center"
               style="background-image: linear-gradient(180deg, rgba(18, 7, 4, 0.84) 0%, rgba(26, 9, 5, 0.94) 75%, rgba(18, 7, 4, 0.98) 100%), url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85');">
            
            <!-- Top Crest & Heritage -->
            <div class="space-y-6">
              <div class="flex items-center gap-3.5">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2D140C] to-[#140804] border border-[#B8945B]/60 flex items-center justify-center shadow-lg p-2">
                  <img src="Assets/Logo/emblem_transparent.png" alt="La Desio Emblem" class="w-full h-full object-contain" onerror="this.outerHTML='<span class=\'text-2xl\'>👑</span>'" />
                </div>
                <div>
                  <h3 class="font-serif text-base tracking-[0.2em] uppercase text-[#E6CA85] font-bold">La Desio Privé</h3>
                  <p class="text-[11px] text-stone-300 font-sans tracking-wide">Italian Patisserie Connoisseurs</p>
                </div>
              </div>

              <div class="space-y-2">
                <span class="text-[10px] uppercase font-serif tracking-[0.3em] text-[#B8945B] font-bold block">Exclusive Member Sanctuary</span>
                <h2 class="font-display text-3xl xl:text-4xl font-bold text-[#FFFDF9] leading-tight">
                  Where Cravings Become Creations.
                </h2>
                <p class="text-xs text-[#D6C2B0] font-serif leading-relaxed pt-1">
                  Step inside our private digital salon. Unlock reservations for limited-batch seasonal patisserie, personalized recipe storage, and white-glove delivery across our Indian flagship ateliers.
                </p>
              </div>

              <!-- Privé Benefits Checklist -->
              <div class="space-y-3.5 pt-4 border-t border-[#B8945B]/25">
                <span class="text-[10px] uppercase tracking-widest text-[#E6CA85] font-bold block">Privé Member Privileges:</span>
                
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-[#B8945B]/20 border border-[#B8945B]/50 flex items-center justify-center text-xs text-[#E6CA85] shrink-0 mt-0.5">👑</div>
                  <div>
                    <h4 class="text-xs font-serif font-bold text-white">Tier Status Elevation</h4>
                    <p class="text-[11px] text-stone-300">Advance from Amore to Élite and Royale for bespoke tasting invites & masterclasses.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-[#B8945B]/20 border border-[#B8945B]/50 flex items-center justify-center text-xs text-[#E6CA85] shrink-0 mt-0.5">✨</div>
                  <div>
                    <h4 class="text-xs font-serif font-bold text-white">+250 Welcome Points</h4>
                    <p class="text-[11px] text-stone-300">Complimentary reward balance credited instantly upon joining your Privé profile.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-[#B8945B]/20 border border-[#B8945B]/50 flex items-center justify-center text-xs text-[#E6CA85] shrink-0 mt-0.5">🎂</div>
                  <div>
                    <h4 class="text-xs font-serif font-bold text-white">Annual Birthday Patisserie</h4>
                    <p class="text-[11px] text-stone-300">A handcrafted dessert gift presented by our master chef during your birthday week.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-[#B8945B]/20 border border-[#B8945B]/50 flex items-center justify-center text-xs text-[#E6CA85] shrink-0 mt-0.5">🧪</div>
                  <div>
                    <h4 class="text-xs font-serif font-bold text-white">Private 3D Recipe Vault</h4>
                    <p class="text-[11px] text-stone-300">Save bespoke creations from the Studio and reorder with your unique recipe code.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Trust & Atelier Stamp -->
            <div class="pt-6 border-t border-[#B8945B]/30 flex items-center justify-between text-[11px] text-stone-400">
              <span class="flex items-center gap-1.5"><span class="text-emerald-400">🔒</span> 256-Bit SSL Encrypted</span>
              <span>Ateliers: Chennai • Bengaluru • Kochi</span>
            </div>
          </div>

          <!-- RIGHT COLUMN: INTERACTIVE LUXURY AUTHENTICATION CARD -->
          <div class="lg:col-span-7 flex flex-col justify-center">
            <div class="auth-glass-panel rounded-3xl p-6 sm:p-10 text-[#FFFDF9] space-y-6 relative overflow-hidden">
              
              <!-- Subtle top gold highlight line -->
              <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E6CA85] to-transparent"></div>

              <!-- Header with Brand Emblem -->
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold block">Client Portal</span>
                  <h1 class="font-display text-2xl sm:text-3xl font-bold text-white mt-0.5" id="authMainTitle">
                    ${initialTab === 'signin' ? 'Sign In to La Desio' : 'Create Privé Membership'}
                  </h1>
                  <p class="text-xs text-[#D6C2B0] mt-1 font-serif" id="authSubTitle">
                    ${initialTab === 'signin' ? 'Welcome back. Please enter your credentials to access your account.' : 'Join our exclusive patisserie circle and receive 250 complimentary welcome points.'}
                  </p>
                </div>
                <div class="w-11 h-11 rounded-2xl bg-[#140804] border border-[#B8945B]/40 flex items-center justify-center shadow-lg text-xl shrink-0 ml-3">
                  👑
                </div>
              </div>

              <!-- Primary Segment Switcher (Sign In vs Create Account) -->
              <div class="grid grid-cols-2 p-1 rounded-2xl bg-[#140804] border border-[#B8945B]/30 text-xs font-serif font-semibold">
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

              <!-- DYNAMIC CONTENT CONTAINER (Sign In or Register) -->
              <div id="authDynamicFormArea">
                ${this.renderAuthFormContent(initialTab, authMethod)}
              </div>

            </div>
          </div>

        </div>
      </div>
    `;
  }

  // Generate the internal form HTML (Sign In vs Register and Email vs Mobile)
  renderAuthFormContent(tab = 'signin', method = 'email', isModal = false) {
    if (tab === 'signin') {
      return `
        <div class="space-y-5">
          <!-- Auth Method Sub-Tabs (Email vs Mobile) -->
          <div class="flex items-center border-b border-[#B8945B]/30 pb-2 gap-6 text-xs font-serif">
            <button type="button" onclick="window.ladesioApp.switchAuthMethod('email', ${isModal})"
                    class="auth-tab-btn pb-1 ${method === 'email' ? 'active' : ''}">
              ✉️ Email & Password
            </button>
            <button type="button" onclick="window.ladesioApp.switchAuthMethod('mobile', ${isModal})"
                    class="auth-tab-btn pb-1 ${method === 'mobile' ? 'active' : ''}">
              📱 Mobile & OTP
            </button>
          </div>

          ${method === 'email' ? `
            <!-- EMAIL & PASSWORD FORM -->
            <form onsubmit="window.ladesioApp.handleEmailPasswordLogin(event, ${isModal})" class="space-y-4">
              <div class="space-y-1.5">
                <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Email Address or Connoisseur ID</label>
                <div class="relative flex items-center">
                  <span class="absolute left-3.5 text-stone-400 text-sm">✉️</span>
                  <input type="email" id="${isModal ? 'modalLoginEmailInput' : 'loginEmailInput'}" required
                         value="theroodyy@gmail.com"
                         placeholder="e.g. connoisseur@ladesio.com"
                         class="w-full pl-10 pr-4 py-3 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
                </div>
              </div>

              <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Password</label>
                  <button type="button" onclick="window.ladesioApp.openForgotPasswordModal()"
                          class="text-[11px] font-serif text-[#E6CA85] hover:text-white underline">
                    Forgot password?
                  </button>
                </div>
                <div class="relative flex items-center">
                  <span class="absolute left-3.5 text-stone-400 text-sm">🔒</span>
                  <input type="password" id="${isModal ? 'modalLoginPasswordInput' : 'loginPasswordInput'}" required
                         value="desio123"
                         placeholder="••••••••"
                         class="w-full pl-10 pr-11 py-3 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
                  <button type="button" onclick="window.ladesioApp.togglePasswordVisibility('${isModal ? 'modalLoginPasswordInput' : 'loginPasswordInput'}', '${isModal ? 'modalLoginEyeIcon' : 'loginEyeIcon'}')"
                          class="absolute right-3.5 text-stone-400 hover:text-[#E6CA85] transition-colors p-1"
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
                      class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.99]">
                <span>Sign In to Privé</span> 🔑
              </button>

              <!-- Social / Express Auth Options -->
              <div class="relative my-4 text-center">
                <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-[#B8945B]/20"></div></div>
                <span class="relative px-3 bg-[#241009] text-[10px] font-serif tracking-widest uppercase text-stone-400 font-semibold">Or Continue With</span>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <button type="button" onclick="window.ladesioApp.handleSocialLogin('Google', ${isModal})"
                        class="social-btn py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 text-xs font-sans text-stone-200 hover:text-white">
                  <svg class="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"/>
                    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
                    <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.8s.2-2.1.4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z"/>
                    <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.4C3.7 20.4 7.5 23 12 23z"/>
                  </svg>
                  <span>Google</span>
                </button>

                <button type="button" onclick="window.ladesioApp.handleSocialLogin('Apple', ${isModal})"
                        class="social-btn py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 text-xs font-sans text-stone-200 hover:text-white">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.3-9.57-11.1-20.2-14.4-31.9-3.3-11.7-4.96-22.78-4.96-33.24 0-14.58 3.75-26.69 11.25-36.33 7.5-9.64 16.9-14.53 28.2-14.67 4.58 0 9.8 1.13 15.65 3.38 5.86 2.26 9.8 3.42 11.83 3.48 1.63 0 5.76-1.25 12.39-3.75 6.63-2.5 12.06-3.63 16.29-3.39 12.83.67 23.24 5.34 31.23 14 -11.2 6.8-16.69 16.3-16.48 28.51.21 9.89 4.02 18.06 11.45 24.51 7.42 6.45 16.14 10.04 26.15 10.78-2.6 7.82-5.75 15.53-9.44 23.13zM119.22 31.85c0-7.39 2.65-14.28 7.95-20.67 5.3-6.39 11.88-10.45 19.74-12.18.22 1.09.33 2.17.33 3.26 0 7.39-2.72 14.38-8.15 20.97-5.43 6.59-12.06 10.65-19.87 12.18z"/>
                  </svg>
                  <span>Apple ID</span>
                </button>
              </div>
            </form>
          ` : `
            <!-- MOBILE & OTP FORM -->
            ${this.mobileAuthStep === 'phone' ? `
              <form onsubmit="window.ladesioApp.handleSendMobileOtp(event)" class="space-y-4">
                <div class="space-y-1.5">
                  <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Enter Your 10-Digit Mobile Number</label>
                  <div class="flex items-center rounded-xl border border-[#B8945B]/40 bg-[#120502] focus-within:border-[#E6CA85] overflow-hidden">
                    <span class="px-3.5 py-3 text-xs font-mono text-[#E6CA85] font-bold border-r border-[#B8945B]/30 bg-black/40">
                      🇮🇳 +91
                    </span>
                    <input type="tel" id="mobileAuthPhoneInput" required maxlength="10"
                           value="${this.mobileAuthPhone || '9345396700'}"
                           placeholder="93453 96700"
                           class="w-full px-3.5 py-3 bg-transparent text-white text-xs font-mono outline-none" />
                  </div>
                  <span class="text-[11px] text-stone-400">A 6-digit authentication code will be dispatched to this number.</span>
                </div>

                <button type="submit" 
                        class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2">
                  <span>Generate & Send OTP</span> 📲
                </button>
              </form>
            ` : `
              <form onsubmit="window.ladesioApp.handleVerifyMobileOtp(event)" class="space-y-4">
                <!-- Sleek SMS Simulated Banner -->
                <div class="p-3 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 shadow-xl space-y-1 text-left">
                  <div class="flex items-center justify-between text-[11px] text-[#E6CA85] font-bold">
                    <span>📲 SMS VERIFICATION SENT TO +91 ${this.mobileAuthPhone}</span>
                    <span class="text-[10px] text-stone-400">Delivered</span>
                  </div>
                  <p class="text-xs text-white font-mono">
                    Security Code: <strong class="text-[#E6CA85] font-bold text-sm tracking-wider">${this.mobileAuthOtp || '645123'}</strong>
                  </p>
                  <button type="button" onclick="document.getElementById('mobileAuthOtpInput').value = '${this.mobileAuthOtp}';"
                          class="mt-1 text-[11px] font-serif text-[#E6CA85] hover:text-white underline font-bold">
                    ⚡ Click to Auto-Fill OTP (${this.mobileAuthOtp})
                  </button>
                </div>

                <div class="space-y-1.5">
                  <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Enter 6-Digit Verification Code (OTP)</label>
                  <input type="text" id="mobileAuthOtpInput" required maxlength="6"
                         value="${this.mobileAuthOtp || ''}"
                         placeholder="••••••"
                         class="w-full px-4 py-3 rounded-xl border border-[#B8945B]/50 bg-[#120502] text-white text-base font-mono text-center tracking-[0.35em] outline-none focus:border-[#E6CA85]" />
                </div>

                <button type="submit" 
                        class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2">
                  <span>Verify & Enter Salon</span> 👑
                </button>

                <div class="flex items-center justify-between text-xs text-[#D6C2B0] pt-1">
                  <button type="button" onclick="window.ladesioApp.openMobileAuthModal('phone', '${this.mobileAuthPhone}')" class="hover:text-white">
                    ← Change Phone
                  </button>
                  <button type="button" onclick="window.ladesioApp.handleSendMobileOtp(null, '${this.mobileAuthPhone}')" class="text-[#E6CA85] font-bold hover:underline">
                    Resend Code
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
      if (area) area.innerHTML = this.renderAuthFormContent(tab, this.activeAuthMethod || 'email', true);
      const title = document.getElementById('modalAuthTitle');
      if (title) title.textContent = tab === 'signin' ? 'Sign In to La Desio' : 'Create Privé Membership';
      return;
    }

    const area = document.getElementById('authDynamicFormArea');
    if (area) area.innerHTML = this.renderAuthFormContent(tab, this.activeAuthMethod || 'email', false);

    const title = document.getElementById('authMainTitle');
    const subTitle = document.getElementById('authSubTitle');
    const breadcrumbAction = document.getElementById('authBreadcrumbAction');

    if (title) title.textContent = tab === 'signin' ? 'Sign In to La Desio' : 'Create Privé Membership';
    if (subTitle) {
      subTitle.textContent = tab === 'signin' 
        ? 'Welcome back. Please enter your credentials to access your account.' 
        : 'Join our exclusive patisserie circle and receive 250 complimentary welcome points.';
    }
    if (breadcrumbAction) breadcrumbAction.textContent = tab === 'signin' ? 'Sign In' : 'Privé Registration';

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
        window.showToast(`📲 SMS Delivered to ${res.formattedPhone}: OTP is ${res.otp}`, 'warning');
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
    } else {
      if (window.showToast) {
        window.showToast(res.message, 'warning');
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
    loyaltyStore.logout();
    this.pendingRedirectRoute = null;
    try {
      sessionStorage.removeItem('ladesio_auth_redirect');
      localStorage.removeItem('ladesio_auth_session_phone_v4');
      localStorage.removeItem('ladesio_active_user_id_v4');
      localStorage.removeItem('ladesio_profile_v2');
    } catch (e) {}
    
    // Update navigation immediately
    this.renderNavigationBadges();
    
    // Navigate to home and FORCE re-render
    this.currentRoute = 'home';
    window.location.hash = '#home';
    const mainContainer = document.getElementById('app-main-content');
    if (mainContainer) {
      this.renderHomeView(mainContainer);
    }
    
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
