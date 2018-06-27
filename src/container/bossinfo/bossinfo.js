import React from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import { Redirect } from 'react-router-dom';
import AvatarSelector from '../../component/avatar-selector/avatar-selector';
import { connect } from 'react-redux';
import { update } from '../../redux/user.redux'

@connect(
    state=>state.user,
    {update}
)

class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            company: '',
            money: '',
            desc: ''
            
        }
    }
    onChange(key,val){
        console.log(key)
        this.setState({
            [key]: val
        })
    }
    render(){
        const path = this.props.location.pathname
        const redirect = this.props.redirectTO
        return(
            <div>
                {redirect&&redirect!==path ?<Redirect to={this.props.redirectTo}></Redirect>:null}
                <NavBar mode="dark">BOSS完善信息页</NavBar>
                {/* <AvatarSelector selectAvatar={this.selectAvatar}></AvatarSelector> */}
                <AvatarSelector selectAvatar={(imgname)=>{
                    this.setState({
                        avatar: imgname
                    })
                }}></AvatarSelector>
                <InputItem onChange={v=>this.onChange('title',v)} >招聘职位</InputItem>
                <InputItem onChange={v=>this.onChange('company',v)} >公司名称</InputItem>
                <InputItem onChange={v=>this.onChange('money',v)} >职位薪资</InputItem>
                <TextareaItem title="职位要求" rows={3} autoHeight onChange={v=>this.onChange('desc',v)} ></TextareaItem>

                <Button onClick={()=>{this.props.update(this.state)}} type="primary">保存</Button>
            </div>
        )
    }
       
}

export default BossInfo;