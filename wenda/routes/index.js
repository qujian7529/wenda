var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var salt = 10 ;
var db = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wenda' });
});

// router.post('/',function(req,res,next){
// 	console.log(data);
// 		if(data){
// 			req.session.name = data.name ;
// 			res.redirect('/');
// 		}else{
// 			res.redirect('/login')
// 		}
		
// 	}
// })

module.exports = router;
