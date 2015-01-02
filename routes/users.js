var express = require('express');
var router = express.Router();
var user = require('./../models/user.js');
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
