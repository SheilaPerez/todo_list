import React from 'react';

interface DeleteTaskBtnProps {
    handleClickDeleteTaskBtn: () => void;
}

const DeleteTaskBtn: React.FC<DeleteTaskBtnProps> = ({handleClickDeleteTaskBtn}) => {
    return (
        <div>
            <button type="button" onClick={handleClickDeleteTaskBtn}>X</button>
        </div>
    )
}

export default DeleteTaskBtn;