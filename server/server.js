const express = require('express');

const { PORT } = require('./config/config');
const route = require('./routes/mainRoute');

const app = express();

app.set(express.json());

app.use('/api/data', route);
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Error 404' });
});

app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});
