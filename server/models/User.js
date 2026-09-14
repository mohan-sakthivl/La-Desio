const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    sparse: true
  },
  name: {
    type: String,
    default: 'Atelier Connoisseur'
  },
  avatar: {
    type: String,
    default: 'Assets/Profile/roody.jpg'
  },
  bio: {
    type: String,
    default: 'Patisserie connoisseur in the La Desio Atelier Circle.'
  },
  city: {
    type: String,
    default: 'Chennai'
  },
  tier: {
    type: String,
    enum: ['Connoisseur', 'Ambassadeur', 'Élite VIP'],
    default: 'Connoisseur'
  },
  points: {
    type: Number,
    default: 250
  },
  password: {
    type: String
  },
  isPhoneVerified: {
    type: Boolean,
    default: true
  },
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  address: {
    street: String,
    city: String,
    pincode: String,
    landmark: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password') || !this.password) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
  if (!this.password) return false;
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
