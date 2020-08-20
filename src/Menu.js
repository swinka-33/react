import React from 'react';
import './Menu.css';
import Let from './Let';

const Menu = () => {
    return ( <div className='Menu'>

        <div className='div-main'>
            <div>{Let.menuProfile}</div>
            <div>{Let.menuMessages}</div>
            <div>{Let.menuNews}</div>
            <div>{Let.menuMusic}</div>
            <div  className='margin'>{Let.menuSettings}</div>
        </div>

    </div> );
};

export default Menu;