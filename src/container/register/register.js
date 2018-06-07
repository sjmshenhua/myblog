import React from 'react'
import Logo from '../../component/logo'
import { List, InputItem, WingBlank, Radio, WhiteSpace, Button } from 'antd-mobile';

class Register extends React.Component{
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
        this.state = {
            type: 'genius'
        }
    }
    register(){
        // this.props.history.push('/resister')
    }
    render(){
        const RadioItem = Radio.RadioItem
        return(
            <div>
                <Logo></Logo>
                {/* <h1>注册页</h1> */}
                <List>
                    <InputItem>用户</InputItem>
                    <WhiteSpace />
                    <InputItem>密码</InputItem>
                    <InputItem>确认密码</InputItem>
                    <RadioItem checked={this.state.type == 'genius'}>牛人</RadioItem>
                    <RadioItem checked={this.state.type == 'boss'}>BOSS</RadioItem>
                </List>
                <WhiteSpace />
                <WingBlank>
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register;