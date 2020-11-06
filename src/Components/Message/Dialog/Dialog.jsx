import React from 'react';
import DialogStyle from './Dialog.module.css';

const Dialog = (props) => {
    return (<div className={DialogStyle.userMessageLeft}>
        <div className={DialogStyle.img}>
            <img src={props.img} className={DialogStyle.avotarky} />
        </div>
        <div className={DialogStyle.spanBort}>{props.text}</div>
    </div>);
};

export default Dialog;