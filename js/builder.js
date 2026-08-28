// LA DESIO - Interactive Bespoke Dessert Studio Builder (INR Edition)
import { DESSERT_BUILDER_OPTIONS } from './data.js';
import { cartStore } from './cart.js';
import { loyaltyStore } from './loyalty.js';

export class DessertBuilder {
  constructor(containerId, onAddToCartCallback) {
    this.container = document.getElementById(containerId);
    this.onAddToCart = onAddToCartCallback;
    this.currentStep = 1;
    this.state = {
      base: 'base-brownie',
      flavor: 'flavor-chocolate',
      filling: 'filling-chocolate-ganache',
      toppings: ['top-strawberries', 'top-almonds'],
      sauce: 'sauce-dark-chocolate',
      name: 'My La Desio Creation',
      specialNote: ''
    };
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  loadConfig(config) {
    this.state = { ...this.state, ...config };
    this.currentStep = 6;
    this.render();
  }

  setStep(step) {
    this.currentStep = Math.max(1, Math.min(6, step));
    this.render();
  }

  calculatePrice() {
    let total = 0;
    const baseObj = DESSERT_BUILDER_OPTIONS.bases.find(b => b.id === this.state.base);
    if (baseObj) total += baseObj.price;

    const flavorObj = DESSERT_BUILDER_OPTIONS.flavors.find(f => f.id === this.state.flavor);
    if (flavorObj) total += flavorObj.price;

    const fillingObj = DESSERT_BUILDER_OPTIONS.fillings.find(f => f.id === this.state.filling);
    if (fillingObj) total += fillingObj.price;

    this.state.toppings.forEach(topId => {
      const topObj = DESSERT_BUILDER_OPTIONS.toppings.find(t => t.id === topId);
      if (topObj) total += topObj.price;
    });

    const sauceObj = DESSERT_BUILDER_OPTIONS.sauces.find(s => s.id === this.state.sauce);
    if (sauceObj) total += sauceObj.price;

    return total;
  }

  renderVisualDessert() {
    const baseObj = DESSERT_BUILDER_OPTIONS.bases.find(b => b.id === this.state.base) || DESSERT_BUILDER_OPTIONS.bases[0];
    const flavorObj = DESSERT_BUILDER_OPTIONS.flavors.find(f => f.id === this.state.flavor) || DESSERT_BUILDER_OPTIONS.flavors[0];
    const fillingObj = DESSERT_BUILDER_OPTIONS.fillings.find(f => f.id === this.state.filling) || DESSERT_BUILDER_OPTIONS.fillings[0];
    const sauceObj = DESSERT_BUILDER_OPTIONS.sauces.find(s => s.id === this.state.sauce) || DESSERT_BUILDER_OPTIONS.sauces[0];

    const toppingsList = this.state.toppings.map(id => {
      const t = DESSERT_BUILDER_OPTIONS.toppings.find(item => item.id === id);
      return t ? `<span class="inline-flex items-center gap-1 bg-white/90 backdrop-blur text-xs px-2.5 py-1 rounded-full border border-[#B8945B]/40 shadow-sm text-[#3A1F17]">${t.icon} ${t.name.split(' ')[0]}</span>` : '';
    }).join(' ');

    return `
      <div class="relative w-full aspect-square max-w-[340px] mx-auto flex items-center justify-center">
        <!-- Ambient Gold Glow -->
        <div class="absolute inset-0 bg-[#B8945B]/15 rounded-full blur-2xl"></div>

        <!-- Luxury Ceramic Plate -->
        <div class="relative w-72 h-72 rounded-full bg-gradient-to-br from-[#FFFDF9] via-[#F8F1E7] to-[#E8DCcb] border-[3px] border-[#B8945B] shadow-2xl flex items-center justify-center p-6 transition-all duration-700">
          
          <!-- Plate Rim Inner Gold Line -->
          <div class="absolute inset-3 rounded-full border border-[#B8945B]/30 pointer-events-none"></div>

          <!-- Layered Visual Cake Representation -->
          <div class="relative w-48 h-48 flex flex-col items-center justify-center animate-float-slow">
            
            <!-- Sauce Drizzle Back Layer -->
            <div class="absolute w-44 h-44 rounded-full opacity-60 filter blur-[2px] transition-all duration-500 scale-105"
                 style="background: radial-gradient(circle, ${sauceObj.color} 30%, transparent 70%);"></div>

            <!-- Base Layer -->
            <div class="w-36 h-20 rounded-2xl shadow-xl flex items-center justify-center border-2 border-[#B8945B]/40 relative overflow-hidden transition-all duration-500 transform hover:scale-105"
                 style="background: ${baseObj.color};">
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/20"></div>
              <span class="relative text-[11px] uppercase tracking-wider text-white/90 font-medium px-2 py-0.5 rounded bg-black/40 backdrop-blur border border-white/20">
                ${baseObj.name}
              </span>
            </div>

            <!-- Silky Filling Layer -->
            <div class="w-32 h-10 -mt-3 rounded-xl shadow-lg border border-[#B8945B]/50 relative overflow-hidden flex items-center justify-center transition-all duration-500"
                 style="background: ${fillingObj.color};">
              <div class="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-black/20"></div>
              <span class="relative text-[10px] tracking-wide font-semibold ${fillingObj.color === '#FFF8EB' ? 'text-[#3A1F17]' : 'text-white'}">
                ${flavorObj.name} Infused
              </span>
            </div>

            <!-- Sauce Glaze / Drip Top Layer -->
            <div class="w-28 h-6 -mt-2 rounded-full shadow-inner flex items-center justify-center border border-white/30 transition-all duration-500"
                 style="background: ${sauceObj.color};">
              <div class="w-16 h-1 rounded-full bg-white/40 blur-[1px]"></div>
            </div>

            <!-- Crown Garnishes / Gold Leaf -->
            <div class="absolute -top-3 flex items-center gap-1">
              ${this.state.toppings.includes('top-strawberries') ? '<span class="text-2xl drop-shadow filter">🍓</span>' : ''}
              ${this.state.toppings.includes('top-blueberries') ? '<span class="text-xl drop-shadow filter">🫐</span>' : ''}
              ${this.state.toppings.includes('top-gold-leaf') ? '<span class="text-xl animate-pulse text-[#E6CA85] filter drop-shadow">✨</span>' : ''}
              ${this.state.toppings.includes('top-choc-chips') ? '<span class="text-xl drop-shadow">🍫</span>' : ''}
            </div>

          </div>

          <!-- Live Floating Recipe Tag -->
          <div class="absolute -bottom-2 bg-[#3A1F17] text-[#FFFDF9] px-4 py-1.5 rounded-full border border-[#B8945B] shadow-lg text-xs font-serif tracking-wider uppercase flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#B8945B] animate-ping"></span>
            ${this.state.name || 'Bespoke Desio'}
          </div>

        </div>
      </div>

      <!-- Live Toppings summary pill badges -->
      <div class="mt-4 flex flex-wrap gap-1.5 justify-center max-w-sm mx-auto">
        ${toppingsList || '<span class="text-xs text-[#6B3E2E]/70 italic">Select custom toppings in Step 04</span>'}
      </div>
    `;
  }

  renderStepContent() {
    switch (this.currentStep) {
      case 1:
        return `
          <div class="space-y-4">
            <div class="border-b border-[#B8945B]/20 pb-2">
              <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Step 01 of 06</span>
              <h3 class="font-display text-2xl text-[#3A1F17]">Choose Your Base Foundation</h3>
              <p class="text-xs text-[#6B3E2E]">Select the artisanal foundation for your custom patisserie creation.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
              ${DESSERT_BUILDER_OPTIONS.bases.map(base => `
                <div class="p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${this.state.base === base.id ? 'border-[#B8945B] bg-[#F8F1E7]/80 ring-2 ring-[#B8945B]/30 shadow-md' : 'border-[#B8945B]/20 bg-white hover:border-[#B8945B]/50'}"
                     onclick="window.dessertStudio.selectBase('${base.id}')">
                  <img src="${base.image}" alt="${base.name}" class="w-14 h-14 rounded-lg object-cover border border-[#B8945B]/30 shrink-0" />
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between">
                      <h4 class="font-serif text-base font-bold text-[#3A1F17] truncate">${base.name}</h4>
                      <span class="text-xs font-semibold text-[#B8945B]">+₹${base.price}</span>
                    </div>
                    <p class="text-[11px] text-[#6B3E2E] line-clamp-2 mt-0.5">${base.description}</p>
                    <span class="text-[10px] text-gray-500 mt-1 inline-block">${base.calories}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case 2:
        return `
          <div class="space-y-4">
            <div class="border-b border-[#B8945B]/20 pb-2">
              <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Step 02 of 06</span>
              <h3 class="font-display text-2xl text-[#3A1F17]">Select Your Signature Flavor</h3>
              <p class="text-xs text-[#6B3E2E]">Infuse your creation with authentic Italian and single-origin notes.</p>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              ${DESSERT_BUILDER_OPTIONS.flavors.map(flavor => `
                <div class="p-3 rounded-xl border transition-all cursor-pointer text-center flex flex-col items-center justify-center gap-1.5 ${this.state.flavor === flavor.id ? 'border-[#B8945B] bg-[#F8F1E7] ring-2 ring-[#B8945B]/30 shadow-md' : 'border-[#B8945B]/20 bg-white hover:border-[#B8945B]/50'}"
                     onclick="window.dessertStudio.selectFlavor('${flavor.id}')">
                  <span class="text-2xl">${flavor.icon}</span>
                  <h4 class="font-serif text-sm font-semibold text-[#3A1F17]">${flavor.name}</h4>
                  <span class="text-xs font-medium text-[#B8945B]">+₹${flavor.price}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case 3:
        return `
          <div class="space-y-4">
            <div class="border-b border-[#B8945B]/20 pb-2">
              <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Step 03 of 06</span>
              <h3 class="font-display text-2xl text-[#3A1F17]">Select Silky Filling</h3>
              <p class="text-xs text-[#6B3E2E]">Choose the rich, whipped center or confection confit.</p>
            </div>
            <div class="grid grid-cols-1 gap-2.5 max-h-[340px] overflow-y-auto pr-1">
              ${DESSERT_BUILDER_OPTIONS.fillings.map(filling => `
                <div class="p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${this.state.filling === filling.id ? 'border-[#B8945B] bg-[#F8F1E7] ring-2 ring-[#B8945B]/30 shadow-md' : 'border-[#B8945B]/20 bg-white hover:border-[#B8945B]/50'}"
                     onclick="window.dessertStudio.selectFilling('${filling.id}')">
                  <div class="flex items-center gap-3">
                    <span class="w-6 h-6 rounded-full border border-black/20 shadow-inner shrink-0" style="background: ${filling.color}"></span>
                    <span class="font-serif text-sm font-bold text-[#3A1F17]">${filling.name}</span>
                  </div>
                  <span class="text-xs font-semibold text-[#B8945B]">+₹${filling.price}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case 4:
        return `
          <div class="space-y-4">
            <div class="border-b border-[#B8945B]/20 pb-2">
              <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Step 04 of 06</span>
              <h3 class="font-display text-2xl text-[#3A1F17]">Choose Artisanal Toppings</h3>
              <p class="text-xs text-[#6B3E2E]">Select up to 4 fresh fruits, roasted nuts, and edible garnishes.</p>
            </div>
            <div class="grid grid-cols-2 gap-2.5 max-h-[320px] overflow-y-auto pr-1">
              ${DESSERT_BUILDER_OPTIONS.toppings.map(top => {
                const isSelected = this.state.toppings.includes(top.id);
                return `
                  <div class="p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${isSelected ? 'border-[#B8945B] bg-[#F8F1E7] ring-2 ring-[#B8945B]/30 shadow-sm' : 'border-[#B8945B]/20 bg-white hover:border-[#B8945B]/50'}"
                       onclick="window.dessertStudio.toggleTopping('${top.id}')">
                    <div class="flex items-center gap-2">
                      <span class="text-lg">${top.icon}</span>
                      <span class="font-serif text-xs font-semibold text-[#3A1F17] truncate">${top.name.split(' ')[0]}</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                      <span class="text-[11px] text-[#B8945B] font-medium">+₹${top.price}</span>
                      <div class="w-4 h-4 rounded border flex items-center justify-center ${isSelected ? 'bg-[#3A1F17] border-[#3A1F17] text-[#FFFDF9]' : 'border-gray-300'}">
                        ${isSelected ? '✓' : ''}
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;

      case 5:
        return `
          <div class="space-y-4">
            <div class="border-b border-[#B8945B]/20 pb-2">
              <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Step 05 of 06</span>
              <h3 class="font-display text-2xl text-[#3A1F17]">Select Warm Sauce Drizzle</h3>
              <p class="text-xs text-[#6B3E2E]">The crowning finish drizzled hot before presentation.</p>
            </div>
            <div class="grid grid-cols-1 gap-2.5">
              ${DESSERT_BUILDER_OPTIONS.sauces.map(sauce => `
                <div class="p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${this.state.sauce === sauce.id ? 'border-[#B8945B] bg-[#F8F1E7] ring-2 ring-[#B8945B]/30 shadow-md' : 'border-[#B8945B]/20 bg-white hover:border-[#B8945B]/50'}"
                     onclick="window.dessertStudio.selectSauce('${sauce.id}')">
                  <div class="flex items-center gap-3">
                    <span class="w-5 h-5 rounded-full border border-black/20 shadow-inner shrink-0" style="background: ${sauce.color}"></span>
                    <span class="font-serif text-sm font-semibold text-[#3A1F17]">${sauce.name}</span>
                  </div>
                  <span class="text-xs font-semibold text-[#B8945B]">+₹${sauce.price}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case 6:
        const totalPrice = this.calculatePrice();
        const baseObj = DESSERT_BUILDER_OPTIONS.bases.find(b => b.id === this.state.base);
        const flavorObj = DESSERT_BUILDER_OPTIONS.flavors.find(f => f.id === this.state.flavor);
        const fillingObj = DESSERT_BUILDER_OPTIONS.fillings.find(f => f.id === this.state.filling);
        const sauceObj = DESSERT_BUILDER_OPTIONS.sauces.find(s => s.id === this.state.sauce);

        return `
          <div class="space-y-4">
            <div class="border-b border-[#B8945B]/20 pb-2">
              <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Step 06 of 06</span>
              <h3 class="font-display text-2xl text-[#3A1F17]">Name Your Masterpiece</h3>
              <p class="text-xs text-[#6B3E2E]">Give your bespoke creation an Italian title and save it to your Privé Atelier.</p>
            </div>

            <div class="space-y-3">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-[#3A1F17] mb-1">Creation Name</label>
                <input type="text" id="creationNameInput" value="${this.state.name}"
                       placeholder="e.g. Berry Noir Royale"
                       class="w-full px-4 py-2.5 rounded-lg border border-[#B8945B]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-sm text-[#3A1F17] font-serif"
                       oninput="window.dessertStudio.updateName(this.value)" />
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-[#3A1F17] mb-1">Special Chef Note / Ribbon Dedication (Optional)</label>
                <input type="text" id="creationNoteInput" value="${this.state.specialNote || ''}"
                       placeholder="e.g. Extra gold leaf for our celebration, please!"
                       class="w-full px-4 py-2 rounded-lg border border-[#B8945B]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-xs text-[#3A1F17]"
                       oninput="window.dessertStudio.updateNote(this.value)" />
              </div>

              <!-- Recipe Summary Card -->
              <div class="p-3.5 rounded-xl bg-[#F8F1E7] border border-[#B8945B]/30 text-xs space-y-1.5">
                <div class="font-serif font-bold text-[#3A1F17] flex items-center justify-between">
                  <span>Recipe Specification:</span>
                  <span class="text-[#B8945B] font-sans">⏱ 25 Mins Prep</span>
                </div>
                <p class="text-[#6B3E2E] leading-relaxed">
                  <strong>Base:</strong> ${baseObj?.name} • 
                  <strong>Flavor:</strong> ${flavorObj?.name} • 
                  <strong>Filling:</strong> ${fillingObj?.name} • 
                  <strong>Sauce:</strong> ${sauceObj?.name}
                </p>
                <p class="text-[#6B3E2E]">
                  <strong>Toppings:</strong> ${this.state.toppings.map(id => DESSERT_BUILDER_OPTIONS.toppings.find(t => t.id === id)?.name).join(', ') || 'None selected'}
                </p>
              </div>

              <div class="flex items-center gap-2 pt-2">
                <button type="button" onclick="window.dessertStudio.saveCreationToProfile()"
                        class="flex-1 py-2.5 px-3 rounded-lg border border-[#B8945B] text-[#3A1F17] hover:bg-[#F8F1E7] font-serif text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5">
                  <span>💾</span> Save to My Creations
                </button>
                <button type="button" onclick="window.dessertStudio.addBespokeToCart()"
                        class="flex-1 py-2.5 px-3 rounded-lg btn-gold-luxury font-serif text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5">
                  <span>🛒</span> Add to Bag (₹${totalPrice})
                </button>
              </div>
            </div>
          </div>
        `;
    }
  }

  render() {
    if (!this.container) return;

    const totalPrice = this.calculatePrice();
    const steps = [
      { num: 1, title: 'Base' },
      { num: 2, title: 'Flavor' },
      { num: 3, title: 'Filling' },
      { num: 4, title: 'Toppings' },
      { num: 5, title: 'Sauce' },
      { num: 6, title: 'Name & Order' }
    ];

    this.container.innerHTML = `
      <div class="bg-[#FFFDF9] rounded-3xl border border-[#B8945B]/30 shadow-2xl p-6 lg:p-8">
        
        <!-- Step Progress Bar -->
        <div class="mb-8">
          <div class="flex items-center justify-between max-w-2xl mx-auto mb-3">
            ${steps.map(s => `
              <button type="button" onclick="window.dessertStudio.setStep(${s.num})"
                      class="flex flex-col items-center group focus:outline-none">
                <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-serif font-bold transition-all ${this.currentStep === s.num ? 'bg-[#3A1F17] text-[#E6CA85] ring-4 ring-[#B8945B]/20 scale-110 shadow-md' : (this.currentStep > s.num ? 'bg-[#B8945B] text-white' : 'bg-[#F8F1E7] text-[#6B3E2E]')}">
                  ${this.currentStep > s.num ? '✓' : '0' + s.num}
                </div>
                <span class="text-[10px] tracking-wider uppercase font-semibold mt-1 hidden sm:block ${this.currentStep === s.num ? 'text-[#3A1F17] font-bold' : 'text-[#6B3E2E]/70'}">
                  ${s.title}
                </span>
              </button>
            `).join(`
              <div class="flex-1 h-[1px] bg-[#B8945B]/30 mx-1 mb-4 hidden sm:block"></div>
            `)}
          </div>
          <div class="w-full bg-[#F8F1E7] h-1.5 rounded-full overflow-hidden">
            <div class="bg-gradient-to-r from-[#B8945B] to-[#3A1F17] h-full transition-all duration-500 rounded-full"
                 style="width: ${(this.currentStep / 6) * 100}%"></div>
          </div>
        </div>

        <!-- Main Studio Two-Column Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- Left/Center: Dynamic Live Visualizer -->
          <div class="lg:col-span-6 flex flex-col items-center justify-center bg-radial from-[#F8F1E7] to-[#FFFDF9] p-6 rounded-2xl border border-[#B8945B]/20">
            <div class="text-center mb-2">
              <span class="text-[10px] tracking-widest uppercase text-[#B8945B] font-semibold">Live Patisserie Preview</span>
              <h4 class="font-serif text-lg text-[#3A1F17] font-semibold">${this.state.name}</h4>
            </div>
            ${this.renderVisualDessert()}
            <div class="mt-6 flex items-center justify-between w-full max-w-xs px-4 py-2 bg-white rounded-xl border border-[#B8945B]/30 shadow-sm text-xs">
              <span class="text-[#6B3E2E]">Calculated Price:</span>
              <span class="font-display font-bold text-base text-[#3A1F17]">₹${totalPrice}</span>
            </div>
          </div>

          <!-- Right: Interactive Step Customization -->
          <div class="lg:col-span-6 flex flex-col justify-between min-h-[420px]">
            <div>
              ${this.renderStepContent()}
            </div>

            <!-- Navigation Controls -->
            <div class="flex items-center justify-between pt-6 border-t border-[#B8945B]/20 mt-6">
              <button type="button" onclick="window.dessertStudio.setStep(${this.currentStep - 1})"
                      class="px-4 py-2 rounded-lg border border-[#B8945B]/40 text-[#6B3E2E] hover:bg-[#F8F1E7] text-xs font-serif font-semibold tracking-wider transition-all ${this.currentStep === 1 ? 'opacity-30 cursor-not-allowed' : ''}"
                      ${this.currentStep === 1 ? 'disabled' : ''}>
                ← Previous Step
              </button>

              ${this.currentStep < 6 ? `
                <button type="button" onclick="window.dessertStudio.setStep(${this.currentStep + 1})"
                        class="px-6 py-2.5 rounded-lg btn-chocolate-luxury text-xs font-serif font-semibold tracking-wider transition-all flex items-center gap-1.5">
                  <span>Next Step</span> →
                </button>
              ` : `
                <button type="button" onclick="window.dessertStudio.addBespokeToCart()"
                        class="px-6 py-2.5 rounded-lg btn-gold-luxury text-xs font-serif font-semibold tracking-wider transition-all flex items-center gap-1.5 shadow-lg">
                  <span>Complete & Add to Bag</span> 🎂
                </button>
              `}
            </div>

          </div>

        </div>

      </div>
    `;
  }

  // Action handlers
  selectBase(id) {
    this.state.base = id;
    this.render();
  }

  selectFlavor(id) {
    this.state.flavor = id;
    this.render();
  }

  selectFilling(id) {
    this.state.filling = id;
    this.render();
  }

  toggleTopping(id) {
    const idx = this.state.toppings.indexOf(id);
    if (idx > -1) {
      this.state.toppings.splice(idx, 1);
    } else {
      if (this.state.toppings.length < 4) {
        this.state.toppings.push(id);
      } else {
        alert('You can select up to 4 signature toppings.');
      }
    }
    this.render();
  }

  selectSauce(id) {
    this.state.sauce = id;
    this.render();
  }

  updateName(val) {
    this.state.name = val || 'My La Desio Creation';
  }

  updateNote(val) {
    this.state.specialNote = val;
  }

  saveCreationToProfile() {
    const creation = {
      name: this.state.name,
      recipe: this.getRecipeSummary(),
      price: this.calculatePrice(),
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
      config: { ...this.state }
    };
    loyaltyStore.saveCustomCreation(creation);
    if (window.showToast) {
      window.showToast('Creation saved to your Privé Atelier profile!', 'success');
    } else {
      alert('Creation saved to your Privé profile!');
    }
  }

  getRecipeSummary() {
    const b = DESSERT_BUILDER_OPTIONS.bases.find(i => i.id === this.state.base)?.name;
    const f = DESSERT_BUILDER_OPTIONS.flavors.find(i => i.id === this.state.flavor)?.name;
    const fil = DESSERT_BUILDER_OPTIONS.fillings.find(i => i.id === this.state.filling)?.name;
    const s = DESSERT_BUILDER_OPTIONS.sauces.find(i => i.id === this.state.sauce)?.name;
    return `${b} + ${f} + ${fil} + ${s}`;
  }

  addBespokeToCart() {
    const price = this.calculatePrice();
    const recipeString = this.getRecipeSummary();
    const configKey = JSON.stringify(this.state);

    const item = {
      id: 'custom_creation_' + Date.now(),
      name: this.state.name || 'Bespoke Desio Creation',
      subtitle: recipeString,
      isCustom: true,
      customConfigKey: configKey,
      price: price,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
      options: {
        note: this.state.specialNote,
        toppings: this.state.toppings.map(id => DESSERT_BUILDER_OPTIONS.toppings.find(t => t.id === id)?.name)
      }
    };

    cartStore.addItem(item);
    if (this.onAddToCart) this.onAddToCart(item);

    if (window.showToast) {
      window.showToast(`"${item.name}" added to your bag!`, 'success');
    }
  }
}
