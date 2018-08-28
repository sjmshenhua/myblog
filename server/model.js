const mongoose = require('mongoose');

//连接mongo 并且使用mydb这个集合
const DB_URL = 'mongodb://localhost:27017/imooc-chat';
mongoose.connect(DB_URL)


const models = {
    user: {
        'name': { 'type': String, 'require': true},             //用户名
        'pwd': { 'type': String, 'require': true},              //密码
        'type': { 'type': String, 'require': true},             //
        'avatar': { 'type': String,},           //头像
        'desc': { 'type': String,},             //个人简介或者职位简介
        'title': { 'type': String,},            //职位

        'company': { 'type': String,},          //公司名称
        'money': { 'type': String,}             //钱
    },
    chat: { //聊天信息数据模块
        'chatid': { 'type': String, 'require': true },                               //信息唯一标识
        'from': { 'type': String, 'require': true },                                 //谁发的
        'to': { 'type': String, 'require': true },                                   //发给谁
        'read': { 'type': Boolean, 'default': false },                               //是否已读
        'content': { 'type': String, 'require': true, 'default': '' },               //信息文本
        'create_time': { 'type': Number, 'default': new Date().getTime() },          //信息创建时间

    }
}
// mongoose.connection.on('connected',function(){
//     console.log('mongo connect success')
// })


for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}