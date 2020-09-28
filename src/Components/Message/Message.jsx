import React from 'react';
import MessageStyle from './Message.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (<div className={MessageStyle.userMessageLeft}>
        <div className={MessageStyle.img}>
            <img src='https://www.flaticon.com/svg/static/icons/svg/848/848043.svg' className={MessageStyle.avotarky} />
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

const Message = (props) => {
    return (<div className={MessageStyle.MessageMainDiv}>

        <div className={MessageStyle.span}>
            DIALOGS
        </div>
        <div className={MessageStyle.friends}>
            <Friends userName='Viktor' userId='/Message/1'/>
            <Friends userName='Anton' userId='/Message/2'/>
            <Friends userName='Anna' userId='/Message/3'/>
            <Friends userName='Vika' userId='/Message/4'/>
        </div>
        <div className={MessageStyle.messages}>
            <Dialog text="Hello, Anton!!! How are you? Where are you bro?"/>
            <Dialog text="I'm ok)) How are you bro? I think that your WEBSITE was finished?"/>
            <Dialog text="Yes! It is very difecalt, but i could do it! I'm very happy now))"/>
            <Dialog text="Oh, sorry, I haven't free time, I must rut to my course)) See you bro))"/>
            <Dialog text="See you bro)) Goodby!!!"/>
        </div>

    </div>);
};

export default Message;