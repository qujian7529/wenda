var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var query = require('querystring');
var mongoose =require('mongoose');


var url = 'mongodb://superMain:666666@ds053469.mlab.com:53469/super_invincible';
mongoose.connect(url);

// 外界传入Ifo 需要查什么  name？ password？ kouling？ 传输内容
// Ifo =[{'':''},{'':'','':''},..];
var Ifo = [];

//测试运行情况
var db = mongoose.connection ;

db.on('error',function(){
	console.log('connect error');
})

db.once('open',function(){
	console.log('mongoose working');
})
//模子
var Schema = mongoose.Schema ;

//个人
var grSchema = new Schema{
	
		Name:String,
		Age:Number,
		Gender:String,
		Phone: Number,
		BirthDay:Date,
		Residence:String,
		Email:String,
		PersonalWebsite:String,
		WorkExperience:String,
		LearningExperience:String,
		OpenSourceProject:String

}
//公用的
var shareSchema = new Schema{
	name: String,
	Id:Schema.Types.ObjectId,
	Id_wenti:Schema.Types.ObjectId,
	Id_shouchang:Schema.Types.ObjectId,
	Id_huida:Schema.Types.ObjectId,
	password:String,
	follow:Number,
	following:Array,
	fensishu:Number,
	fensiming:Array,
	touxiang:String,
}
//回答集合
var hdSchema = new Schema{
	Id_huida:Schema.Types.ObjectId,
	name:String,
	huida:String,
	time:Date,
	Id_wenti:Schema.Types.ObjectId,
	dianzanshu:Number,
	caina :Boolean

}
//收藏  对问题、回答进行备份
var scSchema = new Schema{
	//提问者
	name:String,
	time:Date,
	wenti_h:String,
	wenti:String,
	shoucang:Boolean,

	//回答者
	name2:String,
	huida:String,
	time2:Date,
	dianzanshu:Number,
	caina :Boolean
} 
//提问
var twSchema = new Schema{
	Id_wenti:Schema.Types.ObjectId,
	time:Date,
	wenti_h:String,
	wenti:String,
	shoucang:Boolean,

}

// // 步入数据库
module.exports.Geren = mongoose.model('geren',grSchema);

// //通过Ifo对数据赋值
// var geren = new Geren({
// 	name: String,
// 	Id:Schema.Types.ObjectId,
// 	Id_wenti:Schema.Types.ObjectId,
// 	Id_shouchang:Schema.Types.ObjectId,
// 	Id_huida:Schema.Types.ObjectId,
// 	password:String,
// 	follow:Number,
// 	following:Array,
// 	fensishu:Number,
// 	fensiming:Array,
// 	touxiang:String,
// }) 


module.exports.Huida = mongoose.model('huida',hdSchema);

// var huida = new Huida({
// 	Id_huida:Schema.Types.ObjectId,
// 	name:String,
// 	huida:String,
// 	time:Date,
// 	Id_wenti:Schema.Types.ObjectId,
// 	dianzanshu:Number,
// 	caina :Boolean
// }) 

module.exports.Shoucang = mongoose.model('shoucang',scSchema);

// var shoucang = new Shoucang({
// 	//提问者
// 	name:String,
// 	time:Date,
// 	wenti_h:String,
// 	wenti:String,
// 	shoucang:Boolean,

// 	//回答者
// 	name2:String,
// 	huida:String,
// 	time2:Date,
// 	dianzanshu:Number,
// 	caina :Boolean
// }) 


module.exports.Tiwen = mongoose.model('tiwen',twSchema);

// var tiwen = new Tiwen({
// 	Id_wenti:Schema.Types.ObjectId,
// 	time:Date,
// 	wenti_h:String,
// 	wenti:String,
// 	shoucang:Boolean,
// }) 

//保存到数据库
// geren.save(function(err,date){
// 	if(err)console.log('save error');
// })


// huida.save(function(err,date){
// 	if(err)console.log('save error');
// })
// tiwen.save(function(err,date){
// 	if(err)console.log('save error');
// })
// shoucang.save(function(err,date){
// 	if(err)console.log('save error');
// })

