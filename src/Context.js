import React from 'react';
import './Context.css';
import Let from './Let';

const Context = () => {
    return ( <div className='Context'>

        <img src={Let.img} className='img'/>
        <div className='divLogo'>
            <div className='div-1'>
                <img className='logoImg' src={Let.logoImg}/>
            </div>
            <div className='div-2'>
                <span className='name'>
                    Sasha K.
                </span><br/>
                <div className='infoAbout'>
                    Date of Birth: 15 december<br/>
                    City: Moscow<br/>
                    Education: none<br/>
                    Web Site: https://svinka-22/git-hub
                </div>
            </div>
        </div>
        <div className='post'>
            My post
        </div>
        <div className='input'>
            <input placeholder='your news...' className='input-1'/>
        </div>
        <div className='send'>
            Send
        </div>
    </div> );
};

export default Context;