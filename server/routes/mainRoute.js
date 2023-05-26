const express = require('express');
const route = express.Router();

route.get('/', async (req, res) => {
  // const data = await ;
  res.status(200).json({ message: 'Hello' });
});

route.get('/mcdonalds', async (req, res) => {
  // const data = await ;
  res.status(200).json({ message: 'MCDONALDS' });
});

route.get('/kfc', async (req, res) => {
  // const data = await ;
  res.status(200).json({ message: 'kfc' });
});

route.get('/burgerkings', async (req, res) => {
  // const data = await ;
  res.status(200).json({ message: 'burgerkings' });
});

module.exports = route;
