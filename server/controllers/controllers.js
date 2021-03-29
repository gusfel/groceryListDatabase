var db = require('../DB/index.js');
var Promise = require('bluebird');


module.exports = {
  getGroceryList: (req, res) => {
    db.query('SELECT * FROM groceries', (err, data) => {
      if (err) {
        res.status(202);
      } else {
        res.send(data);
      }
    });
  },

  addToList: (req, res) => {
    var params = [req.body.name, req.body.quantity];

    db.query(`INSERT INTO groceries (name, quantity) VALUES ('${req.body.name}', ${req.body.quantity})`, (err, data) => {
      if (err) {
        res.status(404);
      } else {
        db.query(`SELECT * FROM groceries where id=${data.insertId}`, (err2, data) => {
          if (err2) {
            res.status(404);
          } else {
            res.send(data[0]);
          }
        });
      }
    });
  }
};
