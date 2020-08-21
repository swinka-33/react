import React from 'react';
import MenuStyle from './Menu.module.css';

const Menu = () => {
    return ( <div className={MenuStyle.Menu}>

        <div className={MenuStyle.divMain}>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
            <div  className={MenuStyle.margin}>Settings</div>
        </div>

    </div> );
};

export default Menu;