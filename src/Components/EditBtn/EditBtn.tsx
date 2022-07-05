import React from 'react';

interface EditBtnProps {
    handleClickEdit: () => void;
}

const EditBtn: React.FC<EditBtnProps> = ({handleClickEdit}) => {
    return (
        <div>
            <button type="button" onClick={handleClickEdit}>Edit</button>
        </div>
    )
}

export default EditBtn;