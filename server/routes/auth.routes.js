const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'ladesio_royal_atelier_secure_jwt_secret_2026';

// Simulated OTP storage in memory (production connects to Redis / SMS API)
const activeOtps = new Map();

// Helper clean phone
const cleanPhone = (p) => String(p || '').replace(/\D/g, '').slice(-10);

// 1. Send OTP
router.post('/send-otp', async (req, res) => {
  try {
    const { phone } = req.body;
    const clean = cleanPhone(phone);
    if (!clean || clean.length !== 10) {
      return res.status(400).json({ success: false, message: 'Valid 10-digit mobile number required.' });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    activeOtps.set(clean, { otp, expires: Date.now() + 5 * 60 * 1000 });

    console.log(`[SMS Gateway Dispatch] Generated OTP for +91 ${clean}: ${otp}`);

    return res.json({
      success: true,
      message: `OTP sent successfully to +91 ${clean}`,
      // In development, return the code for instant zero-friction testing
      devOtp: process.env.NODE_ENV !== 'production' ? otp : undefined
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// 2. Verify OTP & Login
router.post('/verify-otp', async (req, res) => {
  try {
    const { phone, otp, name } = req.body;
    const clean = cleanPhone(phone);
    const record = activeOtps.get(clean);

    if (!record || record.otp !== String(otp).trim() || Date.now() > record.expires) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP code.' });
    }

    activeOtps.delete(clean);

    // Find or create user
    let user = null;
    if (User.db.readyState === 1) {
      user = await User.findOne({ phone: clean });
      if (!user) {
        user = await User.create({
          phone: clean,
          name: name || 'Atelier Patron',
          tier: 'Connoisseur',
          points: 300
        });
      }
    } else {
      user = { id: 'usr_' + clean, phone: clean, name: name || 'Atelier Patron', tier: 'Connoisseur', points: 300 };
    }

    const token = jwt.sign({ id: user._id || user.id, phone: clean }, JWT_SECRET, { expiresIn: '30d' });

    return res.json({
      success: true,
      message: 'Mobile verification successful! Welcome to La Desio Atelier.',
      token,
      user
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// 3. Email/Password Login
router.post('/login', async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;
    const clean = cleanPhone(emailOrPhone);

    let user = null;
    if (User.db.readyState === 1) {
      user = await User.findOne({
        $or: [
          { email: String(emailOrPhone).toLowerCase() },
          { phone: clean }
        ]
      });
      if (!user) {
        return res.status(404).json({ success: false, message: 'Member profile not found.' });
      }
      if (password && !(await user.comparePassword(password))) {
        return res.status(401).json({ success: false, message: 'Incorrect credentials.' });
      }
    } else {
      user = { id: 'usr_roody', name: 'Roody Sakthivel', phone: '9790496706', tier: 'Élite VIP', points: 1850 };
    }

    const token = jwt.sign({ id: user._id || user.id, phone: user.phone }, JWT_SECRET, { expiresIn: '30d' });

    return res.json({
      success: true,
      message: 'Welcome back to La Desio Atelier!',
      token,
      user
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
