const express = require('express');
const router = express.Router();
const Dessert = require('../models/Dessert');

// 1. Get Desserts with filters
router.get('/', async (req, res) => {
  try {
    const { category, isEggless, sortBy } = req.query;

    if (Dessert.db.readyState === 1) {
      const query = {};
      if (category && category !== 'all') query.category = category;
      if (isEggless === 'true') query.isEggless = true;

      let desserts = await Dessert.find(query);

      if (sortBy === 'price-low') desserts.sort((a, b) => a.price - b.price);
      if (sortBy === 'price-high') desserts.sort((a, b) => b.price - a.price);
      if (sortBy === 'rating') desserts.sort((a, b) => b.rating - a.rating);

      return res.json({ success: true, count: desserts.length, desserts });
    } else {
      // Fallback
      return res.json({ success: true, count: 0, desserts: [], note: 'Database offline, using client cache' });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// 2. Add customer review
router.post('/:id/reviews', async (req, res) => {
  try {
    const { author, city, rating, title, comment } = req.body;
    if (Dessert.db.readyState === 1) {
      const dessert = await Dessert.findOne({ id: req.params.id });
      if (!dessert) return res.status(404).json({ success: false, message: 'Dessert not found' });

      dessert.reviews.unshift({
        author: author || 'Atelier Connoisseur',
        city: city || 'Chennai',
        rating: Number(rating) || 5,
        title: title || 'Exceptional Patisserie Experience',
        comment: comment || 'Handcrafted to utter perfection.',
        date: 'Just now',
        verifiedPurchase: true
      });

      dessert.reviewsCount = dessert.reviews.length;
      dessert.rating = Number((dessert.reviews.reduce((acc, r) => acc + r.rating, 0) / dessert.reviews.length).toFixed(2));
      await dessert.save();

      return res.json({ success: true, message: 'Review published successfully!', dessert });
    }
    return res.json({ success: true, message: 'Review recorded!' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
