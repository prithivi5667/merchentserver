const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  img: {
    type: String,
    
  }
});

module.exports = Product = mongoose.model('Product', ProductSchema);