import React from 'react';

interface FormIndexProps
{
    value: number;
}

const FormIndex: React.FC<FormIndexProps> = ({ value }) => { 
    return (
        <div className="ball-line">
            <div className={`ball ${value === 1 ? 'index-purple' : ''}`}>1</div>
            <div className="line"></div>
            <div className={`ball ${value === 2 ? 'index-purple' : ''}`}>2</div>
        </div>
    );
};

export default FormIndex;
