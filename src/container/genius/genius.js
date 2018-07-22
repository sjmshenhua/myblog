import React from 'react';
import { connect } from 'react-redux'; 
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { getUserList } from '../../redux/chatUser.redux';

@connect(
    state => state.chatuser,
    { getUserList }
)
class Genius extends React.Component{
    componentDidMount(){
        this.props.getUserList('boss')
    }
    render(){
        const Header = Card.Header
        const Body = Card.Body
        return(
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                {this.props.userlist.map(v=>(
                    v.avatar?(<Card key={v._id}> 
                        <Header 
                            title={v.name}
                            thumb={require(`../../assets/images/${v.avatar}.png`)}
                            extra={<span>{v.title}</span>}
                        ></Header>
                        <Body>{v.desc.split('\n').map(v=>(
                            <p key={v}>{v}</p>
                        ))}</Body>
                    </Card>):null
                ))}
                
            </WingBlank>
        )
    }
}

export default Genius;