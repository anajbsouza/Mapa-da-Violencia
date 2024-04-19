import React from 'react';

interface Properties
{
    value: number;
}

const FormIndex: React.FC<Properties> = ({ value }) => { // Use React.FC<Props> para definir o tipo das props
    return (
        <div className="ball-line">
            <div className={`ball ${value === 1 ? 'index-purple' : ''}`}>1</div>
            <div className="line"></div>
            <div className={`ball ${value === 2 ? 'index-purple' : ''}`}>2</div>
            <div className="line"></div>
            <div className={`ball ${value === 3 ? 'index-purple' : ''}`}>3</div>
            <div className="line"></div>
            <div className={`ball ${value === 4 ? 'index-purple' : ''}`}>4</div>
        </div>
    );
};

export default FormIndex;
