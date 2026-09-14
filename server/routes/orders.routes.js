const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// 1. Create order
router.post('/', async (req, res) => {
  try {
    const orderData = req.body;
    const orderNumber = 'DESIO-' + Date.now().toString().slice(-6);

    let order = null;
    if (Order.db.readyState === 1) {
      order = await Order.create({
        ...orderData,
        orderNumber
      });
    } else {
      order = { ...orderData, orderNumber, status: 'received' };
    }

    return res.json({
      success: true,
      message: 'Your artisanal order has been placed with the Atelier Kitchen!',
      order
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// 2. Track order
router.get('/:orderNumber', async (req, res) => {
  try {
    if (Order.db.readyState === 1) {
      const order = await Order.findOne({ orderNumber: req.params.orderNumber });
      if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
      return res.json({ success: true, order });
    }
    return res.json({
      success: true,
      order: {
        orderNumber: req.params.orderNumber,
        status: 'baking',
        statusSteps: ['received', 'baking', 'glazing', 'dispatched', 'delivered']
      }
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
