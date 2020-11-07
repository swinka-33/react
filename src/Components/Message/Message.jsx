import React from 'react';
import MessageStyle from './Message.module.css';
import Friends from './Friends/Friends';
import Dialog from './Dialog/Dialog';
// import { friends } from './../../index';
// import { messages } from './../../index';

let noNameImg = 'https://www.flaticon.com/svg/static/icons/svg/848/848043.svg'

const Message = (props) => {

    const friendsElements = props.friends.map( element => <Friends userName={element.name} userId={element.id}/> );

    const messagesElements = props.messages.map( elememnt => <Dialog img={elememnt.url} text={elememnt.text} /> );

    return (<div className={MessageStyle.MessageMainDiv}>

        <div className={MessageStyle.span}>
            DIALOGS
        </div>
        <div className={MessageStyle.friends}>
            { friendsElements }
        </div>
        <div className={MessageStyle.messages}>
            { messagesElements }
        </div>

    </div>);
};

export default Message;