// Geren.remove({name: 'David'}, function (err) {
//   console.log("remove");
//   if(err) console.log(err);
// });

// Geren.find({}, function(err, data){
//   console.log("find");
//   console.log(data);
// });


// //对象
// var  gr = require('./geren.js');



// //外界传来所执行的符号 执行什么
// var n ;

// //增删改查符号
// var Mon =['findDB','updateDB','mydbInit','removeDB'];



// //跳转符号
// var bol ='' ;





// // 数据库链接
// MongoClient.connect(url,function(err,db){
// 	assert.equal(null,err);
// 	for(i = 0 ;i < 4;i ++){
// 		if(i == n){
// 			Mon[i](db,function(){
// 				console.log(Mon[i]+'OK');
// 				db.close();
// 			})
// 		}
// 	}
// })
// //查询
// var findDB = function(db,callback){
// 	 Ifo[0] = query.parse(gr.info[0]).name;
// 	 Ifo[1] = query.parse(gr.info[0]).password;
	
// 	var cursor = db.collection('student').find({'name':name,'password':password});

// 	cursor.each(function(err,doc){
// 		assert.equal(err,null);
// 		if(doc !== null){
// 			// 成功
// 			bol = 'socket' ;
// 		}else{
// 			callback();
// 			// 失败
// 			bol = 'index' ;
// 			}
// 	})
// }
// // Ifo =[];
// // //自定义find
// // var finds =function(db,f){
// // 		//查询 改 增 的name 并记录下来
// // 		var bool = false ;
		

// // 		var cursor = db.collection('student').find({'name':f[0]});
// // 		cursor.each(function(err,doc){
// // 			if(doc !== null){
// // 				bool = true ;
// // 				conn = f ;
// // 			}else{
// // 				callback();
// // 				bool =false ;
// // 			}

// // 		})
// // 		return  bool;
// // }
// // 0 _ 0 json 怎样解析
// //更改
// var updateDB =function(db,callback){
// 	// 更改前 应该先查询一下该name  如果有记录密码 没有返回
// 	Ifo[0] = query.parse(gr.info[1]).name;
// 	Ifo[1] =query.parse(gr.info[1]).password;
// 	Ifo[2] = finds(gr.info[1]).kouling;
// 	var bool = finds(db,Ifo);
// 	if(bool == true){
// 		db.collection('student').updateOne(
// 			{'name':info,'kouling':info},
// 			{$set:{'password':info}},
// 		function(err,results){
// 			callback(results);

// 		})
// 		bol = 'index' ;
// 	}else{
// 		bol = 'forget'; 
// 	}
	

// 	// 查询现在的他的password  如果和之前记录的相同 则失败
	
// }

// //添加
// var mydbInit =function(db,callback){
// 	Ifo[0] = query.parse(gr.info[2]).name;
// 	Ifo[1] = query.parse(gr.info[2]).password;
// 	Ifo[2] = query.parse(gr.info[2]).kouling;

// 	var bool = finds(db,Ifo);
// 	if(bool == true){
// 		bol ='Register';
// 	}else{
// 		db.collection('student').insertOne({
// 			name:info,
// 			password:info,
// 			kouling:info
// 		},function(err,results){
// 			assert.equal(err,null);
// 			callback();
// 		})
// 		bol = 'index' ;
// 	}
	
// }

// Ifo =[] ;
// //删除
// var removeDB = function(err,callback){
// 	var bool =finds(db,info);
// 	if(bool == true){
// 		db.collection('student').deleteMany(
// 		{'name':info},
// 		function(err,results){
// 			callback();
// 		})
// 		bol =''
// 	}else{
// 		bol = '';
// 	}
	
// }


// // 对操作判断 做出的决定
// var Jump =function(){
// 	//跳转到index
// 	if(bol == 'index'){
		
// 		render('index');
// 	//跳转到forget	
// 	}else if(bol == 'forget'){
// 		render('http-Forget');

// 	//跳转到 register
// 	}else if(bol == 'register'){
// 		render('http-Register')

// 	//跳转到socket
// 	}else if(bol == 'socket'){
// 		render('socket');

// 	//失败的跳转
// 	}else{
// 		render('err');
// 	}
// }


