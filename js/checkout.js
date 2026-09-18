// LA DESIO - Multi-Step Luxury Checkout Flow with Dynamic Distance, Delivery ETA & Shop-to-Customer Map
import { cartStore } from './cart.js';
import { loyaltyStore } from './loyalty.js';

export class CheckoutManager {
  constructor(containerId, onOrderCompleted) {
    if (typeof window !== 'undefined') {
      window.checkoutManager = this;
    }
    this.containerId = containerId;
    this.container = document.getElementById(containerId);
    this.onOrderCompleted = onOrderCompleted;
    this.currentStep = 1;
    this.lastPlacedOrder = null;

    // Only restore previous order if cart is completely empty and user is revisiting receipt
    const currentCart = (typeof cartStore !== 'undefined' && cartStore.getSummary) ? cartStore.getSummary() : null;
    if (!currentCart || currentCart.items.length === 0) {
      try {
        const saved = localStorage.getItem('ladesio_last_placed_order');
        if (saved) {
          this.lastPlacedOrder = JSON.parse(saved);
          this.currentStep = 3;
        }
      } catch (e) {}
    } else {
      try {
        localStorage.removeItem('ladesio_last_placed_order');
      } catch (e) {}
    }
    
    // Load active profile data if available
    const activeProfile = (typeof loyaltyStore !== 'undefined' && loyaltyStore.getData) ? loyaltyStore.getData().profile : null;
    const defaultAddr = (activeProfile && activeProfile.savedAddresses && activeProfile.savedAddresses[0]) ? activeProfile.savedAddresses[0] : null;

    this.state = {
      address: {
        fullName: activeProfile?.name || 'Roody Cruz',
        email: activeProfile?.email || 'theroodyy@gmail.com',
        phone: activeProfile?.phone || '+91 93453 96700',
        street: defaultAddr?.address || 'No.60/A Gnanamani St, West Jafferkhanpet',
        city: defaultAddr?.city || activeProfile?.city || 'Chennai',
        postal: defaultAddr?.postal || '6000 83',
        country: 'India',
        instructions: 'Please call on arrival. Temperature insulated delivery.'
      },
      deliveryMethod: 'express', // express, scheduled, temperature
      scheduledSlot: 'Today Evening (6:00 PM - 8:00 PM)',
      paymentMethod: 'upi', // upi, card, netbanking
      cardDetails: {
        number: '•••• •••• •••• 2005',
        name: activeProfile?.name || 'Roody Cruz',
        expiry: '08/28',
        cvv: '•••'
      },
      upiId: (activeProfile?.email ? activeProfile.email.split('@')[0] + '@okaxis' : 'theroodyy@okaxis'),
      orderNotes: '',
      isGift: false,
      giftMessage: '',
      activeMapMode: 'vector' // 'leaflet' or 'vector'
    };
  }

  // Dynamic Distance & Delivery ETA calculation based on destination
  calculateDistanceAndETA() {
    const street = (this.state.address.street || '').toLowerCase();
    const city = (this.state.address.city || 'Chennai').toLowerCase();

    let distanceKm = 3.5;
    let shopName = 'LA DESIO Flagship Atelier (Jafferkhanpet Hub)';

    if (city.includes('chennai')) {
      if (street.includes('jafferkhanpet') || street.includes('gnanamani')) {
        distanceKm = 1.4;
      } else if (street.includes('kk nagar') || street.includes('rajan')) {
        distanceKm = 2.2;
      } else if (street.includes('ashok nagar')) {
        distanceKm = 2.8;
      } else if (street.includes('t nagar') || street.includes('t.nagar') || street.includes('panagal') || street.includes('pond')) {
        distanceKm = 4.2;
      } else if (street.includes('alwarpet') || street.includes('boat club') || street.includes('poes')) {
        distanceKm = 5.6;
      } else if (street.includes('guindy') || street.includes('ekkatuthangal')) {
        distanceKm = 3.2;
      } else if (street.includes('adyar') || street.includes('besant')) {
        distanceKm = 8.4;
      } else if (street.includes('anna nagar')) {
        distanceKm = 9.8;
      } else if (street.includes('velachery')) {
        distanceKm = 7.6;
      } else if (street.includes('omr') || street.includes('sholinganallur') || street.includes('thoraipakkam')) {
        distanceKm = 14.5;
      } else {
        distanceKm = 4.0;
      }
    } else if (city.includes('bengaluru') || city.includes('bangalore')) {
      shopName = 'LA DESIO Atelier Lavelle (Bengaluru)';
      distanceKm = street.includes('lavelle') || street.includes('indiranagar') ? 3.8 : 7.2;
    } else if (city.includes('trichy')) {
      shopName = 'LA DESIO Atelier Thillai (Trichy Hub)';
      distanceKm = 2.9;
    } else if (city.includes('mumbai')) {
      shopName = 'LA DESIO Atelier Bandra (Mumbai)';
      distanceKm = 5.4;
    } else {
      shopName = 'LA DESIO National Express Dispatch';
      distanceKm = 8.5;
    }

    // Minutes calculation: base dispatch buffer (7 mins) + 2.8 mins per km
    const estimatedMinutes = Math.max(12, Math.round(distanceKm * 2.8 + 7));

    return {
      distanceKm: parseFloat(distanceKm.toFixed(1)),
      estimatedMinutes,
      shopName,
      shopCoords: { lat: 13.0335, lng: 80.2185 }, // Jafferkhanpet flagship hub
      destCoords: { 
        lat: 13.0335 + (distanceKm * 0.007), 
        lng: 80.2185 + (distanceKm * 0.006) 
      }
    };
  }

  init() {
    if (typeof window !== 'undefined') {
      window.checkoutManager = this;
    }
    this.container = document.getElementById(this.containerId || 'checkoutFlowMount');
    const summary = cartStore.getSummary();
    if (summary && summary.items.length > 0) {
      this.lastPlacedOrder = null;
      try { localStorage.removeItem('ladesio_last_placed_order'); } catch (e) {}
      if (this.currentStep !== 2) {
        this.currentStep = 1;
      }
    } else if (this.lastPlacedOrder && this.currentStep === 3) {
      this.currentStep = 3;
    } else {
      this.currentStep = 1;
    }
    this.render();
  }

  setStep(step) {
    this.currentStep = Math.max(1, Math.min(4, step));
    this.render();
    if (this.currentStep === 3) {
      setTimeout(() => this.initPaymentRouteMap(), 80);
    }
  }

