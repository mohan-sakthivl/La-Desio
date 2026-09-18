// LA DESIO - Interactive Bespoke Dessert Studio Builder (INR Edition)
import { DESSERT_BUILDER_OPTIONS } from './data.js';
import { cartStore } from './cart.js';
import { loyaltyStore } from './loyalty.js';

// ============================================================================
// PHOTOREALISTIC THREE.JS WEBGL 3D DESSERT ATELIER (UNIQUE HIGH-FIDELITY MODELS)
// ============================================================================
export class Dessert3DViewer {
  constructor(canvas, state, step) {
    this.canvas = canvas;
    this.state = state || {};
    this.step = step || 1;
    this.isAutoRotating = true;
    this.rotY = 0.55;
    this.rotX = 0.32;
    this.isDragging = false;
    this.lastPointerX = 0;
    this.lastPointerY = 0;
    this.animationFrameId = null;
    this.isThree = false;

    if (this.canvas) {
      if (typeof window !== 'undefined' && window.THREE) {
        this.initThree();
      }
      this.setupInteraction();
      this.animate = this.animate.bind(this);
      this.animate();
    }
  }

  initThree() {
    const THREE = window.THREE;
    this.isThree = true;
    const width = this.canvas.clientWidth || 440;
    const height = this.canvas.clientHeight || 440;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height, false);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.22;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    this.camera.position.set(0, 2.7, 4.6);
    this.camera.lookAt(0, 0.65, 0);

