import React from 'react';
import MenuStyle from './Menu.module.css';
import { NavLink } from 'react-router-dom';
import FriendsMenu from './FriendsMenu/FriendsMenu';

const Menu = (props) => {

    const friendsMenu = props.state.menuFriends.map( element => <FriendsMenu logo={element.logo} name={element.name}/> )

    return (<div className={MenuStyle.Menu}>

        <div className={MenuStyle.divMain}>
            <div className={MenuStyle.left}><NavLink to='/Profile' activeClassName={MenuStyle.goldenrod}>Profile</NavLink></div>
            <div className={MenuStyle.left}><NavLink to='/Message' activeClassName={MenuStyle.goldenrod}>Message</NavLink></div>
            <div className={MenuStyle.left}><NavLink to='/News' activeClassName={MenuStyle.goldenrod}>News</NavLink></div>
            <div className={MenuStyle.left}><NavLink to='/Music' activeClassName={MenuStyle.goldenrod}>Music</NavLink></div>
            <div className={MenuStyle.margin}><NavLink to='/Settings' activeClassName={MenuStyle.goldenrod}>Settings</NavLink></div>
            <div className={MenuStyle.top}>
                <span className={MenuStyle.friends}>Friends</span>
            </div>
            { friendsMenu }
        </div>

    </div>);
};

export default Menu;