import axios from 'axios'
import { getRedirectPath } from '../util'


// const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
// const LOGIN_SUCCESS = 'LOGIN_SUCCESS'; 
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const LOAD_DATA = 'LOAD_DATA';
const ERROR_MSG = 'ERROR_MSG';
const initState = {
    redirectTo: '',
    // isAuth: '',
    nama: '',
    // pwd: '',
    type: '',
    msg: ''
}

//reducer
export function user(state=initState,action){
    switch(action.type){
        case AUTH_SUCCESS:
            return {...state, msg:'',redirectTo: getRedirectPath(action.payload), ...action.payload}
        case LOAD_DATA:
            return {...state, ...action.payload}
        case ERROR_MSG:
            return {...state, msg:action.msg}
        default:
            return state

    }
}

// 完善信息保存
export function update(data){
    return dispatch=>{
        axios.post('/user/update',data)
        .then((res)=>{
            if(res.status === 200 && res.data.code === 0){
                dispatch(anthSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

//登录
export function login({name,pwd}){
    if(!name||!pwd){
        return errorMsg('用户密码必须输入')
    }

    return dispatch=>{
        axios.post('/user/login',{name,pwd})
        .then(res=>{
            if(res.status === 200 && res.data.code === 0){
                dispatch(anthSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

//注册
export function register({ name, pwd, repeatpwd, type }){
    if(!name || !pwd || !type){
        return errorMsg('用户名密码必须填写')
    }
    if(pwd !== repeatpwd){
        return errorMsg('两次密码不一致')
    }
    return dispatch=>{
        axios.post('/user/register',{name,pwd,type})
        .then(res=>{
            if(res.status === 200 && res.data.code === 0){
                dispatch(anthSuccess({name,pwd,type}))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
    
}



// function registerSuccess(data){
//     return { type:REGISTER_SUCCESS, payload:data}
// }
// function loginSuccess(data){
//     return {type: LOGIN_SUCCESS, payload:data}
// }

function anthSuccess(obj){
    // 排除pwd字段
    const { pwd, ...data } = obj
    return {type: AUTH_SUCCESS, payload: data}
}

function errorMsg(msg){
    return {type: ERROR_MSG, msg: msg}
}



export function loadData(userifo){
    return {type: LOAD_DATA, payload: userifo }
}
