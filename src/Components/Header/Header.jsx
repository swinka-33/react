import React from 'react';
import  HeaderStyle from './Header.module.css';;

const Header = () => {
    return ( <div className={HeaderStyle.header}>

        <img src='https://image.flaticon.com/icons/svg/2760/2760147.svg' className={HeaderStyle.logo}/>

    </div> );
};

export default Header;