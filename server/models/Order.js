const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  quantity: Number,
  image: String,
  isCustom: Boolean,
  options: mongoose.Schema.Types.Mixed
});

const OrderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  customerName: String,
  customerPhone: String,
  customerEmail: String,
  items: [OrderItemSchema],
  subtotal: Number,
  discount: Number,
  deliveryFee: Number,
  total: Number,
  status: {
    type: String,
    enum: ['received', 'baking', 'glazing', 'dispatched', 'delivered', 'cancelled'],
    default: 'received'
  },
  paymentMethod: {
    type: String,
    default: 'UPI / Card'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'paid'
  },
  deliveryAddress: {
    fullName: String,
    phone: String,
    street: String,
    city: String,
    pincode: String
  },
  deliveryDate: String,
  deliverySlot: String,
  giftMessage: String,
  cakePipingText: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.Order || mongoose.model('Order', OrderSchema);
