import React from 'react';
import store from './Redux/state'
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
      </React.StrictMode>,
      document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();