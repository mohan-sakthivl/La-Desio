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

    if (summary.items.length === 0 && this.currentStep !== 4) {
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
      { num: 1, label: 'Delivery Address' },
      { num: 2, label: 'Delivery Method' },
      { num: 3, label: 'Payment & Route' },
      { num: 4, label: 'Confirmation' }
    ];

    const etaInfo = this.calculateDistanceAndETA();

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
                <h3 class="font-display text-2xl text-white font-bold">01. Destination & Delivery Address</h3>
                <p class="text-xs text-[#D6C2B0] mt-0.5">Where shall our courier rush your freshly chilled desserts?</p>
              </div>
              <span class="px-3 py-1 rounded-full bg-[#1A0905] border border-[#B8945B]/40 text-[#E6CA85] text-xs font-serif font-bold">
                Step 1 of 4
              </span>
            </div>

            <!-- Dynamic Distance & ETA Highlight Banner -->
            <div class="p-4 rounded-2xl bg-gradient-to-r from-[#1A0905] to-[#2B130B] border border-[#B8945B]/50 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-[#B8945B]/20 border border-[#B8945B] flex items-center justify-center text-xl shrink-0">
                  ⚡
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs uppercase font-serif tracking-wider text-[#E6CA85] font-bold">Live Atelier Transit Estimation</span>
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                  <p class="text-sm text-white font-serif font-bold">
                    Will take <span class="text-[#E6CA85] font-mono">nearly ${etaInfo.estimatedMinutes} minutes</span> based upon your distance (${etaInfo.distanceKm} km).
                  </p>
                </div>
              </div>
              <span class="text-[11px] text-[#D6C2B0] font-mono shrink-0 bg-black/40 px-3 py-1.5 rounded-lg border border-[#B8945B]/30">
                ${etaInfo.shopName.split('(')[0]}
              </span>
            </div>

            <!-- Saved Address Quick Selector if profile has multiple -->
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
                <label class="block font-semibold text-[#E6CA85] mb-1">Street Address, Door No., Landmark</label>
                <input type="text" id="chkStreet" value="${this.state.address.street}"
                       oninput="window.checkoutManager.updateAddressStreet(this.value)"
                       placeholder="e.g. No.60/A Gnanamani St, West Jafferkhanpet"
                       class="w-full px-3.5 py-2.5 rounded-xl border border-[#B8945B]/40 bg-[#1A0905] focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-white" />
              </div>
              <div class="sm:col-span-2">
                <label class="block font-semibold text-[#E6CA85] mb-1">Special Delivery Instructions</label>
                <input type="text" id="chkInstructions" value="${this.state.address.instructions}"
                       placeholder="e.g. Ring bell, handle with care, temperature-insulated packaging"
                       class="w-full px-3.5 py-2.5 rounded-xl border border-[#B8945B]/40 bg-[#1A0905] focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-white" />
              </div>
            </div>

            <!-- Gifting Checkbox -->
            <div class="mt-6 p-4 rounded-2xl bg-[#1A0905] border border-[#B8945B]/30 space-y-3">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" id="chkIsGift" ${this.state.isGift ? 'checked' : ''}
                       onchange="window.checkoutManager.toggleGift(this.checked)"
                       class="w-4 h-4 accent-[#B8945B] rounded" />
                <span class="text-xs font-serif font-bold text-[#E6CA85]">🎁 This order is a special gift for someone</span>
              </label>
              ${this.state.isGift ? `
                <div class="mt-2">
                  <label class="block text-[11px] font-semibold text-[#D6C2B0] mb-1">Complimentary Calligraphy Gift Note</label>
                  <textarea id="chkGiftMessage" rows="2" placeholder="Write your warm personalized message here..."
                            class="w-full p-2.5 rounded-xl border border-[#B8945B]/40 bg-[#241009] text-xs text-white font-serif"></textarea>
                </div>
              ` : ''}
            </div>

            <div class="mt-8 flex justify-end">
              <button type="button" onclick="window.checkoutManager.saveStep1AndContinue()"
                      class="px-8 py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center gap-2 shadow-xl">
                <span>Continue to Delivery Experience</span> →
              </button>
            </div>
          </div>
        `;

      case 2:
        return `
          <div>
            <div class="flex items-center justify-between mb-4 border-b border-[#B8945B]/20 pb-3">
              <div>
                <h3 class="font-display text-2xl text-white font-bold">02. Choose Delivery Experience</h3>
                <p class="text-xs text-[#D6C2B0] mt-0.5">Select your preferred cold-chain transit mode.</p>
              </div>
              <span class="px-3 py-1 rounded-full bg-[#1A0905] border border-[#B8945B]/40 text-[#E6CA85] text-xs font-serif font-bold">
                Step 2 of 4
              </span>
            </div>

            <!-- ETA Confirmation Box -->
            <div class="p-4 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 mb-6 flex items-center justify-between">
              <div>
                <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold">Targeted Arrival</span>
                <p class="text-sm font-serif text-white font-bold">
                  Nearly ${etaInfo.estimatedMinutes} Minutes (${etaInfo.distanceKm} km from ${etaInfo.shopName.split('(')[0]})
                </p>
              </div>
              <span class="px-3 py-1 rounded-full bg-[#B8945B]/20 text-[#E6CA85] text-xs font-bold border border-[#B8945B]">
                ⚡ Express Dispatch
              </span>
            </div>

            <div class="space-y-4">
              <label class="p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${this.state.deliveryMethod === 'express' ? 'border-[#B8945B] bg-[#1A0905] ring-2 ring-[#B8945B]/40 shadow-lg' : 'border-[#B8945B]/20 bg-[#1A0905]/50'}">
                <div class="flex items-start gap-3.5">
                  <input type="radio" name="deliveryMethod" value="express" ${this.state.deliveryMethod === 'express' ? 'checked' : ''}
                         onchange="window.checkoutManager.setDeliveryMethod('express')" class="mt-1 accent-[#B8945B]" />
                  <div>
                    <h4 class="font-serif text-sm font-bold text-white">⚡ Express Artisanal Rush (Nearly ${etaInfo.estimatedMinutes} Mins)</h4>
                    <p class="text-xs text-[#D6C2B0]">Direct handover in temperature-locked insulated carrier (+4°C optimal).</p>
                  </div>
                </div>
                <span class="text-xs font-bold text-[#E6CA85] font-mono">₹99</span>
              </label>

              <label class="p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${this.state.deliveryMethod === 'scheduled' ? 'border-[#B8945B] bg-[#1A0905] ring-2 ring-[#B8945B]/40 shadow-lg' : 'border-[#B8945B]/20 bg-[#1A0905]/50'}">
                <div class="flex items-start gap-3.5">
                  <input type="radio" name="deliveryMethod" value="scheduled" ${this.state.deliveryMethod === 'scheduled' ? 'checked' : ''}
                         onchange="window.checkoutManager.setDeliveryMethod('scheduled')" class="mt-1 accent-[#B8945B]" />
                  <div>
                    <h4 class="font-serif text-sm font-bold text-white">🕒 Scheduled Evening Reserve Window</h4>
                    <p class="text-xs text-[#D6C2B0]">Guaranteed delivery window for evening dessert course.</p>
                    <select id="scheduledTimeSelect" class="mt-2 text-xs p-2 rounded-xl border border-[#B8945B]/40 bg-[#241009] text-white">
                      <option>Today: 6:00 PM – 8:00 PM</option>
                      <option>Today: 8:00 PM – 10:00 PM</option>
                      <option>Tomorrow: 2:00 PM – 4:00 PM</option>
                      <option>Tomorrow: 6:00 PM – 8:00 PM</option>
                    </select>
                  </div>
                </div>
                <span class="text-xs font-bold text-[#E6CA85] font-mono">₹99</span>
              </label>

              <label class="p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${this.state.deliveryMethod === 'temperature' ? 'border-[#B8945B] bg-[#1A0905] ring-2 ring-[#B8945B]/40 shadow-lg' : 'border-[#B8945B]/20 bg-[#1A0905]/50'}">
                <div class="flex items-start gap-3.5">
                  <input type="radio" name="deliveryMethod" value="temperature" ${this.state.deliveryMethod === 'temperature' ? 'checked' : ''}
                         onchange="window.checkoutManager.setDeliveryMethod('temperature')" class="mt-1 accent-[#B8945B]" />
                  <div>
                    <h4 class="font-serif text-sm font-bold text-white">👑 Privé Chilled Vault & Wooden Keepsake Hamper</h4>
                    <p class="text-xs text-[#D6C2B0]">Branded gold-embossed wooden box, satin ribbons & temperature logger.</p>
                  </div>
                </div>
                <span class="text-xs font-bold text-[#E6CA85] font-mono">+₹199</span>
              </label>
            </div>

            <div class="mt-8 flex justify-between">
              <button type="button" onclick="window.checkoutManager.setStep(1)"
                      class="px-6 py-2.5 rounded-xl border border-[#B8945B]/40 text-[#D6C2B0] hover:text-white font-serif text-xs font-semibold">
                ← Back to Address
              </button>
              <button type="button" onclick="window.checkoutManager.setStep(3)"
                      class="px-8 py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center gap-2 shadow-xl">
                <span>Continue to Payment & Route Map</span> →
              </button>
            </div>
          </div>
        `;

      case 3:
        return `
          <div>
            <div class="flex items-center justify-between mb-4 border-b border-[#B8945B]/20 pb-3">
              <div>
                <h3 class="font-display text-2xl text-white font-bold">03. Route Map & Secure Payment</h3>
                <p class="text-xs text-[#D6C2B0] mt-0.5">Live shop-to-doorstep route preview and encrypted payment gateway.</p>
              </div>
              <span class="px-3 py-1 rounded-full bg-[#1A0905] border border-[#B8945B]/40 text-[#E6CA85] text-xs font-serif font-bold">
                Step 3 of 4
              </span>
            </div>

            <!-- ========================================== -->
            <!-- SHOP TO CUSTOMER LIVE ROUTE & GOOGLE MAPS   -->
            <!-- ========================================== -->
            <div class="mb-6 rounded-2xl bg-[#1A0905] border border-[#B8945B]/50 p-4 shadow-xl space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#B8945B]/20 pb-2.5">
                <div class="flex items-center gap-2">
                  <span class="text-lg">🗺️</span>
                  <div>
                    <h4 class="font-serif text-xs uppercase tracking-wider text-[#E6CA85] font-bold">Live Atelier-to-Doorstep Dispatch Route</h4>
                    <p class="text-[11px] text-[#D6C2B0]">From <strong>${etaInfo.shopName}</strong> → To <strong>${this.state.address.street}, ${this.state.address.city}</strong></p>
                  </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                  <span class="px-2.5 py-1 rounded-full bg-[#B8945B]/20 border border-[#B8945B] text-[#E6CA85] text-[11px] font-mono font-bold">
                    ${etaInfo.distanceKm} km • Nearly ${etaInfo.estimatedMinutes} Mins
                  </span>
                </div>
              </div>

              <!-- Map View Tabs: Google Maps vs Dark Atelier Route -->
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-1.5 bg-black/50 p-1 rounded-xl border border-[#B8945B]/30 text-xs font-serif">
                  <button type="button" onclick="window.checkoutManager.setMapMode('google')"
                          class="px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${(this.state.activeMapMode !== 'vector') ? 'bg-[#4285F4] text-white font-bold shadow' : 'text-[#D6C2B0] hover:text-white'}">
                    <span>📍</span> Google Maps (Live Traffic)
                  </button>
                  <button type="button" onclick="window.checkoutManager.setMapMode('vector')"
                          class="px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${(this.state.activeMapMode === 'vector') ? 'bg-[#B8945B] text-black font-bold shadow' : 'text-[#D6C2B0] hover:text-white'}">
                    <span>👑</span> Atelier Chilled Route
                  </button>
                </div>

                <a href="https://www.google.com/maps/dir/?api=1&origin=LA+DESIO+Flagship+Atelier+West+Jafferkhanpet+Chennai&destination=${encodeURIComponent(this.state.address.street + ', ' + this.state.address.city)}&travelmode=driving"
                   target="_blank" rel="noopener"
                   class="hidden sm:inline-flex items-center gap-1 text-[11px] font-serif text-[#E6CA85] hover:text-white hover:underline">
                  <span>Open in Google Maps App</span> ↗
                </a>
              </div>

              <!-- Route Container -->
              <div id="checkoutRouteMapContainer" class="relative w-full h-60 sm:h-72 rounded-xl overflow-hidden border border-[#B8945B]/30 bg-[#120603]">
                ${this.state.activeMapMode === 'vector' ? this.renderVectorRouteMap(etaInfo) : this.renderGoogleMapsEmbed(etaInfo)}
              </div>

              <div class="flex flex-wrap items-center justify-between text-[11px] text-[#D6C2B0] pt-1">
                <span class="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Transit Status: Optimal Arterial Route via Jafferkhanpet & 100 Feet Rd
                </span>
                <span class="text-stone-400 font-mono">Chilled Vault Temp: 3.8°C</span>
              </div>
            </div>

            <!-- Payment Gateways -->
            <div class="space-y-4">
              <span class="block text-xs uppercase font-serif tracking-widest text-[#E6CA85] font-bold mb-2">Select Payment Method</span>
              
              <div class="grid grid-cols-3 gap-2.5">
                <button type="button" onclick="window.checkoutManager.setPaymentMethod('upi')"
                        class="p-3 rounded-2xl border text-center font-serif text-xs font-bold transition-all ${this.state.paymentMethod === 'upi' ? 'border-[#B8945B] bg-[#1A0905] text-[#E6CA85] ring-2 ring-[#B8945B]/40 shadow-lg' : 'border-[#B8945B]/25 bg-black/40 text-[#D6C2B0]'}">
                  📱 UPI / QR Code
                </button>
                <button type="button" onclick="window.checkoutManager.setPaymentMethod('card')"
                        class="p-3 rounded-2xl border text-center font-serif text-xs font-bold transition-all ${this.state.paymentMethod === 'card' ? 'border-[#B8945B] bg-[#1A0905] text-[#E6CA85] ring-2 ring-[#B8945B]/40 shadow-lg' : 'border-[#B8945B]/25 bg-black/40 text-[#D6C2B0]'}">
                  💳 Debit / Credit Card
                </button>
                <button type="button" onclick="window.checkoutManager.setPaymentMethod('netbanking')"
                        class="p-3 rounded-2xl border text-center font-serif text-xs font-bold transition-all ${this.state.paymentMethod === 'netbanking' ? 'border-[#B8945B] bg-[#1A0905] text-[#E6CA85] ring-2 ring-[#B8945B]/40 shadow-lg' : 'border-[#B8945B]/25 bg-black/40 text-[#D6C2B0]'}">
                  🏦 Net Banking
                </button>
              </div>

              <!-- Payment Form Details -->
              ${this.state.paymentMethod === 'upi' ? `
                <div class="p-5 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 text-center space-y-3">
                  <div class="w-36 h-36 mx-auto bg-white p-2 rounded-xl border-2 border-[#B8945B] shadow-2xl flex flex-col items-center justify-center">
                    <div class="w-full h-full bg-[#180A06] rounded p-1 flex flex-col items-center justify-center text-[#E6CA85] text-[10px] font-mono leading-tight">
                      <span>👑 LA DESIO ATELIER</span>
                      <span class="text-white font-bold mt-1">₹${summary.total.toFixed(2)}</span>
                      <span class="text-[8px] text-stone-400 mt-1">[SCAN WITH ANY UPI APP]</span>
                    </div>
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-white font-serif">Scan with GPay, PhonePe, Paytm, or CRED</p>
                    <p class="text-[11px] text-[#D6C2B0] mt-0.5">Or enter your VPA / UPI ID:</p>
                  </div>
                  <div class="max-w-xs mx-auto">
                    <input type="text" value="${this.state.upiId}"
                           class="w-full px-3.5 py-2 rounded-xl border border-[#B8945B]/40 bg-[#241009] text-xs text-center text-[#E6CA85] font-mono" />
                  </div>
                </div>
              ` : ''}

              ${this.state.paymentMethod === 'card' ? `
                <div class="space-y-4">
                  <div class="p-5 rounded-2xl bg-gradient-to-br from-[#1A0905] via-[#2B130B] to-[#120603] text-white border border-[#B8945B] shadow-2xl max-w-sm mx-auto space-y-4">
                    <div class="flex justify-between items-center">
                      <span class="font-serif italic text-xs tracking-widest text-[#E6CA85]">LA DESIO PRIVÉ VAULT</span>
                      <span class="text-lg">💳</span>
                    </div>
                    <div class="font-mono text-base tracking-widest text-center py-2 text-[#E6CA85]">
                      •••• •••• •••• 4242
                    </div>
                    <div class="flex justify-between items-end text-[10px] uppercase text-[#D6C2B0]">
                      <div>
                        <span class="block text-stone-400">Cardholder</span>
                        <span class="font-bold tracking-wider text-white">${this.state.address.fullName}</span>
                      </div>
                      <div>
                        <span class="block text-stone-400">Expires</span>
                        <span class="font-bold tracking-wider text-white">08/28</span>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 gap-3 text-xs font-serif">
                    <div class="col-span-2">
                      <label class="block font-semibold text-[#E6CA85] mb-1">Card Number</label>
                      <input type="text" placeholder="4242 •••• •••• ••••" value="4242 8819 9021 4242"
                             class="w-full px-3.5 py-2.5 rounded-xl border border-[#B8945B]/40 bg-[#1A0905] text-white font-mono" />
                    </div>
                    <div>
                      <label class="block font-semibold text-[#E6CA85] mb-1">Valid Thru</label>
                      <input type="text" placeholder="MM/YY" value="08/28"
                             class="w-full px-3.5 py-2.5 rounded-xl border border-[#B8945B]/40 bg-[#1A0905] text-white font-mono" />
                    </div>
                    <div>
                      <label class="block font-semibold text-[#E6CA85] mb-1">CVV Security Code</label>
                      <input type="password" placeholder="•••" value="842"
                             class="w-full px-3.5 py-2.5 rounded-xl border border-[#B8945B]/40 bg-[#1A0905] text-white font-mono" />
                    </div>
                  </div>
                </div>
              ` : ''}

              ${this.state.paymentMethod === 'netbanking' ? `
                <div class="p-5 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 space-y-3 text-xs font-serif">
                  <label class="block font-semibold text-[#E6CA85]">Select Banking Portal</label>
                  <select class="w-full px-3.5 py-2.5 rounded-xl border border-[#B8945B]/40 bg-[#241009] text-white">
                    <option>HDFC Bank Concierge</option>
                    <option>ICICI Bank Privé</option>
                    <option>State Bank of India (SBI)</option>
                    <option>Axis Bank Burgundy</option>
                    <option>Kotak Mahindra Bank Privé</option>
                  </select>
                  <p class="text-[11px] text-[#D6C2B0]">You will be safely redirected to your banking institution to authorize ₹${summary.total.toFixed(2)}.</p>
                </div>
              ` : ''}

            </div>

            <div class="mt-8 flex justify-between items-center">
              <button type="button" onclick="window.checkoutManager.setStep(2)"
                      class="px-6 py-2.5 rounded-xl border border-[#B8945B]/40 text-[#D6C2B0] hover:text-white font-serif text-xs font-semibold">
                ← Back
              </button>
              <button type="button" onclick="window.checkoutManager.placeOrder()"
                      class="px-8 py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider shadow-2xl flex items-center gap-2">
                <span>Authorize & Place Order (₹${summary.total.toFixed(2)})</span> 👑
              </button>
            </div>
          </div>
        `;

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
    const order = this.lastPlacedOrder || {
      id: 'DESIO-9142',
      total: 1040,
      deliverySlot: `Express Artisanal — Within ${etaInfo.estimatedMinutes} Mins`,
      trackingNumber: 'IN-EXP-9142-DESIO',
      distanceKm: etaInfo.distanceKm,
      estimatedMinutes: etaInfo.estimatedMinutes
    };

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
            <span class="font-serif text-lg font-bold text-white">Nearly ${order.estimatedMinutes || etaInfo.estimatedMinutes} Minutes</span>
          </div>
          <div class="text-right font-mono text-xs text-[#D6C2B0]">
            <span>${order.distanceKm || etaInfo.distanceKm} km away</span>
            <span class="block text-emerald-400 font-bold">● Active Dispatch</span>
          </div>
        </div>

        <!-- Order Metadata Receipt Badge -->
        <div class="max-w-md mx-auto p-5 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 text-left text-xs space-y-3 shadow-lg">
          <div class="flex justify-between items-center border-b border-[#B8945B]/30 pb-2">
            <span class="font-serif font-bold text-white">Order Reference:</span>
            <span class="font-mono font-bold text-[#E6CA85]">${order.id}</span>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-[#D6C2B0]">Delivery Destination:</span>
            <span class="font-semibold text-white truncate max-w-[240px]">${this.state.address.street}, ${this.state.address.city}</span>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-[#D6C2B0]">Consignment Tracking:</span>
            <span class="font-mono text-[11px] text-[#E6CA85]">${order.trackingNumber}</span>
          </div>

          <div class="flex justify-between items-center border-t border-[#B8945B]/30 pt-2 font-display font-bold text-sm text-white">
            <span>Paid Total:</span>
            <span class="text-gold-gradient text-base font-mono">₹${order.total.toFixed(2)}</span>
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
    this.lastPlacedOrder = newOrder;

    // Clear cart
    cartStore.clearCart();

    this.setStep(4);

    if (this.onOrderCompleted) {
      this.onOrderCompleted(newOrder);
    }
  }
}
