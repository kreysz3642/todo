import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import TaskComponents from './TaskComponent'
import style from './ToDoTasks.module.css'
import { ButtonGroup } from '@material-ui/core'

 const ToDoTasks = ({appState}) =>{
    
    let {toDoData} = appState
    let {setChecked} = appState
    let {addTask} = appState
    let {changeDisplayState} = appState
    let {clearTasks} = appState

    let input = ""
    let target


    let addTaskF = () =>{
        if(input != ""){
            addTask(input)
            input = ""
            target.value = ""
        }
    
    }

    const keyDown = (e)=>{
        if(e.key === "Enter"){
            addTaskF()
        }
    }
   
    const setInput = (el) =>{
        if(el.target.value != undefined) input = el.target.value
        target = el.target
    }
    
    const clickAll = ()=>{
        changeDisplayState("All")
    }

    const clickActive = () =>{
        changeDisplayState("Active")
    }

    const clickCompleted = () =>{
        changeDisplayState("Completed")
    }


    let taskComponents = toDoData.map(obj => <TaskComponents data={obj} key={obj.id} setChecked={setChecked}/>)
    return(<div className={style.ToDoElements}>
        {taskComponents}
        <div className={style.addNewTaskArea}>
            <TextField className={style.TextField} id="standard-basic" label="Add New Task" onKeyPress={keyDown} onChange={(el)=>setInput(el)}></TextField>
            <Button className={style.AddTaskButton} variant="outlined" color="primary" onClick={addTaskF}>Add new task</Button>
        </div>
        <div className={style.ControllButtons}>
            <ButtonGroup className={style.ControllButtonGroup} size="large" color="primary" aria-label="large outlined primary button group">
                <Button id="All" onClick={clickAll}>All</Button>
                <Button id="Active" onClick={clickActive}>Active</Button>
                <Button id="Completed" onClick={clickCompleted}>Completed</Button>
            </ButtonGroup>

            <Button className={style.ClearButton} variant="outlined" color="primary" onClick={clearTasks}>Clear</Button>
        </div>
        
    </div>)
}

export default ToDoTasks