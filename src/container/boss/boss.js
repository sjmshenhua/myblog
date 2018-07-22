import React from 'react';
import axios from 'axios'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

class Boss extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        axios.get('/user/list?type=genius')
        .then(res=>{
            console.log(res.data)
            if(res.data.code === 0){
                this.setState({data: res.data.data})
            }
        })
    }
    render(){
        const Header = Card.Header
        const Body = Card.Body
        console.log(this.state.data)
        return(
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                {this.state.data.map(v=>(
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

export default Boss;