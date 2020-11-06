import React from 'react';
import PostDivStyle from './PostDiv.module.css';
import Post from './Post';
// import { posts } from './../../../index';

const PostDiv = () => {

    const posts = [
        { imgLogoPost: 'https://image.flaticon.com/icons/svg/145/145859.svg', text: 'I have many problem))', like: '43'},
        { imgLogoPost: 'https://image.flaticon.com/icons/svg/145/145867.svg', text: 'I too bro))', like: '36'}
    ];

    const post = posts.map( element => <Post imgLogoPost={element.imgLogoPost} text={element.text} like={element.like} /> )

    return (<div className={PostDivStyle.PostDiv}>

        { post }

    </div>);
};

export default PostDiv;