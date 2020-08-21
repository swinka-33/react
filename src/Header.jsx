import React from 'react';
import  HeaderStyle from './Header.module.css';
import Let from './Let';

const Header = () => {
    return ( <div className={HeaderStyle.header}>

        <img src={Let.logo} className={HeaderStyle.logo}/>

    </div> );
};

export default Header;