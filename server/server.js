const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const db = require('./DB/db.js');

const groceries = [
  {item: 'Milk', quantity: 1},
  {item: 'Pizza', quantity: 1},
  {item: 'Mangoes', quantity: 6},
  {item: 'Coffee', quantity: 1},
  {item: 'Ice Cream', quantity: 2}
];

app.get('/groceries', (req, res) => {
  res.send(groceries);
});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`lisenting! on ${PORT}`);
});