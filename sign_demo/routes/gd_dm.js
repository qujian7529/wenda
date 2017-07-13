var express =require('express');
var router =express.Router();
var db =require('./db');


router.get('/',function(req.res,next){
	req.sesion.name = null ;
	res.redirect('/');
})


module.express =router ;