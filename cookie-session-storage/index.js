//storage的设置获取
// localStorage.setItem('aa', 'bbb');
// console.log(localStorage.getItem('aa'))
// console.log(localStorage.aa);
// sessionStorage.setItem('aa', 'bb');
// console.log(sessionStorage.getItem('aa'))
// console.log(localStorage, sessionStorage) //返回的是一个对象
// // localStorage.clear();
// // sessionStorage.clear();
// localStorage.removeItem('aa');


const express = require('express');
const path = require('path');
const app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.static(__dirname))
app.use('/admin',function(req,res){
    console.log(req.cookies);
    //服务单设置cookie
    res.cookie('haha', escape('name1=value1&name2=value2'), {
        maxAge:10*1000, path:'/',httpOnly:true
    });
    res.sendFile(path.resolve(__dirname,'./index.html'))
})
app.listen(3000,function(){
    console.log('服务启动')
})
// console.log(express)

// console.log(document.cookie)