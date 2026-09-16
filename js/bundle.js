// LA DESIO - UNIVERSAL STANDALONE APPLICATION BUNDLE (Pure Client & LocalStorage Edition)
(function() {
  'use strict';


// --- data.js ---
// LA DESIO - Complete Product & Recipe Catalog Data (Hyper-Accurate Verified Photography & INR Edition)
// Visual theme: Italian luxury patisserie, ingredient-conscious, handcrafted

const CATEGORIES = [
  { id: 'all', name: 'All Desserts', icon: 'sparkles' },
  { id: 'signature', name: 'Signature Collection', icon: 'crown' },
  { id: 'ancient-naturals', name: 'Ancient Grains & Pulses (Kids)', icon: 'wheat' },
  { id: 'protein', name: 'High-Protein & Whey', icon: 'dumbbell' },
  { id: 'natural', name: 'Desio Natural', icon: 'leaf' },
  { id: 'cakes', name: 'Cakes & Tortes', icon: 'cake' },
  { id: 'cheesecakes', name: 'Cheesecakes', icon: 'cheese' },
  { id: 'brownies', name: 'Brownies & Fudges', icon: 'square' },
  { id: 'tiramisu', name: 'Tiramisu & Cold Desserts', icon: 'coffee' },
  { id: 'cookies', name: 'Artisan Cookies & Waffles', icon: 'cookie' }
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
    reviews: [
          {
                "id": "rev-vn-1",
                "author": "Ananya S.",
                "city": "Chennai",
                "rating": 5,
                "date": "2 days ago",
                "title": "Unmatched 72% Venezuelan dark cacao",
                "comment": "The mousse is silk-smooth and intensely deep without excessive sugar. The crunch of roasted Piedmont hazelnuts on top makes it world-class!"
          },
          {
                "id": "rev-vn-2",
                "author": "Karthik N.",
                "city": "Coimbatore",
                "rating": 5,
                "date": "1 week ago",
                "title": "Best chocolate gateau in Tamil Nadu",
                "comment": "Ordered for our anniversary. The 24k gold leaf and velvet texture looked like a jewel. Also love that it is 100% eggless!"
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
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
    reviews: [
          {
                "id": "rev-pr-1",
                "author": "Dr. Meera V.",
                "city": "Chennai",
                "rating": 5,
                "date": "3 days ago",
                "title": "Authentic Sicilian Bronte Pistachio",
                "comment": "You can immediately tell this is pure PDO Bronte pistachio, not artificial coloring or flavoring. The almond sablé crust remained wonderfully crisp."
          },
          {
                "id": "rev-pr-2",
                "author": "Siddharth M.",
                "city": "Bangalore",
                "rating": 5,
                "date": "2 weeks ago",
                "title": "Perfection in every spoonful",
                "comment": "Balanced sweetness with Belgian white chocolate and savory pistachio pearls. Worth every single rupee."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
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
    reviews: [
          {
                "id": "rev-be-1",
                "author": "Pooja K.",
                "city": "Chennai",
                "rating": 5,
                "date": "4 days ago",
                "title": "Airy vanilla chantilly & tart berries",
                "comment": "The wild raspberry compote cuts right through the sweet Bourbon vanilla cream. Lightest chiffon sponge I have ever tasted."
          }
    ],
        isEggless: false,
    dietaryBadge: 'contains-egg',
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
    reviews: [
          {
                "id": "rev-ce-1",
                "author": "Rohan D.",
                "city": "Hyderabad",
                "rating": 5,
                "date": "5 days ago",
                "title": "Fleur de sel caramel is divine",
                "comment": "Real Guérande sea salt caramel paired with crunchy toasted pecans. Highly recommend warming it slightly before serving."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1547414368-ac947d00b91d?auto=format&fit=crop&w=1000&q=85',
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
    reviews: [
          {
                "id": "rev-tc-1",
                "author": "Marco G.",
                "city": "Chennai Expat",
                "rating": 5,
                "date": "1 week ago",
                "title": "Authentic Italian style",
                "comment": "Proper savoiardi soaked in strong Arabica espresso with real mascarpone cream. True to Roman pasticceria traditions."
          }
    ],
        isEggless: false,
    dietaryBadge: 'contains-egg',
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
    reviews: [
          {
                "id": "rev-sr-1",
                "author": "Lavanya R.",
                "city": "Chennai",
                "rating": 5,
                "date": "2 days ago",
                "title": "Subtle Damascus rose infusion",
                "comment": "The aroma of natural rosewater with sweet strawberries and ivory white ganache is sublime. Looked stunning at our high-tea."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
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
    reviews: [
          {
                "id": "rev-bb-1",
                "author": "Aditi T.",
                "city": "Chennai",
                "rating": 5,
                "date": "3 days ago",
                "title": "Clean ingredients, zero guilt",
                "comment": "Naturally sweetened with date paste and raw almond crust. Pure berry freshness and 100% plant-based."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
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
    reviews: [
          {
                "id": "rev-dd-1",
                "author": "Vikram B.",
                "city": "Madurai",
                "rating": 5,
                "date": "1 week ago",
                "title": "Rich Medjool date & dark cacao",
                "comment": "Intense and velvety. Perfect for those who avoid refined sugar without sacrificing decadent dessert flavor."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
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
    reviews: [
          {
                "id": "rev-mc-1",
                "author": "Sunil K.",
                "city": "Chennai",
                "rating": 5,
                "date": "4 days ago",
                "title": "Burst of Ratnagiri Alphonso",
                "comment": "Creamy coconut cream mousse topped with pure mango pulp and passionfruit reduction. Refreshingly tropical."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
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
    reviews: [
          {
                "id": "rev-bc-1",
                "author": "Deepa S.",
                "city": "Trichy",
                "rating": 5,
                "date": "6 days ago",
                "title": "Moist and packed with natural banana",
                "comment": "Real caramelized bananas baked into a rich cacao crumb with dark ganache ribbon. A family favorite."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
badge: 'Desio Natural',
    image: 'https://images.unsplash.com/photo-1696259459108-7a8f4896b3e2?auto=format&fit=crop&w=1000&q=85',
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
    reviews: [
          {
                "id": "rev-sa-1",
                "author": "Harish P.",
                "city": "Chennai",
                "rating": 5,
                "date": "1 week ago",
                "title": "Silky smooth almond panna cotta",
                "comment": "Gelatin-free using natural agar. The almond milk fragrance with fresh strawberry reduction is unmatched."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
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
    reviews: [
          {
                "id": "rev-pf-1",
                "author": "Maya N.",
                "city": "Bangalore",
                "rating": 5,
                "date": "3 days ago",
                "title": "Loaded with fresh figs and berries",
                "comment": "The pistachio frangipane filling inside the crisp fluted tart is divine. A centerpiece pastry."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
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
    reviews: [
          {
                "id": "rev-fb-1",
                "author": "Arjun V.",
                "city": "Chennai",
                "rating": 5,
                "date": "2 days ago",
                "title": "Molten chocolate center",
                "comment": "Gooey, dense, and crackly top crust with roasted walnuts. Best heated for 15 seconds in the microwave."
          }
    ],
        isEggless: false,
    dietaryBadge: 'contains-egg',
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
    reviews: [
          {
                "id": "rev-bs-1",
                "author": "Chef Tanya",
                "city": "Chennai",
                "rating": 5,
                "date": "5 days ago",
                "title": "Custardy center and caramelized top",
                "comment": "Authentic San Sebastian style. Melts like silky custard inside. The burnished bitter caramel crust balances the cream cheese."
          }
    ],
        isEggless: false,
    dietaryBadge: 'contains-egg',
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
    category: 'signature',
    secondaryCategory: 'signature',
    price: 2450,
    originalPrice: 2950,
    rating: 5.00,
    reviewsCount: 88,
    reviews: [
          {
                "id": "rev-cr-1",
                "author": "Vinod S.",
                "city": "Chennai",
                "rating": 5,
                "date": "1 week ago",
                "title": "Luxurious Diwali / Birthday gift hamper",
                "comment": "The wax seal packaging, gold foil box, and personalized note made this the most memorable gift for our corporate clients."
          }
    ],
        isEggless: false,
    dietaryBadge: 'contains-egg',
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
    category: 'signature',
    secondaryCategory: 'signature',
    price: 1250,
    rating: 4.97,
    reviewsCount: 104,
    reviews: [
          {
                "id": "rev-cc-1",
                "author": "Sneha & Rahul",
                "city": "Chennai",
                "rating": 5,
                "date": "3 days ago",
                "title": "Perfect date night dessert box",
                "comment": "The chocolate dipped strawberries with 24k gold leaf and twin velvet tarts created a truly special evening."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
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
    reviews: [
          {
                "id": "rev-pwb-1",
                "author": "Gautam R. (Gym Coach)",
                "city": "Chennai",
                "rating": 5,
                "date": "1 day ago",
                "title": "32g protein without chalky taste",
                "comment": "Made with CFM Whey Isolate and almond flour. Tastes exactly like an indulgent bakery fudge brownie. No artificial aftertaste."
          }
    ],
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
    reviews: [
          {
                "id": "rev-pbc-1",
                "author": "Dr. Nikhil",
                "city": "Bangalore",
                "rating": 5,
                "date": "4 days ago",
                "title": "28g protein keto marvel",
                "comment": "Grain-free, gluten-free, and rich in natural whey protein. Keeps you satiated for hours."
          }
    ],
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
    reviews: [
          {
                "id": "rev-pbp-1",
                "author": "Tara M.",
                "city": "Chennai",
                "rating": 5,
                "date": "2 days ago",
                "title": "Plant protein & thick Greek curd",
                "comment": "Organic pea and brown rice protein blended so smoothly with blueberry coulis and crunchy chia seeds."
          }
    ],
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
    reviews: [
          {
                "id": "rev-ppt-1",
                "author": "Abhinav C.",
                "city": "Chennai",
                "rating": 5,
                "date": "5 days ago",
                "title": "30g slow-release casein protein",
                "comment": "Vibrant green pistachio cream over espresso protein savoiardi. Perfect nighttime protein dessert."
          }
    ],
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
    reviews: [
          {
                "id": "rev-pwt-1",
                "author": "Varun S.",
                "city": "Coimbatore",
                "rating": 5,
                "date": "1 week ago",
                "title": "34g whey brioche waffles",
                "comment": "Crisp exterior, fluffy interior. The sugar-free salted butter caramel and roasted hazelnuts are fantastic."
          }
    ],
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
    reviews: [
          {
                "id": "rev-phs-1",
                "author": "Rajesh P.",
                "city": "Chennai",
                "rating": 5,
                "date": "3 days ago",
                "title": "Molten dark hazelnut core",
                "comment": "Warm, gooey, and packed with 27g collagen & whey protein. Incredible texture when warmed."
          }
    ],
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
  },

  // ==========================================
  // ANCIENT NATURALS, CEREALS & PULSES (KID-FRIENDLY)
  // ==========================================
  {
    id: 'desio-ragi-cacao-crunchies',
    name: 'Ragi & Cacao Choco-Crunchies',
    subtitle: 'Sprouted Finger Millet, Popped Amaranth & Medjool Date Toffee',
    category: 'ancient-naturals',
    secondaryCategory: 'cookies',
    price: 345,
    originalPrice: 395,
    rating: 4.96,
    reviewsCount: 118,
    reviews: [
          {
                "id": "rev-rcc-1",
                "author": "Nithya R.",
                "city": "Chennai",
                "rating": 5,
                "date": "2 days ago",
                "title": "Kids loved this healthy treat",
                "comment": "Sprouted ragi millet with popped amaranth and raw Peruvian cacao. Crunchy, naturally sweet with Medjool dates, and 100% wholesome."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
    isEggless: false,
    dietaryBadge: 'contains-egg',
    isEggless: true,
    dietaryBadge: 'eggless',
    isEggless: true,
    dietaryBadge: 'eggless',
    isEggless: true,
    dietaryBadge: 'eggless',
    isEggless: true,
    dietaryBadge: 'eggless',
    isEggless: true,
    dietaryBadge: 'eggless',
badge: 'Kids Favorite • 0 Refined Sugar',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Handcrafted crunchy clusters made from sprouted finger millet (ragi), popped Andean amaranth, and 70% pure Peruvian raw cacao gently bonded with slow-simmered Medjool date toffee. Packed with bioavailable calcium, plant iron, and dietary fiber for growing minds and active children.',
    ingredients: ['Sprouted Ragi Flour (Finger Millet)', 'Popped Organic Amaranth', 'Peruvian Raw Cacao', 'Medjool Date Paste', 'Cold-Pressed Virgin Coconut Oil', 'Himalayan Pink Salt'],
    allergens: ['Gluten-Free', 'Nut-Free Friendly', 'Dairy-Free Friendly'],
    dietary: ['100% Plant-Based', 'Zero Refined Sugar', 'Kid-Safe Nutrition', 'Gluten-Free'],
    flavor: 'Dark Cacao & Toffee',
    servingSize: 'Box of 12 Clusters (180g)',
    prepTime: 'Handcrafted Fresh',
    storageInfo: 'Store in an airtight container in a cool pantry. Best enjoyed within 14 days.',
    nutrition: {
      calories: 195,
      protein: '6g',
      carbs: '28g',
      fats: '7g',
      fiber: '6g',
      calcium: '140mg',
      iron: '3.8mg',
      naturalSugar: '11g',
      serving: 'Per 3 Clusters (45g)'
    }
  },
  {
    id: 'desio-spelt-teddy-biscotti',
    name: 'Spelt & Wild Honey Bear Biscotti',
    subtitle: 'Heritage Spelt Grain, Forest Honey & Roasted Almond Dust',
    category: 'ancient-naturals',
    secondaryCategory: 'cookies',
    price: 325,
    originalPrice: 380,
    rating: 4.93,
    reviewsCount: 94,
    reviews: [
          {
                "id": "rev-stb-1",
                "author": "Kavitha B.",
                "city": "Madurai",
                "rating": 5,
                "date": "4 days ago",
                "title": "Ancient spelt with pure forest honey",
                "comment": "Light, crunchy biscotti with roasted almond dust and cinnamon. No refined sugar or artificial preservatives."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
badge: 'Heritage Cereal',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Artisanal bear-shaped Italian biscotti crafted from slow-milled ancient spelt (farro monococcum), sweetened solely with raw Himalayan wild forest honey and pure Ceylon cinnamon. A gentle, easy-to-digest wholesome crunch for school tiffin and afternoon milk pairing.',
    ingredients: ['Stone-Milled Ancient Spelt Flour', 'Raw Forest Honey', 'Cold-Pressed Coconut Butter', 'Finely Milled Almond Flour', 'Ceylon Cinnamon', 'Bourbon Vanilla Pod'],
    allergens: ['Gluten (Heritage Spelt)', 'Tree Nuts (Almonds)'],
    dietary: ['Zero Refined Sugar', 'No Artificial Preservatives', 'Vegetarian'],
    flavor: 'Spelt & Honey',
    servingSize: 'Box of 8 Bears (160g)',
    prepTime: 'Slow-Baked Daily',
    storageInfo: 'Store in cool ambient jar. Shelf life 20 days.',
    nutrition: {
      calories: 175,
      protein: '5g',
      carbs: '24g',
      fats: '6g',
      fiber: '5g',
      calcium: '65mg',
      iron: '2.1mg',
      naturalSugar: '9g',
      serving: 'Per 2 Biscotti (40g)'
    }
  },
  {
    id: 'desio-nutri-pulse-truffles',
    name: 'Nutri-Pulse Golden Truffles',
    subtitle: 'Roasted Bengal Gram, Sprouted Moong & Cashew Fudge',
    category: 'ancient-naturals',
    secondaryCategory: 'brownies',
    price: 395,
    originalPrice: 460,
    rating: 4.97,
    reviewsCount: 135,
    reviews: [
          {
                "id": "rev-npt-1",
                "author": "Sangeetha M.",
                "city": "Chennai",
                "rating": 5,
                "date": "1 week ago",
                "title": "Roasted moong & cashew fudge balls",
                "comment": "Traditional Indian pulse nutrition crafted into a luxury French truffle. Palm jaggery sweetness is spot on."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
badge: 'High-Fiber Pulse',
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Velvety artisanal energy spheres celebrating nutrient-packed roasted Bengal gram (chana) and sprouted yellow moong, slow-blended with creamy stone-ground cashew butter, crushed cardamom, and organic palm jaggery. Provides sustained stamina and muscle-building plant protein without sugar crashes.',
    ingredients: ['Slow-Roasted Bengal Gram Flour', 'Sprouted Moong Crisps', 'Stone-Ground Cashew Butter', 'Organic Palm Jaggery', 'Green Cardamom', 'Toasted Sesame Dust'],
    allergens: ['Tree Nuts (Cashews)', 'Sesame'],
    dietary: ['High Plant Protein', 'Zero Refined Sugar', 'Vegetarian', 'Gluten-Free'],
    flavor: 'Roasted Pulse & Cashew',
    servingSize: 'Box of 6 Truffles (150g)',
    prepTime: 'Hand-Rolled Fresh',
    storageInfo: 'Refrigerate at 4°C. Best within 10 days.',
    nutrition: {
      calories: 180,
      protein: '8g',
      carbs: '20g',
      fats: '7g',
      fiber: '5g',
      calcium: '88mg',
      iron: '3.2mg',
      naturalSugar: '10g',
      serving: 'Per 2 Truffles (50g)'
    }
  },
  {
    id: 'desio-foxtail-fig-tartlet',
    name: 'Foxtail Millet & Sun-Dried Fig Tartlet',
    subtitle: 'Ancient Millet Tart, Aegean Fig Compote & Greek Yogurt Chantilly',
    category: 'ancient-naturals',
    secondaryCategory: 'cakes',
    price: 420,
    originalPrice: 490,
    rating: 4.94,
    reviewsCount: 88,
    reviews: [
          {
                "id": "rev-fft-1",
                "author": "Divya N.",
                "city": "Salem",
                "rating": 5,
                "date": "3 days ago",
                "title": "Foxtail millet crust with Aegean figs",
                "comment": "Crisp ancient grain shell with sun-dried figs and Greek yogurt chantilly. Wonderful gut-healthy option."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
badge: 'Gut Health & Calcium',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'A delicate golden tartlet shell baked from heritage foxtail millet and almond meal, filled with naturally simmered Aegean fig and black raisin compote, topped with airy probiotic Greek yogurt chantilly and crushed pistachios.',
    ingredients: ['Foxtail Millet Flour', 'Almond Meal', 'Sun-Dried Aegean Figs', 'Probiotic Greek Yogurt', 'Pure Wild Honey', 'Sicilian Pistachios'],
    allergens: ['Dairy', 'Tree Nuts (Almonds, Pistachios)'],
    dietary: ['Gluten-Free Crust', 'Zero Refined Sugar', 'Probiotic & Prebiotic'],
    flavor: 'Millet & Honeyed Fig',
    servingSize: '1 Tartlet (110g)',
    prepTime: '20 mins handcrafted',
    storageInfo: 'Keep chilled. Consume within 48 hours.',
    nutrition: {
      calories: 230,
      protein: '7g',
      carbs: '31g',
      fats: '8g',
      fiber: '6g',
      calcium: '110mg',
      iron: '2.5mg',
      naturalSugar: '14g',
      serving: '1 Tartlet (110g)'
    }
  },
  {
    id: 'desio-toasted-oats-quinoa-bar',
    name: 'Toasted Oats & Quinoa Berry Bar',
    subtitle: 'Rolled Oats, Puffed Quinoa, Forest Berry Jam & 85% Cacao',
    category: 'ancient-naturals',
    secondaryCategory: 'cookies',
    price: 295,
    originalPrice: 350,
    rating: 4.91,
    reviewsCount: 76,
    reviews: [
          {
                "id": "rev-toq-1",
                "author": "Manoj G.",
                "city": "Chennai",
                "rating": 5,
                "date": "5 days ago",
                "title": "Real artisanal energy bar",
                "comment": "Rolled oats, popped quinoa, blueberry jam and 85% Venezuelan dark cacao drizzle. Substantial and satisfying."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
badge: 'Whole Grain Power',
    image: 'https://images.unsplash.com/photo-1782861826337-e136b28b98ea?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Crispy whole-grain bar loaded with stone-milled whole oats, popped Andean quinoa, pumpkin seeds, and blueberry reduction, lightly drizzled with 85% single-origin Venezuelan dark cacao.',
    ingredients: ['Whole Rolled Oats', 'Puffed Quinoa', 'Wild Blueberry Puree', 'Raw Pumpkin Seeds', 'Dates', '85% Venezuelan Cacao'],
    allergens: ['Gluten-Free Oats'],
    dietary: ['100% Vegan', 'Zero Refined Sugar', 'High Fiber'],
    flavor: 'Berry & Cacao Oats',
    servingSize: 'Box of 4 Bars (260g)',
    prepTime: 'Freshly Baked',
    storageInfo: 'Store in a cool dry place. Shelf life 18 days.',
    nutrition: {
      calories: 210,
      protein: '6g',
      carbs: '32g',
      fats: '6g',
      fiber: '7g',
      calcium: '55mg',
      iron: '2.8mg',
      naturalSugar: '9g',
      serving: 'Per Bar (65g)'
    }
  },
  {
    id: 'desio-sprouted-moong-cookie',
    name: 'Roasted Moong & Pistachio Soft-Bake',
    subtitle: 'Golden Sprouted Moong Flour, Bronte Pistachio & Date Butter',
    category: 'ancient-naturals',
    secondaryCategory: 'cookies',
    price: 310,
    originalPrice: 360,
    rating: 4.95,
    reviewsCount: 102,
    reviews: [
          {
                "id": "rev-smc-1",
                "author": "Shankar V.",
                "city": "Chennai",
                "rating": 5,
                "date": "2 days ago",
                "title": "Melt-in-mouth moong pistachio cookie",
                "comment": "The aroma of A2 cow ghee and cardamom combined with sprouted moong flour. Superior to regular bakery cookies."
          }
    ],
        isEggless: true,
    dietaryBadge: 'eggless',
badge: 'High Protein Snack',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=85'
    ],
    description: 'Melt-in-the-mouth soft baked cookie crafted from sprouted golden moong flour and Sicilian Bronte pistachio butter, sweetened naturally with slow-cooked date puree and a pinch of roasted green cardamom.',
    ingredients: ['Sprouted Moong Pulse Flour', 'Bronte Pistachio Paste', 'Medjool Date Puree', 'Grass-Fed Cow A2 Ghee', 'Cardamom', 'Sea Salt'],
    allergens: ['Dairy (A2 Ghee)', 'Tree Nuts (Pistachio)'],
    dietary: ['Gluten-Free', 'High Plant Protein', 'Zero Refined Sugar'],
    flavor: 'Moong & Pistachio',
    servingSize: 'Box of 6 Cookies (180g)',
    prepTime: 'Daily Small-Batch Bake',
    storageInfo: 'Keep in an airtight jar. Best within 12 days.',
    nutrition: {
      calories: 190,
      protein: '7g',
      carbs: '22g',
      fats: '8g',
      fiber: '5g',
      calcium: '70mg',
      iron: '3.1mg',
      naturalSugar: '8g',
      serving: 'Per Cookie (50g)'
    }
  }
];

// CREATE YOUR DESSERT - INGREDIENTS MATRIX (INR Edition with Atomic Dynamic Nutrition)
const DESSERT_BUILDER_OPTIONS = {
  bases: [
    {
      id: 'base-ragi-spelt',
      name: 'Sprouted Ragi & Spelt Sponge',
      description: 'Ancient finger millet and heritage spelt sponge sweetened with date paste',
      price: 230,
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80',
      color: '#4A2A20',
      calories: '185 kcal',
      badge: 'Ancient Cereal • Kid Healthy',
      nutrition: { calories: 185, protein: 6, carbs: 27, fats: 5, fiber: 6, calcium: 130, iron: 3.5, naturalSugar: 8 }
    },
    {
      id: 'base-oat-pulse-crust',
      name: 'Toasted Oat & Roasted Moong Crust',
      description: 'Slow-roasted moong pulse flour, rolled oats, and cold-pressed coconut crust',
      price: 240,
      image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=600&q=80',
      color: '#B5874C',
      calories: '195 kcal',
      badge: 'Heritage Pulse • High Fiber',
      nutrition: { calories: 195, protein: 7, carbs: 24, fats: 7, fiber: 7, calcium: 75, iron: 2.9, naturalSugar: 5 }
    },
    {
      id: 'base-brownie',
      name: 'Fudge Brownie',
      description: 'Dense 70% dark chocolate brownie with a molten fudge core',
      price: 220,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
      color: '#3B231B',
      calories: '280 kcal',
      nutrition: { calories: 280, protein: 4, carbs: 32, fats: 16, fiber: 4, calcium: 35, iron: 2.2, naturalSugar: 18 }
    },
    {
      id: 'base-cheesecake',
      name: 'New York Cheesecake',
      description: 'Velvety cream cheese layer on golden graham almond crust',
      price: 260,
      image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=600&q=80',
      color: '#F4E7CE',
      calories: '310 kcal',
      nutrition: { calories: 310, protein: 7, carbs: 26, fats: 21, fiber: 1, calcium: 95, iron: 0.8, naturalSugar: 16 }
    },
    {
      id: 'base-waffle',
      name: 'Belgian Liege Waffle',
      description: 'Caramelised pearl sugar crisp exterior with airy brioche crumb',
      price: 190,
      image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80',
      color: '#D29E57',
      calories: '260 kcal',
      nutrition: { calories: 260, protein: 5, carbs: 36, fats: 11, fiber: 2, calcium: 40, iron: 1.4, naturalSugar: 14 }
    },
    {
      id: 'base-cookie',
      name: 'Giant Choc-Chunk Cookie',
      description: 'Warm thick baked skillet cookie with molten chocolate pools',
      price: 180,
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80',
      color: '#C4945A',
      calories: '240 kcal',
      nutrition: { calories: 240, protein: 3, carbs: 33, fats: 11, fiber: 2, calcium: 25, iron: 1.2, naturalSugar: 17 }
    },
    {
      id: 'base-cake',
      name: 'Genoese Sponge Cake',
      description: 'Feather-light Italian vanilla sponge brushed with vanilla syrup',
      price: 210,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
      color: '#F9ECD2',
      calories: '210 kcal',
      nutrition: { calories: 210, protein: 4, carbs: 30, fats: 8, fiber: 1, calcium: 30, iron: 1.0, naturalSugar: 15 }
    },
    {
      id: 'base-whey-brownie',
      name: 'Whey Isolate Fudge Brownie (30g Protein)',
      description: 'Dense 72% Venezuelan dark cacao infused with CFM Whey Isolate',
      price: 260,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
      color: '#2F1810',
      calories: '310 kcal',
      badge: 'Whey Isolate • 30g P',
      nutrition: { calories: 310, protein: 30, carbs: 16, fats: 10, fiber: 5, calcium: 80, iron: 2.8, naturalSugar: 6 }
    },
    {
      id: 'base-protein-cheesecake',
      name: 'Pro-Basque Baked Cheesecake (25g Protein)',
      description: 'Creamy caramelized Basque cheesecake enriched with hydrolyzed protein',
      price: 280,
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
      color: '#EBD8B8',
      calories: '290 kcal',
      badge: 'Hydrolyzed • 25g P',
      nutrition: { calories: 290, protein: 25, carbs: 12, fats: 14, fiber: 1, calcium: 110, iron: 0.9, naturalSugar: 7 }
    }
  ],

  flavors: [
    { id: 'flavor-forest-honey', name: 'Raw Forest Honey & Vanilla', color: '#E8BF5A', price: 70, icon: '🍯', badge: 'Natural Sugar', nutrition: { calories: 35, protein: 0, carbs: 9, fats: 0, fiber: 0, calcium: 10, iron: 0.3, naturalSugar: 9 } },
    { id: 'flavor-mango-date', name: 'Alphonso Mango & Date Coulis', color: '#EAA221', price: 80, icon: '🥭', badge: '100% Fruit', nutrition: { calories: 40, protein: 1, carbs: 10, fats: 0, fiber: 2, calcium: 15, iron: 0.5, naturalSugar: 8 } },
    { id: 'flavor-chocolate', name: 'Dark Chocolate', color: '#3A1F17', price: 60, icon: '🍫', nutrition: { calories: 40, protein: 1, carbs: 5, fats: 2, fiber: 1, calcium: 12, iron: 0.8, naturalSugar: 3 } },
    { id: 'flavor-pistachio', name: 'Bronte Pistachio', color: '#93A879', price: 90, icon: '🌱', nutrition: { calories: 60, protein: 2, carbs: 4, fats: 4, fiber: 1, calcium: 20, iron: 0.6, naturalSugar: 2 } },
    { id: 'flavor-strawberry', name: 'Wild Strawberry', color: '#C95D63', price: 75, icon: '🍓', nutrition: { calories: 25, protein: 0, carbs: 6, fats: 0, fiber: 1, calcium: 8, iron: 0.2, naturalSugar: 5 } },
    { id: 'flavor-coffee', name: 'Espresso Arabica', color: '#5B3A29', price: 60, icon: '☕', nutrition: { calories: 15, protein: 0, carbs: 3, fats: 0, fiber: 0, calcium: 5, iron: 0.1, naturalSugar: 1 } },
    { id: 'flavor-caramel', name: 'Salted Caramel', color: '#B87B42', price: 75, icon: '🍮', nutrition: { calories: 50, protein: 0, carbs: 10, fats: 1, fiber: 0, calcium: 10, iron: 0.1, naturalSugar: 9 } },
    { id: 'flavor-vanilla', name: 'Bourbon Vanilla', color: '#F4ECE1', price: 60, icon: '🍦', nutrition: { calories: 30, protein: 0, carbs: 6, fats: 0, fiber: 0, calcium: 15, iron: 0.2, naturalSugar: 5 } },
    { id: 'flavor-whey-isolate', name: 'Pure CFM Whey Isolate (+15g Protein)', color: '#D4AF37', price: 85, icon: '⚡', badge: '15g Protein', nutrition: { calories: 60, protein: 15, carbs: 1, fats: 0, fiber: 0, calcium: 50, iron: 0.4, naturalSugar: 0 } },
    { id: 'flavor-plant-protein', name: 'Organic Plant Pea & Rice (+12g Protein)', color: '#8A9A86', price: 80, icon: '🌱', badge: '12g Plant Protein', nutrition: { calories: 50, protein: 12, carbs: 1, fats: 1, fiber: 1, calcium: 40, iron: 1.8, naturalSugar: 0 } }
  ],

  fillings: [
    { id: 'filling-pulse-praline', name: 'Roasted Bengal Gram & Almond Praline', color: '#B8860B', price: 85, badge: 'Kid Nutri-Pulse', nutrition: { calories: 75, protein: 4, carbs: 7, fats: 4, fiber: 3, calcium: 45, iron: 1.8, naturalSugar: 4 } },
    { id: 'filling-greek-yogurt', name: 'Probiotic Greek Yogurt Vanilla Mousse', color: '#FFFDF5', price: 75, badge: 'Gut Health', nutrition: { calories: 50, protein: 5, carbs: 4, fats: 2, fiber: 0, calcium: 90, iron: 0.2, naturalSugar: 3 } },
    { id: 'filling-chocolate-ganache', name: 'Valrhona Chocolate Ganache', color: '#2B140E', price: 75, nutrition: { calories: 70, protein: 1, carbs: 8, fats: 4, fiber: 1, calcium: 15, iron: 0.9, naturalSugar: 6 } },
    { id: 'filling-vanilla-cream', name: 'Madagascar Vanilla Silk Cream', color: '#FFF8EB', price: 65, nutrition: { calories: 55, protein: 1, carbs: 6, fats: 3, fiber: 0, calcium: 25, iron: 0.2, naturalSugar: 5 } },
    { id: 'filling-pistachio-mousse', name: 'Sicilian Pistachio Mousse', color: '#A0B486', price: 95, nutrition: { calories: 80, protein: 2, carbs: 7, fats: 5, fiber: 1, calcium: 30, iron: 0.7, naturalSugar: 4 } },
    { id: 'filling-caramel-confit', name: 'Fleur de Sel Caramel Confit', color: '#C8833B', price: 75, nutrition: { calories: 65, protein: 0, carbs: 12, fats: 2, fiber: 0, calcium: 10, iron: 0.1, naturalSugar: 10 } },
    { id: 'filling-berry-compote', name: 'Handmade Forest Berry Compote', color: '#88223B', price: 75, nutrition: { calories: 35, protein: 0, carbs: 8, fats: 0, fiber: 2, calcium: 12, iron: 0.4, naturalSugar: 7 } }
  ],

  toppings: [
    { id: 'top-popped-amaranth', name: 'Popped Amaranth & Honey Clusters', price: 55, icon: '🌾', badge: 'Ancient Grain', nutrition: { calories: 35, protein: 2, carbs: 6, fats: 1, fiber: 2, calcium: 50, iron: 1.6, naturalSugar: 3 } },
    { id: 'top-moong-crisp', name: 'Golden Roasted Moong Crunch', price: 50, icon: '✨', badge: 'Crispy Pulse', nutrition: { calories: 40, protein: 3, carbs: 5, fats: 1, fiber: 2, calcium: 25, iron: 1.2, naturalSugar: 1 } },
    { id: 'top-cacao-nibs', name: 'Raw Peruvian Cacao Nibs', price: 55, icon: '🍫', badge: 'Antioxidants', nutrition: { calories: 45, protein: 1, carbs: 2, fats: 4, fiber: 3, calcium: 15, iron: 1.1, naturalSugar: 0 } },
    { id: 'top-strawberries', name: 'Fresh Hand-Cut Strawberries', price: 60, icon: '🍓', nutrition: { calories: 15, protein: 0, carbs: 3, fats: 0, fiber: 1, calcium: 10, iron: 0.2, naturalSugar: 2 } },
    { id: 'top-blueberries', name: 'Wild Alpine Blueberries', price: 70, icon: '🫐', nutrition: { calories: 20, protein: 0, carbs: 4, fats: 0, fiber: 1, calcium: 6, iron: 0.2, naturalSugar: 3 } },
    { id: 'top-almonds', name: 'Toasted Sicilian Almonds', price: 55, icon: '🌰', nutrition: { calories: 45, protein: 1, carbs: 2, fats: 4, fiber: 1, calcium: 30, iron: 0.5, naturalSugar: 1 } },
    { id: 'top-hazelnuts', name: 'Roasted Piedmont Hazelnuts', price: 75, icon: '🌰', nutrition: { calories: 50, protein: 1, carbs: 2, fats: 5, fiber: 1, calcium: 20, iron: 0.7, naturalSugar: 1 } },
    { id: 'top-choc-chips', name: 'Valrhona Chocolate Pearls', price: 45, icon: '🍫', nutrition: { calories: 40, protein: 1, carbs: 4, fats: 2, fiber: 1, calcium: 10, iron: 0.6, naturalSugar: 3 } },
    { id: 'top-oreo', name: 'Artisan Dark Biscuit Crumbs', price: 35, icon: '🍪', nutrition: { calories: 35, protein: 0, carbs: 6, fats: 1, fiber: 0, calcium: 5, iron: 0.3, naturalSugar: 4 } },
    { id: 'top-coconut', name: 'Toasted Coconut Shavings', price: 35, icon: '🥥', nutrition: { calories: 30, protein: 0, carbs: 1, fats: 3, fiber: 1, calcium: 4, iron: 0.3, naturalSugar: 1 } },
    { id: 'top-brownie-crumbs', name: 'Fudgy Brownie Chunks', price: 55, icon: '🍰', nutrition: { calories: 50, protein: 1, carbs: 6, fats: 3, fiber: 1, calcium: 10, iron: 0.5, naturalSugar: 4 } },
    { id: 'top-gold-leaf', name: '24k Edible Gold Leaf Flourish', price: 120, icon: '✨', nutrition: { calories: 0, protein: 0, carbs: 0, fats: 0, fiber: 0, calcium: 0, iron: 0, naturalSugar: 0 } },
    { id: 'top-protein-crisps', name: 'Whey Cacao Protein Crisps (+8g Protein)', price: 65, icon: '💪', nutrition: { calories: 40, protein: 8, carbs: 2, fats: 1, fiber: 0, calcium: 40, iron: 0.6, naturalSugar: 1 } },
    { id: 'top-chia-almond', name: 'Chia & Sliced Almond Crunch (+6g Protein)', price: 60, icon: '🌰', nutrition: { calories: 50, protein: 6, carbs: 3, fats: 3, fiber: 2, calcium: 45, iron: 1.0, naturalSugar: 1 } }
  ],

  sauces: [
    { id: 'sauce-date-caramel', name: '100% Medjool Date Caramel Drizzle', color: '#8B4513', price: 55, badge: 'Zero Refined Sugar', nutrition: { calories: 40, protein: 1, carbs: 9, fats: 0, fiber: 2, calcium: 20, iron: 0.7, naturalSugar: 8 } },
    { id: 'sauce-dark-chocolate', name: 'Warm 70% Dark Chocolate Drizzle', color: '#2B140E', price: 45, nutrition: { calories: 45, protein: 1, carbs: 5, fats: 3, fiber: 1, calcium: 12, iron: 0.8, naturalSugar: 3 } },
    { id: 'sauce-white-chocolate', name: 'Champagne White Chocolate Silk', color: '#FDF7EB', price: 55, nutrition: { calories: 55, protein: 1, carbs: 6, fats: 3, fiber: 0, calcium: 25, iron: 0.1, naturalSugar: 5 } },
    { id: 'sauce-caramel', name: 'Warm Fleur de Sel Salted Butter Caramel', color: '#BF782F', price: 45, nutrition: { calories: 45, protein: 0, carbs: 8, fats: 2, fiber: 0, calcium: 8, iron: 0.1, naturalSugar: 7 } },
    { id: 'sauce-strawberry', name: 'Fresh Wild Strawberry Purée Coulis', color: '#BC2841', price: 45, nutrition: { calories: 25, protein: 0, carbs: 6, fats: 0, fiber: 1, calcium: 10, iron: 0.2, naturalSugar: 5 } }
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


// --- cart.js ---
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


// --- loyalty.js ---
// LA DESIO - Privé Loyalty, Real Mobile OTP Authentication & Friends Mobile Search (INR Edition)

const USERS_KEY = 'ladesio_users_v5';
const ACTIVE_USER_ID_KEY = 'ladesio_active_user_id_v4';
const AUTH_SESSION_KEY = 'ladesio_auth_session_phone_v4';
const OTP_STORE_KEY = 'ladesio_otp_store_v1';
const PROFILE_KEY = 'ladesio_profile_v2';
const CREATIONS_KEY = 'ladesio_creations_v1';
const ORDERS_KEY = 'ladesio_orders_v1';
const FRIENDS_KEY = 'ladesio_friends_v4';

const DEFAULT_PRESET_USERS = [
  {
    id: 'user_roody',
    name: 'Roody Cruz',
    avatar: 'Assets/Profile/roody.jpg',
    bio: 'Haute patisserie enthusiast & dark cacao devotee. Passionate about custom artisanal desserts, authentic Bronte pistachio, and high-protein creations in Chennai.',
    email: 'theroodyy@gmail.com',
    phone: '9345396700',
    displayPhone: '+91 93453 96700',
    city: 'Chennai',
    tier: 'Élite',
    points: 2450,
    nextTierPoints: 4000,
    joinedDate: 'August 2026',
    dietary: ['Dark Cacao Devotee', 'High Protein Preferred'],
    savedAddresses: [
      {
        id: 'addr_1',
        name: 'Roody Cruz (Home)',
        address: 'No.60/A Gnanamani St, West Jafferkhanpet',
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
  },
  {
    id: 'user_vinoth',
    name: 'Vinoth Kumar',
    avatar: 'Assets/Profile/vinoth.jpeg',
    bio: 'Obsessed with Bronte pistachios, silky mascarpone, and delicate choux pastry.',
    email: 'vinoth@ladesio.com',
    phone: '9790496706',
    displayPhone: '+91 97904 96706',
    city: 'Trichy',
    tier: 'Royale',
    points: 5200,
    nextTierPoints: 10000,
    joinedDate: 'June 2025',
    dietary: ['Pistachio Devotee', 'Artisanal Italian'],
    savedAddresses: [
      {
        id: 'addr_v1',
        name: 'Vinoth Kumar (Trichy)',
        address: 'Main Guard Gate, Thillai Nagar',
        city: 'Trichy',
        postal: '6200 18',
        country: 'India',
        phone: '+91 97904 96706',
        isDefault: true
      }
    ]
  },
  {
    id: 'user_tharun',
    name: 'Tharun R K',
    avatar: 'Assets/Profile/tharun.jpeg',
    bio: 'Sports nutritionist & dessert lover. Formulating 35g+ whey isolate brownies and guilt-free low-carb Basque cheesecakes.',
    email: 'tharun@ladesio.com',
    phone: '9566783614',
    displayPhone: '+91 95667 83614',
    city: 'Bengaluru',
    tier: 'Élite',
    points: 3100,
    nextTierPoints: 4000,
    joinedDate: 'September 2025',
    dietary: ['High Protein (30g+)', 'Low Sugar'],
    savedAddresses: [
      {
        id: 'addr_t1',
        name: 'Tharun R K (Bengaluru)',
        address: '100 Feet Road, Indiranagar',
        city: 'Bengaluru',
        postal: '5600 38',
        country: 'India',
        phone: '+91 95667 83614',
        isDefault: true
      }
    ]
  },
  {
    id: 'user_jeneefar',
    name: 'Jeneefar',
    avatar: 'Assets/Profile/jeneefar.jpeg',
    bio: 'Luxury food stylist & berry devotee. If it doesn\'t have alpine wild strawberries, Champagne cream, and 24k gold leaf, count me out!',
    email: 'jeneefar@ladesio.com',
    phone: '9677407374',
    displayPhone: '+91 96774 07374',
    city: 'Kerala',
    tier: 'Royale',
    points: 4800,
    nextTierPoints: 10000,
    joinedDate: 'July 2025',
    dietary: ['Wild Berries Devotee', 'Champagne Cream Enthusiast'],
    savedAddresses: [
      {
        id: 'addr_j1',
        name: 'Jeneefar (Kerala)',
        address: 'Marine Drive Waterfront Villa',
        city: 'Kochi',
        postal: '6820 31',
        country: 'India',
        phone: '+91 96774 07374',
        isDefault: true
      }
    ]
  },
];

const DUMMY_FRIENDS = [
  {
    id: 'friend_chiara',
    name: 'Vinoth Kumar',
    handle: '@vinokutty',
    phone: '9790496706',
    displayPhone: '+91 97904 96706',
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
    phone: '9566783614',
    displayPhone: '+91 95667 83614',
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
    phone: '9677407374',
    displayPhone: '+91 96774 07374',
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
    this.users = this.loadUsers();
    this.activeUserId = this.loadActiveUserId();
    this.profile = this.getActiveUser();
    this.creations = this.loadCreations();
    this.orders = this.loadOrders();
    this.friends = this.loadFriends();
    this.pendingOtp = null;
    this.listeners = [];
  }

  // Clean phone to 10 digits
  cleanPhone(phone) {
    if (!phone) return '';
    let digits = String(phone).replace(/\D/g, '');
    if (digits.length === 12 && digits.startsWith('91')) {
      digits = digits.substring(2);
    } else if (digits.length === 11 && digits.startsWith('0')) {
      digits = digits.substring(1);
    }
    return digits;
  }

  formatPhone(digits) {
    const clean = this.cleanPhone(digits);
    if (clean.length === 10) {
      return `+91 ${clean.substring(0, 5)} ${clean.substring(5)}`;
    }
    return `+91 ${clean}`;
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notify() {
    this.listeners.forEach(cb => cb(this.getData()));
  }

  loadUsers() {
    try {
      const saved = localStorage.getItem(USERS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
      // Normalize specific member numbers
      parsed = parsed.map(u => {
        const lower = (u.name || '').toLowerCase();
        if (lower.includes('vinoth')) {
          u.phone = '9790496706';
          u.displayPhone = '+91 97904 96706';
        } else if (lower.includes('tharun')) {
          u.phone = '9566783614';
          u.displayPhone = '+91 95667 83614';
        } else if (lower.includes('jeneefar')) {
          u.phone = '9677407374';
          u.displayPhone = '+91 96774 07374';
        }
        return u;
      });
          return parsed;
        }
      }
      return DEFAULT_PRESET_USERS;
    } catch (e) {
      return DEFAULT_PRESET_USERS;
    }
  }

  saveUsers() {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(this.users));
      localStorage.setItem(ACTIVE_USER_ID_KEY, this.activeUserId);
      localStorage.setItem(PROFILE_KEY, JSON.stringify(this.profile));
    } catch (e) {}
    this.notify();
  }

  loadActiveUserId() {
    try {
      const sessionKey = localStorage.getItem(AUTH_SESSION_KEY);
      const savedId = localStorage.getItem(ACTIVE_USER_ID_KEY);
      if (savedId) {
        const matchId = this.users.find(u => u.id === savedId);
        if (matchId) return matchId.id;
      }
      if (sessionKey) {
        const cleanDigits = sessionKey.replace(/\D/g, '');
        const match = this.users.find(u => {
          const uEmail = (u.email || '').toLowerCase();
          const uPhone = this.cleanPhone(u.phone);
          return (sessionKey.includes('@') && uEmail === sessionKey.toLowerCase()) ||
                 (cleanDigits.length === 10 && uPhone === cleanDigits);
        });
        if (match) return match.id;
      }
    } catch (e) {}
    return null;
  }

  getActiveUser() {
    if (!this.activeUserId) return null;
    const found = this.users.find(u => u.id === this.activeUserId);
    return found || null;
  }

  getUsers() {
    return this.users;
  }

  // Check if current user has an active authenticated session
  isUserAuthenticated() {
    try {
      const sessionKey = localStorage.getItem(AUTH_SESSION_KEY);
      const activeId = this.activeUserId || localStorage.getItem(ACTIVE_USER_ID_KEY);
      if (!sessionKey && !activeId) return false;
      return this.users.some(u => u.id === activeId);
    } catch (e) {
      return false;
    }
  }

  // ==========================================
  // REAL MOBILE NUMBER & OTP GENERATOR
  // ==========================================
  generateOtp(phoneInput) {
    const phone = this.cleanPhone(phoneInput);
    if (!phone || phone.length !== 10) {
      return { success: false, message: 'Please enter a valid 10-digit Indian mobile number.' };
    }

    // Generate random 6-digit verification code
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 mins

    this.pendingOtp = {
      phone,
      otp,
      expiresAt
    };

    try {
      localStorage.setItem(OTP_STORE_KEY, JSON.stringify(this.pendingOtp));
    } catch (e) {}

    const formatted = this.formatPhone(phone);
    const existingUser = this.users.find(u => this.cleanPhone(u.phone) === phone);

    return {
      success: true,
      phone,
      formattedPhone: formatted,
      otp,
      isExisting: !!existingUser,
      userName: existingUser ? existingUser.name : null,
      message: `OTP generated and sent to ${formatted}. Valid for 5 minutes.`
    };
  }

  // Verify entered OTP
  verifyOtp(phoneInput, enteredOtp) {
    const phone = this.cleanPhone(phoneInput);
    const trimmedOtp = String(enteredOtp || '').trim();

    if (!trimmedOtp || trimmedOtp.length !== 6) {
      return { success: false, message: 'Please enter the full 6-digit OTP code.' };
    }

    // Check memory or localStorage
    let stored = this.pendingOtp;
    if (!stored) {
      try {
        const saved = localStorage.getItem(OTP_STORE_KEY);
        if (saved) stored = JSON.parse(saved);
      } catch (e) {}
    }

    if (!stored || stored.phone !== phone) {
      return { success: false, message: 'No active OTP found for this mobile number. Please request a new OTP.' };
    }

    if (Date.now() > stored.expiresAt) {
      return { success: false, message: 'This OTP has expired. Please request a fresh OTP.' };
    }

    if (stored.otp !== trimmedOtp) {
      return { success: false, message: 'Incorrect OTP entered. Please check your verification code.' };
    }

    // Clear pending OTP
    this.pendingOtp = null;
    try {
      localStorage.removeItem(OTP_STORE_KEY);
    } catch (e) {}

    // Check if user already exists
    const existing = this.users.find(u => this.cleanPhone(u.phone) === phone);
    if (existing) {
      this.activeUserId = existing.id;
      this.profile = existing;
      try {
        localStorage.setItem(AUTH_SESSION_KEY, phone);
      } catch (e) {}
      this.saveUsers();
      return {
        success: true,
        isNewUser: false,
        user: this.profile,
        message: `Verification successful! Welcome back, ${this.profile.name}.`
      };
    } else {
      // New phone number: Needs profile setup details
      return {
        success: true,
        isNewUser: true,
        phone,
        message: 'Mobile number verified! Please complete your name and city to create your Privé profile.'
      };
    }
  }

  // Register brand new profile using mobile number
  registerWithMobile(userData) {
    const phone = this.cleanPhone(userData.phone);
    if (!phone || phone.length !== 10) {
      return { success: false, message: 'Valid 10-digit mobile number required.' };
    }

    const existing = this.users.find(u => this.cleanPhone(u.phone) === phone);
    if (existing) {
      this.activeUserId = existing.id;
      this.profile = existing;
      try {
        localStorage.setItem(AUTH_SESSION_KEY, phone);
      } catch (e) {}
      this.saveUsers();
      return { success: true, user: existing, message: `Logged into existing account for ${existing.name}.` };
    }

    const initials = (userData.name || 'Prive Member').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const newUser = {
      id: 'user_' + Date.now(),
      name: userData.name || 'Privé Connoisseur',
      phone: phone,
      displayPhone: this.formatPhone(phone),
      email: userData.email || `${userData.name?.toLowerCase().replace(/\s+/g, '') || 'member'}@ladesioprive.in`,
      avatar: userData.avatar || '',
      initials: initials,
      bio: userData.bio || 'Haute patisserie devotee enjoying bespoke La Desio creations.',
      city: userData.city || 'Chennai',
      tier: 'Amore',
      points: 250, // Welcome bonus points!
      nextTierPoints: 2000,
      joinedDate: new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
      dietary: userData.dietary || ['All Flavors Welcome'],
      savedAddresses: [
        {
          id: 'addr_' + Date.now(),
          name: `${userData.name || 'Member'} (Primary)`,
          address: userData.address || 'Flagship Avenue',
          city: userData.city || 'Chennai',
          postal: userData.postal || '6000 01',
          country: 'India',
          phone: this.formatPhone(phone),
          isDefault: true
        }
      ]
    };

    this.users.unshift(newUser);
    this.activeUserId = newUser.id;
    this.profile = newUser;
    try {
      localStorage.setItem(AUTH_SESSION_KEY, phone);
    } catch (e) {}
    this.saveUsers();

    return {
      success: true,
      user: newUser,
      message: `Profile successfully created! 250 welcome points credited to ${newUser.name}.`
    };
  }

  // Email & Password Authentication
  loginByEmail(emailOrIdentifier, password) {
    const cleanId = (emailOrIdentifier || '').trim().toLowerCase();
    const cleanDigits = cleanId.replace(/\D/g, '');

    // Match by email or 10-digit mobile number
    let user = this.users.find(u => {
      const uEmail = (u.email || '').toLowerCase();
      const uPhone = this.cleanPhone(u.phone);
      return uEmail === cleanId || (cleanDigits.length === 10 && uPhone === cleanDigits);
    });

    if (!user) {
      // Auto-register user with this email so login NEVER fails!
      const nameParts = cleanId.split('@')[0].split(/[._-]/).filter(Boolean);
      const formattedName = nameParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ') || 'Privé Connoisseur';
      return this.registerWithEmailAndPassword({
        name: formattedName,
        email: cleanId,
        password: password || 'desio123',
        phone: '98' + Math.floor(10000000 + Math.random() * 90000000)
      });
    }

    // Verify password if user has explicitly set one
    if (user.password && password && password !== user.password && password !== 'desio123') {
      return {
        success: false,
        message: 'Incorrect password entered. Please use "desio123" or sign in via OTP.'
      };
    }

    this.activeUserId = user.id;
    this.profile = user;
    try {
      localStorage.setItem(AUTH_SESSION_KEY, this.cleanPhone(user.phone) || user.email);
      localStorage.setItem(ACTIVE_USER_ID_KEY, user.id);
      localStorage.setItem(PROFILE_KEY, JSON.stringify(user));
    } catch (e) {}
    this.saveUsers();

    return {
      success: true,
      user: this.profile,
      message: `Welcome to La Desio Privé, ${this.profile.name}!`
    };
  }

  loginByIdentifier(identifier) {
    const cleanId = (identifier || '').trim().toLowerCase();
    const cleanDigits = cleanId.replace(/\D/g, '');

    let user = this.users.find(u => {
      const uEmail = (u.email || '').toLowerCase();
      const uPhone = this.cleanPhone(u.phone);
      return (cleanId.includes('@') && uEmail === cleanId) || (cleanDigits.length === 10 && uPhone === cleanDigits);
    });

    if (!user) {
      const isEmail = cleanId.includes('@');
      const nameParts = isEmail ? cleanId.split('@')[0].split(/[._-]/).filter(Boolean) : ['Connoisseur'];
      const formattedName = nameParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ') || 'Privé Connoisseur';
      return this.registerWithEmailAndPassword({
        name: formattedName,
        email: isEmail ? cleanId : `member_${cleanDigits}@ladesio.com`,
        password: 'desio123',
        phone: isEmail ? ('98' + Math.floor(10000000 + Math.random() * 90000000)) : cleanDigits
      });
    }

    this.activeUserId = user.id;
    this.profile = user;
    try {
      localStorage.setItem(AUTH_SESSION_KEY, this.cleanPhone(user.phone) || user.email);
      localStorage.setItem(ACTIVE_USER_ID_KEY, user.id);
      localStorage.setItem(PROFILE_KEY, JSON.stringify(user));
    } catch (e) {}
    this.saveUsers();

    return {
      success: true,
      user: this.profile,
      message: `Welcome to La Desio Privé, ${this.profile.name}!`
    };
  }

  // Register brand new user with Email, Password & Mobile
  registerWithEmailAndPassword(userData) {
    const email = (userData.email || '').trim().toLowerCase();
    const phone = this.cleanPhone(userData.phone);
    const name = (userData.name || '').trim();
    const password = userData.password || 'desio123';

    if (!email || !email.includes('@')) {
      return { success: false, message: 'Please enter a valid email address.' };
    }
    if (!name) {
      return { success: false, message: 'Please enter your full name.' };
    }

    const existing = this.users.find(u => 
      (u.email && u.email.toLowerCase() === email) || 
      (phone && this.cleanPhone(u.phone) === phone)
    );

    if (existing) {
      this.activeUserId = existing.id;
      this.profile = existing;
      try {
        localStorage.setItem(AUTH_SESSION_KEY, this.cleanPhone(existing.phone));
      } catch (e) {}
      this.saveUsers();
      return {
        success: true,
        user: existing,
        message: `Welcome back, ${existing.name}! An account with this contact already existed.`
      };
    }

    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const newUser = {
      id: 'user_' + Date.now(),
      name: name,
      email: email,
      phone: phone || '9876543210',
      displayPhone: this.formatPhone(phone || '9876543210'),
      avatar: userData.avatar || '',
      initials: initials,
      bio: userData.bio || 'Haute patisserie devotee enjoying bespoke La Desio creations.',
      city: userData.city || 'Chennai',
      tier: 'Amore',
      points: 250, // Welcome bonus points!
      nextTierPoints: 2000,
      joinedDate: new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
      dietary: userData.dietary || ['All Flavors Welcome'],
      password: password,
      savedAddresses: [
        {
          id: 'addr_' + Date.now(),
          name: `${name} (Primary)`,
          address: userData.address || 'Flagship Avenue',
          city: userData.city || 'Chennai',
          postal: userData.postal || '6000 01',
          country: 'India',
          phone: this.formatPhone(phone || '9876543210'),
          isDefault: true
        }
      ]
    };

    this.users.unshift(newUser);
    this.activeUserId = newUser.id;
    this.profile = newUser;
    try {
      localStorage.setItem(AUTH_SESSION_KEY, this.cleanPhone(newUser.phone));
    } catch (e) {}
    this.saveUsers();

    return {
      success: true,
      user: newUser,
      message: `Welcome to La Desio Privé, ${newUser.name}! 250 welcome points credited to your account.`
    };
  }

  // Request password reset
  requestPasswordReset(emailInput) {
    const clean = (emailInput || '').trim().toLowerCase();
    return {
      success: true,
      message: `Password reset instructions and verification link dispatched to ${clean}.`
    };
  }

  // Direct login by phone (for demo quick-switches)
  loginByPhone(phoneInput) {
    const phone = this.cleanPhone(phoneInput);
    const user = this.users.find(u => this.cleanPhone(u.phone) === phone);
    if (!user) {
      return { success: false, message: 'No account registered with this mobile number.' };
    }
    this.activeUserId = user.id;
    this.profile = user;
    try {
      localStorage.setItem(AUTH_SESSION_KEY, phone);
    } catch (e) {}
    this.saveUsers();
    return { success: true, user: this.profile, message: `Welcome, ${this.profile.name}!` };
  }

  // Switch between existing user profiles
  switchProfile(userId) {
    const target = this.users.find(u => u.id === userId);
    if (!target) return null;
    this.activeUserId = target.id;
    this.profile = target;
    try {
      localStorage.setItem(AUTH_SESSION_KEY, this.cleanPhone(target.phone));
    } catch (e) {}
    this.saveUsers();
    return this.profile;
  }

  // Sign out
  logout() {
    try {
      localStorage.removeItem(AUTH_SESSION_KEY);
      localStorage.removeItem(ACTIVE_USER_ID_KEY);
      localStorage.removeItem(PROFILE_KEY);
    } catch (e) {}
    this.activeUserId = null;
    this.profile = null;
    this.notify();
    return null;
  }

  // Update profile details
  updateProfile(data) {
    this.profile = { ...this.profile, ...data };
    if (data.phone) {
      this.profile.phone = this.cleanPhone(data.phone);
      this.profile.displayPhone = this.formatPhone(this.profile.phone);
    }
    const idx = this.users.findIndex(u => u.id === this.activeUserId);
    if (idx !== -1) {
      this.users[idx] = this.profile;
    }
    this.checkTierUpgrade();
    this.saveUsers();
    return this.profile;
  }

  addSavedAddress(newAddr) {
    if (!this.profile.savedAddresses) {
      this.profile.savedAddresses = [];
    }
    const addr = {
      id: 'addr_' + Date.now(),
      name: newAddr.name || `${this.profile.name} (New Address)`,
      address: newAddr.address || newAddr.street || '',
      city: newAddr.city || this.profile.city || 'Chennai',
      postal: newAddr.postal || '6000 83',
      country: newAddr.country || 'India',
      phone: newAddr.phone || this.profile.displayPhone || '+91 93453 96700',
      isDefault: !!newAddr.isDefault
    };

    if (addr.isDefault) {
      this.profile.savedAddresses.forEach(a => a.isDefault = false);
    }
    this.profile.savedAddresses.push(addr);
    this.updateProfile({ savedAddresses: this.profile.savedAddresses });
    return addr;
  }

  deleteSavedAddress(addrId) {
    if (!this.profile.savedAddresses) return;
    this.profile.savedAddresses = this.profile.savedAddresses.filter(a => a.id !== addrId);
    if (this.profile.savedAddresses.length > 0 && !this.profile.savedAddresses.some(a => a.isDefault)) {
      this.profile.savedAddresses[0].isDefault = true;
    }
    this.updateProfile({ savedAddresses: this.profile.savedAddresses });
  }

  // ==========================================
  // SEARCH USERS / FRIENDS BY MOBILE NUMBER
  // ==========================================
  searchUsersByMobile(query) {
    const raw = String(query || '').trim();
    if (!raw) return [];

    const cleanQuery = this.cleanPhone(raw);
    const textQuery = raw.toLowerCase();

    return this.users.filter(u => {
      // Don't include self
      if (u.id === this.activeUserId) return false;

      const userCleanPhone = this.cleanPhone(u.phone);
      if (cleanQuery && userCleanPhone.includes(cleanQuery)) {
        return true;
      }
      if (u.name && u.name.toLowerCase().includes(textQuery)) {
        return true;
      }
      return false;
    }).map(u => ({
      id: u.id,
      name: u.name,
      phone: u.phone,
      displayPhone: u.displayPhone || this.formatPhone(u.phone),
      avatar: u.avatar || 'Assets/Profile/roody.jpg',
      bio: u.bio || 'Patisserie lover in the La Desio Circle.',
      city: u.city || 'Chennai',
      tier: u.tier || 'Élite Member',
      points: u.points || 0,
      isRegisteredUser: true,
      isAlreadyFriend: this.friends.some(f => f.id === u.id || this.cleanPhone(f.phone) === this.cleanPhone(u.phone)),
      friendId: (this.friends.find(f => f.id === u.id || this.cleanPhone(f.phone) === this.cleanPhone(u.phone)) || {}).id || u.id,
      creationsCount: 2
    }));
  }

  addFriendByMobile(phoneInput, nameInput = '', cityInput = 'Chennai') {
    const phone = this.cleanPhone(phoneInput);
    if (!phone || phone.length !== 10) {
      return { success: false, message: 'Please enter a valid 10-digit Indian mobile number.' };
    }

    // Check if self
    if (this.profile && this.cleanPhone(this.profile.phone) === phone) {
      return { success: false, message: 'You cannot add your own profile as a friend.' };
    }

    // Check if already in circle
    const alreadyFriend = this.friends.find(f => this.cleanPhone(f.phone) === phone);
    if (alreadyFriend) {
      return { success: false, message: `${alreadyFriend.name} is already in your Friends Circle!` };
    }

    // Check registered users
    const existingUser = this.users.find(u => this.cleanPhone(u.phone) === phone);
    if (existingUser) {
      this.addFriendFromUser(existingUser);
      return {
        success: true,
        message: `✨ Added ${existingUser.name} to your Friends Circle!`,
        friend: this.friends[0]
      };
    }

    // Create new friend entry
    const formatted = this.formatPhone(phone);
    const friendName = (nameInput || '').trim() || `Connoisseur (${phone.substring(6)})`;
    const newFriend = {
      id: 'friend_' + Date.now(),
      name: friendName,
      handle: '@' + (friendName.toLowerCase().replace(/\s+/g, '') || ('member' + phone.substring(6))),
      phone: phone,
      displayPhone: formatted,
      avatar: 'Assets/Profile/roody.jpg',
      bio: `Handcrafted dessert enthusiast connected via ${formatted}.`,
      tier: 'Privé Member',
      location: (cityInput || 'Chennai').trim(),
      creationsCount: 1,
      ordersCount: 8,
      creations: [
        {
          id: 'custom_f_' + Date.now(),
          name: `${friendName.split(' ')[0]}'s Signature Torte`,
          recipe: 'Valrhona Noir + Dark Chocolate Ganache + Roasted Hazelnuts + Gold Flourish',
          price: 520,
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
          createdDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
          nutrition: { calories: 330, protein: '8g', carbs: '32g', fats: '18g' }
        }
      ]
    };

    this.friends.unshift(newFriend);
    this.saveFriends();
    return {
      success: true,
      message: `✨ Connected +91 ${phone} (${newFriend.name}) to your Friends Circle!`,
      friend: newFriend
    };
  }

  removeFriend(friendIdOrPhone) {
    const cleanP = this.cleanPhone(friendIdOrPhone);
    const friend = this.friends.find(f => f.id === friendIdOrPhone || (cleanP && this.cleanPhone(f.phone) === cleanP));
    const targetId = friend ? friend.id : friendIdOrPhone;
    this.friends = this.friends.filter(f => f.id !== targetId);
    this.saveFriends();
    return {
      success: true,
      message: friend ? `${friend.name} was removed from your circle.` : 'Friend removed from your circle.'
    };
  }

  loadFriends() {
    try {
      const saved = localStorage.getItem(FRIENDS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed;
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

  addFriendFromUser(user) {
    const exists = this.friends.some(f => f.id === user.id || this.cleanPhone(f.phone) === this.cleanPhone(user.phone));
    if (exists) return false;

    const newFriend = {
      id: user.id,
      name: user.name,
      handle: '@' + user.name.toLowerCase().replace(/\s+/g, ''),
      phone: user.phone,
      displayPhone: user.displayPhone || this.formatPhone(user.phone),
      avatar: user.avatar || 'Assets/Profile/roody.jpg',
      bio: user.bio || 'Patisserie lover in the La Desio Circle.',
      tier: user.tier || 'Élite Member',
      location: user.city || 'Chennai',
      creationsCount: 2,
      ordersCount: 12,
      creations: [
        {
          id: 'custom_f_' + Date.now(),
          name: `${user.name.split(' ')[0]}'s Signature Torte`,
          recipe: 'Valrhona Noir + Dark Chocolate Ganache + Roasted Hazelnuts + Gold Flourish',
          price: 520,
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
          createdDate: '10 Mar 2026',
          nutrition: { calories: 330, protein: '8g', carbs: '32g', fats: '18g' }
        }
      ]
    };

    this.friends.unshift(newFriend);
    this.saveFriends();
    return true;
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
        userId: 'user_roody',
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
        trackingNumber: 'IN-EXP-8942-DESIO',
        distanceKm: 1.4,
        estimatedMinutes: 12
      },
      {
        id: 'DESIO-7182',
        userId: 'user_vinoth',
        date: '10 Jan 2025',
        time: '19:15',
        status: 'Delivered',
        statusColor: 'emerald',
        items: [
          {
            name: 'Pistachio Royale Tiramisù',
            qty: 2,
            price: 545,
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
            subtitle: 'Bronte Pistachio & Mascarpone'
          }
        ],
        subtotal: 1090,
        discount: 0,
        deliveryFee: 0,
        total: 1090,
        paymentMethod: 'Credit Card',
        address: {
          fullName: 'Vinoth Kumar',
          phone: '+91 97904 96706',
          street: 'Main Guard Gate, Thillai Nagar',
          city: 'Trichy',
          postal: '6200 18'
        },
        deliverySlot: 'Scheduled Evening — 10 Jan, 7:00 PM (Trichy)',
        trackingNumber: 'IN-EXP-7182-DESIO',
        distanceKm: 2.1,
        estimatedMinutes: 20
      },
      {
        id: 'DESIO-5421',
        userId: 'user_tharun',
        date: '02 Feb 2025',
        time: '14:20',
        status: 'Delivered',
        statusColor: 'emerald',
        items: [
          {
            name: '35g Whey Isolate Brownie Slab',
            qty: 2,
            price: 480,
            image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
            subtitle: 'Dark Cocoa & Whey Isolate'
          }
        ],
        subtotal: 960,
        discount: 0,
        deliveryFee: 0,
        total: 960,
        paymentMethod: 'UPI / PhonePe',
        address: {
          fullName: 'Tharun R K',
          phone: '+91 95667 83614',
          street: '100 Feet Road, Indiranagar',
          city: 'Bengaluru',
          postal: '5600 38'
        },
        deliverySlot: 'Express Artisanal — 02 Feb, 2:00 PM (Bengaluru)',
        trackingNumber: 'IN-EXP-5421-DESIO',
        distanceKm: 3.5,
        estimatedMinutes: 25
      },
      {
        id: 'DESIO-3319',
        userId: 'user_jeneefar',
        date: '28 Jan 2025',
        time: '16:45',
        status: 'Delivered',
        statusColor: 'emerald',
        items: [
          {
            name: 'Berry Élan & Wild Strawberries',
            qty: 1,
            price: 520,
            image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80',
            subtitle: 'Alpine Strawberries & Champagne Cream'
          }
        ],
        subtotal: 520,
        discount: 0,
        deliveryFee: 0,
        total: 520,
        paymentMethod: 'Net Banking',
        address: {
          fullName: 'Jeneefar',
          phone: '+91 96774 07374',
          street: 'Panampilly Nagar',
          city: 'Kerala',
          postal: '6820 36'
        },
        deliverySlot: 'Standard Artisanal — 28 Jan, 4:30 PM',
        trackingNumber: 'IN-EXP-3319-DESIO',
        distanceKm: 4.0,
        estimatedMinutes: 30
      }
    ];

    try {
      const saved = localStorage.getItem(ORDERS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure every order has a userId (migrate any old untagged orders to user_roody)
        return parsed.map(o => ({
          ...o,
          userId: o.userId || 'user_roody'
        }));
      }
      return defaultOrders;
    } catch (e) {
      return defaultOrders;
    }
  }

  getUserOrders(userId = this.activeUserId) {
    if (!userId) return [];
    return (this.orders || []).filter(o => o.userId === userId);
  }

  saveOrders() {
    try {
      localStorage.setItem(ORDERS_KEY, JSON.stringify(this.orders));
    } catch (e) {}
    this.notify();
  }

  // Add newly placed order tied to the active user profile
  addOrder(orderData) {
    const orderId = 'DESIO-' + Math.floor(1000 + Math.random() * 9000);
    const now = new Date();
    const currentUserName = this.profile ? this.profile.name : 'Patisserie Connoisseur';
    const currentUserPhone = this.profile ? this.profile.displayPhone : '+91 93453 96700';
    const currentUserCity = this.profile ? this.profile.city : 'Chennai';

    const newOrder = {
      id: orderId,
      userId: this.activeUserId || 'guest',
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
        fullName: currentUserName,
        phone: currentUserPhone,
        street: 'West Jafferkhanpet',
        city: currentUserCity
      },
      deliverySlot: orderData.deliverySlot || 'Express Artisanal — Within 18 Mins (Chennai)',
      trackingNumber: orderData.trackingNumber || ('IN-EXP-' + Math.floor(1000 + Math.random() * 9000) + '-DESIO'),
      distanceKm: orderData.distanceKm || 3.2,
      estimatedMinutes: orderData.estimatedMinutes || 18,
      createdAt: now.toISOString()
    };

    this.orders.unshift(newOrder);
    this.saveOrders();

    // Add loyalty points if profile is active (1 point per ₹10 spent)
    if (this.profile) {
      const pointsEarned = Math.round(newOrder.total / 10);
      this.profile.points = (this.profile.points || 0) + pointsEarned;
      this.checkTierUpgrade();
      this.saveUsers();
    }

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
    if (!this.profile) return;
    if (this.profile.points >= 5000) {
      this.profile.tier = 'Royale';
    } else if (this.profile.points >= 2000) {
      this.profile.tier = 'Élite';
    } else {
      this.profile.tier = 'Amore';
    }
  }

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

  getData() {
    const userProfile = this.profile || (this.isUserAuthenticated() ? this.getActiveUser() : null);
    return {
      profile: userProfile || { name: 'Guest Client', tier: 'Connoisseur', points: 0, nextTierPoints: 2000, savedAddresses: [] },
      users: this.users,
      activeUserId: this.activeUserId,
      creations: this.creations,
      orders: this.getUserOrders(),
      allOrders: this.orders,
      friends: this.friends,
      isAuthenticated: this.isUserAuthenticated()
    };
  }
}

const loyaltyStore = new LoyaltyManager();
if (typeof window !== 'undefined') {
  window.loyaltyStore = loyaltyStore;
}


// --- builder.js ---
// LA DESIO - Interactive Bespoke Dessert Studio Builder (INR Edition)

// ============================================================================
// PHOTOREALISTIC THREE.JS WEBGL 3D DESSERT ATELIER (UNIQUE HIGH-FIDELITY MODELS)
// ============================================================================
class Dessert3DViewer {
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

  calculatePrice() {
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

  renderVisualDessert() {
    const baseObj = DESSERT_BUILDER_OPTIONS.bases.find(b => b.id === this.state.base) || DESSERT_BUILDER_OPTIONS.bases[0];
    const flavorObj = DESSERT_BUILDER_OPTIONS.flavors.find(f => f.id === this.state.flavor) || DESSERT_BUILDER_OPTIONS.flavors[0];
    const fillingObj = DESSERT_BUILDER_OPTIONS.fillings.find(f => f.id === this.state.filling) || DESSERT_BUILDER_OPTIONS.fillings[0];
    const sauceObj = DESSERT_BUILDER_OPTIONS.sauces.find(s => s.id === this.state.sauce) || DESSERT_BUILDER_OPTIONS.sauces[0];

    return `
      <div class="relative w-full aspect-square max-w-[340px] mx-auto flex items-center justify-center">
        <div class="absolute inset-0 bg-[#B8945B]/15 rounded-full blur-2xl"></div>
        <div class="relative w-72 h-72 rounded-full bg-gradient-to-br from-[#FFFDF9] via-[#F8F1E7] to-[#E8DCcb] border-[3px] border-[#B8945B] shadow-2xl flex items-center justify-center p-6 transition-all duration-700">
          <div class="absolute inset-3 rounded-full border border-[#B8945B]/30 pointer-events-none"></div>
          <div class="relative w-48 h-48 flex flex-col items-center justify-center animate-float-slow">
            <div class="absolute w-44 h-44 rounded-full opacity-60 filter blur-[2px] transition-all duration-500 scale-105"
                 style="background: radial-gradient(circle, ${sauceObj.color} 30%, transparent 70%);"></div>
            <div class="w-36 h-20 rounded-2xl shadow-xl flex items-center justify-center border-2 border-[#B8945B]/40 relative overflow-hidden transition-all duration-500 transform hover:scale-105"
                 style="background: ${baseObj.color};">
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/20"></div>
              <span class="relative text-[11px] uppercase tracking-wider text-white/90 font-medium px-2 py-0.5 rounded bg-black/40 backdrop-blur border border-white/20">
                ${baseObj.name}
              </span>
            </div>
            <div class="w-32 h-10 -mt-3 rounded-xl shadow-lg border border-[#B8945B]/50 relative overflow-hidden flex items-center justify-center transition-all duration-500"
                 style="background: ${fillingObj.color};">
              <div class="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-black/20"></div>
              <span class="relative text-[10px] tracking-wide font-semibold ${fillingObj.color === '#FFF8EB' ? 'text-[#3A1F17]' : 'text-white'}">
                ${flavorObj.name} Infused
              </span>
            </div>
            <div class="w-28 h-6 -mt-2 rounded-full shadow-inner flex items-center justify-center border border-white/30 transition-all duration-500"
                 style="background: ${sauceObj.color};">
              <div class="w-16 h-1 rounded-full bg-white/40 blur-[1px]"></div>
            </div>
            <div class="absolute -top-3 flex items-center gap-1">
              ${(this.state.toppings || []).includes('top-strawberries') ? '<span class="text-2xl drop-shadow filter">🍓</span>' : ''}
              ${(this.state.toppings || []).includes('top-blueberries') ? '<span class="text-xl drop-shadow filter">🫐</span>' : ''}
              ${(this.state.toppings || []).includes('top-gold-leaf') ? '<span class="text-xl animate-pulse text-[#E6CA85] filter drop-shadow">✨</span>' : ''}
              ${(this.state.toppings || []).includes('top-choc-chips') ? '<span class="text-xl drop-shadow">🍫</span>' : ''}
            </div>
          </div>
          <div class="absolute -bottom-2 bg-[#3A1F17] text-[#FFFDF9] px-4 py-1.5 rounded-full border border-[#B8945B] shadow-lg text-xs font-serif tracking-wider uppercase flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#B8945B] animate-ping"></span>
            ${this.state.name || 'Bespoke Desio'}
          </div>
        </div>
      </div>
    `;
  }

  renderStepContent() {
    switch (this.currentStep) {
      case 1:
        return `
          <div class="space-y-4">
            <div class="border-b border-[#B8945B]/20 pb-2">
              <div class="flex items-center justify-between">
                <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Step 01 of 06</span>
                <span class="text-[10px] font-mono bg-[#B8945B]/15 text-[#B8945B] px-2 py-0.5 rounded-full font-bold">⚡ UNIQUE 3D BASE MODELS</span>
              </div>
              <h3 class="font-display text-2xl text-[#FFFDF9]">Choose Your Base Foundation</h3>
              <p class="text-xs text-[#D6C2B0]">Each base has a uniquely sculpted 3D shape (Waffle grid, Crumb cheesecake, Skillet cookie, Basque, or Tartlet).</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
              ${DESSERT_BUILDER_OPTIONS.bases.map(base => `
                <div class="p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${this.state.base === base.id ? 'border-2 border-[#E6CA85] bg-gradient-to-br from-[#381B10] to-[#241009] ring-2 ring-[#E6CA85]/30 shadow-xl' : 'border border-[#B8945B]/30 bg-[#1C0A05] hover:bg-[#261008] hover:border-[#B8945B]/70'}"
                     onclick="window.dessertStudio.selectBase('${base.id}')">
                  <img src="${base.image}" alt="${base.name}" class="w-14 h-14 rounded-lg object-cover border border-[#B8945B]/30 shrink-0" />
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between">
                      <h4 class="font-serif text-sm font-bold text-[#FFFDF9] truncate">${base.name}</h4>
                      <span class="text-xs font-semibold text-[#B8945B]">₹${base.price}</span>
                    </div>
                    ${base.badge ? `<span class="inline-block mt-0.5 px-2 py-0.5 rounded text-[9px] font-semibold bg-[#B8945B]/30 text-[#E6CA85] border border-[#B8945B]/40">${base.badge}</span>` : ''}
                    <p class="text-[11px] text-[#D6C2B0] line-clamp-2 mt-1">${base.description}</p>
                    <div class="mt-1.5 flex items-center gap-2 text-[10px] text-[#D6C2B0] font-medium bg-[#120703] border border-[#B8945B]/25 px-2 py-1 rounded-md">
                      <span class="font-bold text-[#B8945B]">+${base.nutrition?.calories || 0} kcal</span>
                      <span>P: ${base.nutrition?.protein || 0}g</span>
                      <span>C: ${base.nutrition?.carbs || 0}g</span>
                      <span>F: ${base.nutrition?.fats || 0}g</span>
                    </div>
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
              <h3 class="font-display text-2xl text-[#FFFDF9]">Select Flavor Infusion Coat</h3>
              <p class="text-xs text-[#D6C2B0]">Infuses a delicate, translucent flavor soak over your base foundation.</p>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[380px] overflow-y-auto pr-1">
              ${DESSERT_BUILDER_OPTIONS.flavors.map(flavor => `
                <div class="p-3 rounded-xl border transition-all cursor-pointer text-center flex flex-col items-center justify-center gap-1 ${this.state.flavor === flavor.id ? 'border-2 border-[#E6CA85] bg-gradient-to-br from-[#381B10] to-[#241009] ring-2 ring-[#E6CA85]/30 shadow-xl' : 'border border-[#B8945B]/30 bg-[#1C0A05] hover:bg-[#261008] hover:border-[#B8945B]/70'}"
                     onclick="window.dessertStudio.selectFlavor('${flavor.id}')">
                  <span class="text-2xl">${flavor.icon}</span>
                  <h4 class="font-serif text-xs font-semibold text-[#FFFDF9] truncate max-w-full">${flavor.name}</h4>
                  ${flavor.badge ? `<span class="px-1.5 py-0.5 rounded text-[8px] font-bold bg-[#B8945B]/30 text-[#E6CA85] border border-[#B8945B]/40">${flavor.badge}</span>` : ''}
                  <div class="text-[10px] text-[#B8945B] font-bold">+₹${flavor.price}</div>
                  <div class="text-[9px] text-[#D6C2B0] font-medium bg-[#120703] border border-[#B8945B]/25 px-1.5 py-0.5 rounded">
                    +${flavor.nutrition?.calories || 0} kcal | C: ${flavor.nutrition?.carbs || 0}g
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
              <h3 class="font-display text-2xl text-[#FFFDF9]">Select Silky Filling Layer</h3>
              <p class="text-xs text-[#D6C2B0]">Adds an elegant thin mousse coat with hand-piped perimeter quenelles.</p>
            </div>
            <div class="grid grid-cols-1 gap-2.5 max-h-[360px] overflow-y-auto pr-1">
              ${DESSERT_BUILDER_OPTIONS.fillings.map(filling => `
                <div class="p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${this.state.filling === filling.id ? 'border-2 border-[#E6CA85] bg-gradient-to-br from-[#381B10] to-[#241009] ring-2 ring-[#E6CA85]/30 shadow-xl' : 'border border-[#B8945B]/30 bg-[#1C0A05] hover:bg-[#261008] hover:border-[#B8945B]/70'}"
                     onclick="window.dessertStudio.selectFilling('${filling.id}')">
                  <div class="flex items-center gap-3">
                    <span class="w-6 h-6 rounded-full border border-black/20 shadow-inner shrink-0" style="background: ${filling.color}"></span>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="font-serif text-sm font-bold text-[#FFFDF9]">${filling.name}</span>
                        ${filling.badge ? `<span class="px-2 py-0.5 rounded text-[9px] font-bold bg-[#B8945B]/30 text-[#E6CA85] border border-[#B8945B]/40">${filling.badge}</span>` : ''}
                      </div>
                      <span class="text-[10px] text-[#D6C2B0] font-medium block mt-0.5">
                        +${filling.nutrition?.calories || 0} kcal • P: ${filling.nutrition?.protein || 0}g • C: ${filling.nutrition?.carbs || 0}g • F: ${filling.nutrition?.fats || 0}g
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
          <div class="space-y-4">
            <div class="border-b border-[#B8945B]/20 pb-2">
              <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Step 04 of 06</span>
              <h3 class="font-display text-2xl text-[#FFFDF9]">Artisanal Toppings & Garnishes</h3>
              <p class="text-xs text-[#D6C2B0]">Sliced mountain strawberries, whole blueberries, toasted almond flakes, shaved chocolate curls, and 24k gold leaf.</p>
            </div>
            <div class="grid grid-cols-2 gap-2.5 max-h-[340px] overflow-y-auto pr-1">
              ${DESSERT_BUILDER_OPTIONS.toppings.map(top => {
                const isSelected = (this.state.toppings || []).includes(top.id);
                return `
                  <div class="p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${isSelected ? 'border-2 border-[#E6CA85] bg-gradient-to-br from-[#381B10] to-[#241009] ring-2 ring-[#E6CA85]/30 shadow-md' : 'border border-[#B8945B]/30 bg-[#1C0A05] hover:bg-[#261008] hover:border-[#B8945B]/70'}"
                       onclick="window.dessertStudio.toggleTopping('${top.id}')">
                    <div class="flex items-center gap-2 min-w-0">
                      <span class="text-lg shrink-0">${top.icon}</span>
                      <div class="min-w-0">
                        <span class="font-serif text-xs font-semibold text-[#FFFDF9] block truncate">${top.name}</span>
                        ${top.badge ? `<span class="inline-block text-[8px] font-bold text-[#B8945B]">${top.badge} • </span>` : ''}
                        <span class="text-[9px] text-[#D6C2B0]">+${top.nutrition?.calories || 0} kcal</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-1.5 shrink-0 ml-1">
                      <span class="text-[11px] text-[#B8945B] font-medium">+₹${top.price}</span>
                      <div class="w-4 h-4 rounded border flex items-center justify-center ${isSelected ? 'bg-[#E6CA85] border-[#E6CA85] text-[#120804] font-bold' : 'border-[#B8945B]/40 bg-[#120703]'}">
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
              <h3 class="font-display text-2xl text-[#FFFDF9]">Mirror Glaze & Sauce Drizzle</h3>
              <p class="text-xs text-[#D6C2B0]">A high-gloss thin mirror coat with cascading glaze drips down the pastry sides.</p>
            </div>
            <div class="grid grid-cols-1 gap-2.5 max-h-[340px] overflow-y-auto pr-1">
              ${DESSERT_BUILDER_OPTIONS.sauces.map(sauce => `
                <div class="p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${this.state.sauce === sauce.id ? 'border-2 border-[#E6CA85] bg-gradient-to-br from-[#381B10] to-[#241009] ring-2 ring-[#E6CA85]/30 shadow-xl' : 'border border-[#B8945B]/30 bg-[#1C0A05] hover:bg-[#261008] hover:border-[#B8945B]/70'}"
                     onclick="window.dessertStudio.selectSauce('${sauce.id}')">
                  <div class="flex items-center gap-3">
                    <span class="w-5 h-5 rounded-full border border-black/20 shadow-inner shrink-0" style="background: ${sauce.color}"></span>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="font-serif text-sm font-semibold text-[#FFFDF9]">${sauce.name}</span>
                        ${sauce.badge ? `<span class="px-2 py-0.5 rounded text-[9px] font-bold bg-[#B8945B]/30 text-[#E6CA85] border border-[#B8945B]/40">${sauce.badge}</span>` : ''}
                      </div>
                      <span class="text-[10px] text-[#D6C2B0] font-medium block mt-0.5">
                        +${sauce.nutrition?.calories || 0} kcal • C: ${sauce.nutrition?.carbs || 0}g • P: ${sauce.nutrition?.protein || 0}g
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
          <div class="space-y-4">
            <div class="border-b border-[#B8945B]/20 pb-2">
              <span class="text-xs uppercase tracking-widest text-[#B8945B] font-semibold">Step 06 of 06</span>
              <h3 class="font-display text-2xl text-[#FFFDF9]">Name Your Custom Creation</h3>
              <p class="text-xs text-[#D6C2B0]">Your nutritional and allergen summary is dynamically finalized below.</p>
            </div>

            <div class="space-y-3">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-wider text-[#E6CA85] mb-1">Creation Title</label>
                <input type="text" id="creationNameInput" value="${this.state.name}"
                       class="w-full px-3.5 py-2 rounded-xl bg-[#160703] border border-[#B8945B]/50 text-sm text-[#FFFDF9] focus:outline-none focus:ring-1 focus:ring-[#E6CA85] font-serif"
                       oninput="window.dessertStudio.updateName(this.value)" />
              </div>

              <!-- Complete Nutrition Certificate -->
              <div class="p-3.5 rounded-xl bg-gradient-to-br from-[#241009] to-[#190904] border border-[#B8945B]/40 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="font-serif font-bold text-xs text-[#FFFDF9] uppercase tracking-wider">Nutritional Breakdown</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full bg-[#1F0D08] text-[#E6CA85] font-bold">0g Refined Sugar</span>
                </div>
                <div class="grid grid-cols-4 gap-2 text-center text-xs pt-1">
                  <div class="bg-[#120703] p-2 rounded-lg border border-[#B8945B]/25">
                    <span class="text-[10px] text-[#D6C2B0] block">Calories</span>
                    <span class="font-bold text-[#B8945B] text-sm">${n.calories}</span>
                  </div>
                  <div class="bg-[#120703] p-2 rounded-lg border border-[#B8945B]/25">
                    <span class="text-[10px] text-[#D6C2B0] block">Protein</span>
                    <span class="font-bold text-[#FFFDF9] text-sm">${n.protein}g</span>
                  </div>
                  <div class="bg-[#120703] p-2 rounded-lg border border-[#B8945B]/25">
                    <span class="text-[10px] text-[#D6C2B0] block">Carbs</span>
                    <span class="font-bold text-[#FFFDF9] text-sm">${n.carbs}g</span>
                  </div>
                  <div class="bg-[#120703] p-2 rounded-lg border border-[#B8945B]/25">
                    <span class="text-[10px] text-[#D6C2B0] block">Dietary Fiber</span>
                    <span class="font-bold text-[#E6CA85] text-sm">${n.fiber}g</span>
                  </div>
                </div>
                <div class="flex items-center justify-between text-[11px] text-[#D6C2B0] px-1 pt-1 border-t border-[#B8945B]/20">
                  <span>🦴 Calcium: <strong>${n.calcium}mg</strong></span>
                  <span>🩸 Iron: <strong>${n.iron}mg</strong></span>
                  <span>🌿 Natural Fruit Sugars: <strong>${n.naturalSugar}g</strong></span>
                </div>
              </div>

              <div class="flex items-center gap-2 pt-2">
                <button type="button" onclick="window.dessertStudio.saveCreationToProfile()"
                        class="flex-1 py-2.5 px-3 rounded-lg border border-[#B8945B] text-[#E6CA85] bg-[#160703] hover:bg-[#28120B] font-serif text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5">
                  <span>💾</span> Save to My Creations
                </button>
                <button type="button" onclick="window.dessertStudio.addBespokeToCart()"
                        class="flex-1 py-2.5 px-3 rounded-lg btn-gold-luxury font-serif text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-lg">
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
      <div class="bg-gradient-to-b from-[#1C0A05] via-[#241009] to-[#1C0A05] rounded-3xl border-2 border-[#B8945B]/40 shadow-2xl p-6 lg:p-8 text-[#F8F1E7]">
        
        <!-- Step Progress Bar -->
        <div class="mb-8">
          <div class="flex items-center justify-between max-w-2xl mx-auto mb-3">
            ${steps.map(s => `
              <button type="button" onclick="window.dessertStudio.setStep(${s.num})"
                      class="flex flex-col items-center group focus:outline-none">
                <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-serif font-bold transition-all ${this.currentStep === s.num ? 'bg-[#E6CA85] text-[#120804] ring-4 ring-[#E6CA85]/30 scale-110 shadow-lg font-bold' : (this.currentStep > s.num ? 'bg-[#B8945B] text-[#120804] font-bold' : 'bg-[#190904] text-[#D6C2B0] border border-[#B8945B]/30')}">
                  ${this.currentStep > s.num ? '✓' : '0' + s.num}
                </div>
                <span class="text-[10px] tracking-wider uppercase font-semibold mt-1 hidden sm:block ${this.currentStep === s.num ? 'text-[#E6CA85] font-bold' : 'text-[#D6C2B0]/70'}">
                  ${s.title}
                </span>
              </button>
            `).join(`
              <div class="flex-1 h-[1px] bg-[#B8945B]/30 mx-1 mb-4 hidden sm:block"></div>
            `)}
          </div>
          <div class="w-full bg-[#140603] border border-[#B8945B]/20 h-1.5 rounded-full overflow-hidden">
            <div class="bg-gradient-to-r from-[#B8945B] to-[#E6CA85] h-full transition-all duration-500 rounded-full"
                 style="width: ${(this.currentStep / 6) * 100}%"></div>
          </div>
        </div>

        <!-- Main Studio Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left: 3D Atelier Canvas & Live Nutritional Metrics -->
          <div class="lg:col-span-6 flex flex-col items-center justify-center bg-[#180904] p-4 sm:p-6 rounded-2xl border border-[#B8945B]/30 shadow-2xl">
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
                  🍽️ Classic
                </button>
              </div>
            </div>

            ${this.viewMode === '3d' ? `
              <!-- 3D Studio Canvas Mount -->
              <div class="relative w-full aspect-square max-w-[440px] mx-auto flex items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-b from-[#140704] via-[#1F0E08] to-[#140704] border-2 border-[#B8945B]/50 shadow-2xl ring-1 ring-[#B8945B]/20">
                <canvas id="dessert3dCanvas" class="w-full h-full cursor-grab active:cursor-grabbing block"></canvas>
                
                <!-- 3D Controls Overlay -->
                <div class="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none gap-1.5">
                  <div class="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur border border-[#B8945B]/40 text-[#E6CA85] text-[10px] font-serif flex items-center gap-1.5 shadow-md pointer-events-auto">
                    <span>🔄</span> 360° Drag
                  </div>
                  <div class="flex items-center gap-1.5 pointer-events-auto">
                    <button type="button" onclick="window.dessertStudio.setPresetView('top')"
                            class="px-2 py-1 rounded-lg bg-black/80 hover:bg-[#B8945B] text-[#E6CA85] hover:text-black border border-[#B8945B]/40 text-[10px] font-serif transition-colors shadow-md">
                      🔝 Top
                    </button>
                    <button type="button" onclick="window.dessertStudio.setPresetView('profile')"
                            class="px-2 py-1 rounded-lg bg-black/80 hover:bg-[#B8945B] text-[#E6CA85] hover:text-black border border-[#B8945B]/40 text-[10px] font-serif transition-colors shadow-md">
                      👀 Side
                    </button>
                    <button type="button" onclick="window.dessertStudio.toggle3dAutoRotate()" 
                            class="px-2.5 py-1 rounded-lg bg-black/80 hover:bg-[#B8945B] text-[#E6CA85] hover:text-black border border-[#B8945B]/40 text-[10px] font-serif transition-colors flex items-center gap-1 shadow-md">
                      <span id="autoRotateLabel">${this.is3dAutoRotate ? '⏸️' : '▶️'}</span>
                    </button>
                    <button type="button" onclick="window.dessertStudio.reset3dCamera()" 
                            class="w-7 h-7 rounded-lg bg-black/80 hover:bg-[#B8945B] text-[#E6CA85] hover:text-black border border-[#B8945B]/40 flex items-center justify-center text-xs transition-colors shadow-md">
                      🎯
                    </button>
                  </div>
                </div>
              </div>
            ` : this.renderVisualDessert()}

            <!-- Live Toppings summary pills -->
            <div class="mt-3 flex flex-wrap gap-1.5 justify-center max-w-sm mx-auto">
              ${toppingsList || '<span class="text-xs text-[#D6C2B0]/70 italic">Toppings customize in Step 04</span>'}
            </div>

            <!-- ========================================== -->
            <!-- REAL-TIME DYNAMIC CALORIE & MACRO HUB     -->
            <!-- ========================================== -->
            <div class="mt-4 w-full max-w-sm space-y-3 bg-[#241009] p-4 rounded-2xl border border-[#B8945B]/40 shadow-2xl">
              <div class="flex items-center justify-between pb-2 border-b border-[#B8945B]/20">
                <div>
                  <span class="text-[10px] font-serif uppercase tracking-wider text-[#D6C2B0] block">Creation Total</span>
                  <span class="font-display font-bold text-lg text-[#FFFDF9]">₹${totalPrice}</span>
                </div>
                <div class="text-right">
                  <span class="text-[10px] font-serif uppercase tracking-wider text-[#D6C2B0] block">Live Calorie Tracker</span>
                  <span class="font-serif font-black text-lg text-[#E6CA85] flex items-center justify-end gap-1">
                    ⚡ ${nutrition.calories} <span class="text-xs font-normal text-[#D6C2B0]">kcal</span>
                  </span>
                </div>
              </div>

              <!-- Dynamic Macro Proportion Bar -->
              <div class="space-y-1">
                <div class="flex items-center justify-between text-[10px] text-[#D6C2B0] font-medium">
                  <span>Carbs ${nutrition.carbs}g (${nutrition.carbsPct}%)</span>
                  <span>Protein ${nutrition.protein}g (${nutrition.proteinPct}%)</span>
                  <span>Fats ${nutrition.fats}g (${nutrition.fatsPct}%)</span>
                </div>
                <div class="w-full h-2 rounded-full overflow-hidden bg-[#140603] border border-[#B8945B]/30 flex">
                  <div class="bg-[#B8945B] h-full" style="width: ${nutrition.carbsPct}%" title="Carbohydrates"></div>
                  <div class="bg-[#E6CA85] h-full" style="width: ${nutrition.proteinPct}%" title="Protein"></div>
                  <div class="bg-[#5A3222] border-l border-[#B8945B]/30 h-full" style="width: ${nutrition.fatsPct}%" title="Healthy Fats"></div>
                </div>
              </div>

              <!-- Micronutrient & Child Health Highlights -->
              <div class="grid grid-cols-3 gap-1.5 pt-1 text-center">
                <div class="p-2 rounded-xl bg-[#190904] border border-[#B8945B]/30 shadow-inner">
                  <span class="text-[9px] text-[#D6C2B0] block font-medium">Dietary Fiber</span>
                  <span class="font-bold text-[#E6CA85] text-xs">${nutrition.fiber}g</span>
                </div>
                <div class="p-2 rounded-xl bg-[#190904] border border-[#B8945B]/30 shadow-inner">
                  <span class="text-[9px] text-[#D6C2B0] block font-medium">Bone Calcium</span>
                  <span class="font-bold text-[#E6CA85] text-xs">${nutrition.calcium}mg</span>
                </div>
                <div class="p-2 rounded-xl bg-[#190904] border border-[#B8945B]/30 shadow-inner">
                  <span class="text-[9px] text-[#D6C2B0] block font-medium">Plant Iron</span>
                  <span class="font-bold text-[#E6CA85] text-xs">${nutrition.iron}mg</span>
                </div>
              </div>

              <!-- Layer-by-Layer Dynamic Contribution Accordion -->
              <details class="text-[11px] pt-1 group" open>
                <summary class="cursor-pointer font-serif font-bold text-[#1F0D08] hover:text-[#B8945B] transition-colors flex items-center justify-between py-1 border-t border-[#B8945B]/15 select-none">
                  <span class="flex items-center gap-1.5">
                    <span class="text-xs">🔍</span>
                    <span>Layer-by-Layer Nutritional Deltas</span>
                    <span class="text-[10px] px-2 py-0.5 rounded-full bg-[#1F0D08] text-[#E6CA85] font-sans font-semibold">${nutrition.layerDeltas.length}</span>
                  </span>
                  <span class="text-[10px] text-[#8F6D35] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div class="mt-2 space-y-1.5 max-h-36 overflow-y-auto pr-1">
                  ${nutrition.layerDeltas.map(d => `
                    <div class="flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-[#190904] hover:bg-[#200C06] border border-[#B8945B]/30 hover:border-[#B8945B]/60 shadow-xs transition-all">
                      <div class="flex items-center gap-2 min-w-0">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#B8945B] shrink-0"></span>
                        <span class="font-medium text-[#FFFDF9] text-[11px] truncate max-w-[155px]">${d.name}</span>
                      </div>
                      <div class="flex items-center gap-1.5 shrink-0 text-right">
                        <span class="px-2 py-0.5 rounded-md bg-[#1F0D08] text-[#E6CA85] font-bold text-[10px] tracking-tight shadow-xs">+${d.calories} kcal</span>
                        <span class="text-[9px] text-[#D6C2B0] font-medium hidden sm:inline">(P: ${d.protein}g, C: ${d.carbs}g)</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </details>
            </div>

            <!-- Action Buttons -->
            <div class="mt-4 w-full max-w-sm flex items-center gap-2">
              <button type="button" onclick="window.dessertStudio.saveCreationToProfile()"
                      class="flex-1 py-2 px-3 rounded-xl border border-[#B8945B] bg-[#190904] hover:bg-[#28120B] text-[#E6CA85] font-serif text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm">
                <span>💾</span> Save Creation
              </button>
              <button type="button" onclick="window.dessertStudio.openSavedCreationsModal()"
                      class="py-2 px-3 rounded-xl border border-[#B8945B]/40 hover:border-[#B8945B] bg-[#190904] hover:bg-[#28120B] text-[#D6C2B0] hover:text-[#FFFDF9] font-serif text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1">
                <span>📂</span> Saved (${loyaltyStore.getData().creations.length})
              </button>
            </div>
          </div>

          <!-- Right: Interactive Step Customization -->
          <div class="lg:col-span-6 flex flex-col justify-between min-h-[440px]">
            <div>
              ${this.renderStepContent()}
            </div>

            <!-- Step Navigation -->
            <div class="flex items-center justify-between pt-6 border-t border-[#B8945B]/20 mt-6">
              <button type="button" onclick="window.dessertStudio.setStep(${this.currentStep - 1})"
                      class="px-4 py-2 rounded-lg border border-[#B8945B]/40 text-[#D6C2B0] bg-[#190904] hover:bg-[#28120B] hover:text-[#FFFDF9] text-xs font-serif font-semibold tracking-wider transition-all ${this.currentStep === 1 ? 'opacity-30 cursor-not-allowed' : ''}"
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
    }, 20);
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

  saveCreationToProfile() {
    const creation = {
      id: 'custom-' + Date.now(),
      name: this.state.name || 'Bespoke Desio Creation',
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      price: this.calculatePrice(),
      nutrition: this.calculateNutrition(),
      config: { ...this.state }
    };
    loyaltyStore.saveCreation(creation);
    if (window.showToast) {
      window.showToast('Saved to your La Desio Privé Atelier!', 'success');
    }
    this.render();
  }

  openSavedCreationsModal() {
    const data = loyaltyStore.getData();
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
        <p class="text-xs text-[#E6CA85] mb-4">Reload or add your previous bespoke dessert masterpieces.</p>

        <div class="space-y-3 max-h-72 overflow-y-auto pr-1">
          ${creations.length === 0 ? `
            <div class="text-center py-8 text-stone-400 text-xs font-serif">
              No creations saved yet. Build one in the Studio and tap "Save Creation"!
            </div>
          ` : creations.map(c => `
            <div class="p-3 rounded-xl bg-black/40 border border-[#B8945B]/20 flex items-center justify-between gap-3">
              <div>
                <h4 class="font-serif font-bold text-sm text-[#FFFDF9]">${c.name}</h4>
                <p class="text-[10px] text-[#E6CA85]">${c.date} • ₹${c.price} • ${c.nutrition?.calories || 0} kcal</p>
              </div>
              <button onclick="window.dessertStudio.loadConfig(${JSON.stringify(c.config).replace(/"/g, '&quot;')}); document.getElementById('savedCreationsModal').remove();"
                      class="px-3 py-1.5 rounded-lg btn-gold-luxury text-[10px] font-serif font-semibold">
                Load
              </button>
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

    const bespokeItem = {
      id: 'bespoke-' + Date.now(),
      name: this.state.name || 'Bespoke La Desio Creation',
      price: this.calculatePrice(),
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
      window.showToast(`Added "${bespokeItem.name}" (₹${bespokeItem.price}) to your bag!`, 'success');
    }
  }
}


// --- checkout.js ---
// LA DESIO - Multi-Step Luxury Checkout Flow with Dynamic Distance, Delivery ETA & Shop-to-Customer Map

class CheckoutManager {
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


// --- app.js ---
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
      onlyEggless: false,
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

  navigateTo(route) {
    this.currentRoute = route;
    window.location.hash = '#' + route;
    this.renderCurrentView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  handleHeaderAuthClick(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (loyaltyStore && loyaltyStore.isUserAuthenticated()) {
      this.navigateTo('account');
    } else {
      this.navigateTo('login');
    }
  }

  togglePfpDropdown(e) {
    if (e) {
      if (e.stopPropagation) e.stopPropagation();
      if (e.preventDefault) e.preventDefault();
    }
    if (!loyaltyStore.isUserAuthenticated()) {
      this.navigateTo('login');
      return;
    }
    const dropdown = document.getElementById('headerPfpDropdown');
    if (dropdown) {
      const isHidden = dropdown.classList.contains('hidden');
      if (isHidden) {
        this.renderNavigationBadges();
        dropdown.classList.remove('hidden');
      } else {
        dropdown.classList.add('hidden');
      }
    }
  }

  closePfpDropdown() {
    const dropdown = document.getElementById('headerPfpDropdown');
    if (dropdown) dropdown.classList.add('hidden');
  }

  navigateToAccountTab(tab) {
    this.closePfpDropdown();
    this.activeAccountTab = tab;
    this.navigateTo('account/' + tab);
  }


  playObstacleChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {}
  }


  // ==========================================
  // MOBILE SEARCH & ADD FRIEND CONTROLLER
  // ==========================================
  handleFriendSearchInput(query) {
    const mount = document.getElementById('friendSearchResultsMount');
    if (!mount) return;

    const trimmed = (query || '').trim();
    if (!trimmed) {
      mount.classList.add('hidden');
      mount.innerHTML = '';
      return;
    }

    const cleanDigits = loyaltyStore.cleanPhone(trimmed);
    const results = loyaltyStore.searchUsersByMobile(trimmed);

    mount.classList.remove('hidden');

    let html = '<div class="space-y-2">';

    if (results.length > 0) {
      html += '<p class="text-[11px] font-serif uppercase tracking-wider text-[#E6CA85] font-semibold">Registered Privé Members Found:</p>';
      results.forEach(u => {
        html += `
          <div class="p-3.5 rounded-2xl bg-[#1A0A06] border border-[#B8945B]/40 flex items-center justify-between gap-3 shadow-md">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-11 h-11 rounded-full bg-gradient-to-br from-[#B8945B] to-[#E6CA85] p-0.5 shrink-0 overflow-hidden">
                <img src="${u.avatar}" alt="${u.name}" class="w-full h-full object-cover rounded-full" onerror="this.outerHTML='<span class=\\'w-full h-full rounded-full bg-[#180A06] text-[#E6CA85] text-xs font-serif font-bold flex items-center justify-center\\'>👑</span>'" />
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-2">
                  <h5 class="font-display text-sm font-bold text-white truncate">${u.name}</h5>
                  <span class="px-2 py-0.2 rounded-full bg-[#B8945B]/20 text-[#E6CA85] text-[9px] font-serif uppercase font-bold">${u.tier}</span>
                </div>
                <p class="text-xs text-[#E6CA85] font-mono">${u.displayPhone} • 📍 ${u.city}</p>
              </div>
            </div>

            ${u.isAlreadyFriend ? `
              <div class="flex items-center gap-2 shrink-0">
                <span class="px-2.5 py-1 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-[11px] font-serif font-semibold flex items-center gap-1 shadow-sm">
                  <span>✓</span> In Circle
                </span>
                <button type="button" onclick="window.ladesioApp.handleRemoveFriend('${u.friendId || u.id}', '${u.name}')"
                        class="px-3 py-1 rounded-xl border border-rose-500/40 hover:border-rose-500 bg-rose-950/40 hover:bg-rose-900/60 text-rose-200 hover:text-white text-xs font-serif transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
                        title="Remove ${u.name} from Circle">
                  <span>🗑️</span> Remove
                </button>
              </div>
            ` : `
              <button type="button" onclick="window.ladesioApp.handleAddFriendFromSearch('${u.id}')"
                      class="px-4 py-1.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider shrink-0 flex items-center gap-1 shadow-md hover:scale-105 transition-transform">
                <span>➕</span> Add Friend
              </button>
            `}
          </div>
        `;
      });
    }

    // If clean digits has 10 digits and not found or to allow adding directly
    if (cleanDigits.length === 10 && !results.some(r => loyaltyStore.cleanPhone(r.phone) === cleanDigits)) {
      html += `
        <div class="p-4 rounded-2xl bg-[#1A0A06] border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md mt-2">
          <div>
            <p class="text-xs text-stone-200">Mobile number: <strong class="text-[#E6CA85] font-mono">+91 ${cleanDigits}</strong></p>
            <p class="text-[11px] text-stone-400">Not in default preset users. Would you like to invite and add this mobile number directly?</p>
          </div>
          <button type="button" onclick="window.ladesioApp.handleAddFriendDirect('${cleanDigits}')"
                  class="px-4 py-2 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider shrink-0 flex items-center justify-center gap-1.5 shadow-md">
            <span>➕</span> Add Mobile Friend
          </button>
        </div>
      `;
    } else if (results.length === 0 && cleanDigits.length < 10) {
      html += `
        <div class="p-3 text-center text-xs text-stone-400 font-serif">
          No members found matching "${query}". Enter a 10-digit mobile number (e.g. 9790496706, 9566783614) or name.
        </div>
      `;
    }

    html += '</div>';
    mount.innerHTML = html;
  }

  clearFriendSearch() {
    const input = document.getElementById('friendMobileSearchInput');
    if (input) input.value = '';
    const mount = document.getElementById('friendSearchResultsMount');
    if (mount) {
      mount.classList.add('hidden');
      mount.innerHTML = '';
    }
  }

  handleAddFriendFromSearch(userId) {
    const user = loyaltyStore.users.find(u => u.id === userId);
    if (!user) return;

    const res = loyaltyStore.addFriendByMobile(user.phone, user.name, user.city);
    if (res.success) {
      if (window.showToast) window.showToast(res.message, 'success');
      this.clearFriendSearch();
      this.activeAccountTab = 'friends';
      this.renderAccountView();
    } else {
      if (window.showToast) window.showToast(res.message, 'warning');
    }
  }

  handleAddFriendDirect(phone, name = '') {
    const res = loyaltyStore.addFriendByMobile(phone, name);
    if (res.success) {
      if (window.showToast) window.showToast(res.message, 'success');
      this.clearFriendSearch();
      this.activeAccountTab = 'friends';
      this.renderAccountView();
    } else {
      if (window.showToast) window.showToast(res.message, 'warning');
    }
  }

  handleRemoveFriend(friendId, friendName = '') {
    const displayName = friendName || 'this friend';
    const confirmed = (typeof window.confirm === 'function') 
      ? window.confirm(`Are you sure you want to remove ${displayName} from your Atelier Circle?`)
      : true;
    if (!confirmed) return;

    const res = loyaltyStore.removeFriend(friendId);
    if (res.success) {
      if (window.showToast) window.showToast(res.message, 'info');
      if (this.selectedFriendId === friendId) {
        this.selectedFriendId = null;
      }
      this.activeAccountTab = 'friends';
      this.renderAccountView();
      // Also update search results if search is active
      const searchInput = document.getElementById('friendMobileSearchInput');
      if (searchInput && searchInput.value.trim()) {
        this.handleFriendSearchInput(searchInput.value);
      }
    } else {
      if (window.showToast) window.showToast(res.message || 'Could not remove friend.', 'warning');
    }
  }

  openAddFriendModal() {
    let modal = document.getElementById('addFriendModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'addFriendModal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#1F0D08] to-[#140603] border-2 border-[#B8945B]/50 shadow-2xl p-6 sm:p-7 space-y-5 text-[#FFFDF9]">
        <!-- Close Button -->
        <button onclick="window.ladesioApp.closeAddFriendModal()" 
                class="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/40 border border-[#B8945B]/30 hover:border-[#B8945B] flex items-center justify-center text-stone-300 hover:text-white transition-colors">
          ✕
        </button>

        <!-- Header -->
        <div class="border-b border-[#B8945B]/30 pb-3">
          <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold">Atelier Circle</span>
          <h3 class="font-display text-xl sm:text-2xl text-white font-bold mt-0.5">Add Friend by Mobile Number</h3>
          <p class="text-xs text-[#D6C2B0] mt-0.5">Connect with fellow dessert lovers to share recipes and order creations.</p>
        </div>

        <form onsubmit="event.preventDefault(); window.ladesioApp.submitAddFriendModal();" class="space-y-4">
          <!-- Mobile Number Input -->
          <div class="space-y-1.5">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Friend's 10-Digit Mobile Number *</label>
            <div class="flex items-center rounded-xl border border-[#B8945B]/40 bg-[#120502] focus-within:border-[#E6CA85] overflow-hidden shadow-inner">
              <span class="px-3.5 py-3 text-xs font-mono text-[#E6CA85] font-bold border-r border-[#B8945B]/30 bg-black/40">
                🇮🇳 +91
              </span>
              <input type="tel" id="modalAddFriendPhone" required maxlength="10"
                     placeholder="97904 96706"
                     class="w-full px-3.5 py-3 bg-transparent text-white text-xs font-mono outline-none" />
            </div>
            <span class="text-[10px] text-stone-400">Enter a 10-digit Indian mobile number.</span>
          </div>

          <!-- Friend's Name -->
          <div class="space-y-1.5">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Friend's Name (Optional)</label>
            <input type="text" id="modalAddFriendName"
                   placeholder="e.g. Vinoth Kumar, Sneha Patel"
                   class="w-full px-3.5 py-2.5 rounded-xl bg-[#120502] border border-[#B8945B]/40 text-xs text-white placeholder-stone-500 outline-none" />
          </div>

          <!-- City / Location -->
          <div class="space-y-1.5">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">City / Location (Optional)</label>
            <input type="text" id="modalAddFriendCity"
                   placeholder="e.g. Chennai, Bengaluru, Mumbai"
                   value="Chennai"
                   class="w-full px-3.5 py-2.5 rounded-xl bg-[#120502] border border-[#B8945B]/40 text-xs text-white placeholder-stone-500 outline-none" />
          </div>

          <!-- Submit Button -->
          <button type="submit" 
                  class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 mt-2">
            <span>Connect & Add to Circle</span> ✨
          </button>
        </form>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  closeAddFriendModal() {
    const modal = document.getElementById('addFriendModal');
    if (modal) modal.classList.add('hidden');
  }

  submitAddFriendModal() {
    const phoneInput = document.getElementById('modalAddFriendPhone')?.value;
    const nameInput = document.getElementById('modalAddFriendName')?.value;
    const cityInput = document.getElementById('modalAddFriendCity')?.value || 'Chennai';

    const res = loyaltyStore.addFriendByMobile(phoneInput, nameInput, cityInput);
    if (res.success) {
      if (window.showToast) window.showToast(res.message, 'success');
      this.closeAddFriendModal();
      this.activeAccountTab = 'friends';
      this.renderAccountView();
    } else {
      if (window.showToast) window.showToast(res.message, 'warning');
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
      if (route === 'account' && (!loyaltyStore || !loyaltyStore.isUserAuthenticated())) {
        this.currentRoute = 'login';
        window.location.hash = '#login';
        this.renderCurrentView();
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

    const headerSignInLink = document.getElementById('headerSignInLink');
    const headerProfileBtn = document.getElementById('headerProfileBtn');
    const pfpDropdown = document.getElementById('headerPfpDropdown');
    const isAuth = loyaltyStore && loyaltyStore.isUserAuthenticated() && loyaltyStore.profile;

    if (isAuth) {
      const prof = loyaltyStore.profile;
      const firstName = (prof.name || 'Privé').split(' ')[0];
      const initials = (prof.name || 'Member').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

      // In authenticated state: HIDE "Sign In" link, SHOW PFP Avatar button
      if (headerSignInLink) {
        headerSignInLink.classList.add('hidden');
        headerSignInLink.classList.remove('inline-flex');
      }

      if (headerProfileBtn) {
        headerProfileBtn.classList.remove('hidden');
        headerProfileBtn.classList.add('flex');
      }

      const headerPfpAvatar = document.getElementById('headerPfpAvatar');
      const headerPfpInitials = document.getElementById('headerPfpInitials');
      const dropdownPfpName = document.getElementById('dropdownPfpName');
      const dropdownPfpEmail = document.getElementById('dropdownPfpEmail');
      const dropdownPfpTier = document.getElementById('dropdownPfpTier');
      const dropdownPfpInitials = document.getElementById('dropdownPfpInitials');
      const dropdownAvatarContainer = document.getElementById('dropdownPfpAvatar');

      if (headerPfpInitials) headerPfpInitials.textContent = initials;
      if (dropdownPfpInitials) dropdownPfpInitials.textContent = initials;
      if (dropdownPfpName) dropdownPfpName.textContent = prof.name;
      if (dropdownPfpEmail) dropdownPfpEmail.textContent = prof.email || prof.displayPhone || prof.phone || '';
      if (dropdownPfpTier) dropdownPfpTier.textContent = `✨ ${prof.tier || 'Privé'} Member • ${prof.points || 0} Pts`;

      if (prof.avatar) {
        if (headerPfpAvatar) {
          headerPfpAvatar.innerHTML = `<img src="${prof.avatar}" alt="${prof.name}" class="w-full h-full object-cover rounded-full" onerror="this.outerHTML='<span class=\\'w-full h-full rounded-full bg-[#180A06] text-[#E6CA85] text-xs font-serif font-bold flex items-center justify-center\\'>${initials}</span>'" />`;
        }
        if (dropdownAvatarContainer) {
          dropdownAvatarContainer.innerHTML = `<img src="${prof.avatar}" alt="${prof.name}" class="w-full h-full object-cover rounded-full" onerror="this.outerHTML='<span class=\\'w-full h-full rounded-full bg-[#180A06] text-[#E6CA85] text-xs font-serif font-bold flex items-center justify-center\\'>${initials}</span>'" />`;
        }
      } else {
        if (headerPfpAvatar) {
          headerPfpAvatar.innerHTML = `<span id="headerPfpInitials" class="w-full h-full rounded-full bg-[#180A06] text-[#E6CA85] text-xs font-serif font-bold flex items-center justify-center">${initials}</span>`;
        }
        if (dropdownAvatarContainer) {
          dropdownAvatarContainer.innerHTML = `<div id="dropdownPfpInitials" class="w-full h-full rounded-full bg-[#180A06] text-[#E6CA85] font-serif font-bold text-sm flex items-center justify-center">${initials}</div>`;
        }
      }
    } else {
      // In unauthenticated guest state: SHOW "Sign In" link, HIDE PFP Avatar button
      if (headerSignInLink) {
        headerSignInLink.classList.remove('hidden');
        headerSignInLink.classList.add('inline-flex');
        headerSignInLink.setAttribute('href', '#login');
        headerSignInLink.setAttribute('title', 'Sign In or Register Profile');
      }

      if (headerProfileBtn) {
        headerProfileBtn.classList.add('hidden');
        headerProfileBtn.classList.remove('flex');
      }

      if (pfpDropdown) {
        pfpDropdown.classList.add('hidden');
      }

      // Reset dropdown fields so no cached profile is ever visible
      const dropdownPfpName = document.getElementById('dropdownPfpName');
      const dropdownPfpEmail = document.getElementById('dropdownPfpEmail');
      const dropdownPfpTier = document.getElementById('dropdownPfpTier');
      const dropdownPfpInitials = document.getElementById('dropdownPfpInitials');
      const headerPfpInitials = document.getElementById('headerPfpInitials');

      if (dropdownPfpName) dropdownPfpName.textContent = 'Privé Member';
      if (dropdownPfpEmail) dropdownPfpEmail.textContent = '';
      if (dropdownPfpTier) dropdownPfpTier.textContent = '✨ Privé Club';
      if (dropdownPfpInitials) dropdownPfpInitials.textContent = '👑';
      if (headerPfpInitials) headerPfpInitials.textContent = '👑';
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
      case 'login':
        this.renderLoginView(mainContainer, 'signin');
        break;
      case 'register':
        this.renderLoginView(mainContainer, 'register');
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

      // Eggless Toggle Filter
      if (this.activeFilter.onlyEggless && !p.isEggless) {
        return false;
      }

      // Dietary filter
      if (this.activeFilter.dietary !== 'all') {
        if (this.activeFilter.dietary === 'eggless' && !p.isEggless) return false;
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
        
        <!-- Category Tabs & Eggless Quick Filter -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div class="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            ${CATEGORIES.map(cat => `
              <button onclick="window.ladesioApp.setMenuCategory('${cat.id}')"
                      class="px-4 py-2 rounded-xl text-xs font-serif font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${this.selectedCategory === cat.id ? 'bg-[#B8945B] text-[#140602] font-bold shadow-lg ring-2 ring-[#E6CA85]/50' : 'bg-[#1F0C06] text-[#E6CA85] border border-[#B8945B]/30 hover:border-[#E6CA85]/60 hover:text-white'}">
                <span>${cat.name}</span>
              </button>
            `).join('')}
          </div>

          <!-- Prominent 100% Eggless Toggle Button -->
          <button type="button"
                  onclick="window.ladesioApp.toggleEgglessFilter()"
                  class="px-4 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all flex items-center gap-2 shadow-md cursor-pointer shrink-0 ${this.activeFilter.onlyEggless ? 'bg-emerald-600 text-white ring-2 ring-emerald-300 shadow-emerald-900/50' : 'bg-[#140602] text-emerald-400 border border-emerald-500/50 hover:bg-emerald-950/40'}">
            <span class="w-2.5 h-2.5 rounded-full ${this.activeFilter.onlyEggless ? 'bg-white' : 'bg-emerald-500'} ring-2 ring-emerald-400/40"></span>
            <span class="w-2 h-2 rounded-full ${this.activeFilter.onlyEggless ? 'bg-white' : 'bg-emerald-400'} ring-2 ring-emerald-400/40"></span><span class="font-cinzel tracking-wider text-[11px]">100% EGGLESS ONLY</span>
            ${this.activeFilter.onlyEggless ? '<span class="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full">ACTIVE</span>' : ''}
          </button>
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
    if (!loyaltyStore.isUserAuthenticated()) {
      this.currentRoute = 'login';
      window.location.hash = '#login';
      this.renderLoginView(container, 'signin');
      return;
    }
    if (!this.activeAccountTab) {
      this.activeAccountTab = 'creations';
    }
    const data = loyaltyStore.getData();
    const { profile, creations, orders, friends = [] } = data;

    container.innerHTML = `
      <!-- Privé Account Hero Header -->
      <div class="bg-gradient-to-b from-[#180A06] to-[#241009] text-[#FFFDF9] pt-10 pb-4 border-b border-[#B8945B]/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <!-- TOP ROW: Member Details (Left) + Balanced Metrics Dual Cards (Right) -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <!-- Left: Member Identity & Bio (7 cols) -->
            <div class="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
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

              <div class="space-y-1.5 flex-1 min-w-0">
                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span class="text-[10px] uppercase tracking-widest text-[#E6CA85] font-serif font-bold">La Desio Privé Member</span>
                  <span class="text-stone-500 text-xs">•</span>
                  <span class="text-[11px] text-[#D6C2B0] font-serif">📍 ${profile.city || 'Chennai'}</span>
                </div>
                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <h2 class="font-display text-2xl sm:text-3xl text-white font-bold">${profile.name}</h2>
                  <button onclick="window.ladesioApp.openEditProfileModal()" 
                          class="px-3 py-1 rounded-lg border border-[#B8945B]/40 hover:border-[#B8945B] text-[#E6CA85] hover:text-white bg-[#1A0A06]/70 text-xs font-serif transition-all flex items-center gap-1.5 shadow-sm cursor-pointer">
                    <span>✏️</span> Edit Profile & Bio
                  </button>
                  <!-- Minimal Music Icon Button -->
                  <button type="button"
                          onclick="window.ladesioSoundscape.toggleSoundscape()" 
                          class="soundscape-toggle-btn w-8 h-8 rounded-full border border-[#B8945B]/50 hover:border-[#E6CA85] text-[#E6CA85] hover:text-white bg-[#1A0A06]/80 flex items-center justify-center shadow-sm cursor-pointer transition-all relative"
                          title="Parisian Salon Music (Click to Toggle)">
                    <span class="music-icon text-sm leading-none">♫</span>
                    <span class="soundscape-pulse-dot absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 hidden animate-pulse border border-[#180A06]"></span>
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

            <!-- Right: Balanced Metrics Dual Cards (5 cols) -->
            <div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
              <!-- Card 1: Privé Status Card -->
              <div class="p-4 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 text-center shadow-lg flex flex-col justify-between">
                <div>
                  <span class="text-[9px] text-[#E6CA85] uppercase tracking-widest font-semibold block">Privé Tier Status</span>
                  <span class="font-display text-base sm:text-lg text-gold-gradient font-bold">✨ ${profile.tier}</span>
                </div>
                <div class="w-full bg-black/50 h-1.5 rounded-full my-2.5 overflow-hidden">
                  <div class="bg-gradient-to-r from-[#B8945B] to-[#E6CA85] h-full" style="width: ${(profile.points / profile.nextTierPoints) * 100}%"></div>
                </div>
                <span class="text-[10px] text-[#D6C2B0] font-mono">${profile.points} / ${profile.nextTierPoints} Pts to Royale</span>
              </div>

              <!-- Card 2: Quick Metrics Summary Card -->
              <div class="p-3.5 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 shadow-lg flex flex-col justify-between text-xs space-y-1.5">
                <div class="flex items-center justify-between border-b border-[#B8945B]/20 pb-1">
                  <span class="text-[#D6C2B0]">Saved Recipes:</span>
                  <strong class="text-[#E6CA85] font-mono font-bold">${creations.length}</strong>
                </div>
                <div class="flex items-center justify-between border-b border-[#B8945B]/20 pb-1">
                  <span class="text-[#D6C2B0]">Total Orders:</span>
                  <strong class="text-[#E6CA85] font-mono font-bold">${orders.length}</strong>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-[#D6C2B0]">Friends Circle:</span>
                  <strong class="text-[#E6CA85] font-mono font-bold">${friends.length}</strong>
                </div>
              </div>
            </div>

          </div>

          <!-- BOTTOM ROW: Interactive Luxury Navigation Tabs -->
          <div class="flex items-center gap-2 sm:gap-4 pt-1 border-b border-[#B8945B]/20 pb-0 overflow-x-auto">
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
                          <button onclick="window.ladesioApp.handleRemoveFriend('${friend.id}', '${friend.name}')"
                                  class="px-2.5 py-1 rounded-lg border border-rose-500/40 hover:border-rose-500 text-rose-300 hover:text-white bg-rose-950/40 hover:bg-rose-900/60 text-xs font-serif transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                                  title="Remove ${friend.name} from Circle">
                            <span>🗑️</span> Remove Friend
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
                    <div class="flex items-center gap-3">
                      <span class="text-xs font-serif text-[#E6CA85] bg-[#180A06] px-3.5 py-1.5 rounded-full border border-[#B8945B]/30 shrink-0">
                        🌟 ${friends.length} Circle Friends
                      </span>
                      <button type="button" onclick="window.ladesioApp.openAddFriendModal()"
                              class="px-4 py-2 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-md shrink-0 cursor-pointer">
                        <span>➕ Add Friend</span>
                      </button>
                    </div>
                  </div>

                  <!-- PROMINENT SEARCH BAR TO SEARCH & ADD FRIENDS BY MOBILE NUMBER -->
                  <div class="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#220B06] to-[#140603] border-2 border-[#B8945B]/60 shadow-2xl space-y-4">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h4 class="font-display text-lg text-white font-bold flex items-center gap-2">
                          <span>🔍</span> Search Friends by Mobile Number
                        </h4>
                        <p class="text-xs text-[#D6C2B0]">Search any member's 10-digit mobile number (or name) to find, connect, and view their creations.</p>
                      </div>
                    </div>

                    <!-- Search Input Bar with Country Flag -->
                    <div class="relative flex items-center rounded-2xl bg-black/70 border border-[#B8945B]/50 focus-within:border-[#E6CA85] overflow-hidden shadow-inner">
                      <div class="px-4 py-3 text-xs font-mono text-[#E6CA85] font-bold border-r border-[#B8945B]/30 bg-[#1A0804] flex items-center gap-1.5 shrink-0">
                        <span>🇮🇳 +91</span>
                      </div>
                      <input type="text"
                             id="friendMobileSearchInput"
                             oninput="window.ladesioApp.handleFriendSearchInput(this.value)"
                             placeholder="Search by 10-digit mobile number (e.g. 97904 96706, 95667 83614, 96774 07374) or name..."
                             class="w-full px-4 py-3 bg-transparent text-white text-xs font-mono placeholder-stone-500 focus:outline-none" />
                      <button type="button" 
                              onclick="window.ladesioApp.clearFriendSearch()"
                              class="px-4 py-3 text-stone-400 hover:text-white text-xs font-bold transition-colors cursor-pointer">
                        ✕
                      </button>
                    </div>

                    <!-- Live Real-Time Search Results Mount -->
                    <div id="friendSearchResultsMount" class="hidden space-y-3 pt-2"></div>
                  </div>

                  <div class="flex items-center justify-between pt-1">
                    <h4 class="font-display text-xl text-[#FFFDF9]">Active Circle Friends (${friends.length})</h4>
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
                            <div class="flex items-center gap-1.5 shrink-0">
                              <button onclick="event.stopPropagation(); window.ladesioApp.openEditFriendProfileModal('${f.id}')"
                                      class="p-2 rounded-xl bg-[#180A06] hover:bg-[#3A1F17] border border-[#B8945B]/30 hover:border-[#B8945B] text-[#E6CA85] hover:text-white text-xs transition-colors shrink-0"
                                      title="Edit Friend Name, Bio & Photo">
                                ✏️
                              </button>
                              <button onclick="event.stopPropagation(); window.ladesioApp.handleRemoveFriend('${f.id}', '${f.name}')"
                                      class="p-2 rounded-xl bg-[#180A06] hover:bg-rose-950/70 border border-rose-500/30 hover:border-rose-500 text-rose-300 hover:text-white text-xs transition-colors shrink-0"
                                      title="Remove ${f.name} from Circle">
                                🗑️
                              </button>
                            </div>
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

                        <!-- Actions: View creations & Remove -->
                        <div class="mt-6 flex items-center gap-2">
                          <button onclick="window.ladesioApp.viewFriendProfile('${f.id}')"
                                  class="flex-1 py-2.5 px-3 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md">
                            <span>View ${f.name.split(' ')[0]}'s Profile</span>
                            <span>→</span>
                          </button>
                          <button onclick="event.stopPropagation(); window.ladesioApp.handleRemoveFriend('${f.id}', '${f.name}')"
                                  class="py-2.5 px-3 rounded-xl border border-rose-500/40 hover:border-rose-500 bg-rose-950/40 hover:bg-rose-900/60 text-rose-200 hover:text-white text-xs font-serif transition-colors flex items-center justify-center gap-1 shadow-sm shrink-0 cursor-pointer"
                                  title="Remove ${f.name} from Circle">
                            <span>🗑️</span> Remove
                          </button>
                        </div>
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

    if (window.ladesioSoundscape) {
      window.ladesioSoundscape.updateSoundUI();
    }
  }

  // ==========================================
  // CHECKOUT PAGE VIEW
  // ==========================================
  renderCheckoutView(container) {
    if (!loyaltyStore.isUserAuthenticated()) {
      this.pendingRedirectRoute = 'checkout';
      this.renderLoginView(container, 'signin');
      if (window.showToast) {
        window.showToast('Please sign in or create an account to proceed with your order.', 'info');
      }
      return;
    }
    container.innerHTML = `<div id="checkoutFlowMount"></div>`;
    window.checkoutManager = new CheckoutManager('checkoutFlowMount', () => {
      this.renderNavigationBadges();
    });
    window.checkoutManager.init();
  }

  // ==========================================
  // REUSABLE BESPOKE ATELIER CARD COMPONENT (INR)
  // ==========================================
  renderProductCard(product, isNatural = false) {
    const inWishlist = cartStore.isInWishlist(product.id);
    
    // Find index or generate catalog opus number
    let productIndex = 1;
    if (typeof PRODUCTS !== 'undefined' && Array.isArray(PRODUCTS)) {
      const idx = PRODUCTS.findIndex(p => p.id === product.id);
      if (idx !== -1) productIndex = idx + 1;
    }
    const opusNumber = `OPUS N° ${String(productIndex).padStart(2, '0')}`;

    return `
      <div class="atelier-gallery-card flex flex-col justify-between group relative shadow-2xl rounded-sm">
        
        <!-- Architectural Corner Filigrees -->
        <div class="atelier-corner-accent atelier-corner-tl"></div>
        <div class="atelier-corner-accent atelier-corner-br"></div>

        <!-- Museum Passe-Partout Framed Artwork -->
        <div class="p-2.5 pb-0">
          <div class="relative h-64 overflow-hidden cursor-pointer bg-[#160703] border border-[#B8945B]/25 group/img"
               onclick="window.ladesioApp.openProductModal('${product.id}')">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            
            <!-- Archival Passe-Partout Vignette Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#150703]/95 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5">
              <span class="text-[#E6CA85] text-[10px] font-cinzel tracking-[0.2em] uppercase flex items-center gap-1.5 drop-shadow-md">
                <svg class="w-3.5 h-3.5 text-[#E6CA85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" stroke-width="1.6"></circle>
                  <path d="M21 21l-4.35-4.35" stroke-width="1.6" stroke-linecap="round"></path>
                </svg>
                Inspect Tasting Notes
              </span>
              <span class="text-[9px] font-mono text-[#E6CA85]/80 uppercase tracking-widest">[ OPUS VIEW ]</span>
            </div>

            <!-- Top Left: Archival Catalog Number & Gilded Seal -->
            <div class="absolute top-2.5 left-2.5 flex flex-col items-start gap-1.5 z-10">
              <span class="archival-opus-badge">
                <span class="text-[#DFBA73]">❖</span> ${opusNumber} • ${product.badge ? product.badge.toUpperCase() : 'SIGNATURE'}
              </span>
              <span class="sigillo-dietary-pure ${product.isEggless ? '' : 'border-rose-500/50 text-rose-300 bg-rose-950/80'}"
                    title="${product.isEggless ? '100% Eggless Pure Vegetarian' : 'Contains Egg'}">
                <span class="w-1.5 h-1.5 rounded-full ${product.isEggless ? 'bg-emerald-400' : 'bg-rose-400'}"></span>
                <span>${product.isEggless ? 'PURO VEGETARIANO' : 'TRADIZIONALE'}</span>
              </span>
            </div>

            <!-- Top Right: Delicate Hairline Wishlist Seal -->
            <button onclick="event.stopPropagation(); window.ladesioApp.toggleWishlist('${product.id}')"
                    class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-[#160703]/90 border border-[#B8945B]/40 hover:border-[#E6CA85] flex items-center justify-center transition-all hover:scale-110 shadow-lg z-10 group/wish"
                    title="Save to Bespoke Wishlist">
              <svg class="w-4 h-4 transition-colors ${inWishlist ? 'fill-rose-500 text-rose-500' : 'text-[#D4AF37] group-hover/wish:text-white'}" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Card Content: Italian Haute Editorial Hierarchy -->
        <div class="p-5 pt-3.5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <!-- Rating & Preparation Time Row -->
            <div class="flex items-center justify-between text-xs mb-2 border-b border-[#B8945B]/15 pb-2">
              <div class="rating-diamond-seal cursor-pointer hover:opacity-85"
                   onclick="window.ladesioApp.openProductModal('${product.id}')"
                   title="Verified Connoisseur Reviews">
                <span class="diamond-glyph">✦</span>
                <span class="diamond-glyph">✦</span>
                <span class="diamond-glyph">✦</span>
                <span class="diamond-glyph">✦</span>
                <span class="diamond-glyph">✦</span>
                <strong class="font-cinzel text-xs text-[#FFFDF9] ml-1">${product.rating.toFixed(2)}</strong>
                <span class="text-[#C4B2A3]/60 text-[10px] font-sans font-light">(${product.reviewsCount})</span>
              </div>

              <!-- Prep Time with Hairline Vector Clock -->
              <div class="flex items-center gap-1.5 text-[10px] font-cinzel tracking-widest text-[#E6CA85]/80 uppercase">
                <svg class="w-3 h-3 text-[#B8945B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" stroke-width="1.5"></circle>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7v5l3 2"></path>
                </svg>
                <span>${product.prepTime ? product.prepTime.split(' ')[0] : '15'} MIN</span>
              </div>
            </div>

            <!-- Dessert Name in Monumental Editorial Serif -->
            <h3 class="font-bodoni text-2xl text-[#FFFDF9] group-hover:text-[#E6CA85] transition-colors leading-tight tracking-tight cursor-pointer"
                onclick="window.ladesioApp.openProductModal('${product.id}')">
              ${product.name}
            </h3>

            <!-- Sommelier Tasting Notes Script -->
            <p class="sommelier-tasting-notes text-xs mt-1 tracking-wide">
              “${product.subtitle}”
            </p>

            <!-- Description -->
            <p class="text-[11.5px] text-[#D8C6B6] mt-2 line-clamp-2 leading-relaxed font-light">
              ${product.description}
            </p>

            <!-- Dietary Tags in Fine Italian Small Caps -->
            <div class="flex flex-wrap gap-1.5 mt-3">
              ${product.dietary.slice(0, 2).map(d => `
                <span class="px-2 py-0.5 rounded-sm bg-[#1A0A05] text-[9.5px] text-[#E6CA85] border border-[#B8945B]/30 font-cinzel uppercase tracking-widest">
                  ${d}
                </span>
              `).join('')}
            </div>

            <!-- Nutrition Highlights with Minimalist Vector Accents -->
            ${product.nutrition ? `
              <div class="mt-3 px-3 py-1.5 rounded-sm bg-[#160703] border border-[#B8945B]/25 flex items-center justify-between text-[10.5px]">
                <div class="flex items-center gap-1.5 font-cinzel text-[#FFFDF9]">
                  <svg class="w-3 h-3 text-[#E6CA85]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"></path>
                  </svg>
                  <span>${product.nutrition.calories} <span class="text-[8.5px] font-sans text-[#B8945B] tracking-wider">KCAL</span></span>
                </div>
                <div class="flex items-center gap-2 font-mono text-[9.5px] text-[#E6CA85]">
                  <span>PRO: <strong class="text-[#FFFDF9]">${product.nutrition.protein}</strong></span>
                  <span class="text-[#B8945B]/30">|</span>
                  <span>CARB: <strong class="text-[#FFFDF9]">${product.nutrition.carbs}</strong></span>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Bottom Action Row: Prezzo & Haute Buttons -->
          <div class="pt-3.5 border-t border-[#B8945B]/20 flex items-center justify-between gap-2">
            <div>
              <span class="text-[8px] uppercase tracking-[0.24em] text-[#B8945B] block font-cinzel font-semibold">PREZZO</span>
              <div class="flex items-baseline gap-1.5">
                ${product.originalPrice ? `<span class="text-[11px] text-[#A89280] line-through font-mono">₹${product.originalPrice}</span>` : ''}
                <span class="font-bodoni font-bold text-2xl text-[#FFFDF9] tracking-tight">₹${product.price}</span>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="window.ladesioApp.openProductModal('${product.id}')"
                      class="btn-atelier-inspect rounded-sm shadow-sm" title="Explore Atelier Notes & Customizations">
                Inspect
              </button>
              <button onclick="window.ladesioApp.quickAddToCart('${product.id}')"
                      class="btn-atelier-acquire rounded-sm shadow-md" title="Add to Bespoke Shopping Bag">
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
              <span class="flex items-center gap-2">
                <span class="text-amber-400">★ ${product.rating.toFixed(2)}</span>
                <span class="text-[#D6C2B0]/70">(${product.reviewsCount} reviews)</span>
                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold border ${product.isEggless ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300' : 'bg-rose-950/70 border-rose-600/50 text-rose-300'} flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full ${product.isEggless ? 'bg-emerald-400' : 'bg-rose-500'}"></span>
                  <span>${product.isEggless ? '100% Eggless' : 'Contains Egg'}</span>
                </span>
              </span>
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
                Dietary: ${product.isEggless ? '🟢 100% Eggless Pure Vegetarian' : '🔴 Contains Egg'}<br/>
                Allergens: ${product.allergens.join(', ') || 'None'}
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

          <!-- Verified Customer Reviews Module -->
          <div class="p-3.5 rounded-xl bg-[#180804] border border-[#B8945B]/35 space-y-2.5 text-xs">
            <div class="flex items-center justify-between border-b border-[#B8945B]/20 pb-2">
              <div class="flex items-center gap-1.5">
                <span class="text-amber-400 font-bold">★</span>
                <span class="font-display font-bold text-sm text-[#FFFDF9]">${product.rating.toFixed(2)}</span>
                <span class="text-[#D6C2B0]/70 text-[11px]">(${product.reviewsCount} customer reviews)</span>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-[10px] font-serif">
                ✓ Verified Atelier Buyers
              </span>
            </div>

            <div class="space-y-2 max-h-40 overflow-y-auto pr-1">
              ${(product.reviews || [
                { author: 'Atelier Patron', city: 'Chennai', rating: 5, date: 'Recent', title: 'Exceptional Balance', comment: 'Every layer of this dessert was executed with culinary precision.' }
              ]).map(r => `
                <div class="p-2.5 rounded-lg bg-[#241109] border border-[#B8945B]/20 space-y-1 text-left">
                  <div class="flex items-center justify-between">
                    <span class="font-serif font-bold text-[#E6CA85] text-[11px]">${r.author} <span class="text-stone-400 font-normal">(${r.city || 'Chennai'})</span></span>
                    <span class="text-amber-400 text-[10px]">${'★'.repeat(r.rating || 5)}</span>
                  </div>
                  <p class="font-serif font-semibold text-[#FFFDF9] text-[11px]">${r.title}</p>
                  <p class="text-[11px] text-[#D6C2B0] italic leading-relaxed">"${r.comment}"</p>
                  <span class="text-[9px] text-stone-400 block pt-0.5">${r.date} • Verified Purchase</span>
                </div>
              `).join('')}
            </div>
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
      <button onclick="window.ladesioApp.handleProceedToCheckout()"
              class="w-full mt-4 py-3 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-xl">
        <span>Proceed to Checkout</span> 💳
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

    if (typeof window !== 'undefined' && window.ladesioSoundscape && typeof window.ladesioSoundscape.playCrystalChime === 'function') {
      window.ladesioSoundscape.playCrystalChime();
    }

    window.showToast(`"${prod.name}" added to bag!`, 'success');
  }

  toggleWishlist(productId) {
    const added = cartStore.toggleWishlist(productId);
    const prod = PRODUCTS.find(p => p.id === productId);
    if (added) {
      if (typeof window !== 'undefined' && window.ladesioSoundscape && typeof window.ladesioSoundscape.playCrystalChime === 'function') {
        window.ladesioSoundscape.playCrystalChime();
      }
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

  toggleEgglessFilter() {
    this.activeFilter.onlyEggless = !this.activeFilter.onlyEggless;
    this.renderMenuView(document.getElementById('app-main-content'));
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
    this.activeFilter = { priceMax: 3500, dietary: 'all', onlyEggless: false, sortBy: 'recommended' };
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
      id: orderId || 'DESIO-9142',
      status: 'Out on Live Dispatch',
      date: 'Today',
      deliverySlot: 'Express Artisanal — Within 14 Mins (Live Traffic)',
      trackingNumber: 'IN-EXP-9142-DESIO',
      address: { city: 'Chennai', street: 'No.60/A Gnanamani St, West Jafferkhanpet' },
      total: 1040,
      distanceKm: 3.8,
      estimatedMinutes: 14
    };

    let modal = document.getElementById('orderTrackerModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'orderTrackerModal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto';
      document.body.appendChild(modal);
    }

    const city = order.address?.city || 'Chennai';
    const street = order.address?.street || 'Patron Residence';
    const distanceKm = order.distanceKm || 3.8;
    const estMinutes = order.estimatedMinutes || 14;
    const trackingNo = order.trackingNumber || `IN-EXP-${String(order.id).replace('DESIO-', '')}-DESIO`;

    const origin = encodeURIComponent('LA DESIO Flagship Atelier, West Jafferkhanpet, Chennai');
    const destination = encodeURIComponent(`${street}, ${city}`);
    const googleEmbedUrl = `https://maps.google.com/maps?saddr=${origin}&daddr=${destination}&t=m&z=14&output=embed`;

    modal.innerHTML = `
      <div class="relative w-full max-w-4xl bg-[#180A06] rounded-3xl border border-[#B8945B]/40 shadow-2xl overflow-hidden my-auto text-[#FFFDF9] flex flex-col max-h-[92vh]">
        
        <!-- Google Maps Top Chrome Bar -->
        <div class="bg-[#120804] border-b border-[#B8945B]/30 p-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#10B981] via-[#047857] to-[#064E3B] border border-emerald-400/40 flex items-center justify-center text-xl shadow-lg">
              📍
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-display font-bold text-sm tracking-wide text-white">Google Maps Live Dispatch</span>
                <span class="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-[9.5px] font-bold animate-pulse flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  LIVE TRAFFIC ACTIVE
                </span>
              </div>
              <p class="text-[11px] text-[#D6C2B0] font-mono">Consignment ${trackingNo} • ${order.id}</p>
            </div>
          </div>

          <!-- Mode Switcher & Close -->
          <div class="flex items-center gap-2">
            <div class="inline-flex rounded-xl bg-black/60 p-1 border border-[#B8945B]/30 text-xs">
              <button id="trackerRadarBtn" onclick="window.ladesioApp.switchTrackerView('radar')"
                      class="px-3 py-1 rounded-lg font-serif text-[11px] font-semibold transition-all bg-[#B8945B] text-black shadow cursor-pointer">
                🚗 Traffic Radar
              </button>
              <button id="trackerEmbedBtn" onclick="window.ladesioApp.switchTrackerView('embed')"
                      class="px-3 py-1 rounded-lg font-serif text-[11px] font-semibold transition-all text-[#D6C2B0] hover:text-white cursor-pointer">
                🗺️ Satellite Embed
              </button>
            </div>
            <button onclick="window.ladesioApp.closeOrderTracker()"
                    class="w-9 h-9 rounded-xl bg-black/40 hover:bg-black/80 border border-[#B8945B]/30 hover:border-[#E6CA85] text-stone-300 hover:text-white flex items-center justify-center text-base transition-colors cursor-pointer"
                    title="Close Tracker">✕</button>
          </div>
        </div>

        <!-- Google Route Navigation Sub-Header Bar -->
        <div class="bg-[#1A0905] border-b border-[#B8945B]/20 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div class="flex items-center gap-2 overflow-x-auto py-0.5">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0"></span>
            <span class="text-stone-300 truncate max-w-[200px] sm:max-w-xs font-serif">LA DESIO Flagship (Jafferkhanpet)</span>
            <span class="text-[#E6CA85] font-bold">➔</span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#E6CA85] shrink-0"></span>
            <span class="text-white font-bold truncate max-w-[220px] sm:max-w-xs font-serif">${street}, ${city}</span>
          </div>

          <!-- Dynamic Live Countdown Pill -->
          <div class="flex items-center gap-3">
            <div class="px-3 py-1 rounded-xl bg-black/60 border border-[#B8945B]/40 flex items-center gap-2 font-mono">
              <span class="text-[#E6CA85] text-[11px]">⏱️ ETA:</span>
              <strong id="liveTrackerCountdown" class="text-emerald-400 font-bold text-xs">${estMinutes}:00</strong>
              <span class="text-[10px] text-stone-400">(${distanceKm} km)</span>
            </div>
          </div>
        </div>

        <!-- Scrollable Middle Section: Map & Telemetry -->
        <div class="overflow-y-auto flex-1 p-4 sm:p-6 space-y-5">
          
          <!-- MAP CONTAINER -->
          <div class="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#B8945B]/40 shadow-2xl">
            
            <!-- VIEW A: Interactive Traffic Radar View -->
            <div id="trackerRadarView" class="w-full h-full relative google-map-dark-canvas overflow-hidden select-none">
              
              <!-- SVG Road Network & Traffic Lines -->
              <svg class="absolute inset-0 w-full h-full" viewBox="0 0 800 450" preserveAspectRatio="none">
                <!-- Background Secondary Grid Streets -->
                <line x1="0" y1="90" x2="800" y2="90" stroke="#1c2333" stroke-width="6" />
                <line x1="0" y1="180" x2="800" y2="180" stroke="#1c2333" stroke-width="8" />
                <line x1="0" y1="290" x2="800" y2="290" stroke="#1c2333" stroke-width="6" />
                <line x1="0" y1="390" x2="800" y2="390" stroke="#1c2333" stroke-width="8" />
                
                <line x1="120" y1="0" x2="120" y2="450" stroke="#1c2333" stroke-width="6" />
                <line x1="260" y1="0" x2="260" y2="450" stroke="#1c2333" stroke-width="8" />
                <line x1="420" y1="0" x2="420" y2="450" stroke="#1c2333" stroke-width="8" />
                <line x1="580" y1="0" x2="580" y2="450" stroke="#1c2333" stroke-width="6" />
                <line x1="710" y1="0" x2="710" y2="450" stroke="#1c2333" stroke-width="8" />

                <!-- Road Labels -->
                <text x="30" y="80" fill="#4b5563" font-size="10" font-family="sans-serif">Mount-Poonamallee Rd</text>
                <text x="270" y="30" fill="#4b5563" font-size="10" font-family="sans-serif">100 Feet Inner Ring</text>
                <text x="430" y="30" fill="#4b5563" font-size="10" font-family="sans-serif">Anna Salai Arterial</text>
                <text x="590" y="80" fill="#4b5563" font-size="10" font-family="sans-serif">Guindy Flyover Corridor</text>

                <!-- ACTIVE DISPATCH ROUTE: Primary Path with Live Traffic Segments -->
                <!-- Segment 1: FREE FLOW (Emerald Green) -->
                <path d="M 120 340 L 260 340 L 260 210 L 380 210" 
                      stroke="#10B981" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" class="opacity-90 shadow" />
                
                <!-- Segment 2: MODERATE TRAFFIC (Amber/Orange near junction) -->
                <path d="M 380 210 L 490 210 L 490 140" 
                      stroke="#F59E0B" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" class="opacity-95" />
                
                <!-- Segment 3: SLIGHT SLOWDOWN / HEAVY CONGESTION (Crimson red) with Smart Detour Bypass -->
                <path d="M 490 140 L 560 140" 
                      stroke="#EF4444" stroke-width="7" stroke-linecap="round" fill="none" opacity="0.4" stroke-dasharray="4 4" />
                
                <!-- Smart Detour Path (Cyan/Green flow) -->
                <path d="M 490 140 L 490 100 L 620 100 L 620 140 L 710 140" 
                      stroke="#10B981" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" class="opacity-95" />

                <!-- Animated Direction Arrows on the active route -->
                <path d="M 120 340 L 260 340 L 260 210 L 490 210 L 490 100 L 620 100 L 620 140 L 710 140"
                      stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" class="traffic-dash-flow opacity-80" />

                <!-- Radar Rings around Destination -->
                <circle cx="710" cy="140" r="30" fill="none" stroke="#E6CA85" stroke-width="1.5" class="radar-ping-ring" opacity="0.6" />
                <circle cx="710" cy="140" r="50" fill="none" stroke="#E6CA85" stroke-width="1" class="radar-ping-ring" opacity="0.3" />
              </svg>

              <!-- Origin Marker: LA DESIO Atelier -->
              <div class="absolute left-[120px] top-[340px] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div class="px-2 py-0.5 rounded-md bg-[#180A06] border border-[#B8945B] text-[9px] font-serif text-[#E6CA85] font-bold shadow-lg whitespace-nowrap mb-1">
                  🏛️ LA DESIO Hub
                </div>
                <div class="w-7 h-7 rounded-full bg-gradient-to-br from-[#B8945B] to-[#E6CA85] p-0.5 shadow-xl flex items-center justify-center text-black text-xs font-bold ring-4 ring-[#B8945B]/30">
                  🏰
                </div>
              </div>

              <!-- Destination Marker: Patron Home -->
              <div class="absolute left-[710px] top-[140px] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div class="px-2.5 py-1 rounded-md bg-emerald-950/90 border border-emerald-500 text-[10px] font-serif text-white font-bold shadow-2xl whitespace-nowrap mb-1 flex items-center gap-1">
                  <span>📍 Your Address</span>
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                </div>
                <div class="w-8 h-8 rounded-full bg-emerald-500 p-0.5 shadow-2xl flex items-center justify-center text-black text-sm font-bold ring-4 ring-emerald-500/40 animate-bounce">
                  🏠
                </div>
              </div>

              <!-- Live Moving Courier Vehicle Marker (Animated along path) -->
              <div id="liveCourierVehicle" 
                   class="absolute z-30 flex flex-col items-center transition-all duration-1000 ease-linear"
                   style="left: 420px; top: 210px; transform: translate(-50%, -50%);">
                
                <!-- Telemetry floating label -->
                <div class="px-2.5 py-1 rounded-xl bg-black/95 border border-[#E6CA85] text-[10px] text-[#E6CA85] font-mono shadow-2xl flex items-center gap-2 whitespace-nowrap mb-1.5 live-glow-badge">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Pierre M. (Chauffeur) • 34 km/h</span>
                </div>

                <!-- Vehicle Icon with Sonar Glow -->
                <div class="relative flex items-center justify-center">
                  <div class="absolute w-12 h-12 rounded-full bg-[#E6CA85]/25 radar-ping-ring"></div>
                  <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#B8945B] via-[#E6CA85] to-[#B8945B] p-1 shadow-2xl flex items-center justify-center text-black text-lg font-bold ring-4 ring-[#B8945B]/40">
                    🚐
                  </div>
                </div>
              </div>

              <!-- Google Maps Controls & Legend Overlay -->
              <!-- Top Left Traffic Badge -->
              <div class="absolute top-3 left-3 z-20 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#B8945B]/30 text-[10px] text-stone-300 font-mono flex items-center gap-2 shadow-lg">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Live Google Traffic Layer (Typical Evening Speed: 32 km/h)</span>
              </div>

              <!-- Bottom Left: Speed Legend -->
              <div class="absolute bottom-3 left-3 z-20 bg-black/85 backdrop-blur-md p-2.5 rounded-xl border border-[#B8945B]/30 text-[9.5px] font-mono text-stone-300 space-y-1 shadow-lg">
                <span class="text-[#E6CA85] font-bold block">Traffic Density:</span>
                <div class="flex items-center gap-3">
                  <span class="flex items-center gap-1"><span class="w-3 h-1.5 bg-[#10B981] rounded-full"></span> Fast (>40km/h)</span>
                  <span class="flex items-center gap-1"><span class="w-3 h-1.5 bg-[#F59E0B] rounded-full"></span> Slow (20-40km/h)</span>
                  <span class="flex items-center gap-1"><span class="w-3 h-1.5 bg-[#EF4444] rounded-full"></span> Congested (&lt;20km/h)</span>
                </div>
              </div>

              <!-- Bottom Right: Map Zoom & Recenter Controls -->
              <div class="absolute bottom-3 right-3 z-20 flex flex-col gap-1.5">
                <button type="button" onclick="window.ladesioApp.recenterOnCourier()" 
                        class="w-8 h-8 rounded-lg bg-black/80 hover:bg-[#B8945B] border border-[#B8945B]/40 text-[#E6CA85] hover:text-black flex items-center justify-center text-sm shadow transition-colors cursor-pointer"
                        title="Recenter on Courier">
                  🎯
                </button>
                <button type="button" onclick="if(window.showToast) window.showToast('Zoom Level: 14.5x (Atelier Precision)', 'info');" 
                        class="w-8 h-8 rounded-lg bg-black/80 hover:bg-[#B8945B] border border-[#B8945B]/40 text-[#E6CA85] hover:text-black flex items-center justify-center text-sm shadow transition-colors font-bold cursor-pointer"
                        title="Zoom In">
                  +
                </button>
                <button type="button" onclick="if(window.showToast) window.showToast('Zoom Level: 12.0x', 'info');" 
                        class="w-8 h-8 rounded-lg bg-black/80 hover:bg-[#B8945B] border border-[#B8945B]/40 text-[#E6CA85] hover:text-black flex items-center justify-center text-sm shadow transition-colors font-bold cursor-pointer"
                        title="Zoom Out">
                  −
                </button>
              </div>

            </div>

            <!-- VIEW B: Dynamic Google Maps Embed (iframe) -->
            <div id="trackerGoogleEmbedView" class="w-full h-full relative hidden">
              <iframe
                src="${googleEmbedUrl}"
                class="w-full h-full border-0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                title="Google Maps Live Directions">
              </iframe>
              <div class="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-[#B8945B]/40 text-[10px] text-[#E6CA85] font-mono z-10">
                <span>Google Maps Direct Satellite</span>
              </div>
            </div>

          </div>

          <!-- DISPATCH TELEMETRY & CHAUFFEUR DOSSIER (2 Columns) -->
          <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
            
            <!-- Left: Chauffeur & Vehicle Credentials -->
            <div class="md:col-span-6 bg-[#200E08] rounded-2xl border border-[#B8945B]/30 p-4 space-y-3 shadow-lg flex flex-col justify-between">
              <div class="flex items-start gap-3.5">
                <div class="relative shrink-0">
                  <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#B8945B] to-[#E6CA85] p-0.5 shadow-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                         alt="Chauffeur Pierre" class="w-full h-full object-cover rounded-full" />
                  </div>
                  <span class="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#200E08]" title="Active Online"></span>
                </div>

                <div class="space-y-0.5 flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <h4 class="font-serif font-bold text-sm text-white">Pierre Moreau</h4>
                    <span class="px-2 py-0.5 rounded-full bg-[#B8945B]/20 text-[#E6CA85] text-[10px] font-mono font-bold">4.98 ★</span>
                  </div>
                  <p class="text-[11px] text-[#E6CA85] font-serif">Senior Atelier Chauffeur • 1,420 Deliveries</p>
                  <p class="text-[10px] text-[#D6C2B0]">Vehicle: Mercedes Sprinter Cryo-Van (#TN-09-DE-9142)</p>
                </div>
              </div>

              <!-- Smart Climate Chamber Telemetry -->
              <div class="p-2.5 rounded-xl bg-[#140603] border border-[#B8945B]/20 flex items-center justify-between text-[11px] font-mono">
                <div class="flex items-center gap-1.5">
                  <span class="text-sky-300">❄️ Casket Sensor:</span>
                  <strong class="text-white">-4.2°C</strong>
                </div>
                <div class="flex items-center gap-1.5 text-emerald-400">
                  <span>● Nitrogen Shield Active</span>
                </div>
              </div>

              <!-- Chauffeur Action Controls -->
              <div class="flex items-center gap-2 pt-1">
                <a href="tel:+919345396700" 
                   class="flex-1 py-2 px-3 rounded-xl bg-[#180A06] border border-[#B8945B]/40 hover:border-[#E6CA85] text-[#E6CA85] hover:text-white font-serif text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5 shadow cursor-pointer">
                  <span>📞</span> Call Chauffeur
                </a>
                <button type="button" onclick="if(window.showToast) window.showToast('Priority SMS dispatched to Chauffeur Pierre', 'success');"
                        class="flex-1 py-2 px-3 rounded-xl bg-[#180A06] border border-[#B8945B]/40 hover:border-[#E6CA85] text-[#E6CA85] hover:text-white font-serif text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5 shadow cursor-pointer">
                  <span>💬</span> Message Chauffeur
                </button>
              </div>
            </div>

            <!-- Right: Real-Time Traffic & Route Intelligence Feed -->
            <div class="md:col-span-6 bg-[#200E08] rounded-2xl border border-[#B8945B]/30 p-4 space-y-2.5 shadow-lg flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between border-b border-[#B8945B]/20 pb-2 mb-2">
                  <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold">Live Traffic & Dispatch Log</span>
                  <span class="text-[10px] text-[#D6C2B0] font-mono">Auto-Refreshing</span>
                </div>

                <div class="space-y-2 text-[11px] max-h-36 overflow-y-auto pr-1">
                  <div class="flex items-start gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">● 16:15</span>
                    <p class="text-[#D6C2B0]">Artisanal dessert placed in liquid nitrogen cryo-casket (-4°C locked).</p>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-emerald-400 font-bold shrink-0">● 16:21</span>
                    <p class="text-[#D6C2B0]">Dispatched from LA Desio Flagship Atelier via West Jafferkhanpet.</p>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-amber-400 font-bold shrink-0">● 16:26</span>
                    <p class="text-stone-300">🚦 Google Traffic Alert: Anna Salai bottleneck detected (+2m). Automatic smart reroute applied via Guindy Inner Ring.</p>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-[#E6CA85] font-bold shrink-0">● Now</span>
                    <p class="text-white font-semibold">Cruising at 34 km/h along 100ft road corridor. Approximately 1.4 km remaining.</p>
                  </div>
                </div>
              </div>

              <!-- Order Reference & Total Badge -->
              <div class="pt-2 border-t border-[#B8945B]/20 flex items-center justify-between text-xs">
                <span class="text-[#D6C2B0]">Order Ref: <strong class="text-white font-mono">${order.id}</strong></span>
                <span class="text-gold-gradient font-display font-bold text-sm">Paid: ₹${order.total ? Number(order.total).toFixed(2) : '1,040.00'}</span>
              </div>
            </div>

          </div>

        </div>

        <!-- Footer Actions -->
        <div class="bg-[#120804] border-t border-[#B8945B]/30 p-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div class="flex items-center gap-2 text-xs text-[#D6C2B0]">
            <span>✨ White-Glove Handover:</span>
            <strong class="text-[#E6CA85]">Contactless Delivery with Temperature Seal</strong>
          </div>

          <div class="flex items-center gap-3">
            <button onclick="window.ladesioApp.reorderOrder('${order.id}'); window.ladesioApp.closeOrderTracker();"
                    class="py-2.5 px-5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-lg cursor-pointer">
              <span>🔁</span> Reorder Items
            </button>
            <button onclick="window.ladesioApp.closeOrderTracker()"
                    class="py-2.5 px-5 rounded-xl border border-white/20 hover:border-white text-white font-serif text-xs font-semibold transition-colors cursor-pointer">
              Close Tracker
            </button>
          </div>
        </div>

      </div>
    `;

    modal.classList.remove('hidden');

    // Start live vehicle simulation & countdown timer
    this.startTrackerSimulation(estMinutes);
  }

  closeOrderTracker() {
    if (this.trackerInterval) {
      clearInterval(this.trackerInterval);
      this.trackerInterval = null;
    }
    const modal = document.getElementById('orderTrackerModal');
    if (modal) modal.classList.add('hidden');
  }

  switchTrackerView(mode) {
    const radar = document.getElementById('trackerRadarView');
    const embed = document.getElementById('trackerGoogleEmbedView');
    const radarBtn = document.getElementById('trackerRadarBtn');
    const embedBtn = document.getElementById('trackerEmbedBtn');

    if (mode === 'embed') {
      if (radar) radar.classList.add('hidden');
      if (embed) embed.classList.remove('hidden');
      if (radarBtn) {
        radarBtn.className = 'px-3 py-1 rounded-lg font-serif text-[11px] font-semibold transition-all text-[#D6C2B0] hover:text-white cursor-pointer';
      }
      if (embedBtn) {
        embedBtn.className = 'px-3 py-1 rounded-lg font-serif text-[11px] font-semibold transition-all bg-[#B8945B] text-black shadow cursor-pointer';
      }
    } else {
      if (embed) embed.classList.add('hidden');
      if (radar) radar.classList.remove('hidden');
      if (embedBtn) {
        embedBtn.className = 'px-3 py-1 rounded-lg font-serif text-[11px] font-semibold transition-all text-[#D6C2B0] hover:text-white cursor-pointer';
      }
      if (radarBtn) {
        radarBtn.className = 'px-3 py-1 rounded-lg font-serif text-[11px] font-semibold transition-all bg-[#B8945B] text-black shadow cursor-pointer';
      }
    }
  }

  recenterOnCourier() {
    const courier = document.getElementById('liveCourierVehicle');
    if (courier) {
      courier.classList.add('scale-125');
      setTimeout(() => courier.classList.remove('scale-125'), 600);
    }
    if (window.showToast) {
      window.showToast('🎯 Radar Camera Centered on Courier Van #08', 'info');
    }
  }

  startTrackerSimulation(initialMinutes) {
    if (this.trackerInterval) {
      clearInterval(this.trackerInterval);
    }
    let totalSeconds = Math.max(120, Math.round((initialMinutes || 14) * 60));
    const countdownEl = document.getElementById('liveTrackerCountdown');
    const vehicleEl = document.getElementById('liveCourierVehicle');

    const waypoints = [
      { x: 260, y: 340 },
      { x: 260, y: 250 },
      { x: 340, y: 210 },
      { x: 420, y: 210 },
      { x: 490, y: 210 },
      { x: 490, y: 150 },
      { x: 490, y: 100 },
      { x: 550, y: 100 },
      { x: 620, y: 100 },
      { x: 670, y: 120 },
      { x: 700, y: 135 }
    ];

    let currentWaypointIdx = 3;

    this.trackerInterval = setInterval(() => {
      totalSeconds = Math.max(0, totalSeconds - 1);
      const mins = Math.floor(totalSeconds / 60);
      const secs = totalSeconds % 60;
      if (countdownEl) {
        countdownEl.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
      }

      if (totalSeconds % 4 === 0 && vehicleEl) {
        currentWaypointIdx = (currentWaypointIdx + 1) % waypoints.length;
        const pt = waypoints[currentWaypointIdx];
        vehicleEl.style.left = `${pt.x}px`;
        vehicleEl.style.top = `${pt.y}px`;
      }
    }, 1000);
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
            <div class="flex items-center gap-3">
              <button type="button" onclick="window.ladesioApp.resetFriendProfile('${friend.id}')"
                      class="text-[11px] font-serif text-stone-400 hover:text-white underline">
                Reset Default
              </button>
              <button type="button" onclick="window.ladesioApp.closeEditFriendProfileModal(); window.ladesioApp.handleRemoveFriend('${friend.id}', '${friend.name}')"
                      class="text-[11px] font-serif text-rose-400 hover:text-rose-200 flex items-center gap-1 hover:underline cursor-pointer">
                <span>🗑️</span> Remove Friend
              </button>
            </div>
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

  handleProceedToCheckout() {
    this.closeCartDrawer();
    if (!loyaltyStore.isUserAuthenticated()) {
      this.pendingRedirectRoute = 'checkout';
      window.location.hash = '#login';
      if (window.showToast) {
        window.showToast('Please sign in or create an account to proceed with your order.', 'info');
      }
    } else {
      window.location.hash = '#checkout';
    }
  }




// ==========================================
  // LUXURY E-COMMERCE LOGIN & REGISTRATION PORTAL
  // ==========================================
  renderAccountLockScreen() {
    const container = document.getElementById('app-main-content');
    if (container) {
      this.renderLoginView(container, 'signin');
      return container.innerHTML;
    }
    return `<div id="loginPortalContainer"></div>`;
  }

  renderLoginView(container = document.getElementById('app-main-content'), initialTab = 'signin', authMethod = 'email') {
    if (!container) return;
    this.activeAuthTab = initialTab;
    this.activeAuthMethod = authMethod;
    if (!this.mobileAuthStep) this.mobileAuthStep = 'phone';

    container.innerHTML = `
      <div class="min-h-[82vh] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center">
        <!-- Breadcrumb & Brand Subhead -->
        <div class="mb-6 sm:mb-8 text-center sm:text-left">
          <div class="flex items-center justify-center sm:justify-start gap-2 text-xs font-serif tracking-wider uppercase text-stone-400">
            <a href="#home" class="hover:text-[#E6CA85] transition-colors">Home Salon</a>
            <span class="text-[#B8945B]/60">/</span>
            <span class="text-[#E6CA85] font-semibold">La Desio Privé Club</span>
            <span class="text-[#B8945B]/60">/</span>
            <span class="text-stone-300" id="authBreadcrumbAction">${initialTab === 'signin' ? 'Sign In' : 'Privé Registration'}</span>
          </div>
        </div>

        <!-- Split-Screen Editorial Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          <!-- LEFT COLUMN: EDITORIAL BRAND SHOWCASE (Desktop Luxury Editorial) -->
          <div class="hidden lg:flex lg:col-span-5 relative rounded-3xl overflow-hidden border border-[#B8945B]/40 shadow-2xl flex-col justify-between p-8 xl:p-10 bg-cover bg-center"
               style="background-image: linear-gradient(180deg, rgba(18, 7, 4, 0.84) 0%, rgba(26, 9, 5, 0.94) 75%, rgba(18, 7, 4, 0.98) 100%), url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85');">
            
            <!-- Top Crest & Heritage -->
            <div class="space-y-6">
              <div class="flex items-center gap-3.5">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2D140C] to-[#140804] border border-[#B8945B]/60 flex items-center justify-center shadow-lg p-2">
                  <img src="Assets/Logo/emblem_transparent.png" alt="La Desio Emblem" class="w-full h-full object-contain" onerror="this.outerHTML='<span class=\'text-2xl\'>👑</span>'" />
                </div>
                <div>
                  <h3 class="font-serif text-base tracking-[0.2em] uppercase text-[#E6CA85] font-bold">La Desio Privé</h3>
                  <p class="text-[11px] text-stone-300 font-sans tracking-wide">Italian Patisserie Connoisseurs</p>
                </div>
              </div>

              <div class="space-y-2">
                <span class="text-[10px] uppercase font-serif tracking-[0.3em] text-[#B8945B] font-bold block">Exclusive Member Sanctuary</span>
                <h2 class="font-display text-3xl xl:text-4xl font-bold text-[#FFFDF9] leading-tight">
                  Where Cravings Become Creations.
                </h2>
                <p class="text-xs text-[#D6C2B0] font-serif leading-relaxed pt-1">
                  Step inside our private digital salon. Unlock reservations for limited-batch seasonal patisserie, personalized recipe storage, and white-glove delivery across our Indian flagship ateliers.
                </p>
              </div>

              <!-- Privé Benefits Checklist -->
              <div class="space-y-3.5 pt-4 border-t border-[#B8945B]/25">
                <span class="text-[10px] uppercase tracking-widest text-[#E6CA85] font-bold block">Privé Member Privileges:</span>
                
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-[#B8945B]/20 border border-[#B8945B]/50 flex items-center justify-center text-xs text-[#E6CA85] shrink-0 mt-0.5">👑</div>
                  <div>
                    <h4 class="text-xs font-serif font-bold text-white">Tier Status Elevation</h4>
                    <p class="text-[11px] text-stone-300">Advance from Amore to Élite and Royale for bespoke tasting invites & masterclasses.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-[#B8945B]/20 border border-[#B8945B]/50 flex items-center justify-center text-xs text-[#E6CA85] shrink-0 mt-0.5">✨</div>
                  <div>
                    <h4 class="text-xs font-serif font-bold text-white">+250 Welcome Points</h4>
                    <p class="text-[11px] text-stone-300">Complimentary reward balance credited instantly upon joining your Privé profile.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-[#B8945B]/20 border border-[#B8945B]/50 flex items-center justify-center text-xs text-[#E6CA85] shrink-0 mt-0.5">🎂</div>
                  <div>
                    <h4 class="text-xs font-serif font-bold text-white">Annual Birthday Patisserie</h4>
                    <p class="text-[11px] text-stone-300">A handcrafted dessert gift presented by our master chef during your birthday week.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-[#B8945B]/20 border border-[#B8945B]/50 flex items-center justify-center text-xs text-[#E6CA85] shrink-0 mt-0.5">🧪</div>
                  <div>
                    <h4 class="text-xs font-serif font-bold text-white">Private 3D Recipe Vault</h4>
                    <p class="text-[11px] text-stone-300">Save bespoke creations from the Studio and reorder with your unique recipe code.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Trust & Atelier Stamp -->
            <div class="pt-6 border-t border-[#B8945B]/30 flex items-center justify-between text-[11px] text-stone-400">
              <span class="flex items-center gap-1.5"><span class="text-emerald-400">🔒</span> 256-Bit SSL Encrypted</span>
              <span>Ateliers: Chennai • Bengaluru • Kochi</span>
            </div>
          </div>

          <!-- RIGHT COLUMN: INTERACTIVE LUXURY AUTHENTICATION CARD -->
          <div class="lg:col-span-7 flex flex-col justify-center">
            <div class="auth-glass-panel rounded-3xl p-6 sm:p-10 text-[#FFFDF9] space-y-6 relative overflow-hidden">
              
              <!-- Subtle top gold highlight line -->
              <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E6CA85] to-transparent"></div>

              <!-- Header with Brand Emblem -->
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold block">Client Portal</span>
                  <h1 class="font-display text-2xl sm:text-3xl font-bold text-white mt-0.5" id="authMainTitle">
                    ${initialTab === 'signin' ? 'Sign In to La Desio' : 'Create Privé Membership'}
                  </h1>
                  <p class="text-xs text-[#D6C2B0] mt-1 font-serif" id="authSubTitle">
                    ${initialTab === 'signin' ? 'Welcome back. Please enter your credentials to access your account.' : 'Join our exclusive patisserie circle and receive 250 complimentary welcome points.'}
                  </p>
                </div>
                <div class="w-11 h-11 rounded-2xl bg-[#140804] border border-[#B8945B]/40 flex items-center justify-center shadow-lg text-xl shrink-0 ml-3">
                  👑
                </div>
              </div>

              <!-- Primary Segment Switcher (Sign In vs Create Account) -->
              <div class="grid grid-cols-2 p-1 rounded-2xl bg-[#140804] border border-[#B8945B]/30 text-xs font-serif font-semibold">
                <button type="button" onclick="window.ladesioApp.switchAuthTab('signin')" 
                        class="py-2.5 rounded-xl transition-all text-center ${initialTab === 'signin' ? 'bg-[#2A130B] text-[#E6CA85] shadow-md border border-[#B8945B]/40 font-bold' : 'text-stone-400 hover:text-white'}">
                  <span>Sign In</span>
                </button>
                <button type="button" onclick="window.ladesioApp.switchAuthTab('register')" 
                        class="py-2.5 rounded-xl transition-all text-center relative ${initialTab === 'register' ? 'bg-[#2A130B] text-[#E6CA85] shadow-md border border-[#B8945B]/40 font-bold' : 'text-stone-400 hover:text-white'}">
                  <span>Create Account</span>
                  <span class="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[9px] rounded-full bg-[#B8945B] text-[#120502] font-bold">+250 Pts</span>
                </button>
              </div>

              <!-- DYNAMIC CONTENT CONTAINER (Sign In or Register) -->
              <div id="authDynamicFormArea">
                ${this.renderAuthFormContent(initialTab, authMethod)}
              </div>

            </div>
          </div>

        </div>
      </div>
    `;
  }

  // Generate the internal form HTML (Sign In vs Register and Email vs Mobile)
  renderAuthFormContent(tab = 'signin', method = 'email', isModal = false) {
    if (tab === 'signin') {
      return `
        <div class="space-y-5">
          <!-- Auth Method Sub-Tabs (Email vs Mobile) -->
          <div class="flex items-center border-b border-[#B8945B]/30 pb-2 gap-6 text-xs font-serif">
            <button type="button" onclick="window.ladesioApp.switchAuthMethod('email', ${isModal})"
                    class="auth-tab-btn pb-1 ${method === 'email' ? 'active' : ''}">
              ✉️ Email & Password
            </button>
            <button type="button" onclick="window.ladesioApp.switchAuthMethod('mobile', ${isModal})"
                    class="auth-tab-btn pb-1 ${method === 'mobile' ? 'active' : ''}">
              📱 Mobile & OTP
            </button>
          </div>

          ${method === 'email' ? `
            <!-- EMAIL & PASSWORD FORM -->
            <form onsubmit="window.ladesioApp.handleEmailPasswordLogin(event, ${isModal})" class="space-y-4">
              <div class="space-y-1.5">
                <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Email Address or Connoisseur ID</label>
                <div class="relative flex items-center">
                  <span class="absolute left-3.5 text-stone-400 text-sm">✉️</span>
                  <input type="email" id="${isModal ? 'modalLoginEmailInput' : 'loginEmailInput'}" required
                         value="theroodyy@gmail.com"
                         placeholder="e.g. connoisseur@ladesio.com"
                         class="w-full pl-10 pr-4 py-3 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
                </div>
              </div>

              <div class="space-y-1.5">
                <div class="flex items-center justify-between">
                  <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Password</label>
                  <button type="button" onclick="window.ladesioApp.openForgotPasswordModal()"
                          class="text-[11px] font-serif text-[#E6CA85] hover:text-white underline">
                    Forgot password?
                  </button>
                </div>
                <div class="relative flex items-center">
                  <span class="absolute left-3.5 text-stone-400 text-sm">🔒</span>
                  <input type="password" id="${isModal ? 'modalLoginPasswordInput' : 'loginPasswordInput'}" required
                         value="desio123"
                         placeholder="••••••••"
                         class="w-full pl-10 pr-11 py-3 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
                  <button type="button" onclick="window.ladesioApp.togglePasswordVisibility('${isModal ? 'modalLoginPasswordInput' : 'loginPasswordInput'}', '${isModal ? 'modalLoginEyeIcon' : 'loginEyeIcon'}')"
                          class="absolute right-3.5 text-stone-400 hover:text-[#E6CA85] transition-colors p-1"
                          title="Show/Hide password">
                    <span id="${isModal ? 'modalLoginEyeIcon' : 'loginEyeIcon'}">👁️</span>
                  </button>
                </div>
              </div>

              <div class="flex items-center justify-between text-xs text-[#D6C2B0] pt-1">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" id="${isModal ? 'modalRememberMe' : 'rememberMe'}" checked 
                         class="w-4 h-4 rounded border-[#B8945B]/50 bg-[#120502] text-[#B8945B] focus:ring-0 focus:ring-offset-0 cursor-pointer" />
                  <span>Remember me on this device</span>
                </label>
              </div>

              <button type="submit" 
                      class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.99]">
                <span>Sign In to Privé</span> 🔑
              </button>

              <!-- Social / Express Auth Options -->
              <div class="relative my-4 text-center">
                <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-[#B8945B]/20"></div></div>
                <span class="relative px-3 bg-[#241009] text-[10px] font-serif tracking-widest uppercase text-stone-400 font-semibold">Or Continue With</span>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <button type="button" onclick="window.ladesioApp.handleSocialLogin('Google', ${isModal})"
                        class="social-btn py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 text-xs font-sans text-stone-200 hover:text-white">
                  <svg class="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"/>
                    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
                    <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.8s.2-2.1.4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z"/>
                    <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.4C3.7 20.4 7.5 23 12 23z"/>
                  </svg>
                  <span>Google</span>
                </button>

                <button type="button" onclick="window.ladesioApp.handleSocialLogin('Apple', ${isModal})"
                        class="social-btn py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 text-xs font-sans text-stone-200 hover:text-white">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.3-9.57-11.1-20.2-14.4-31.9-3.3-11.7-4.96-22.78-4.96-33.24 0-14.58 3.75-26.69 11.25-36.33 7.5-9.64 16.9-14.53 28.2-14.67 4.58 0 9.8 1.13 15.65 3.38 5.86 2.26 9.8 3.42 11.83 3.48 1.63 0 5.76-1.25 12.39-3.75 6.63-2.5 12.06-3.63 16.29-3.39 12.83.67 23.24 5.34 31.23 14 -11.2 6.8-16.69 16.3-16.48 28.51.21 9.89 4.02 18.06 11.45 24.51 7.42 6.45 16.14 10.04 26.15 10.78-2.6 7.82-5.75 15.53-9.44 23.13zM119.22 31.85c0-7.39 2.65-14.28 7.95-20.67 5.3-6.39 11.88-10.45 19.74-12.18.22 1.09.33 2.17.33 3.26 0 7.39-2.72 14.38-8.15 20.97-5.43 6.59-12.06 10.65-19.87 12.18z"/>
                  </svg>
                  <span>Apple ID</span>
                </button>
              </div>
            </form>
          ` : `
            <!-- MOBILE & OTP FORM -->
            ${this.mobileAuthStep === 'phone' ? `
              <form onsubmit="window.ladesioApp.handleSendMobileOtp(event)" class="space-y-4">
                <div class="space-y-1.5">
                  <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Enter Your 10-Digit Mobile Number</label>
                  <div class="flex items-center rounded-xl border border-[#B8945B]/40 bg-[#120502] focus-within:border-[#E6CA85] overflow-hidden">
                    <span class="px-3.5 py-3 text-xs font-mono text-[#E6CA85] font-bold border-r border-[#B8945B]/30 bg-black/40">
                      🇮🇳 +91
                    </span>
                    <input type="tel" id="mobileAuthPhoneInput" required maxlength="10"
                           value="${this.mobileAuthPhone || '9345396700'}"
                           placeholder="93453 96700"
                           class="w-full px-3.5 py-3 bg-transparent text-white text-xs font-mono outline-none" />
                  </div>
                  <span class="text-[11px] text-stone-400">A 6-digit authentication code will be dispatched to this number.</span>
                </div>

                <button type="submit" 
                        class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2">
                  <span>Generate & Send OTP</span> 📲
                </button>
              </form>
            ` : `
              <form onsubmit="window.ladesioApp.handleVerifyMobileOtp(event)" class="space-y-4">
                <!-- Sleek SMS Simulated Banner -->
                <div class="p-3 rounded-2xl bg-[#1A0905] border border-[#B8945B]/40 shadow-xl space-y-1 text-left">
                  <div class="flex items-center justify-between text-[11px] text-[#E6CA85] font-bold">
                    <span>📲 SMS VERIFICATION SENT TO +91 ${this.mobileAuthPhone}</span>
                    <span class="text-[10px] text-stone-400">Delivered</span>
                  </div>
                  <p class="text-xs text-white font-mono">
                    Security Code: <strong class="text-[#E6CA85] font-bold text-sm tracking-wider">${this.mobileAuthOtp || '645123'}</strong>
                  </p>
                  <button type="button" onclick="document.getElementById('mobileAuthOtpInput').value = '${this.mobileAuthOtp}';"
                          class="mt-1 text-[11px] font-serif text-[#E6CA85] hover:text-white underline font-bold">
                    ⚡ Click to Auto-Fill OTP (${this.mobileAuthOtp})
                  </button>
                </div>

                <div class="space-y-1.5">
                  <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Enter 6-Digit Verification Code (OTP)</label>
                  <input type="text" id="mobileAuthOtpInput" required maxlength="6"
                         value="${this.mobileAuthOtp || ''}"
                         placeholder="••••••"
                         class="w-full px-4 py-3 rounded-xl border border-[#B8945B]/50 bg-[#120502] text-white text-base font-mono text-center tracking-[0.35em] outline-none focus:border-[#E6CA85]" />
                </div>

                <button type="submit" 
                        class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2">
                  <span>Verify & Enter Salon</span> 👑
                </button>

                <div class="flex items-center justify-between text-xs text-[#D6C2B0] pt-1">
                  <button type="button" onclick="window.ladesioApp.openMobileAuthModal('phone', '${this.mobileAuthPhone}')" class="hover:text-white">
                    ← Change Phone
                  </button>
                  <button type="button" onclick="window.ladesioApp.handleSendMobileOtp(null, '${this.mobileAuthPhone}')" class="text-[#E6CA85] font-bold hover:underline">
                    Resend Code
                  </button>
                </div>
              </form>
            `}
          `}
        </div>
      `;
    }

    // REGISTRATION FORM
    return `
      <form onsubmit="window.ladesioApp.handleEmailPasswordRegister(event, ${isModal})" class="space-y-3.5 pt-1">
        <div class="p-2.5 rounded-xl bg-gradient-to-r from-[#2A130B] to-[#1A0905] border border-[#B8945B]/40 text-[#E6CA85] text-xs flex items-center gap-2.5">
          <span class="text-base">🎁</span>
          <span><strong>Welcome Courtesy:</strong> 250 Privé Points will be automatically credited to your new profile.</span>
        </div>

        <div class="space-y-1">
          <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Full Name *</label>
          <input type="text" id="${isModal ? 'modalRegName' : 'regName'}" required placeholder="e.g. Arjun Sundaram"
                 class="w-full px-3.5 py-2.5 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="space-y-1">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Email Address *</label>
            <input type="email" id="${isModal ? 'modalRegEmail' : 'regEmail'}" required placeholder="arjun@ladesio.in"
                   class="w-full px-3.5 py-2.5 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
          </div>
          <div class="space-y-1">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Mobile Number *</label>
            <div class="flex items-center rounded-xl border border-[#B8945B]/35 bg-[#120502] overflow-hidden">
              <span class="px-2.5 py-2 text-xs font-mono text-[#E6CA85] border-r border-[#B8945B]/25 bg-black/40">🇮🇳 +91</span>
              <input type="tel" id="${isModal ? 'modalRegPhone' : 'regPhone'}" required maxlength="10" placeholder="98401 23456"
                     class="w-full px-2.5 py-2 bg-transparent text-white text-xs font-mono outline-none" />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="space-y-1">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Preferred Atelier City *</label>
            <select id="${isModal ? 'modalRegCity' : 'regCity'}"
                    class="w-full px-3 py-2.5 rounded-xl auth-input text-xs font-sans bg-[#120502] text-white">
              <option value="Chennai">Chennai Flagship (Alwarpet)</option>
              <option value="Bengaluru">Bengaluru Atelier (Indiranagar)</option>
              <option value="Kochi">Kochi Salon (Panampilly Nagar)</option>
              <option value="Trichy">Trichy Boutique</option>
              <option value="Mumbai">Mumbai Privé Lounge</option>
            </select>
          </div>
          <div class="space-y-1">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Create Secure Password *</label>
            <div class="relative flex items-center">
              <input type="password" id="${isModal ? 'modalRegPassword' : 'regPassword'}" required minlength="6"
                     placeholder="At least 6 characters"
                     oninput="window.ladesioApp.updatePasswordStrength(this.value, '${isModal ? 'modalStrengthBar' : 'strengthBar'}', '${isModal ? 'modalStrengthText' : 'strengthText'}')"
                     class="w-full px-3 py-2.5 pr-9 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
              <button type="button" onclick="window.ladesioApp.togglePasswordVisibility('${isModal ? 'modalRegPassword' : 'regPassword'}', '${isModal ? 'modalRegEye' : 'regEye'}')"
                      class="absolute right-2.5 text-stone-400 hover:text-white p-1">
                <span id="${isModal ? 'modalRegEye' : 'regEye'}">👁️</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Password Strength Meter -->
        <div class="space-y-1">
          <div class="flex items-center justify-between text-[10px] text-stone-400">
            <span>Password Security:</span>
            <span id="${isModal ? 'modalStrengthText' : 'strengthText'}" class="text-[#B8945B] font-semibold">Enter password</span>
          </div>
          <div class="h-1.5 w-full bg-[#120502] rounded-full overflow-hidden border border-[#B8945B]/20">
            <div id="${isModal ? 'modalStrengthBar' : 'strengthBar'}" class="h-full w-0 bg-stone-500 transition-all duration-300"></div>
          </div>
        </div>

        <div class="pt-1">
          <label class="flex items-start gap-2 text-[11px] text-stone-300 cursor-pointer">
            <input type="checkbox" required checked class="mt-0.5 rounded border-[#B8945B]/50 bg-[#120502] text-[#B8945B] focus:ring-0 cursor-pointer" />
            <span>I accept the La Desio Privé Charter, complimentary concierge privileges, and confidential data privacy.</span>
          </label>
        </div>

        <button type="submit" 
                class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 mt-2 transition-transform active:scale-[0.99]">
          <span>Create Privé Account & Claim 250 Points</span> ✨
        </button>
      </form>
    `;
  }

  // Switch between Sign In and Register tabs
  switchAuthTab(tab, isModal = false) {
    this.activeAuthTab = tab;
    if (isModal) {
      const area = document.getElementById('modalAuthDynamicArea');
      if (area) area.innerHTML = this.renderAuthFormContent(tab, this.activeAuthMethod || 'email', true);
      const title = document.getElementById('modalAuthTitle');
      if (title) title.textContent = tab === 'signin' ? 'Sign In to La Desio' : 'Create Privé Membership';
      return;
    }

    const area = document.getElementById('authDynamicFormArea');
    if (area) area.innerHTML = this.renderAuthFormContent(tab, this.activeAuthMethod || 'email', false);

    const title = document.getElementById('authMainTitle');
    const subTitle = document.getElementById('authSubTitle');
    const breadcrumbAction = document.getElementById('authBreadcrumbAction');

    if (title) title.textContent = tab === 'signin' ? 'Sign In to La Desio' : 'Create Privé Membership';
    if (subTitle) {
      subTitle.textContent = tab === 'signin' 
        ? 'Welcome back. Please enter your credentials to access your account.' 
        : 'Join our exclusive patisserie circle and receive 250 complimentary welcome points.';
    }
    if (breadcrumbAction) breadcrumbAction.textContent = tab === 'signin' ? 'Sign In' : 'Privé Registration';

    // Update segment buttons
    const container = document.getElementById('app-main-content');
    if (container) {
      const btns = container.querySelectorAll('.grid.grid-cols-2 button');
      if (btns && btns.length === 2) {
        if (tab === 'signin') {
          btns[0].className = 'py-2.5 rounded-xl transition-all text-center bg-[#2A130B] text-[#E6CA85] shadow-md border border-[#B8945B]/40 font-bold';
          btns[1].className = 'py-2.5 rounded-xl transition-all text-center relative text-stone-400 hover:text-white';
        } else {
          btns[0].className = 'py-2.5 rounded-xl transition-all text-center text-stone-400 hover:text-white';
          btns[1].className = 'py-2.5 rounded-xl transition-all text-center relative bg-[#2A130B] text-[#E6CA85] shadow-md border border-[#B8945B]/40 font-bold';
        }
      }
    }
  }

  // Switch between Email and Mobile auth sub-methods
  switchAuthMethod(method, isModal = false) {
    this.activeAuthMethod = method;
    this.mobileAuthStep = 'phone';
    if (isModal) {
      const area = document.getElementById('modalAuthDynamicArea');
      if (area) area.innerHTML = this.renderAuthFormContent('signin', method, true);
      return;
    }
    const area = document.getElementById('authDynamicFormArea');
    if (area) area.innerHTML = this.renderAuthFormContent('signin', method, false);
  }

  // Toggle Password Show/Hide
  togglePasswordVisibility(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      if (icon) icon.textContent = '🙈';
    } else {
      input.type = 'password';
      if (icon) icon.textContent = '👁️';
    }
  }

  // Live Password Strength Indicator
  updatePasswordStrength(val, barId = 'strengthBar', textId = 'strengthText') {
    const bar = document.getElementById(barId);
    const text = document.getElementById(textId);
    if (!bar || !text) return;

    if (!val) {
      bar.style.width = '0%';
      bar.className = 'h-full bg-stone-500 transition-all duration-300';
      text.textContent = 'Enter password';
      text.className = 'text-stone-400 font-semibold';
      return;
    }

    let score = 0;
    if (val.length >= 6) score += 1;
    if (val.length >= 9) score += 1;
    if (/[A-Z]/.test(val)) score += 1;
    if (/[0-9]/.test(val)) score += 1;
    if (/[^A-Za-z0-9]/.test(val)) score += 1;

    if (score <= 1) {
      bar.style.width = '25%';
      bar.className = 'h-full bg-rose-500 transition-all duration-300';
      text.textContent = 'Weak';
      text.className = 'text-rose-400 font-semibold';
    } else if (score <= 3) {
      bar.style.width = '60%';
      bar.className = 'h-full bg-amber-500 transition-all duration-300';
      text.textContent = 'Moderate';
      text.className = 'text-amber-400 font-semibold';
    } else {
      bar.style.width = '100%';
      bar.className = 'h-full bg-emerald-500 transition-all duration-300';
      text.textContent = 'Strong Privé Password';
      text.className = 'text-emerald-400 font-semibold';
    }
  }

  // Collapsible Connoisseur Persona Drawer
  toggleDemoDrawer() {
    const content = document.getElementById('demoDrawerContent');
    const chevron = document.getElementById('demoDrawerChevron');
    if (!content) return;
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      if (chevron) chevron.textContent = '▲';
    } else {
      content.classList.add('hidden');
      if (chevron) chevron.textContent = '▼';
    }
  }

  // Email + Password Sign In Handler
  handleEmailPasswordLogin(e, isModal = false) {
    if (e && e.preventDefault) e.preventDefault();
    const emailElem = document.getElementById(isModal ? 'modalLoginEmailInput' : 'loginEmailInput');
    const passElem = document.getElementById(isModal ? 'modalLoginPasswordInput' : 'loginPasswordInput');
    const email = emailElem ? emailElem.value.trim() : '';
    const password = passElem ? passElem.value : '';

    if (!email) {
      if (window.showToast) window.showToast('Please enter your email address.', 'warning');
      return;
    }

    const res = loyaltyStore.loginByEmail(email, password);
    if (res && res.success) {
      this.playObstacleChime();
      if (isModal) this.closeAuthModal();
      this.renderNavigationBadges();
      if (window.showToast) {
        window.showToast(res.message || 'Welcome to La Desio Privé!', 'success');
      }
      
      const redirect = sessionStorage.getItem('ladesio_auth_redirect');
      if (redirect === 'checkout') {
        sessionStorage.removeItem('ladesio_auth_redirect');
        this.navigateTo('checkout');
      } else {
        this.navigateTo('account');
      }
    } else {
      if (window.showToast) {
        window.showToast((res && res.message) || 'Unable to sign in. Please check credentials.', 'warning');
      }
    }
  }

  // Email + Password + Mobile Registration Handler
  handleEmailPasswordRegister(e, isModal = false) {
    if (e && e.preventDefault) e.preventDefault();
    const name = document.getElementById(isModal ? 'modalRegName' : 'regName')?.value;
    const email = document.getElementById(isModal ? 'modalRegEmail' : 'regEmail')?.value;
    const phone = document.getElementById(isModal ? 'modalRegPhone' : 'regPhone')?.value;
    const city = document.getElementById(isModal ? 'modalRegCity' : 'regCity')?.value;
    const password = document.getElementById(isModal ? 'modalRegPassword' : 'regPassword')?.value;

    const res = loyaltyStore.registerWithEmailAndPassword({
      name,
      email,
      phone,
      city,
      password
    });

    if (res.success) {
      this.playObstacleChime();
      if (isModal) this.closeAuthModal();
      this.renderNavigationBadges();
      if (window.showToast) {
        window.showToast(res.message, 'success');
      }
      window.location.hash = '#account';
      this.renderAccountView();
    } else {
      if (window.showToast) {
        window.showToast(res.message, 'warning');
      } else {
        alert(res.message);
      }
    }
  }

  // Social / One-Tap Auth Simulation
  handleSocialLogin(provider, isModal = false) {
    if (window.showToast) {
      window.showToast(`Connecting securely via ${provider}...`, 'info');
    }
    setTimeout(() => {
      // Default to Roody for social simulation
      const res = loyaltyStore.loginByPhone('9345396700');
      if (res.success) {
        this.playObstacleChime();
        if (isModal) this.closeAuthModal();
        this.renderNavigationBadges();
        if (window.showToast) {
          window.showToast(`Authenticated via ${provider}! Welcome back, ${res.user.name}.`, 'success');
        }
        window.location.hash = '#account';
        this.renderAccountView();
      }
    }, 600);
  }

  // 1-Click Connoisseur Preset Unlock
  demoQuickUnlock(phoneOrId) {
    const res = loyaltyStore.loginByPhone(phoneOrId);
    if (res.success) {
      this.playObstacleChime();
      this.closeAuthModal();
      this.renderNavigationBadges();
      if (window.showToast) {
        window.showToast(`👑 Connoisseur profile active: ${res.user.name} (${res.user.tier} Tier)`, 'success');
      }
      window.location.hash = '#account';
      this.renderAccountView();
    } else {
      if (window.showToast) window.showToast(res.message, 'warning');
    }
  }

  // ==========================================
  // FORGOT PASSWORD RECOVERY MODAL
  // ==========================================
  openForgotPasswordModal() {
    let modal = document.getElementById('forgotPasswordModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'forgotPasswordModal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-md auth-glass-panel rounded-3xl p-6 sm:p-8 space-y-5 text-[#FFFDF9] animate-float-slow">
        <button onclick="window.ladesioApp.closeForgotPasswordModal()"
                class="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/40 border border-[#B8945B]/30 hover:border-[#B8945B] flex items-center justify-center text-stone-300 hover:text-white transition-colors">
          ✕
        </button>

        <div class="text-center space-y-1.5">
          <div class="w-12 h-12 mx-auto rounded-full bg-[#1A0905] border border-[#B8945B]/50 flex items-center justify-center text-xl shadow-lg">
            🔑
          </div>
          <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold block">La Desio Privé Security</span>
          <h3 class="font-display text-2xl font-bold text-white">Reset Privé Password</h3>
          <p class="text-xs text-[#D6C2B0]">Enter your registered email address to receive a secure recovery key.</p>
        </div>

        <form onsubmit="window.ladesioApp.handleForgotPasswordSubmit(event)" class="space-y-4 pt-1">
          <div class="space-y-1.5">
            <label class="block text-xs font-serif font-semibold text-[#E6CA85]">Registered Email</label>
            <input type="email" id="forgotEmailInput" required value="theroodyy@gmail.com" placeholder="connoisseur@ladesio.com"
                   class="w-full px-3.5 py-3 rounded-xl auth-input text-xs font-sans placeholder-stone-500" />
          </div>

          <button type="submit" 
                  class="w-full py-3.5 rounded-xl btn-gold-luxury font-serif text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2">
            <span>Send Recovery Instructions</span> ✉️
          </button>
        </form>
      </div>
    `;
    modal.classList.remove('hidden');
  }

  closeForgotPasswordModal() {
    const modal = document.getElementById('forgotPasswordModal');
    if (modal) modal.classList.add('hidden');
  }

  handleForgotPasswordSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const email = document.getElementById('forgotEmailInput')?.value;
    const res = loyaltyStore.requestPasswordReset(email);
    this.closeForgotPasswordModal();
    if (window.showToast) {
      window.showToast(res.message, 'success');
    }
  }

  // ==========================================
  // SYNCHRONIZED LUXURY MODAL AUTHENTICATION
  // ==========================================
  openAuthModal(tab = 'signin') {
    let modal = document.getElementById('authModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'authModal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-lg auth-glass-panel rounded-3xl p-6 sm:p-8 space-y-5 text-[#FFFDF9] my-8 animate-float-slow">
        <!-- Close Button -->
        <button onclick="window.ladesioApp.closeAuthModal()"
                class="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/40 border border-[#B8945B]/30 hover:border-[#B8945B] flex items-center justify-center text-stone-300 hover:text-white transition-colors z-10">
          ✕
        </button>

        <!-- Header -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-[#140804] border border-[#B8945B]/50 flex items-center justify-center shadow-lg text-lg">
            👑
          </div>
          <div>
            <span class="text-[10px] uppercase font-serif tracking-widest text-[#E6CA85] font-bold block">La Desio Privé Club</span>
            <h3 class="font-display text-xl font-bold text-white" id="modalAuthTitle">
              ${tab === 'signin' ? 'Sign In to La Desio' : 'Create Privé Membership'}
            </h3>
          </div>
        </div>

        <!-- Mode Switcher in Modal -->
        <div class="grid grid-cols-2 p-1 rounded-2xl bg-[#140804] border border-[#B8945B]/30 text-xs font-serif font-semibold">
          <button type="button" onclick="window.ladesioApp.switchAuthTab('signin', true)" 
                  class="py-2 rounded-xl transition-all text-center ${tab === 'signin' ? 'bg-[#2A130B] text-[#E6CA85] shadow-md border border-[#B8945B]/40 font-bold' : 'text-stone-400 hover:text-white'}">
            <span>Sign In</span>
          </button>
          <button type="button" onclick="window.ladesioApp.switchAuthTab('register', true)" 
                  class="py-2 rounded-xl transition-all text-center relative ${tab === 'register' ? 'bg-[#2A130B] text-[#E6CA85] shadow-md border border-[#B8945B]/40 font-bold' : 'text-stone-400 hover:text-white'}">
            <span>Create Account</span>
            <span class="hidden sm:inline-block ml-1 px-1.5 py-0.2 text-[9px] rounded-full bg-[#B8945B] text-[#120502] font-bold">+250 Pts</span>
          </button>
        </div>

        <!-- Dynamic Form Container inside Modal -->
        <div id="modalAuthDynamicArea">
          ${this.renderAuthFormContent(tab, 'email', true)}
        </div>

      </div>
    `;

    modal.classList.remove('hidden');
  }

  openMobileAuthModal(step = 'phone', phone = '', currentOtp = '') {
    this.mobileAuthStep = step;
    this.mobileAuthPhone = phone;
    this.mobileAuthOtp = currentOtp;
    this.openAuthModal('signin');
    this.switchAuthMethod('mobile', true);
  }

  closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.add('hidden');
  }

  handleSendMobileOtp(e, overridePhone) {
    if (e && e.preventDefault) e.preventDefault();
    const phone = overridePhone || document.getElementById('mobileAuthPhoneInput')?.value;
    const res = loyaltyStore.generateOtp(phone);

    if (res.success) {
      this.mobileAuthStep = 'otp';
      this.mobileAuthPhone = res.phone;
      this.mobileAuthOtp = res.otp;
      this.playObstacleChime();
      if (window.showToast) {
        window.showToast(`📲 SMS Delivered to ${res.formattedPhone}: OTP is ${res.otp}`, 'warning');
      }
      // Re-render auth area with OTP step
      const isModal = !document.getElementById('authDynamicFormArea');
      if (isModal) {
        this.openAuthModal('signin');
        this.switchAuthMethod('mobile', true);
      } else {
        const area = document.getElementById('authDynamicFormArea');
        if (area) area.innerHTML = this.renderAuthFormContent('signin', 'mobile', false);
      }
    } else {
      if (window.showToast) {
        window.showToast(res.message, 'warning');
      } else {
        alert(res.message);
      }
    }
  }

  handleVerifyMobileOtp(e) {
    if (e && e.preventDefault) e.preventDefault();
    const otp = document.getElementById('mobileAuthOtpInput')?.value;
    const res = loyaltyStore.verifyOtp(this.mobileAuthPhone, otp);

    if (res.success) {
      if (res.isNewUser) {
        this.switchAuthTab('register');
        if (window.showToast) window.showToast(res.message, 'info');
      } else {
        this.closeAuthModal();
        this.renderNavigationBadges();
        if (window.showToast) {
          window.showToast(res.message, 'success');
        }
        window.location.hash = '#account';
        this.renderAccountView();
      }
    } else {
      if (window.showToast) {
        window.showToast(res.message, 'warning');
      } else {
        alert(res.message);
      }
    }
  }

  handleRegisterNewMobileUser(e) {
    if (e && e.preventDefault) e.preventDefault();
    const name = document.getElementById('regNewMobileName')?.value;
    const city = document.getElementById('regNewMobileCity')?.value || 'Chennai';
    const address = document.getElementById('regNewMobileAddress')?.value || '';

    const res = loyaltyStore.registerWithMobile({
      phone: this.mobileAuthPhone,
      name,
      city,
      address
    });

    if (res.success) {
      this.closeAuthModal();
      this.renderNavigationBadges();
      if (window.showToast) {
        window.showToast(res.message, 'success');
      }
      window.location.hash = '#account';
      this.renderAccountView();
    }
  }

  handleLogout() {
    this.closePfpDropdown();
    this.closeAllModals();
    this.closeAuthModal();
    if (typeof this.closeWishlistDrawer === 'function') this.closeWishlistDrawer();
    if (typeof this.closeCartDrawer === 'function') this.closeCartDrawer();
    loyaltyStore.logout();
    this.pendingRedirectRoute = null;
    try {
      sessionStorage.removeItem('ladesio_auth_redirect');
      localStorage.removeItem('ladesio_auth_session_phone_v4');
      localStorage.removeItem('ladesio_active_user_id_v4');
      localStorage.removeItem('ladesio_profile_v2');
      localStorage.removeItem('pendingAuthEmail');
    } catch (e) {}
    
    // Update navigation immediately
    this.renderNavigationBadges();
    
    // Always navigate to login page and render sign in form
    this.currentRoute = 'login';
    window.location.hash = '#login';
    const mainContainer = document.getElementById('app-main-content');
    if (mainContainer) {
      this.renderLoginView(mainContainer, 'signin');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (window.showToast) {
      window.showToast('You have signed out successfully.', 'info');
    }
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
