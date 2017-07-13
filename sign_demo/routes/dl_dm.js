var express = require('express');
var router = express.Router();

var bcrypt = require('bcrypt ');
var  salt = 10 ;
var db = require('./db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dl_dm');
});

router.post('/',function(req,res,next){
	db.user.findOne({
		name:req.body.username
	},function(err,data){
		console.log(data);
		if(data){
			bcrypt.compare(req.body.password,data.password,function(err,hash){
				req.session.name = data.name;
				res.redirect('/');
			}else{
			 res.redirect('/login');
			})
		}
	})
})

module.exports = router;
