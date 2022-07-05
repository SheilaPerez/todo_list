import React, {useState, useRef} from "react";
import InputBtn from '../../Components/InputBtn';
import style from './ToDo.module.css';
import DeleteTaskBtn from '../../Components/DeleteTaskBtn';
import { v4 as uuidv4 } from 'uuid';
import DelteDoneBtn from "../../Components/DelteDoneBtn";
import EditBtn from '../../Components/EditBtn';
import EditTask from '../../Components/EditTask';

interface ToDoProps {
}

interface TodoTask {
    taskName: string;
    checked: boolean;
    id: string;
}
 
const ToDo: React.FC<ToDoProps> = ({}): JSX.Element => {
    const [isChecked, setIsChecked] = useState(false);
    const [tasks, setTasks] = useState<TodoTask[]>([]);
    const [doneList, setDoneList] = useState<TodoTask[]>([]);
    const [clickEdit, setClickEdit] = useState(false);
    const [clickSaveEdit, setClickSaveEdit] = useState(false);

    const saveTaskBtb = (task: string) => {
        setTasks([...tasks, {
            taskName: task,
            checked: isChecked,
            id: uuidv4(),
        }]);
    }

    const handleChangeDoneList = (task: TodoTask) => {
        setDoneList([...doneList, task])
        setTasks(tasks.filter((savedTask) => {
            return savedTask.id !== task.id;
        }))
    }

    const deleteTaskBtn = (task: TodoTask) => {
        setTasks(tasks.filter((delteTask) => {
            return delteTask.id !== task.id;
        }))
    }

    const deleteDoneBtn = (task: TodoTask) => {
        setDoneList(doneList.filter((deleteDone) => {
            return deleteDone.id !== task.id;
        }))
    }

    const SaveEditBtn = (currentEditTask: string, currentTask: TodoTask) => {
        setClickSaveEdit(true);
        setTasks(tasks.map((task) => {
            if (task.id === currentTask.id) {
                currentTask.taskName = currentEditTask;
                return currentTask;
            } else {
                return task
            }
        }));
        setClickEdit(false);
    }

    return (
        <>
            <h3>To do list: </h3>
            <InputBtn handleClickSave={saveTaskBtb}></InputBtn>
            {tasks.map((task) => {
                return (
                    <div>
                        {clickEdit ? <EditTask taskprop={task.taskName} handleClickSaveEditBtn={(currentEditTask) => SaveEditBtn(currentEditTask, task)}></EditTask> : <p>{task.taskName}</p>}
                        <input type="checkbox" checked={isChecked} onChange={() => handleChangeDoneList(task)}></input>
                        <DeleteTaskBtn handleClickDeleteTaskBtn={() => deleteTaskBtn(task)}></DeleteTaskBtn>
                        <EditBtn handleClickEdit={() => setClickEdit(true)}></EditBtn>
                    </div>
                )
            })}
            <h3>Done list:</h3>
            {doneList.map((donetask) => {
                return (
                    <div>
                        <p className={style.doneTask}>{donetask.taskName}</p>
                        <DelteDoneBtn handleClickDelteDoneBtn={() => deleteDoneBtn(donetask)}></DelteDoneBtn>
                    </div>
                )                    
            })}
        </>
    )
}

export default ToDo;