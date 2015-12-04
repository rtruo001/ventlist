var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("HELLO index");

  res.render('index', { title: 'Vent List' });
});

module.exports = router;
