// LA DESIO - Multi-Step Luxury Checkout Flow (INR Edition)
import { cartStore } from './cart.js';
import { loyaltyStore } from './loyalty.js';

export class CheckoutManager {
  constructor(containerId, onOrderCompleted) {
    this.container = document.getElementById(containerId);
    this.onOrderCompleted = onOrderCompleted;
    this.currentStep = 1;
    this.state = {
      address: {
        fullName: 'Ananya Sharma',
        email: 'ananya.sharma@ladesio.com',
        phone: '+91 98201 44892',
        street: 'Pali Hill, Bandra West, Apt 702',
        city: 'Mumbai',
        postal: '400050',
        country: 'India',
        instructions: 'Please call on arrival. Temperature insulated delivery.'
      },
      deliveryMethod: 'express', // express, scheduled, temperature
      scheduledSlot: 'Today Evening (6:00 PM - 8:00 PM)',
      paymentMethod: 'upi', // upi, card, netbanking, applepay
      cardDetails: {
        number: '•••• •••• •••• 4242',
        name: 'ANANYA SHARMA',
        expiry: '08/28',
        cvv: '•••'
      },
      upiId: 'ananya.sharma@okaxis',
      orderNotes: '',
      isGift: false,
      giftMessage: ''
    };
  }

  init() {
    this.currentStep = 1;
    this.render();
  }

  setStep(step) {
    this.currentStep = Math.max(1, Math.min(4, step));
    this.render();
  }

  render() {
    if (!this.container) return;
    const summary = cartStore.getSummary();

    if (summary.items.length === 0 && this.currentStep !== 4) {
      this.container.innerHTML = `
        <div class="max-w-md mx-auto text-center py-16 px-4">
          <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-[#F8F1E7] border border-[#B8945B]/30 flex items-center justify-center text-3xl">
            🛍️
          </div>
          <h3 class="font-display text-2xl text-[#3A1F17] mb-2">Your Bag is Empty</h3>
          <p class="text-xs text-[#6B3E2E] mb-6">Discover our signature creations or craft your bespoke dessert to proceed with checkout.</p>
          <a href="#menu" class="inline-block px-8 py-3 rounded-lg btn-gold-luxury font-serif text-xs font-semibold tracking-wider">
            Explore The Menu
          </a>
        </div>
      `;
      return;
    }

    const steps = [
      { num: 1, label: 'Delivery Address' },
      { num: 2, label: 'Delivery Method' },
      { num: 3, label: 'Payment' },
      { num: 4, label: 'Confirmation' }
    ];

    this.container.innerHTML = `
      <div class="max-w-4xl mx-auto px-4 py-8">
        
        <!-- Header -->
        <div class="text-center mb-8">
          <span class="text-xs tracking-widest uppercase text-[#B8945B] font-semibold">La Desio Concierge</span>
          <h2 class="font-display text-3xl md:text-4xl text-[#3A1F17] mt-1">Artisanal Checkout</h2>
          <div class="w-16 h-[1px] bg-[#B8945B] mx-auto mt-3"></div>
        </div>

        <!-- Checkout Steps Ribbon -->
        <div class="flex items-center justify-between max-w-xl mx-auto mb-8">
          ${steps.map(s => `
            <div class="flex flex-col items-center">
              <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-serif font-bold transition-all ${this.currentStep === s.num ? 'bg-[#3A1F17] text-[#E6CA85] ring-4 ring-[#B8945B]/20 scale-110' : (this.currentStep > s.num ? 'bg-[#B8945B] text-white' : 'bg-[#F8F1E7] text-[#6B3E2E]')}">
                ${this.currentStep > s.num ? '✓' : '0' + s.num}
              </div>
              <span class="text-[10px] tracking-wider uppercase font-semibold mt-1 hidden sm:block ${this.currentStep === s.num ? 'text-[#3A1F17] font-bold' : 'text-[#6B3E2E]/70'}">
                ${s.label}
              </span>
            </div>
          `).join(`
            <div class="flex-1 h-[1px] bg-[#B8945B]/30 mx-2 mb-4 hidden sm:block"></div>
          `)}
        </div>

        <!-- Two Column Content -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left Main Form Area -->
          <div class="lg:col-span-8 bg-[#FFFDF9] rounded-2xl border border-[#B8945B]/30 p-6 shadow-xl">
            ${this.renderCurrentStep(summary)}
          </div>

          <!-- Right Sticky Order Summary -->
          <div class="lg:col-span-4 bg-[#FFFDF9] rounded-2xl border border-[#B8945B]/30 p-6 shadow-xl sticky top-24">
            <h4 class="font-serif text-lg text-[#3A1F17] font-bold border-b border-[#B8945B]/20 pb-3 mb-4">
              Order Summary (${summary.itemCount} ${summary.itemCount === 1 ? 'creation' : 'creations'})
            </h4>

            <!-- Compact Item List -->
            <div class="space-y-3 max-h-56 overflow-y-auto pr-1 mb-4">
              ${summary.items.map(item => `
                <div class="flex items-center gap-3 text-xs">
                  <img src="${item.image}" alt="${item.name}" class="w-10 h-10 rounded-lg object-cover border border-[#B8945B]/30 shrink-0" />
                  <div class="flex-1 min-w-0">
                    <p class="font-serif font-bold text-[#3A1F17] truncate">${item.name}</p>
                    <p class="text-[11px] text-[#6B3E2E]">Qty: ${item.quantity} × ₹${item.price}</p>
                  </div>
                  <span class="font-semibold text-[#3A1F17]">₹${(item.price * item.quantity)}</span>
                </div>
              `).join('')}
            </div>

            <!-- Price Breakdown -->
            <div class="space-y-2 border-t border-[#B8945B]/20 pt-3 text-xs">
              <div class="flex justify-between text-[#6B3E2E]">
                <span>Subtotal</span>
                <span>₹${summary.subtotal}</span>
              </div>

              ${summary.discount > 0 ? `
                <div class="flex justify-between text-[#B8945B] font-medium">
                  <span>Courtesy Discount</span>
                  <span>-₹${summary.discount.toFixed(2)}</span>
                </div>
              ` : ''}

              <div class="flex justify-between text-[#6B3E2E]">
                <span>Artisanal Temperature Delivery</span>
                <span>${summary.delivery === 0 ? '<span class="text-emerald-700 font-semibold">FREE</span>' : '₹' + summary.delivery}</span>
              </div>

              <div class="flex justify-between text-[#3A1F17] font-display font-bold text-base border-t border-[#B8945B]/30 pt-2">
                <span>Total Amount</span>
                <span class="text-gold-gradient">₹${summary.total.toFixed(2)}</span>
              </div>
            </div>

            <div class="mt-4 p-3 bg-[#F8F1E7] rounded-xl border border-[#B8945B]/30 text-[11px] text-[#6B3E2E] flex items-center gap-2">
              <span class="text-base">👑</span>
              <span>Earn <strong>${Math.round(summary.total / 10)} Privé Points</strong> on this order.</span>
            </div>

          </div>

        </div>

      </div>
    `;
  }

