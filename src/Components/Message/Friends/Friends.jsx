import React from 'react';
import FriendsStyle from './Friends.module.css';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    return (<div className={FriendsStyle.dialog} >
        <li>
            <NavLink activeClassName={FriendsStyle.size} to={props.userId}><b>{props.userName}</b></NavLink>
        </li>
    </div>);
};

export default Friends;