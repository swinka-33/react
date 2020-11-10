import React from 'react';
import ContextStyle from './Context.module.css';
import PostDiv from './Post/PostDiv';
import ContextInfo from './ContextInfo/ContextInfo';

const Context = (props) => {

    const addPost = () => {
        return alert(newPost.current.value); 
    }    

    let newPost = React.createRef();

    return (<div className={ContextStyle.Context}>

        <img src='https://im0-tub-ru.yandex.net/i?id=01759267cdb1aa4247383ad8ce568d23&n=13' className={ContextStyle.img} />
        <ContextInfo />
        <div className={ContextStyle.post}>
            My post
        </div>
        <div className={ContextStyle.input}>
            <input ref={newPost} placeholder='your news...' className={ContextStyle.inputOne} />
        </div>
        <button onClick={ addPost } className={ContextStyle.send}>
            Send
        </button>
        <PostDiv posts={props.state.posts}/>
    </div>);
};

export default Context;