  render() {
    if (!this.container) {
      this.container = document.getElementById(this.containerId || 'checkoutFlowMount');
    }
    if (!this.container) return;
    const summary = cartStore.getSummary();
    const etaInfo = this.calculateDistanceAndETA();

    // Only render Order Confirmation if user is explicitly on Step 3 or 4 AND order was placed
    if ((this.currentStep === 3 || this.currentStep === 4) && this.lastPlacedOrder) {
      this.container.innerHTML = `
        <div class="w-full flex-1 flex flex-col justify-between min-h-0 py-1">
          ${this.renderOrderConfirmation(etaInfo)}
        </div>
      `;
      return;
    }

    if (summary.items.length === 0) {
      this.container.innerHTML = `
        <div class="max-w-md mx-auto text-center py-16 px-4">
          <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-[#1A0905] border border-[#B8945B]/40 flex items-center justify-center text-3xl shadow-xl">
            🛍️
          </div>
          <h3 class="font-display text-2xl text-[#FFFDF9] mb-2 font-bold">Your Bag is Empty</h3>
          <p class="text-xs text-[#D6C2B0] mb-6">Discover our signature creations or craft your bespoke dessert to proceed with checkout.</p>
          <a href="#menu" class="inline-block px-8 py-3 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-lg">
            Explore The Menu
          </a>
        </div>
      `;
      return;
    }

    const steps = [
      { num: 1, label: 'Delivery Details' },
      { num: 2, label: 'Payment & Confirm' }
    ];

    this.container.innerHTML = `
      <div class="w-full flex-1 flex flex-col justify-between min-h-0 py-1">
        
        <!-- Compact Top Ribbon (~34px) -->
        <div class="flex items-center justify-between bg-[#1A0905]/95 px-3 sm:px-4 py-1.5 rounded-xl border border-[#B8945B]/30 mb-2 shadow-md shrink-0">
          <div class="flex items-center gap-2">
            <span class="text-[10px] tracking-widest uppercase text-[#E6CA85] font-serif font-bold">La Desio Concierge</span>
            <span class="text-[#B8945B]/40 hidden sm:inline">•</span>
            <span class="font-display text-xs sm:text-sm text-[#FFFDF9] font-bold hidden sm:inline">Artisanal Checkout</span>
          </div>
          <div class="flex items-center gap-2 sm:gap-3">
            ${steps.map(s => `
              <div class="flex items-center gap-1.5 ${s.num < this.currentStep ? 'cursor-pointer hover:opacity-80' : ''}" ${s.num < this.currentStep ? `onclick="window.checkoutManager.setStep(${s.num})"` : ''}>
                <div class="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-serif font-bold transition-all ${this.currentStep === s.num ? 'bg-gradient-to-br from-[#B8945B] to-[#E6CA85] text-black ring-2 ring-[#B8945B]/40' : (this.currentStep > s.num ? 'bg-[#B8945B] text-black' : 'bg-black/50 text-[#D6C2B0]/60 border border-[#B8945B]/20')}">
                  ${this.currentStep > s.num ? '✓' : '0' + s.num}
                </div>
                <span class="text-[10px] font-serif tracking-wide uppercase font-semibold ${this.currentStep === s.num ? 'text-[#E6CA85] font-bold' : 'text-[#D6C2B0]/60'}">
                  ${s.label}
                </span>
              </div>
            `).join(`
              <div class="w-4 sm:w-6 h-[1px] bg-[#B8945B]/30"></div>
            `)}
          </div>
        </div>

        <!-- Two Column Content in Equal 50/50 Size that fills view height -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 items-stretch flex-1 min-h-0">
          
          <!-- Left Main Form Area (Equal 50% Width) -->
          <div class="w-full bg-[#241009]/95 rounded-2xl border border-[#B8945B]/40 p-3.5 sm:p-4 shadow-2xl text-[#FFFDF9] flex flex-col justify-between min-h-0 overflow-y-auto">
            ${this.renderCurrentStep(summary, etaInfo)}
          </div>

          <!-- Right Order Summary (Equal 50% Width) -->
          <div class="w-full bg-[#241009]/95 rounded-2xl border border-[#B8945B]/40 p-3.5 sm:p-4 shadow-2xl text-[#FFFDF9] flex flex-col justify-between min-h-0 overflow-y-auto">
            <div>
              <div class="border-b border-[#B8945B]/30 pb-2 flex items-center justify-between">
                <h4 class="font-serif text-sm text-[#FFFDF9] font-bold flex items-center gap-1.5">
                  <span>Order Summary</span>
                </h4>
                <span class="px-2.5 py-0.5 rounded-full bg-[#1A0905] border border-[#B8945B]/40 text-[#E6CA85] text-[10px] font-bold font-mono">
                  ${summary.itemCount} ${summary.itemCount === 1 ? 'item' : 'items'}
                </span>
              </div>

              <!-- Live Distance & ETA Pill in Sidebar -->
              <div class="my-2 p-2 rounded-xl bg-[#1A0905] border border-[#B8945B]/35 text-[11px] flex items-center justify-between">
                <span class="text-[#E6CA85] font-serif font-semibold flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#E6CA85] animate-ping"></span>
                  ETA: <strong class="text-white font-mono">~${etaInfo.estimatedMinutes}m</strong>
                </span>
                <span class="text-[10px] text-[#D6C2B0] truncate">📍 ${etaInfo.distanceKm} km (${etaInfo.shopName.split('(')[0].trim()})</span>
              </div>

              <!-- Item List (Spacious 50% Column Layout) -->
              <div class="max-h-[145px] sm:max-h-[175px] overflow-y-auto space-y-1.5 pr-1">
                ${summary.items.map(item => `
                  <div class="flex items-center justify-between gap-3 p-2 rounded-xl bg-[#1A0905]/70 border border-[#B8945B]/20">
                    <div class="flex items-center gap-2.5 min-w-0">
                      <img src="${item.image}" alt="${item.name}" class="w-9 h-9 rounded-lg object-cover border border-[#B8945B]/30 shrink-0" />
                      <div class="min-w-0">
                        <p class="text-xs font-bold text-white truncate">${item.name}</p>
                        <p class="text-[10px] text-[#D6C2B0] truncate">${item.subtitle || 'Artisanal Creation'}</p>
                      </div>
                    </div>
                    <div class="text-right shrink-0">
                      <p class="text-xs font-mono font-bold text-white">₹${((item.originalPrice * item.quantity) - (item.birthdayDiscountAmount || 0)).toFixed(2)}</p>
                      <p class="text-[10px] text-[#E6CA85] font-mono">Qty: ${item.quantity}${item.isBirthdayDiscount ? ' (🎂 30% Off 1 Treat)' : ''}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Calculation Rows -->
            <div class="border-t border-[#B8945B]/20 pt-2 space-y-1 text-xs mt-2">
              <div class="flex justify-between text-[#D6C2B0] text-[11px]">
                <span>Creations Subtotal:</span>
                <span class="font-mono text-white">₹${summary.subtotal.toFixed(2)}</span>
              </div>
              <div class="flex justify-between text-[#D6C2B0] text-[11px]">
                <span>Artisanal Dispatch:</span>
                <span class="font-mono text-[#E6CA85]">${summary.delivery === 0 ? 'COMPLIMENTARY' : '₹' + summary.delivery.toFixed(2)}</span>
              </div>
              ${summary.birthdayDiscount > 0 ? `
                <div class="px-2 py-1 rounded-lg bg-gradient-to-r from-amber-950/80 via-[#241009] to-amber-950/80 border border-amber-500/60 text-[11px] text-amber-300 flex items-center justify-between shadow-sm">
                  <span class="flex items-center gap-1 font-serif font-bold">🎂 30% Birthday Treat (1 Item):</span>
                  <span class="font-mono font-bold text-amber-400">-₹${summary.birthdayDiscount.toFixed(2)}</span>
                </div>
              ` : ''}
              ${summary.promoDiscount > 0 ? `
                <div class="flex justify-between text-emerald-400 text-[11px]">
                  <span>Promo Savings:</span>
                  <span class="font-mono">-₹${summary.promoDiscount.toFixed(2)}</span>
                </div>
              ` : ''}
              <div class="flex justify-between items-center border-t border-[#B8945B]/30 pt-1.5 font-display font-bold">
                <span class="text-white text-xs">Total Amount:</span>
                <span class="text-gold-gradient text-base">₹${summary.total.toFixed(2)}</span>
              </div>
              <div class="pt-1 text-[9px] text-[#D6C2B0]/70 text-center">
                🔒 256-Bit Encrypted Artisanal Checkout
              </div>
            </div>

          </div>

        </div>

      </div>
    `;
  }

  renderCurrentStep(summary, etaInfo) {
    switch (this.currentStep) {
      case 1:
        return `
          <div class="flex-1 flex flex-col justify-between min-h-0">
            <div>
              <div class="flex items-center justify-between pb-2 border-b border-[#B8945B]/25 mb-2">
                <div>
                  <h3 class="font-display text-base sm:text-lg text-white font-bold flex items-center gap-2">
                    <span>01. Delivery Destination</span>
                    <span class="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">⚡ ~${etaInfo.estimatedMinutes} Mins • FREE</span>
                  </h3>
                  <p class="text-[11px] text-[#D6C2B0]/80">Enter your address for freshly chilled artisanal delivery.</p>
                </div>
                <span class="px-2.5 py-0.5 rounded-full bg-[#1A0905] border border-[#B8945B]/40 text-[#E6CA85] text-[11px] font-serif font-bold shrink-0">
                  Step 1 of 2
                </span>
              </div>

              <!-- Saved Address Quick Selector -->
              ${this.renderSavedAddressesSelector()}

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-serif">
                <div>
                  <label class="block font-semibold text-[#E6CA85] text-[10.5px] uppercase tracking-wider mb-0.5">Full Name</label>
                  <input type="text" id="chkName" value="${this.state.address.fullName}"
                         class="w-full px-2.5 py-1.5 rounded-lg border border-[#B8945B]/40 bg-[#1A0905] focus:outline-none focus:ring-1 focus:ring-[#B8945B] text-white text-xs" />
                </div>
                <div>
                  <label class="block font-semibold text-[#E6CA85] text-[10.5px] uppercase tracking-wider mb-0.5">Phone Number (Handover)</label>
                  <input type="text" id="chkPhone" value="${this.state.address.phone}"
                         class="w-full px-2.5 py-1.5 rounded-lg border border-[#B8945B]/40 bg-[#1A0905] focus:outline-none focus:ring-1 focus:ring-[#B8945B] text-white font-mono text-xs" />
                </div>
                <div>
                  <label class="block font-semibold text-[#E6CA85] text-[10.5px] uppercase tracking-wider mb-0.5">Email Address</label>
                  <input type="email" id="chkEmail" value="${this.state.address.email}"
                         class="w-full px-2.5 py-1.5 rounded-lg border border-[#B8945B]/40 bg-[#1A0905] focus:outline-none focus:ring-1 focus:ring-[#B8945B] text-white text-xs" />
                </div>
                <div>
                  <label class="block font-semibold text-[#E6CA85] text-[10.5px] uppercase tracking-wider mb-0.5">City / Region</label>
                  <input type="text" id="chkCity" list="citySuggestions" value="${this.state.address.city || 'Chennai'}"
                         onchange="window.checkoutManager.updateAddressCity(this.value)"
                         class="w-full px-2.5 py-1.5 rounded-lg border border-[#B8945B]/40 bg-[#1A0905] focus:outline-none focus:ring-1 focus:ring-[#B8945B] text-white font-semibold text-xs" />
                  <datalist id="citySuggestions">
                    <option value="Chennai">Chennai (Flagship Salon Hub)</option>
                    <option value="Bengaluru">Bengaluru (Lavelle Road Atelier)</option>
                    <option value="Mumbai">Mumbai (Bandra Atelier)</option>
                    <option value="Trichy">Trichy (Thillai Nagar Hub)</option>
                    <option value="Hyderabad">Hyderabad (Jubilee Hills)</option>
                    <option value="Coimbatore">Coimbatore (Express Courier)</option>
                  </datalist>
                </div>
                <div class="sm:col-span-2">
                  <label class="block font-semibold text-[#E6CA85] text-[10.5px] uppercase tracking-wider mb-0.5">Delivery Street Address</label>
                  <input type="text" id="chkStreet" value="${this.state.address.street}"
                         oninput="window.checkoutManager.updateAddressStreet(this.value)"
                         placeholder="Door No., Street Name, Landmark"
                         class="w-full px-2.5 py-1.5 rounded-lg border border-[#B8945B]/40 bg-[#1A0905] focus:outline-none focus:ring-1 focus:ring-[#B8945B] text-white text-xs" />
                </div>
                <div class="sm:col-span-2">
                  <label class="block font-semibold text-[#E6CA85] text-[10.5px] uppercase tracking-wider mb-0.5">Special Delivery Notes (Optional)</label>
                  <input type="text" id="chkInstructions" value="${this.state.address.instructions}"
                         placeholder="e.g. Ring bell, leave with concierge"
                         class="w-full px-2.5 py-1.5 rounded-lg border border-[#B8945B]/40 bg-[#1A0905] focus:outline-none focus:ring-1 focus:ring-[#B8945B] text-white text-xs" />
                </div>
              </div>

              <!-- Gifting Checkbox -->
              <div class="mt-2 p-2 rounded-xl bg-[#1A0905] border border-[#B8945B]/30">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" id="chkIsGift" ${this.state.isGift ? 'checked' : ''}
                         onchange="window.checkoutManager.toggleGift(this.checked)"
                         class="w-3.5 h-3.5 accent-[#B8945B] rounded cursor-pointer" />
                  <span class="text-xs font-serif font-bold text-[#E6CA85]">🎁 Add Complimentary Calligraphy Gift Note</span>
                </label>
                ${this.state.isGift ? `
                  <div class="mt-1.5">
                    <textarea id="chkGiftMessage" rows="1" placeholder="Write your personalized gift message here..."
                              class="w-full p-1.5 rounded-lg border border-[#B8945B]/40 bg-[#241009] text-xs text-white font-serif focus:outline-none focus:ring-1 focus:ring-[#B8945B]"></textarea>
                  </div>
                ` : ''}
              </div>
            </div>

            <div class="mt-2.5 pt-2 border-t border-[#B8945B]/20 flex items-center justify-between">
              <a href="#menu" class="text-[11px] font-serif text-[#D6C2B0] hover:text-white flex items-center gap-1 transition-colors">
                <span>← Back to Menu</span>
              </a>
              <button type="button" onclick="window.checkoutManager.saveStep1AndContinue()"
                      class="px-5 py-2 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-xl cursor-pointer">
                <span>Continue to Payment</span> →
              </button>
            </div>
          </div>
        `;

      case 2:
        return `
          <div class="flex-1 flex flex-col justify-between min-h-0">
            <div>
              <div class="flex items-center justify-between pb-2 border-b border-[#B8945B]/25 mb-2">
                <div>
                  <h3 class="font-display text-base sm:text-lg text-white font-bold">02. Select Payment Method</h3>
                  <p class="text-[11px] text-[#D6C2B0]/80">Fast, encrypted and secure checkout.</p>
                </div>
                <span class="px-2.5 py-0.5 rounded-full bg-[#1A0905] border border-[#B8945B]/40 text-[#E6CA85] text-[11px] font-serif font-bold shrink-0">
                  Step 2 of 2
                </span>
              </div>

              <!-- Delivery Summary Reminder -->
              <div class="p-2 rounded-xl bg-[#1A0905] border border-[#B8945B]/30 mb-2.5 flex items-center justify-between text-xs">
                <div class="min-w-0 pr-2">
                  <span class="text-[9px] uppercase font-serif tracking-widest text-[#B8945B] font-bold block">Delivering To:</span>
                  <p class="text-white font-serif font-semibold text-xs truncate">${this.state.address.fullName} • ${this.state.address.street}, ${this.state.address.city}</p>
                </div>
                <button type="button" onclick="window.checkoutManager.setStep(1)" class="text-[#E6CA85] hover:underline font-serif text-xs shrink-0 cursor-pointer">
                  Edit
                </button>
              </div>

              <!-- 3 Clean Payment Methods -->
              <div class="space-y-2 mb-2">
                
                <!-- 1. UPI (Instant) -->
                <label class="p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${this.state.paymentMethod === 'upi' ? 'border-[#B8945B] bg-[#1A0905] ring-1 ring-[#B8945B]/40 shadow-md' : 'border-[#B8945B]/20 bg-[#1A0905]/50 hover:border-[#B8945B]/50'}">
                  <div class="flex items-center gap-2.5">
                    <input type="radio" name="payMethod" value="upi" ${this.state.paymentMethod === 'upi' ? 'checked' : ''}
                           onchange="window.checkoutManager.setPaymentMethod('upi')" class="accent-[#B8945B] cursor-pointer" />
                    <div>
                      <h4 class="font-serif text-xs font-bold text-white flex items-center gap-1.5">
                        <span>📱 UPI Instant</span>
                        <span class="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40">Fastest</span>
                      </h4>
                      <p class="text-[10px] text-[#D6C2B0]">Google Pay, PhonePe, Paytm, or any UPI App</p>
                    </div>
                  </div>
                  <span class="text-[10px] text-[#E6CA85] font-mono font-bold">Recommended</span>
                </label>
                ${this.state.paymentMethod === 'upi' ? `
                  <div class="p-2 rounded-xl bg-[#1A0905] border border-[#B8945B]/40 ml-4 space-y-1 text-xs font-serif">
                    <label class="block font-semibold text-[#E6CA85] text-[10px]">Your UPI ID / Mobile Number</label>
                    <input type="text" id="chkUpiId" value="${this.state.upiId}"
                           placeholder="e.g. mobile@upi or username@okaxis"
                           class="w-full px-2.5 py-1 rounded-lg border border-[#B8945B]/40 bg-[#241009] text-white font-mono text-xs" />
                  </div>
                ` : ''}

                <!-- 2. Cards -->
                <label class="p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${this.state.paymentMethod === 'card' ? 'border-[#B8945B] bg-[#1A0905] ring-1 ring-[#B8945B]/40 shadow-md' : 'border-[#B8945B]/20 bg-[#1A0905]/50 hover:border-[#B8945B]/50'}">
                  <div class="flex items-center gap-2.5">
                    <input type="radio" name="payMethod" value="card" ${this.state.paymentMethod === 'card' ? 'checked' : ''}
                           onchange="window.checkoutManager.setPaymentMethod('card')" class="accent-[#B8945B] cursor-pointer" />
                    <div>
                      <h4 class="font-serif text-xs font-bold text-white">💳 Credit or Debit Card</h4>
                      <p class="text-[10px] text-[#D6C2B0]">Visa, Mastercard, RuPay, Amex</p>
                    </div>
                  </div>
                </label>
                ${this.state.paymentMethod === 'card' ? `
                  <div class="p-2 rounded-xl bg-[#1A0905] border border-[#B8945B]/40 ml-4 grid grid-cols-2 gap-2 text-xs font-serif">
                    <div class="col-span-2">
                      <label class="block font-semibold text-[#E6CA85] text-[10px] mb-0.5">Card Number</label>
                      <input type="text" value="${this.state.cardDetails.number}"
                             class="w-full px-2.5 py-1 rounded-lg border border-[#B8945B]/40 bg-[#241009] text-white font-mono text-xs" />
                    </div>
                    <div>
                      <label class="block font-semibold text-[#E6CA85] text-[10px] mb-0.5">Expiry Date</label>
                      <input type="text" value="${this.state.cardDetails.expiry}"
                             class="w-full px-2.5 py-1 rounded-lg border border-[#B8945B]/40 bg-[#241009] text-white font-mono text-xs" />
                    </div>
                    <div>
                      <label class="block font-semibold text-[#E6CA85] text-[10px] mb-0.5">CVV</label>
                      <input type="password" value="${this.state.cardDetails.cvv}" maxlength="4"
                             class="w-full px-2.5 py-1 rounded-lg border border-[#B8945B]/40 bg-[#241009] text-white font-mono text-xs" />
                    </div>
                  </div>
                ` : ''}

                <!-- 3. Pay on Delivery -->
                <label class="p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${this.state.paymentMethod === 'cod' ? 'border-[#B8945B] bg-[#1A0905] ring-1 ring-[#B8945B]/40 shadow-md' : 'border-[#B8945B]/20 bg-[#1A0905]/50 hover:border-[#B8945B]/50'}">
                  <div class="flex items-center gap-2.5">
                    <input type="radio" name="payMethod" value="cod" ${this.state.paymentMethod === 'cod' ? 'checked' : ''}
                           onchange="window.checkoutManager.setPaymentMethod('cod')" class="accent-[#B8945B] cursor-pointer" />
                    <div>
                      <h4 class="font-serif text-xs font-bold text-white">💵 Pay on Delivery</h4>
                      <p class="text-[10px] text-[#D6C2B0]">Cash or UPI scan at your doorstep upon handover</p>
                    </div>
                  </div>
                </label>

              </div>
            </div>

            <!-- Action Buttons -->
            <div class="mt-3 pt-2 border-t border-[#B8945B]/20 flex justify-between items-center">
              <button type="button" onclick="window.checkoutManager.setStep(1)"
                      class="px-4 py-1.5 rounded-xl border border-[#B8945B]/40 text-[#D6C2B0] hover:text-white font-serif text-xs font-semibold cursor-pointer">
                ← Back to Address
              </button>
              <button type="button" onclick="window.checkoutManager.placeOrder()"
                      class="px-6 py-2 rounded-xl btn-gold-luxury font-serif text-xs font-bold tracking-wider shadow-2xl flex items-center gap-1.5 cursor-pointer">
                <span>Place Order & Dispatch (₹${summary.total.toFixed(2)})</span> ✨
              </button>
            </div>
          </div>
        `;

      case 3:
      case 4:
        return this.renderOrderConfirmation(etaInfo);
    }
  }

  setMapMode(mode) {
    this.state.activeMapMode = mode;
    this.render();
  }

  renderGoogleMapsEmbed(etaInfo) {
    const origin = encodeURIComponent('LA DESIO Flagship Atelier, West Jafferkhanpet, Chennai');
    const destination = encodeURIComponent(`${this.state.address.street || 'West Jafferkhanpet'}, ${this.state.address.city || 'Chennai'}`);
    const embedUrl = `https://maps.google.com/maps?saddr=${origin}&daddr=${destination}&t=m&z=14&output=embed`;

    return `
      <div class="w-full h-full relative">
        <iframe
          src="${embedUrl}"
          class="w-full h-full border-0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Maps Route">
        </iframe>
        <div class="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-[#B8945B]/40 text-[10px] text-[#E6CA85] font-mono z-10 flex items-center gap-2">
          <span>⚡ Live Google Route</span>
          <span>•</span>
          <span>nearly ${etaInfo.estimatedMinutes} mins</span>
        </div>
      </div>
    `;
  }

