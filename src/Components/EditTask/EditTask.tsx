import React, {useState} from 'react';

interface EditTaskProps {
    taskprop: string;
    handleClickSaveEditBtn: (taskEdit: string) => void;
}
    const EditTask: React.FC<EditTaskProps> = ({ taskprop, handleClickSaveEditBtn }) => {
    const [taskEdit, setTaskEdit] = useState(taskprop);

    const handleChangeTaskEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskEdit(e.target.value)
    }

    return (
        <div>
            <input type="text" value={taskEdit} onChange={handleChangeTaskEdit}></input>
            <button type="button" onClick={() => handleClickSaveEditBtn(taskEdit)}>Save Edit</button>
        </div>
    )
}

export default EditTask;