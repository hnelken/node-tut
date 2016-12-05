var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ key: 'value2' })
  //res.send('respond with a resource');
});

module.exports = router;
