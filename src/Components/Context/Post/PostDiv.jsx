import React from 'react';
import PostDivStyle from './PostDiv.module.css';
import Post from './Post';

const PostDiv = (props) => {

    const post = props.posts.map( element => <Post imgLogoPost={element.imgLogoPost} text={element.text} like={element.like} /> )

    return (<div className={PostDivStyle.PostDiv}>

        { post }

    </div>);
};

export default PostDiv;