import React from 'react';
import axios from 'axios';

class AuthRoute extends React.Component{
    componentDidMount(){
        console.log(1)
        //获取用户信息
        axios.get('/user/info')
        .then((res)=>{
            console.log(res)
        })
    }
    render(){
        return null
    }
}

export default AuthRoute;