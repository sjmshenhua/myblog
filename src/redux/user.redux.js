import axios from 'axios'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const initState = {
    isAuth: '',
    nama: '',
    pwd: '',
    type: '',
    msg: ''
}

function errorMsg(msg){
    return {type: ERROR_MSG, msg: msg}
}

function registerSuccess(data){
    return { type:REGISTER_SUCCESS, payload:data}
}

//reducer
export function user(state=initState,action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return {...state, msg:'',isAuth:true, ...action.payload}
        case ERROR_MSG:
        return {...state, msg:action.msg,isAuth:false}
        default:
            return state

    }
}

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
                dispatch(registerSuccess({name,pwd,type}))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
    
}