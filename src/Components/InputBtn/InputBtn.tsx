import React, {useState} from "react";

interface InputBtnProps {
    handleClickSave: (task: string) => void;
}
 
const InputBtn: React.FC<InputBtnProps> = ({handleClickSave}): JSX.Element => {
 
    const [task, setTask] = useState('');

    const inputChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }

    const clickSave = (task: string) => {
        setTask('');
        if (task.length > 0) {
            handleClickSave(task);
        }
        
    }

    return (
        <div>
            <input type="text" value={task} placeholder="Introduce your task" onChange={inputChangeTask}></input>
            <button type="button" onClick={() => clickSave(task)}>Save</button> 
       </div>
    )
}

export default InputBtn;