import React from 'react';

const Button = (props) =>{
    return(
        <div className="button">
            <span className="button__text"> {props.text}</span>
        </div>
    );
};

export default Button;