import React from 'react';

interface DelteDoneBtnProps{
    handleClickDelteDoneBtn: () => void;
}

const DelteDoneBtn: React.FC<DelteDoneBtnProps> = ({handleClickDelteDoneBtn}) => {
    return (
        <div>
            <button type="button" onClick={handleClickDelteDoneBtn}>X</button>
        </div>
    )
}

export default DelteDoneBtn;