import React from 'react';
import MessageStyle from './Message.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (<div className={MessageStyle.userMessageLeft}>
        <div className={MessageStyle.img}>
            <img src={props.img} className={MessageStyle.avotarky} />
        </div>
        <div className={MessageStyle.spanBort}>{props.text}</div>
    </div>);
};

const Friends = (props) => {
    return (<div className={MessageStyle.dialog} >
        <li>
            <NavLink activeClassName={MessageStyle.size} to={props.userId}><b>{props.userName}</b></NavLink>
        </li>
    </div>);
};

let noNameImg = 'https://www.flaticon.com/svg/static/icons/svg/848/848043.svg'

const Message = (props) => {

    const friends = [
        { id: '/Message/1', name: 'Victor' },
        { id: '/Message/2', name: 'Anton' },
        { id: '/Message/3', name: 'Anna' },
        { id: '/Message/4', name: 'Vika' },
        { id: '/Message/5', name: 'Alica' },
        { id: '/Message/6', name: 'Sveta' }
    ];

    const friendsElements = friends.map( element => <Friends userName={element.name} userId={element.id}/> );

    const messages = [
        { url: 'https://image.flaticon.com/icons/svg/145/145859.svg', text: "Hello, Anton!!! How are you? Where are you bro?" },
        { url: 'https://image.flaticon.com/icons/svg/145/145867.svg', text: "I'm ok)) How are you bro? I think that your WEBSITE was finished?" },
        { url: 'https://image.flaticon.com/icons/svg/145/145859.svg', text: "Yes! It is very difecalt, but i could do it! I'm very happy now))" },
        { url: 'https://image.flaticon.com/icons/svg/145/145867.svg', text: "Oh, sorry, I haven't free time, I must rut to my course)) See you bro))" },
        { url: 'https://image.flaticon.com/icons/svg/145/145859.svg', text: "See you bro)) Goodby!!!" }
    ];

    const messagesElements = messages.map( elememnt => <Dialog img={elememnt.url} text={elememnt.text} /> );

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