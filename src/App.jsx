import React from 'react';
import AppStyle from './App.module.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Context from './Components/Context/Context';
import PostDiv from './Components/Post/PostDiv';

const App = () => {
    return ( <div className={AppStyle.App}>

        <Header imgLogo='https://image.flaticon.com/icons/svg/2760/2760147.svg' />
        <Menu/>
        <Context imgLogo='https://image.flaticon.com/icons/svg/2569/2569923.svg' town='Moscow' date='15 December' 
        education='school' site='https://github.com' userName='Sasha K.'/>
        <PostDiv/>

    </div> );
};

export default App;