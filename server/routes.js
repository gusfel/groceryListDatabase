// const express = require('express');

var controller = require('./controllers/controllers.js');
var router = require('express').Router();

// var groceries = express.Router;

router.get('/', controller.getGroceryList);

router.post('/', controller.addToList);

module.exports = router;