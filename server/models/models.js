var db = require('../DB/index.js');

module.exports = {
  getAll: cb => {
    db.query('SELECT * FROM groceries', (err, data) => {
      if (err) {
        throw error;
      } else {
        cb(data);
      }
    });
  },

  create: (params, cb) => {
    db.query('INSERT INTO groceries (name, quantity) VALUES (?, ?)', params, (err, data) => {
      if (err) {
        throw error;
      }
      cb(data);
    });
  }
};