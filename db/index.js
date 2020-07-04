const mongoose = require('mongoose');
const mongoUri = 'mongodb://database/fecProducts';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

module.exports = db;