    // Studio 3-Point Master Patisserie Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFDF9, 0.75);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFF6EA, 1.5);
    keyLight.position.set(4, 6.5, 4.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0008;
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xB8945B, 0.65);
    fillLight.position.set(-4, 3.5, -2);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xE6CA85, 1.0);
    rimLight.position.set(0, 5, -4.5);
    this.scene.add(rimLight);

    // Luxury Ceramic & 24k Gold Trim Pedestal Platter
    const plateGroup = new THREE.Group();
    const plateGeom = new THREE.CylinderGeometry(1.8, 1.55, 0.09, 64);
    const plateMat = new THREE.MeshPhysicalMaterial({
      color: 0x140703,
      roughness: 0.18,
      clearcoat: 0.9,
      clearcoatRoughness: 0.08
    });
    const plateMesh = new THREE.Mesh(plateGeom, plateMat);
    plateMesh.receiveShadow = true;
    plateGroup.add(plateMesh);

    // 24k Gold Rim Trim
    const goldRimGeom = new THREE.TorusGeometry(1.78, 0.028, 16, 64);
    goldRimGeom.rotateX(Math.PI / 2);
    const goldRimMat = new THREE.MeshStandardMaterial({
      color: 0xB8945B,
      roughness: 0.15,
      metalness: 0.92
    });
    const goldRimMesh = new THREE.Mesh(goldRimGeom, goldRimMat);
    goldRimMesh.position.y = 0.045;
    plateGroup.add(goldRimMesh);

    plateGroup.position.y = 0;
    this.scene.add(plateGroup);

    // Dynamic Dessert Group
    this.dessertGroup = new THREE.Group();
    this.scene.add(this.dessertGroup);

    this.buildDessertMesh();
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
      this.rotX = Math.max(0.04, Math.min(0.85, this.rotX + deltaY * 0.008));
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

  // ==========================================================================
  // UNIQUE BASE GEOMETRIES (Substantial Foundation Layout)
  // ==========================================================================
  createBaseMesh(THREE, baseObj) {
    const baseGroup = new THREE.Group();
    const id = baseObj?.id || '';
    let topSurfaceY = 0.55;
    let topRadius = 1.35;

    if (id === 'base-waffle') {
      // 1. BELGIAN LIEGE WAFFLE (Unique 3D Waffle with indented grid pockets)
      const waffleW = 2.4, waffleD = 2.4, waffleH = 0.42;
      const waffleColor = new THREE.Color('#D29E57');
      const waffleMat = new THREE.MeshStandardMaterial({
        color: waffleColor,
        roughness: 0.78,
        metalness: 0.04
      });

      // Main waffle body with rounded edges
      const bodyGeom = new THREE.BoxGeometry(waffleW, waffleH, waffleD, 16, 4, 16);
      const bodyMesh = new THREE.Mesh(bodyGeom, waffleMat);
      bodyMesh.position.y = waffleH / 2 + 0.02;
      bodyMesh.castShadow = true;
      bodyMesh.receiveShadow = true;
      baseGroup.add(bodyMesh);

      // Grid of 4x4 indented waffle square pockets
      const pocketMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#9E6828'),
        roughness: 0.85
      });
      const pocketSize = 0.38;
      const pocketDepth = 0.12;
      const pGeom = new THREE.BoxGeometry(pocketSize, pocketDepth, pocketSize);

      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
          const x = -0.75 + c * 0.50;
          const z = -0.75 + r * 0.50;
          const pMesh = new THREE.Mesh(pGeom, pocketMat);
          pMesh.position.set(x, waffleH - pocketDepth / 2 + 0.025, z);
          baseGroup.add(pMesh);
        }
      }
      topSurfaceY = waffleH + 0.02;
      topRadius = 1.25;

    } else if (id === 'base-cheesecake') {
      // 2. NEW YORK CHEESECAKE (Two distinct layers: golden crumb base + velvety cream body)
      const crustH = 0.16;
      const cheeseH = 0.46;
      const rad = 1.36;

      // Golden graham almond crust base
      const crustMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#9C6634'),
        roughness: 0.92
      });
      const crustGeom = new THREE.CylinderGeometry(rad, rad * 1.02, crustH, 64);
      const crustMesh = new THREE.Mesh(crustGeom, crustMat);
      crustMesh.position.y = crustH / 2 + 0.02;
      crustMesh.castShadow = true;
      crustMesh.receiveShadow = true;
      baseGroup.add(crustMesh);

      // Cream cheese body
      const cheeseMat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#FFF4DC'),
        roughness: 0.42,
        clearcoat: 0.25,
        clearcoatRoughness: 0.3
      });
      const cheeseGeom = new THREE.CylinderGeometry(rad * 0.98, rad, cheeseH, 64);
      const cheeseMesh = new THREE.Mesh(cheeseGeom, cheeseMat);
      cheeseMesh.position.y = crustH + cheeseH / 2 + 0.02;
      cheeseMesh.castShadow = true;
      baseGroup.add(cheeseMesh);

      // Delicate toasted golden baking ring around top rim
      const ringGeom = new THREE.TorusGeometry(rad * 0.96, 0.04, 16, 64);
      ringGeom.rotateX(Math.PI / 2);
      const ringMat = new THREE.MeshStandardMaterial({ color: new THREE.Color('#D49F5A'), roughness: 0.8 });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.position.y = crustH + cheeseH + 0.02;
      baseGroup.add(ringMesh);

      topSurfaceY = crustH + cheeseH + 0.02;
      topRadius = rad * 0.96;

    } else if (id === 'base-protein-cheesecake') {
      // 3. PRO-BASQUE BURNT CHEESECAKE (Sunken rustic top, caramelized dark crust)
      const basqueH = 0.54;
      const rad = 1.34;

      const sideMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#C98D4A'),
        roughness: 0.88
      });
      const sideGeom = new THREE.CylinderGeometry(rad * 0.96, rad, basqueH, 48);
      const sideMesh = new THREE.Mesh(sideGeom, sideMat);
      sideMesh.position.y = basqueH / 2 + 0.02;
      sideMesh.castShadow = true;
      baseGroup.add(sideMesh);

      // Sunken, rustic burnt caramel top
      const topMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#2C1309'),
        roughness: 0.65
      });
      const topGeom = new THREE.CylinderGeometry(rad * 0.94, rad * 0.94, 0.06, 48);
      const topMesh = new THREE.Mesh(topGeom, topMat);
      topMesh.position.y = basqueH - 0.02;
      baseGroup.add(topMesh);

      topSurfaceY = basqueH + 0.02;
      topRadius = rad * 0.94;

    } else if (id === 'base-cookie') {
      // 4. GIANT CHOC-CHUNK SKILLET COOKIE (Wide organic disc with protruding molten chocolate pools)
      const cookieH = 0.38;
      const rad = 1.45;
      const cookieMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#C4945A'),
        roughness: 0.82
      });
      const cookieGeom = new THREE.CylinderGeometry(rad * 0.96, rad, cookieH, 48);
      const cookieMesh = new THREE.Mesh(cookieGeom, cookieMat);
      cookieMesh.position.y = cookieH / 2 + 0.02;
      cookieMesh.castShadow = true;
      baseGroup.add(cookieMesh);

      // Embedded molten chocolate chunks
      const chunkMat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#1F0C06'),
        roughness: 0.22,
        clearcoat: 0.6
      });
      const chunkGeom = new THREE.DodecahedronGeometry(0.14, 0);

      const chunkPositions = [
        [0.45, 0.35], [-0.55, 0.25], [0.15, -0.65],
        [-0.45, -0.45], [0.72, -0.15], [-0.12, 0.05], [0.55, 0.72]
      ];
      chunkPositions.forEach(pos => {
        const cMesh = new THREE.Mesh(chunkGeom, chunkMat);
        cMesh.position.set(pos[0], cookieH + 0.02, pos[1]);
        cMesh.scale.set(1.2, 0.6, 1.1);
        cMesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
        baseGroup.add(cMesh);
      });

      topSurfaceY = cookieH + 0.04;
      topRadius = rad * 0.94;

    } else if (id === 'base-oat-pulse-crust') {
      // 5. TOASTED OAT & MOONG TARTLET (Pastry tart shell with crimped/fluted rim)
      const tartH = 0.44;
      const outerRad = 1.45;
      const innerRad = 1.25;

      const pastryMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#B5874C'),
        roughness: 0.85
      });

      // Bottom shell
      const bottomGeom = new THREE.CylinderGeometry(innerRad, innerRad * 1.05, 0.14, 48);
      const bottomMesh = new THREE.Mesh(bottomGeom, pastryMat);
      bottomMesh.position.y = 0.07 + 0.02;
      baseGroup.add(bottomMesh);

      // Fluted pastry rim
      const rimGeom = new THREE.CylinderGeometry(outerRad, innerRad, tartH, 48, 1, true);
      const rimMesh = new THREE.Mesh(rimGeom, pastryMat);
      rimMesh.position.y = tartH / 2 + 0.02;
      rimMesh.castShadow = true;
      baseGroup.add(rimMesh);

      topSurfaceY = 0.18;
      topRadius = innerRad;

    } else if (id.includes('brownie')) {
      // 6. FUDGE BROWNIE / WHEY BROWNIE (Substantial square slab with beveled edges)
      const bW = 2.2, bD = 2.2, bH = 0.54;
      const bColor = id.includes('whey') ? new THREE.Color('#25130D') : new THREE.Color('#381E15');
      const bMat = new THREE.MeshStandardMaterial({
        color: bColor,
        roughness: 0.86,
        metalness: 0.05
      });

      const bGeom = new THREE.BoxGeometry(bW, bH, bD, 12, 6, 12);
      const bMesh = new THREE.Mesh(bGeom, bMat);
      bMesh.position.y = bH / 2 + 0.02;
      bMesh.castShadow = true;
      baseGroup.add(bMesh);

      // Papery crinkly top crust
      const crustMat = new THREE.MeshStandardMaterial({
        color: id.includes('whey') ? new THREE.Color('#1F0C06') : new THREE.Color('#2B140E'),
        roughness: 0.5,
        metalness: 0.1
      });
      const topCap = new THREE.BoxGeometry(bW * 0.98, 0.02, bD * 0.98);
      const capMesh = new THREE.Mesh(topCap, crustMat);
      capMesh.position.y = bH + 0.025;
      baseGroup.add(capMesh);

      topSurfaceY = bH + 0.03;
      topRadius = 1.25;

    } else if (id === 'base-ragi-spelt') {
      // 7. SPROUTED RAGI & SPELT SPONGE (Earthy, rustic artisanal round with natural grain texture)
      const rH = 0.52;
      const rad = 1.35;
      const rMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#48281E'),
        roughness: 0.92,
        metalness: 0.02
      });
      const rGeom = new THREE.CylinderGeometry(rad * 0.96, rad, rH, 64);
      const rMesh = new THREE.Mesh(rGeom, rMat);
      rMesh.position.y = rH / 2 + 0.02;
      rMesh.castShadow = true;
      baseGroup.add(rMesh);

      topSurfaceY = rH + 0.02;
      topRadius = rad * 0.96;

    } else {
      // 8. GENOESE SPONGE CAKE (Classic light Italian layered round)
      const cH = 0.52;
      const rad = 1.35;
      const cMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#F9ECD2'),
        roughness: 0.75
      });
      const cGeom = new THREE.CylinderGeometry(rad * 0.97, rad, cH, 64);
      const cMesh = new THREE.Mesh(cGeom, cMat);
      cMesh.position.y = cH / 2 + 0.02;
      cMesh.castShadow = true;
      baseGroup.add(cMesh);

      topSurfaceY = cH + 0.02;
      topRadius = rad * 0.97;
    }

    return { baseGroup, topSurfaceY, topRadius };
  }

  // ==========================================================================
  // MASTER THREE.JS BUILD PIPELINE
  // ==========================================================================
  buildDessertMesh() {
    if (!this.isThree || !this.dessertGroup || !window.THREE) return;
    const THREE = window.THREE;

    // Clear previous children
    while (this.dessertGroup.children.length > 0) {
      const child = this.dessertGroup.children[0];
      this.dessertGroup.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
        else child.material.dispose();
      }
    }

    const baseObj = (DESSERT_BUILDER_OPTIONS.bases || []).find(b => b.id === this.state.base) || DESSERT_BUILDER_OPTIONS.bases[0];
    const flavorObj = (DESSERT_BUILDER_OPTIONS.flavors || []).find(f => f.id === this.state.flavor) || DESSERT_BUILDER_OPTIONS.flavors[0];
    const fillingObj = (DESSERT_BUILDER_OPTIONS.fillings || []).find(f => f.id === this.state.filling) || DESSERT_BUILDER_OPTIONS.fillings[0];
    const sauceObj = (DESSERT_BUILDER_OPTIONS.sauces || []).find(s => s.id === this.state.sauce) || DESSERT_BUILDER_OPTIONS.sauces[0];

    // 1. UNIQUE BASE FOUNDATION (Substantial & Big)
    const { baseGroup, topSurfaceY, topRadius } = this.createBaseMesh(THREE, baseObj);
    this.dessertGroup.add(baseGroup);

    let currentY = topSurfaceY;
    const isBox = baseObj.id.includes('brownie') || baseObj.id === 'base-waffle';

    // 2. DELICATE INFUSION SOAK (Thin Glistening Coat, NOT a thick layer)
    if (this.step >= 2 && flavorObj) {
      const soakH = 0.035;
      const soakColor = new THREE.Color(flavorObj.color || '#EAA221');
      const soakMat = new THREE.MeshPhysicalMaterial({
        color: soakColor,
        roughness: 0.12,
        clearcoat: 0.95,
        clearcoatRoughness: 0.08,
        transmission: 0.38,
        reflectivity: 0.9
      });

      let soakMesh;
      if (isBox) {
        soakMesh = new THREE.Mesh(new THREE.BoxGeometry(topRadius * 1.85, soakH, topRadius * 1.85), soakMat);
      } else {
        soakMesh = new THREE.Mesh(new THREE.CylinderGeometry(topRadius * 0.98, topRadius, soakH, 64), soakMat);
      }
      soakMesh.position.y = currentY + soakH / 2;
      this.dessertGroup.add(soakMesh);
      currentY += soakH;
    }

    // 3. SILKY FILLING CENTER (Delicate Pastry Mousse Coat + Piped Rosettes)
    if (this.step >= 3 && fillingObj) {
      const fillH = 0.18; // Elegant thin mousse layer
      const fillColor = new THREE.Color(fillingObj.color || '#FFF8EB');
      const fillMat = new THREE.MeshPhysicalMaterial({
        color: fillColor,
        roughness: 0.35,
        clearcoat: 0.45,
        clearcoatRoughness: 0.2
      });

      let fillMesh;
      if (isBox) {
        fillMesh = new THREE.Mesh(new THREE.BoxGeometry(topRadius * 1.8, fillH, topRadius * 1.8), fillMat);
      } else {
        fillMesh = new THREE.Mesh(new THREE.CylinderGeometry(topRadius * 0.96, topRadius * 0.98, fillH, 64), fillMat);
      }
      fillMesh.position.y = currentY + fillH / 2;
      fillMesh.castShadow = true;
      this.dessertGroup.add(fillMesh);

      // Artisanal piped cream quenelles around perimeter
      const pipingCount = 8;
      const pMat = new THREE.MeshStandardMaterial({ color: fillColor, roughness: 0.4 });
      for (let p = 0; p < pipingCount; p++) {
        const theta = (p / pipingCount) * Math.PI * 2;
        const pR = topRadius * 0.88;
        const pGeom = new THREE.SphereGeometry(0.08, 12, 12);
        pGeom.scale(1, 1.3, 1);
        const pOrb = new THREE.Mesh(pGeom, pMat);
        pOrb.position.set(Math.cos(theta) * pR, currentY + fillH + 0.04, Math.sin(theta) * pR);
        this.dessertGroup.add(pOrb);
      }

      currentY += fillH;
    }

    // 4. MIRROR GLAZE / SAUCE DRIZZLE (Thin Glossy Coat with Realistic Dripping Physics)
    if (this.step >= 5 && sauceObj) {
      const glazeH = 0.038;
      const sauceColor = new THREE.Color(sauceObj.color || '#2B140E');
      const glazeMat = new THREE.MeshPhysicalMaterial({
        color: sauceColor,
        roughness: 0.04,
        metalness: 0.08,
        clearcoat: 1.0,
        clearcoatRoughness: 0.02,
        reflectivity: 0.98
      });

      let glazeMesh;
      if (isBox) {
        glazeMesh = new THREE.Mesh(new THREE.BoxGeometry(topRadius * 1.78, glazeH, topRadius * 1.78), glazeMat);
      } else {
        glazeMesh = new THREE.Mesh(new THREE.CylinderGeometry(topRadius * 0.95, topRadius * 0.97, glazeH, 64), glazeMat);
      }
      glazeMesh.position.y = currentY + glazeH / 2;
      glazeMesh.castShadow = true;
      this.dessertGroup.add(glazeMesh);

      // Realistic pastry drips cascading down sides
      const dripCount = 10;
      for (let d = 0; d < dripCount; d++) {
        const angle = (d / dripCount) * Math.PI * 2;
        const dripLen = 0.16 + (d % 3) * 0.14;
        const dripR = topRadius * 0.98;
        const dripGeom = new THREE.CylinderGeometry(0.035, 0.055, dripLen, 12);
        const dripMesh = new THREE.Mesh(dripGeom, glazeMat);
        dripMesh.position.set(
          Math.cos(angle) * dripR,
          currentY - dripLen / 2 + 0.01,
          Math.sin(angle) * dripR
        );
        this.dessertGroup.add(dripMesh);

        // Teardrop droplet at bottom of drip
        const dropGeom = new THREE.SphereGeometry(0.05, 12, 12);
        const dropMesh = new THREE.Mesh(dropGeom, glazeMat);
        dropMesh.position.set(
          Math.cos(angle) * dripR,
          currentY - dripLen,
          Math.sin(angle) * dripR
        );
        this.dessertGroup.add(dropMesh);
      }

      currentY += glazeH;
    }

    // 5. PHOTOREALISTIC TOPPINGS (No cartoons! Real cut fruits, almond flakes, chocolate ribbons)
    if (this.step >= 4 && Array.isArray(this.state.toppings)) {
      const topY = currentY + 0.02;

      this.state.toppings.forEach((topId) => {
        if (topId === 'top-strawberries') {
          // REALISTIC HALVED STRAWBERRIES (Cut face showing white core, radiating striations, and glossy red skin)
          const angles = [0.35, 2.45, 4.55];
          angles.forEach(ang => {
            const r = 0.46;
            const berryGroup = new THREE.Group();

            // Sliced strawberry half
            const bGeom = new THREE.ConeGeometry(0.22, 0.36, 24);
            bGeom.rotateZ(Math.PI / 2.3);
            bGeom.scale(1, 0.65, 1);

            const skinMat = new THREE.MeshPhysicalMaterial({
              color: 0xC8102E,
              roughness: 0.15,
              clearcoat: 0.95,
              clearcoatRoughness: 0.06
            });
            const bMesh = new THREE.Mesh(bGeom, skinMat);
            bMesh.castShadow = true;
            berryGroup.add(bMesh);

            // Cut face highlight
            const cutFaceGeom = new THREE.PlaneGeometry(0.32, 0.24);
            const cutMat = new THREE.MeshStandardMaterial({
              color: 0xFFEBEB,
              roughness: 0.4
            });
            const cutMesh = new THREE.Mesh(cutFaceGeom, cutMat);
            cutMesh.position.set(0.01, 0.08, 0);
            cutMesh.rotation.x = -Math.PI / 2;
            berryGroup.add(cutMesh);

            // Fresh natural green stem leaves
            const leafMat = new THREE.MeshStandardMaterial({ color: 0x225E27, roughness: 0.65 });
            for (let l = 0; l < 3; l++) {
              const leafGeom = new THREE.ConeGeometry(0.05, 0.12, 6);
              leafGeom.rotateX(Math.PI / 2 + (l - 1) * 0.4);
              const leafMesh = new THREE.Mesh(leafGeom, leafMat);
              leafMesh.position.set(-0.16, 0.04, (l - 1) * 0.06);
              berryGroup.add(leafMesh);
            }

            berryGroup.position.set(Math.cos(ang) * r, topY + 0.12, Math.sin(ang) * r);
            berryGroup.rotation.y = ang + 0.5;
            this.dessertGroup.add(berryGroup);
          });

        } else if (topId === 'top-blueberries') {
          // PLUMP NATURAL BLUEBERRIES with indented waxy star calyx
          const bCount = 7;
          for (let b = 0; b < bCount; b++) {
            const ang = (b / bCount) * Math.PI * 2 + 0.2;
            const r = 0.52 + (b % 2) * 0.22;

            const berryGeom = new THREE.SphereGeometry(0.12, 20, 20);
            berryGeom.scale(1.1, 0.92, 1.1); // Slightly flattened natural plump sphere

            const berryMat = new THREE.MeshPhysicalMaterial({
              color: 0x242D54, // Deep indigo
              roughness: 0.58,  // Dusty waxy bloom
              clearcoat: 0.25,
              clearcoatRoughness: 0.4
            });
            const berryMesh = new THREE.Mesh(berryGeom, berryMat);
            berryMesh.position.set(Math.cos(ang) * r, topY + 0.08, Math.sin(ang) * r);
            berryMesh.castShadow = true;

            // Star calyx crown
            const starGeom = new THREE.TorusGeometry(0.035, 0.012, 8, 5);
            starGeom.rotateX(Math.PI / 2);
            const starMat = new THREE.MeshStandardMaterial({ color: 0x121730, roughness: 0.8 });
            const starMesh = new THREE.Mesh(starGeom, starMat);
            starMesh.position.y = 0.095;
            berryMesh.add(starMesh);

            this.dessertGroup.add(berryMesh);
          }

        } else if (topId === 'top-almonds') {
          // TOASTED ALMOND FLAKES (Delicate curved slivers scattered naturally)
          const fCount = 12;
          for (let f = 0; f < fCount; f++) {
            const ang = (f / fCount) * Math.PI * 2;
            const r = 0.35 + (f % 3) * 0.25;

            const flakeGeom = new THREE.CylinderGeometry(0.16, 0.16, 0.018, 16);
            flakeGeom.scale(1.5, 1, 0.7);

            const flakeMat = new THREE.MeshStandardMaterial({
              color: (f % 2 === 0) ? 0xEED2A4 : 0xC79354, // Toasted golden edges
              roughness: 0.7
            });
            const flakeMesh = new THREE.Mesh(flakeGeom, flakeMat);
            flakeMesh.position.set(Math.cos(ang) * r, topY + 0.03, Math.sin(ang) * r);
            flakeMesh.rotation.set((Math.random() - 0.5) * 0.4, ang, (Math.random() - 0.5) * 0.4);
            flakeMesh.castShadow = true;
            this.dessertGroup.add(flakeMesh);
          }

        } else if (topId === 'top-hazelnuts') {
          // ROASTED PIEDMONT HAZELNUTS (Halved roasted nuts showing textured skin)
          const hCount = 5;
          for (let h = 0; h < hCount; h++) {
            const ang = (h / hCount) * Math.PI * 2 + 0.4;
            const r = 0.62;

            const nutGeom = new THREE.SphereGeometry(0.14, 16, 16);
            nutGeom.scale(1.2, 0.88, 1.1);

            const nutMat = new THREE.MeshStandardMaterial({
              color: 0x8C4E23,
              roughness: 0.72
            });
            const nutMesh = new THREE.Mesh(nutGeom, nutMat);
            nutMesh.position.set(Math.cos(ang) * r, topY + 0.07, Math.sin(ang) * r);
            nutMesh.rotation.set(0.3, ang, 0.2);
            nutMesh.castShadow = true;
            this.dessertGroup.add(nutMesh);
          }

        } else if (topId === 'top-choc-chips' || topId === 'top-cacao-nibs') {
          // ARTISANAL SHAVED CHOCOLATE CURLS & NIBS (Curved ribbons shaved with a pastry knife)
          const cCount = 8;
          for (let c = 0; c < cCount; c++) {
            const ang = (c / cCount) * Math.PI * 2 + 0.2;
            const r = 0.4 + (c % 2) * 0.35;

            // Curved ribbon spiral
            const curlGeom = new THREE.TorusGeometry(0.11, 0.024, 10, 24, Math.PI * 1.3);
            const curlMat = new THREE.MeshPhysicalMaterial({
              color: 0x180905,
              roughness: 0.25,
              clearcoat: 0.65
            });
            const curlMesh = new THREE.Mesh(curlGeom, curlMat);
            curlMesh.position.set(Math.cos(ang) * r, topY + 0.05, Math.sin(ang) * r);
            curlMesh.rotation.set(Math.PI / 2 + (Math.random() - 0.5), ang, Math.random());
            curlMesh.castShadow = true;
            this.dessertGroup.add(curlMesh);
          }

        } else if (topId === 'top-popped-amaranth' || topId === 'top-moong-crisp') {
          // ORGANIC POPPED GRAIN & PULSE CRUST CLUSTERS
          const pCount = 20;
          for (let p = 0; p < pCount; p++) {
            const ang = Math.random() * Math.PI * 2;
            const r = Math.random() * 0.82;
            const gGeom = new THREE.DodecahedronGeometry(0.042, 0);
            const gMat = new THREE.MeshStandardMaterial({
              color: topId === 'top-moong-crisp' ? 0xD4A037 : 0xF3E6C4,
              roughness: 0.65
            });
            const gMesh = new THREE.Mesh(gGeom, gMat);
            gMesh.position.set(Math.cos(ang) * r, topY + 0.025, Math.sin(ang) * r);
            gMesh.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
            this.dessertGroup.add(gMesh);
          }

        } else if (topId === 'top-gold-leaf') {
          // 24K EDIBLE GOLD LEAF FLAKES (Ultra-thin crumpled organic leaf foil draped naturally)
          const gCount = 6;
          for (let g = 0; g < gCount; g++) {
            const ang = (g / gCount) * Math.PI * 2 + 0.35;
            const r = 0.32 + (g % 3) * 0.28;

            const goldGeom = new THREE.PlaneGeometry(0.18, 0.14, 4, 4);
            // Subtle crinkling of leaf vertices
            const pos = goldGeom.attributes.position;
            for (let v = 0; v < pos.count; v++) {
              pos.setZ(v, (Math.random() - 0.5) * 0.04);
            }
            goldGeom.computeVertexNormals();

            const goldMat = new THREE.MeshPhysicalMaterial({
              color: 0xFFD700,
              metalness: 0.98,
              roughness: 0.12,
              clearcoat: 0.85,
              reflectivity: 1.0,
              side: THREE.DoubleSide
            });
            const goldMesh = new THREE.Mesh(goldGeom, goldMat);
            goldMesh.position.set(Math.cos(ang) * r, topY + 0.06, Math.sin(ang) * r);
            goldMesh.rotation.set(-Math.PI / 2.2, (Math.random() - 0.5) * 0.6, ang);
            this.dessertGroup.add(goldMesh);
          }
        }
      });
    }

    // 6. CELEBRATION SPARKLES (Step 6)
    if (this.step === 6) {
      const sparkleGeom = new THREE.BufferGeometry();
      const count = 54;
      const positions = new Float32Array(count * 3);
      for (let s = 0; s < count; s++) {
        const theta = Math.random() * Math.PI * 2;
        const rad = 1.4 + Math.random() * 1.3;
        positions[s * 3] = Math.cos(theta) * rad;
        positions[s * 3 + 1] = 0.25 + Math.random() * 2.0;
        positions[s * 3 + 2] = Math.sin(theta) * rad;
      }
      sparkleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const sparkleMat = new THREE.PointsMaterial({
        color: 0xE6CA85,
        size: 0.08,
        transparent: true,
        opacity: 0.9
      });
      const sparkles = new THREE.Points(sparkleGeom, sparkleMat);
      this.dessertGroup.add(sparkles);
    }
  }

  loadBlenderModel(url) {
    if (!this.isThree || !window.THREE) return;
    const THREE = window.THREE;
    if (typeof THREE.GLTFLoader !== 'function') {
      console.info('GLTFLoader not loaded, using procedural atelier.');
      return;
    }
    const loader = new THREE.GLTFLoader();
    loader.load(
      url,
      (gltf) => {
        while (this.dessertGroup.children.length > 0) {
          this.dessertGroup.remove(this.dessertGroup.children[0]);
        }
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.4 / (maxDim || 1);
        model.scale.set(scale, scale, scale);
        model.position.y = 0.06;
        model.traverse(child => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        this.dessertGroup.add(model);
      },
      undefined,
      (err) => {
        console.warn('Could not load Blender model, using procedural.', err);
      }
    );
  }

  animate() {
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));

    if (this.isThree && this.renderer && this.scene && this.camera) {
      if (this.isAutoRotating && !this.isDragging) {
        this.rotY += 0.005;
      }

      if (this.dessertGroup) {
        this.dessertGroup.rotation.y = this.rotY;
        this.dessertGroup.rotation.x = this.rotX;
      }

      this.renderer.render(this.scene, this.camera);
    }
  }

  update(state, step) {
    this.state = state || {};
    this.step = step || 1;
    if (this.isThree) {
      this.buildDessertMesh();
      if (this.step === 6) {
        this.isAutoRotating = true;
      }
    }
  }

  setPresetView(view) {
    if (view === 'glamour') {
      this.rotX = 0.32;
      this.rotY = 0.55;
    } else if (view === 'top') {
      this.rotX = 0.85;
    } else if (view === 'profile') {
      this.rotX = 0.04;
    }
  }

  resetView() {
    this.rotX = 0.32;
    this.rotY = 0.55;
    this.isAutoRotating = true;
  }

  dispose() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    if (this.cleanupInteraction) {
      this.cleanupInteraction();
      this.cleanupInteraction = null;
    }
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }
  }
}

