
const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const verifyToken = require('../middlewares/verifyToken');

router.get('/', verifyToken,  async (req, res) => {
  const userId = req.userId;  
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/add', verifyToken,  async (req, res) => {
  const product = new Product({
    productId: req.body.productId,
    name: req.body.name,
    costPrice: req.body.costPrice,
    customerPrice: req.body.customerPrice,
    description: req.body.description,
    quantity: req.body.quantity,
    category: req.body.category
  });
  const userId = req.userId; 

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;