  // Vector luxury route map renderer (ultra-fast, works 100% offline & on file://)
  renderVectorRouteMap(etaInfo) {
    return `
      <div class="w-full h-full relative overflow-hidden flex items-center justify-center p-4">
        <!-- Map Grid Lines Background -->
        <svg class="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#B8945B" stroke-width="0.7"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <!-- Simulated Road Network Lines -->
        <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="75%" x2="90%" y2="75%" stroke="#3A1F17" stroke-width="6" stroke-linecap="round" />
          <line x1="25%" y1="15%" x2="25%" y2="85%" stroke="#3A1F17" stroke-width="5" stroke-linecap="round" />
          <line x1="75%" y1="20%" x2="75%" y2="90%" stroke="#3A1F17" stroke-width="5" stroke-linecap="round" />
          <line x1="20%" y1="35%" x2="85%" y2="45%" stroke="#3A1F17" stroke-width="4" stroke-dasharray="4 4" />

          <!-- Golden Glowing Active Delivery Route Spline -->
          <path d="M 18% 65% Q 38% 30%, 55% 50% T 82% 35%" 
                fill="none" 
                stroke="#B8945B" 
                stroke-width="5" 
                stroke-linecap="round"
                class="filter drop-shadow-[0_0_8px_rgba(230,202,133,0.8)]" />
          
          <path d="M 18% 65% Q 38% 30%, 55% 50% T 82% 35%" 
                fill="none" 
                stroke="#FFFDF9" 
                stroke-width="2" 
                stroke-dasharray="8 6" 
                class="animate-pulse" />
        </svg>

        <!-- Origin Pin: LA DESIO Atelier -->
        <div class="absolute left-[16%] top-[60%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10">
          <div class="w-10 h-10 rounded-full bg-[#B8945B] border-2 border-white shadow-2xl flex items-center justify-center text-lg animate-bounce">
            🏛️
          </div>
          <div class="mt-1 px-2.5 py-0.5 rounded-full bg-black/85 border border-[#B8945B] text-[9px] font-serif text-[#E6CA85] whitespace-nowrap shadow font-bold">
            LA DESIO Atelier
          </div>
        </div>

        <!-- Moving Courier Vehicle on Route -->
        <div class="absolute left-[48%] top-[38%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 animate-pulse">
          <div class="w-8 h-8 rounded-full bg-black border border-[#E6CA85] shadow-2xl flex items-center justify-center text-sm">
            🛵
          </div>
          <span class="px-2 py-0.5 rounded bg-black/90 text-[#E6CA85] text-[8px] font-mono whitespace-nowrap mt-0.5 border border-[#B8945B]/40">
            Courier in Transit
          </span>
        </div>

        <!-- Destination Pin: Customer Location -->
        <div class="absolute left-[82%] top-[32%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10">
          <div class="w-10 h-10 rounded-full bg-emerald-600 border-2 border-white shadow-2xl flex items-center justify-center text-lg">
            📍
          </div>
          <div class="mt-1 px-2.5 py-0.5 rounded-full bg-black/85 border border-emerald-400 text-[9px] font-serif text-white whitespace-nowrap shadow font-bold">
            ${this.state.address.fullName || 'Doorstep'}
          </div>
        </div>

        <!-- Map Info Overlay Badge -->
        <div class="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#B8945B]/30 text-[10px] text-[#E6CA85] font-mono z-10 flex items-center gap-2">
          <span>⚡ Distance: ${etaInfo.distanceKm} km</span>
          <span>•</span>
          <span>ETA: nearly ${etaInfo.estimatedMinutes} mins</span>
        </div>
      </div>
    `;
  }

