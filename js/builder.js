// LA DESIO - Interactive Bespoke Dessert Studio Builder (INR Edition)
import { DESSERT_BUILDER_OPTIONS } from './data.js';
import { cartStore } from './cart.js';
import { loyaltyStore } from './loyalty.js';

// 3D Canvas Patisserie Engine (100% Self-Contained, Zero CDN Dependencies)
function hexToRgb(hex) {
  let c = (hex || '#888888').replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16) || 0;
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

function shadeColor(hex, factor) {
  const rgb = hexToRgb(hex);
  const r = Math.min(255, Math.max(0, Math.round(rgb.r * factor)));
  const g = Math.min(255, Math.max(0, Math.round(rgb.g * factor)));
  const b = Math.min(255, Math.max(0, Math.round(rgb.b * factor)));
  return `rgb(${r},${g},${b})`;
}

export class Dessert3DViewer {
  constructor(canvas, state, step) {
    this.canvas = canvas;
    this.ctx = canvas && canvas.getContext ? canvas.getContext('2d') : null;
    this.state = state || {};
    this.step = step || 1;
    this.isAutoRotating = true;
    this.rotY = 0.55;
    this.rotX = 0.38;
    this.targetRotY = 0.55;
    this.targetRotX = 0.38;
    this.isDragging = false;
    this.lastPointerX = 0;
    this.lastPointerY = 0;
    this.animationFrameId = null;
    this.time = 0;

    // 36 Celebration Golden Sparkles for Step 06
    this.sparkles = [];
    for (let i = 0; i < 36; i++) {
      this.sparkles.push({
        angle: Math.random() * Math.PI * 2,
        radius: 2.1 + Math.random() * 1.8,
        y: -0.3 + Math.random() * 2.5,
        speed: 0.006 + Math.random() * 0.015,
        size: 2.5 + Math.random() * 4.5,
        phase: Math.random() * Math.PI * 2
      });
    }

    // Aroma Shimmer Motes for Step 02 Flavor Infusion
    this.aromaMotes = [];
    for (let i = 0; i < 16; i++) {
      this.aromaMotes.push({
        x: (Math.random() - 0.5) * 2.4,
        z: (Math.random() - 0.5) * 2.4,
        y: 0.4 + Math.random() * 1.4,
        speedY: 0.008 + Math.random() * 0.012,
        phase: Math.random() * Math.PI * 2,
        size: 1.5 + Math.random() * 2.5
      });
    }

    if (this.canvas && this.ctx) {
      this.setupInteraction();
      this.render = this.render.bind(this);
      this.animate = this.animate.bind(this);
      this.animate();
    }
  }

