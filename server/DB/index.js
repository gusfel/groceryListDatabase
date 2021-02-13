var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'groceries'
});


connection.connect(err => {
  if (err) {
    console.log('no connection');
  } else {
    console.log('connected to groceries database');
  }
});

module.exports = connection;