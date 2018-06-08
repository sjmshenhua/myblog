const express = require('express');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');


Router.get('/list',function(req,res){
    User.find({},function(err,data){
        return res.json(data)
    })
})

Router.post('/register',function(req, res){
    const { user, pwd, type } = req.body
    User.findOne({user},function(err,doc){
        if(doc){
            return res.json({code: 1, msg: '用户名重复'})
        }
        User.create({ user, pwd, type },function(err, data){
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



module.exports = Router;