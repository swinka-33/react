import React from 'react';
import ContextStyle from './Context.module.css';
import PostDiv from './Post/PostDiv';
import ContextInfo from './ContextInfo/ContextInfo';

const Context = (props) => {

    return (<div className={ContextStyle.Context}>

        <img src='https://im0-tub-ru.yandex.net/i?id=01759267cdb1aa4247383ad8ce568d23&n=13' className={ContextStyle.img} />
        <ContextInfo />
        <div className={ContextStyle.post}>
            My post
        </div>
        <div className={ContextStyle.input}>
            <input placeholder='your news...' className={ContextStyle.inputOne} />
        </div>
        <div className={ContextStyle.send}>
            Send
        </div>
        <PostDiv posts={props.posts}/>
    </div>);
};

export default Context;