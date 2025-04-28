
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  costPrice: {
    type: Number,
    required: true
  },
  customerPrice: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  quantity: {
    type: Number,
    default: 0
  },
  category: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);
