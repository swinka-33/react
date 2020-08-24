import React from 'react';
import MenuStyle from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
    return (<div className={MenuStyle.Menu}>

        <div className={MenuStyle.divMain}>
            <div><NavLink to='/Profile' activeClassName={MenuStyle.goldenrod}>Profile</NavLink></div>
            <div><NavLink to='/Message' activeClassName={MenuStyle.goldenrod}>Message</NavLink></div>
            <div><NavLink to='/News' activeClassName={MenuStyle.goldenrod}>News</NavLink></div>
            <div><NavLink to='/Music' activeClassName={MenuStyle.goldenrod}>Music</NavLink></div>
            <div className={MenuStyle.margin}><NavLink to='/Settings' activeClassName={MenuStyle.goldenrod}>Settings</NavLink></div>
        </div>

    </div>);
};

export default Menu;