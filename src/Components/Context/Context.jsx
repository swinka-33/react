import React from 'react';
import ContextStyle from './Context.module.css';
import PostDiv from './Post/PostDiv';
import ContextInfo from './ContextInfo/ContextInfo';
import { addPostActionCreater, newChengeUpdate } from '../../Redux/state';

const Context = (props) => {

    const addPost = () => {
        props.dispatch(addPostActionCreater());
    }    

    const onPostChange = () => {
        let text = messageText.current.value;
        props.dispatch(newChengeUpdate(text));
    };

    let messageText = React.createRef();

    return (<div className={ContextStyle.Context}>

        <img src='https://im0-tub-ru.yandex.net/i?id=01759267cdb1aa4247383ad8ce568d23&n=13' className={ContextStyle.img} />
        <ContextInfo />
        <div className={ContextStyle.post}>
            My post
        </div>
        <div className={ContextStyle.input}>
            <textarea onChange={ onPostChange } ref={messageText} placeholder='your news...' className={ContextStyle.inputOne}
            value={props.state.newTextPosts}/>
        </div>
        <button onClick={ addPost } className={ContextStyle.send}>
            Send
        </button>
        <PostDiv posts={props.state.posts}/>
    </div>);
};

export default Context;