const express = require('express');
const router = express.Router();
const User = require('../models/User');

const cleanPhone = (p) => String(p || '').replace(/\D/g, '').slice(-10);

// 1. Search members by mobile or name
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    const raw = String(query || '').trim();
    if (!raw) return res.json({ success: true, results: [] });

    const clean = cleanPhone(raw);
    let results = [];

    if (User.db.readyState === 1) {
      const filters = [];
      if (clean) filters.push({ phone: new RegExp(clean, 'i') });
      filters.push({ name: new RegExp(raw, 'i') });

      results = await User.find({ $or: filters }).select('name phone avatar city tier bio');
    }

    return res.json({ success: true, results });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
