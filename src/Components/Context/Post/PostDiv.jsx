import React from 'react';
import PostDivStyle from './PostDiv.module.css';
import Post from './Post'

const PostDiv = () => {
    return ( <div className={PostDivStyle.PostDiv}>

        <Post imgLogoPost='https://image.flaticon.com/icons/svg/145/145859.svg' text='Hello Nick' like={0}/>
        <Post imgLogoPost='https://image.flaticon.com/icons/svg/145/145867.svg' text='Hi Scott' like={0}/>   

    </div> );
};

export default PostDiv;