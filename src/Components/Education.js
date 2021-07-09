import React from 'react';

const Education = (props) =>{
    return(
        <div className={`center-text ${props.visVal ? 'main-content-show' : 'main-content-hide'}`}>
            Edu
        </div>
    );
};

export default Education;