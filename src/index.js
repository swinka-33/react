import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// export const posts = [
//   { imgLogoPost: 'https://image.flaticon.com/icons/svg/145/145859.svg', text: 'I have many problem))', like: '43'},
//   { imgLogoPost: 'https://image.flaticon.com/icons/svg/145/145867.svg', text: 'I too bro))', like: '36'}
// ];

// export const friends = [
//   { id: '/Message/1', name: 'Victor' },
//   { id: '/Message/2', name: 'Anton' },
//   { id: '/Message/3', name: 'Anna' },
//   { id: '/Message/4', name: 'Vika' },
//   { id: '/Message/5', name: 'Alica' },
//   { id: '/Message/6', name: 'Sveta' }
// ];

// export const messages = [
//   { url: 'https://image.flaticon.com/icons/svg/145/145859.svg', text: "Hello, Anton!!! How are you? Where are you bro?" },
//   { url: 'https://image.flaticon.com/icons/svg/145/145867.svg', text: "I'm ok)) How are you bro? I think that your WEBSITE was finished?" },
//   { url: 'https://image.flaticon.com/icons/svg/145/145859.svg', text: "Yes! It is very difecalt, but i could do it! I'm very happy now))" },
//   { url: 'https://image.flaticon.com/icons/svg/145/145867.svg', text: "Oh, sorry, I haven't free time, I must rut to my course)) See you bro))" },
//   { url: 'https://image.flaticon.com/icons/svg/145/145859.svg', text: "See you bro)) Goodby!!!" }
// ];

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
