import React from 'react';
import AppStyle from './App.module.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Context from './Components/Context/Context';
import PostDiv from './Components/Post/PostDiv';

const App = () => {
    return ( <div className={AppStyle.App}>

        <Header/>
        <Menu/>
        <Context/>
        <PostDiv/>

    </div> );
};

export default App;