import React from 'react';
import ToDoTasks from './Components/ToDoTasks'


import style from './App.module.css';

function App({appState}) {

  
  return (
    <div className={style.App}>
      <p>ToDo</p>
      <ToDoTasks appState={appState}/>
    </div>
  );
}

export default App;
