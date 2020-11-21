import React from 'react';
import { rerenderEntireTree } from './../render';

const state = {
    messagePage: {
        friends: [
            { id: '/Message/1', name: 'Victor' },
            { id: '/Message/2', name: 'Anton' },
            { id: '/Message/3', name: 'Anna' },
            { id: '/Message/4', name: 'Vika' },
            { id: '/Message/5', name: 'Alica' },
            { id: '/Message/6', name: 'Sveta' }
        ],
        messages: [
            // { url: 'https://image.flaticon.com/icons/svg/145/145859.svg', text: "text" }
        ]
    },
    contextPage: {
        posts: [
            // { id: 1, imgLogoPost: 'https://image.flaticon.com/icons/svg/145/145859.svg', text: 'I have many problem', like: '43'}
        ],
        newTextPosts: ''
    },
    menuPage: {
        menuFriends: [
            {logo: 'https://image.flaticon.com/icons/svg/2569/2569923.svg', name: 'Sasha'},
            {logo: 'https://image.flaticon.com/icons/svg/145/145859.svg', name: 'Rustam'},
            {logo: 'https://image.flaticon.com/icons/svg/145/145867.svg', name: 'Anton'}
        ]
    }
};

let idKounter = 3;
let noNameImg = 'https://www.flaticon.com/svg/static/icons/svg/848/848043.svg';

export const addPost = () => {
    let newPost = {
        id: idKounter,
        imgLogoPost: noNameImg,
        text: state.contextPage.newTextPosts,
        like: '0'
    }

    idKounter += 1;

    state.contextPage.posts.push(newPost);
    state.contextPage.newTextPosts = '';
    rerenderEntireTree(state);

}; 

export const newChangeUpdate = (newText) => {
    state.contextPage.newTextPosts = newText;
    rerenderEntireTree(state);
};

export default state;