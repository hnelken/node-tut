var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.users.findAll().then(function(results) {
    var userArray = results;
    res.json(userArray);
  })
});

module.exports = router;
