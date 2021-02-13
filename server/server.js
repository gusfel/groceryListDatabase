const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const db = require('./DB/index.js');
const router = require('./routes.js');

const groceries = [
  {item: 'Milk', quantity: 1},
  {item: 'Pizza', quantity: 1},
  {item: 'Mangoes', quantity: 6},
  {item: 'Coffee', quantity: 1},
  {item: 'Ice Cream', quantity: 2}
];
//makes it so we can split the body of our data into res.body.name
app.use(express.json());

app.use('/groceries', router);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`lisenting! on ${PORT}`);
});