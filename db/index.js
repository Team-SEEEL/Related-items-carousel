const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/fecProducts';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;
