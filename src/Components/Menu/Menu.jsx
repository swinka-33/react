import React from 'react';
import MenuStyle from './Menu.module.css';

const Menu = (props) => {
    return (<div className={MenuStyle.Menu}>

        <div className={MenuStyle.divMain}>
            <div><a href='/Profile'>Profile</a></div>
            <div><a href='/Message'>Message</a></div>
            <div><a href='/News'>News</a></div>
            <div><a href='/Music'>Music</a></div>
            <div className={MenuStyle.margin}><a href='/Settings'>Settings</a></div>
        </div>

    </div>);
};

export default Menu;