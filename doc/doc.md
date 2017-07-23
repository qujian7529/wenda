
# 个人页面




# 遇到问题
1.头像上传  图像img 与 input 隐藏
2.界面下拉到ul如何让ul跟着向下移动
3.分页
4.滚动监听
5.路由跳转
6.session
7.input type='data'  type='radio' 在页面上的显示
8.数据库获取对象
9.node 某端口被占用，如何结束或杀死
# 解决方法

1.将input绝对定位 大小与img相同  隐藏  opacity
2.
3.
4.<a href="#home">home</a>-----监听到--><div id="home"></div>
5. 同一个页面提交多表中某一个表单  
 app.js：将每个表单建立路由 
 ```js
    var geren = require('./routes/geren');
    var geren_wone =require('./routes/geren');
    var geren_wtwo = require('./routes/geren');
    var geren_wtre = require('./routes/geren');
    var geren_wfor = require('./routes/geren');
    
    
    app.use('/geren',geren);
    app.use('/geren_wone',geren_wone);
    app.use('/geren_wtwo',geren_wtwo);
    app.use('/geren_wtre',geren_wtre);
    app.use('/geren_wfor',geren_wfor);
 ```
    
     
     
 geren.js:提交某个表单 然后重定向到本页面:
 
 
 ```js
    
     router.post('/geren_wone',function(req,res,next){..res.redirect('/geren');})
     router.post('/geren_wtwo',function(req,res,next){..res.redirect('/geren');})
     router.post('/geren_wtre',function(req,res,next){..res.redirect('/geren');})
     router.post('/geren_wfor',function(req,res,next){..res.redirect('/geren');})
     router.get('/',function (req,res,next){res.render('geren');})
 ```
 
 
 geren.ejs： 因为js里路径/  代表了 /geren  所以路径要写成   /geren/..这样的形式
 ```js
     <form class="formcss" action="/geren/geren_wone" method="post" >
     <form class="formcss" action="/geren/geren_wtwo" method="post" >
     <form class="formcss" action="/geren/geren_wtre" method="post" >
     <form class="formcss" action="/geren/geren_wfor" method="post">
 ```  
6.session  定义
maxAge 定义的时间
```
app.use(session({
	resave: true,
  saveUninitialized: false,
  secret: '3nqr9xzx2438fgsdam4324n',
	cookie:{
		maxAge: 1000*60*30
	}
}));
```
session 定义的东西 相当于public 他其后的东西是全局的对象  可以存放 数组 变量  json等任何数据  用的时候就用他后的对象去引入  全局对象定义的值

7.引入moment
```
var moment = require('moment');
var dat=moment(data[0].BirthDay).format('YYYY-MM-DD');
```
因为 数据库定义的date 是很长的  和html里的不一样 所以要正确匹配  然后给value才可以
 radio可以用
 ```
	<label class="checkbox-inline" >
		<input type="radio" name="gender" value="0"  											    <% if(gender == '0'){ %>													    checked="checked" 											    	     <% } %>													    	>保密												   	   </label>
        <label class="checkbox-inline" > 
	   <input type="radio" name="gender" value="1" 												<% if(gender == '1'){ %>													    checked="checked" 
		         <% } %>													    	 >男													 </label>														    <label class="checkbox-inline" >												<input type="radio" name="gender" value="2" 											<% if(gender == '2'){ %>													checked="checked" 												<% } %>	 												                 >女
	</label>
```


center-block  块居中  text-center 文本居中
clearfix 清除浮动
text-hide 图片替换

8.数据库获取对象的东西时  data时数组  获取时用data[0]

９．ps -eaf|gr npm　查看进程　sudo kill id 结束进程,如果结束不行　就sudo kill -9 id　杀死　╭（╯＾╰）╮
 为避免此类情况　结束进程时　按ctrl+alt+c  或是　ctrl+c  尽量不用ctrl+z
