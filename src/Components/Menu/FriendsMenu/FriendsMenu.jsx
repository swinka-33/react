import React from 'react';
import FriendsMenuStyle from './FriendsMenu.module.css';

const FriendsMenu = (props) => {
    return ( <div className={FriendsMenuStyle.FriendsMenu}>
        <div className={FriendsMenuStyle.person}>
            <div className={FriendsMenuStyle.imgDiv}>
                <img src={props.logo} className={FriendsMenuStyle.logo}/>
            </div>
            <span className={FriendsMenuStyle.name}>{props.name}</span>
        </div>
    </div> );
};

export default FriendsMenu;