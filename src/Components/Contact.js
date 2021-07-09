import React from 'react';

const Contact = (props) =>{
    return(
        <div className={`center-text ${props.visVal ? 'main-content-show' : 'main-content-hide'}`}>
            Contact
        </div>
    );
};

export default Contact;