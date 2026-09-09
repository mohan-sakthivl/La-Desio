// LA DESIO - Complete Product & Recipe Catalog Data (Hyper-Accurate Verified Photography & INR Edition)
// Visual theme: Italian luxury patisserie, ingredient-conscious, handcrafted

export const CATEGORIES = [
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

export const PRODUCTS = [
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
export const DESSERT_BUILDER_OPTIONS = {
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
export const TRENDING_CREATIONS = [
  {
    id: 'trend-pro-power-brownie',
    name: 'Pro-Power Velvet Brownie',
    creator: 'Dr. Vikram M.',
    creatorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
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
    creator: 'Ananya S.',
    creatorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
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
    creator: 'Marco V.',
    creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
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
    creator: 'Chiara L.',
    creatorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
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
export const INGREDIENT_STORIES = [
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
export const INSTAGRAM_POSTS = [
  { image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80', caption: 'The Velvet Noir in its golden moment. #LaDesio', likes: '1.4k' },
  { image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80', caption: 'Bronte Pistachio indulgence. Handcrafted in Milan. #DesioCreation', likes: '2.1k' },
  { image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80', caption: 'Berry Élan fresh from our patisserie atelier. #MindfulLuxury', likes: '980' },
  { image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80', caption: 'Gifting elegance made unforgettable with velvet ribbon. #LaDesioGifting', likes: '3.2k' },
  { image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80', caption: 'Strawberry Rosé kissed with 24k gold. #WhereCravingsBecomeCreations', likes: '1.8k' },
  { image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80', caption: 'In the atelier with Chef Alessandro. #ArtisanalPatisserie', likes: '2.6k' }
];

// FAQS
export const FAQS = [
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
export const BOUTIQUES = [
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
