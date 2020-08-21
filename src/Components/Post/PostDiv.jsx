import React from 'react';
import PostDivStyle from './PostDiv.module.css';
import Post from './Post'

const PostDiv = () => {
    return ( <div className={PostDivStyle.PostDiv}>

        <Post/>
        <Post/>

    </div> );
};

export default PostDiv;