import React from 'react';
import MessageStyle from './Message.module.css';
import Friends from './Friends/Friends';
import Dialog from './Dialog/Dialog';
import { updateMessageCreators, sendMessageCreater } from '../../Redux/state';

const Message = (props) => {
    const friendsElements = props.state.friends.map( element => <Friends userName={element.name} userId={element.id}/> );
    const messagesElements = props.state.messages.map( elememnt => <Dialog img={elememnt.url} text={elememnt.text} /> );
    let newMessageBody = props.state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreater());
    };
    let onMessageClick = () => {
        let body = messageText.current.velue;
        props.store.dispatch(updateMessageCreators(body));
    };
    let messageText = React.createRef();
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
                <textarea 
                    placeholder='Your message' 
                    value={newMessageBody} 
                    onChange={ onMessageClick } 
                    ref={messageText}
                    type='text' 
                    className={MessageStyle.input}
                >

                </textarea>
                <button onClick={onSendMessageClick} className={MessageStyle.send}>
                    Send
                </button>
            </div>
        </div>

    </div>);
};

export default Message;