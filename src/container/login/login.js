import React from 'react';
import Logo from '../../component/logo';
import { Redirect } from "react-router-dom";
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { login }  from '../../redux/user.redux';
import { connect } from 'react-redux';

@connect(
    state=>state.user,
    {login}
)
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            pwd: ''
        }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleChange(key,val){
        this.setState({
            [key]: val
        })
    }

    handleLogin(){
        this.props.login(this.state)
    }

    register(){
        this.props.history.push('/register')
    }
    render(){
        return(
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                {/* <h1>登录页</h1> */}
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=>this.handleChange('name',v)}
                        >用户</InputItem>
                        <WhiteSpace />
                        <InputItem type="password"
                            onChange={v=>this.handleChange('pwd',v)}
                        >密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button onClick={ this.handleLogin } type="primary">登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;