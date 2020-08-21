import React from 'react';
import AppStyle from './App.module.css';
import Header from './Header';
import Menu from './Menu';
import Context from './Context';

const App = () => {
    return ( <div className={AppStyle.App}>

        <Header/>
        <Menu/>
        <Context/>

    </div> );
};

export default App;