import React from 'react';
import { connect } from 'react-redux';
import {Result,List, WhiteSpace, Modal} from 'antd-mobile';
import browserCookies from 'browser-cookies'
import { logoutSubmit } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
@connect(
    state => state.user,
    {logoutSubmit}
)



class User extends React.Component{
    constructor(props){
        super(props)
        this.logout = this.logout.bind(this)
    }
    logout(){
        console.log(1)
        const alert = Modal.alert

        alert('注销','确认退出登录妈？？',[
            {twxt: '取消', onPress:()=>console.log('Cancel')},
            {twxt: '确认', onPress:()=>{
                // browserCookies.erase('userID')
                // window.location.reload()
                this.props.logoutSubmit()
            }}
        ])
        // 删除cookies 
        // 
        // set
        // get
    }

    render(){
        const props = this.props
        // console.log(this.props)
        const Item = List.Item
        const Brief = Item.Brief
        return props.name?(
            
            <div>
                
                <Result
                    img={<img src={require(`../../assets/images/${props.avatar}.png`)} alt="头像"/>}
                    title={props.name}
                    message={props.type === 'boss'?props.company:null}
                />
                <List renderHeader={()=>"简介"}>
                    <Item multipleLine>
                        {props.title}
                        {props.desc.split('\n').map(v=><Brief k={v}>{v}</Brief>)}
                        {props.money?<Brief>薪资：{props.money}</Brief>:null}
                    </Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <Item onClick="{this.logout}">退出登录</Item>
                </List>
            </div>
        ):<Redirect to={props.redirectTo} />
    }
}

export default User;