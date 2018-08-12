import React from 'react';




class Chat extends React.Component{

    render(){
        return (
            <div>
                <h1>chat with user:{this.props.match.params.user}</h1>
            </div>
        )
    }
}

export default Chat