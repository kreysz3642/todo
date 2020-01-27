import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export let renderEntireTree = (state, addTask, setChecked) =>{
    ReactDOM.render(<App appState={state}/>, document.getElementById('root'));
}