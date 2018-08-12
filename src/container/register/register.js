import React from 'react'
import Logo from '../../component/logo'
import { List, InputItem, WingBlank, Radio, WhiteSpace, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { register } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
import imoocFrom from '../../component/imooc-form/imooc-form'

import '../../assets/css/register.css'



@connect(
    state=>state.user,
    {register}
)
@imoocFrom
class Register extends React.Component{
    constructor(props){
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
    }
    componentDidMount(){
        this.props.handleChange('type','genius')
    }
    handleRegister(){
        this.props.register(this.props.state)
    }
    render(){
        const RadioItem = Radio.RadioItem
        return(
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                {/* <h1>注册页</h1> */}
                {this.props.msg? <p className="error-msg">{this.props.msg}</p>:null}
                <List>
                    <InputItem
                        onChange={v=>this.props.handleChange('name',v)}
                    >用户名</InputItem>
                    <WhiteSpace />
                    <InputItem type="password"
                        onChange={v=>this.props.handleChange('pwd',v)}
                    >密码</InputItem>
                    <InputItem type="password"
                        onChange={v=>this.props.handleChange('repeatpwd',v)}
                    >确认密码</InputItem>
                    <RadioItem 
                        checked={this.props.state.type === 'genius'}
                        onChange={()=>this.props.handleChange('type','genius')}
                    >牛人</RadioItem>
                    <RadioItem 
                        checked={this.props.state.type === 'boss'}
                        onChange={()=>this.props.handleChange('type','boss')}
                    >BOSS</RadioItem>
                </List>
                <WhiteSpace />
                <WingBlank>
                    <Button onClick={this.handleRegister} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register;