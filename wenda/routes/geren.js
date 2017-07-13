var express = require('express');
var router = express.Router();
var db = require('./mongodb');
var salt = 10;
var bcrypt = require('bcrypt');

router.get('/',function (req,res,next) {
	res.render('gern');
})

//对个人信息的编辑
router.post('/',function(req,res,next){
	var ger = new  db.Geren({
		Name:req.body.name,
		Age:req.body.age,
		Gender:req.body.gender,
		Phone: req.body.phone,
		BirthDay:req.body.birthday,
		Residence:req.body.residence,
		Email:req.body.email,
		PersonalWebsite:req.body.personalWebsite,
		WorkExperience:req.body.workExperience,
		LearningExperience:req.body.learningExperience,
		OpenSourceProject:req.body.openSourceProject

	})
	ger.save(function(err,data){
		if(err)console.log('save err !!--------------');
		res.redirct('/'),
	})
})

// //我的主页
// router.get('/zhuye',function(req,res,next){

// })
// //我的提问
// router.get('/tiwen',function(req,res,next){

// })
// //我的收藏
// router.get('/shoucang',function(req,res,next){

// })
// // 我的笔记
// router.get('/biji',function(req,res,next){

// })
// // 我的分享
// router.get('/fenxiang',function(req,res,next){

// })
module.exports = router ;