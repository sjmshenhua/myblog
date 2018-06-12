import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { loadData } from '../../redux/user.redux';
import { connect } from 'react-redux';

@connect(
    null,
    { loadData }
)

@withRouter
class AuthRoute extends React.Component{
    componentDidMount(){
        //获取用户信息
        axios.get('/user/info')
        .then((res)=>{
            
            if(res.status === 200){
                if(res.data.code === 0){
                    //有登录信息
                    this.props.loadData(res.data.data)
                }else{
                    this.props.history.push('/login')
                }
            }else{
              
                console.log(res.data)
            }
            
        })
    }
    render(){
        return null
    }
}

export default AuthRoute;