// ============================================================================
// BESPOKE DESSERT STUDIO BUILDER CONTROLLER (REAL-TIME NUTRITION TRACKER)
// ============================================================================
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
      base: 'base-ragi-spelt',
      flavor: 'flavor-forest-honey',
      filling: 'filling-pulse-praline',
      toppings: ['top-popped-amaranth', 'top-strawberries'],
      sauce: 'sauce-date-caramel',
      name: 'Piccolo Natural Creation',
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

  calculateBasePrice() {
    let total = 0;
    const baseObj = DESSERT_BUILDER_OPTIONS.bases.find(b => b.id === this.state.base);
    if (baseObj) total += baseObj.price;

    const flavorObj = DESSERT_BUILDER_OPTIONS.flavors.find(f => f.id === this.state.flavor);
    if (flavorObj) total += flavorObj.price;

    const fillingObj = DESSERT_BUILDER_OPTIONS.fillings.find(f => f.id === this.state.filling);
    if (fillingObj) total += fillingObj.price;

    (this.state.toppings || []).forEach(topId => {
      const topObj = DESSERT_BUILDER_OPTIONS.toppings.find(t => t.id === topId);
      if (topObj) total += topObj.price;
    });

    const sauceObj = DESSERT_BUILDER_OPTIONS.sauces.find(s => s.id === this.state.sauce);
    if (sauceObj) total += sauceObj.price;

    return total;
  }

  getPricing() {
    const originalPrice = this.calculateBasePrice();
    const isBirthday = (typeof loyaltyStore !== 'undefined' && typeof loyaltyStore.isBirthdayDiscountAvailable === 'function' && loyaltyStore.isBirthdayDiscountAvailable());
    if (isBirthday) {
      const discountedPrice = Math.round(originalPrice * 0.7); // 30% OFF
      return {
        isBirthdayDiscount: true,
        originalPrice,
        price: discountedPrice,
        savings: originalPrice - discountedPrice,
        discountPercent: 30
      };
    }
    return {
      isBirthdayDiscount: false,
      originalPrice,
      price: originalPrice,
      savings: 0,
      discountPercent: 0
    };
  }

  calculatePrice() {
    return this.getPricing().price;
  }

  // Real-Time Dynamic Atomic Layer-by-Layer Nutritional Engine
  // Zero predefined values: every added component aggregates live!
  calculateNutrition() {
    let calories = 0, protein = 0, carbs = 0, fats = 0, fiber = 0, calcium = 0, iron = 0, naturalSugar = 0;
    const layerDeltas = [];

    // Layer 1: Base Foundation
    const baseObj = DESSERT_BUILDER_OPTIONS.bases.find(b => b.id === this.state.base);
    if (baseObj?.nutrition) {
      const n = baseObj.nutrition;
      calories += n.calories || 0;
      protein += n.protein || 0;
      carbs += n.carbs || 0;
      fats += n.fats || 0;
      fiber += n.fiber || 0;
      calcium += n.calcium || 0;
      iron += n.iron || 0;
      naturalSugar += n.naturalSugar || 0;
      layerDeltas.push({
        layer: 'Base Foundation',
        name: baseObj.name,
        calories: n.calories || 0,
        protein: n.protein || 0,
        carbs: n.carbs || 0,
        fats: n.fats || 0,
        fiber: n.fiber || 0
      });
    }

    // Layer 2: Flavor Infusion
    const flavorObj = DESSERT_BUILDER_OPTIONS.flavors.find(f => f.id === this.state.flavor);
    if (flavorObj?.nutrition) {
      const n = flavorObj.nutrition;
      calories += n.calories || 0;
      protein += n.protein || 0;
      carbs += n.carbs || 0;
      fats += n.fats || 0;
      fiber += n.fiber || 0;
      calcium += n.calcium || 0;
      iron += n.iron || 0;
      naturalSugar += n.naturalSugar || 0;
      layerDeltas.push({
        layer: 'Flavor Infusion',
        name: flavorObj.name,
        calories: n.calories || 0,
        protein: n.protein || 0,
        carbs: n.carbs || 0,
        fats: n.fats || 0,
        fiber: n.fiber || 0
      });
    }

    // Layer 3: Silky Filling
    const fillingObj = DESSERT_BUILDER_OPTIONS.fillings.find(f => f.id === this.state.filling);
    if (fillingObj?.nutrition) {
      const n = fillingObj.nutrition;
      calories += n.calories || 0;
      protein += n.protein || 0;
      carbs += n.carbs || 0;
      fats += n.fats || 0;
      fiber += n.fiber || 0;
      calcium += n.calcium || 0;
      iron += n.iron || 0;
      naturalSugar += n.naturalSugar || 0;
      layerDeltas.push({
        layer: 'Silky Filling',
        name: fillingObj.name,
        calories: n.calories || 0,
        protein: n.protein || 0,
        carbs: n.carbs || 0,
        fats: n.fats || 0,
        fiber: n.fiber || 0
      });
    }

    // Layer 4: Toppings
    (this.state.toppings || []).forEach(topId => {
      const topObj = DESSERT_BUILDER_OPTIONS.toppings.find(t => t.id === topId);
      if (topObj?.nutrition) {
        const n = topObj.nutrition;
        calories += n.calories || 0;
        protein += n.protein || 0;
        carbs += n.carbs || 0;
        fats += n.fats || 0;
        fiber += n.fiber || 0;
        calcium += n.calcium || 0;
        iron += n.iron || 0;
        naturalSugar += n.naturalSugar || 0;
        layerDeltas.push({
          layer: 'Artisanal Topping',
          name: topObj.name,
          calories: n.calories || 0,
          protein: n.protein || 0,
          carbs: n.carbs || 0,
          fats: n.fats || 0,
          fiber: n.fiber || 0
        });
      }
    });

    // Layer 5: Glaze Sauce
    const sauceObj = DESSERT_BUILDER_OPTIONS.sauces.find(s => s.id === this.state.sauce);
    if (sauceObj?.nutrition) {
      const n = sauceObj.nutrition;
      calories += n.calories || 0;
      protein += n.protein || 0;
      carbs += n.carbs || 0;
      fats += n.fats || 0;
      fiber += n.fiber || 0;
      calcium += n.calcium || 0;
      iron += n.iron || 0;
      naturalSugar += n.naturalSugar || 0;
      layerDeltas.push({
        layer: 'Mirror Glaze',
        name: sauceObj.name,
        calories: n.calories || 0,
        protein: n.protein || 0,
        carbs: n.carbs || 0,
        fats: n.fats || 0,
        fiber: n.fiber || 0
      });
    }

    // Dynamic macro percentages
    const totalGrams = (carbs + protein + fats) || 1;
    const carbsPct = Math.round((carbs / totalGrams) * 100);
    const proteinPct = Math.round((protein / totalGrams) * 100);
    const fatsPct = Math.round((fats / totalGrams) * 100);

    return {
      calories,
      protein,
      carbs,
      fats,
      fiber,
      calcium,
      iron: Number(iron.toFixed(1)),
      naturalSugar,
      carbsPct,
      proteinPct,
      fatsPct,
      layerDeltas
    };
  }

  renderStepContent() {
    switch (this.currentStep) {
      case 1:
        return `
          <div class="space-y-2">
            <div class="border-b border-[#B8945B]/20 pb-1 flex items-center justify-between">
              <div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] uppercase tracking-widest text-[#B8945B] font-semibold">Step 01 of 06</span>
                  <span class="text-[8.5px] font-mono bg-[#B8945B]/15 text-[#B8945B] px-1.5 py-0.2 rounded-full font-bold">⚡ 3D BASE</span>
                </div>
                <h3 class="font-display text-sm sm:text-base text-[#FFFDF9]">Choose Your Base Foundation</h3>
              </div>
              <p class="text-[9.5px] text-[#D6C2B0]/70 hidden sm:block">Sculpted 3D foundation</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${DESSERT_BUILDER_OPTIONS.bases.map(base => `
                <div class="p-2 sm:p-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-2.5 ${this.state.base === base.id ? 'border-2 border-[#E6CA85] bg-gradient-to-br from-[#381B10] to-[#241009] ring-2 ring-[#E6CA85]/30 shadow-lg' : 'border border-[#B8945B]/30 bg-[#1C0A05] hover:bg-[#261008] hover:border-[#B8945B]/70'}"
                     onclick="window.dessertStudio.selectBase('${base.id}')">
                  <img src="${base.image}" alt="${base.name}" class="w-11 h-11 sm:w-12 sm:h-12 rounded-lg object-cover border border-[#B8945B]/30 shrink-0" />
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between gap-1">
                      <h4 class="font-serif text-xs sm:text-sm font-bold text-[#FFFDF9] truncate">${base.name}</h4>
                      <span class="text-xs font-semibold text-[#B8945B] shrink-0">₹${base.price}</span>
                    </div>
                    <p class="text-[9.5px] text-[#D6C2B0]/80 line-clamp-1 mt-0.5">${base.description}</p>
                    <div class="mt-0.5 flex items-center gap-1.5 text-[9px] text-[#D6C2B0] font-medium">
                      <span class="font-bold text-[#B8945B]">+${base.nutrition?.calories || 0} kcal</span>
                      <span class="text-[#8F6D35]">·</span>
                      <span>P: ${base.nutrition?.protein || 0}g</span>
                      <span class="text-[#8F6D35]">·</span>
                      <span>C: ${base.nutrition?.carbs || 0}g</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case 2:
        return `
          <div class="space-y-2">
            <div class="border-b border-[#B8945B]/20 pb-1 flex items-center justify-between">
              <div>
                <span class="text-[10px] uppercase tracking-widest text-[#B8945B] font-semibold">Step 02 of 06</span>
                <h3 class="font-display text-sm sm:text-base text-[#FFFDF9]">Select Flavor Infusion Coat</h3>
              </div>
              <p class="text-[9.5px] text-[#D6C2B0]/70 hidden sm:block">Translucent flavor soak</p>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              ${DESSERT_BUILDER_OPTIONS.flavors.map(flavor => `
                <div class="p-2 rounded-xl border transition-all cursor-pointer text-center flex flex-col items-center justify-center gap-1 ${this.state.flavor === flavor.id ? 'border-2 border-[#E6CA85] bg-gradient-to-br from-[#381B10] to-[#241009] ring-2 ring-[#E6CA85]/30 shadow-lg' : 'border border-[#B8945B]/30 bg-[#1C0A05] hover:bg-[#261008] hover:border-[#B8945B]/70'}"
                     onclick="window.dessertStudio.selectFlavor('${flavor.id}')">
                  <span class="text-xl">${flavor.icon}</span>
                  <h4 class="font-serif text-[11px] font-bold text-[#FFFDF9] truncate max-w-full">${flavor.name}</h4>
                  <div class="flex items-center gap-1">
                    <span class="text-[11px] text-[#B8945B] font-bold">+₹${flavor.price}</span>
                    <span class="text-[9px] text-[#D6C2B0]/80">(${flavor.nutrition?.calories || 0} kcal)</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case 3:
        return `
          <div class="space-y-2">
            <div class="border-b border-[#B8945B]/20 pb-1 flex items-center justify-between">
              <div>
                <span class="text-[10px] uppercase tracking-widest text-[#B8945B] font-semibold">Step 03 of 06</span>
                <h3 class="font-display text-sm sm:text-base text-[#FFFDF9]">Select Silky Filling Layer</h3>
              </div>
              <p class="text-[9.5px] text-[#D6C2B0]/70 hidden sm:block">Hand-piped cream layers</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${DESSERT_BUILDER_OPTIONS.fillings.map(filling => `
                <div class="p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${this.state.filling === filling.id ? 'border-2 border-[#E6CA85] bg-gradient-to-br from-[#381B10] to-[#241009] ring-2 ring-[#E6CA85]/30 shadow-lg' : 'border border-[#B8945B]/30 bg-[#1C0A05] hover:bg-[#261008] hover:border-[#B8945B]/70'}"
                     onclick="window.dessertStudio.selectFilling('${filling.id}')">
                  <div class="flex items-center gap-2 min-w-0">
                    <span class="w-4 h-4 rounded-full border border-black/20 shadow-inner shrink-0" style="background: ${filling.color}"></span>
                    <div class="min-w-0">
                      <span class="font-serif text-xs font-bold text-[#FFFDF9] truncate block">${filling.name}</span>
                      <span class="text-[9px] text-[#D6C2B0] font-medium block">
                        +${filling.nutrition?.calories || 0} kcal · P: ${filling.nutrition?.protein || 0}g
                      </span>
                    </div>
                  </div>
                  <span class="text-xs font-semibold text-[#B8945B] shrink-0">+₹${filling.price}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case 4:
        return `
          <div class="space-y-2">
            <div class="border-b border-[#B8945B]/20 pb-1 flex items-center justify-between">
              <div>
                <span class="text-[10px] uppercase tracking-widest text-[#B8945B] font-semibold">Step 04 of 06</span>
                <h3 class="font-display text-sm sm:text-base text-[#FFFDF9]">Artisanal Toppings & Garnishes</h3>
              </div>
              <p class="text-[9.5px] text-[#D6C2B0]/70 hidden sm:block">Multi-select garnish</p>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
              ${DESSERT_BUILDER_OPTIONS.toppings.map(top => {
                const isSelected = (this.state.toppings || []).includes(top.id);
                return `
                  <div class="p-1.5 sm:p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${isSelected ? 'border-2 border-[#E6CA85] bg-gradient-to-br from-[#381B10] to-[#241009] ring-2 ring-[#E6CA85]/30 shadow-md' : 'border border-[#B8945B]/30 bg-[#1C0A05] hover:bg-[#261008] hover:border-[#B8945B]/70'}"
                       onclick="window.dessertStudio.toggleTopping('${top.id}')">
                    <div class="flex items-center gap-1.5 min-w-0">
                      <span class="text-sm sm:text-base shrink-0">${top.icon}</span>
                      <div class="min-w-0">
                        <span class="font-serif text-[11px] font-semibold text-[#FFFDF9] block truncate">${top.name}</span>
                        <span class="text-[8.5px] text-[#D6C2B0]">+${top.nutrition?.calories || 0} kcal</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1 shrink-0 ml-1">
                      <span class="text-[9.5px] text-[#B8945B] font-medium">+₹${top.price}</span>
                      <div class="w-3.5 h-3.5 rounded border flex items-center justify-center text-[8.5px] ${isSelected ? 'bg-[#E6CA85] border-[#E6CA85] text-[#120804] font-bold' : 'border-[#B8945B]/40 bg-[#120703]'}">
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
          <div class="space-y-2">
            <div class="border-b border-[#B8945B]/20 pb-1 flex items-center justify-between">
              <div>
                <span class="text-[10px] uppercase tracking-widest text-[#B8945B] font-semibold">Step 05 of 06</span>
                <h3 class="font-display text-sm sm:text-base text-[#FFFDF9]">Mirror Glaze & Sauce Drizzle</h3>
              </div>
              <p class="text-[9.5px] text-[#D6C2B0]/70 hidden sm:block">Cascading glaze drips</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${DESSERT_BUILDER_OPTIONS.sauces.map(sauce => `
                <div class="p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${this.state.sauce === sauce.id ? 'border-2 border-[#E6CA85] bg-gradient-to-br from-[#381B10] to-[#241009] ring-2 ring-[#E6CA85]/30 shadow-lg' : 'border border-[#B8945B]/30 bg-[#1C0A05] hover:bg-[#261008] hover:border-[#B8945B]/70'}"
                     onclick="window.dessertStudio.selectSauce('${sauce.id}')">
                  <div class="flex items-center gap-2 min-w-0">
                    <span class="w-4 h-4 rounded-full border border-black/20 shadow-inner shrink-0" style="background: ${sauce.color}"></span>
                    <div class="min-w-0">
                      <span class="font-serif text-xs font-semibold text-[#FFFDF9] truncate block">${sauce.name}</span>
                      <span class="text-[9px] text-[#D6C2B0] font-medium block">
                        +${sauce.nutrition?.calories || 0} kcal · C: ${sauce.nutrition?.carbs || 0}g
                      </span>
                    </div>
                  </div>
                  <span class="text-xs font-semibold text-[#B8945B] shrink-0">+₹${sauce.price}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;

      case 6:
        const totalPrice = this.calculatePrice();
        const n = this.calculateNutrition();

        return `
          <div class="space-y-2.5">
            <div class="border-b border-[#B8945B]/20 pb-1 flex items-center justify-between">
              <div>
                <span class="text-[10px] uppercase tracking-widest text-[#B8945B] font-semibold">Step 06 of 06</span>
                <h3 class="font-display text-sm sm:text-base text-[#FFFDF9]">Name & Save Your Custom Creation</h3>
              </div>
              <span class="text-[9px] px-2 py-0.5 rounded-full bg-[#1F0D08] text-[#E6CA85] font-bold border border-[#B8945B]/30">0g Refined Sugar</span>
            </div>

            <div class="space-y-2.5">
              <div>
                <label class="block text-[10px] font-semibold uppercase tracking-wider text-[#E6CA85] mb-1">Creation Title</label>
                <input type="text" id="creationNameInput" value="${this.state.name}" placeholder="e.g. Midnight Pistachio Fantasy"
                       class="w-full px-3.5 py-2.5 rounded-xl bg-[#160703] border border-[#B8945B]/50 text-xs text-[#FFFDF9] focus:outline-none focus:ring-1 focus:ring-[#E6CA85] font-serif"
                       oninput="window.dessertStudio.updateName(this.value)" />
              </div>

              <!-- Complete Nutrition Certificate -->
              <div class="p-2.5 rounded-xl bg-gradient-to-br from-[#241009] to-[#190904] border border-[#B8945B]/40 space-y-1.5">
                <div class="grid grid-cols-4 gap-1 text-center text-xs">
                  <div class="bg-[#120703] p-1.5 rounded-lg border border-[#B8945B]/25">
                    <span class="text-[8.5px] text-[#D6C2B0] block">Calories</span>
                    <span class="font-bold text-[#B8945B] text-xs">${n.calories}</span>
                  </div>
                  <div class="bg-[#120703] p-1.5 rounded-lg border border-[#B8945B]/25">
                    <span class="text-[8.5px] text-[#D6C2B0] block">Protein</span>
                    <span class="font-bold text-[#FFFDF9] text-xs">${n.protein}g</span>
                  </div>
                  <div class="bg-[#120703] p-1.5 rounded-lg border border-[#B8945B]/25">
                    <span class="text-[8.5px] text-[#D6C2B0] block">Carbs</span>
                    <span class="font-bold text-[#FFFDF9] text-xs">${n.carbs}g</span>
                  </div>
                  <div class="bg-[#120703] p-1.5 rounded-lg border border-[#B8945B]/25">
                    <span class="text-[8.5px] text-[#D6C2B0] block">Fiber</span>
                    <span class="font-bold text-[#E6CA85] text-xs">${n.fiber}g</span>
                  </div>
                </div>
                <div class="flex items-center justify-between text-[9px] text-[#D6C2B0] px-1 pt-1 border-t border-[#B8945B]/20">
                  <span>Calcium: <strong>${n.calcium}mg</strong></span>
                  <span>Iron: <strong>${n.iron}mg</strong></span>
                  <span>Natural Sugars: <strong>${n.naturalSugar}g</strong></span>
                </div>
              </div>

              <!-- Quick Atelier Recipe Note -->
              <div class="p-2.5 rounded-xl bg-[#170904] border border-[#B8945B]/35 flex items-center gap-2.5 text-[10.5px]">
                <span class="text-base text-[#E6CA85]">✨</span>
                <span class="text-[#D6C2B0] leading-relaxed">
                  Your bespoke recipe is finalized! Save it to your Privé recipe vault or add it directly to your bag.
                </span>
              </div>
            </div>
          </div>
        `;
    }
  }

  render() {
    if (!this.container) return;

    const pricing = this.getPricing();
    const totalPrice = pricing.price;
    const nutrition = this.calculateNutrition();
    const toppingsList = (this.state.toppings || []).map(id => {
      const t = DESSERT_BUILDER_OPTIONS.toppings.find(item => item.id === id);
      return t ? `<span class="inline-flex items-center gap-1 bg-[#190904] text-xs px-2.5 py-1 rounded-full border border-[#B8945B]/40 shadow-sm text-[#E6CA85]">${t.icon} ${t.name.split(' ')[0]}</span>` : '';
    }).join(' ');

    const steps = [
      { num: 1, title: 'Base' },
      { num: 2, title: 'Flavor' },
      { num: 3, title: 'Filling' },
      { num: 4, title: 'Toppings' },
      { num: 5, title: 'Glaze' },
      { num: 6, title: 'Finalize' }
    ];

    this.container.innerHTML = `
      <div class="bg-gradient-to-b from-[#1C0A05] via-[#241009] to-[#1C0A05] rounded-2xl border border-[#B8945B]/40 shadow-2xl p-3 sm:p-4 lg:p-4 text-[#F8F1E7]">
        
        ${pricing.isBirthdayDiscount ? `
          <!-- Birthday Privilege 3D Studio Banner (Compact) -->
          <div class="mb-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-950/80 via-[#1C0904] to-amber-950/80 border border-amber-400/70 shadow-sm flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span class="text-base">🎂</span>
              <span class="text-[10px] font-bold text-amber-300 uppercase tracking-wider">30% Birthday Privilege Applied</span>
              <span class="text-[10.5px] text-[#D6C2B0] hidden sm:inline">— Included automatically on your bespoke creation</span>
            </div>
            <div class="flex items-center gap-1.5 font-mono text-xs">
              <span class="line-through text-rose-400 text-[10px]">₹${pricing.originalPrice}</span>
              <span class="font-bold text-[#F5D796]">₹${pricing.price}</span>
              <span class="text-[9px] text-emerald-400 font-bold bg-emerald-950/70 px-1 py-0.2 rounded border border-emerald-500/40">Saved ₹${pricing.savings}</span>
            </div>
          </div>
        ` : ''}
        
        <!-- Studio Header & Step Progress Bar (Compact Integrated Bar) -->
        <div class="mb-2.5">
          <div class="flex items-center justify-between mb-1.5 flex-wrap gap-2">
            <div class="flex items-center gap-2">
              <span class="text-xs sm:text-sm font-display font-bold text-[#FFFDF9] tracking-wide">BESPOKE DESSERT ATELIER</span>
              <span class="text-[10px] sm:text-xs text-[#E6CA85] font-serif">· Step 0${this.currentStep}/06 (${steps[this.currentStep - 1]?.title})</span>
            </div>
            
            <!-- Step Navigation Pills -->
            <div class="flex items-center gap-1 sm:gap-1.5">
              ${steps.map(s => `
                <button type="button" onclick="window.dessertStudio.setStep(${s.num})"
                        class="px-2 py-0.5 rounded-full text-[10px] font-serif transition-all flex items-center gap-1 ${this.currentStep === s.num ? 'bg-[#E6CA85] text-[#120804] font-bold shadow-md' : (this.currentStep > s.num ? 'bg-[#B8945B]/30 text-[#E6CA85] border border-[#B8945B]/40' : 'bg-[#190904] text-[#D6C2B0]/60 border border-[#B8945B]/20')}">
                  <span>${this.currentStep > s.num ? '✓' : '0' + s.num}</span>
                  <span class="hidden md:inline">${s.title}</span>
                </button>
              `).join('')}
            </div>
          </div>
          
          <div class="w-full bg-[#140603] border border-[#B8945B]/20 h-1 rounded-full overflow-hidden">
            <div class="bg-gradient-to-r from-[#B8945B] via-[#F5D796] to-[#E6CA85] h-full transition-all duration-500 rounded-full"
                 style="width: ${(this.currentStep / 6) * 100}%"></div>
          </div>
        </div>

        <!-- Main Studio Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-5 items-stretch">
          
          <!-- Left: 3D Atelier Canvas & Live Nutritional Metrics -->
          <div class="lg:col-span-6 flex flex-col items-center bg-[#180904] p-2.5 sm:p-3 rounded-2xl border border-[#B8945B]/30 shadow-xl justify-between">
            <!-- Studio Visualizer Header -->
            <div class="w-full flex items-center justify-between mb-1.5 border-b border-[#B8945B]/20 pb-1">
              <div class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-[#B8945B] animate-pulse"></span>
                <span class="text-[10px] tracking-widest uppercase text-[#B8945B] font-bold font-serif">
                  Step 0${this.currentStep} • ${steps[this.currentStep - 1]?.title}
                </span>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-[#1F0D08] text-[#E6CA85] border border-[#B8945B]/30 text-[9.5px] font-serif font-bold tracking-wider flex items-center gap-1 shadow-sm">
                ✨ 3D ATELIER
              </span>
            </div>

            <!-- 3D Studio Canvas Mount (Optimized View Height) -->
            <div class="relative w-full max-w-[390px] h-[195px] sm:h-[215px] mx-auto flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-b from-[#140704] via-[#1F0E08] to-[#140704] border border-[#B8945B]/40 shadow-lg ring-1 ring-[#B8945B]/20">
              <canvas id="dessert3dCanvas" class="w-full h-full cursor-grab active:cursor-grabbing block"></canvas>
              
              <!-- 3D Controls Overlay -->
              <div class="absolute bottom-2 inset-x-2 flex items-center justify-between pointer-events-none gap-1">
                <div class="px-1.5 py-0.5 rounded-full bg-black/80 backdrop-blur border border-[#B8945B]/40 text-[#E6CA85] text-[9px] font-serif flex items-center gap-1 shadow-md pointer-events-auto">
                  <span>🔄</span> 360° Drag
                </div>
                <div class="flex items-center gap-1 pointer-events-auto">
                  <button type="button" onclick="window.dessertStudio.setPresetView('top')"
                          class="px-1.5 py-0.5 rounded-lg bg-black/80 hover:bg-[#B8945B] text-[#E6CA85] hover:text-black border border-[#B8945B]/40 text-[9px] font-serif transition-colors shadow-md">
                    🔝 Top
                  </button>
                  <button type="button" onclick="window.dessertStudio.setPresetView('profile')"
                          class="px-1.5 py-0.5 rounded-lg bg-black/80 hover:bg-[#B8945B] text-[#E6CA85] hover:text-black border border-[#B8945B]/40 text-[9px] font-serif transition-colors shadow-md">
                    👀 Side
                  </button>
                  <button type="button" onclick="window.dessertStudio.toggle3dAutoRotate()" 
                          class="px-1.5 py-0.5 rounded-lg bg-black/80 hover:bg-[#B8945B] text-[#E6CA85] hover:text-black border border-[#B8945B]/40 text-[9px] font-serif transition-colors flex items-center gap-1 shadow-md">
                    <span id="autoRotateLabel">${this.is3dAutoRotate ? '⏸️' : '▶️'}</span>
                  </button>
                  <button type="button" onclick="window.dessertStudio.reset3dCamera()" 
                          class="w-5 h-5 rounded-lg bg-black/80 hover:bg-[#B8945B] text-[#E6CA85] hover:text-black border border-[#B8945B]/40 flex items-center justify-center text-[10px] transition-colors shadow-md">
                    🎯
                  </button>
                </div>
              </div>
            </div>

            <!-- Live Toppings summary pills -->
            <div class="mt-1 flex flex-wrap gap-1 justify-center max-w-sm mx-auto text-[9.5px]">
              ${toppingsList || '<span class="text-[10px] text-[#D6C2B0]/60 italic">Toppings customize in Step 04</span>'}
            </div>

            <!-- REAL-TIME DYNAMIC CALORIE & MACRO HUB (Streamlined for View Height) -->
            <div class="mt-1.5 w-full max-w-sm space-y-1.5 bg-[#241009] p-2.5 rounded-xl border border-[#B8945B]/35 shadow-md">
              <div class="flex items-center justify-between pb-1 border-b border-[#B8945B]/20">
                <div>
                  <span class="text-[8.5px] font-serif uppercase tracking-wider text-[#D6C2B0] block">Creation Total</span>
                  ${pricing.isBirthdayDiscount ? `
                    <div class="flex items-baseline gap-1">
                      <span class="line-through text-rose-400 font-mono text-[10.5px]">₹${pricing.originalPrice}</span>
                      <span class="font-display font-bold text-sm text-[#F5D796]">₹${pricing.price}</span>
                      <span class="text-[8px] text-emerald-400 font-bold bg-emerald-950/70 border border-emerald-500/40 px-1 py-0.2 rounded">saving ₹${pricing.savings}</span>
                    </div>
                  ` : `
                    <span class="font-display font-bold text-sm text-[#FFFDF9]">₹${totalPrice}</span>
                  `}
                </div>
                <div class="text-right">
                  <span class="text-[8.5px] font-serif uppercase tracking-wider text-[#D6C2B0] block">Live Calorie Tracker</span>
                  <span class="font-serif font-black text-xs text-[#E6CA85] flex items-center justify-end gap-1">
                    ⚡ ${nutrition.calories} <span class="text-[9px] font-normal text-[#D6C2B0]">kcal</span>
                  </span>
                </div>
              </div>

              <!-- Dynamic Macro Proportion Bar -->
              <div class="space-y-0.5">
                <div class="flex items-center justify-between text-[8.5px] text-[#D6C2B0] font-medium">
                  <span>Carbs ${nutrition.carbs}g (${nutrition.carbsPct}%)</span>
                  <span>Protein ${nutrition.protein}g (${nutrition.proteinPct}%)</span>
                  <span>Fats ${nutrition.fats}g (${nutrition.fatsPct}%)</span>
                </div>
                <div class="w-full h-1 rounded-full overflow-hidden bg-[#140603] border border-[#B8945B]/30 flex">
                  <div class="bg-[#B8945B] h-full" style="width: ${nutrition.carbsPct}%" title="Carbohydrates"></div>
                  <div class="bg-[#E6CA85] h-full" style="width: ${nutrition.proteinPct}%" title="Protein"></div>
                  <div class="bg-[#5A3222] border-l border-[#B8945B]/30 h-full" style="width: ${nutrition.fatsPct}%" title="Healthy Fats"></div>
                </div>
              </div>

              <!-- Micronutrient Highlights & Fiber -->
              <div class="grid grid-cols-4 gap-1 text-center">
                <div class="py-0.5 px-1 rounded-md bg-[#190904] border border-[#B8945B]/20">
                  <span class="text-[7.5px] text-[#D6C2B0] block">Fiber</span>
                  <span class="font-bold text-[#E6CA85] text-[10px]">${nutrition.fiber}g</span>
                </div>
                <div class="py-0.5 px-1 rounded-md bg-[#190904] border border-[#B8945B]/20">
                  <span class="text-[7.5px] text-[#D6C2B0] block">Calcium</span>
                  <span class="font-bold text-[#E6CA85] text-[10px]">${nutrition.calcium}mg</span>
                </div>
                <div class="py-0.5 px-1 rounded-md bg-[#190904] border border-[#B8945B]/20">
                  <span class="text-[7.5px] text-[#D6C2B0] block">Iron</span>
                  <span class="font-bold text-[#E6CA85] text-[10px]">${nutrition.iron}mg</span>
                </div>
                <div class="py-0.5 px-1 rounded-md bg-[#190904] border border-[#B8945B]/20">
                  <span class="text-[7.5px] text-[#D6C2B0] block">Sugar</span>
                  <span class="font-bold text-[#E6CA85] text-[10px]">${nutrition.naturalSugar}g</span>
                </div>
              </div>

              <!-- Layer-by-Layer Dynamic Contribution Accordion (default closed) -->
              <details class="text-[10px] pt-0.5 group">
                <summary class="cursor-pointer font-serif font-bold text-[#E6CA85] hover:text-[#FFFDF9] transition-colors flex items-center justify-between py-0.5 border-t border-[#B8945B]/20 select-none">
                  <span class="flex items-center gap-1">
                    <span>🔍 Layer Deltas</span>
                    <span class="text-[8px] px-1 rounded-full bg-[#1A0905] text-[#E6CA85] border border-[#B8945B]/30 font-sans">${nutrition.layerDeltas.length}</span>
                  </span>
                  <span class="text-[8px] text-[#B8945B] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div class="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-1">
                  ${nutrition.layerDeltas.map(d => `
                    <div class="flex items-center justify-between px-1.5 py-0.5 rounded-md bg-[#190904] border border-[#B8945B]/20 text-[9px]">
                      <span class="font-medium text-[#FFFDF9] truncate mr-1">${d.name}</span>
                      <span class="text-[#E6CA85] font-bold font-mono text-[8.5px] shrink-0">+${d.calories} kcal</span>
                    </div>
                  `).join('')}
                </div>
              </details>
            </div>

            <!-- Saved Creations Quick Access -->
            <div class="mt-1.5 w-full max-w-sm flex items-center">
              <button type="button" onclick="window.dessertStudio.openSavedCreationsModal()"
                      class="w-full py-1.5 px-3 rounded-xl border border-[#B8945B]/40 hover:border-[#E6CA85] bg-[#190904] hover:bg-[#28120B] text-[#E6CA85] hover:text-[#FFFDF9] font-serif text-[11px] font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer">
                <span>📂</span> View Saved Recipes (${loyaltyStore.getData().creations.length})
              </button>
            </div>
          </div>

          <!-- Right: Interactive Step Customization & Navigation -->
          <div class="lg:col-span-6 flex flex-col justify-between bg-[#180904]/60 p-2.5 sm:p-3 rounded-2xl border border-[#B8945B]/25">
            <div>
              ${this.renderStepContent()}
            </div>

            <!-- Step Navigation -->
            <div class="flex items-center justify-between pt-2.5 border-t border-[#B8945B]/20 mt-2.5 gap-2">
              <button type="button" onclick="window.dessertStudio.setStep(${this.currentStep - 1})"
                      class="px-3 py-1.5 rounded-lg border border-[#B8945B]/40 text-[#D6C2B0] bg-[#190904] hover:bg-[#28120B] hover:text-[#FFFDF9] text-[11px] font-serif font-semibold tracking-wider transition-all ${this.currentStep === 1 ? 'opacity-30 cursor-not-allowed' : ''}"
                      ${this.currentStep === 1 ? 'disabled' : ''}>
                ← Prev
              </button>

              ${pricing.isBirthdayDiscount ? `
                <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/60 border border-amber-500/40 shadow-sm text-[11px]">
                  <span class="line-through text-rose-300 font-mono text-[10px]">₹${pricing.originalPrice}</span>
                  <span class="font-bold text-[#F5D796] font-mono text-xs">₹${pricing.price}</span>
                  <span class="text-[8.5px] bg-amber-400 text-black font-bold px-1 py-0.2 rounded uppercase">30% OFF</span>
                </div>
              ` : `
                <div class="text-[11px] text-[#E6CA85] font-serif">
                  Total: <span class="font-bold font-mono text-[#FFFDF9]">₹${pricing.price}</span>
                </div>
              `}

              ${this.currentStep < 6 ? `
                <button type="button" onclick="window.dessertStudio.setStep(${this.currentStep + 1})"
                        class="px-5 py-2 rounded-lg btn-chocolate-luxury text-[11px] font-serif font-semibold tracking-wider transition-all flex items-center gap-1 shadow-sm">
                  <span>Next Step</span> →
                </button>
              ` : `
                <div class="flex items-center gap-2">
                  <button type="button" onclick="window.dessertStudio.saveCreationToProfile()"
                          class="px-4 py-2 rounded-xl border border-[#B8945B] hover:border-[#E6CA85] bg-[#190904] hover:bg-[#28120B] text-[#E6CA85] hover:text-[#FFFDF9] text-xs font-serif font-semibold tracking-wider transition-all flex items-center gap-1.5 shadow-sm cursor-pointer">
                    <span>💾</span> Save to Vault
                  </button>
                  <button type="button" onclick="window.dessertStudio.addBespokeToCart()"
                          class="px-4 sm:px-5 py-2 rounded-xl btn-gold-luxury text-xs font-serif font-semibold tracking-wider transition-all flex items-center gap-1.5 shadow-md cursor-pointer">
                    ${pricing.isBirthdayDiscount ? `
                      <span>🛒 Add to Bag (<span class="line-through text-rose-300">₹${pricing.originalPrice}</span> ₹${pricing.price})</span>
                    ` : `
                      <span>🛒 Add to Bag (₹${totalPrice})</span>
                    `}
                  </button>
                </div>
              `}
            </div>

          </div>

        </div>

      </div>
    `;

    this.initOrUpdate3DViewer();
  }

  initOrUpdate3DViewer() {
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
    }, 20);
  }

  toggleViewMode(mode) {
    // 2D Classic mode removed; 3D Atelier is the exclusive visualizer
  }

  toggle3dAutoRotate() {
    this.is3dAutoRotate = !this.is3dAutoRotate;
    if (this.viewer3d) {
      this.viewer3d.isAutoRotating = this.is3dAutoRotate;
    }
    const label = document.getElementById('autoRotateLabel');
    if (label) label.textContent = this.is3dAutoRotate ? '⏸️' : '▶️';
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

  selectBase(baseId) {
    this.state.base = baseId;
    this.render();
  }

  selectFlavor(flavorId) {
    this.state.flavor = flavorId;
    this.render();
  }

  selectFilling(fillingId) {
    this.state.filling = fillingId;
    this.render();
  }

  toggleTopping(toppingId) {
    if (!Array.isArray(this.state.toppings)) {
      this.state.toppings = [];
    }
    const index = this.state.toppings.indexOf(toppingId);
    if (index > -1) {
      this.state.toppings.splice(index, 1);
    } else {
      if (this.state.toppings.length >= 4) {
        if (window.showToast) window.showToast('You can select up to 4 toppings.', 'info');
        return;
      }
      this.state.toppings.push(toppingId);
    }
    this.render();
  }

  selectSauce(sauceId) {
    this.state.sauce = sauceId;
    this.render();
  }

  updateName(name) {
    this.state.name = name;
  }

  saveCreationToProfile(silent = false) {
    const baseObj = DESSERT_BUILDER_OPTIONS.bases.find(b => b.id === this.state.base);
    const flavorObj = DESSERT_BUILDER_OPTIONS.flavors.find(f => f.id === this.state.flavor);
    const fillingObj = DESSERT_BUILDER_OPTIONS.fillings.find(f => f.id === this.state.filling);
    const sauceObj = DESSERT_BUILDER_OPTIONS.sauces.find(s => s.id === this.state.sauce);
    const toppingsList = (this.state.toppings || []).map(id => DESSERT_BUILDER_OPTIONS.toppings.find(t => t.id === id)?.name).filter(Boolean);

    const recipeParts = [
      baseObj?.name,
      flavorObj?.name ? `${flavorObj.name} Infusion` : null,
      fillingObj?.name,
      toppingsList.length > 0 ? toppingsList.join(' + ') : null,
      sauceObj?.name
    ].filter(Boolean);
    const recipeStr = recipeParts.join(' + ') || 'Bespoke Atelier Recipe';

    const inputElem = document.getElementById('creationNameInput');
    const inputVal = inputElem ? inputElem.value : '';
    const creationName = (inputVal || this.state.name || '').trim() || (baseObj ? `${baseObj.name} Bespoke Creation` : 'My La Desio Creation');
    this.state.name = creationName;

    const pricing = this.getPricing();
    const nutrition = this.calculateNutrition();
    const image = baseObj?.image || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80';

    const creation = {
      id: 'creation_' + Date.now(),
      name: creationName,
      createdDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      price: pricing.price,
      recipe: recipeStr,
      image: image,
      nutrition: {
        calories: nutrition.calories,
        protein: `${nutrition.protein}g`,
        carbs: `${nutrition.carbs}g`,
        fats: `${nutrition.fats}g`
      },
      config: { ...this.state, name: creationName }
    };

    if (typeof loyaltyStore !== 'undefined') {
      if (typeof loyaltyStore.saveCustomCreation === 'function') {
        loyaltyStore.saveCustomCreation(creation);
      } else if (typeof loyaltyStore.saveCreation === 'function') {
        loyaltyStore.saveCreation(creation);
      }
    }

    if (!silent && window.showToast) {
      window.showToast(`✨ Saved "${creationName}" to your Atelier Creations!`, 'success');
    }

    this.render();
    return creation;
  }

  loadSavedCreationById(creationId) {
    if (typeof loyaltyStore === 'undefined') return;
    const data = loyaltyStore.getData();
    const creation = (data.creations || []).find(c => c.id === creationId);
    if (creation && creation.config) {
      this.loadConfig(creation.config);
      const modal = document.getElementById('savedCreationsModal');
      if (modal) modal.remove();
      if (window.showToast) {
        window.showToast(`✨ Loaded "${creation.name}" into 3D Studio!`, 'info');
      }
    }
  }

  openSavedCreationsModal() {
    const data = (typeof loyaltyStore !== 'undefined') ? loyaltyStore.getData() : { creations: [] };
    const creations = data.creations || [];

    let modal = document.getElementById('savedCreationsModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'savedCreationsModal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-lg bg-[#241009] rounded-3xl border border-[#B8945B]/40 shadow-2xl p-6 text-[#F8F1E7]">
        <button onclick="document.getElementById('savedCreationsModal').remove()"
                class="absolute top-4 right-4 text-gray-400 hover:text-white font-bold text-lg">✕</button>
        <h3 class="font-serif text-xl font-bold text-[#FFFDF9] mb-1">Your Saved Atelier Creations</h3>
        <p class="text-xs text-[#E6CA85] mb-4">Reload or reorder your bespoke dessert masterpieces anytime.</p>

        <div class="space-y-3 max-h-80 overflow-y-auto pr-1">
          ${creations.length === 0 ? `
            <div class="text-center py-8 text-stone-400 text-xs font-serif space-y-2">
              <div class="text-2xl">✨</div>
              <p>No creations saved yet.</p>
              <p class="text-[11px] text-[#D6C2B0]">Craft a dessert in the Studio and tap <strong>"Save Creation"</strong> to keep it here!</p>
            </div>
          ` : creations.map(c => `
            <div class="p-3 rounded-2xl bg-black/40 border border-[#B8945B]/25 hover:border-[#B8945B]/60 transition-all flex items-center justify-between gap-3">
              <div class="flex items-center gap-3 min-w-0">
                <img src="${c.image || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'}"
                     alt="${c.name}" class="w-12 h-12 rounded-xl object-cover border border-[#B8945B]/30 shrink-0" />
                <div class="min-w-0">
                  <h4 class="font-serif font-bold text-sm text-[#FFFDF9] truncate">${c.name}</h4>
                  <p class="text-[10px] text-[#E6CA85] truncate">${c.recipe || (c.createdDate || c.date || 'Bespoke Recipe')}</p>
                  <p class="text-[9.5px] text-[#D6C2B0] font-mono mt-0.5">₹${c.price} • ${c.createdDate || c.date || ''}</p>
                </div>
              </div>
              <div class="flex items-center gap-1.5 shrink-0">
                <button onclick="window.dessertStudio.loadSavedCreationById('${c.id}')"
                        class="px-3 py-1.5 rounded-lg btn-gold-luxury text-[11px] font-serif font-semibold shadow-sm">
                  Load
                </button>
                <button onclick="if(confirm('Delete this saved creation?')) { window.loyaltyStore.deleteCreation('${c.id}'); window.dessertStudio.openSavedCreationsModal(); window.dessertStudio.render(); }"
                        class="p-1.5 rounded-lg hover:bg-red-500/20 text-stone-400 hover:text-red-400 text-xs transition-all" title="Delete">
                  🗑️
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  addBespokeToCart() {
    const nutrition = this.calculateNutrition();
    const baseObj = DESSERT_BUILDER_OPTIONS.bases.find(b => b.id === this.state.base);
    const flavorObj = DESSERT_BUILDER_OPTIONS.flavors.find(f => f.id === this.state.flavor);
    const fillingObj = DESSERT_BUILDER_OPTIONS.fillings.find(f => f.id === this.state.filling);
    const sauceObj = DESSERT_BUILDER_OPTIONS.sauces.find(s => s.id === this.state.sauce);
    const toppingsList = (this.state.toppings || []).map(id => DESSERT_BUILDER_OPTIONS.toppings.find(t => t.id === id)?.name).filter(Boolean);

    // Ensure creation is also automatically preserved in patron's saved creations
    try {
      this.saveCreationToProfile(true);
    } catch (e) {}

    const pricing = this.getPricing();
    const bespokeItem = {
      id: 'bespoke-' + Date.now(),
      name: this.state.name || 'Bespoke La Desio Creation',
      price: pricing.price,
      originalPrice: pricing.originalPrice,
      isBirthdayDiscount: pricing.isBirthdayDiscount,
      image: baseObj?.image || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
      description: `Custom layered with ${baseObj?.name}, ${flavorObj?.name} infusion, ${fillingObj?.name}, and ${sauceObj?.name}.`,
      category: 'signature',
      isBespoke: true,
      nutrition: {
        calories: nutrition.calories,
        protein: `${nutrition.protein}g`,
        carbs: `${nutrition.carbs}g`,
        fats: `${nutrition.fats}g`,
        fiber: `${nutrition.fiber}g`,
        calcium: `${nutrition.calcium}mg`,
        iron: `${nutrition.iron}mg`,
        naturalSugar: `${nutrition.naturalSugar}g`
      },
      bespokeConfig: {
        base: baseObj?.name,
        flavor: flavorObj?.name,
        filling: fillingObj?.name,
        sauce: sauceObj?.name,
        toppings: toppingsList
      }
    };

    cartStore.addItem(bespokeItem, 1);
    if (window.showToast) {
      const msg = pricing.isBirthdayDiscount 
        ? `Added "${bespokeItem.name}" (₹${bespokeItem.price} • 30% OFF Birthday Privilege) to your bag!`
        : `Added "${bespokeItem.name}" (₹${bespokeItem.price}) to your bag!`;
      window.showToast(msg, 'success');
    }
  }
}

if (typeof window !== 'undefined') {
  window.DessertBuilder = DessertBuilder;
}
