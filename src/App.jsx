import React from 'react';
import AppStyle from './App.module.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Context from './Components/Context/Context';
import img from './logo192.png';
import Message from './Components/Message/Message';
import { Route, BrowserRouter } from "react-router-dom";
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';

const App = (props) => {
    return (<BrowserRouter>
        <div className={AppStyle.App}>

            <Header imgLogo={img} />
            <Menu />
            <div className={AppStyle.content}>
                <Route path='/Profile' component={Context} />
                <Route path='/Message' component={Message} />
                <Route path='/News' component={News} />
                <Route path='/Music' component={Music} />
                <Route path='/Settings' component={Settings} />
            </div>

        </div>
    </BrowserRouter>);
};

export default App;