  // Hook for Leaflet initialization if library is available
  initPaymentRouteMap() {
    if (typeof L !== 'undefined' && document.getElementById('checkoutRouteMapContainer')) {
      // Leaflet can enrich the map if desired, fallback vector is already active
    }
  }

  renderOrderConfirmation(etaInfo) {
    const fallbackEta = etaInfo || this.calculateDistanceAndETA();
    const order = this.lastPlacedOrder || {
      id: 'DESIO-' + Math.floor(1000 + Math.random() * 9000),
      total: 1040,
      subtotal: 1040,
      deliverySlot: `Express Artisanal — Within ${fallbackEta?.estimatedMinutes || 25} Mins`,
      trackingNumber: 'IN-EXP-' + Math.floor(1000 + Math.random() * 9000) + '-DESIO',
      distanceKm: fallbackEta?.distanceKm || 3.5,
      estimatedMinutes: fallbackEta?.estimatedMinutes || 25,
      items: []
    };

    const orderId = order.id || 'DESIO-9142';
    const trackingNumber = order.trackingNumber || ('IN-EXP-' + String(orderId).replace('DESIO-', '') + '-DESIO');
    const totalNum = Number(order.total) || 0;
    const subtotalNum = Number(order.subtotal) || totalNum;
    const totalDisplay = totalNum > 0 ? totalNum.toFixed(2) : '1,040.00';
    const subtotalDisplay = subtotalNum > 0 ? subtotalNum.toFixed(2) : totalDisplay;
    const distanceDisplay = order.distanceKm || fallbackEta?.distanceKm || 3.5;
    const minutesDisplay = order.estimatedMinutes || fallbackEta?.estimatedMinutes || 25;
    const recipientName = order.address?.fullName || this.state.address?.fullName || 'Atelier Patron';
    const streetDisplay = (order.address && order.address.street) || (this.state && this.state.address && this.state.address.street) || 'West Jafferkhanpet';
    const cityDisplay = (order.address && order.address.city) || (this.state && this.state.address && this.state.address.city) || 'Chennai';
    const paymentMethodDisplay = order.paymentMethod || 'UPI Instant';
    const items = Array.isArray(order.items) ? order.items : [];

    return `
      <div class="w-full flex-1 flex flex-col justify-between min-h-0 py-1">
        
        <!-- Compact Celebratory Top Ribbon (~36px) -->
        <div class="flex items-center justify-between bg-[#1A0905]/95 px-3 sm:px-4 py-1.5 rounded-xl border border-emerald-500/40 mb-2 shadow-md shrink-0">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-bold flex items-center justify-center text-[11px] shadow-md shrink-0 ring-2 ring-emerald-400/30">
              ✓
            </div>
            <div class="min-w-0">
              <h3 class="font-display text-xs sm:text-sm text-white font-bold tracking-wide truncate">
                YOUR LA DESIO ORDER IS CONFIRMED!
              </h3>
              <p class="text-[10px] text-[#D6C2B0] truncate hidden sm:block">
                Thank you, <span class="text-[#E6CA85] font-semibold">${recipientName}</span> • Master pastry chefs have commenced handcrafting your creations.
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-400 text-[10px] font-serif font-bold uppercase tracking-wider">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live Dispatch
            </span>
            <span class="font-mono text-[10px] text-[#E6CA85] px-2 py-0.5 rounded-md bg-black/50 border border-[#B8945B]/30 hidden sm:inline">
              #${orderId}
            </span>
          </div>
        </div>

        <!-- Equal 50/50 Two Column Dashboard -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 items-stretch flex-1 min-h-0">
          
          <!-- Left Column: Live Dispatch & Consignment Dashboard (Equal 50% Width) -->
          <div class="w-full bg-[#241009]/95 rounded-2xl border border-[#B8945B]/40 p-3.5 sm:p-4 shadow-2xl text-[#FFFDF9] flex flex-col justify-between min-h-0 overflow-y-auto">
            <div>
              <div class="border-b border-[#B8945B]/30 pb-2 flex items-center justify-between">
                <h4 class="font-serif text-sm text-[#FFFDF9] font-bold flex items-center gap-1.5">
                  <span>Live Dispatch Journey</span>
                </h4>
                <span class="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold font-mono">
                  ⚡ ~${minutesDisplay} Mins (${distanceDisplay} km)
                </span>
              </div>

              <!-- Journey Progress Tracker -->
              <div class="my-2 p-2 rounded-xl bg-[#1A0905] border border-[#B8945B]/30">
                <div class="flex items-center justify-between text-[10px] text-[#D6C2B0]">
                  <div class="flex flex-col items-center">
                    <span class="w-5 h-5 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold text-[9px] shadow">✓</span>
                    <span class="mt-0.5 font-semibold text-white text-[9px]">Confirmed</span>
                  </div>
                  <div class="flex-1 h-0.5 bg-emerald-500 mx-1.5"></div>
                  <div class="flex flex-col items-center">
                    <span class="w-5 h-5 rounded-full bg-[#E6CA85] text-black flex items-center justify-center font-bold text-[9px] animate-pulse shadow">2</span>
                    <span class="mt-0.5 font-semibold text-[#E6CA85] text-[9px]">Handcrafting</span>
                  </div>
                  <div class="flex-1 h-0.5 bg-[#B8945B]/30 mx-1.5"></div>
                  <div class="flex flex-col items-center">
                    <span class="w-5 h-5 rounded-full bg-stone-800 text-stone-400 flex items-center justify-center font-bold text-[9px]">3</span>
                    <span class="mt-0.5 text-stone-500 text-[9px]">Courier Handover</span>
                  </div>
                </div>
              </div>

              <!-- Consignment Details Card -->
              <div class="p-2.5 rounded-xl bg-[#1A0905] border border-[#B8945B]/30 text-xs space-y-1 font-serif">
                <div class="flex justify-between items-center pb-1 border-b border-[#B8945B]/20 text-[11px]">
                  <span class="text-[#D6C2B0]">Order Reference:</span>
                  <div class="flex items-center gap-1.5">
                    <span class="font-mono font-bold text-[#E6CA85]">${orderId}</span>
                    <button type="button" onclick="window.checkoutManager.copyOrderId('${orderId}')"
                            class="px-1.5 py-0.2 rounded bg-black/60 border border-[#B8945B]/30 text-[9px] text-[#E6CA85] hover:text-white cursor-pointer">
                      Copy
                    </button>
                  </div>
                </div>
                <div class="flex justify-between items-center text-[11px]">
                  <span class="text-[#D6C2B0]">Consignment Tracking:</span>
                  <span class="font-mono text-[#E6CA85] font-bold">${trackingNumber}</span>
                </div>
                <div class="flex justify-between items-center text-[11px]">
                  <span class="text-[#D6C2B0]">Delivery Destination:</span>
                  <span class="font-semibold text-white truncate max-w-[180px] sm:max-w-[220px]">${streetDisplay}, ${cityDisplay}</span>
                </div>
                <div class="flex justify-between items-center text-[11px]">
                  <span class="text-[#D6C2B0]">Payment Mode:</span>
                  <span class="font-semibold text-emerald-400 flex items-center gap-1">
                    <span>✓</span> ${paymentMethodDisplay}
                  </span>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="mt-2.5 pt-2 border-t border-[#B8945B]/20 flex flex-wrap items-center justify-between gap-2">
              <button type="button" onclick="if(window.ladesioApp && window.ladesioApp.openOrderTracker) window.ladesioApp.openOrderTracker('${orderId}');"
                      class="px-3.5 py-1.5 rounded-xl btn-gold-luxury font-serif text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-xl cursor-pointer flex-1 justify-center sm:flex-initial">
                <span>🚚</span> Track Live Delivery
              </button>
              <div class="flex items-center gap-2">
                <a href="#account" onclick="if(window.ladesioApp && window.ladesioApp.setActiveAccountTab) window.ladesioApp.setActiveAccountTab('orders');"
                   class="px-3 py-1.5 rounded-xl border border-[#B8945B]/40 hover:border-[#B8945B] text-white font-serif text-xs font-semibold tracking-wider flex items-center gap-1 shadow-md">
                  <span>📦</span> Vault
                </a>
                <button type="button" onclick="window.checkoutManager.startNewOrder()"
                        class="px-3 py-1.5 rounded-xl border border-white/20 text-[#D6C2B0] hover:text-white font-serif text-xs font-semibold tracking-wider cursor-pointer">
                  ✨ Menu
                </button>
              </div>
            </div>
          </div>

          <!-- Right Column: Itemized Luxury Receipt (Equal 50% Width) -->
          <div class="w-full bg-[#241009]/95 rounded-2xl border border-[#B8945B]/40 p-3.5 sm:p-4 shadow-2xl text-[#FFFDF9] flex flex-col justify-between min-h-0 overflow-y-auto">
            <div>
              <div class="border-b border-[#B8945B]/30 pb-2 flex items-center justify-between">
                <h4 class="font-serif text-sm text-[#FFFDF9] font-bold flex items-center gap-1.5">
                  <span>Artisanal Order Receipt</span>
                </h4>
                <span class="px-2.5 py-0.5 rounded-full bg-[#1A0905] border border-[#B8945B]/40 text-[#E6CA85] text-[10px] font-bold font-mono">
                  ${items.length} ${items.length === 1 ? 'creation' : 'creations'}
                </span>
              </div>

              <!-- Item List -->
              <div class="my-2 max-h-[145px] sm:max-h-[175px] overflow-y-auto space-y-1.5 pr-1">
                ${items.length > 0 ? items.map(it => `
                  <div class="flex items-center justify-between gap-3 p-2 rounded-xl bg-[#1A0905]/70 border border-[#B8945B]/20">
                    <div class="flex items-center gap-2.5 min-w-0">
                      <img src="${it.image || 'Assets/Logo/emblem_transparent.png'}" alt="${it.name}" class="w-9 h-9 object-cover rounded-lg border border-[#B8945B]/30 shrink-0" onerror="this.src='Assets/Logo/emblem_transparent.png'" />
                      <div class="min-w-0">
                        <p class="text-xs font-bold text-white truncate">${it.name}</p>
                        <p class="text-[10px] text-[#D6C2B0] truncate">${it.subtitle || 'Haute Patisserie'}</p>
                      </div>
                    </div>
                    <div class="text-right shrink-0">
                      <p class="text-xs font-mono font-bold text-white">₹${(Number(it.price) * (it.qty || 1)).toFixed(2)}</p>
                      <p class="text-[10px] text-[#E6CA85] font-mono">Qty: ${it.qty || 1}</p>
                    </div>
                  </div>
                `).join('') : `
                  <div class="p-3 text-center text-xs text-[#D6C2B0]">
                    Artisanal creations consigned for express handover.
                  </div>
                `}
              </div>
            </div>

            <!-- Financial Breakdown Rows -->
            <div class="border-t border-[#B8945B]/20 pt-2 space-y-1 text-xs mt-2">
              <div class="flex justify-between text-[#D6C2B0] text-[11px]">
                <span>Creations Subtotal:</span>
                <span class="font-mono text-white">₹${subtotalDisplay}</span>
              </div>
              <div class="flex justify-between text-[#D6C2B0] text-[11px]">
                <span>Artisanal Dispatch:</span>
                <span class="font-mono text-[#E6CA85]">COMPLIMENTARY</span>
              </div>
              ${(order.birthdayDiscount && Number(order.birthdayDiscount) > 0) ? `
                <div class="px-2 py-1 rounded-lg bg-gradient-to-r from-amber-950/80 via-[#241009] to-amber-950/80 border border-amber-500/60 text-[11px] text-amber-300 flex items-center justify-between shadow-sm">
                  <span class="flex items-center gap-1 font-serif font-bold">🎂 30% Birthday Treat (1 Item):</span>
                  <span class="font-mono font-bold text-amber-400">-₹${Number(order.birthdayDiscount).toFixed(2)}</span>
                </div>
              ` : ''}
              ${(order.promoDiscount && Number(order.promoDiscount) > 0) ? `
                <div class="flex justify-between text-emerald-400 text-[11px]">
                  <span>Promo Savings:</span>
                  <span class="font-mono">-₹${Number(order.promoDiscount).toFixed(2)}</span>
                </div>
              ` : ((order.discount && Number(order.discount) > 0 && !(order.birthdayDiscount > 0)) ? `
                <div class="flex justify-between text-emerald-400 text-[11px]">
                  <span>Privé Savings:</span>
                  <span class="font-mono">-₹${Number(order.discount).toFixed(2)}</span>
                </div>
              ` : '')}
              <div class="flex justify-between items-center border-t border-[#B8945B]/30 pt-1.5 font-display font-bold">
                <span class="text-white text-xs">Total Amount Paid:</span>
                <span class="text-gold-gradient text-base font-mono">₹${totalDisplay}</span>
              </div>
              <div class="pt-1 text-[9px] text-[#D6C2B0]/70 text-center">
                🔒 256-Bit Encrypted Artisanal Receipt • Freshness Guaranteed
              </div>
            </div>

          </div>

        </div>

      </div>
    `;
  }

