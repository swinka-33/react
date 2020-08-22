import React from 'react';
import AppStyle from './App.module.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Context from './Components/Context/Context';
import img from './logo192.png';
import Message from './Components/Message/Message';

const App = (props) => {
    return (<div className={AppStyle.App}>

        <Header imgLogo={img} />
        <Menu />
        <div className={AppStyle.content}>
            {/* <Context imgLogo='https://image.flaticon.com/icons/svg/2569/2569923.svg' town='Moscow' date='15 December'
            education='school' site='https://github.com' userName='Sasha K.' /> */}
            <Message />
        </div>

    </div>);
};

export default App;