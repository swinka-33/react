import React from 'react';
import ContextStyle from './Context.module.css';

const Context = (props) => {
    return ( <div className={ContextStyle.Context}>

        <img src='https://im0-tub-ru.yandex.net/i?id=01759267cdb1aa4247383ad8ce568d23&n=13' className={ContextStyle.img}/>
        <div className={ContextStyle.divLogo}>
            <div className={ContextStyle.divOne}>
                <img className={ContextStyle.logoImg} src={props.imgLogo}/>
            </div>
            <div className={ContextStyle.divTwo}>
                <span className={ContextStyle.name}>
                    {props.userName}
                </span><br/>
                <div className={ContextStyle.infoAbout}>
                    Date of Birth: {props.date}<br/>
                    City: {props.town}<br/>
                    Education: {props.education}<br/>
                    Web Site: {props.site}
                </div>
            </div>
        </div>
        <div className={ContextStyle.post}>
            My post
        </div>
        <div className={ContextStyle.input}>
            <input placeholder='your news...' className={ContextStyle.inputOne}/>
        </div>
        <div className={ContextStyle.send}>
            Send
        </div>
    </div> );
};

export default Context;