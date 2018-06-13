const express = require('express');
const Router = express.Router();
const utils = require('utility');
const model = require('./model');
const User = model.getModel('user');
const _filter = {'pwd': 0, '_v': 0} //过滤不显示数据

Router.get('/list',function(req,res){
    // User.remove({},function(err,data){})
    User.find({},function(err,data){
        return res.json(data)
    })
})

Router.post('/login',function(req,res){
    const { name, pwd } = req.body
    User.findOne({name,pwd:md5Pwd(pwd)}, _filter, function(err,doc){
        if(!doc){
            return res.json({code: 1, msg: '用户名或者密码错误'})
        }
        //设置cookie
        res.cookie('userID',doc._id)
        return res.json({code: 0, data: doc})
    })
})

Router.post('/register',function(req, res){
    const { name, pwd, type } = req.body
    User.findOne({name},function(err,doc){
        if(doc){
            return res.json({code: 1, msg: '用户名重复'})
        }
        
        const userModel = new User({ name, type, pwd: md5Pwd(pwd)})
        // 用userModel.save() 可以拿到生成后的_id，而User.create()取不到_id
        userModel.save(function(e,d){
            if(e){
                return res.json({code: 1,  msg:'后端出错了'})
            }
            const { name, type, _id } = d
            // 写入cookie
            res.cookie('userID',_id)
            return res.json({code: 0, data: {name, type, _id}})
        })
        
        // User.create(function(err, data){
        //     if(err){
        //         return res.json({code: 1, msg:'后端出错了'})
        //     }
        //     return res.json({code: 0,})
        // })
    })

})

Router.get('/info',(req,res)=>{
    //获取cookie
    const { userID } = req.cookies
    if(!userID){
        return res.json({code:1})
    }
    User.findOne({_id: userID}, _filter, function(err,doc){
        if(err){
            return res.json({code:1, msg:'后端出错'})
        }
        if(doc){
            return res.json({code: 0, data: doc})
        }
    })
    
})

function md5Pwd(pwd){
    const salt = "sjmshenhua_is_goods915_854145!@#$%&~~~asd"
    return utils.md5(utils.md5(pwd+salt))
}


module.exports = Router;