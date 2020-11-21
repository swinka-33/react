import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './Redux/state';
import { newChangeUpdate } from './Redux/state';

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} newChangeUpdate={newChangeUpdate}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
};