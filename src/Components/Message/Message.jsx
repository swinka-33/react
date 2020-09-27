import React from 'react';
import MessageStyle from './Message.module.css';

const Message = (props) => {
    return (<div className={MessageStyle.MessageMainDiv}>

        <div className={MessageStyle.span}>
            DIALOGS
        </div>
        <div className={MessageStyle.friends}>
            <div className={MessageStyle.bottom} /*activeClassName={MessageStyle.size}*/>
                <li>
                    Viktor
                </li>
            </div>
            <div className={MessageStyle.dialog} /*activeClassName={MessageStyle.size}*/>
                <li>
                    Anton
                </li>
            </div>
            <div className={MessageStyle.dialog} /*activeClassName={MessageStyle.size}*/>
                <li>
                    Anna
                </li>
            </div>
            <div className={MessageStyle.dialog} /*activeClassName={MessageStyle.size}*/>
                <li>
                    Vika
                </li>
            </div>
        </div>
        <div className={MessageStyle.messages}>
            <div className={MessageStyle.userMessageLeft + ' ' + MessageStyle.first}>
                Hello, Anton!!! How are you? Where are you bro?
            </div>
            <div className={MessageStyle.userMessageRight}>
                I'm ok)) How are you bro? I think that your WEBSITE was finished?
            </div>
            <div className={MessageStyle.userMessageLeft}>
                Yes! It is very difecalt, but i could do it! I'm very happy now))
            </div>
            <div className={MessageStyle.userMessageRight}>
                Oh, sorry, I haven't free time, I must rut to my course)) See you bro))
            </div>
            <div className={MessageStyle.userMessageLeft}>
                See you bro)) Goodby!!!
            </div>
        </div>

    </div>);
};

export default Message;