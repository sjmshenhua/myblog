const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const model = require('./model');
const Chat = model.getModel('chat')
// 新建app
const app = express()

// 与express配合 work with express
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection',function(socket){

    socket.on('sendmsg',function(data){
        const { from, to, msg } = data

        const chatid = [from,to].sort().join('_') //聊天唯一ID

        Chat.create({ chatid, from, to, content: msg}, function(err, doc){
            // 发送全局使用
        io.emit('recvmsg',Object.assign({},doc._doc))
        })
        console.log(chatid)

        
    })
})

const userRouter = require('./user')



app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)

server.listen(9093,function(){
    console.log('node app start at port 9093 连接成功')
})


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
// User.remove({},function(err,data){
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
