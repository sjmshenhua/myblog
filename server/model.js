const mongoose = require('mongoose');

//连接mongo 并且使用mydb这个集合
const DB_URL = 'mongodb://localhost:27017/mydb';
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})