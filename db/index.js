const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/fecProducts';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

module.exports = db;
