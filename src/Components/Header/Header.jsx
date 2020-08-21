import React from 'react';
import  HeaderStyle from './Header.module.css';;

const Header = (props) => {
    return ( <div className={HeaderStyle.header}>

        <img src={props.imgLogo} className={HeaderStyle.logo}/>

    </div> );
};

export default Header;