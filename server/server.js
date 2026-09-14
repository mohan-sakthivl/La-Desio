const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const authRoutes = require('./routes/auth.routes');
const dessertsRoutes = require('./routes/desserts.routes');
const ordersRoutes = require('./routes/orders.routes');
const friendsRoutes = require('./routes/friends.routes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ladesio';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..')));

// Health Check API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    engine: 'LA Desio Haute Patisserie Cloud API',
    version: '3.0.0',
    database: mongoose.connection.readyState === 1 ? 'MongoDB Connected' : 'MongoDB Offline (Local Storage Cache Active)',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/desserts', dessertsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/friends', friendsRoutes);

// Fallback to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Graceful Database Connection
let isConnected = false;
async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 2000
    });
    isConnected = true;
    console.log('🍃 [MongoDB Connected] Database successfully connected to:', MONGODB_URI);
  } catch (err) {
    console.log('⚠️ [MongoDB Notice] Could not connect to local/cloud MongoDB. Running in hybrid offline/cache mode.');
    console.log('   To connect to a live database, provide MONGODB_URI in server/.env (e.g. MongoDB Atlas connection string).');
  }
}

connectDB();

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`✨ [LA Desio Server Active] Listening at http://localhost:${PORT}`);
  });
}

module.exports = app;
