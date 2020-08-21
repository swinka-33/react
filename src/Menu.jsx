import React from 'react';
import MenuStyle from './Menu.module.css';
import Let from './Let';

const Menu = () => {
    return ( <div className={MenuStyle.Menu}>

        <div className={MenuStyle.divMain}>
            <div>{Let.menuProfile}</div>
            <div>{Let.menuMessages}</div>
            <div>{Let.menuNews}</div>
            <div>{Let.menuMusic}</div>
            <div  className={MenuStyle.margin}>{Let.menuSettings}</div>
        </div>

    </div> );
};

export default Menu;