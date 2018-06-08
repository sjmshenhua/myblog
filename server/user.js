const express = require('express');
const Router = express.Router();
const utils = require('utility');
const model = require('./model');
const User = model.getModel('user');


Router.get('/list',function(req,res){
    User.find({},function(err,data){
        return res.json(data)
    })
})

Router.post('/register',function(req, res){
    const { name, pwd, type } = req.body
    User.findOne({name},function(err,doc){
        if(doc){
            return res.json({code: 1, msg: '用户名重复'})
        }
        User.create({ name, type, pwd: md5Pwd(pwd)},function(err, data){
            if(err){
                return res.json({code: 1, msg:'后端出错了'})
            }
            return res.json({code: 0,})
        })
    })

})

Router.get('/info',(req,res)=>{
    return res.json({code:0})
})

function md5Pwd(pwd){
    const salt = "sjmshenhua_is_goods915_854145!@#$%&~~~asd"
    return utils.md5(utils.md5(pwd+salt))
}


module.exports = Router;