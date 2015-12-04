var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("HELLO");
  res.render('index', { title: 'Login' });
});

router.get('/:user', function(req, res, next) {
  console.log("HELLO2");
  res.render('index', { title: 'Login' });
});

module.exports = router;
