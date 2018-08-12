import React from 'react';
import Logo from '../../component/logo';
import { Redirect } from "react-router-dom";
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { login }  from '../../redux/user.redux';
import { connect } from 'react-redux';
import imoocFrom from '../../component/imooc-form/imooc-form'
// class Hello extends React.Component{
//     render(){
//         return<h2>这是一个组件</h2>
//     }
// }

// function webHello(Cmp){
//     class webCmp extends React.Component{
//         render(){
//             return (
//                 <div>
//                     <p>这是一个子组件</p>
//                     <Cmp {...this.props}></Cmp>

//                 </div>
//             )
//         }
//     }
//     return webCmp
// }

// Hello = webHello(Hello)

@connect(
    state=>state.user,
    {login}
)
@imoocFrom
class Login extends React.Component{
    constructor(props){
        super(props)
        // console.log(this.props)
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(){
        
        this.props.login(this.props.state)
    }

    register(){
        this.props.history.push('/register')
    }
    render(){
        return(
            <div>
                {this.props.redirectTo&&this.props.redirectTo!=='/login'?<Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                {/* <h1>登录页</h1> */}
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=>this.props.handleChange('name',v)}
                        >用户</InputItem>
                        <WhiteSpace />
                        <InputItem type="password"
                            onChange={v=>this.props.handleChange('pwd',v)}
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