  renderCurrentStep(summary) {
    switch (this.currentStep) {
      case 1:
        return `
          <div>
            <h3 class="font-display text-xl text-[#3A1F17] mb-1">01. Delivery Address & Contact</h3>
            <p class="text-xs text-[#6B3E2E] mb-6">Where should our concierge deliver your handcrafted desserts?</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label class="block font-semibold text-[#3A1F17] mb-1">Full Name</label>
                <input type="text" id="chkName" value="${this.state.address.fullName}"
                       class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-[#3A1F17]" />
              </div>
              <div>
                <label class="block font-semibold text-[#3A1F17] mb-1">Email for Receipt</label>
                <input type="email" id="chkEmail" value="${this.state.address.email}"
                       class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-[#3A1F17]" />
              </div>
              <div>
                <label class="block font-semibold text-[#3A1F17] mb-1">Phone Number</label>
                <input type="tel" id="chkPhone" value="${this.state.address.phone}"
                       class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-[#3A1F17]" />
              </div>
              <div>
                <label class="block font-semibold text-[#3A1F17] mb-1">City / Atelier</label>
                <select id="chkCity" class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-[#3A1F17]">
                  <option value="Mumbai" ${this.state.address.city === 'Mumbai' ? 'selected' : ''}>Mumbai (Bandra Atelier & Downtown)</option>
                  <option value="Delhi" ${this.state.address.city === 'Delhi' ? 'selected' : ''}>Delhi NCR (DLF Emporio Dispatch)</option>
                  <option value="Bengaluru" ${this.state.address.city === 'Bengaluru' ? 'selected' : ''}>Bengaluru (Lavelle Road Atelier)</option>
                  <option value="Milan" ${this.state.address.city === 'Milan' ? 'selected' : ''}>Milan (Via Montenapoleone)</option>
                  <option value="London" ${this.state.address.city === 'London' ? 'selected' : ''}>London (Mayfair Boutique)</option>
                  <option value="Dubai" ${this.state.address.city === 'Dubai' ? 'selected' : ''}>Dubai (Downtown Courier)</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label class="block font-semibold text-[#3A1F17] mb-1">Street Address, Apartment / Villa</label>
                <input type="text" id="chkStreet" value="${this.state.address.street}"
                       class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-[#3A1F17]" />
              </div>
              <div class="sm:col-span-2">
                <label class="block font-semibold text-[#3A1F17] mb-1">Special Delivery Note</label>
                <input type="text" id="chkInstructions" value="${this.state.address.instructions}"
                       placeholder="e.g. Ring doorbell, fragile packaging"
                       class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-[#3A1F17]" />
              </div>
            </div>

            <!-- Gifting Checkbox -->
            <div class="mt-6 p-4 rounded-xl bg-[#F8F1E7] border border-[#B8945B]/30 space-y-3">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id="chkIsGift" ${this.state.isGift ? 'checked' : ''}
                       onchange="window.checkoutManager.toggleGift(this.checked)"
                       class="w-4 h-4 text-[#3A1F17] rounded border-[#B8945B]" />
                <span class="text-xs font-serif font-bold text-[#3A1F17]">🎁 This order is a special gift for someone</span>
              </label>
              ${this.state.isGift ? `
                <div class="mt-2">
                  <label class="block text-[11px] font-semibold text-[#6B3E2E] mb-1">Complimentary Handwritten Calligraphy Message</label>
                  <textarea id="chkGiftMessage" rows="2" placeholder="Write your heartfelt message here..."
                            class="w-full p-2.5 rounded-lg border border-[#B8945B]/40 bg-white text-xs text-[#3A1F17] font-serif"></textarea>
                </div>
              ` : ''}
            </div>

            <div class="mt-8 flex justify-end">
              <button type="button" onclick="window.checkoutManager.saveStep1AndContinue()"
                      class="px-8 py-3 rounded-lg btn-chocolate-luxury font-serif text-xs font-semibold tracking-wider flex items-center gap-2">
                <span>Continue to Delivery Method</span> →
              </button>
            </div>
          </div>
        `;

      case 2:
        return `
          <div>
            <h3 class="font-display text-xl text-[#3A1F17] mb-1">02. Choose Delivery Experience</h3>
            <p class="text-xs text-[#6B3E2E] mb-6">Select how and when you wish to receive your fresh patisserie.</p>

            <div class="space-y-3">
              <label class="p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${this.state.deliveryMethod === 'express' ? 'border-[#B8945B] bg-[#F8F1E7] ring-2 ring-[#B8945B]/30 shadow-md' : 'border-[#B8945B]/20 bg-white'}">
                <div class="flex items-start gap-3">
                  <input type="radio" name="deliveryMethod" value="express" ${this.state.deliveryMethod === 'express' ? 'checked' : ''}
                         onchange="window.checkoutManager.setDeliveryMethod('express')" class="mt-1 text-[#3A1F17]" />
                  <div>
                    <h4 class="font-serif text-sm font-bold text-[#3A1F17]">Express Artisanal Delivery (Within 45 Mins)</h4>
                    <p class="text-xs text-[#6B3E2E]">Freshly prepared in our nearest atelier and rushed via insulated courier.</p>
                  </div>
                </div>
                <span class="text-xs font-bold text-[#B8945B]">₹99</span>
              </label>

              <label class="p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${this.state.deliveryMethod === 'scheduled' ? 'border-[#B8945B] bg-[#F8F1E7] ring-2 ring-[#B8945B]/30 shadow-md' : 'border-[#B8945B]/20 bg-white'}">
                <div class="flex items-start gap-3">
                  <input type="radio" name="deliveryMethod" value="scheduled" ${this.state.deliveryMethod === 'scheduled' ? 'checked' : ''}
                         onchange="window.checkoutManager.setDeliveryMethod('scheduled')" class="mt-1 text-[#3A1F17]" />
                  <div>
                    <h4 class="font-serif text-sm font-bold text-[#3A1F17]">Scheduled Evening Slot (Guaranteed Window)</h4>
                    <p class="text-xs text-[#6B3E2E]">Perfect for dinner parties or evening romantic celebrations.</p>
                    <select id="scheduledTimeSelect" class="mt-2 text-xs p-1.5 rounded border border-[#B8945B]/40 bg-white text-[#3A1F17]">
                      <option>Today: 6:00 PM – 8:00 PM</option>
                      <option>Today: 8:00 PM – 10:00 PM</option>
                      <option>Tomorrow: 2:00 PM – 4:00 PM</option>
                      <option>Tomorrow: 6:00 PM – 8:00 PM</option>
                    </select>
                  </div>
                </div>
                <span class="text-xs font-bold text-[#B8945B]">₹99</span>
              </label>

              <label class="p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${this.state.deliveryMethod === 'temperature' ? 'border-[#B8945B] bg-[#F8F1E7] ring-2 ring-[#B8945B]/30 shadow-md' : 'border-[#B8945B]/20 bg-white'}">
                <div class="flex items-start gap-3">
                  <input type="radio" name="deliveryMethod" value="temperature" ${this.state.deliveryMethod === 'temperature' ? 'checked' : ''}
                         onchange="window.checkoutManager.setDeliveryMethod('temperature')" class="mt-1 text-[#3A1F17]" />
                  <div>
                    <h4 class="font-serif text-sm font-bold text-[#3A1F17]">VIP Velvet Hamper Packaging & Eco-Chilled Protection</h4>
                    <p class="text-xs text-[#6B3E2E]">Includes branded wooden keepsake box, satin ribbon, and temperature logger.</p>
                  </div>
                </div>
                <span class="text-xs font-bold text-[#B8945B]">+₹199</span>
              </label>
            </div>

            <div class="mt-8 flex justify-between">
              <button type="button" onclick="window.checkoutManager.setStep(1)"
                      class="px-6 py-2.5 rounded-lg border border-[#B8945B]/40 text-[#6B3E2E] hover:bg-[#F8F1E7] font-serif text-xs font-semibold">
                ← Back
              </button>
              <button type="button" onclick="window.checkoutManager.setStep(3)"
                      class="px-8 py-3 rounded-lg btn-chocolate-luxury font-serif text-xs font-semibold tracking-wider flex items-center gap-2">
                <span>Continue to Payment</span> →
              </button>
            </div>
          </div>
        `;

      case 3:
        return `
          <div>
            <h3 class="font-display text-xl text-[#3A1F17] mb-1">03. Secure Payment</h3>
            <p class="text-xs text-[#6B3E2E] mb-6">Select your preferred encrypted luxury transaction gateway.</p>

            <!-- Payment Tabs -->
            <div class="grid grid-cols-3 gap-2 mb-6">
              <button type="button" onclick="window.checkoutManager.setPaymentMethod('upi')"
                      class="p-3 rounded-xl border text-center font-serif text-xs font-bold transition-all ${this.state.paymentMethod === 'upi' ? 'border-[#B8945B] bg-[#3A1F17] text-[#E6CA85] shadow-md' : 'border-[#B8945B]/30 bg-white text-[#3A1F17]'}">
                📱 UPI / QR
              </button>
              <button type="button" onclick="window.checkoutManager.setPaymentMethod('card')"
                      class="p-3 rounded-xl border text-center font-serif text-xs font-bold transition-all ${this.state.paymentMethod === 'card' ? 'border-[#B8945B] bg-[#3A1F17] text-[#E6CA85] shadow-md' : 'border-[#B8945B]/30 bg-white text-[#3A1F17]'}">
                💳 Card / EMI
              </button>
              <button type="button" onclick="window.checkoutManager.setPaymentMethod('netbanking')"
                      class="p-3 rounded-xl border text-center font-serif text-xs font-bold transition-all ${this.state.paymentMethod === 'netbanking' ? 'border-[#B8945B] bg-[#3A1F17] text-[#E6CA85] shadow-md' : 'border-[#B8945B]/30 bg-white text-[#3A1F17]'}">
                🏦 Net Banking
              </button>
            </div>

            <!-- Dynamic Payment Form -->
            ${this.state.paymentMethod === 'upi' ? `
              <div class="p-6 rounded-xl bg-[#F8F1E7] border border-[#B8945B]/30 text-center space-y-4">
                <div class="w-36 h-36 mx-auto bg-white p-2.5 rounded-xl border-2 border-[#B8945B] shadow-inner flex flex-col items-center justify-center">
                  <div class="w-full h-full bg-neutral-900 rounded p-1 flex items-center justify-center text-white text-[10px] font-mono leading-tight">
                    [QR: PAY ₹${summary.total.toFixed(2)}<br/>LA DESIO ATELIER]
                  </div>
                </div>
                <div>
                  <p class="text-xs font-semibold text-[#3A1F17]">Scan with any UPI App (GPay, PhonePe, Paytm, CRED)</p>
                  <p class="text-[11px] text-[#6B3E2E] mt-0.5">Or enter your VPA / UPI ID below:</p>
                </div>
                <div class="max-w-xs mx-auto">
                  <input type="text" value="${this.state.upiId}"
                         class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white text-xs text-center text-[#3A1F17] font-mono" />
                </div>
              </div>
            ` : ''}

            ${this.state.paymentMethod === 'card' ? `
              <div class="space-y-4">
                <div class="p-4 rounded-xl bg-gradient-to-br from-[#3A1F17] via-[#23120C] to-[#150A06] text-[#FFFDF9] border border-[#B8945B] shadow-xl max-w-sm mx-auto space-y-4">
                  <div class="flex justify-between items-center">
                    <span class="font-serif italic text-xs tracking-widest text-[#E6CA85]">LA DESIO PRIVÉ</span>
                    <span class="text-lg">💳</span>
                  </div>
                  <div class="font-mono text-base tracking-widest text-center py-2">
                    •••• •••• •••• 4242
                  </div>
                  <div class="flex justify-between items-end text-[10px] uppercase text-[#E6CA85]">
                    <div>
                      <span class="block text-white/60">Cardholder</span>
                      <span class="font-bold tracking-wider">${this.state.address.fullName}</span>
                    </div>
                    <div>
                      <span class="block text-white/60">Expires</span>
                      <span class="font-bold tracking-wider">08/28</span>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-3 text-xs">
                  <div class="col-span-2">
                    <label class="block font-semibold text-[#3A1F17] mb-1">Card Number</label>
                    <input type="text" placeholder="4242 •••• •••• ••••" value="4242 8819 9021 4242"
                           class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white text-[#3A1F17] font-mono" />
                  </div>
                  <div>
                    <label class="block font-semibold text-[#3A1F17] mb-1">Valid Thru</label>
                    <input type="text" placeholder="MM/YY" value="08/28"
                           class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white text-[#3A1F17] font-mono" />
                  </div>
                  <div>
                    <label class="block font-semibold text-[#3A1F17] mb-1">Security Code (CVV)</label>
                    <input type="password" placeholder="•••" value="842"
                           class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white text-[#3A1F17] font-mono" />
                  </div>
                </div>
              </div>
            ` : ''}

            ${this.state.paymentMethod === 'netbanking' ? `
              <div class="p-6 rounded-xl bg-[#F8F1E7] border border-[#B8945B]/30 space-y-3 text-xs">
                <label class="block font-semibold text-[#3A1F17]">Select Indian / International Banking Portal</label>
                <select class="w-full px-3 py-2.5 rounded-lg border border-[#B8945B]/40 bg-white text-[#3A1F17]">
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>State Bank of India (SBI)</option>
                  <option>Axis Bank</option>
                  <option>Kotak Mahindra Bank</option>
                  <option>Intesa Sanpaolo / International</option>
                </select>
                <p class="text-[11px] text-[#6B3E2E]">You will be safely redirected to your banking institution to authorize ₹${summary.total.toFixed(2)}.</p>
              </div>
            ` : ''}

            <div class="mt-8 flex justify-between">
              <button type="button" onclick="window.checkoutManager.setStep(2)"
                      class="px-6 py-2.5 rounded-lg border border-[#B8945B]/40 text-[#6B3E2E] hover:bg-[#F8F1E7] font-serif text-xs font-semibold">
                ← Back
              </button>
              <button type="button" onclick="window.checkoutManager.placeOrder()"
                      class="px-8 py-3.5 rounded-lg btn-gold-luxury font-serif text-xs font-semibold tracking-wider shadow-xl flex items-center gap-2">
                <span>Authorize & Place Order (₹${summary.total.toFixed(2)})</span> 👑
              </button>
            </div>
          </div>
        `;

      case 4:
        return this.renderOrderConfirmation();
    }
  }

  renderOrderConfirmation() {
    const order = this.lastPlacedOrder || {
      id: 'DESIO-9142',
      total: 1040,
      deliverySlot: 'Express Artisanal — Within 45 Mins',
      trackingNumber: 'IN-EXP-9142-DESIO'
    };

    return `
      <div class="text-center py-8 space-y-6">
        
        <!-- Animated Crown Badge -->
        <div class="w-20 h-20 mx-auto rounded-full bg-[#3A1F17] border-2 border-[#B8945B] flex items-center justify-center text-4xl shadow-2xl animate-bounce">
          👑
        </div>

        <div>
          <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Order Successfully Confirmed</span>
          <h2 class="font-display text-3xl md:text-4xl text-[#3A1F17] mt-1">"YOUR DESIO IS ON ITS WAY."</h2>
          <p class="text-xs text-[#6B3E2E] max-w-md mx-auto mt-2">
            Our master pastry chefs have commenced handcrafting your desserts with exquisite care.
          </p>
        </div>

        <!-- Order Metadata Receipt Badge -->
        <div class="max-w-md mx-auto p-5 rounded-2xl bg-[#F8F1E7] border border-[#B8945B]/40 text-left text-xs space-y-3 shadow-sm">
          <div class="flex justify-between items-center border-b border-[#B8945B]/30 pb-2">
            <span class="font-serif font-bold text-[#3A1F17]">Order Reference:</span>
            <span class="font-mono font-bold text-[#B8945B]">${order.id}</span>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-[#6B3E2E]">Estimated Delivery:</span>
            <span class="font-semibold text-[#3A1F17]">${order.deliverySlot}</span>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-[#6B3E2E]">Consignment Tracking:</span>
            <span class="font-mono text-[11px] text-[#3A1F17]">${order.trackingNumber}</span>
          </div>

          <div class="flex justify-between items-center border-t border-[#B8945B]/30 pt-2 font-display font-bold text-sm text-[#3A1F17]">
            <span>Paid Total:</span>
            <span class="text-gold-gradient">₹${order.total.toFixed(2)}</span>
          </div>
        </div>

        <!-- Real-Time Delivery Tracker Timeline -->
        <div class="max-w-md mx-auto pt-2">
          <h5 class="text-xs font-serif font-bold uppercase tracking-wider text-[#3A1F17] mb-3">Live Atelier Progress</h5>
          <div class="flex items-center justify-between text-[10px] text-[#6B3E2E]">
            <div class="flex flex-col items-center">
              <span class="w-6 h-6 rounded-full bg-[#3A1F17] text-[#E6CA85] flex items-center justify-center font-bold">1</span>
              <span class="mt-1 font-semibold text-[#3A1F17]">Crafting</span>
            </div>
            <div class="flex-1 h-0.5 bg-[#B8945B]"></div>
            <div class="flex flex-col items-center">
              <span class="w-6 h-6 rounded-full bg-[#B8945B] text-white flex items-center justify-center font-bold animate-pulse">2</span>
              <span class="mt-1 font-semibold text-[#B8945B]">Chamber Chilling</span>
            </div>
            <div class="flex-1 h-0.5 bg-[#B8945B]/30"></div>
            <div class="flex flex-col items-center">
              <span class="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">3</span>
              <span class="mt-1 text-gray-400">Courier Dispatch</span>
            </div>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-4">
          <a href="#account" class="px-6 py-2.5 rounded-lg btn-chocolate-luxury font-serif text-xs font-semibold tracking-wider">
            View in Privé Dashboard
          </a>
          <a href="#menu" class="px-6 py-2.5 rounded-lg btn-gold-luxury font-serif text-xs font-semibold tracking-wider">
            Continue Exploring
          </a>
        </div>

      </div>
    `;
  }

  saveStep1AndContinue() {
    const name = document.getElementById('chkName')?.value || this.state.address.fullName;
    const email = document.getElementById('chkEmail')?.value || this.state.address.email;
    const phone = document.getElementById('chkPhone')?.value || this.state.address.phone;
    const city = document.getElementById('chkCity')?.value || this.state.address.city;
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
    const orderData = {
      items: summary.items.map(i => ({ name: i.name, qty: i.quantity, price: i.price, isCustom: i.isCustom })),
      total: summary.total,
      address: this.state.address,
      deliverySlot: this.state.deliveryMethod === 'express' ? 'Express Artisanal — Within 45 Mins' : 'Scheduled Luxury Slot',
      trackingNumber: 'IN-EXP-' + Math.floor(1000 + Math.random() * 9000) + '-DESIO'
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
