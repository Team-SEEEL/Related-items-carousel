const mongoose = require('mongoose');

const database = process.env.DATABASE_IP || 'localhost';
const mongoUri = `mongodb://${database}/fecProducts`;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

module.exports = db;
