const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  title: String,
  titleUrl: String,
  imageUrl: String,
  rating: Number,
  reviewUrl: String,
  price: String,
  prime: Boolean,
  bestSeller: Boolean,
  department: String
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;