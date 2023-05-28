const Product = require('../model/product');
const Coupon = require('../model/coupon');
const express = require('express');
const route = express.Router();

route.get('/', async (req, res) => {
  const data = await Product.find();
  res.status(200).json({ message: 'all data', data });
});

route.post('/', async (req, res) => {
  const { name, price, ctg } = req.body;
  try {
    if (!(name && price && ctg)) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }

    if (name.length < 2 || name.length > 12) {
      res.status(400).json({ message: 'Name cant be less 2 or more 12' });
      return;
    }

    const productPrice = parseFloat(price).toFixed(2);
    if (isNaN(productPrice) || productPrice < 0.2 || productPrice > 100) {
      res.status(400).json({ message: 'Price must be a number between 0.2 and 100' });
      return;
    }

    if (ctg.length < 2 || ctg.length > 15) {
      res.status(400).json({ message: 'Name cant be less 2 or more 15' });
      return;
    }
    const category = ctg.toLowerCase();

    const newProduct = await Product.create({
      name,
      price: productPrice,
      ctg: category,
    });
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

route.get('/coupons', async (req, res) => {
  const data = await Coupon.find();
  res.status(200).json({ message: 'coupons', data });
});

route.post('/coupons', async (req, res) => {
  const { name, code } = req.body;
  try {
    if (!(name && code)) {
      res.status(400).json({ message: 'Missing data' });
      return;
    }

    if (name.length < 2 || name.length > 12) {
      res.status(400).json({ message: 'Name cant be less 2 or more 12' });
      return;
    }

    if (code.length < 2 || code.length > 12) {
      res.status(400).json({ message: 'Code cant be less 2 or more 12' });
      return;
    }

    const newCoupon = await Coupon.create({
      name,
      code,
    });
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {}
});

route.post('/cart', async (req, res) => {
  const { data } = req.body;
  try {
    if (!data) {
      res.status(400).json({ message: 'Missing data' });
      return;
    }

    const newCartOrder = await UserOrder.create({
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      orderItems: [data.orders],
      totalPrice: data.price,
    });

    res.status(200).json({ message: 'Cart data received' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
