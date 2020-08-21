import React from 'react';
import ContextStyle from './Context.module.css';
import Let from './Let';

const Context = () => {
    return ( <div className={ContextStyle.Context}>

        <img src={Let.img} className={ContextStyle.img}/>
        <div className={ContextStyle.divLogo}>
            <div className={ContextStyle.divOne}>
                <img className={ContextStyle.logoImg} src={Let.logoImg}/>
            </div>
            <div className={ContextStyle.divTwo}>
                <span className={ContextStyle.name}>
                    Sasha K.
                </span><br/>
                <div className={ContextStyle.infoAbout}>
                    Date of Birth: 15 december<br/>
                    City: Moscow<br/>
                    Education: none<br/>
                    Web Site: https://svinka-22/git-hub
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