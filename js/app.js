// LA DESIO - Master Application Controller & Router (INR Edition)
import { CATEGORIES, PRODUCTS, DESSERT_BUILDER_OPTIONS, TRENDING_CREATIONS, INGREDIENT_STORIES, INSTAGRAM_POSTS, FAQS, BOUTIQUES } from './data.js';
import { cartStore } from './cart.js';
import { loyaltyStore } from './loyalty.js';
import { DessertBuilder } from './builder.js';
import { CheckoutManager } from './checkout.js';

class LaDesioApp {
  constructor() {
    this.currentRoute = 'home';
    this.selectedCategory = 'all';
    this.searchQuery = '';
    this.activeFilter = {
      priceMax: 3500,
      dietary: 'all',
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
    window.ladesioApp = this;
    window.cartStore = cartStore;
    window.loyaltyStore = loyaltyStore;
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
    } else {
      handleHash();
    }
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

    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href')?.replace('#', '');
      if (href === this.currentRoute) {
        link.classList.add('text-[#B8945B]', 'font-bold');
        link.classList.remove('text-[#3A1F17]');
      } else {
        link.classList.remove('text-[#B8945B]', 'font-bold');
        link.classList.add('text-[#3A1F17]');
      }
    });

    // Mobile nav active
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
      const route = item.getAttribute('data-route');
      if (route === this.currentRoute) {
        item.classList.add('text-[#B8945B]');
        item.classList.remove('text-[#6B3E2E]');
      } else {
        item.classList.remove('text-[#B8945B]');
        item.classList.add('text-[#6B3E2E]');
      }
    });
  }

  renderCurrentView() {
    const mainContainer = document.getElementById('app-main-content');
    if (!mainContainer) return;

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
      <!-- HERO SECTION -->
      <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#F8F1E7] to-[#FFFDF9] pt-20 pb-16">
        
        <!-- Ambient Gold Glow & Flourishes -->
        <div class="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#B8945B]/10 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#3A1F17]/5 blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Hero Content -->
            <div class="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3A1F17]/5 border border-[#B8945B]/40 text-[#6B3E2E] text-xs font-serif tracking-widest uppercase">
                <span class="w-1.5 h-1.5 rounded-full bg-[#B8945B] animate-ping"></span>
                Italian Luxury Patisserie & Atelier
              </div>

              <h1 class="font-display text-4xl sm:text-5xl md:text-6xl text-[#3A1F17] leading-[1.1] tracking-tight">
                WHERE CRAVINGS<br />
                <span class="text-gold-gradient font-normal italic font-serif-elegant">BECOME CREATIONS.</span>
              </h1>

              <p class="text-sm sm:text-base text-[#6B3E2E] max-w-lg mx-auto lg:mx-0 font-sans font-light leading-relaxed">
                Discover exquisite handcrafted Italian desserts or compose a bespoke creation that is entirely and unapologetically your own.
              </p>

              <!-- Hero CTAs -->
              <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="#menu" class="w-full sm:w-auto px-8 py-4 rounded-xl btn-chocolate-luxury font-serif text-xs font-semibold tracking-widest uppercase shadow-lg text-center flex items-center justify-center gap-2">
                  <span>EXPLORE THE MENU</span> →
                </a>
                <a href="#builder" class="w-full sm:w-auto px-8 py-4 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-widest uppercase shadow-lg text-center flex items-center justify-center gap-2">
                  <span>CREATE YOUR DESSERT</span> ✨
                </a>
              </div>

              <!-- Badges -->
              <div class="pt-6 border-t border-[#B8945B]/20 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#6B3E2E]">
                <div class="flex items-center gap-2">
                  <span class="text-[#B8945B] text-base">✦</span>
                  <span>Handcrafted Daily</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[#B8945B] text-base">✦</span>
                  <span>Desio Natural Range</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[#B8945B] text-base">✦</span>
                  <span>Bespoke Studio</span>
                </div>
              </div>
            </div>

            <!-- Right Hero Visual Medal & Plated Masterpiece -->
            <div class="lg:col-span-6 relative flex items-center justify-center">
              
              <!-- Luxury Rotating Circular Seal Frame -->
              <div class="relative w-full max-w-lg aspect-square flex items-center justify-center">
                <div class="absolute inset-0 rounded-full border border-[#B8945B]/30 animate-spin" style="animation-duration: 40s;"></div>
                <div class="absolute inset-4 rounded-full border border-dashed border-[#B8945B]/20"></div>

                <!-- Main Hero Dessert Plate Display -->
                <div class="relative z-10 w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-[#B8945B]/40 group">
                  <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85"
                       alt="La Desio Signature Chocolate Creation"
                       class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                  <div class="absolute inset-0 bg-gradient-to-t from-[#23120C]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <div class="flex items-center justify-between">
                      <div>
                        <span class="text-[10px] uppercase tracking-widest text-[#E6CA85] font-serif">Signature Masterpiece</span>
                        <h3 class="font-display text-2xl text-white">Velvet Noir Royale</h3>
                        <p class="text-xs text-[#F8F1E7]/80 font-sans mt-0.5">72% Single-Origin Cocoa • Piedmont Hazelnuts • 24k Gold</p>
                      </div>
                      <button onclick="window.ladesioApp.openProductModal('desio-velvet-noir')"
                              class="px-4 py-2 rounded-lg bg-[#B8945B] text-white font-serif text-xs font-semibold hover:bg-[#E6CA85] hover:text-[#3A1F17] transition-all">
                        View
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Floating Italian Emblem Seal (Transparent Background) -->
                <div class="absolute -top-4 -right-4 w-28 h-28 z-20 drop-shadow-2xl animate-float-slow hidden sm:block">
                  <img src="Assets/Logo/emblem_transparent.png" alt="La Desio Seal" class="w-full h-full object-contain filter drop-shadow" />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- BRAND INTRODUCTION: "INDULGENCE, REIMAGINED." -->
      <section class="py-20 bg-[#3A1F17] text-[#FFFDF9] relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Editorial Chef Image -->
            <div class="lg:col-span-5 relative">
              <div class="relative rounded-2xl overflow-hidden border border-[#B8945B]/40 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=85"
                     alt="La Desio Master Pastry Chef"
                     class="w-full h-[450px] object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/40 backdrop-blur border border-white/10 text-xs">
                  <p class="font-serif italic text-[#E6CA85]">"Dessert is not just a recipe; it is an intimate expression of desire and artistry."</p>
                  <p class="text-[10px] text-white/70 mt-1 uppercase tracking-wider">— Chef Alessandro, Milan Atelier</p>
                </div>
              </div>
            </div>

            <!-- Right Introduction Narrative -->
            <div class="lg:col-span-7 space-y-6">
              <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Artisanal Philosophy</span>
              <h2 class="font-display text-3xl sm:text-4xl md:text-5xl text-[#FFFDF9] leading-tight">
                INDULGENCE,<br />
                <span class="text-gold-gradient font-serif-elegant font-normal italic">REIMAGINED.</span>
              </h2>

              <p class="text-sm sm:text-base text-[#F8F1E7]/80 leading-relaxed font-light">
                At La Desio, dessert is far more than a sweet ending. It is a creation thoughtfully crafted around your taste, your choices, and your desire to indulge beautifully.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div class="p-4 rounded-xl bg-[#23120C]/80 border border-[#B8945B]/30">
                  <span class="text-2xl mb-2 block">🇮🇹</span>
                  <h4 class="font-serif text-sm font-bold text-[#E6CA85]">Italian Elegance</h4>
                  <p class="text-[11px] text-[#F8F1E7]/70 mt-1">Inspired by grand Milanese and Venetian patisseries.</p>
                </div>
                <div class="p-4 rounded-xl bg-[#23120C]/80 border border-[#B8945B]/30">
                  <span class="text-2xl mb-2 block">✨</span>
                  <h4 class="font-serif text-sm font-bold text-[#E6CA85]">Bespoke Customization</h4>
                  <p class="text-[11px] text-[#F8F1E7]/70 mt-1">Infinite combinations crafted to order in real-time.</p>
                </div>
                <div class="p-4 rounded-xl bg-[#23120C]/80 border border-[#B8945B]/30">
                  <span class="text-2xl mb-2 block">🌿</span>
                  <h4 class="font-serif text-sm font-bold text-[#E6CA85]">Desio Natural</h4>
                  <p class="text-[11px] text-[#F8F1E7]/70 mt-1">Less refined sweetness with real fruits and dates.</p>
                </div>
              </div>

              <div class="pt-4">
                <a href="#menu" class="inline-flex items-center gap-2 text-xs font-serif tracking-widest text-[#E6CA85] hover:text-white uppercase transition-colors">
                  <span>DISCOVER THE LA DESIO COLLECTION</span> →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- SIGNATURE DESSERTS COLLECTION -->
      <section class="py-20 bg-[#FFFDF9]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Haute Patisserie</span>
            <h2 class="font-display text-3xl sm:text-4xl text-[#3A1F17] mt-1">THE LA DESIO COLLECTION</h2>
            <div class="w-16 h-[1px] bg-[#B8945B] mx-auto mt-3 mb-4"></div>
            <p class="text-xs sm:text-sm text-[#6B3E2E]">
              Our revered signature creations, each meticulously balanced by master pastry artisans using single-origin cacao and Mediterranean ingredients.
            </p>
          </div>

          <!-- Product Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            ${signatureProducts.map(product => this.renderProductCard(product)).join('')}
          </div>

          <div class="text-center mt-12">
            <a href="#menu" class="inline-block px-10 py-3.5 rounded-xl btn-chocolate-luxury font-serif text-xs font-semibold tracking-widest uppercase shadow-md">
              VIEW COMPLETE MENU CATALOG
            </a>
          </div>

        </div>
      </section>

      <!-- INTERACTIVE CREATE YOUR DESSERT STUDIO TEASER -->
      <section class="py-20 bg-gradient-to-b from-[#F8F1E7] via-[#FFFDF9] to-[#F8F1E7] relative overflow-hidden" id="home-builder-section">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">The Bespoke Studio</span>
            <h2 class="font-display text-3xl sm:text-4xl text-[#3A1F17] mt-1">CREATE YOUR OWN DESIO</h2>
            <div class="w-16 h-[1px] bg-[#B8945B] mx-auto mt-3 mb-4"></div>
            <p class="text-xs sm:text-sm text-[#6B3E2E]">
              Why choose one combination when you can create your own? Select your base, flavor, filling, toppings, sauce, and name your masterpiece.
            </p>
          </div>

          <!-- Mounted Interactive Dessert Studio Component -->
          <div id="homeDessertStudioMount"></div>

        </div>
      </section>

      <!-- DESIO NATURAL COLLECTION SPOTLIGHT -->
      <section class="py-20 bg-[#FFFDF9] border-t border-[#B8945B]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            <div class="lg:col-span-7 space-y-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A9A86]/10 text-[#50664C] text-xs font-serif tracking-wider uppercase border border-[#8A9A86]/30">
                <span>🌿</span> Ingredient-Conscious Patisserie
              </div>
              <h2 class="font-display text-3xl sm:text-4xl text-[#3A1F17]">
                THE DESIO NATURAL COLLECTION
              </h2>
              <p class="font-serif-elegant italic text-lg text-[#B8945B]">"Thoughtfully crafted. Naturally inspired."</p>
              <p class="text-xs sm:text-sm text-[#6B3E2E] leading-relaxed">
                A collection created for those who want to be more mindful of their ingredients without giving up the pleasure of dessert. Made without artificial sweeteners and with reduced reliance on refined sugar, utilizing real fruit purées, Medjool dates, and single-origin raw cacao.
              </p>

              <!-- Key Ingredient-Conscious Pillars -->
              <div class="grid grid-cols-2 gap-3 pt-2 text-xs text-[#3A1F17]">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#8A9A86]"></span>
                  <span>No Artificial Sweeteners</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#8A9A86]"></span>
                  <span>Naturally Sweet Ingredients</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#8A9A86]"></span>
                  <span>Real Mountain Fruit Purées</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#8A9A86]"></span>
                  <span>Pure Patisserie Craft</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 text-right">
              <a href="#natural" class="inline-block px-8 py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-widest uppercase shadow-md">
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
      <section class="py-20 bg-[#F8F1E7]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Purity & Origins</span>
            <h2 class="font-display text-3xl sm:text-4xl text-[#3A1F17] mt-1">WHAT GOES INTO YOUR DESIO?</h2>
            <div class="w-16 h-[1px] bg-[#B8945B] mx-auto mt-3 mb-4"></div>
            <p class="text-xs sm:text-sm text-[#6B3E2E]">
              We source single-origin estates and pristine harvests so every bite reveals authentic depth.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${INGREDIENT_STORIES.map(story => `
              <div class="bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#B8945B]/20 shadow-md luxury-card">
                <div class="h-44 overflow-hidden zoom-container relative">
                  <img src="${story.image}" alt="${story.title}" class="w-full h-full object-cover" />
                  <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-[10px] text-[#E6CA85] font-serif uppercase tracking-wider">
                    ${story.tag}
                  </span>
                </div>
                <div class="p-5 space-y-2">
                  <h4 class="font-serif text-base font-bold text-[#3A1F17]">${story.title}</h4>
                  <p class="text-xs text-[#6B3E2E] leading-relaxed">${story.description}</p>
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </section>

      <!-- TRENDING CUSTOMER CREATIONS -->
      <section class="py-20 bg-[#FFFDF9]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Community Atelier</span>
            <h2 class="font-display text-3xl sm:text-4xl text-[#3A1F17] mt-1">CREATIONS WORTH SHARING</h2>
            <div class="w-16 h-[1px] bg-[#B8945B] mx-auto mt-3 mb-4"></div>
            <p class="text-xs sm:text-sm text-[#6B3E2E]">
              Discover popular recipes composed by clients in our bespoke studio. Try their recipe with a single tap.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${TRENDING_CREATIONS.map(item => `
              <div class="bg-[#FFFDF9] rounded-2xl border border-[#B8945B]/30 p-5 shadow-lg flex flex-col justify-between space-y-4 luxury-card">
                <div>
                  <div class="flex items-center gap-3 mb-3">
                    <img src="${item.creatorAvatar}" alt="${item.creator}" class="w-8 h-8 rounded-full object-cover border border-[#B8945B]" />
                    <div>
                      <h5 class="font-serif text-sm font-bold text-[#3A1F17]">${item.name}</h5>
                      <span class="text-[10px] text-[#6B3E2E]">Created by ${item.creator}</span>
                    </div>
                  </div>

                  <div class="relative h-40 rounded-xl overflow-hidden mb-3 border border-[#B8945B]/20">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" />
                    <span class="absolute bottom-2 right-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded-full text-[10px] text-[#3A1F17] font-semibold shadow">
                      ❤️ ${item.likes}
                    </span>
                  </div>

                  <p class="text-[11px] text-[#6B3E2E] line-clamp-2 italic">"${item.recipe}"</p>
                </div>

                <div class="pt-2 border-t border-[#B8945B]/20 flex items-center justify-between">
                  <span class="font-display font-bold text-sm text-[#3A1F17]">₹${item.price}</span>
                  <button onclick='window.ladesioApp.cloneTrendingCreation(${JSON.stringify(item.config).replace(/'/g, "\\'")})'
                          class="px-3.5 py-1.5 rounded-lg btn-chocolate-luxury text-[11px] font-serif font-semibold tracking-wider">
                    TRY THIS CREATION
                  </button>
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </section>

      <!-- LUXURY GIFTING SECTION -->
      <section class="py-20 bg-[#3A1F17] text-[#FFFDF9] relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-6 space-y-6">
              <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Exquisite Gestures</span>
              <h2 class="font-display text-3xl sm:text-4xl md:text-5xl text-[#FFFDF9]">
                A LITTLE DESIO<br />
                <span class="text-gold-gradient font-serif-elegant font-normal italic">FOR SOMEONE SPECIAL.</span>
              </h2>
              <p class="text-xs sm:text-sm text-[#F8F1E7]/80 leading-relaxed font-light">
                Present extraordinary moments. Our velvet touch gift hampers, gold seal wax accents, and custom calligraphy cards transform dessert into an unforgettable memory.
              </p>

              <div class="flex flex-wrap gap-2 text-xs">
                <span class="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20">🎁 Dessert Chests</span>
                <span class="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20">✨ Celebration Boxes</span>
                <span class="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20">🌹 Couple's Collection</span>
                <span class="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20">✉️ Digital Gift Cards</span>
              </div>

              <div class="pt-4">
                <a href="#gifting" class="inline-block px-8 py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-widest uppercase shadow-xl">
                  EXPLORE GIFTING COLLECTION →
                </a>
              </div>
            </div>

            <div class="lg:col-span-6 relative">
              <div class="relative rounded-2xl overflow-hidden border-2 border-[#B8945B] shadow-2xl">
                <img src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=85"
                     alt="La Desio Royale Hamper"
                     class="w-full h-[420px] object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span class="text-xs text-[#E6CA85] font-serif uppercase tracking-widest">The Flagship Presentation</span>
                  <h4 class="font-display text-2xl text-white">The Desio Royale Hamper</h4>
                  <p class="text-xs text-white/80 mt-1">6-Piece Handcrafted Signature Patisserie Selection</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- INSTAGRAM / SOCIAL SECTION -->
      <section class="py-20 bg-[#FFFDF9]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">@LADESIO.OFFICIAL</span>
            <h2 class="font-display text-3xl sm:text-4xl text-[#3A1F17] mt-1">FOLLOW THE DESIO</h2>
            <div class="w-16 h-[1px] bg-[#B8945B] mx-auto mt-3 mb-4"></div>
            <p class="text-xs sm:text-sm text-[#6B3E2E]">
              Tag #WhereCravingsBecomeCreations to be featured on our Milan salon gallery.
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            ${INSTAGRAM_POSTS.map(post => `
              <div class="relative aspect-square rounded-xl overflow-hidden group cursor-pointer border border-[#B8945B]/20">
                <img src="${post.image}" alt="Social post" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-white text-center">
                  <span class="text-base mb-1">❤️ ${post.likes}</span>
                  <p class="text-[9px] line-clamp-3">${post.caption}</p>
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </section>
    `;

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
  // MENU CATALOG VIEW
  // ==========================================
  renderMenuView(container) {
    const filteredProducts = PRODUCTS.filter(p => {
      // Category filter
      if (this.selectedCategory !== 'all') {
        if (this.selectedCategory === 'signature' && p.category !== 'signature') return false;
        if (this.selectedCategory === 'natural' && p.category !== 'natural') return false;
        if (this.selectedCategory === 'gifting' && p.category !== 'gifting') return false;
        if (!['signature', 'natural', 'gifting'].includes(this.selectedCategory)) {
          if (p.category !== this.selectedCategory && p.secondaryCategory !== this.selectedCategory) return false;
        }
      }

      // Dietary filter
      if (this.activeFilter.dietary !== 'all') {
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
      <div class="bg-[#F8F1E7]/50 py-12 border-b border-[#B8945B]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Patisserie Catalog</span>
          <h1 class="font-display text-4xl sm:text-5xl text-[#3A1F17] mt-1">THE DESIO MENU</h1>
          <div class="w-16 h-[1px] bg-[#B8945B] mx-auto mt-3 mb-3"></div>
          <p class="text-xs sm:text-sm text-[#6B3E2E] max-w-xl mx-auto">
            Explore our curated menu of handcrafted cakes, tarts, cold desserts, and mindful creations.
          </p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <!-- Category Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          ${CATEGORIES.map(cat => `
            <button onclick="window.ladesioApp.setMenuCategory('${cat.id}')"
                    class="px-4 py-2 rounded-xl text-xs font-serif font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${this.selectedCategory === cat.id ? 'bg-[#3A1F17] text-[#E6CA85] shadow-md ring-2 ring-[#B8945B]/30' : 'bg-[#FFFDF9] text-[#6B3E2E] border border-[#B8945B]/20 hover:border-[#B8945B]/50'}">
              <span>${cat.name}</span>
            </button>
          `).join('')}
        </div>

        <!-- Filter Bar & Sorting -->
        <div class="p-4 rounded-2xl bg-[#FFFDF9] border border-[#B8945B]/30 shadow-sm mb-8 flex flex-wrap items-center justify-between gap-4 text-xs">
          
          <!-- Dietary Selection -->
          <div class="flex items-center gap-2">
            <span class="font-semibold text-[#3A1F17]">Dietary:</span>
            <select onchange="window.ladesioApp.setDietaryFilter(this.value)"
                    class="px-3 py-1.5 rounded-lg border border-[#B8945B]/40 bg-white text-[#3A1F17] focus:outline-none">
              <option value="all" ${this.activeFilter.dietary === 'all' ? 'selected' : ''}>All Selections</option>
              <option value="no added refined sugar" ${this.activeFilter.dietary === 'no added refined sugar' ? 'selected' : ''}>No Added Refined Sugar</option>
              <option value="vegetarian" ${this.activeFilter.dietary === 'vegetarian' ? 'selected' : ''}>Vegetarian</option>
              <option value="eggless" ${this.activeFilter.dietary === 'eggless' ? 'selected' : ''}>Eggless</option>
              <option value="vegan" ${this.activeFilter.dietary === 'vegan' ? 'selected' : ''}>Vegan / Dairy-Free</option>
              <option value="gluten-free" ${this.activeFilter.dietary === 'gluten-free' ? 'selected' : ''}>Gluten-Free</option>
            </select>
          </div>

          <!-- Price Max Slider -->
          <div class="flex items-center gap-2">
            <span class="font-semibold text-[#3A1F17]">Max Price:</span>
            <span class="font-bold text-[#B8945B]">₹${this.activeFilter.priceMax}</span>
            <input type="range" min="300" max="3500" step="100" value="${this.activeFilter.priceMax}"
                   oninput="window.ladesioApp.setPriceFilter(this.value)"
                   class="w-24 sm:w-32 accent-[#3A1F17]" />
          </div>

          <!-- Sort Select -->
          <div class="flex items-center gap-2">
            <span class="font-semibold text-[#3A1F17]">Sort:</span>
            <select onchange="window.ladesioApp.setSortFilter(this.value)"
                    class="px-3 py-1.5 rounded-lg border border-[#B8945B]/40 bg-white text-[#3A1F17] focus:outline-none">
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
          <div class="text-center py-16 bg-[#FFFDF9] rounded-2xl border border-[#B8945B]/20 p-8">
            <div class="text-3xl mb-2">🍰</div>
            <h4 class="font-display text-xl text-[#3A1F17]">No desserts match your selected filters</h4>
            <p class="text-xs text-[#6B3E2E] mt-1 mb-4">Try clearing some dietary filters or widening your price range.</p>
            <button onclick="window.ladesioApp.resetFilters()" class="px-6 py-2 rounded-lg btn-chocolate-luxury font-serif text-xs">
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
      <div class="bg-[#F8F1E7]/50 py-12 border-b border-[#B8945B]/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Bespoke Patisserie Studio</span>
          <h1 class="font-display text-4xl sm:text-5xl text-[#3A1F17] mt-1">CREATE YOUR DESSERT</h1>
          <div class="w-16 h-[1px] bg-[#B8945B] mx-auto mt-3 mb-3"></div>
          <p class="text-xs sm:text-sm text-[#6B3E2E] max-w-xl mx-auto">
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
      <div class="bg-gradient-to-b from-[#8A9A86]/15 via-[#F8F1E7] to-[#FFFDF9] py-16 border-b border-[#8A9A86]/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8A9A86]/20 text-[#3C4F38] text-xs font-serif tracking-wider uppercase mb-3">
            <span>🌿</span> The Mindful Patisserie Collection
          </div>
          <h1 class="font-display text-4xl sm:text-6xl text-[#3A1F17]">DESIO NATURAL</h1>
          <p class="font-serif-elegant italic text-xl text-[#B8945B] mt-2">"Thoughtfully crafted. Naturally inspired."</p>
          <div class="w-16 h-[1px] bg-[#B8945B] mx-auto mt-4 mb-4"></div>
          <p class="text-xs sm:text-sm text-[#6B3E2E] max-w-2xl mx-auto leading-relaxed">
            Created for those who want to be more mindful of ingredients without sacrificing the pure indulgence of authentic dessert. Made without artificial sweeteners and with reduced reliance on refined sugars.
          </p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        <!-- Educational Pillars Banner -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl bg-[#FFFDF9] border border-[#8A9A86]/30 shadow-md space-y-2">
            <span class="text-3xl">🍓</span>
            <h4 class="font-serif text-base font-bold text-[#3A1F17]">Real Fruit & Purées</h4>
            <p class="text-xs text-[#6B3E2E] leading-relaxed">
              Natural flavor from mountain strawberries, wild blueberries, and Ratnagiri Alphonso mangoes without synthetic aromas.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFFDF9] border border-[#8A9A86]/30 shadow-md space-y-2">
            <span class="text-3xl">🌴</span>
            <h4 class="font-serif text-base font-bold text-[#3A1F17]">Naturally Sweet Ingredients</h4>
            <p class="text-xs text-[#6B3E2E] leading-relaxed">
              Sweetened with sun-cured Medjool dates, wild raw blossom honey, and concentrated fruit reductions.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFFDF9] border border-[#8A9A86]/30 shadow-md space-y-2">
            <span class="text-3xl">🍫</span>
            <h4 class="font-serif text-base font-bold text-[#3A1F17]">High-Percentage Cacao</h4>
            <p class="text-xs text-[#6B3E2E] leading-relaxed">
              80% Single-origin raw Peruvian cacao provides rich cocoa notes with less refined sweetness.
            </p>
          </div>
        </div>

        <!-- Natural Products Grid -->
        <div>
          <div class="text-center max-w-xl mx-auto mb-10">
            <h3 class="font-display text-2xl sm:text-3xl text-[#3A1F17]">The Natural Atelier Menu</h3>
            <p class="text-xs text-[#6B3E2E] mt-1">Every recipe is clearly transparent about ingredients and allergens.</p>
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
            <div class="bg-[#FFFDF9] rounded-2xl border border-[#B8945B]/30 p-6 shadow-xl flex flex-col md:flex-row gap-6 luxury-card">
              <div class="w-full md:w-1/2 h-64 rounded-xl overflow-hidden relative">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#3A1F17]/90 text-[#E6CA85] text-[10px] font-serif uppercase tracking-wider">
                  ${p.badge}
                </span>
              </div>
              <div class="w-full md:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <h3 class="font-display text-2xl text-[#3A1F17]">${p.name}</h3>
                  <p class="text-xs text-[#B8945B] font-serif italic">${p.subtitle}</p>
                  <p class="text-xs text-[#6B3E2E] mt-2 leading-relaxed">${p.description}</p>
                </div>
                <div class="pt-4 border-t border-[#B8945B]/20 flex items-center justify-between">
                  <div>
                    <span class="text-xs text-gray-400 line-through ${p.originalPrice ? '' : 'hidden'}">₹${p.originalPrice}</span>
                    <span class="font-display font-bold text-xl text-[#3A1F17]">₹${p.price}</span>
                  </div>
                  <button onclick="window.ladesioApp.quickAddToCart('${p.id}')"
                          class="px-5 py-2 rounded-lg btn-gold-luxury font-serif text-xs font-semibold">
                    Order Gift Box
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Digital Gift Card Studio -->
        <div class="bg-[#F8F1E7] rounded-3xl border border-[#B8945B]/40 p-8 shadow-xl">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-6 space-y-4">
              <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Instant E-Gifting</span>
              <h3 class="font-display text-3xl text-[#3A1F17]">La Desio Digital Gift Pass</h3>
              <p class="text-xs text-[#6B3E2E] leading-relaxed">
                Allow your loved ones to design their own dream dessert in our studio. Delivered instantly via email with your bespoke message.
              </p>

              <div class="space-y-3 pt-2 text-xs">
                <div>
                  <label class="block font-semibold text-[#3A1F17] mb-1">Select Gift Amount</label>
                  <div class="flex gap-2">
                    <button class="px-4 py-2 rounded-lg border border-[#B8945B] bg-[#3A1F17] text-[#E6CA85] font-bold">₹1,000</button>
                    <button class="px-4 py-2 rounded-lg border border-[#B8945B]/40 bg-white text-[#3A1F17] font-bold hover:bg-[#F8F1E7]">₹2,500</button>
                    <button class="px-4 py-2 rounded-lg border border-[#B8945B]/40 bg-white text-[#3A1F17] font-bold hover:bg-[#F8F1E7]">₹5,000</button>
                  </div>
                </div>

                <div>
                  <label class="block font-semibold text-[#3A1F17] mb-1">Recipient Email</label>
                  <input type="email" placeholder="recipient@example.com"
                         class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white text-[#3A1F17]" />
                </div>

                <div>
                  <label class="block font-semibold text-[#3A1F17] mb-1">Personal Greeting</label>
                  <textarea rows="2" placeholder="To someone who deserves something truly exquisite..."
                            class="w-full p-2.5 rounded-lg border border-[#B8945B]/40 bg-white text-[#3A1F17] font-serif text-xs"></textarea>
                </div>

                <button onclick="window.showToast('Gift Pass added to bag!', 'success')"
                        class="w-full py-3 rounded-lg btn-chocolate-luxury font-serif text-xs font-semibold tracking-wider">
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
            <div class="bg-[#FFFDF9] rounded-2xl border border-[#B8945B]/30 overflow-hidden shadow-lg luxury-card">
              <img src="${b.image}" alt="${b.city}" class="w-full h-44 object-cover" />
              <div class="p-5 space-y-2 text-xs">
                <h4 class="font-serif text-base font-bold text-[#3A1F17]">${b.city}</h4>
                <p class="text-[#6B3E2E] leading-relaxed">${b.address}</p>
                <p class="text-gray-500 pt-1"><strong>Hours:</strong> ${b.hours}</p>
                <p class="text-[#B8945B] font-semibold">📞 ${b.phone}</p>
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
    const data = loyaltyStore.getData();
    const { profile, creations, orders } = data;

    container.innerHTML = `
      <div class="bg-[#3A1F17] text-[#FFFDF9] py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#B8945B] to-[#E6CA85] p-0.5 shadow-xl">
                <div class="w-full h-full rounded-full bg-[#23120C] flex items-center justify-center text-2xl font-serif text-[#E6CA85]">
                  AS
                </div>
              </div>
              <div>
                <span class="text-[10px] uppercase tracking-widest text-[#E6CA85] font-serif">La Desio Privé Member</span>
                <h2 class="font-display text-2xl sm:text-3xl text-white">${profile.name}</h2>
                <p class="text-xs text-[#F8F1E7]/70">${profile.email} • Client since ${profile.joinedDate}</p>
              </div>
            </div>

            <!-- Tier Status Pill -->
            <div class="p-4 rounded-2xl bg-[#23120C] border border-[#B8945B] text-center min-w-[200px]">
              <span class="text-[10px] text-[#E6CA85] uppercase tracking-widest font-semibold block">Current Tier</span>
              <span class="font-display text-xl text-gold-gradient font-bold">✨ ${profile.tier} Member</span>
              <div class="w-full bg-black/40 h-1.5 rounded-full mt-2 overflow-hidden">
                <div class="bg-[#B8945B] h-full" style="width: ${(profile.points / profile.nextTierPoints) * 100}%"></div>
              </div>
              <span class="text-[9px] text-[#F8F1E7]/60 block mt-1">${profile.points} / ${profile.nextTierPoints} Points to Royale</span>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <!-- Left Column: My Custom Creations Studio Hub -->
          <div class="lg:col-span-7 space-y-8">
            
            <div class="bg-[#FFFDF9] rounded-2xl border border-[#B8945B]/30 p-6 shadow-xl">
              <div class="flex items-center justify-between border-b border-[#B8945B]/20 pb-4 mb-6">
                <div>
                  <h3 class="font-display text-xl text-[#3A1F17]">My Saved Creations</h3>
                  <p class="text-xs text-[#6B3E2E]">Your personal bespoke recipes designed in the studio.</p>
                </div>
                <a href="#builder" class="px-3.5 py-1.5 rounded-lg btn-gold-luxury font-serif text-xs font-semibold">
                  + New Creation
                </a>
              </div>

              ${creations.length > 0 ? `
                <div class="space-y-4">
                  ${creations.map(creation => `
                    <div class="p-4 rounded-xl bg-[#F8F1E7]/60 border border-[#B8945B]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div class="flex items-center gap-3">
                        <img src="${creation.image}" alt="${creation.name}" class="w-14 h-14 rounded-lg object-cover border border-[#B8945B]/30" />
                        <div>
                          <h4 class="font-serif font-bold text-sm text-[#3A1F17]">${creation.name}</h4>
                          <p class="text-[11px] text-[#6B3E2E] line-clamp-1">${creation.recipe}</p>
                          <span class="text-[10px] text-gray-400">Created: ${creation.createdDate}</span>
                        </div>
                      </div>

                      <div class="flex items-center gap-2">
                        <button onclick='window.ladesioApp.cloneTrendingCreation(${JSON.stringify(creation.config).replace(/'/g, "\\'")})'
                                class="px-3 py-1.5 rounded-lg border border-[#B8945B] text-[#3A1F17] hover:bg-white text-xs font-serif font-semibold">
                          Edit
                        </button>
                        <button onclick='window.ladesioApp.quickOrderCustomCreation(${JSON.stringify(creation).replace(/'/g, "\\'")})'
                                class="px-3.5 py-1.5 rounded-lg btn-chocolate-luxury text-xs font-serif font-semibold">
                          Reorder (₹${creation.price})
                        </button>
                        <button onclick="window.loyaltyStore.deleteCreation('${creation.id}')"
                                class="text-gray-400 hover:text-red-500 text-sm p-1">
                          🗑️
                        </button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              ` : `
                <p class="text-xs text-center text-[#6B3E2E] py-8">You haven't saved any bespoke desserts yet. Visit the Create Studio!</p>
              `}
            </div>

            <!-- Order History -->
            <div class="bg-[#FFFDF9] rounded-2xl border border-[#B8945B]/30 p-6 shadow-xl">
              <h3 class="font-display text-xl text-[#3A1F17] border-b border-[#B8945B]/20 pb-4 mb-6">Order History</h3>
              
              <div class="space-y-4">
                ${orders.map(order => `
                  <div class="p-4 rounded-xl bg-[#F8F1E7]/40 border border-[#B8945B]/20 space-y-2 text-xs">
                    <div class="flex justify-between items-center font-bold">
                      <span class="font-mono text-[#3A1F17]">${order.id}</span>
                      <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px]">${order.status}</span>
                    </div>
                    <p class="text-[#6B3E2E]">Placed on ${order.date} • ${order.deliverySlot}</p>
                    <div class="border-t border-[#B8945B]/20 pt-2 flex justify-between items-center font-display font-bold">
                      <span>Total Paid:</span>
                      <span class="text-[#B8945B]">₹${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>

          <!-- Right Column: Loyalty Rewards & Addresses -->
          <div class="lg:col-span-5 space-y-8">
            
            <!-- Privé Privileges -->
            <div class="bg-gradient-to-br from-[#3A1F17] to-[#23120C] text-[#FFFDF9] rounded-2xl border border-[#B8945B] p-6 shadow-xl space-y-4">
              <span class="text-[10px] uppercase tracking-widest text-[#E6CA85] font-serif">Exclusive Benefits</span>
              <h3 class="font-display text-2xl text-white">Privé Élite Tier</h3>
              
              <ul class="space-y-2.5 text-xs text-[#F8F1E7]/80">
                <li class="flex items-center gap-2">
                  <span class="text-[#E6CA85]">✦</span>
                  <span>Complimentary gold leaf finish on custom orders</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-[#E6CA85]">✦</span>
                  <span>Priority atelier preparation window</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-[#E6CA85]">✦</span>
                  <span>Invitation to seasonal secret tastings</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-[#E6CA85]">✦</span>
                  <span>Birthday luxury complimentary dessert box</span>
                </li>
              </ul>
            </div>

            <!-- Saved Addresses -->
            <div class="bg-[#FFFDF9] rounded-2xl border border-[#B8945B]/30 p-6 shadow-xl space-y-4">
              <h3 class="font-display text-lg text-[#3A1F17]">Saved Delivery Addresses</h3>
              <div class="space-y-3 text-xs">
                ${profile.savedAddresses.map(addr => `
                  <div class="p-3 rounded-xl border ${addr.isDefault ? 'border-[#B8945B] bg-[#F8F1E7]' : 'border-gray-200'}">
                    <p class="font-bold text-[#3A1F17]">${addr.name} ${addr.isDefault ? '<span class="text-[10px] text-[#B8945B]">(Default)</span>' : ''}</p>
                    <p class="text-[#6B3E2E] mt-0.5">${addr.address}, ${addr.city}, ${addr.country}</p>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>

        </div>

      </div>
    `;
  }

  // ==========================================
  // CHECKOUT PAGE VIEW
  // ==========================================
  renderCheckoutView(container) {
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
      <div class="bg-[#FFFDF9] rounded-2xl border border-[#B8945B]/25 overflow-hidden shadow-lg flex flex-col justify-between luxury-card group">
        
        <!-- Image Container -->
        <div class="relative h-64 overflow-hidden zoom-container cursor-pointer"
             onclick="window.ladesioApp.openProductModal('${product.id}')">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span class="text-white text-xs font-serif tracking-wider">Tap to View Details & Modifiers</span>
          </div>

          <!-- Badge -->
          <span class="absolute top-3 left-3 px-3 py-1 rounded-full ${isNatural ? 'bg-[#8A9A86] text-white' : 'bg-[#3A1F17] text-[#E6CA85]'} text-[10px] font-serif uppercase tracking-wider shadow">
            ${product.badge}
          </span>

          <!-- Wishlist Heart Button -->
          <button onclick="event.stopPropagation(); window.ladesioApp.toggleWishlist('${product.id}')"
                  class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur border border-[#B8945B]/40 flex items-center justify-center text-sm transition-all hover:scale-110 shadow"
                  title="Save to Wishlist">
            <span data-wishlist-icon="${product.id}" class="${inWishlist ? 'text-rose-600 scale-125' : 'text-gray-400'}">♥</span>
          </button>
        </div>

        <!-- Card Content -->
        <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <div class="flex items-center justify-between text-xs text-[#B8945B] font-medium mb-1">
              <span>★ ${product.rating.toFixed(2)} (${product.reviewsCount})</span>
              <span class="text-gray-400 font-sans">${product.prepTime.split(' ')[0]} mins</span>
            </div>

            <h3 class="font-display text-xl text-[#3A1F17] group-hover:text-[#B8945B] transition-colors">
              ${product.name}
            </h3>

            <p class="text-xs text-[#B8945B] font-serif italic mt-0.5">
              ${product.subtitle}
            </p>

            <p class="text-xs text-[#6B3E2E] mt-2 line-clamp-2 leading-relaxed font-light">
              ${product.description}
            </p>

            <!-- Dietary Tag Chips -->
            <div class="flex flex-wrap gap-1 mt-3">
              ${product.dietary.slice(0, 2).map(d => `
                <span class="px-2 py-0.5 rounded-md bg-[#F8F1E7] text-[10px] text-[#6B3E2E] border border-[#B8945B]/20">
                  ${d}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Action Row -->
          <div class="pt-4 border-t border-[#B8945B]/20 flex items-center justify-between gap-2">
            <div>
              ${product.originalPrice ? `<span class="text-[11px] text-gray-400 line-through mr-1">₹${product.originalPrice}</span>` : ''}
              <span class="font-display font-bold text-lg text-[#3A1F17]">₹${product.price}</span>
            </div>

            <div class="flex items-center gap-1.5">
              <button onclick="window.ladesioApp.openProductModal('${product.id}')"
                      class="px-3 py-1.5 rounded-lg border border-[#B8945B] text-[#3A1F17] hover:bg-[#F8F1E7] text-xs font-serif font-semibold">
                Customize
              </button>
              <button onclick="window.ladesioApp.quickAddToCart('${product.id}')"
                      class="px-3.5 py-1.5 rounded-lg btn-chocolate-luxury text-xs font-serif font-semibold">
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
    const product = PRODUCTS.find(p => p.id === productId);
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
            <div class="flex items-center justify-between text-xs text-[#B8945B] mb-1">
              <span>★ ${product.rating.toFixed(2)} (${product.reviewsCount} verified reviews)</span>
              <span class="text-gray-500 font-mono">${product.servingSize}</span>
            </div>
            <h2 class="font-display text-2xl sm:text-3xl text-[#3A1F17]">${product.name}</h2>
            <p class="text-xs font-serif italic text-[#B8945B]">${product.subtitle}</p>
            <p class="font-display text-2xl text-[#3A1F17] font-bold mt-2">₹${product.price}</p>
          </div>

          <p class="text-xs text-[#6B3E2E] leading-relaxed">${product.description}</p>

          <!-- Artisanal Modifiers -->
          <div class="p-4 rounded-xl bg-[#F8F1E7] border border-[#B8945B]/30 space-y-2.5 text-xs">
            <h4 class="font-serif font-bold text-[#3A1F17]">Custom Patisserie Modifiers</h4>
            
            <label class="flex items-center justify-between cursor-pointer">
              <span class="flex items-center gap-2 text-[#6B3E2E]">
                <input type="checkbox" id="modExtraSauce" class="rounded text-[#3A1F17]" />
                Extra Warm Chocolate / Berry Coulis
              </span>
              <span class="font-semibold text-[#B8945B]">+₹50</span>
            </label>

            <label class="flex items-center justify-between cursor-pointer">
              <span class="flex items-center gap-2 text-[#6B3E2E]">
                <input type="checkbox" id="modIceCream" class="rounded text-[#3A1F17]" />
                Artisanal Madagascar Vanilla Gelato Scoop
              </span>
              <span class="font-semibold text-[#B8945B]">+₹90</span>
            </label>

            <label class="flex items-center justify-between cursor-pointer">
              <span class="flex items-center gap-2 text-[#6B3E2E]">
                <input type="checkbox" id="modGoldPackaging" class="rounded text-[#3A1F17]" />
                Luxury Keepsake Wooden Box with Wax Seal
              </span>
              <span class="font-semibold text-[#B8945B]">+₹120</span>
            </label>
          </div>

          <!-- Accordion Specs -->
          <div class="space-y-2 text-xs border-t border-[#B8945B]/20 pt-3">
            <details class="group cursor-pointer">
              <summary class="font-serif font-bold text-[#3A1F17] flex justify-between items-center">
                <span>✦ Key Ingredients</span>
                <span class="text-[#B8945B] text-xs">▼</span>
              </summary>
              <p class="text-[#6B3E2E] mt-1 pl-2">${product.ingredients.join(' • ')}</p>
            </details>

            <details class="group cursor-pointer">
              <summary class="font-serif font-bold text-[#3A1F17] flex justify-between items-center">
                <span>✦ Allergens & Dietary</span>
                <span class="text-[#B8945B] text-xs">▼</span>
              </summary>
              <p class="text-[#6B3E2E] mt-1 pl-2">
                Allergens: ${product.allergens.join(', ') || 'None'}<br/>
                Dietary: ${product.dietary.join(', ')}
              </p>
            </details>

            <details class="group cursor-pointer">
              <summary class="font-serif font-bold text-[#3A1F17] flex justify-between items-center">
                <span>✦ Storage & Serving Advice</span>
                <span class="text-[#B8945B] text-xs">▼</span>
              </summary>
              <p class="text-[#6B3E2E] mt-1 pl-2">${product.storageInfo}</p>
            </details>
          </div>

          <!-- Quantity & Add to Cart -->
          <div class="pt-4 border-t border-[#B8945B]/30 flex items-center gap-3">
            <div class="flex items-center border border-[#B8945B]/40 rounded-lg bg-white overflow-hidden text-xs">
              <button onclick="let q = document.getElementById('modalQty'); q.value = Math.max(1, parseInt(q.value)-1)"
                      class="px-3 py-2 text-[#3A1F17] hover:bg-[#F8F1E7] font-bold">-</button>
              <input type="number" id="modalQty" value="1" min="1" max="10"
                     class="w-10 text-center font-bold text-[#3A1F17] focus:outline-none" />
              <button onclick="let q = document.getElementById('modalQty'); q.value = parseInt(q.value)+1"
                      class="px-3 py-2 text-[#3A1F17] hover:bg-[#F8F1E7] font-bold">+</button>
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
      <button onclick="window.ladesioApp.closeCartDrawer(); window.location.hash='#checkout'"
              class="w-full mt-4 py-3 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-xl">
        <span>Proceed to Checkout</span> 👑
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
    this.activeFilter = { priceMax: 3500, dietary: 'all', sortBy: 'recommended' };
    this.renderMenuView(document.getElementById('app-main-content'));
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

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  new LaDesioApp();
});
