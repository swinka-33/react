import React from 'react';
import MessageStyle from './Message.module.css';
import Friends from './Friends/Friends';
import Dialog from './Dialog/Dialog';

let noNameImg = 'https://www.flaticon.com/svg/static/icons/svg/848/848043.svg'

const Message = (props) => {

    const friendsElements = props.state.friends.map( element => <Friends userName={element.name} userId={element.id}/> );

    const messagesElements = props.state.messages.map( elememnt => <Dialog img={elememnt.url} text={elememnt.text} /> );

    const newMessage = () => {
        return alert(refMessage.current.value)
    }

    let refMessage = React.createRef();

    return (<div className={MessageStyle.MessageMainDiv}>

        <div className={MessageStyle.span}>
            DIALOGS
        </div>
        <div className={MessageStyle.friends}>
            { friendsElements }
        </div>
        <div className={MessageStyle.messages}>
            { messagesElements }
            <div className={MessageStyle.inputDiv}>
                <textarea ref={refMessage} placeholder='Your message' type='text' className={MessageStyle.input}></textarea>
                <button onClick={ newMessage } className={MessageStyle.send}>
                    Send
                </button>
            </div>
        </div>

    </div>);
};

export default Message;