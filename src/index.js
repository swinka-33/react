import React from 'react';
import state from './Redux/state'
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './Redux/state';
import { newChangeUpdate, subscribe } from './Redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} newChangeUpdate={newChangeUpdate}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();