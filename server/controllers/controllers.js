// var models = require('../models/models.js');
var db = require('../DB/index.js');

module.exports = {
  getGroceryList: (req, res) => {
    db.query('SELECT * FROM groceries', (err, data) => {
      if (err) {
        console.log('error!');
      } else {
        res.send(data);
      }
    });
  }

  // addGrocery: (req, res) => {
  //   var params = [req.body.name, req.body.quantity];
  //   db.query('INSERT INTO groceries (name, quantity) VALUES (?, ?)', params, (err, data) => {
  // res.status(201)
  //     if (err) {
  //       console.log('error!!');
  //     }
  //     cb(data);
  //   });
  // }
};




// get: (req, res) => {
//   models.models.getAll((err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       res.send(data);
//     }
//   });
// },

// post: (req, res) => {
//   const params = [req.body.name, req.body.quantity];
//   models.models.create(params, (err, data) => {
//     res.send(data);
//   });
// }



// modules.exports = controllers;

// db.query('SELECT * FROM groceries', (err, data) => {
//   if (err) {
//     throw error;
//   } else {
//     cb(data);
//   }
// });
