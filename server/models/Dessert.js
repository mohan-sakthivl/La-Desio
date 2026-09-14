const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  author: { type: String, required: true },
  city: { type: String, default: 'Chennai' },
  rating: { type: Number, required: true, min: 1, max: 5 },
  title: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: String, default: 'Recent' },
  verifiedPurchase: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

const DessertSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  subtitle: String,
  category: {
    type: String,
    required: true
  },
  secondaryCategory: String,
  price: {
    type: Number,
    required: true
  },
  originalPrice: Number,
  rating: {
    type: Number,
    default: 4.9
  },
  reviewsCount: {
    type: Number,
    default: 1
  },
  badge: {
    type: String,
    default: 'Atelier Creation'
  },
  isEggless: {
    type: Boolean,
    default: true
  },
  dietaryBadge: {
    type: String,
    enum: ['eggless', 'contains-egg'],
    default: 'eggless'
  },
  image: {
    type: String,
    required: true
  },
  gallery: [String],
  description: String,
  ingredients: [String],
  allergens: [String],
  dietary: [String],
  flavor: String,
  servingSize: String,
  prepTime: String,
  storageInfo: String,
  nutrition: {
    calories: Number,
    protein: String,
    carbs: String,
    fats: String,
    fiber: String,
    serving: String
  },
  reviews: [ReviewSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.Dessert || mongoose.model('Dessert', DessertSchema);
