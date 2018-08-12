import React from 'react';
import PropTypes from 'prop-type';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import {withRouter} from 'react-router-dom'

@withRouter

class UserCard extends React.Component{
    // 属性检查 校验 isRequired必传
    static propTypes = {
        // selectAvatar: PropTypes.func.isRequired
        userlist: PropTypes.array
    }
    handleClick(v){
        console.log(v)
        this.props.history.push(`./chat/${v.name}`)
    }
    render(){
        const Header = Card.Header
        const Body = Card.Body
        return (
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                {this.props.userlist.map(v=>(
                    v.avatar?(
                        <Card 
                            key={v._id}
                            onClick={()=>this.handleClick(v)}
                        > 
                            <Header 
                                title={v.name}
                                thumb={require(`../../assets/images/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            ></Header>
                            <Body>
                                {v.type === 'boss'?<div>公司：{v.company}</div>:null}
                                {v.desc.split('\n').map(d=>(
                                    <div key={d}>{d}</div>
                                ))}
                                {v.type === 'boss'?<div>薪资：{v.money}</div>:null}
                            </Body>
                        </Card>
                    ):null
                ))}
            </WingBlank>
        )
    }
}

export default UserCard;