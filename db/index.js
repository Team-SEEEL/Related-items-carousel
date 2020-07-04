const mongoose = require('mongoose');
const mongoUri = 'mongodb://172.17.0.2/fecProducts';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

module.exports = db;
