require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PORT, mongoDB } = process.env;
const route = require('./routes/mainRoute');

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log('DB STARTED');
  })
  .catch((error) => {
    console.error('DB connection error:', error);
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/data', route);
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Error 404' });
});

app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});
