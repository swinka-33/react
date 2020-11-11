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
            { url: 'https://image.flaticon.com/icons/svg/145/145859.svg', text: "Hello, Anton!!! How are you? Where are you bro?" },
            { url: 'https://image.flaticon.com/icons/svg/145/145867.svg', text: "I'm ok)) How are you bro? I think that your WEBSITE was finished?" },
            { url: 'https://image.flaticon.com/icons/svg/145/145859.svg', text: "Yes! It is very difecalt, but i could do it! I'm very happy now))" },
            { url: 'https://image.flaticon.com/icons/svg/145/145867.svg', text: "Oh, sorry, I haven't free time, I must rut to my course)) See you bro))" },
            { url: 'https://image.flaticon.com/icons/svg/145/145859.svg', text: "See you bro)) Goodby!!!" }
        ]
    },
    contextPage: {
        posts: [
            { id: 1, imgLogoPost: 'https://image.flaticon.com/icons/svg/145/145859.svg', text: 'I have many problem', like: '43'},
            { id: 2, imgLogoPost: 'https://image.flaticon.com/icons/svg/145/145867.svg', text: 'I too', like: '31'}
        ]
    },
    menuPage: {
        menuFriends: [
            {logo: 'https://image.flaticon.com/icons/svg/2569/2569923.svg', name: 'Sasha'},
            {logo: 'https://image.flaticon.com/icons/svg/145/145859.svg', name: 'Rustam'},
            {logo: 'https://image.flaticon.com/icons/svg/145/145867.svg', name: 'Anton'}
        ]
    }
};

export const addPost = (messageText) => {
    debugger;
    let newPost = {
        id: 3,
        imgLogoPost: 'https://image.flaticon.com/icons/svg/145/145859.svg',
        text: messageText,
        like: '37'
    }

    state.contextPage.posts.push(newPost);
}  

export default state;