// LA DESIO - UNIVERSAL STANDALONE APPLICATION BUNDLE (Generated)
(function() {
  'use strict';

// LA DESIO - Complete Product & Recipe Catalog Data (Hyper-Accurate Verified Photography & INR Edition)
// Visual theme: Italian luxury patisserie, ingredient-conscious, handcrafted

const CATEGORIES = [
  { id: 'all', name: 'All Desserts', icon: 'sparkles' },
  { id: 'signature', name: 'Signature Collection', icon: 'crown' },
  { id: 'protein', name: 'High-Protein & Whey', icon: 'dumbbell' },
  { id: 'natural', name: 'Desio Natural', icon: 'leaf' },
  { id: 'cakes', name: 'Cakes & Tortes', icon: 'cake' },
  { id: 'cheesecakes', name: 'Cheesecakes', icon: 'cheese' },
  { id: 'brownies', name: 'Brownies & Fudges', icon: 'square' },
  { id: 'tiramisu', name: 'Tiramisu & Cold Desserts', icon: 'coffee' },
  { id: 'cookies', name: 'Artisan Cookies & Waffles', icon: 'cookie' },
  { id: 'gifting', name: 'Luxury Dessert Boxes', icon: 'gift' }
];

const PRODUCTS = [
  // ==========================================
  // SIGNATURE COLLECTION
  // ==========================================
  {
    id: 'desio-velvet-noir',
    name: 'Velvet Noir',
    subtitle: 'Dark Chocolate Mousse & Piedmont Hazelnut',
    category: 'signature',
    secondaryCategory: 'cakes',
    price: 495,
    originalPrice: 595,
    rating: 4.95,
    reviewsCount: 142,
    badge: 'Chef Signature',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'A deeply indulgent symphony of 72% Single-Origin Venezuelan dark chocolate mousse, velvety Valrhona ganache layer, and slow-roasted Piedmont hazelnut praline nestled upon a delicate cocoa sponge.',
    ingredients: ['72% Venezuelan Dark Chocolate', 'Valrhona Cocoa Ganache', 'Piedmont Hazelnuts', 'Organic Fresh Cream', 'Bourbon Vanilla Bean', '24k Edible Gold Leaf'],
    allergens: ['Dairy', 'Tree Nuts (Hazelnuts)', 'Gluten'],
    dietary: ['Vegetarian', 'Eggless Available'],
    flavor: 'Chocolate',
    servingSize: '1-2 Persons (210g)',
    prepTime: '25 mins handcrafted',
    storageInfo: 'Store refrigerated at 4°C. Best enjoyed within 48 hours.',
    nutrition: {
      calories: 480,
      protein: '7g',
      carbs: '46g',
      fats: '31g',
      fiber: '5g',
      serving: 'Per Serving (210g)'
    }
  },
  {
    id: 'desio-pistachio-royale',
    name: 'Pistachio Royale',
    subtitle: 'Sicilian Bronte Pistachio Cream & White Chocolate',
    category: 'signature',
    secondaryCategory: 'cheesecakes',
    price: 545,
    originalPrice: 650,
    rating: 4.98,
    reviewsCount: 208,
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Silky cream infused with authentic PDO Bronte pistachios from Sicily, layered with ivory white chocolate mousse and hand-crushed roasted pistachio pearls on a crisp almond sablé base.',
    ingredients: ['Bronte Pistachio Paste (PDO Sicily)', 'Belgian White Chocolate', 'Almond Sablé', 'Mascarpone Cream', 'Crushed Pistachio Kernels'],
    allergens: ['Dairy', 'Tree Nuts (Pistachios, Almonds)', 'Gluten'],
    dietary: ['Vegetarian'],
    flavor: 'Pistachio',
    servingSize: '1-2 Persons (200g)',
    prepTime: '20 mins handcrafted',
    storageInfo: 'Keep chilled. Serve cool for maximum aroma release.',
    nutrition: {
      calories: 460,
      protein: '9g',
      carbs: '42g',
      fats: '29g',
      fiber: '4g',
      serving: 'Per Serving (200g)'
    }
  },
  {
    id: 'desio-berry-elan',
    name: 'Berry Élan',
    subtitle: 'Vanilla Silk Cream & Wild Forest Berry Compote',
    category: 'signature',
    secondaryCategory: 'cakes',
    price: 475,
    rating: 4.91,
    reviewsCount: 97,
    badge: 'Seasonal Harvest',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Delicate Bourbon vanilla chantilly whipped to perfection, crowned with an artisanal compote of wild raspberries, blueberries, and fragrant alpine strawberries over a light Genoese sponge.',
    ingredients: ['Madagascar Vanilla Bean', 'Fresh Raspberries & Blueberries', 'Wild Strawberry Purée', 'Light Chiffon Sponge', 'Micro Mint'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    dietary: ['Vegetarian', 'Natural Sweetness'],
    flavor: 'Berry',
    servingSize: '1-2 Persons (190g)',
    prepTime: '15 mins handcrafted',
    storageInfo: 'Keep refrigerated. Consume fresh.',
    nutrition: {
      calories: 340,
      protein: '5g',
      carbs: '44g',
      fats: '16g',
      fiber: '3g',
      serving: 'Per Serving (190g)'
    }
  },
  {
    id: 'desio-caramel-etoile',
    name: 'Caramel Étoile',
    subtitle: 'Fleur de Sel Caramel & Roasted Pecan Crunch',
    category: 'signature',
    secondaryCategory: 'cakes',
    price: 490,
    rating: 4.88,
    reviewsCount: 86,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Slow-simmered artisanal salted butter caramel infused with Guérande fleur de sel, dark chocolate cream, and golden roasted caramelized pecans with warm toffee accents.',
    ingredients: ['Guérande Fleur de Sel Caramel', 'Single-Origin Dark Ganache', 'Toasted Pecans', 'Butter Shortbread Crust'],
    allergens: ['Dairy', 'Tree Nuts (Pecans)', 'Gluten'],
    dietary: ['Vegetarian'],
    flavor: 'Caramel',
    servingSize: '1-2 Persons (220g)',
    prepTime: '20 mins handcrafted',
    storageInfo: 'Chilled or room temperature for 10 minutes before serving.',
    nutrition: {
      calories: 490,
      protein: '6g',
      carbs: '52g',
      fats: '29g',
      fiber: '3g',
      serving: 'Per Serving (220g)'
    }
  },
  {
    id: 'desio-tiramisu-classico',
    name: 'Tiramisu Classico',
    subtitle: 'Venetian Savoiardi, Espresso Arabica & Mascarpone',
    category: 'signature',
    secondaryCategory: 'tiramisu',
    price: 450,
    rating: 4.97,
    reviewsCount: 310,
    badge: 'Italian Masterpiece',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'The definitive Italian tradition: hand-dipped artisanal ladyfingers soaked in single-origin roasted Arabica espresso, enveloped in whipped Lombardy mascarpone and dusted with Dutch dutched cocoa.',
    ingredients: ['Lombardy Mascarpone', 'Artisanal Savoiardi', 'Single-Origin Espresso', 'Dutch Processed Cocoa', 'Pasture-Raised Eggs'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    dietary: ['Vegetarian', 'Classic Recipe'],
    flavor: 'Coffee',
    servingSize: '1-2 Persons (230g)',
    prepTime: '15 mins handcrafted',
    storageInfo: 'Keep chilled at 3-5°C.',
    nutrition: {
      calories: 420,
      protein: '8g',
      carbs: '39g',
      fats: '26g',
      fiber: '2g',
      serving: 'Per Serving (230g)'
    }
  },
  {
    id: 'desio-strawberry-rose',
    name: 'Strawberry Rosé',
    subtitle: 'Macerated Strawberries, Rosewater & White Velvet',
    category: 'signature',
    secondaryCategory: 'cakes',
    price: 480,
    rating: 4.93,
    reviewsCount: 115,
    badge: 'Romantic Collection',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'A poetic celebration of fresh sun-ripened strawberries, natural Damask rose essence, delicate white chocolate mousse, and crystallised rose petals over a buttery biscuit crumble.',
    ingredients: ['Fresh Mountain Strawberries', 'Organic Damask Rose Water', 'White Chocolate Silk', 'Shortcrust Crumble'],
    allergens: ['Dairy', 'Gluten'],
    dietary: ['Vegetarian', 'Eggless'],
    flavor: 'Strawberry',
    servingSize: '1-2 Persons (200g)',
    prepTime: '20 mins handcrafted',
    storageInfo: 'Refrigerate immediately. Enjoy cold.',
    nutrition: {
      calories: 360,
      protein: '5g',
      carbs: '48g',
      fats: '17g',
      fiber: '3g',
      serving: 'Per Serving (200g)'
    }
  },

  // ==========================================
  // DESIO NATURAL COLLECTION (Ingredient-Conscious)
  // ==========================================
  {
    id: 'desio-berry-bliss-natural',
    name: 'Berry Bliss',
    subtitle: 'Pure Raspberry Reduction & Raw Honey Chantilly',
    category: 'natural',
    secondaryCategory: 'cakes',
    price: 520,
    rating: 4.94,
    reviewsCount: 164,
    badge: 'Desio Natural',
    image: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Thoughtfully crafted with zero artificial sweeteners. Natural sweetness drawn exclusively from whole crushed raspberries, wild blueberries, and wild forest blossom honey on an almond-flour base.',
    ingredients: ['Whole Mountain Raspberries', 'Wild Blueberries', 'Wild Blossom Honey', 'Blanched Almond Flour', 'Organic Grass-Fed Cream'],
    allergens: ['Dairy', 'Tree Nuts (Almonds)'],
    dietary: ['No Added Refined Sugar', 'No Artificial Sweeteners', 'Gluten-Free Flour Base', 'Vegetarian'],
    flavor: 'Berry',
    servingSize: '1-2 Persons (190g)',
    prepTime: '20 mins handcrafted',
    storageInfo: 'Keep chilled. Natural fruit dessert.',
    nutrition: {
      calories: 290,
      protein: '6g',
      carbs: '34g',
      fats: '15g',
      fiber: '6g',
      serving: 'Per Serving (190g)'
    }
  },
  {
    id: 'desio-date-dark-chocolate-natural',
    name: 'Date & Dark Cacao Tart',
    subtitle: 'Medjool Date Purée & 80% Peruvian Raw Cacao',
    category: 'natural',
    secondaryCategory: 'cakes',
    price: 550,
    rating: 4.96,
    reviewsCount: 189,
    badge: 'Desio Natural',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'A decadent yet mindful creation sweetened purely with sun-cured Medjool dates. Rich 80% Peruvian single-origin dark chocolate ganache set in a roasted walnut-date crust.',
    ingredients: ['Medjool Date Purée', '80% Peruvian Dark Chocolate', 'Roasted Walnuts', 'Raw Cacao Butter', 'Sea Salt Flakes'],
    allergens: ['Tree Nuts (Walnuts)'],
    dietary: ['No Added Refined Sugar', 'No Artificial Sweeteners', 'Vegan / Dairy-Free', 'Gluten-Free'],
    flavor: 'Chocolate',
    servingSize: '1-2 Persons (205g)',
    prepTime: '25 mins handcrafted',
    storageInfo: 'Store in cool room or refrigerator.',
    nutrition: {
      calories: 380,
      protein: '8g',
      carbs: '40g',
      fats: '22g',
      fiber: '7g',
      serving: 'Per Serving (205g)'
    }
  },
  {
    id: 'desio-mango-cloud-natural',
    name: 'Mango Cloud Parfait',
    subtitle: 'Alphonso Mango Purée & Coconut Vanilla Mousse',
    category: 'natural',
    secondaryCategory: 'tiramisu',
    price: 460,
    rating: 4.89,
    reviewsCount: 78,
    badge: 'Desio Natural',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'A velvety whipped coconut cream mousse layered with freshly reduced Ratnagiri Alphonso mango purée and chia crisp. Pure tropical brightness with less refined sweetness.',
    ingredients: ['100% Alphonso Mango Pulp', 'Whipped Coconut Cream', 'Organic Chia Seeds', 'Bourbon Vanilla Bean', 'Toasted Coconut Flakes'],
    allergens: [],
    dietary: ['No Added Refined Sugar', 'Vegan', 'Dairy-Free', 'Nut-Free', 'Gluten-Free'],
    flavor: 'Mango',
    servingSize: '1 Person (180g)',
    prepTime: '15 mins handcrafted',
    storageInfo: 'Serve cold from refrigeration.',
    nutrition: {
      calories: 240,
      protein: '4g',
      carbs: '32g',
      fats: '11g',
      fiber: '5g',
      serving: 'Per Serving (180g)'
    }
  },
  {
    id: 'desio-banana-cacao-natural',
    name: 'Banana Cacao Torte',
    subtitle: 'Caramelised Ripe Bananas & Roasted Hazelnut Ganache',
    category: 'natural',
    secondaryCategory: 'cakes',
    price: 495,
    rating: 4.90,
    reviewsCount: 92,
    badge: 'Desio Natural',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Naturally sweetened with slow-baked ripe bananas and dark cocoa butter. Layered with velvety hazelnut butter and dark cacao nibs for an authentic earthy luxury.',
    ingredients: ['Ripe Cavendish Bananas', 'Dark Cacao Solids', 'Roasted Hazelnut Butter', 'Oat & Almond Base'],
    allergens: ['Tree Nuts (Hazelnuts, Almonds)'],
    dietary: ['No Artificial Sweeteners', 'Reduced Refined Sweetness', 'Vegetarian'],
    flavor: 'Chocolate',
    servingSize: '1-2 Persons (210g)',
    prepTime: '20 mins handcrafted',
    storageInfo: 'Store at 4-8°C.',
    nutrition: {
      calories: 350,
      protein: '7g',
      carbs: '45g',
      fats: '16g',
      fiber: '6g',
      serving: 'Per Serving (210g)'
    }
  },
  {
    id: 'desio-strawberry-almond-natural',
    name: 'Strawberry Almond Panna Cotta',
    subtitle: 'Cold-Pressed Strawberry Glaze & Almond Milk Cream',
    category: 'natural',
    secondaryCategory: 'tiramisu',
    price: 450,
    rating: 4.92,
    reviewsCount: 65,
    badge: 'Desio Natural',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Silken Italian panna cotta crafted with cold-pressed Sicilian almond milk, vanilla essence, and a vibrant coulis made strictly from hand-selected strawberries.',
    ingredients: ['Sicilian Almond Milk', 'Cold-Pressed Strawberries', 'Plant-Based Agar', 'Tahitian Vanilla', 'Whole Berries'],
    allergens: ['Tree Nuts (Almonds)'],
    dietary: ['No Artificial Sweeteners', 'Dairy-Free', 'Vegan', 'Gluten-Free'],
    flavor: 'Strawberry',
    servingSize: '1 Person (175g)',
    prepTime: '15 mins handcrafted',
    storageInfo: 'Keep chilled.',
    nutrition: {
      calories: 220,
      protein: '4g',
      carbs: '28g',
      fats: '11g',
      fiber: '4g',
      serving: 'Per Serving (175g)'
    }
  },
  {
    id: 'desio-pistachio-fruit-tart-natural',
    name: 'Pistachio Fruit Tart',
    subtitle: 'Crushed Date Crust, Pistachio Crème & Fresh Berries',
    category: 'natural',
    secondaryCategory: 'cheesecakes',
    price: 540,
    rating: 4.95,
    reviewsCount: 122,
    badge: 'Desio Natural',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'A botanical masterpiece: crisp crust made from crushed Medjool dates and oats, filled with pure Sicilian pistachio cream and topped with fresh blackberries, figs, and raspberries.',
    ingredients: ['Bronte Pistachio Paste', 'Medjool Dates', 'Rolled Oats', 'Fresh Blackberries & Figs', 'Pomegranate Pearls'],
    allergens: ['Tree Nuts (Pistachios)'],
    dietary: ['No Added Refined Sugar', 'No Artificial Sweeteners', 'Vegetarian'],
    flavor: 'Pistachio',
    servingSize: '1-2 Persons (200g)',
    prepTime: '20 mins handcrafted',
    storageInfo: 'Refrigerate. Consume within 24 hours.',
    nutrition: {
      calories: 370,
      protein: '8g',
      carbs: '38g',
      fats: '21g',
      fiber: '6g',
      serving: 'Per Serving (200g)'
    }
  },

  // ==========================================
  // BROWNIES & FUDGES
  // ==========================================
  {
    id: 'desio-fudge-brownie-truffle',
    name: 'Triple Cacao Truffle Brownie',
    subtitle: 'Molten Chocolate Core & Roasted Walnut Dust',
    category: 'brownies',
    secondaryCategory: 'cakes',
    price: 380,
    rating: 4.92,
    reviewsCount: 177,
    badge: 'Warm Indulgence',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Ultra-dense fudgy brownie baked with 70% dark chocolate chunks, espresso essence, and a flowing ganache center that warms into liquid velvet.',
    ingredients: ['70% Dark Chocolate', 'Brown Butter', 'Cocoa Solids', 'Roasted Walnuts', 'Espresso Extract'],
    allergens: ['Dairy', 'Tree Nuts (Walnuts)', 'Gluten', 'Eggs'],
    dietary: ['Vegetarian'],
    flavor: 'Chocolate',
    servingSize: '1 Person (160g)',
    prepTime: '15 mins handcrafted',
    storageInfo: 'Warm for 15 seconds in microwave for molten bliss.',
    nutrition: {
      calories: 440,
      protein: '6g',
      carbs: '48g',
      fats: '26g',
      fiber: '4g',
      serving: 'Per Serving (160g)'
    }
  },

  // ==========================================
  // CHEESECAKES
  // ==========================================
  {
    id: 'desio-basque-san-sebastian',
    name: 'Burnt Basque Caramel Cheesecake',
    subtitle: 'Caramelised Crown & Creamy Fondant Heart',
    category: 'cheesecakes',
    secondaryCategory: 'cakes',
    price: 490,
    rating: 4.96,
    reviewsCount: 240,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'High-temperature baked Basque cheesecake with a deeply caramelised golden-brown top and an irresistibly soft, flowing creamy interior with notes of vanilla and burnt sugar.',
    ingredients: ['Philadelphia Cream Cheese', 'Heavy Double Cream', 'Pasture Eggs', 'Bourbon Vanilla', 'Sea Salt'],
    allergens: ['Dairy', 'Eggs'],
    dietary: ['Gluten-Free Recipe', 'Vegetarian'],
    flavor: 'Vanilla',
    servingSize: '1-2 Persons (220g)',
    prepTime: '20 mins handcrafted',
    storageInfo: 'Store chilled.',
    nutrition: {
      calories: 450,
      protein: '10g',
      carbs: '34g',
      fats: '31g',
      fiber: '1g',
      serving: 'Per Serving (220g)'
    }
  },

  // ==========================================
  // LUXURY GIFT BOXES
  // ==========================================
  {
    id: 'desio-celebration-box-royale',
    name: 'The Desio Royale Hamper',
    subtitle: '6-Piece Signature Patisserie Selection & Gold Ribbon',
    category: 'gifting',
    secondaryCategory: 'signature',
    price: 2450,
    originalPrice: 2950,
    rating: 5.00,
    reviewsCount: 88,
    badge: 'Luxury Gift Box',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Our most prestigious gift presentation. Includes Velvet Noir, Pistachio Royale, Berry Élan, Caramel Étoile, Tiramisu Classico, and Strawberry Rosé in an embossed Italian velvet-touch gift chest.',
    ingredients: ['Curated 6-Piece Handcrafted Selection', 'Gold Seal Wax', 'Custom Handwritten Calligraphy Note'],
    allergens: ['Dairy', 'Tree Nuts', 'Gluten', 'Eggs'],
    dietary: ['Luxury Gifting'],
    flavor: 'Assorted',
    servingSize: '4-6 Persons (1.2kg)',
    prepTime: 'Same Day Handcrafted',
    storageInfo: 'Temperature controlled packaging included.',
    nutrition: {
      calories: 2580,
      protein: '40g',
      carbs: '270g',
      fats: '148g',
      fiber: '23g',
      serving: 'Complete 6-Piece Box (1.2kg)'
    }
  },
  {
    id: 'desio-couples-collection',
    name: 'The Couple\'s Desio Box',
    subtitle: 'Twin Bespoke Desserts, Chocolate Strawberries & Rosé Note',
    category: 'gifting',
    secondaryCategory: 'signature',
    price: 1250,
    rating: 4.97,
    reviewsCount: 104,
    badge: 'Romantic Gifting',
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Designed for intimate celebrations. Includes 2 signature desserts of choice, four 24k gold-dusted chocolate strawberries, and an artisanal keepsake card.',
    ingredients: ['2 Signature Desserts', '4 Dipped Belgian Chocolate Strawberries', '24k Gold Foil'],
    allergens: ['Dairy', 'Gluten', 'Tree Nuts'],
    dietary: ['Vegetarian'],
    flavor: 'Assorted',
    servingSize: '2 Persons (550g)',
    prepTime: 'Same Day Handcrafted',
    storageInfo: 'Refrigerated delivery.',
    nutrition: {
      calories: 1180,
      protein: '18g',
      carbs: '120g',
      fats: '70g',
      fiber: '10g',
      serving: 'Complete Twin Box (550g)'
    }
  },

  // ==========================================
  // HIGH-PROTEIN & WHEY PATISSERIE COLLECTION
  // ==========================================
  {
    id: 'desio-protein-whey-brownie',
    name: 'Whey Isolate Noir Brownie',
    subtitle: '32g CFM Whey Isolate • 72% Venezuelan Cacao • Almond Crust',
    category: 'protein',
    secondaryCategory: 'brownies',
    price: 495,
    originalPrice: 595,
    rating: 4.97,
    reviewsCount: 118,
    badge: '32g Protein • Whey Isolate',
    proteinRich: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'High-performance luxury patisserie. Baked with CFM cross-flow microfiltered Whey Protein Isolate, 72% Venezuelan dark cacao ganache, and organic almond flour. Zero chalkiness with an ultra-fudgy molten core.',
    ingredients: ['CFM Whey Protein Isolate (90%)', '72% Venezuelan Dark Chocolate', 'Blanched Almond Flour', 'Organic Grass-Fed Butter', 'Valrhona Cocoa Powder', 'Monk Fruit & Honey'],
    allergens: ['Dairy', 'Tree Nuts (Almonds)'],
    dietary: ['High Protein', 'Gluten-Free Flour', 'Low Carb', 'Vegetarian'],
    flavor: 'Chocolate',
    servingSize: '1 Person (190g)',
    prepTime: '20 mins handcrafted',
    storageInfo: 'Keep chilled at 4°C. Delicious warm or chilled.',
    nutrition: {
      calories: 340,
      protein: '32g',
      carbs: '18g',
      fats: '12g',
      fiber: '7g',
      serving: 'Per Serving (190g)'
    }
  },
  {
    id: 'desio-protein-basque-cheesecake',
    name: 'Pro-Atelier Basque Cheesecake',
    subtitle: '28g Hydrolyzed Whey • Caramelized Burnt Top • Madagascar Vanilla Bean',
    category: 'protein',
    secondaryCategory: 'cheesecakes',
    price: 565,
    originalPrice: 650,
    rating: 4.96,
    reviewsCount: 92,
    badge: '28g Protein • Low Carb',
    proteinRich: true,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'San Sebastián-style caramelized crust embracing a molten custard center infused with hydrolyzed whey protein isolate and Bourbon vanilla bean. Decadent creaminess with high athletic nutrition.',
    ingredients: ['Hydrolyzed Whey Protein Isolate', 'Artisanal Cream Cheese', 'Organic Egg Yolks', 'Tahitian Bourbon Vanilla', 'Fresh Dairy Cream'],
    allergens: ['Dairy', 'Eggs'],
    dietary: ['High Protein', 'Keto-Friendly', 'Gluten-Free', 'Grain-Free'],
    flavor: 'Vanilla Caramel',
    servingSize: '1-2 Persons (210g)',
    prepTime: '25 mins handcrafted',
    storageInfo: 'Store refrigerated at 4°C.',
    nutrition: {
      calories: 330,
      protein: '28g',
      carbs: '14g',
      fats: '16g',
      fiber: '4g',
      serving: 'Per Serving (210g)'
    }
  },
  {
    id: 'desio-protein-berry-parfait',
    name: 'Wild Berry Plant-Protein Parfait',
    subtitle: '26g Organic Pea & Sprouted Rice Protein • Forest Berry Coulis • Greek Curd',
    category: 'protein',
    secondaryCategory: 'natural',
    price: 480,
    originalPrice: 550,
    rating: 4.93,
    reviewsCount: 74,
    badge: '26g Protein • 100% Plant Isolate',
    proteinRich: true,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Pure plant power meets alpine freshness. Layers of whipped organic pea and sprouted brown rice protein mousse, unsweetened Greek strained curd, and wild hand-crushed forest berries with chia seeds.',
    ingredients: ['Organic Pea Protein Isolate', 'Sprouted Brown Rice Protein', 'Alpine Wild Raspberries & Blueberries', 'Strained Greek Curd', 'Organic Chia Seeds'],
    allergens: ['Dairy'],
    dietary: ['High Protein', 'No Added Refined Sugar', 'Gluten-Free', 'Vegetarian'],
    flavor: 'Berry',
    servingSize: '1 Person (200g)',
    prepTime: '15 mins handcrafted',
    storageInfo: 'Keep chilled. Consume fresh.',
    nutrition: {
      calories: 280,
      protein: '26g',
      carbs: '22g',
      fats: '6g',
      fiber: '8g',
      serving: 'Per Serving (200g)'
    }
  },
  {
    id: 'desio-protein-pistachio-tiramisu',
    name: 'Pistachio Bronte Pro-Tiramisù',
    subtitle: '30g Micellar Casein & Whey • PDO Bronte Pistachio Crème • Espresso Savoiardi',
    category: 'protein',
    secondaryCategory: 'tiramisu',
    price: 580,
    originalPrice: 670,
    rating: 4.99,
    reviewsCount: 136,
    badge: '30g Protein • Chef Masterpiece',
    proteinRich: true,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Traditional Italian artisan elegance elevated with a sustained-release micellar casein and whey isolate matrix. Rich Sicilian PDO Bronte pistachio cream with espresso-soaked protein savoiardi biscuits.',
    ingredients: ['Micellar Casein Protein', 'Whey Isolate', 'PDO Sicilian Bronte Pistachio Paste', 'Espresso Arabica Roast', 'Protein Savoiardi', 'Mascarpone'],
    allergens: ['Dairy', 'Tree Nuts (Pistachios)', 'Gluten'],
    dietary: ['High Protein', 'Slow-Release Protein', 'Vegetarian'],
    flavor: 'Pistachio',
    servingSize: '1-2 Persons (220g)',
    prepTime: '25 mins handcrafted',
    storageInfo: 'Refrigerate at 4°C. Best enjoyed cold.',
    nutrition: {
      calories: 350,
      protein: '30g',
      carbs: '20g',
      fats: '13g',
      fiber: '5g',
      serving: 'Per Serving (220g)'
    }
  },
  {
    id: 'desio-protein-waffle-tower',
    name: 'Tahitian Vanilla Pro-Waffle Tower',
    subtitle: '34g Whey Isolate Brioche • Salted Caramel Sugar-Free • Roasted Hazelnuts',
    category: 'protein',
    secondaryCategory: 'cookies',
    price: 510,
    originalPrice: 590,
    rating: 4.91,
    reviewsCount: 65,
    badge: '34g Protein • High Fuel',
    proteinRich: true,
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Golden crisp Belgian-style brioche waffles formulated with high-potency whey isolate, crowned with warm sugar-free fleur de sel salted caramel and slow-roasted Piedmont hazelnuts.',
    ingredients: ['Whey Protein Isolate', 'Whole Oat Flour', 'Piedmont Hazelnuts', 'Sugar-Free Salted Butter Caramel', 'Bourbon Vanilla'],
    allergens: ['Dairy', 'Tree Nuts (Hazelnuts)', 'Gluten'],
    dietary: ['High Protein', 'Sugar-Conscious', 'Vegetarian'],
    flavor: 'Caramel Vanilla',
    servingSize: '1-2 Persons (230g)',
    prepTime: '20 mins handcrafted',
    storageInfo: 'Enjoy freshly warm or keep chilled.',
    nutrition: {
      calories: 370,
      protein: '34g',
      carbs: '24g',
      fats: '12g',
      fiber: '6g',
      serving: 'Per Serving (230g)'
    }
  },
  {
    id: 'desio-protein-hazelnut-skillet',
    name: 'Choc-Hazelnut Protein Truffle Skillet',
    subtitle: '27g Collagen & Whey Isolate • Molten Dark Hazelnut Core • Sugar-Free',
    category: 'protein',
    secondaryCategory: 'cakes',
    price: 530,
    originalPrice: 620,
    rating: 4.95,
    reviewsCount: 89,
    badge: '27g Protein • Collagen Boost',
    proteinRich: true,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Warm molten chocolate skillet pudding packed with grass-fed hydrolyzed bovine collagen peptides and whey isolate. Molten Gianduja dark hazelnut center with crunchy cacao nibs.',
    ingredients: ['Hydrolyzed Collagen Peptides', 'Whey Isolate', '70% Sugar-Free Dark Chocolate', 'Roasted Hazelnut Butter', 'Cacao Nibs'],
    allergens: ['Dairy', 'Tree Nuts (Hazelnuts)'],
    dietary: ['High Protein', 'Collagen Peptides', 'Low Sugar', 'Gluten-Free'],
    flavor: 'Chocolate',
    servingSize: '1 Person (200g)',
    prepTime: '20 mins handcrafted',
    storageInfo: 'Best warm.',
    nutrition: {
      calories: 320,
      protein: '27g',
      carbs: '16g',
      fats: '14g',
      fiber: '6g',
      serving: 'Per Serving (200g)'
    }
  }
];

// CREATE YOUR DESSERT - INGREDIENTS MATRIX (INR)
const DESSERT_BUILDER_OPTIONS = {
  bases: [
    {
      id: 'base-brownie',
      name: 'Fudge Brownie',
      description: 'Dense 70% dark chocolate brownie with a molten fudge core',
      price: 220,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
      color: '#3B231B',
      calories: '280 kcal',
      nutrition: { calories: 280, protein: 4, carbs: 32, fats: 16 }
    },
    {
      id: 'base-cheesecake',
      name: 'New York Cheesecake',
      description: 'Velvety cream cheese layer on golden graham almond crust',
      price: 260,
      image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=600&q=80',
      color: '#F4E7CE',
      calories: '310 kcal',
      nutrition: { calories: 310, protein: 7, carbs: 26, fats: 21 }
    },
    {
      id: 'base-waffle',
      name: 'Belgian Liege Waffle',
      description: 'Caramelised pearl sugar crisp exterior with airy brioche crumb',
      price: 190,
      image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80',
      color: '#D29E57',
      calories: '260 kcal',
      nutrition: { calories: 260, protein: 5, carbs: 36, fats: 11 }
    },
    {
      id: 'base-cookie',
      name: 'Giant Choc-Chunk Cookie',
      description: 'Warm thick baked skillet cookie with molten chocolate pools',
      price: 180,
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80',
      color: '#C4945A',
      calories: '240 kcal',
      nutrition: { calories: 240, protein: 3, carbs: 33, fats: 11 }
    },
    {
      id: 'base-cake',
      name: 'Genoese Sponge Cake',
      description: 'Feather-light Italian vanilla sponge brushed with vanilla syrup',
      price: 210,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
      color: '#F9ECD2',
      calories: '210 kcal',
      nutrition: { calories: 210, protein: 4, carbs: 30, fats: 8 }
    },
    {
      id: 'base-whey-brownie',
      name: 'Whey Isolate Fudge Brownie (30g Protein)',
      description: 'Dense 72% Venezuelan dark cacao infused with CFM Whey Isolate',
      price: 260,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
      color: '#2F1810',
      calories: '310 kcal',
      nutrition: { calories: 310, protein: 30, carbs: 16, fats: 10 }
    },
    {
      id: 'base-protein-cheesecake',
      name: 'Pro-Basque Baked Cheesecake (25g Protein)',
      description: 'Creamy caramelized Basque cheesecake enriched with hydrolyzed protein',
      price: 280,
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
      color: '#EBD8B8',
      calories: '290 kcal',
      nutrition: { calories: 290, protein: 25, carbs: 12, fats: 14 }
    }
  ],

  flavors: [
    { id: 'flavor-chocolate', name: 'Dark Chocolate', color: '#3A1F17', price: 60, icon: '🍫', nutrition: { calories: 40, protein: 1, carbs: 5, fats: 2 } },
    { id: 'flavor-pistachio', name: 'Bronte Pistachio', color: '#93A879', price: 90, icon: '🌱', nutrition: { calories: 60, protein: 2, carbs: 4, fats: 4 } },
    { id: 'flavor-strawberry', name: 'Wild Strawberry', color: '#C95D63', price: 75, icon: '🍓', nutrition: { calories: 25, protein: 0, carbs: 6, fats: 0 } },
    { id: 'flavor-coffee', name: 'Espresso Arabica', color: '#5B3A29', price: 60, icon: '☕', nutrition: { calories: 15, protein: 0, carbs: 3, fats: 0 } },
    { id: 'flavor-caramel', name: 'Salted Caramel', color: '#B87B42', price: 75, icon: '🍯', nutrition: { calories: 50, protein: 0, carbs: 10, fats: 1 } },
    { id: 'flavor-vanilla', name: 'Bourbon Vanilla', color: '#F4ECE1', price: 60, icon: '🍦', nutrition: { calories: 30, protein: 0, carbs: 6, fats: 0 } },
    { id: 'flavor-mango', name: 'Alphonso Mango', color: '#EAA221', price: 85, icon: '🥭', nutrition: { calories: 35, protein: 0, carbs: 8, fats: 0 } },
    { id: 'flavor-whey-isolate', name: 'Pure CFM Whey Isolate (+15g Protein)', color: '#D4AF37', price: 85, icon: '⚡', nutrition: { calories: 60, protein: 15, carbs: 1, fats: 0 } },
    { id: 'flavor-plant-protein', name: 'Organic Plant Pea & Rice (+12g Protein)', color: '#8A9A86', price: 80, icon: '🌱', nutrition: { calories: 50, protein: 12, carbs: 1, fats: 1 } }
  ],

  fillings: [
    { id: 'filling-chocolate-ganache', name: 'Valrhona Chocolate Ganache', color: '#2B140E', price: 75, nutrition: { calories: 70, protein: 1, carbs: 8, fats: 4 } },
    { id: 'filling-vanilla-cream', name: 'Madagascar Vanilla Silk Cream', color: '#FFF8EB', price: 65, nutrition: { calories: 55, protein: 1, carbs: 6, fats: 3 } },
    { id: 'filling-pistachio-mousse', name: 'Sicilian Pistachio Mousse', color: '#A0B486', price: 95, nutrition: { calories: 80, protein: 2, carbs: 7, fats: 5 } },
    { id: 'filling-caramel-confit', name: 'Fleur de Sel Caramel Confit', color: '#C8833B', price: 75, nutrition: { calories: 65, protein: 0, carbs: 12, fats: 2 } },
    { id: 'filling-berry-compote', name: 'Handmade Forest Berry Compote', color: '#88223B', price: 75, nutrition: { calories: 35, protein: 0, carbs: 8, fats: 0 } }
  ],

  toppings: [
    { id: 'top-strawberries', name: 'Fresh Hand-Cut Strawberries', price: 60, icon: '🍓', nutrition: { calories: 15, protein: 0, carbs: 3, fats: 0 } },
    { id: 'top-blueberries', name: 'Wild Alpine Blueberries', price: 70, icon: '🫐', nutrition: { calories: 20, protein: 0, carbs: 4, fats: 0 } },
    { id: 'top-almonds', name: 'Toasted Sicilian Almonds', price: 55, icon: '🌰', nutrition: { calories: 45, protein: 1, carbs: 2, fats: 4 } },
    { id: 'top-hazelnuts', name: 'Roasted Piedmont Hazelnuts', price: 75, icon: '🌰', nutrition: { calories: 50, protein: 1, carbs: 2, fats: 5 } },
    { id: 'top-choc-chips', name: 'Valrhona Chocolate Pearls', price: 45, icon: '🍫', nutrition: { calories: 40, protein: 1, carbs: 4, fats: 2 } },
    { id: 'top-oreo', name: 'Artisan Dark Biscuit Crumbs', price: 35, icon: '🍪', nutrition: { calories: 35, protein: 0, carbs: 6, fats: 1 } },
    { id: 'top-coconut', name: 'Toasted Coconut Shavings', price: 35, icon: '🥥', nutrition: { calories: 30, protein: 0, carbs: 1, fats: 3 } },
    { id: 'top-brownie-crumbs', name: 'Fudgy Brownie Chunks', price: 55, icon: '🍰', nutrition: { calories: 50, protein: 1, carbs: 6, fats: 3 } },
    { id: 'top-gold-leaf', name: '24k Edible Gold Leaf Flourish', price: 120, icon: '✨', nutrition: { calories: 0, protein: 0, carbs: 0, fats: 0 } },
    { id: 'top-protein-crisps', name: 'Whey Cacao Protein Crisps (+8g Protein)', price: 65, icon: '💪', nutrition: { calories: 40, protein: 8, carbs: 2, fats: 1 } },
    { id: 'top-chia-almond', name: 'Chia & Sliced Almond Crunch (+6g Protein)', price: 60, icon: '🌰', nutrition: { calories: 50, protein: 6, carbs: 3, fats: 3 } }
  ],

  sauces: [
    { id: 'sauce-dark-chocolate', name: 'Warm 70% Dark Chocolate Drizzle', color: '#2B140E', price: 45, nutrition: { calories: 45, protein: 1, carbs: 5, fats: 3 } },
    { id: 'sauce-white-chocolate', name: 'Champagne White Chocolate Silk', color: '#FDF7EB', price: 55, nutrition: { calories: 55, protein: 1, carbs: 6, fats: 3 } },
    { id: 'sauce-caramel', name: 'Warm Fleur de Sel Salted Butter Caramel', color: '#BF782F', price: 45, nutrition: { calories: 45, protein: 0, carbs: 8, fats: 2 } },
    { id: 'sauce-strawberry', name: 'Fresh Wild Strawberry Purée Coulis', color: '#BC2841', price: 45, nutrition: { calories: 25, protein: 0, carbs: 6, fats: 0 } }
  ]
};

// TRENDING CUSTOMER CREATIONS (INR)
const TRENDING_CREATIONS = [
  {
    id: 'trend-pro-power-brownie',
    name: 'Pro-Power Velvet Brownie',
    creator: 'Tharun R K',
    creatorAvatar: 'Assets/Profile/tharun.jpeg',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    recipe: 'Whey Brownie (30g P) + Whey Isolate (+15g P) + Valrhona Ganache + Protein Crisps (+8g P)',
    likes: 426,
    price: 545,
    config: {
      base: 'base-whey-brownie',
      flavor: 'flavor-whey-isolate',
      filling: 'filling-chocolate-ganache',
      toppings: ['top-protein-crisps', 'top-almonds'],
      sauce: 'sauce-dark-chocolate',
      name: 'Pro-Power Velvet Brownie'
    }
  },
  {
    id: 'trend-berry-noir',
    name: 'Berry Noir',
    creator: 'Vinoth Kumar',
    creatorAvatar: 'Assets/Profile/vinoth.jpeg',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    recipe: 'Brownie + Dark Chocolate + Wild Strawberry + Almonds + Dark Drizzle',
    likes: 248,
    price: 465,
    config: {
      base: 'base-brownie',
      flavor: 'flavor-chocolate',
      filling: 'filling-chocolate-ganache',
      toppings: ['top-strawberries', 'top-almonds'],
      sauce: 'sauce-dark-chocolate',
      name: 'Berry Noir'
    }
  },
  {
    id: 'trend-pistachio-cloud',
    name: 'Pistachio Sublime',
    creator: 'Roody Cruz',
    creatorAvatar: 'Assets/Profile/roody.jpg',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80',
    recipe: 'Cheesecake + Bronte Pistachio + Pistachio Mousse + Hazelnuts + White Drizzle',
    likes: 312,
    price: 545,
    config: {
      base: 'base-cheesecake',
      flavor: 'flavor-pistachio',
      filling: 'filling-pistachio-mousse',
      toppings: ['top-hazelnuts', 'top-gold-leaf'],
      sauce: 'sauce-white-chocolate',
      name: 'Pistachio Sublime'
    }
  },
  {
    id: 'trend-caramel-velvet',
    name: 'Caramel Gold Dream',
    creator: 'Devina R.',
    creatorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
    recipe: 'Belgian Waffle + Salted Caramel + Caramel Confit + Hazelnuts + Caramel Sauce',
    likes: 195,
    price: 460,
    config: {
      base: 'base-waffle',
      flavor: 'flavor-caramel',
      filling: 'filling-caramel-confit',
      toppings: ['top-hazelnuts', 'top-choc-chips'],
      sauce: 'sauce-caramel',
      name: 'Caramel Gold Dream'
    }
  },
  {
    id: 'trend-ruby-tiramisu',
    name: 'Espresso Rosa',
    creator: 'Jeneefar',
    creatorAvatar: 'Assets/Profile/jeneefar.jpeg',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
    recipe: 'Genoese Sponge + Espresso + Vanilla Silk Cream + Blueberries + Dark Drizzle',
    likes: 279,
    price: 455,
    config: {
      base: 'base-cake',
      flavor: 'flavor-coffee',
      filling: 'filling-vanilla-cream',
      toppings: ['top-blueberries', 'top-brownie-crumbs'],
      sauce: 'sauce-dark-chocolate',
      name: 'Espresso Rosa'
    }
  }
];

// INGREDIENTS EDITORIAL SPOTLIGHT
const INGREDIENT_STORIES = [
  {
    title: 'REAL FRUIT & PURÉES',
    description: 'Whole alpine strawberries, hand-picked raspberries, and Ratnagiri Alphonso mangoes bring authentic aroma and vibrant natural acidity.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80',
    tag: 'Farm-To-Creation'
  },
  {
    title: 'VALRHONA & PERUVIAN CACAO',
    description: 'Deep cocoa-forward chocolates sourced from certified sustainable estates in Venezuela and Peru for profound depth without excessive sugar.',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80',
    tag: 'Single-Origin Cocoa'
  },
  {
    title: 'NATURAL SWEETNESS',
    description: 'Our Desio Natural range celebrates the rich caramel tones of sun-ripened Medjool dates, wild raw honey, and concentrated fruit reductions.',
    image: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&w=600&q=80',
    tag: 'Thoughtfully Mindful'
  },
  {
    title: 'ITALIAN ARTISANAL MASTERY',
    description: 'Every creation is hand-layered by master pastry chefs, respecting traditional Italian techniques refined for modern indulgence.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    tag: 'Handcrafted Daily'
  }
];

// INSTAGRAM GALLERY SHOWCASE
const INSTAGRAM_POSTS = [
  { image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80', caption: 'The Velvet Noir in its golden moment. #LaDesio', likes: '1.4k' },
  { image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80', caption: 'Bronte Pistachio indulgence. Handcrafted in Milan. #DesioCreation', likes: '2.1k' },
  { image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80', caption: 'Berry Élan fresh from our patisserie atelier. #MindfulLuxury', likes: '980' },
  { image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80', caption: 'Gifting elegance made unforgettable with velvet ribbon. #LaDesioGifting', likes: '3.2k' },
  { image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80', caption: 'Strawberry Rosé kissed with 24k gold. #WhereCravingsBecomeCreations', likes: '1.8k' },
  { image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80', caption: 'In the atelier with Chef Alessandro. #ArtisanalPatisserie', likes: '2.6k' }
];

// FAQS
const FAQS = [
  {
    q: 'What is the philosophy behind "Desio Natural"?',
    a: 'Desio Natural is our dedicated range for mindful gourmands. We create these desserts without artificial sweeteners and with reduced reliance on refined sugars, highlighting the natural richness of Medjool dates, pure fruit reductions, Alphonso mangoes, and high-percentage single-origin cacao. They are crafted strictly as authentic luxury desserts, designed with thoughtful ingredient awareness.'
  },
  {
    q: 'How does the "Create Your Dessert" studio work?',
    a: 'Our bespoke studio allows you to design your dream dessert in 6 curated steps: select your Base, signature Flavor, silky Filling, artisanal Toppings, warm luxury Sauce, and name your creation. Our pastry chefs hand-prepare each bespoke order to order within 25 minutes.'
  },
  {
    q: 'How is temperature control maintained during delivery?',
    a: 'Every La Desio order is transported in bespoke temperature-controlled luxury insulated chambers with eco-chilled ice inserts, ensuring mousses, ganaches, and gelato remain in pristine patisserie condition until delivery at your doorstep.'
  },
  {
    q: 'Can I schedule a delivery for a future celebration or gift?',
    a: 'Yes! During checkout, you can select your preferred delivery date and specific time slot up to 30 days in advance, as well as include a complimentary handwritten Italian calligraphy gift card and luxury ribbon sealing.'
  },
  {
    q: 'What is the "La Desio Privé" membership?',
    a: 'La Desio Privé is our complimentary client privilege club. You earn 1 Desio Point for every ₹10 spent, unlocking exclusive perks across Amore, Élite, and Royale tiers, including secret seasonal tastings, complimentary dessert upgrades, and private concierge invitations.'
  }
];

// BOUTIQUE LOCATIONS
const BOUTIQUES = [
  {
    city: 'Mumbai Bandra Atelier',
    address: 'Pali Hill Luxury Arcade, Bandra West, Mumbai 400050, India',
    hours: 'Tue – Sun: 11:00 AM – 01:00 AM',
    phone: '+91 22 6842 1900',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=600&q=80'
  },
  {
    city: 'Delhi Emporio Atelier',
    address: 'DLF Emporio, Vasant Kunj, New Delhi 110070, India',
    hours: 'Mon – Sun: 10:30 AM – 11:00 PM',
    phone: '+91 11 4987 2300',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
  },
  {
    city: 'Bengaluru Lavelle Atelier',
    address: 'Lavelle Road, Shanthala Nagar, Bengaluru 560001, India',
    hours: 'Mon – Sun: 10:00 AM – 11:30 PM',
    phone: '+91 80 4122 8840',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80'
  },
  {
    city: 'Milan Flagship Atelier',
    address: 'Via Montenapoleone 18, 20121 Milano, Italy',
    hours: 'Mon – Sun: 09:00 AM – 11:00 PM',
    phone: '+39 02 8945 7712',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80'
  }
];


// LA DESIO - Shopping Cart & Checkout Data Store (INR Edition)
// Handles Cart persistence, Promo Codes, Quantities, and Delivery estimation

const CART_STORAGE_KEY = 'ladesio_cart_v1';
const WISHLIST_STORAGE_KEY = 'ladesio_wishlist_v1';

class CartManager {
  constructor() {
    this.cart = this.loadCart();
    this.wishlist = this.loadWishlist();
    this.activePromo = null;
    this.promoCodes = {
      'LADESIO10': { type: 'percent', value: 10, description: '10% Privé Welcome Courtesy' },
      'ROYALE20': { type: 'percent', value: 20, description: '20% Royale Tier Exclusive' },
      'SWEETDESIO': { type: 'free_delivery', value: 99.00, description: 'Complimentary Artisanal Delivery' }
    };
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notify() {
    this.listeners.forEach(cb => cb(this.getSummary()));
  }

  loadCart() {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load cart from storage', e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
    this.notify();
  }

  loadWishlist() {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveWishlist() {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(this.wishlist));
    } catch (e) {}
    this.notify();
  }

  // Add Item to Cart
  addItem(item) {
    // Check if duplicate standard product exists
    const existingIndex = this.cart.findIndex(i => {
      if (item.isCustom) {
        return i.isCustom && i.customConfigKey === item.customConfigKey;
      }
      return i.id === item.id && JSON.stringify(i.options || {}) === JSON.stringify(item.options || {});
    });

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += (item.quantity || 1);
    } else {
      this.cart.push({
        uid: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        ...item,
        quantity: item.quantity || 1
      });
    }

    this.saveCart();
  }

  // Update item quantity
  updateQuantity(uid, delta) {
    const item = this.cart.find(i => i.uid === uid);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeItem(uid);
    } else {
      this.saveCart();
    }
  }

  // Remove item
  removeItem(uid) {
    this.cart = this.cart.filter(i => i.uid !== uid);
    this.saveCart();
  }

  // Clear cart
  clearCart() {
    this.cart = [];
    this.activePromo = null;
    this.saveCart();
  }

  // Wishlist toggle
  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    let added = false;
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
    } else {
      this.wishlist.push(productId);
      added = true;
    }
    this.saveWishlist();
    return added;
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  // Promo code
  applyPromo(code) {
    const cleanCode = (code || '').trim().toUpperCase();
    if (this.promoCodes[cleanCode]) {
      this.activePromo = {
        code: cleanCode,
        ...this.promoCodes[cleanCode]
      };
      this.notify();
      return { success: true, message: `Promo code ${cleanCode} applied!` };
    }
    return { success: false, message: 'Invalid promo code. Try LADESIO10 or SWEETDESIO' };
  }

  removePromo() {
    this.activePromo = null;
    this.notify();
  }

  // Calculations in INR
  getSummary() {
    const itemCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = this.cart.reduce((sum, item) => {
      const unitPrice = item.price || 0;
      return sum + (unitPrice * item.quantity);
    }, 0);

    const deliveryThreshold = 999.00;
    let standardDelivery = subtotal > 0 ? (subtotal >= deliveryThreshold ? 0.00 : 99.00) : 0.00;

    let discount = 0.00;
    if (this.activePromo) {
      if (this.activePromo.type === 'percent') {
        discount = (subtotal * this.activePromo.value) / 100;
      } else if (this.activePromo.type === 'free_delivery') {
        standardDelivery = 0.00;
      }
    }

    const total = Math.max(0, subtotal - discount + standardDelivery);

    return {
      items: this.cart,
      itemCount,
      subtotal,
      discount,
      delivery: standardDelivery,
      total,
      activePromo: this.activePromo,
      wishlist: this.wishlist,
      freeDeliveryAway: Math.max(0, deliveryThreshold - subtotal)
    };
  }
}

const cartStore = new CartManager();
if (typeof window !== 'undefined') {
  window.cartStore = cartStore;
}


// LA DESIO - Privé Loyalty, Customer Profile, Saved Creations & Order History (INR Edition)

const PROFILE_KEY = 'ladesio_profile_v2';
const CREATIONS_KEY = 'ladesio_creations_v1';
const ORDERS_KEY = 'ladesio_orders_v1';
const FRIENDS_KEY = 'ladesio_friends_v2';

const DUMMY_FRIENDS = [
  {
    id: 'friend_chiara',
    name: 'Vinoth Kumar',
    handle: '@vinokutty',
    avatar: 'Assets/Profile/vinoth.jpeg',
    bio: 'Obsessed with Bronte pistachios, silky mascarpone, and delicate choux pastry.',
    tier: 'Royale Member',
    location: 'Trichy',
    creationsCount: 2,
    ordersCount: 24,
    creations: [
      {
        id: 'chiara_c1',
        name: 'Bronte Pistachio Oro Torte',
        recipe: 'Cheesecake + Bronte Pistachio + Pistachio Mousse + Hazelnuts + White Chocolate Silk',
        price: 545,
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80',
        createdDate: '18 Feb 2026',
        nutrition: { calories: 340, protein: '9g', carbs: '32g', fats: '20g' },
        config: {
          base: 'base-cheesecake',
          flavor: 'flavor-pistachio',
          filling: 'filling-pistachio-mousse',
          toppings: ['top-hazelnuts', 'top-gold-leaf'],
          sauce: 'sauce-white-chocolate',
          name: 'Bronte Pistachio Oro Torte'
        }
      },
      {
        id: 'chiara_c2',
        name: 'Espresso Amore Mousse',
        recipe: 'Genoese Sponge + Espresso Arabica + Vanilla Silk + Blueberries + Dark Drizzle',
        price: 465,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
        createdDate: '24 Feb 2026',
        nutrition: { calories: 290, protein: '7g', carbs: '36g', fats: '12g' },
        config: {
          base: 'base-cake',
          flavor: 'flavor-coffee',
          filling: 'filling-vanilla-cream',
          toppings: ['top-blueberries', 'top-gold-leaf'],
          sauce: 'sauce-dark-chocolate',
          name: 'Espresso Amore Mousse'
        }
      }
    ]
  },
  {
    id: 'friend_vikram',
    name: 'Tharun R K',
    handle: '@tharunchocoboy',
    avatar: 'Assets/Profile/tharun.jpeg',
    bio: 'Sports nutritionist & dessert lover. Formulating 35g+ whey isolate brownies and guilt-free low-carb Basque cheesecakes.',
    tier: 'Élite Member',
    location: 'Bengaluru, India',
    creationsCount: 2,
    ordersCount: 19,
    creations: [
      {
        id: 'vikram_c1',
        name: '35g Whey Noir Power Brownie',
        recipe: 'Whey Brownie (30g P) + Pure CFM Whey (+15g P) + Valrhona Ganache + Protein Crisps (+8g P)',
        price: 545,
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
        createdDate: '01 Mar 2026',
        nutrition: { calories: 340, protein: '35g', carbs: '18g', fats: '12g' },
        config: {
          base: 'base-whey-brownie',
          flavor: 'flavor-whey-isolate',
          filling: 'filling-chocolate-ganache',
          toppings: ['top-protein-crisps', 'top-almonds'],
          sauce: 'sauce-dark-chocolate',
          name: '35g Whey Noir Power Brownie'
        }
      },
      {
        id: 'vikram_c2',
        name: 'Pro-Basque Vanilla Fuel Gateau',
        recipe: 'Pro-Basque Cheesecake (25g P) + Bourbon Vanilla + Vanilla Silk + Chia Almond Crunch',
        price: 535,
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
        createdDate: '04 Mar 2026',
        nutrition: { calories: 310, protein: '28g', carbs: '14g', fats: '15g' },
        config: {
          base: 'base-protein-cheesecake',
          flavor: 'flavor-vanilla',
          filling: 'filling-vanilla-cream',
          toppings: ['top-chia-almond', 'top-strawberries'],
          sauce: 'sauce-white-chocolate',
          name: 'Pro-Basque Vanilla Fuel Gateau'
        }
      }
    ]
  },
  {
    id: 'friend_elena',
    name: 'Jeneefar',
    handle: '@jeneefarking',
    avatar: 'Assets/Profile/jeneefar.jpeg',
    bio: 'Luxury food stylist & berry devotee. If it doesn\'t have alpine wild strawberries, Champagne cream, and 24k gold leaf, count me out!',
    tier: 'Royale Member',
    location: 'Kerala',
    creationsCount: 2,
    ordersCount: 38,
    creations: [
      {
        id: 'elena_c1',
        name: 'Wild Fragola Gold Crown Tart',
        recipe: 'Cheesecake + Wild Strawberry + Berry Compote + Hand-Cut Strawberries + 24k Gold Flourish',
        price: 595,
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
        createdDate: '28 Feb 2026',
        nutrition: { calories: 295, protein: '7g', carbs: '34g', fats: '14g' },
        config: {
          base: 'base-cheesecake',
          flavor: 'flavor-strawberry',
          filling: 'filling-berry-compote',
          toppings: ['top-strawberries', 'top-gold-leaf'],
          sauce: 'sauce-strawberry',
          name: 'Wild Fragola Gold Crown Tart'
        }
      },
      {
        id: 'elena_c2',
        name: 'Caramello Étoile Brioche Waffle',
        recipe: 'Belgian Waffle + Salted Caramel + Caramel Confit + Roasted Piedmont Hazelnuts + Fleur de Sel',
        price: 490,
        image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80',
        createdDate: '06 Mar 2026',
        nutrition: { calories: 360, protein: '6g', carbs: '42g', fats: '16g' },
        config: {
          base: 'base-waffle',
          flavor: 'flavor-caramel',
          filling: 'filling-caramel-confit',
          toppings: ['top-hazelnuts', 'top-choc-chips'],
          sauce: 'sauce-caramel',
          name: 'Caramello Étoile Brioche Waffle'
        }
      }
    ]
  }
];

class LoyaltyManager {
  constructor() {
    this.profile = this.loadProfile();
    this.creations = this.loadCreations();
    this.orders = this.loadOrders();
    this.friends = this.loadFriends();
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notify() {
    this.listeners.forEach(cb => cb(this.getData()));
  }

  loadProfile() {
    const defaultProfile = {
      name: 'Roody Cruz',
      avatar: 'Assets/Profile/roody.jpg',
      bio: 'Haute patisserie enthusiast & dark cacao devotee. Passionate about custom artisanal desserts, authentic Bronte pistachio, and high-protein creations in Chennai.',
      email: 'theroodyy@gmail.com',
      phone: '+91 93453 96700',
      city: 'Chennai',
      tier: 'Élite', // Amore, Élite, Royale
      points: 2450,
      nextTierPoints: 4000,
      joinedDate: 'August 2026',
      savedAddresses: [
        {
          id: 'addr_1',
          name: 'Roody Cruz (Home)',
          address: 'No.60/A Gnanamani St,West Jafferkhanpet',
          city: 'Chennai',
          postal: '6000 83',
          country: 'India',
          phone: '+91 93453 96700',
          isDefault: true
        },
        {
          id: 'addr_2',
          name: 'SLA INSTITUTE - KK NAGAR',
          address: 'P.T Rajan Salai, KK Nagar',
          city: 'Chennai',
          postal: '6000 83',
          country: 'India',
          phone: '+91 98201 44892',
          isDefault: false
        }
      ]
    };

    try {
      const saved = localStorage.getItem(PROFILE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.avatar && parsed.avatar.includes('images.unsplash.com/photo-1535713875002-d1d0cf377fde')) {
          parsed.avatar = defaultProfile.avatar;
        }
        return { ...defaultProfile, ...parsed };
      }
      return defaultProfile;
    } catch (e) {
      return defaultProfile;
    }
  }

  saveProfile() {
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(this.profile));
    } catch (e) {}
    this.notify();
  }

  updateProfile(data) {
    this.profile = { ...this.profile, ...data };
    this.saveProfile();
    return this.profile;
  }

  loadFriends() {
    try {
      const saved = localStorage.getItem(FRIENDS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return DUMMY_FRIENDS.map(df => {
          const matched = parsed.find(f => f.id === df.id);
          if (!matched) return df;
          if (!matched.avatar || matched.avatar.includes('images.unsplash.com')) {
            matched.avatar = df.avatar;
          }
          if (matched.name === 'Chiara Rossi' || matched.name === 'Dr. Vikram Malhotra' || matched.name === 'Elena De Luca') {
            matched.name = df.name;
            matched.handle = df.handle;
            matched.location = df.location;
          }
          return { ...df, ...matched };
        });
      }
      return DUMMY_FRIENDS;
    } catch (e) {
      return DUMMY_FRIENDS;
    }
  }

  getFriend(id) {
    return this.friends.find(f => f.id === id);
  }

  saveFriends() {
    try {
      localStorage.setItem(FRIENDS_KEY, JSON.stringify(this.friends));
    } catch (e) {}
    this.notify();
  }

  updateFriend(id, data) {
    const idx = this.friends.findIndex(f => f.id === id);
    if (idx !== -1) {
      this.friends[idx] = { ...this.friends[idx], ...data };
      this.saveFriends();
      return this.friends[idx];
    }
    return null;
  }

  loadCreations() {
    const defaultCreations = [
      {
        id: 'creation_init_1',
        name: 'Nocturne Pistachio',
        createdDate: '12 Jan 2025',
        recipe: 'Fudge Brownie + Bronte Pistachio + Pistachio Mousse + Hazelnuts + Dark Chocolate Drizzle',
        price: 525,
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
        config: {
          base: 'base-brownie',
          flavor: 'flavor-pistachio',
          filling: 'filling-pistachio-mousse',
          toppings: ['top-hazelnuts', 'top-gold-leaf'],
          sauce: 'sauce-dark-chocolate',
          name: 'Nocturne Pistachio'
        }
      },
      {
        id: 'creation_init_2',
        name: 'Wild Fragola Tart',
        createdDate: '04 Feb 2025',
        recipe: 'Cheesecake + Wild Strawberry + Berry Compote + Strawberries + Strawberry Purée',
        price: 515,
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
        config: {
          base: 'base-cheesecake',
          flavor: 'flavor-strawberry',
          filling: 'filling-berry-compote',
          toppings: ['top-strawberries', 'top-blueberries'],
          sauce: 'sauce-strawberry',
          name: 'Wild Fragola Tart'
        }
      }
    ];

    try {
      const saved = localStorage.getItem(CREATIONS_KEY);
      return saved ? JSON.parse(saved) : defaultCreations;
    } catch (e) {
      return defaultCreations;
    }
  }

  saveCreations() {
    try {
      localStorage.setItem(CREATIONS_KEY, JSON.stringify(this.creations));
    } catch (e) {}
    this.notify();
  }

  loadOrders() {
    const defaultOrders = [
      {
        id: 'DESIO-8942',
        date: '14 Feb 2025',
        time: '18:30',
        status: 'Delivered',
        statusColor: 'emerald',
        items: [
          {
            name: 'The Desio Royale Hamper',
            qty: 1,
            price: 2450,
            image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
            subtitle: 'Curated 6-Piece Signature Collection'
          },
          {
            name: 'Velvet Noir',
            qty: 2,
            price: 495,
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
            subtitle: 'Dark Chocolate Mousse & Piedmont Hazelnut'
          }
        ],
        subtotal: 3440,
        discount: 0,
        deliveryFee: 0,
        total: 3440,
        paymentMethod: 'UPI / Google Pay',
        address: {
          fullName: 'Roody Cruz',
          phone: '+91 93453 96700',
          street: 'No.60/A Gnanamani St, West Jafferkhanpet',
          city: 'Chennai',
          postal: '6000 83'
        },
        deliverySlot: 'Express Artisanal — 14 Feb, 6:00 PM (Chennai)',
        trackingNumber: 'IN-EXP-8942-DESIO'
      }
    ];

    try {
      const saved = localStorage.getItem(ORDERS_KEY);
      return saved ? JSON.parse(saved) : defaultOrders;
    } catch (e) {
      return defaultOrders;
    }
  }

  saveOrders() {
    try {
      localStorage.setItem(ORDERS_KEY, JSON.stringify(this.orders));
    } catch (e) {}
    this.notify();
  }

  // Add newly placed order
  addOrder(orderData) {
    const orderId = 'DESIO-' + Math.floor(1000 + Math.random() * 9000);
    const now = new Date();
    const newOrder = {
      id: orderId,
      date: now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
      status: 'Preparing in Atelier',
      statusColor: 'amber',
      items: (orderData.items || []).map(i => ({
        name: i.name || 'Artisanal Creation',
        qty: i.qty || i.quantity || 1,
        price: i.price || 0,
        image: i.image || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
        subtitle: i.subtitle || (i.options?.toppings ? i.options.toppings.join(', ') : ''),
        isCustom: !!i.isCustom,
        options: i.options || null,
        customConfigKey: i.customConfigKey || null
      })),
      subtotal: orderData.subtotal || orderData.total || 0,
      discount: orderData.discount || 0,
      deliveryFee: orderData.deliveryFee || 0,
      total: orderData.total || 0,
      paymentMethod: orderData.paymentMethod || 'Credit / Debit Card',
      address: orderData.address || {
        fullName: 'Patisserie Client',
        phone: '+91 93453 96700',
        street: 'West Jafferkhanpet',
        city: 'Chennai'
      },
      deliverySlot: orderData.deliverySlot || 'Express Artisanal — Within 45 Mins (Chennai)',
      trackingNumber: orderData.trackingNumber || ('IN-EXP-' + Math.floor(1000 + Math.random() * 9000) + '-DESIO'),
      createdAt: now.toISOString()
    };

    this.orders.unshift(newOrder);
    this.saveOrders();

    // Add loyalty points (1 point per ₹10 spent)
    const pointsEarned = Math.round(newOrder.total / 10);
    this.profile.points += pointsEarned;
    this.checkTierUpgrade();
    this.saveProfile();

    return newOrder;
  }

  getOrder(id) {
    return this.orders.find(o => o.id === id);
  }

  deleteOrder(id) {
    this.orders = this.orders.filter(o => o.id !== id);
    this.saveOrders();
  }

  checkTierUpgrade() {
    if (this.profile.points >= 5000) {
      this.profile.tier = 'Royale';
    } else if (this.profile.points >= 2000) {
      this.profile.tier = 'Élite';
    } else {
      this.profile.tier = 'Amore';
    }
  }

  // Save new custom creation with deduplication and validation
  saveCustomCreation(creation) {
    const existingIndex = this.creations.findIndex(c => 
      c.name.trim().toLowerCase() === (creation.name || '').trim().toLowerCase() &&
      JSON.stringify(c.config) === JSON.stringify(creation.config)
    );

    const fullCreation = {
      name: creation.name || 'My La Desio Creation',
      createdDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      recipe: creation.recipe || 'Artisanal Custom Patisserie Recipe',
      price: creation.price || 495,
      image: creation.image || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
      nutrition: creation.nutrition || { calories: 340, protein: 5, carbs: 36, fats: 14 },
      config: creation.config || {}
    };

    if (existingIndex >= 0) {
      this.creations[existingIndex] = {
        ...this.creations[existingIndex],
        ...fullCreation,
        updatedDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
      };
      this.saveCreations();
      return this.creations[existingIndex];
    } else {
      const newCreation = {
        id: 'creation_' + Date.now(),
        ...fullCreation
      };
      this.creations.unshift(newCreation);
      this.saveCreations();
      return newCreation;
    }
  }

  deleteCreation(id) {
    this.creations = this.creations.filter(c => c.id !== id);
    this.saveCreations();
  }

  getData() {
    return {
      profile: this.profile,
      creations: this.creations,
      orders: this.orders,
      friends: this.friends
    };
  }
}

const loyaltyStore = new LoyaltyManager();
if (typeof window !== 'undefined') {
  window.loyaltyStore = loyaltyStore;
}


// LA DESIO - Interactive Bespoke Dessert Studio Builder (INR Edition)



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

class Dessert3DViewer {
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

class DessertBuilder {
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


// LA DESIO - Multi-Step Luxury Checkout Flow (INR Edition)


class CheckoutManager {
  constructor(containerId, onOrderCompleted) {
    if (typeof window !== 'undefined') {
      window.checkoutManager = this;
    }
    this.container = document.getElementById(containerId);
    this.onOrderCompleted = onOrderCompleted;
    this.currentStep = 1;
    this.state = {
      address: {
        fullName: 'Roody Cruz',
        email: 'theroodyy@gmail.com',
        phone: '+91 93453 96700',
        street: 'No.60/A Gnanamani St,West Jafferkhanpet',
        city: 'Chennai',
        postal: '6000 83',
        country: 'India',
        instructions: 'Please call on arrival. Temperature insulated delivery.'
      },
      deliveryMethod: 'express', // express, scheduled, temperature
      scheduledSlot: 'Today Evening (6:00 PM - 8:00 PM)',
      paymentMethod: 'upi', // upi, card, netbanking, applepay
      cardDetails: {
        number: '•••• •••• •••• 2005',
        name: 'Roody Cruz',
        expiry: '08/28',
        cvv: '•••'
      },
      upiId: 'theroodyy@okaxis',
      orderNotes: '',
      isGift: false,
      giftMessage: ''
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
                <label class="block font-semibold text-[#3A1F17] mb-1">City / Delivery Destination</label>
                <div class="relative">
                  <input type="text"
                         id="chkCity"
                         list="citySuggestions"
                         value="${this.state.address.city || 'Chennai'}"
                         placeholder="Type or select city (e.g. Chennai)"
                         class="w-full px-3 py-2 rounded-lg border border-[#B8945B]/40 bg-white focus:outline-none focus:ring-2 focus:ring-[#B8945B] text-[#3A1F17] font-medium" />
                  <datalist id="citySuggestions">
                    <option value="Chennai">Chennai (Flagship Salon & Express Dispatch)</option>
                    <option value="Bengaluru">Bengaluru (Lavelle Road Atelier)</option>
                    <option value="Mumbai">Mumbai (Bandra Atelier & Downtown)</option>
                    <option value="Delhi">Delhi NCR (DLF Emporio Dispatch)</option>
                    <option value="Hyderabad">Hyderabad (Jubilee Hills Atelier)</option>
                    <option value="Coimbatore">Coimbatore (Express Courier)</option>
                    <option value="Kochi">Kochi (Marine Drive Dispatch)</option>
                    <option value="Madurai">Madurai (Express Courier)</option>
                    <option value="Pune">Pune (Koregaon Park Delivery)</option>
                    <option value="Kolkata">Kolkata (Park Street Delivery)</option>
                    <option value="Ahmedabad">Ahmedabad (Bodakdev Dispatch)</option>
                    <option value="Milan">Milan (Via Montenapoleone)</option>
                    <option value="London">London (Mayfair Boutique)</option>
                    <option value="Dubai">Dubai (Downtown Courier)</option>
                  </datalist>
                </div>
                <span class="text-[10px] text-[#8C6838] mt-1 block">📍 Default: <strong>Chennai</strong>. You can manually type any city or pick from the list.</span>
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
          <a href="#account" onclick="if(window.ladesioApp && window.ladesioApp.setActiveAccountTab) window.ladesioApp.setActiveAccountTab('orders');"
             class="px-6 py-2.5 rounded-lg btn-chocolate-luxury font-serif text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-md">
            <span>📦</span> View in Order History
          </a>
          <button type="button" onclick="if(window.ladesioApp && window.ladesioApp.openOrderTracker) window.ladesioApp.openOrderTracker('${order.id}');"
                  class="px-6 py-2.5 rounded-lg border border-[#B8945B] text-[#3A1F17] hover:bg-[#F8F1E7] font-serif text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-sm">
            <span>🚚</span> Track Live Dispatch
          </button>
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

    // Auto-save any custom creations from this order into loyaltyStore
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
        ? `Express Artisanal — Within 45 Mins (${city})` 
        : `Scheduled Luxury Slot (${city})`,
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


// LA DESIO - Master Application Controller & Router (INR Edition)





const HERO_SLIDES = [
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

const FULL_SIZE_BANNER_IMAGES = [
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
        
        <!-- Category Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          ${CATEGORIES.map(cat => `
            <button onclick="window.ladesioApp.setMenuCategory('${cat.id}')"
                    class="px-4 py-2 rounded-xl text-xs font-serif font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${this.selectedCategory === cat.id ? 'bg-[#B8945B] text-[#140602] font-bold shadow-lg ring-2 ring-[#E6CA85]/50' : 'bg-[#1F0C06] text-[#E6CA85] border border-[#B8945B]/30 hover:border-[#E6CA85]/60 hover:text-white'}">
              <span>${cat.name}</span>
            </button>
          `).join('')}
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
                    <span class="text-xs font-serif text-[#E6CA85] bg-[#180A06] px-3.5 py-1.5 rounded-full border border-[#B8945B]/30 w-fit">
                      🌟 ${friends.length} Featured Profiles
                    </span>
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
                            <button onclick="event.stopPropagation(); window.ladesioApp.openEditFriendProfileModal('${f.id}')"
                                    class="p-2 rounded-xl bg-[#180A06] hover:bg-[#3A1F17] border border-[#B8945B]/30 hover:border-[#B8945B] text-[#E6CA85] hover:text-white text-xs transition-colors shrink-0"
                                    title="Edit Friend Name, Bio & Photo">
                              ✏️
                            </button>
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

                        <!-- Button to open profile -->
                        <button onclick="window.ladesioApp.viewFriendProfile('${f.id}')"
                                class="mt-6 w-full py-2.5 px-4 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-2 shadow-md">
                          <span>View ${f.name.split(' ')[0]}'s Creations (${f.creations.length})</span>
                          <span>→</span>
                        </button>
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

          <!-- Badge -->
          <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#180804] text-[#E6CA85] border border-[#B8945B]/60 backdrop-blur-md text-[10px] font-serif uppercase tracking-wider shadow-md font-semibold">
            ${product.badge}
          </span>

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
              <span class="flex items-center gap-1 font-serif">
                <span class="text-[#E6CA85]">★</span>
                <strong class="text-[#FFFDF9]">${product.rating.toFixed(2)}</strong>
                <span class="text-[#E8D7C7]/70">(${product.reviewsCount})</span>
              </span>
              <span class="text-[#E8D7C7]/80 font-sans text-[11px]">${product.prepTime.split(' ')[0]} mins</span>
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

            <!-- Dietary Tag Chips -->
            <div class="flex flex-wrap gap-1.5 mt-3">
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
              <span>★ ${product.rating.toFixed(2)} (${product.reviewsCount} verified reviews)</span>
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
                Allergens: ${product.allergens.join(', ') || 'None'}<br/>
                Dietary: ${product.dietary.join(', ')}
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
            <button type="button" onclick="window.ladesioApp.resetFriendProfile('${friend.id}')"
                    class="text-[11px] font-serif text-stone-400 hover:text-white underline">
              Reset Default
            </button>
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


})();
