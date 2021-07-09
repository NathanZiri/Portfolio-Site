import React from 'react';

const Work = (props) =>{
    return(
        <div className={`center-text ${props.visVal ? 'main-content-show' : 'main-content-hide'}`}>
            Work
        </div>
    );
};

export default Work;