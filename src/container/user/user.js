import React from 'react';
import { connect } from 'react-redux';
@connect(
    state => state.user
)
class User extends React.Component{

    render(){
        console.log(this.props)
        return(
            <div>
            个人中心
            </div>
        )
    }
}

export default User;