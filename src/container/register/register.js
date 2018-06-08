import React from 'react'
import Logo from '../../component/logo'
import { List, InputItem, WingBlank, Radio, WhiteSpace, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { register } from '../../redux/user.redux'
import '../../assets/css/register.css'



@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            type: 'genius',
            name: '',
            pwd: '',
            repeatpwd: '',
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    
    handleChange(key,val){
        this.setState({
            [key]: val
        })
    }
    handleRegister(){
        this.props.register(this.state)
    }
    render(){
        const RadioItem = Radio.RadioItem
        return(
            <div>
                <Logo></Logo>
                {/* <h1>注册页</h1> */}
                {this.props.msg? <p className="error-msg">{this.props.msg}</p>:null}
                <List>
                    <InputItem
                        onChange={v=>this.handleChange('name',v)}
                    >用户名</InputItem>
                    <WhiteSpace />
                    <InputItem type="password"
                        onChange={v=>this.handleChange('pwd',v)}
                    >密码</InputItem>
                    <InputItem type="password"
                        onChange={v=>this.handleChange('repeatpwd',v)}
                    >确认密码</InputItem>
                    <RadioItem 
                        checked={this.state.type === 'genius'}
                        onChange={()=>this.handleChange('type','genius')}
                    >牛人</RadioItem>
                    <RadioItem 
                        checked={this.state.type === 'boss'}
                        onChange={()=>this.handleChange('type','boss')}
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