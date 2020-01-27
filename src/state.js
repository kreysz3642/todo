import { renderEntireTree } from "./render";


let state = {
    toDoData : [
        
 ],

 displayState : "All"
 ,
 addTask : (taskText) =>{


    let newTask = {
        id: state.toDoData.length,
        isCheck : false, 
        text: taskText
    }


    state.toDoData.push(newTask);
    let tasks = JSON.stringify(state.toDoData)
    localStorage.setItem("tasks", tasks)
    renderEntireTree(state)
},

setChecked : (id) =>{
    let currentTask = state.toDoData.find(task =>task.id === id)
    currentTask.isCheck = !currentTask.isCheck
    let tasks = JSON.stringify(state.toDoData)
    localStorage.setItem("tasks", tasks)
    renderEntireTree(state)
}, 

setDataToRender : ()=>{
    let newToDoData;
    if(state.displayState === "All"){
        state.toDoData = JSON.parse(localStorage.getItem("tasks"))
        return  
    }
    if(JSON.parse(localStorage.getItem("tasks")) === null) return
    state.toDoData.splice(0, state.toDoData.length)
    
    if(state.displayState === "Active"){
        
        state.tasks = JSON.parse(localStorage.getItem("tasks"))
        for(let i = 0; i < state.tasks.length; i++){
            if(state.tasks[i].isCheck === false){
                state.toDoData.push(state.tasks[i])
            }
        }
    }
    if(state.displayState == "Completed"){
        
        state.tasks = JSON.parse(localStorage.getItem("tasks"))
        for(let i = 0; i < state.tasks.length; i++){
            if(state.tasks[i].isCheck === true){
                state.toDoData.push(state.tasks[i])
            }
        }
    }
},

clearTasks : ()=>{
    localStorage.clear()
    state.toDoData.splice(0, state.toDoData.length)
    renderEntireTree(state)
},

changeDisplayState : (displayState) =>{
    state.displayState = displayState
    state.setDataToRender()
    renderEntireTree(state)
}

}






export let stateInit = () =>{
    if(localStorage.getItem("tasks") != null){
        state.toDoData = JSON.parse(localStorage.getItem("tasks"))
    }

}



export default state