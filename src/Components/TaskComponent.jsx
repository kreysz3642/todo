import React from 'react';
import style from './TaskComponents.module.css'
import Checkbox from '@material-ui/core/Checkbox';

const TaskComponen = (props) =>{


    let checkBoxRef = React.createRef();

    let taskCheckBoxChange = (el) =>{
        props.setChecked(props.data.id)
        
    }
    
    

    return(
    <div className={style.taskStyle}>
        <div>
            <div>
                <Checkbox  color="primary" type="checkbox"   onChange={(el) => taskCheckBoxChange(el)} ref = {checkBoxRef} checked={props.data.isCheck}/>
            </div>
        </div>
    <p disabled>{props.data.text}</p>
    </div>
    )
}

export default TaskComponen