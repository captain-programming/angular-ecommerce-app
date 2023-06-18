const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
  title: {type: String},
  description: {type: String},
  price: {type: Number},
  discountPercentage: {type: Number},
  rating: {type: Number},
  stock: {type: Number},
  brand: {type: String},
  category: {type: String},
  thumbnail: {type: String},
  images: {type: Array},
});

const ProductsModel = mongoose.model('products', ProductsSchema);

module.exports = ProductsModel