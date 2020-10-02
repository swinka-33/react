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
    return(<div className={MessageStyle.dialog} >
        <li>
            <NavLink activeClassName={MessageStyle.size} to={props.userId}><b>{props.userName}</b></NavLink>
        </li>
    </div>);
};

let noNameImg = 'https://www.flaticon.com/svg/static/icons/svg/848/848043.svg'

const Message = (props) => {

    const friends = [
        { id : '/Message/1', name : 'Victor' },
        { id : '/Message/2', name : 'Anton' },
        { id : '/Message/3', name : 'Anna' },
        { id : '/Message/4', name : 'Vika' }
    ];

    const messages = [
        { url : 'https://image.flaticon.com/icons/svg/145/145859.svg', text : "Hello, Anton!!! How are you? Where are you bro?" },
        { url : 'https://image.flaticon.com/icons/svg/145/145867.svg', text : "I'm ok)) How are you bro? I think that your WEBSITE was finished?" },
        { url : 'https://image.flaticon.com/icons/svg/145/145859.svg', text : "Yes! It is very difecalt, but i could do it! I'm very happy now))" },
        { url : 'https://image.flaticon.com/icons/svg/145/145867.svg', text : "Oh, sorry, I haven't free time, I must rut to my course)) See you bro))" },
        { url : 'https://image.flaticon.com/icons/svg/145/145859.svg', text : "See you bro)) Goodby!!!" },
    ];

    return (<div className={MessageStyle.MessageMainDiv}>

        <div className={MessageStyle.span}>
            DIALOGS
        </div>
        <div className={MessageStyle.friends}>
            <Friends userName={friends[0].name} userId={friends[0].id}/>
            <Friends userName={friends[1].name} userId={friends[1].id}/>
            <Friends userName={friends[2].name} userId={friends[2].id}/>
            <Friends userName={friends[3].name} userId={friends[3].id}/>
        </div>
        <div className={MessageStyle.messages}>
            <Dialog img={messages[0].url} text={messages[0].text}/>
            <Dialog img={messages[1].url} text={messages[1].text}/>
            <Dialog img={messages[2].url} text={messages[2].text}/>
            <Dialog img={messages[3].url} text={messages[3].text}/>
            <Dialog img={messages[4].url} text={messages[4].text}/>
        </div>

    </div>);
};

export default Message;