const express = require('express');
const userRouter = require('./user')

// 新建app
const app = express()

app.use('/user',userRouter)



// 类似于mysql的表 mongo里面有文档、字段的概念
// 表的概念
// const User = mongoose.model('user',new mongoose.Schema({
//     name: {type: String,require:true},
//     age: {type: Number,require:true}
// }))
// 新增数据
// User.create({
//     name: 'xiaohuang',
//     age: 23
// },function(err,data){
//     if(!err){
//         console.log(data)
//     }else{
//         console.log(err)
//     }
// })

//删除
// User.remove({age:18},function(err,data){
//     console.log(data)
// })

//修改



// app.get('/',function(req,res){
//     res.send('<h1>hello world</h1>')
// })

// app.get('/data',function(req,res){
//     User.find({name:'zhangsan'},function(err,data){
//         let obj = {
//             data: data,
//             status: 1,
//             msg: '请求成功'
//         }
//         res.json(obj)
//     })
//     // res.json({name:'hello1',age:18})
// })

// app.get('/delete',function(req,res){

// })
app.listen(9093,function(){
    console.log('node app start at port 9093')
})