  copyOrderId(orderId) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(orderId).then(() => {
        if (window.showToast) window.showToast(`Order ID ${orderId} copied to clipboard!`, 'success');
      });
    }
  }

  startNewOrder() {
    this.lastPlacedOrder = null;
    try {
      localStorage.removeItem('ladesio_last_placed_order');
    } catch (e) {}
    this.currentStep = 1;
    if (window.ladesioApp && typeof window.ladesioApp.navigateTo === 'function') {
      window.ladesioApp.navigateTo('menu');
    } else {
      this.render();
    }
  }

  triggerCelebrationConfetti() {
    try {
      const container = document.createElement('div');
      container.id = 'orderSuccessConfettiContainer';
      container.className = 'fixed inset-0 pointer-events-none z-[9999] overflow-hidden';
      document.body.appendChild(container);

      const colors = ['#B8945B', '#E6CA85', '#10B981', '#F59E0B', '#FFFDF9', '#34D399'];
      const pieceCount = 65;

      for (let i = 0; i < pieceCount; i++) {
        const piece = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 8 + 6;
        const left = Math.random() * 100;
        const animDuration = Math.random() * 2 + 2;
        const animDelay = Math.random() * 0.4;

        piece.style.position = 'absolute';
        piece.style.top = '-20px';
        piece.style.left = left + 'vw';
        piece.style.width = size + 'px';
        piece.style.height = (size * (Math.random() > 0.5 ? 1.5 : 0.8)) + 'px';
        piece.style.backgroundColor = color;
        piece.style.borderRadius = Math.random() > 0.4 ? '2px' : '50%';
        piece.style.opacity = '1';
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        piece.style.transition = `transform ${animDuration}s cubic-bezier(0.25, 1, 0.5, 1), top ${animDuration}s cubic-bezier(0.25, 1, 0.5, 1), opacity ${animDuration}s ease-in`;

        container.appendChild(piece);

        requestAnimationFrame(() => {
          setTimeout(() => {
            piece.style.top = (Math.random() * 40 + 70) + 'vh';
            piece.style.transform = `rotate(${Math.random() * 1080 - 540}deg) translateX(${Math.random() * 200 - 100}px)`;
            piece.style.opacity = '0';
          }, animDelay * 1000 + 20);
        });
      }

      setTimeout(() => {
        container.remove();
      }, 4500);
    } catch (e) {}
  }

  renderSavedAddressesSelector() {
    const data = (typeof loyaltyStore !== 'undefined' && loyaltyStore.getData) ? loyaltyStore.getData() : null;
    const addresses = data?.profile?.savedAddresses || [];
    if (addresses.length <= 1) return '';

    return `
      <div class="mb-2 p-2 rounded-xl bg-[#1A0905] border border-[#B8945B]/30">
        <label class="block text-[10px] font-semibold text-[#E6CA85] uppercase tracking-wider mb-1">
          📍 Choose from your Saved Privé Addresses:
        </label>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          ${addresses.map(addr => `
            <button type="button" onclick="window.checkoutManager.selectSavedAddress('${addr.id}')"
                    class="text-left p-1.5 rounded-lg border transition-all text-[11px] ${(this.state.address.street === addr.address) ? 'border-[#B8945B] bg-[#241009] text-white ring-1 ring-[#B8945B]' : 'border-[#B8945B]/20 bg-black/30 text-[#D6C2B0] hover:text-white'}">
              <div class="font-bold text-[#E6CA85] flex items-center justify-between text-xs">
                <span>${addr.name}</span>
                ${addr.isDefault ? '<span class="text-[8px] px-1 py-0.2 rounded bg-[#B8945B] text-black font-bold">DEFAULT</span>' : ''}
              </div>
              <p class="truncate text-[10px] mt-0.5 text-[#D6C2B0]">${addr.address}, ${addr.city}</p>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  selectSavedAddress(addrId) {
    const data = loyaltyStore.getData();
    const addr = data?.profile?.savedAddresses?.find(a => a.id === addrId);
    if (!addr) return;
    this.state.address.street = addr.address;
    this.state.address.city = addr.city;
    this.state.address.phone = addr.phone || this.state.address.phone;
    this.render();
  }

  updateAddressCity(city) {
    this.state.address.city = city;
    this.render();
  }

  updateAddressStreet(street) {
    this.state.address.street = street;
    // Debounced or live re-render of ETA badge
    const eta = this.calculateDistanceAndETA();
    const etaElements = document.querySelectorAll('.checkout-eta-minutes');
    etaElements.forEach(el => el.textContent = `nearly ${eta.estimatedMinutes} minutes`);
  }

  saveStep1AndContinue() {
    const name = document.getElementById('chkName')?.value || this.state.address.fullName;
    const email = document.getElementById('chkEmail')?.value || this.state.address.email;
    const phone = document.getElementById('chkPhone')?.value || this.state.address.phone;
    const city = document.getElementById('chkCity')?.value || this.state.address.city || 'Chennai';
    const street = document.getElementById('chkStreet')?.value || this.state.address.street;
    const instructions = document.getElementById('chkInstructions')?.value || this.state.address.instructions;

    this.state.address = { fullName: name, email, phone, city, street, instructions };
    this.setStep(2);
  }

  setDeliveryMethod(method) {
    this.state.deliveryMethod = method;
    this.render();
  }

  setPaymentMethod(method) {
    this.state.paymentMethod = method;
    this.render();
  }

  toggleGift(checked) {
    this.state.isGift = checked;
    this.render();
  }

  placeOrder() {
    const summary = cartStore.getSummary();
    if (!summary.items || summary.items.length === 0) {
      if (window.showToast) window.showToast('Your shopping bag is empty.', 'warning');
      return;
    }

    const city = this.state.address.city || 'Chennai';
    const etaInfo = this.calculateDistanceAndETA();

    // Auto-save any custom creations into loyaltyStore
    summary.items.forEach(item => {
      if (item.isCustom) {
        let config = {};
        try {
          if (item.customConfigKey) config = JSON.parse(item.customConfigKey);
        } catch (e) {}
        loyaltyStore.saveCustomCreation({
          name: item.name,
          recipe: item.subtitle || 'Bespoke Studio Recipe',
          price: item.price,
          image: item.image,
          config: config
        });
      }
    });

    const paymentLabel = this.state.paymentMethod === 'card' 
      ? 'Credit/Debit Card (Visa/Mastercard)' 
      : (this.state.paymentMethod === 'upi' ? `UPI (${this.state.upiId || 'Instant'})` : 'Pay on Delivery');

    const hadBirthdayDiscount = (summary.birthdayDiscount > 0);
    const isBirthdayOrder = !!hadBirthdayDiscount;
    if (hadBirthdayDiscount && typeof loyaltyStore !== 'undefined' && typeof loyaltyStore.markBirthdayDiscountUsed === 'function') {
      try {
        loyaltyStore.markBirthdayDiscountUsed();
        if (typeof window !== 'undefined' && window.ladesioApp && typeof window.ladesioApp.checkBirthdayGreeting === 'function') {
          window.ladesioApp.checkBirthdayGreeting();
        }
      } catch (e) {
        console.error('Error recording birthday discount:', e);
      }
    }

    const orderData = {
      items: summary.items.map(i => ({
        name: i.name,
        qty: i.quantity,
        price: i.price,
        image: i.image,
        subtitle: i.subtitle || '',
        isCustom: !!i.isCustom,
        options: i.options || null,
        customConfigKey: i.customConfigKey || null
      })),
      subtotal: summary.subtotal,
      birthdayDiscount: summary.birthdayDiscount || 0,
      promoDiscount: summary.promoDiscount || 0,
      discount: summary.discount,
      deliveryFee: summary.delivery,
      total: summary.total,
      paymentMethod: paymentLabel,
      address: { ...this.state.address, city },
      deliverySlot: this.state.deliveryMethod === 'express' 
        ? `Express Artisanal — Within ${etaInfo.estimatedMinutes} Mins (${city})` 
        : `Scheduled Luxury Slot (${city})`,
      trackingNumber: 'IN-EXP-' + Math.floor(1000 + Math.random() * 9000) + '-DESIO',
      distanceKm: etaInfo.distanceKm,
      estimatedMinutes: etaInfo.estimatedMinutes,
      placedAt: new Date().toISOString(),
      isBirthdayOrder
    };

    const newOrder = loyaltyStore.addOrder(orderData);
    this.lastPlacedOrder = { ...orderData, ...(newOrder || {}) };

    // 1. Persist to localStorage immediately
    try {
      localStorage.setItem('ladesio_last_placed_order', JSON.stringify(this.lastPlacedOrder));
    } catch (e) {}

    // 2. Set currentStep = 3 BEFORE clearing cart so subscribers do not render empty bag
    this.currentStep = 3;

    // 3. Clear cart
    cartStore.clearCart();

    // 4. Play celebration pops, bangs & celebratory confetti
    if (typeof window !== 'undefined' && window.ladesioSoundscape && typeof window.ladesioSoundscape.playCelebrationPopsAndBangs === 'function') {
      window.ladesioSoundscape.playCelebrationPopsAndBangs();
    } else if (typeof window !== 'undefined' && window.ladesioSoundscape && typeof window.ladesioSoundscape.playCrystalChime === 'function') {
      window.ladesioSoundscape.playCrystalChime();
    }
    if (typeof window !== 'undefined' && window.ladesioSoundscape && typeof window.ladesioSoundscape.triggerCelebrationEffects === 'function') {
      window.ladesioSoundscape.triggerCelebrationEffects();
    } else {
      this.triggerCelebrationConfetti();
    }

    // 5. Toast notification
    if (window.showToast) {
      window.showToast(`🎉 Order ${this.lastPlacedOrder.id || ''} Placed Successfully!`, 'success');
    }

    // 6. Show receipt
    const showReceipt = () => {
      this.currentStep = 3;
      this.render();
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (this.onOrderCompleted) {
        this.onOrderCompleted(newOrder);
      }
    };

    if (typeof window !== 'undefined' && window.ladesioSoundscape && typeof window.ladesioSoundscape.showCurtain === 'function') {
      window.ladesioSoundscape.showCurtain(
        'ORDER PLACED SUCCESSFULLY',
        'Your Artisanal Creation Has Been Confirmed & Dispatched',
        750,
        showReceipt
      );
    } else {
      showReceipt();
    }
  }
}

if (typeof window !== 'undefined') {
  window.CheckoutManager = CheckoutManager;
}
