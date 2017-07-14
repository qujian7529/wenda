
# 个人页面




# 遇到问题
1.头像上传  图像img 与 input 隐藏
2.界面下拉到ul如何让ul跟着向下移动
3.分页
4.滚动监听
5.路由跳转

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
    
   geren.js:提交某个表单 然后重定向到本页面 :
  ```js
     router.get('/',function (req,res,next){
      res.render('geren');
     })
  ```
  

    router.post('/geren_wone',function(req,res,next){..res.redirect('/geren');})
    router.post('/geren_wtwo',function(req,res,next){..res.redirect('/geren');})
    router.post('/geren_wtre',function(req,res,next){..res.redirect('/geren');})
    router.post('/geren_wfor',function(req,res,next){..res.redirect('/geren');})
 
   geren.ejs： 因为js里路径/  代表了 /geren  所以路径要写成   /geren/..这样的形式

    <form class="formcss" action="/geren/geren_wone" method="post" >
   	<form class="formcss" action="/geren/geren_wtwo" method="post" >
    <form class="formcss" action="/geren/geren_wtre" method="post" >
    <form class="formcss" action="/geren/geren_wfor" method="post">
   




center-block  块居中  text-center 文本居中
clearfix 清除浮动
text-hide 图片替换



