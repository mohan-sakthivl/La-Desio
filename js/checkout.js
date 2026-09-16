// LA DESIO - Multi-Step Luxury Checkout Flow with Dynamic Distance, Delivery ETA & Shop-to-Customer Map
import { cartStore } from './cart.js';
import { loyaltyStore } from './loyalty.js';

export class CheckoutManager {
  constructor(containerId, onOrderCompleted) {
    if (typeof window !== 'undefined') {
      window.checkoutManager = this;
    }
    this.container = document.getElementById(containerId);
    this.onOrderCompleted = onOrderCompleted;
    this.currentStep = 1;
    
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
    this.currentStep = 1;
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
    if (!this.container) return;
    const summary = cartStore.getSummary();
    const etaInfo = this.calculateDistanceAndETA();

    // If on Order Confirmation step, render full-width luxury receipt immediately
    if (this.currentStep === 3 || this.currentStep === 4) {
      this.container.innerHTML = `
        <div class="max-w-3xl mx-auto px-4 py-8">
          <div class="bg-[#241009] rounded-3xl border border-[#B8945B]/40 p-6 md:p-10 shadow-2xl text-[#FFFDF9]">
            ${this.renderOrderConfirmation(etaInfo)}
          </div>
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
      <div class="max-w-5xl mx-auto px-4 py-8">
        
        <!-- Luxury Brand Header -->
        <div class="text-center mb-8">
          <span class="text-xs tracking-widest uppercase text-[#E6CA85] font-serif font-bold">La Desio Concierge</span>
          <h2 class="font-display text-3xl md:text-4xl text-[#FFFDF9] font-bold mt-1">Artisanal Checkout</h2>
          <div class="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#B8945B] to-transparent mx-auto mt-3"></div>
        </div>

        <!-- Checkout Steps Ribbon -->
        <div class="flex items-center justify-between max-w-2xl mx-auto mb-8 bg-[#1A0905] p-3.5 rounded-2xl border border-[#B8945B]/30 shadow-lg">
          ${steps.map(s => `
            <div class="flex flex-col items-center">
              <div class="w-9 h-9 rounded-full flex items-center justify-center text-xs font-serif font-bold transition-all ${this.currentStep === s.num ? 'bg-gradient-to-br from-[#B8945B] to-[#E6CA85] text-black ring-4 ring-[#B8945B]/30 scale-105 shadow-md' : (this.currentStep > s.num ? 'bg-[#B8945B] text-black font-bold' : 'bg-black/50 text-[#D6C2B0] border border-[#B8945B]/20')}">
                ${this.currentStep > s.num ? '✓' : '0' + s.num}
              </div>
              <span class="text-[10px] font-serif tracking-wider uppercase font-semibold mt-1.5 hidden sm:block ${this.currentStep === s.num ? 'text-[#E6CA85] font-bold' : 'text-[#D6C2B0]/70'}">
                ${s.label}
              </span>
            </div>
          `).join(`
            <div class="flex-1 h-[1px] bg-[#B8945B]/30 mx-2 hidden sm:block"></div>
          `)}
        </div>

        <!-- Two Column Content -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left Main Form Area -->
          <div class="lg:col-span-8 bg-[#241009] rounded-3xl border border-[#B8945B]/40 p-6 md:p-8 shadow-2xl text-[#FFFDF9]">
            ${this.renderCurrentStep(summary, etaInfo)}
          </div>

          <!-- Right Sticky Order Summary -->
          <div class="lg:col-span-4 bg-[#241009] rounded-3xl border border-[#B8945B]/40 p-6 shadow-2xl sticky top-24 text-[#FFFDF9] space-y-4">
            <div class="border-b border-[#B8945B]/30 pb-3 flex items-center justify-between">
              <h4 class="font-serif text-base text-[#FFFDF9] font-bold">
                Order Summary
              </h4>
              <span class="px-2.5 py-0.5 rounded-full bg-[#1A0905] border border-[#B8945B]/40 text-[#E6CA85] text-xs font-bold font-mono">
                ${summary.itemCount} ${summary.itemCount === 1 ? 'item' : 'items'}
              </span>
            </div>

            <!-- Live Distance & ETA Pill in Sidebar -->
            <div class="p-3 rounded-2xl bg-[#1A0905] border border-[#B8945B]/35 text-xs space-y-1">
              <div class="flex items-center justify-between">
                <span class="text-[#E6CA85] font-serif font-semibold flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-[#E6CA85] animate-ping"></span>
                  Estimated Arrival:
                </span>
                <strong class="text-gold-gradient font-bold font-mono text-sm">nearly ${etaInfo.estimatedMinutes} mins</strong>
              </div>
              <p class="text-[11px] text-[#D6C2B0]">
                📍 ${etaInfo.distanceKm} km from ${etaInfo.shopName.split('(')[0]}
              </p>
            </div>

            <!-- Item List -->
            <div class="max-h-60 overflow-y-auto space-y-3 pr-1">
              ${summary.items.map(item => `
                <div class="flex items-center gap-3 p-2 rounded-xl bg-[#1A0905]/70 border border-[#B8945B]/20">
                  <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover border border-[#B8945B]/30 shrink-0" />
                  <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-white truncate">${item.name}</p>
                    <p class="text-[10px] text-[#D6C2B0] truncate">${item.subtitle || 'Artisanal Creation'}</p>
                    <p class="text-[11px] text-[#E6CA85] font-mono">Qty: ${item.quantity} × ₹${item.price}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Calculation Rows -->
            <div class="border-t border-[#B8945B]/20 pt-3 space-y-2 text-xs">
              <div class="flex justify-between text-[#D6C2B0]">
                <span>Creations Subtotal:</span>
                <span class="font-mono text-white">₹${summary.subtotal.toFixed(2)}</span>
              </div>
              <div class="flex justify-between text-[#D6C2B0]">
                <span>Artisanal Chilled Dispatch:</span>
                <span class="font-mono text-[#E6CA85]">${summary.delivery === 0 ? 'COMPLIMENTARY' : '₹' + summary.delivery.toFixed(2)}</span>
              </div>
              ${summary.discount > 0 ? `
                <div class="flex justify-between text-emerald-400">
                  <span>Privé Privilege Savings:</span>
                  <span class="font-mono">-₹${summary.discount.toFixed(2)}</span>
                </div>
              ` : ''}
              <div class="flex justify-between items-center border-t border-[#B8945B]/30 pt-3 font-display text-base font-bold">
                <span class="text-white">Total Amount:</span>
                <span class="text-gold-gradient text-lg">₹${summary.total.toFixed(2)}</span>
              </div>
            </div>

            <div class="p-2.5 rounded-xl bg-black/40 border border-[#B8945B]/20 text-[10px] text-[#D6C2B0] text-center">
              🔒 256-Bit Encrypted Luxury Checkout • Artisanal Freshness Guaranteed
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
          <div>
            <div class="flex items-center justify-between mb-4 border-b border-[#B8945B]/20 pb-3">
              <div>
                <h3 class="font-display text-2xl text-white font-bold">01. Delivery Destination</h3>
                <p class="text-xs text-[#D6C2B0] mt-0.5">Enter your address for freshly chilled artisanal delivery.</p>
              </div>
              <span class="px-3 py-1 rounded-full bg-[#1A0905] border border-[#B8945B]/40 text-[#E6CA85] text-xs font-serif font-bold">
                Step 1 of 2
              </span>
            </div>

            <!-- Clean Delivery ETA Pill -->
            <div class="p-3.5 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 mb-5 flex items-center justify-between shadow-md">
              <div class="flex items-center gap-2.5">
                <span class="text-lg">⚡</span>
                <div>
                  <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold block">Artisanal Express Delivery</span>
                  <span class="text-xs text-white font-semibold">Arriving in nearly ${etaInfo.estimatedMinutes} Mins (${etaInfo.distanceKm} km)</span>
                </div>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold uppercase font-mono">
                COMPLIMENTARY
              </span>
            </div>

            <!-- Saved Address Quick Selector -->
            ${this.renderSavedAddressesSelector()}

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif">
              <div>
                <label class="block font-semibold text-[#E6CA85] mb-1">Full Name</label>
                <input type="text" id="chkName" value="${this.state.address.fullName}"
                       class="w-full px-3.5 py-2.5 rounded-xl border border-[#B8945B]/40 bg-[#1A0905] focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-white" />
              </div>
              <div>
                <label class="block font-semibold text-[#E6CA85] mb-1">Phone Number (For Delivery Handover)</label>
                <input type="text" id="chkPhone" value="${this.state.address.phone}"
                       class="w-full px-3.5 py-2.5 rounded-xl border border-[#B8945B]/40 bg-[#1A0905] focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-white font-mono" />
              </div>
              <div>
                <label class="block font-semibold text-[#E6CA85] mb-1">Email Address</label>
                <input type="email" id="chkEmail" value="${this.state.address.email}"
                       class="w-full px-3.5 py-2.5 rounded-xl border border-[#B8945B]/40 bg-[#1A0905] focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-white" />
              </div>
              <div>
                <label class="block font-semibold text-[#E6CA85] mb-1">City / Region</label>
                <input type="text" id="chkCity" list="citySuggestions" value="${this.state.address.city || 'Chennai'}"
                       onchange="window.checkoutManager.updateAddressCity(this.value)"
                       class="w-full px-3.5 py-2.5 rounded-xl border border-[#B8945B]/40 bg-[#1A0905] focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-white font-semibold" />
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
                <label class="block font-semibold text-[#E6CA85] mb-1">Delivery Street Address</label>
                <input type="text" id="chkStreet" value="${this.state.address.street}"
                       oninput="window.checkoutManager.updateAddressStreet(this.value)"
                       placeholder="Door No., Street Name, Landmark"
                       class="w-full px-3.5 py-2.5 rounded-xl border border-[#B8945B]/40 bg-[#1A0905] focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-white" />
              </div>
              <div class="sm:col-span-2">
                <label class="block font-semibold text-[#E6CA85] mb-1">Special Delivery Notes (Optional)</label>
                <input type="text" id="chkInstructions" value="${this.state.address.instructions}"
                       placeholder="e.g. Ring bell, leave with concierge"
                       class="w-full px-3.5 py-2.5 rounded-xl border border-[#B8945B]/40 bg-[#1A0905] focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-white" />
              </div>
            </div>

            <!-- Gifting Checkbox -->
            <div class="mt-5 p-3.5 rounded-2xl bg-[#1A0905] border border-[#B8945B]/30 space-y-2">
              <label class="flex items-center gap-2.5 cursor-pointer">
                <input type="checkbox" id="chkIsGift" ${this.state.isGift ? 'checked' : ''}
                       onchange="window.checkoutManager.toggleGift(this.checked)"
                       class="w-4 h-4 accent-[#B8945B] rounded" />
                <span class="text-xs font-serif font-bold text-[#E6CA85]">🎁 Add Complimentary Calligraphy Gift Note</span>
              </label>
              ${this.state.isGift ? `
                <div class="mt-2">
                  <textarea id="chkGiftMessage" rows="2" placeholder="Write your personalized gift message here..."
                            class="w-full p-2.5 rounded-xl border border-[#B8945B]/40 bg-[#241009] text-xs text-white font-serif"></textarea>
                </div>
              ` : ''}
            </div>

            <div class="mt-8 flex justify-end">
              <button type="button" onclick="window.checkoutManager.saveStep1AndContinue()"
                      class="px-8 py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center gap-2 shadow-xl cursor-pointer">
                <span>Continue to Payment</span> →
              </button>
            </div>
          </div>
        `;

      case 2:
        return `
          <div>
            <div class="flex items-center justify-between mb-4 border-b border-[#B8945B]/20 pb-3">
              <div>
                <h3 class="font-display text-2xl text-white font-bold">02. Select Payment Method</h3>
                <p class="text-xs text-[#D6C2B0] mt-0.5">Fast, encrypted and secure checkout.</p>
              </div>
              <span class="px-3 py-1 rounded-full bg-[#1A0905] border border-[#B8945B]/40 text-[#E6CA85] text-xs font-serif font-bold">
                Step 2 of 2
              </span>
            </div>

            <!-- Delivery Summary Reminder -->
            <div class="p-3.5 rounded-2xl bg-[#1A0905] border border-[#B8945B]/30 mb-6 flex items-center justify-between text-xs">
              <div>
                <span class="text-[10px] uppercase font-serif tracking-widest text-[#B8945B] font-bold block">Delivering To:</span>
                <p class="text-white font-serif font-semibold truncate max-w-sm">${this.state.address.fullName} • ${this.state.address.street}, ${this.state.address.city}</p>
              </div>
              <button type="button" onclick="window.checkoutManager.setStep(1)" class="text-[#E6CA85] hover:underline font-serif text-xs">
                Edit
              </button>
            </div>

            <!-- 3 Clean Payment Methods -->
            <div class="space-y-3 mb-6">
              
              <!-- 1. UPI (Instant) -->
              <label class="p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${this.state.paymentMethod === 'upi' ? 'border-[#B8945B] bg-[#1A0905] ring-2 ring-[#B8945B]/40 shadow-lg' : 'border-[#B8945B]/20 bg-[#1A0905]/50 hover:border-[#B8945B]/50'}">
                <div class="flex items-center gap-3.5">
                  <input type="radio" name="payMethod" value="upi" ${this.state.paymentMethod === 'upi' ? 'checked' : ''}
                         onchange="window.checkoutManager.setPaymentMethod('upi')" class="accent-[#B8945B]" />
                  <div>
                    <h4 class="font-serif text-sm font-bold text-white flex items-center gap-2">
                      <span>📱 UPI Instant</span>
                      <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40">Fastest</span>
                    </h4>
                    <p class="text-xs text-[#D6C2B0]">Google Pay, PhonePe, Paytm, or any UPI App</p>
                  </div>
                </div>
                <span class="text-xs text-[#E6CA85] font-mono font-bold">Recommended</span>
              </label>
              ${this.state.paymentMethod === 'upi' ? `
                <div class="p-4 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 ml-4 space-y-2 text-xs font-serif">
                  <label class="block font-semibold text-[#E6CA85]">Your UPI ID / Mobile Number</label>
                  <input type="text" id="chkUpiId" value="${this.state.upiId}"
                         placeholder="e.g. mobile@upi or username@okaxis"
                         class="w-full px-3.5 py-2.5 rounded-xl border border-[#B8945B]/40 bg-[#241009] text-white font-mono" />
                  <p class="text-[11px] text-[#D6C2B0]">You can also scan our delivery concierge's dynamic QR code on arrival.</p>
                </div>
              ` : ''}

              <!-- 2. Cards -->
              <label class="p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${this.state.paymentMethod === 'card' ? 'border-[#B8945B] bg-[#1A0905] ring-2 ring-[#B8945B]/40 shadow-lg' : 'border-[#B8945B]/20 bg-[#1A0905]/50 hover:border-[#B8945B]/50'}">
                <div class="flex items-center gap-3.5">
                  <input type="radio" name="payMethod" value="card" ${this.state.paymentMethod === 'card' ? 'checked' : ''}
                         onchange="window.checkoutManager.setPaymentMethod('card')" class="accent-[#B8945B]" />
                  <div>
                    <h4 class="font-serif text-sm font-bold text-white">💳 Credit or Debit Card</h4>
                    <p class="text-xs text-[#D6C2B0]">Visa, Mastercard, RuPay, Amex</p>
                  </div>
                </div>
              </label>
              ${this.state.paymentMethod === 'card' ? `
                <div class="p-4 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 ml-4 grid grid-cols-2 gap-3 text-xs font-serif">
                  <div class="col-span-2">
                    <label class="block font-semibold text-[#E6CA85] mb-1">Card Number</label>
                    <input type="text" value="${this.state.cardDetails.number}"
                           class="w-full px-3.5 py-2 rounded-xl border border-[#B8945B]/40 bg-[#241009] text-white font-mono" />
                  </div>
                  <div>
                    <label class="block font-semibold text-[#E6CA85] mb-1">Expiry Date</label>
                    <input type="text" value="${this.state.cardDetails.expiry}"
                           class="w-full px-3.5 py-2 rounded-xl border border-[#B8945B]/40 bg-[#241009] text-white font-mono" />
                  </div>
                  <div>
                    <label class="block font-semibold text-[#E6CA85] mb-1">CVV</label>
                    <input type="password" value="${this.state.cardDetails.cvv}" maxlength="4"
                           class="w-full px-3.5 py-2 rounded-xl border border-[#B8945B]/40 bg-[#241009] text-white font-mono" />
                  </div>
                </div>
              ` : ''}

              <!-- 3. Pay on Delivery -->
              <label class="p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${this.state.paymentMethod === 'cod' ? 'border-[#B8945B] bg-[#1A0905] ring-2 ring-[#B8945B]/40 shadow-lg' : 'border-[#B8945B]/20 bg-[#1A0905]/50 hover:border-[#B8945B]/50'}">
                <div class="flex items-center gap-3.5">
                  <input type="radio" name="payMethod" value="cod" ${this.state.paymentMethod === 'cod' ? 'checked' : ''}
                         onchange="window.checkoutManager.setPaymentMethod('cod')" class="accent-[#B8945B]" />
                  <div>
                    <h4 class="font-serif text-sm font-bold text-white">💵 Pay on Delivery</h4>
                    <p class="text-xs text-[#D6C2B0]">Cash or UPI scan at your doorstep upon handover</p>
                  </div>
                </div>
              </label>

            </div>

            <!-- Action Buttons -->
            <div class="mt-8 flex justify-between items-center">
              <button type="button" onclick="window.checkoutManager.setStep(1)"
                      class="px-6 py-2.5 rounded-xl border border-[#B8945B]/40 text-[#D6C2B0] hover:text-white font-serif text-xs font-semibold">
                ← Back to Address
              </button>
              <button type="button" onclick="window.checkoutManager.placeOrder()"
                      class="px-8 py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-bold tracking-wider shadow-2xl flex items-center gap-2 cursor-pointer">
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
      deliverySlot: `Express Artisanal — Within ${fallbackEta?.estimatedMinutes || 25} Mins`,
      trackingNumber: 'IN-EXP-' + Math.floor(1000 + Math.random() * 9000) + '-DESIO',
      distanceKm: fallbackEta?.distanceKm || 3.5,
      estimatedMinutes: fallbackEta?.estimatedMinutes || 25
    };

    const orderId = order.id || 'DESIO-9142';
    const trackingNumber = order.trackingNumber || ('IN-EXP-' + String(orderId).replace('DESIO-', '') + '-DESIO');
    const totalNum = Number(order.total) || 0;
    const totalDisplay = totalNum > 0 ? totalNum.toFixed(2) : '1,040.00';
    const distanceDisplay = order.distanceKm || fallbackEta?.distanceKm || 3.5;
    const minutesDisplay = order.estimatedMinutes || fallbackEta?.estimatedMinutes || 25;
    const streetDisplay = (this.state && this.state.address && this.state.address.street) || 'West Jafferkhanpet';
    const cityDisplay = (this.state && this.state.address && this.state.address.city) || 'Chennai';

    return `
      <div class="text-center py-8 space-y-6">
        
        <!-- Animated Crown Badge -->
        <div class="w-20 h-20 mx-auto rounded-full bg-[#1A0905] border-2 border-[#B8945B] flex items-center justify-center text-4xl shadow-2xl animate-bounce">
          👑
        </div>

        <div>
          <span class="text-xs uppercase tracking-widest text-[#E6CA85] font-serif font-bold">Order Successfully Placed</span>
          <h2 class="font-display text-3xl md:text-4xl text-white font-bold mt-1">"YOUR DESIO IS ON ITS WAY."</h2>
          <p class="text-xs text-[#D6C2B0] max-w-md mx-auto mt-2">
            Our master pastry chefs have commenced handcrafting your desserts with exquisite care.
          </p>
        </div>

        <!-- ETA Highlight Banner -->
        <div class="max-w-md mx-auto p-4 rounded-2xl bg-[#1A0905] border border-[#B8945B]/50 flex items-center justify-between shadow-xl">
          <div class="text-left">
            <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold block">Estimated Arrival</span>
            <span class="font-serif text-lg font-bold text-white">Nearly ${minutesDisplay} Minutes</span>
          </div>
          <div class="text-right font-mono text-xs text-[#D6C2B0]">
            <span>${distanceDisplay} km away</span>
            <span class="block text-emerald-400 font-bold">● Active Dispatch</span>
          </div>
        </div>

        <!-- Order Metadata Receipt Badge -->
        <div class="max-w-md mx-auto p-5 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 text-left text-xs space-y-3 shadow-lg">
          <div class="flex justify-between items-center border-b border-[#B8945B]/30 pb-2">
            <span class="font-serif font-bold text-white">Order Reference:</span>
            <span class="font-mono font-bold text-[#E6CA85]">${orderId}</span>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-[#D6C2B0]">Delivery Destination:</span>
            <span class="font-semibold text-white truncate max-w-[240px]">${streetDisplay}, ${cityDisplay}</span>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-[#D6C2B0]">Consignment Tracking:</span>
            <span class="font-mono text-[11px] text-[#E6CA85]">${trackingNumber}</span>
          </div>

          <div class="flex justify-between items-center border-t border-[#B8945B]/30 pt-2 font-display font-bold text-sm text-white">
            <span>Paid Total:</span>
            <span class="text-gold-gradient text-base font-mono">₹${totalDisplay}</span>
          </div>
        </div>

        <!-- Real-Time Delivery Tracker Timeline -->
        <div class="max-w-md mx-auto pt-2">
          <h5 class="text-xs font-serif font-bold uppercase tracking-wider text-[#E6CA85] mb-3">Live Atelier Progress</h5>
          <div class="flex items-center justify-between text-[10px] text-[#D6C2B0]">
            <div class="flex flex-col items-center">
              <span class="w-7 h-7 rounded-full bg-[#B8945B] text-black flex items-center justify-center font-bold shadow">1</span>
              <span class="mt-1 font-semibold text-white">Crafting</span>
            </div>
            <div class="flex-1 h-0.5 bg-[#B8945B]"></div>
            <div class="flex flex-col items-center">
              <span class="w-7 h-7 rounded-full bg-[#E6CA85] text-black flex items-center justify-center font-bold animate-pulse shadow">2</span>
              <span class="mt-1 font-semibold text-[#E6CA85]">Chamber Chilling</span>
            </div>
            <div class="flex-1 h-0.5 bg-[#B8945B]/30"></div>
            <div class="flex flex-col items-center">
              <span class="w-7 h-7 rounded-full bg-stone-800 text-stone-400 flex items-center justify-center font-bold">3</span>
              <span class="mt-1 text-stone-500">Insulated Courier</span>
            </div>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button type="button" onclick="if(window.ladesioApp && window.ladesioApp.openOrderTracker) window.ladesioApp.openOrderTracker('${order.id}');"
                  class="px-7 py-3 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center gap-2 shadow-2xl">
            <span>🚚</span> Track Live Dispatch & Traffic Updates
          </button>
          <a href="#account" onclick="if(window.ladesioApp && window.ladesioApp.setActiveAccountTab) window.ladesioApp.setActiveAccountTab('orders');"
             class="px-6 py-3 rounded-xl border border-[#B8945B]/40 hover:border-[#B8945B] text-white font-serif text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-md">
            <span>📦</span> View Order History
          </a>
          <a href="#menu" class="px-6 py-3 rounded-xl border border-white/20 text-[#D6C2B0] hover:text-white font-serif text-xs font-semibold tracking-wider">
            Continue Exploring
          </a>
        </div>

      </div>
    `;
  }

  renderSavedAddressesSelector() {
    const data = (typeof loyaltyStore !== 'undefined' && loyaltyStore.getData) ? loyaltyStore.getData() : null;
    const addresses = data?.profile?.savedAddresses || [];
    if (addresses.length <= 1) return '';

    return `
      <div class="mb-5 p-3.5 rounded-2xl bg-[#1A0905] border border-[#B8945B]/30">
        <label class="block text-[11px] font-semibold text-[#E6CA85] uppercase tracking-wider mb-2">
          📍 Choose from your Saved Privé Addresses:
        </label>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${addresses.map(addr => `
            <button type="button" onclick="window.checkoutManager.selectSavedAddress('${addr.id}')"
                    class="text-left p-2.5 rounded-xl border transition-all text-xs ${(this.state.address.street === addr.address) ? 'border-[#B8945B] bg-[#241009] text-white ring-1 ring-[#B8945B]' : 'border-[#B8945B]/20 bg-black/30 text-[#D6C2B0] hover:text-white'}">
              <div class="font-bold text-[#E6CA85] flex items-center justify-between">
                <span>${addr.name}</span>
                ${addr.isDefault ? '<span class="text-[9px] px-1.5 py-0.5 rounded bg-[#B8945B] text-black">DEFAULT</span>' : ''}
              </div>
              <p class="truncate text-[11px] mt-0.5">${addr.address}, ${addr.city}</p>
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
      discount: summary.discount,
      deliveryFee: summary.delivery,
      total: summary.total,
      paymentMethod: this.state.paymentMethod === 'card' ? 'Visa / Mastercard' : (this.state.paymentMethod === 'upi' ? 'UPI / Google Pay' : 'Net Banking Portal'),
      address: { ...this.state.address, city },
      deliverySlot: this.state.deliveryMethod === 'express' 
        ? `Express Artisanal — Within ${etaInfo.estimatedMinutes} Mins (${city})` 
        : `Scheduled Luxury Slot (${city})`,
      trackingNumber: 'IN-EXP-' + Math.floor(1000 + Math.random() * 9000) + '-DESIO',
      distanceKm: etaInfo.distanceKm,
      estimatedMinutes: etaInfo.estimatedMinutes
    };

    const newOrder = loyaltyStore.addOrder(orderData);
    this.lastPlacedOrder = { ...orderData, ...(newOrder || {}) };

    // Clear cart
    cartStore.clearCart();

    const showReceipt = () => {
      this.currentStep = 3;
      this.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (this.onOrderCompleted) {
        this.onOrderCompleted(newOrder);
      }
    };

    if (typeof window !== 'undefined' && window.ladesioSoundscape) {
      if (typeof window.ladesioSoundscape.playCrystalChime === 'function') {
        window.ladesioSoundscape.playCrystalChime();
      }
      if (typeof window.ladesioSoundscape.showCurtain === 'function') {
        window.ladesioSoundscape.showCurtain(
          'DISPATCHING ORDER',
          'Crafting Your Bespoke Patisserie Creation...',
          1100,
          showReceipt
        );
        return;
      }
    }

    showReceipt();
  }
}
