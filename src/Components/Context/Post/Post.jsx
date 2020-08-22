import React from 'react';
import PostStyle from './Post.module.css';

const Post = (props) => {
    return ( <div className={PostStyle.Post}>

        <div className={PostStyle.divLogo}>
            <img src={props.imgLogoPost} className={PostStyle.logo}/>
        </div>
        <button className={PostStyle.buttonLike}>
            <img src='https://image.flaticon.com/icons/svg/1216/1216575.svg' className={PostStyle.imgLike}/> <span className={PostStyle.spanLike}>{props.like}</span>
        </button>
        <span className={PostStyle.span}>
            {props.text}
        </span>

    </div> );
};

export default Post;