  setupInteraction() {
    if (!this.canvas) return;
    const canvas = this.canvas;

    const onPointerDown = (e) => {
      this.isDragging = true;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      this.lastPointerX = clientX;
      this.lastPointerY = clientY;
      this.isAutoRotating = false;
    };

    const onPointerMove = (e) => {
      if (!this.isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const deltaX = clientX - this.lastPointerX;
      const deltaY = clientY - this.lastPointerY;
      this.lastPointerX = clientX;
      this.lastPointerY = clientY;

      this.rotY += deltaX * 0.014;
      this.rotX = Math.max(0.12, Math.min(0.74, this.rotX + deltaY * 0.008));
    };

    const onPointerUp = () => {
      this.isDragging = false;
    };

    canvas.addEventListener('mousedown', onPointerDown);
    canvas.addEventListener('touchstart', onPointerDown, { passive: true });
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('touchmove', onPointerMove, { passive: true });
      window.addEventListener('mouseup', onPointerUp);
      window.addEventListener('touchend', onPointerUp);
    }

    this.cleanupInteraction = () => {
      canvas.removeEventListener('mousedown', onPointerDown);
      canvas.removeEventListener('touchstart', onPointerDown);
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', onPointerMove);
        window.removeEventListener('touchmove', onPointerMove);
        window.removeEventListener('mouseup', onPointerUp);
        window.removeEventListener('touchend', onPointerUp);
      }
    };
  }

  update(state, step) {
    this.state = state || {};
    this.step = step || 1;
    if (this.step === 6) {
      this.isAutoRotating = true;
    }
  }

  setPresetView(view) {
    if (view === 'glamour') {
      this.rotX = 0.38;
      this.rotY = 0.55;
    } else if (view === 'top') {
      this.rotX = 0.72;
    } else if (view === 'profile') {
      this.rotX = 0.16;
    }
  }

  resetView() {
    this.rotX = 0.38;
    this.rotY = 0.55;
    this.isAutoRotating = true;
  }

  project(x, y, z, cx, cy, scale = 1.0) {
    const cosY = Math.cos(this.rotY), sinY = Math.sin(this.rotY);
    const cosX = Math.cos(this.rotX), sinX = Math.sin(this.rotX);

    // Yaw (around Y axis)
    const x1 = x * cosY + z * sinY;
    const z1 = -x * sinY + z * cosY;

    // Pitch (around X axis)
    const y2 = y * cosX - z1 * sinX;
    const z2 = y * sinX + z1 * cosX;

    const fov = 440;
    const camDist = 6.2;
    const factor = fov / (fov + (z2 + camDist) * 56);

    return {
      sx: cx + x1 * 54 * factor * scale,
      sy: cy - y2 * 54 * factor * scale,
      depth: z2,
      factor
    };
  }

  animate() {
    if (typeof requestAnimationFrame !== 'undefined') {
      this.animationFrameId = requestAnimationFrame(this.animate);
    }
    this.time += 0.02;

    if (this.isAutoRotating && !this.isDragging) {
      this.rotY += 0.009;
    }

    this.render();
  }

  render() {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    const canvas = this.canvas;

    const dpr = Math.min((typeof window !== 'undefined' && window.devicePixelRatio) || 1, 2.5);
    const width = canvas.clientWidth || 440;
    const height = canvas.clientHeight || 440;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    if (ctx.scale) ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2 + 36;
    const scale = Math.min(width, height) / 380;

    // 1. Luxury Atelier Studio Spotlight Backdrop
    const stageGrad = ctx.createRadialGradient(cx, cy - 25, 20, cx, cy, 240 * scale);
    stageGrad.addColorStop(0, 'rgba(184, 148, 91, 0.14)');
    stageGrad.addColorStop(0.45, 'rgba(58, 31, 23, 0.12)');
    stageGrad.addColorStop(1, 'rgba(16, 7, 4, 0)');
    ctx.fillStyle = stageGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 240 * scale, 0, Math.PI * 2);
    ctx.fill();

    // 2. Realistic Dual-Pass Ambient Table Shadow
    const shadowP = this.project(0, -0.22, 0, cx, cy, scale);
    const outerShadow = ctx.createRadialGradient(shadowP.sx, shadowP.sy + 6, 15, shadowP.sx, shadowP.sy + 6, 160 * scale * shadowP.factor);
    outerShadow.addColorStop(0, 'rgba(8, 3, 1, 0.72)');
    outerShadow.addColorStop(0.55, 'rgba(16, 6, 3, 0.38)');
    outerShadow.addColorStop(1, 'rgba(20, 8, 4, 0)');
    ctx.fillStyle = outerShadow;
    ctx.beginPath();
    ctx.ellipse(shadowP.sx, shadowP.sy + 8, 155 * scale * shadowP.factor, 54 * scale * shadowP.factor, 0, 0, Math.PI * 2);
    ctx.fill();

    // 3. Luxury Porcelain Plate with 24k Gold Bezel
    this.renderPlate(ctx, cx, cy, scale);

    // 4. Dessert Layers (Base, Flavor, Filling, Toppings, Sauce)
    this.renderDessert(ctx, cx, cy, scale);

    // 5. Step 06 Showcase Celebration Effects
    if (this.step === 6) {
      this.renderShowcaseCelebration(ctx, cx, cy, scale, width, height);
    }

    ctx.restore();
  }

  renderPlate(ctx, cx, cy, scale) {
    const segments = 44;
    const rOuter = 2.8;
    const rInner = 2.2;
    const plateY = -0.09;

    // Pedestal Rim (Side wall)
    const botPts = [];
    const topPts = [];
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      const x = Math.cos(a) * rOuter;
      const z = Math.sin(a) * rOuter;
      botPts.push(this.project(x, plateY - 0.14, z, cx, cy, scale));
      topPts.push(this.project(x, plateY, z, cx, cy, scale));
    }

    // Beveled Wall with porcelain luster & rim light
    for (let i = 0; i < segments; i++) {
      const p1 = botPts[i], p2 = botPts[i + 1];
      const p3 = topPts[i + 1], p4 = topPts[i];
      const midAngle = ((i + 0.5) / segments) * Math.PI * 2 + this.rotY;
      const lightFactor = 0.45 + 0.55 * Math.cos(midAngle - 0.55);
      const rimFactor = Math.max(0, Math.cos(midAngle + Math.PI * 0.75)) * 0.25;
      ctx.fillStyle = shadeColor('#EDE4D6', 0.65 + lightFactor * 0.45 + rimFactor);
      ctx.beginPath();
      ctx.moveTo(p1.sx, p1.sy);
      ctx.lineTo(p2.sx, p2.sy);
      ctx.lineTo(p3.sx, p3.sy);
      ctx.lineTo(p4.sx, p4.sy);
      ctx.closePath();
      ctx.fill();
    }

    // Top Porcelain Dish Surface
    ctx.beginPath();
    for (let i = 0; i <= segments; i++) {
      const p = topPts[i];
      if (i === 0) ctx.moveTo(p.sx, p.sy);
      else ctx.lineTo(p.sx, p.sy);
    }
    ctx.closePath();
    const plateGrad = ctx.createLinearGradient(cx - 100, cy - 100, cx + 100, cy + 100);
    plateGrad.addColorStop(0, '#FFFFFF');
    plateGrad.addColorStop(0.35, '#FBF7F0');
    plateGrad.addColorStop(0.85, '#EDE3D2');
    plateGrad.addColorStop(1, '#DFCDB8');
    ctx.fillStyle = plateGrad;
    ctx.fill();

    // 24k Gold Bezel Outer Rim with Specular Sheen
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 3.2 * scale;
    ctx.stroke();

    // Inner 24k Gold Filigree Pinstripe
    ctx.beginPath();
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      const p = this.project(Math.cos(a) * rInner, plateY + 0.006, Math.sin(a) * rInner, cx, cy, scale);
      if (i === 0) ctx.moveTo(p.sx, p.sy);
      else ctx.lineTo(p.sx, p.sy);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.65)';
    ctx.lineWidth = 1.4 * scale;
    ctx.stroke();

    // Ambient Contact Occlusion Shadow where cake sits on dish
    const cakeShadowP = this.project(0, plateY + 0.01, 0, cx, cy, scale);
    const cakeShadowGrad = ctx.createRadialGradient(cakeShadowP.sx, cakeShadowP.sy, 10, cakeShadowP.sx, cakeShadowP.sy, 95 * scale * cakeShadowP.factor);
    cakeShadowGrad.addColorStop(0, 'rgba(25, 10, 5, 0.45)');
    cakeShadowGrad.addColorStop(0.65, 'rgba(35, 15, 8, 0.22)');
    cakeShadowGrad.addColorStop(1, 'rgba(40, 20, 10, 0)');
    ctx.fillStyle = cakeShadowGrad;
    ctx.beginPath();
    ctx.ellipse(cakeShadowP.sx, cakeShadowP.sy, 90 * scale * cakeShadowP.factor, 32 * scale * cakeShadowP.factor, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  renderDessert(ctx, cx, cy, scale) {
    const { base = 'base-brownie', flavor = 'flavor-chocolate', filling = 'filling-chocolate-ganache', toppings = [], sauce = 'sauce-dark-chocolate' } = this.state;
    const step = this.step || 1;

    // Luxury Flavor Tint Palette
    const flavorTints = {
      'flavor-chocolate': { base: '#25120A', crumb: '#1F0D06', name: 'Dark Chocolate' },
      'flavor-pistachio': { base: '#6E894E', crumb: '#5F7941', name: 'Sicilian Pistachio' },
      'flavor-vanilla': { base: '#F4E9D0', crumb: '#ECE0C4', name: 'Bourbon Vanilla' },
      'flavor-coffee': { base: '#371E12', crumb: '#2B160B', name: 'Espresso Roast' },
      'flavor-caramel': { base: '#B46820', crumb: '#9E5817', name: 'Salted Caramel' },
      'flavor-strawberry': { base: '#B84351', crumb: '#A03441', name: 'Alpine Strawberry' },
      'flavor-mango': { base: '#D78524', crumb: '#C17319', name: 'Alphonso Mango' },
      'flavor-whey-isolate': { base: '#26130A', crumb: '#1D0C05', name: 'Whey Cocoa' },
      'flavor-plant-protein': { base: '#7D6F52', crumb: '#6A5E44', name: 'Plant Protein' }
    };
    const activeFlavor = flavorTints[flavor] || flavorTints['flavor-chocolate'];

    let topY = 0.5;

    // STEP 01 & 02: BASE FOUNDATION & FLAVOR INFUSION
    if (base === 'base-brownie' || base === 'base-whey-brownie') {
      const brownieColor = step >= 2 ? activeFlavor.base : (base === 'base-whey-brownie' ? '#1D0C05' : '#281309');
      topY = this.drawBrownie(ctx, cx, cy, scale, 0.05, 2.35, 0.92, 2.35, brownieColor);
    } else if (base === 'base-cheesecake') {
      // Golden graham cracker crust bottom with crumb texture
      this.drawCylinder(ctx, cx, cy, scale, 0.02, 0.24, 1.72, 1.72, '#C8945B', '#8E6235', false, 'graham');
      // Silky cheesecake body
      const cakeColor = step >= 2 ? activeFlavor.base : '#FAF1DE';
      topY = this.drawCylinder(ctx, cx, cy, scale, 0.26, 0.86, 1.66, 1.66, cakeColor, shadeColor(cakeColor, 0.8), false, 'cheesecake');
    } else if (base === 'base-protein-cheesecake') {
      // Graham crust bottom
      this.drawCylinder(ctx, cx, cy, scale, 0.02, 0.22, 1.72, 1.72, '#9C6230', '#73441B', false, 'graham');
      // Protein cheesecake body
      const cakeColor = step >= 2 ? activeFlavor.base : '#F0DBB0';
      this.drawCylinder(ctx, cx, cy, scale, 0.24, 0.88, 1.66, 1.66, cakeColor, shadeColor(cakeColor, 0.8), false, 'cheesecake');
      // Scorched Basque burnt caramelized top
      topY = this.drawCylinder(ctx, cx, cy, scale, 1.12, 0.09, 1.64, 1.60, '#3A1808', '#200A02', true, 'basque');
    } else if (base === 'base-tart') {
      // Fluted Tart pastry shell
      this.drawFlutedTart(ctx, cx, cy, scale, 0.02, 0.58, 1.48, 1.88, '#D69850');
      // Baked custard interior well
      const innerColor = step >= 2 ? activeFlavor.base : '#E8B368';
      topY = this.drawCylinder(ctx, cx, cy, scale, 0.26, 0.26, 1.44, 1.44, innerColor, shadeColor(innerColor, 0.8), true);
    } else if (base === 'base-cake') {
      // Sponge Tier 1
      const spongeColor = step >= 2 ? activeFlavor.base : '#E4B366';
      this.drawCylinder(ctx, cx, cy, scale, 0.02, 0.48, 1.68, 1.68, spongeColor, shadeColor(spongeColor, 0.8), false, 'sponge');
      // Piped Chantilly Cream Seam (Bulging softly)
      this.drawCylinder(ctx, cx, cy, scale, 0.50, 0.14, 1.62, 1.62, '#FFFCF4', '#E8DEC0', true);
      // Sponge Tier 2
      topY = this.drawCylinder(ctx, cx, cy, scale, 0.64, 0.48, 1.68, 1.68, spongeColor, shadeColor(spongeColor, 0.8), false, 'sponge');
    } else if (base === 'base-waffle') {
      // Golden Waffle Disc
      const waffleColor = step >= 2 ? activeFlavor.base : '#D28B3A';
      topY = this.drawCylinder(ctx, cx, cy, scale, 0.02, 0.54, 1.74, 1.74, waffleColor, '#9B5F1B');
      // Deep 3D Waffle Grid Wells
      this.drawWaffleGrid(ctx, cx, cy, scale, topY, 1.70);
    } else {
      // Artisan Cookie
      const cookieColor = step >= 2 ? activeFlavor.base : '#D8A060';
      topY = this.drawCylinder(ctx, cx, cy, scale, 0.02, 0.50, 1.72, 1.72, cookieColor, '#94652F', false, 'cookie');
    }

    // Step 02: Floating Aroma Shimmer Particles
    if (step === 2) {
      this.drawAromaMotes(ctx, cx, cy, scale, topY);
    }

    // STEP 03: SILKY FILLING LAYER (Pillowed contour with specular gloss)
    if (step >= 3) {
      const fillingColors = {
        'filling-chocolate-ganache': '#180A04',
        'filling-vanilla-cream': '#FFFDF4',
        'filling-pistachio-mousse': '#8CA569',
        'filling-berry-compote': '#891328',
        'filling-caramel-confit': '#B66A1F'
      };
      const fillColor = fillingColors[filling] || '#FFFDF4';

      // Drop shadow from filling onto base
      const fillShadowP = this.project(0, topY + 0.01, 0, cx, cy, scale);
      ctx.fillStyle = 'rgba(20, 8, 4, 0.35)';
      ctx.beginPath();
      ctx.ellipse(fillShadowP.sx, fillShadowP.sy, 75 * scale * fillShadowP.factor, 26 * scale * fillShadowP.factor, 0, 0, Math.PI * 2);
      ctx.fill();

      // Pillowed filling cylinder
      topY = this.drawCylinder(ctx, cx, cy, scale, topY, 0.38, 1.50, 1.45, fillColor, shadeColor(fillColor, 0.75), true, 'filling');
    }

    // STEP 05: WARM SAUCE DRIZZLE & FLUID DRIPS
    if (step >= 5) {
      const sauceColors = {
        'sauce-dark-chocolate': '#100502',
        'sauce-caramel': '#B36413',
        'sauce-white-chocolate': '#FFFDE8',
        'sauce-strawberry': '#940E22'
      };
      const scColor = sauceColors[sauce] || '#100502';

      // Top glossy sauce glaze pool
      this.drawCylinder(ctx, cx, cy, scale, topY, 0.08, 1.44, 1.40, scColor, shadeColor(scColor, 0.8), true, 'sauce');

      // 6 Realistic Viscous Sauce Drips
      const drips = [
        { angle: 0.35, length: 0.44, radius: 0.14 },
        { angle: 1.35, length: 0.62, radius: 0.17 },
        { angle: 2.45, length: 0.38, radius: 0.13 },
        { angle: 3.65, length: 0.55, radius: 0.16 },
        { angle: 4.85, length: 0.42, radius: 0.14 },
        { angle: 5.75, length: 0.50, radius: 0.15 }
      ];
      drips.forEach(d => {
        const cosA = Math.cos(d.angle), sinA = Math.sin(d.angle);
        const cakeEdgeR = 1.46;
        this.drawSauceDrip(ctx, cx, cy, scale, cosA * cakeEdgeR, topY + 0.06, sinA * cakeEdgeR, d.length, d.radius, scColor);
      });

      topY += 0.08;
    }

    // STEP 04: ARTISANAL TOPPINGS IN HIGH FIDELITY
    if (step >= 4 && toppings && toppings.length > 0) {
      toppings.forEach(topId => {
        if (topId === 'top-strawberries') {
          this.drawStrawberry(ctx, cx, cy, scale, 0.46, topY + 0.18, 0.36, 0.30, 0.22);
          this.drawStrawberry(ctx, cx, cy, scale, -0.44, topY + 0.18, -0.28, 0.27, -0.32);
        }
        if (topId === 'top-blueberries') {
          this.drawBlueberry(ctx, cx, cy, scale, -0.46, topY + 0.13, 0.46, 0.17);
          this.drawBlueberry(ctx, cx, cy, scale, 0.40, topY + 0.13, -0.46, 0.16);
          this.drawBlueberry(ctx, cx, cy, scale, 0.68, topY + 0.13, 0.06, 0.18);
        }
        if (topId === 'top-hazelnuts') {
          this.drawHazelnut(ctx, cx, cy, scale, 0.0, topY + 0.14, 0.56, 0.20);
          this.drawHazelnut(ctx, cx, cy, scale, -0.56, topY + 0.14, -0.2, 0.19);
          this.drawHazelnut(ctx, cx, cy, scale, 0.56, topY + 0.14, -0.36, 0.20);
        }
        if (topId === 'top-almonds') {
          this.drawAlmond(ctx, cx, cy, scale, -0.26, topY + 0.09, 0.26, 0.34, 0.18, 0.3);
          this.drawAlmond(ctx, cx, cy, scale, 0.36, topY + 0.09, 0.30, 0.34, 0.18, -0.4);
          this.drawAlmond(ctx, cx, cy, scale, -0.16, topY + 0.09, -0.42, 0.32, 0.17, 0.8);
        }
        if (topId === 'top-gold-leaf') {
          this.drawGoldLeaf(ctx, cx, cy, scale, 0.16, topY + 0.12, 0.16, 0.24, 0.2);
          this.drawGoldLeaf(ctx, cx, cy, scale, -0.34, topY + 0.12, 0.20, 0.22, -0.5);
          this.drawGoldLeaf(ctx, cx, cy, scale, 0.24, topY + 0.12, -0.24, 0.20, 0.7);
        }
        if (topId === 'top-choc-chips' || topId === 'top-protein-crisps') {
          const chips = [
            [-0.22, topY + 0.09, 0.46], [0.42, topY + 0.09, 0.42],
            [-0.36, topY + 0.09, -0.16], [0.16, topY + 0.09, -0.46]
          ];
          chips.forEach(c => {
            this.drawChocChip(ctx, cx, cy, scale, c[0], c[1], c[2], 0.12);
          });
        }
        if (topId === 'top-chia-almond') {
          for (let k = 0; k < 10; k++) {
            const angle = (k / 10) * Math.PI * 2;
            const r = 0.85 + (k % 2) * 0.38;
            const p = this.project(Math.cos(angle) * r, topY + 0.05, Math.sin(angle) * r, cx, cy, scale);
            ctx.fillStyle = '#1A1715';
            ctx.beginPath();
            ctx.arc(p.sx, p.sy, 2.4 * scale * p.factor, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });
    }
  }

  drawBrownie(ctx, cx, cy, scale, yBase, w, h, d, color) {
    const hw = w / 2, hd = d / 2;
    const yTop = yBase + h;

    const v = [
      [-hw, yBase, -hd], [hw, yBase, -hd], [hw, yBase, hd], [-hw, yBase, hd],
      [-hw, yTop, -hd], [hw, yTop, -hd], [hw, yTop, hd], [-hw, yTop, hd]
    ].map(pt => this.project(pt[0], pt[1], pt[2], cx, cy, scale));

    const faces = [
      { indices: [0, 1, 5, 4], normal: [0, 0, -1], name: 'front' },
      { indices: [1, 2, 6, 5], normal: [1, 0, 0], name: 'right' },
      { indices: [2, 3, 7, 6], normal: [0, 0, 1], name: 'back' },
      { indices: [3, 0, 4, 7], normal: [-1, 0, 0], name: 'left' },
      { indices: [4, 5, 6, 7], normal: [0, 1, 0], name: 'top' }
    ];

    faces.forEach(face => {
      const cosY = Math.cos(this.rotY), sinY = Math.sin(this.rotY);
      const cosX = Math.cos(this.rotX), sinX = Math.sin(this.rotX);
      const nx1 = face.normal[0] * cosY + face.normal[2] * sinY;
      const nz1 = -face.normal[0] * sinY + face.normal[2] * cosY;
      const ny2 = face.normal[1] * cosX - nz1 * sinX;
      const nz2 = face.normal[1] * sinX + nz1 * cosX;

      if (nz2 < 0.1 || face.name === 'top') {
        const lightFactor = 0.5 + 0.5 * (nx1 * 0.5 + ny2 * 0.8 - nz2 * 0.3);
        ctx.fillStyle = shadeColor(color, Math.max(0.4, Math.min(1.25, lightFactor)));
        ctx.beginPath();
        face.indices.forEach((idx, i) => {
          const pt = v[idx];
          if (i === 0) ctx.moveTo(pt.sx, pt.sy);
          else ctx.lineTo(pt.sx, pt.sy);
        });
        ctx.closePath();
        ctx.fill();

        // Bevel highlight
        ctx.strokeStyle = shadeColor(color, 1.25);
        ctx.lineWidth = 1.4 * scale;
        ctx.stroke();

        // Micro-crumb texture on top face
        if (face.name === 'top') {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          for (let k = 0; k < 12; k++) {
            const rx = (Math.sin(k * 43.1) * 0.7) * hw;
            const rz = (Math.cos(k * 29.3) * 0.7) * hd;
            const pt = this.project(rx, yTop + 0.01, rz, cx, cy, scale);
            ctx.beginPath();
            ctx.arc(pt.sx, pt.sy, 1.8 * scale * pt.factor, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    });

    return yTop;
  }

  drawFlutedTart(ctx, cx, cy, scale, yBase, height, rBot, rTop, color) {
    const segments = 36;
    const botPts = [];
    const topPts = [];
    const yTop = yBase + height;

    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      const fluteR = (i % 2 === 0 ? 1.0 : 0.94);
      botPts.push(this.project(Math.cos(a) * rBot, yBase, Math.sin(a) * rBot, cx, cy, scale));
      topPts.push(this.project(Math.cos(a) * rTop * fluteR, yTop, Math.sin(a) * rTop * fluteR, cx, cy, scale));
    }

    for (let i = 0; i < segments; i++) {
      const p1 = botPts[i], p2 = botPts[i + 1];
      const p3 = topPts[i + 1], p4 = topPts[i];
      const midAngle = ((i + 0.5) / segments) * Math.PI * 2 + this.rotY;
      const cosFacing = Math.cos(midAngle);

      if (cosFacing > -0.2) {
        const lightDiffuse = 0.55 + 0.45 * Math.cos(midAngle - 0.7);
        const fluteShade = (i % 2 === 0 ? 1.12 : 0.85);
        ctx.fillStyle = shadeColor(color, Math.max(0.45, Math.min(1.3, lightDiffuse * fluteShade)));
        ctx.beginPath();
        ctx.moveTo(p1.sx, p1.sy);
        ctx.lineTo(p2.sx, p2.sy);
        ctx.lineTo(p3.sx, p3.sy);
        ctx.lineTo(p4.sx, p4.sy);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Fluted Top Rim
    ctx.beginPath();
    for (let i = 0; i <= segments; i++) {
      const p = topPts[i];
      if (i === 0) ctx.moveTo(p.sx, p.sy);
      else ctx.lineTo(p.sx, p.sy);
    }
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, 1.1);
    ctx.fill();
    ctx.strokeStyle = shadeColor(color, 0.8);
    ctx.lineWidth = 1.2 * scale;
    ctx.stroke();

    return yTop;
  }

  drawCylinder(ctx, cx, cy, scale, yBase, height, rBot, rTop, color, strokeColor, isGlossy = false, textureType = '') {
    const segments = 36;
    const botPts = [];
    const topPts = [];
    const yTop = yBase + height;

    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      botPts.push(this.project(Math.cos(a) * rBot, yBase, Math.sin(a) * rBot, cx, cy, scale));
      topPts.push(this.project(Math.cos(a) * rTop, yTop, Math.sin(a) * rTop, cx, cy, scale));
    }

    // Cylindrical wall panels with Lambertian + Rim Light
    for (let i = 0; i < segments; i++) {
      const p1 = botPts[i], p2 = botPts[i + 1];
      const p3 = topPts[i + 1], p4 = topPts[i];
      const midAngle = ((i + 0.5) / segments) * Math.PI * 2 + this.rotY;
      const cosFacing = Math.cos(midAngle);

      if (cosFacing > -0.2) {
        const lightDiffuse = 0.52 + 0.48 * Math.cos(midAngle - 0.65);
        const rimLight = Math.max(0, Math.cos(midAngle + Math.PI * 0.7)) * 0.22;
        ctx.fillStyle = shadeColor(color, Math.max(0.42, Math.min(1.3, lightDiffuse + rimLight)));
        ctx.beginPath();
        ctx.moveTo(p1.sx, p1.sy);
        ctx.lineTo(p2.sx, p2.sy);
        ctx.lineTo(p3.sx, p3.sy);
        ctx.lineTo(p4.sx, p4.sy);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Top Cap Disc
    ctx.beginPath();
    for (let i = 0; i <= segments; i++) {
      const p = topPts[i];
      if (i === 0) ctx.moveTo(p.sx, p.sy);
      else ctx.lineTo(p.sx, p.sy);
    }
    ctx.closePath();

    if (textureType === 'basque') {
      // Scorched Basque burnt top with blistered marbling
      const topCenter = this.project(0, yTop, 0, cx, cy, scale);
      const basqueGrad = ctx.createRadialGradient(
        topCenter.sx - 15 * scale, topCenter.sy - 10 * scale, 12 * scale,
        topCenter.sx, topCenter.sy, 80 * scale
      );
      basqueGrad.addColorStop(0, '#5C220E');
      basqueGrad.addColorStop(0.45, '#351206');
      basqueGrad.addColorStop(0.85, '#200802');
      basqueGrad.addColorStop(1, '#4A1C0B');
      ctx.fillStyle = basqueGrad;
    } else if (isGlossy) {
      const topCenter = this.project(0, yTop, 0, cx, cy, scale);
      const topGrad = ctx.createRadialGradient(
        topCenter.sx - 24 * scale, topCenter.sy - 18 * scale, 6 * scale,
        topCenter.sx, topCenter.sy, 75 * scale
      );
      topGrad.addColorStop(0, shadeColor(color, 1.5));
      topGrad.addColorStop(0.45, color);
      topGrad.addColorStop(1, shadeColor(color, 0.72));
      ctx.fillStyle = topGrad;
    } else {
      ctx.fillStyle = shadeColor(color, 1.06);
    }
    ctx.fill();

    if (strokeColor) {
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1 * scale;
      ctx.stroke();
    }

    return yTop;
  }

  drawWaffleGrid(ctx, cx, cy, scale, yTop, radius) {
    ctx.strokeStyle = '#8E5214';
    ctx.lineWidth = 2.8 * scale;
    for (let i = -2; i <= 2; i++) {
      const offset = i * 0.44;
      const span = Math.sqrt(Math.max(0, radius * radius - offset * offset));
      const p1 = this.project(offset, yTop + 0.02, -span, cx, cy, scale);
      const p2 = this.project(offset, yTop + 0.02, span, cx, cy, scale);
      ctx.beginPath();
      ctx.moveTo(p1.sx, p1.sy);
      ctx.lineTo(p2.sx, p2.sy);
      ctx.stroke();

      const q1 = this.project(-span, yTop + 0.02, offset, cx, cy, scale);
      const q2 = this.project(span, yTop + 0.02, offset, cx, cy, scale);
      ctx.beginPath();
      ctx.moveTo(q1.sx, q1.sy);
      ctx.lineTo(q2.sx, q2.sy);
      ctx.stroke();
    }
  }

  drawSauceDrip(ctx, cx, cy, scale, x, yStart, z, length, radius, color) {
    const pStart = this.project(x, yStart, z, cx, cy, scale);
    const pEnd = this.project(x, yStart - length, z, cx, cy, scale);

    // Viscous fluid drip flow
    ctx.strokeStyle = color;
    ctx.lineWidth = radius * 48 * scale * pStart.factor;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(pStart.sx, pStart.sy);
    ctx.lineTo(pEnd.sx, pEnd.sy);
    ctx.stroke();

    // High-shine highlight along drip spine
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = radius * 14 * scale * pStart.factor;
    ctx.beginPath();
    ctx.moveTo(pStart.sx - 1, pStart.sy);
    ctx.lineTo(pEnd.sx - 1, pEnd.sy);
    ctx.stroke();

    // Bulbous droplet at bottom
    const dripBulbGrad = ctx.createRadialGradient(
      pEnd.sx - 2, pEnd.sy - 2, 1,
      pEnd.sx, pEnd.sy, radius * 40 * scale * pEnd.factor
    );
    dripBulbGrad.addColorStop(0, shadeColor(color, 1.55));
    dripBulbGrad.addColorStop(0.55, color);
    dripBulbGrad.addColorStop(1, shadeColor(color, 0.55));
    ctx.fillStyle = dripBulbGrad;
    ctx.beginPath();
    ctx.arc(pEnd.sx, pEnd.sy, radius * 38 * scale * pEnd.factor, 0, Math.PI * 2);
    ctx.fill();
  }

  drawStrawberry(ctx, cx, cy, scale, x, y, z, r, angle) {
    const p = this.project(x, y, z, cx, cy, scale);
    const rad = r * 54 * scale * p.factor;

    // Contact drop shadow onto cream
    ctx.fillStyle = 'rgba(20, 8, 4, 0.35)';
    ctx.beginPath();
    ctx.ellipse(p.sx, p.sy + rad * 0.9, rad * 0.8, rad * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.translate(p.sx, p.sy);
    ctx.rotate(angle);

    // Sculpted Berry Body
    const berryGrad = ctx.createRadialGradient(-rad * 0.35, -rad * 0.35, rad * 0.1, 0, 0, rad * 1.25);
    berryGrad.addColorStop(0, '#FF4D6D');
    berryGrad.addColorStop(0.35, '#D91E36');
    berryGrad.addColorStop(0.85, '#990D22');
    berryGrad.addColorStop(1, '#590511');

    ctx.fillStyle = berryGrad;
    ctx.beginPath();
    ctx.moveTo(0, rad * 1.15);
    ctx.bezierCurveTo(-rad * 1.15, rad * 0.55, -rad * 0.95, -rad * 0.85, 0, -rad * 0.85);
    ctx.bezierCurveTo(rad * 0.95, -rad * 0.85, rad * 1.15, rad * 0.55, 0, rad * 1.15);
    ctx.closePath();
    ctx.fill();

    // 16 Golden Seed Pits inset in dimples
    ctx.fillStyle = '#FFE066';
    for (let i = 0; i < 16; i++) {
      const sa = (i / 16) * Math.PI * 2;
      const sr = (i % 3 === 0 ? 0.35 : (i % 3 === 1 ? 0.6 : 0.85)) * rad * 0.7;
      const sy = ((i % 5) - 2) * rad * 0.22;
      ctx.beginPath();
      ctx.arc(Math.cos(sa) * sr, sy, 1.1 * scale * p.factor, 0, Math.PI * 2);
      ctx.fill();
    }

    // Leafy Green Star Calyx
    ctx.fillStyle = '#2E7D32';
    for (let k = 0; k < 5; k++) {
      const a = (k / 5) * Math.PI * 2;
      const lx = Math.cos(a) * rad * 0.75;
      const ly = -rad * 0.85 + Math.sin(a) * rad * 0.35;
      ctx.beginPath();
      ctx.ellipse(lx, ly, rad * 0.3, rad * 0.15, a, 0, Math.PI * 2);
      ctx.fill();
    }
    // Stem Nub
    ctx.fillStyle = '#1B5E20';
    ctx.beginPath();
    ctx.arc(0, -rad * 0.9, rad * 0.14, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawBlueberry(ctx, cx, cy, scale, x, y, z, r) {
    const p = this.project(x, y, z, cx, cy, scale);
    const rad = r * 54 * scale * p.factor;

    // Contact drop shadow
    ctx.fillStyle = 'rgba(20, 8, 4, 0.35)';
    ctx.beginPath();
    ctx.ellipse(p.sx, p.sy + rad * 0.85, rad * 0.75, rad * 0.32, 0, 0, Math.PI * 2);
    ctx.fill();

    // Dusty waxy bloom gradient
    const bbGrad = ctx.createRadialGradient(p.sx - rad * 0.35, p.sy - rad * 0.35, rad * 0.1, p.sx, p.sy, rad);
    bbGrad.addColorStop(0, '#5D6B9E');
    bbGrad.addColorStop(0.35, '#2B3363');
    bbGrad.addColorStop(0.85, '#151A3B');
    bbGrad.addColorStop(1, '#0B0D1E');

    ctx.fillStyle = bbGrad;
    ctx.beginPath();
    ctx.arc(p.sx, p.sy, rad, 0, Math.PI * 2);
    ctx.fill();

    // Star-shaped calyx indentation crown
    ctx.strokeStyle = '#7D8DC9';
    ctx.lineWidth = 1.2 * scale;
    ctx.beginPath();
    ctx.arc(p.sx, p.sy - rad * 0.22, rad * 0.26, 0, Math.PI * 2);
    ctx.stroke();
  }

  drawHazelnut(ctx, cx, cy, scale, x, y, z, r) {
    const p = this.project(x, y, z, cx, cy, scale);
    const rad = r * 54 * scale * p.factor;

    ctx.fillStyle = 'rgba(20, 8, 4, 0.35)';
    ctx.beginPath();
    ctx.ellipse(p.sx, p.sy + rad * 0.9, rad * 0.8, rad * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    const hnGrad = ctx.createRadialGradient(p.sx - rad * 0.35, p.sy - rad * 0.35, rad * 0.1, p.sx, p.sy, rad);
    hnGrad.addColorStop(0, '#BF834F');
    hnGrad.addColorStop(0.45, '#824820');
    hnGrad.addColorStop(0.85, '#52270E');
    hnGrad.addColorStop(1, '#301306');

    ctx.fillStyle = hnGrad;
    ctx.beginPath();
    ctx.ellipse(p.sx, p.sy, rad, rad * 1.15, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Pale circular root scar
    ctx.fillStyle = '#D9B487';
    ctx.beginPath();
    ctx.ellipse(p.sx + rad * 0.2, p.sy + rad * 0.7, rad * 0.35, rad * 0.18, 0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  drawAlmond(ctx, cx, cy, scale, x, y, z, l, w, rot) {
    const p = this.project(x, y, z, cx, cy, scale);
    const len = l * 54 * scale * p.factor;
    const wid = w * 54 * scale * p.factor;

    ctx.save();
    ctx.translate(p.sx, p.sy);
    ctx.rotate(rot);

    ctx.fillStyle = 'rgba(20, 8, 4, 0.25)';
    ctx.beginPath();
    ctx.ellipse(2, 3, len * 0.9, wid * 0.9, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#F0DCAE';
    ctx.strokeStyle = '#AA7944';
    ctx.lineWidth = 1.4 * scale;
    ctx.beginPath();
    ctx.ellipse(0, 0, len, wid, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  drawGoldLeaf(ctx, cx, cy, scale, x, y, z, s, rot) {
    const p = this.project(x, y, z, cx, cy, scale);
    const size = s * 54 * scale * p.factor;

    ctx.save();
    ctx.translate(p.sx, p.sy);
    ctx.rotate(rot + Math.sin(this.time * 2.5) * 0.18);

    const goldGrad = ctx.createLinearGradient(-size, -size, size, size);
    goldGrad.addColorStop(0, '#FFF3A8');
    goldGrad.addColorStop(0.45, '#D4AF37');
    goldGrad.addColorStop(0.75, '#F9D56E');
    goldGrad.addColorStop(1, '#9C7514');

    ctx.fillStyle = goldGrad;
    ctx.beginPath();
    ctx.moveTo(-size * 0.85, -size * 0.55);
    ctx.lineTo(size * 0.25, -size * 0.95);
    ctx.lineTo(size * 0.95, -size * 0.15);
    ctx.lineTo(size * 0.45, size * 0.85);
    ctx.lineTo(-size * 0.65, size * 0.65);
    ctx.closePath();
    ctx.fill();

    // Brilliant metallic specular glint
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.28, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawChocChip(ctx, cx, cy, scale, x, y, z, r) {
    const p = this.project(x, y, z, cx, cy, scale);
    const rad = r * 54 * scale * p.factor;
    ctx.fillStyle = '#220E06';
    ctx.beginPath();
    ctx.arc(p.sx, p.sy, rad, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.beginPath();
    ctx.arc(p.sx - rad * 0.3, p.sy - rad * 0.3, rad * 0.3, 0, Math.PI * 2);
    ctx.fill();
  }

  drawAromaMotes(ctx, cx, cy, scale, topY) {
    this.aromaMotes.forEach(m => {
      const p = this.project(m.x, topY + m.y, m.z, cx, cy, scale);
      const alpha = 0.3 + 0.4 * Math.sin(this.time * 2 + m.phase);
      ctx.fillStyle = `rgba(230, 202, 133, ${alpha})`;
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, m.size * scale * p.factor, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  renderShowcaseCelebration(ctx, cx, cy, scale, width, height) {
    this.sparkles.forEach(s => {
      s.angle += s.speed;
      const x = Math.cos(s.angle) * s.radius;
      const z = Math.sin(s.angle) * s.radius;
      const p = this.project(x, s.y, z, cx, cy, scale);

      const alpha = 0.45 + 0.5 * Math.sin(this.time * 3 + s.phase);
      const starSize = s.size * scale * p.factor;

      ctx.save();
      ctx.translate(p.sx, p.sy);
      ctx.fillStyle = `rgba(230, 202, 133, ${alpha})`;

      ctx.beginPath();
      ctx.moveTo(0, -starSize * 2);
      ctx.quadraticCurveTo(0, 0, starSize * 2, 0);
      ctx.quadraticCurveTo(0, 0, 0, starSize * 2);
      ctx.quadraticCurveTo(0, 0, -starSize * 2, 0);
      ctx.quadraticCurveTo(0, 0, 0, -starSize * 2);
      ctx.fill();
      ctx.restore();
    });

    // Floating Gold Name Plaque
    const plateP = this.project(0, -0.44, 0, cx, cy, scale);
    const titleText = this.state.name ? `✦ ${this.state.name.toUpperCase()} ✦` : '✦ BESPOKE PATISSERIE CREATION ✦';

    ctx.save();
    ctx.font = `600 ${Math.max(10, Math.round(12 * scale))}px Georgia, serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const textW = ctx.measureText(titleText).width;
    const padX = 16 * scale;
    const pillW = textW + padX * 2;
    const pillH = 26 * scale;

    ctx.fillStyle = 'rgba(28, 12, 7, 0.90)';
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 1.4 * scale;
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(plateP.sx - pillW / 2, plateP.sy - pillH / 2, pillW, pillH, 13 * scale);
    } else {
      ctx.rect(plateP.sx - pillW / 2, plateP.sy - pillH / 2, pillW, pillH);
    }
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#E6CA85';
    ctx.fillText(titleText, plateP.sx, plateP.sy);
    ctx.restore();
  }

  dispose() {
    if (this.animationFrameId) {
      if (typeof cancelAnimationFrame !== 'undefined') {
        cancelAnimationFrame(this.animationFrameId);
      }
      this.animationFrameId = null;
    }
    if (this.cleanupInteraction) {
      this.cleanupInteraction();
      this.cleanupInteraction = null;
    }
  }
}

export class DessertBuilder {
  constructor(containerId, onAddToCartCallback) {
    if (typeof window !== 'undefined') {
      window.dessertStudio = this;
    }
    this.container = document.getElementById(containerId);
    this.onAddToCart = onAddToCartCallback;
    this.currentStep = 1;
    this.viewMode = '3d'; // '3d' or 'classic'
    this.is3dAutoRotate = true;
    this.viewer3d = null;
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
    if (typeof window !== 'undefined') {
      window.dessertStudio = this;
    }
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

  calculateNutrition() {
    let calories = 0, protein = 0, carbs = 0, fats = 0;
    const baseObj = DESSERT_BUILDER_OPTIONS.bases.find(b => b.id === this.state.base);
    if (baseObj?.nutrition) {
      calories += baseObj.nutrition.calories;
      protein += baseObj.nutrition.protein;
      carbs += baseObj.nutrition.carbs;
      fats += baseObj.nutrition.fats;
    }
    const flavorObj = DESSERT_BUILDER_OPTIONS.flavors.find(f => f.id === this.state.flavor);
    if (flavorObj?.nutrition) {
      calories += flavorObj.nutrition.calories;
      protein += flavorObj.nutrition.protein;
      carbs += flavorObj.nutrition.carbs;
      fats += flavorObj.nutrition.fats;
    }
    const fillingObj = DESSERT_BUILDER_OPTIONS.fillings.find(f => f.id === this.state.filling);
    if (fillingObj?.nutrition) {
      calories += fillingObj.nutrition.calories;
      protein += fillingObj.nutrition.protein;
      carbs += fillingObj.nutrition.carbs;
      fats += fillingObj.nutrition.fats;
    }
    this.state.toppings.forEach(topId => {
      const topObj = DESSERT_BUILDER_OPTIONS.toppings.find(t => t.id === topId);
      if (topObj?.nutrition) {
        calories += topObj.nutrition.calories;
        protein += topObj.nutrition.protein;
        carbs += topObj.nutrition.carbs;
        fats += topObj.nutrition.fats;
      }
    });
    const sauceObj = DESSERT_BUILDER_OPTIONS.sauces.find(s => s.id === this.state.sauce);
    if (sauceObj?.nutrition) {
      calories += sauceObj.nutrition.calories;
      protein += sauceObj.nutrition.protein;
      carbs += sauceObj.nutrition.carbs;
      fats += sauceObj.nutrition.fats;
    }
    return { calories, protein, carbs, fats };
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
                  <div class="flex items-center gap-1.5 text-[11px]">
                    <span class="font-medium text-[#B8945B]">+₹${flavor.price}</span>
                    <span class="text-gray-400 font-mono text-[10px]">(${flavor.nutrition.calories} kcal)</span>
                  </div>
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
                    <div>
                      <span class="font-serif text-sm font-bold text-[#3A1F17] block">${filling.name}</span>
                      <span class="text-[10px] text-gray-400 font-mono">${filling.nutrition.calories} kcal</span>
                    </div>
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
                      <div>
                        <span class="font-serif text-xs font-semibold text-[#3A1F17] block truncate">${top.name.split(' ')[0]}</span>
                        <span class="text-[9px] text-gray-400 font-mono">${top.nutrition.calories} kcal</span>
                      </div>
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
                    <div>
                      <span class="font-serif text-sm font-semibold text-[#3A1F17] block">${sauce.name}</span>
                      <span class="text-[10px] text-gray-400 font-mono">${sauce.nutrition.calories} kcal</span>
                    </div>
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
              <div class="p-3.5 rounded-xl bg-[#F8F1E7] border border-[#B8945B]/30 text-xs space-y-2">
                <div class="font-serif font-bold text-[#3A1F17] flex items-center justify-between">
                  <span>Recipe Specification:</span>
                  <span class="text-[#B8945B] font-sans">⏱ 25 Mins Handcrafted</span>
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

                <!-- Nutrition Breakdown in Step 6 -->
                ${(() => {
                  const n = this.calculateNutrition();
                  return `
                    <div class="pt-2 border-t border-[#B8945B]/20 flex items-center justify-between text-[11px]">
                      <span class="font-serif font-bold text-[#3A1F17] flex items-center gap-1">⚡ ${n.calories} kcal</span>
                      <span class="text-[10px] text-[#6B3E2E] font-medium">P: ${n.protein}g • C: ${n.carbs}g • F: ${n.fats}g</span>
                    </div>
                  `;
                })()}
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
    const nutrition = this.calculateNutrition();
    const toppingsList = (this.state.toppings || []).map(id => {
      const t = DESSERT_BUILDER_OPTIONS.toppings.find(item => item.id === id);
      return t ? `<span class="inline-flex items-center gap-1 bg-white/90 backdrop-blur text-xs px-2.5 py-1 rounded-full border border-[#B8945B]/40 shadow-sm text-[#3A1F17]">${t.icon} ${t.name.split(' ')[0]}</span>` : '';
    }).join(' ');
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
          <div class="lg:col-span-6 flex flex-col items-center justify-center bg-radial from-[#F8F1E7] to-[#FFFDF9] p-4 sm:p-6 rounded-2xl border border-[#B8945B]/20">
            <!-- Studio Visualizer Header & View Mode Switcher -->
            <div class="w-full flex items-center justify-between mb-3 border-b border-[#B8945B]/20 pb-2">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#B8945B] animate-pulse"></span>
                <span class="text-[11px] tracking-widest uppercase text-[#B8945B] font-bold font-serif">
                  Step 0${this.currentStep} • ${steps[this.currentStep - 1]?.title}
                </span>
              </div>
              <div class="flex items-center gap-1 bg-[#1F0D08] p-1 rounded-xl border border-[#B8945B]/30 text-[10px] font-serif">
                <button type="button" onclick="window.dessertStudio.toggleViewMode('3d')"
                        class="px-2.5 py-1 rounded-lg transition-all ${this.viewMode === '3d' ? 'bg-[#B8945B] text-black font-bold' : 'text-[#D6C2B0] hover:text-white'}">
                  ✨ 3D Atelier
                </button>
                <button type="button" onclick="window.dessertStudio.toggleViewMode('classic')"
                        class="px-2.5 py-1 rounded-lg transition-all ${this.viewMode === 'classic' ? 'bg-[#B8945B] text-black font-bold' : 'text-[#D6C2B0] hover:text-white'}">
                  🍽️ Classic Plate
                </button>
              </div>
            </div>

            ${this.viewMode === '3d' ? `
              <!-- 3D Studio Canvas Mount (High-Fidelity Patisserie Atelier) -->
              <div class="relative w-full aspect-square max-w-[440px] md:max-w-[460px] mx-auto flex items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-b from-[#140704] via-[#1F0E08] to-[#140704] border-2 border-[#B8945B]/50 shadow-2xl ring-1 ring-[#B8945B]/20">
                <canvas id="dessert3dCanvas" class="w-full h-full cursor-grab active:cursor-grabbing block"></canvas>
                
                <!-- 3D Camera Controls Overlay -->
                <div class="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none gap-1.5">
                  <div class="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur border border-[#B8945B]/40 text-[#E6CA85] text-[10px] font-serif flex items-center gap-1.5 shadow-md pointer-events-auto">
                    <span>🔄</span> 360°
                  </div>
                  <div class="flex items-center gap-1.5 pointer-events-auto">
                    <button type="button" onclick="window.dessertStudio.setPresetView('top')"
                            class="px-2 py-1 rounded-lg bg-black/80 hover:bg-[#B8945B] text-[#E6CA85] hover:text-black border border-[#B8945B]/40 text-[10px] font-serif transition-colors shadow-md"
                            title="Top-Down Plating View">
                      🔝 Top
                    </button>
                    <button type="button" onclick="window.dessertStudio.setPresetView('profile')"
                            class="px-2 py-1 rounded-lg bg-black/80 hover:bg-[#B8945B] text-[#E6CA85] hover:text-black border border-[#B8945B]/40 text-[10px] font-serif transition-colors shadow-md"
                            title="Side Profile Layer View">
                      👀 Side
                    </button>
                    <button type="button" onclick="window.dessertStudio.toggle3dAutoRotate()" 
                            class="px-2.5 py-1 rounded-lg bg-black/80 hover:bg-[#B8945B] text-[#E6CA85] hover:text-black border border-[#B8945B]/40 text-[10px] font-serif transition-colors flex items-center gap-1 shadow-md"
                            title="Toggle Auto Spin">
                      <span id="autoRotateLabel">${this.is3dAutoRotate ? '⏸️' : '▶️'}</span>
                    </button>
                    <button type="button" onclick="window.dessertStudio.reset3dCamera()" 
                            class="w-7 h-7 rounded-lg bg-black/80 hover:bg-[#B8945B] text-[#E6CA85] hover:text-black border border-[#B8945B]/40 flex items-center justify-center text-xs transition-colors shadow-md"
                            title="Reset 45° Angle">
                      🎯
                    </button>
                  </div>
                </div>
              </div>
            ` : this.renderVisualDessert()}

            <!-- Live Toppings summary pill badges -->
            <div class="mt-4 flex flex-wrap gap-1.5 justify-center max-w-sm mx-auto">
              ${toppingsList || '<span class="text-xs text-[#6B3E2E]/70 italic">Select custom toppings in Step 04</span>'}
            </div>

            <!-- Live Calculated Price & Macros Bar -->
            <div class="mt-6 w-full max-w-sm space-y-2">
              <div class="flex items-center justify-between px-4 py-2 bg-white rounded-xl border border-[#B8945B]/30 shadow-sm text-xs">
                <span class="text-[#6B3E2E]">Calculated Price:</span>
                <span class="font-display font-bold text-base text-[#3A1F17]">₹${totalPrice}</span>
              </div>
              <div class="flex items-center justify-between px-4 py-1.5 bg-[#F8F1E7]/80 rounded-xl border border-[#B8945B]/20 text-[11px]">
                <span class="font-serif font-bold text-[#3A1F17] flex items-center gap-1">⚡ ${nutrition.calories} kcal</span>
                <span class="text-[10px] text-[#6B3E2E] font-medium">P: ${nutrition.protein}g • C: ${nutrition.carbs}g • F: ${nutrition.fats}g</span>
              </div>
            </div>

            <!-- Quick Studio Actions: Save & Load Saved Creations -->
            <div class="mt-4 w-full max-w-sm flex items-center gap-2">
              <button type="button" onclick="window.dessertStudio.saveCreationToProfile()"
                      class="flex-1 py-2 px-3 rounded-xl border border-[#B8945B] bg-[#FFFDF9] hover:bg-[#F8F1E7] text-[#3A1F17] font-serif text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm">
                <span>💾</span> Save Creation
              </button>
              <button type="button" onclick="window.dessertStudio.openSavedCreationsModal()"
                      class="py-2 px-3 rounded-xl border border-[#B8945B]/40 hover:border-[#B8945B] bg-[#FFFDF9] hover:bg-[#F8F1E7] text-[#6B3E2E] hover:text-[#3A1F17] font-serif text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1">
                <span>📂</span> Saved (${loyaltyStore.getData().creations.length})
              </button>
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

    this.initOrUpdate3DViewer();
  }

  initOrUpdate3DViewer() {
    if (this.viewMode !== '3d') return;

    setTimeout(() => {
      const canvas = document.getElementById('dessert3dCanvas');
      if (!canvas) return;

      if (!this.viewer3d || this.viewer3d.canvas !== canvas) {
        if (this.viewer3d) this.viewer3d.dispose();
        this.viewer3d = new Dessert3DViewer(canvas, this.state, this.currentStep);
        this.viewer3d.isAutoRotating = this.is3dAutoRotate;
      } else {
        this.viewer3d.update(this.state, this.currentStep);
      }
    }, 15);
  }

  toggleViewMode(mode) {
    this.viewMode = mode;
    if (this.viewer3d) {
      this.viewer3d.dispose();
      this.viewer3d = null;
    }
    this.render();
  }

  toggle3dAutoRotate() {
    this.is3dAutoRotate = !this.is3dAutoRotate;
    if (this.viewer3d) {
      this.viewer3d.isAutoRotating = this.is3dAutoRotate;
    }
    const label = document.getElementById('autoRotateLabel');
    if (label) label.textContent = this.is3dAutoRotate ? '⏸️ Pause' : '▶️ Spin';
  }

  reset3dCamera() {
    if (this.viewer3d) {
      this.viewer3d.resetView();
    }
  }

  setPresetView(view) {
    if (this.viewer3d) {
      this.viewer3d.setPresetView(view);
    }
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
    const baseObj = DESSERT_BUILDER_OPTIONS.bases.find(i => i.id === this.state.base);
    const creation = {
      name: this.state.name || 'My La Desio Creation',
      recipe: this.getRecipeSummary(),
      price: this.calculatePrice(),
      image: baseObj?.image || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
      nutrition: this.calculateNutrition(),
      config: { ...this.state }
    };
    loyaltyStore.saveCustomCreation(creation);
    if (window.showToast) {
      window.showToast(`"${creation.name}" saved to your Privé Creations!`, 'success');
    } else {
      alert(`"${creation.name}" saved to your Privé Creations!`);
    }
    this.render();
  }

  getRecipeSummary() {
    const b = DESSERT_BUILDER_OPTIONS.bases.find(i => i.id === this.state.base)?.name || 'Custom Base';
    const f = DESSERT_BUILDER_OPTIONS.flavors.find(i => i.id === this.state.flavor)?.name || 'Custom Flavor';
    const fil = DESSERT_BUILDER_OPTIONS.fillings.find(i => i.id === this.state.filling)?.name || 'Gourmet Filling';
    const s = DESSERT_BUILDER_OPTIONS.sauces.find(i => i.id === this.state.sauce)?.name || 'Artisan Sauce';
    return `${b} + ${f} + ${fil} + ${s}`;
  }

  openSavedCreationsModal() {
    const data = loyaltyStore.getData();
    const creations = data.creations || [];

    let modal = document.getElementById('savedCreationsPickerModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'savedCreationsPickerModal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-xl bg-[#241009] rounded-3xl border border-[#B8945B]/40 shadow-2xl p-6 space-y-4 max-h-[85vh] flex flex-col">
        <div class="flex items-center justify-between border-b border-[#B8945B]/30 pb-3">
          <div>
            <h3 class="font-display text-xl text-[#FFFDF9]">My Saved Atelier Recipes</h3>
            <p class="text-xs text-[#D6C2B0]">Select any saved bespoke creation to load and customize in the Studio.</p>
          </div>
          <button onclick="document.getElementById('savedCreationsPickerModal').classList.add('hidden')"
                  class="text-gray-400 hover:text-[#E6CA85] text-lg font-bold">✕</button>
        </div>

        <div class="flex-1 overflow-y-auto space-y-3 pr-1">
          ${creations.length > 0 ? creations.map(c => `
            <div class="p-3.5 rounded-2xl bg-[#1A0A06] border border-[#B8945B]/30 flex items-center justify-between gap-3 hover:border-[#B8945B] transition-all">
              <div class="flex items-center gap-3 min-w-0">
                <img src="${c.image}" alt="${c.name}" class="w-14 h-14 rounded-xl object-cover border border-[#B8945B]/30 shrink-0" />
                <div class="min-w-0">
                  <h4 class="font-serif font-bold text-sm text-[#FFFDF9] truncate">${c.name}</h4>
                  <p class="text-[11px] text-[#D6C2B0] truncate">${c.recipe}</p>
                  <div class="flex items-center gap-2 mt-1 text-[10px] text-[#E6CA85]">
                    <span>₹${c.price}</span>
                    <span>•</span>
                    <span>${c.createdDate}</span>
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-2 shrink-0">
                <button onclick="window.dessertStudio.loadSavedCreation('${c.id}')"
                        class="px-3.5 py-1.5 rounded-lg btn-gold-luxury font-serif text-xs font-semibold tracking-wider">
                  Load
                </button>
                <button onclick="window.loyaltyStore.deleteCreation('${c.id}'); window.dessertStudio.openSavedCreationsModal();"
                        class="text-gray-400 hover:text-red-400 p-1.5 text-xs" title="Delete">
                  🗑️
                </button>
              </div>
            </div>
          `).join('') : `
            <div class="py-12 text-center text-xs text-[#D6C2B0] space-y-2">
              <p class="text-2xl">✨</p>
              <p>No saved recipes found yet.</p>
              <p class="text-[11px] text-stone-400">Click "Save Creation" anytime while experimenting in the studio!</p>
            </div>
          `}
        </div>

        <div class="border-t border-[#B8945B]/30 pt-3 flex justify-between items-center text-xs">
          <a href="#account" onclick="document.getElementById('savedCreationsPickerModal').classList.add('hidden')"
             class="text-[#E6CA85] hover:underline font-serif">
            Go to Privé Dashboard →
          </a>
          <button onclick="document.getElementById('savedCreationsPickerModal').classList.add('hidden')"
                  class="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-serif">
            Close
          </button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  loadSavedCreation(creationId) {
    const data = loyaltyStore.getData();
    const creation = (data.creations || []).find(c => c.id === creationId);
    if (!creation) return;

    if (creation.config) {
      this.loadConfig(creation.config);
    }
    if (creation.name) {
      this.state.name = creation.name;
    }

    const picker = document.getElementById('savedCreationsPickerModal');
    if (picker) picker.classList.add('hidden');

    if (window.showToast) {
      window.showToast(`Loaded "${creation.name}" into Studio!`, 'success');
    }
    this.render();
  }

  addBespokeToCart() {
    const price = this.calculatePrice();
    const recipeString = this.getRecipeSummary();
    const configKey = JSON.stringify(this.state);
    const baseObj = DESSERT_BUILDER_OPTIONS.bases.find(i => i.id === this.state.base);
    const image = baseObj?.image || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80';

    // Auto-save this creation into loyaltyStore so it is preserved forever
    loyaltyStore.saveCustomCreation({
      name: this.state.name || 'Bespoke Desio Creation',
      recipe: recipeString,
      price: price,
      image: image,
      nutrition: this.calculateNutrition(),
      config: { ...this.state }
    });

    const item = {
      id: 'custom_creation_' + Date.now(),
      name: this.state.name || 'Bespoke Desio Creation',
      subtitle: recipeString,
      isCustom: true,
      customConfigKey: configKey,
      price: price,
      image: image,
      options: {
        note: this.state.specialNote,
        toppings: this.state.toppings.map(id => DESSERT_BUILDER_OPTIONS.toppings.find(t => t.id === id)?.name)
      }
    };

    cartStore.addItem(item);
    if (this.onAddToCart) this.onAddToCart(item);

    if (window.showToast) {
      window.showToast(`"${item.name}" saved & added to your bag!`, 'success');
    }

    this.render();
  }
}
