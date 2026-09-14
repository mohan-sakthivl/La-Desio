const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const User = require('./models/User');
const Dessert = require('./models/Dessert');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ladesio';

async function seed() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB!');

    // Read data from js/data.js
    const dataPath = path.join(__dirname, '..', 'js', 'data.js');
    const dataContent = fs.readFileSync(dataPath, 'utf8');

    console.log('Seeding initial luxury desserts into MongoDB...');
    // Clean and seed
    await Dessert.deleteMany({});
    console.log('Cleared existing desserts.');

    console.log('✓ Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

if (require.main === module) seed();
