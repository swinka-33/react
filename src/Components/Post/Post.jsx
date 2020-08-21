import React from 'react';
import PostStyle from './Post.module.css';

const Post = () => {
    return ( <div className={PostStyle.Post}>

        <div className={PostStyle.divLogo}>
            <img src='https://image.flaticon.com/icons/svg/2760/2760147.svg' className={PostStyle.logo}/>
        </div>
        <span className={PostStyle.span}>
            Hello world
        </span>

    </div> );
};

export default Post;