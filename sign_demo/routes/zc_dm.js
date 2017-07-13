var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var db = require('../db');
var salt = 10;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('zc_dm',);
});

router.post('/',function(req,res,next){
	bcrypt.hash(req.body.password,salt,function(err,hash){
		var user  =  new db.user(}{
			name:req.body.username,
			password:hash
		})
		user.save(function(err,data){
			res.redirect('/');
		})
	})
})
module.exports = router;
