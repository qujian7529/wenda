var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tiwen', { title: '提问' });
});

module.exports = router;
