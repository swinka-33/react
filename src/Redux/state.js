// import { rerenderEntireTree } from './../render';

const store = {
    _state : {
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
                { url: 'https://www.flaticon.com/svg/static/icons/svg/848/848043.svg', text: '/start' }
            ]
        },
        contextPage: {
            posts: [
                { id: 1, imgLogoPost: 'https://www.flaticon.com/svg/static/icons/svg/848/848043.svg', text: '/start', like: '0'}
            ],
            newTextPosts: ''
        },
        menuPage: {
            menuFriends: [
                { logo: 'https://image.flaticon.com/icons/svg/2569/2569923.svg', name: 'Sasha' },
                { logo: 'https://image.flaticon.com/icons/svg/145/145859.svg', name: 'Rustam' },
                { logo: 'https://image.flaticon.com/icons/svg/145/145867.svg', name: 'Anton' }
            ]
        }
    },
    getState() {
        return this._state
    },
    idKounter : 2,
    noNameImg : 'https://www.flaticon.com/svg/static/icons/svg/848/848043.svg',
    _callSubscriber() {
        console.log('Can\'t update');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this.idKounter,
                imgLogoPost: this.noNameImg,
                text: this._state.contextPage.newTextPosts,
                like: '0'
            }

            this.idKounter += 1;

            this._state.contextPage.posts.push(newPost);
            this._state.contextPage.newTextPosts = '';
            this._callSubscriber(store._state);
        } else if (action.type === 'NEW-CHENGE-UPDATE') {
            this._state.contextPage.newTextPosts = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export default store;
window.store = store;