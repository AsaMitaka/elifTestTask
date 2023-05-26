const express = require('express');
const route = express.Router();

route.get('/', async (req, res) => {
  res.status(200).json({ message: 'all data' });
});

route.get('/coupons', async (req, res) => {
  res.status(200).json({ message: 'coupons' });
});

route.post('/cart', async (req, res) => {
  const { data } = req.body;
  if (!data) {
    return;
  }
  console.log(data);
});

module.exports = route;
