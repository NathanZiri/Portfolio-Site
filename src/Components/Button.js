import React from 'react';

const Button = (props) =>{
    
    const changeDisplay = (event) =>{
        props.onChangeDisp(props.buttonVal);
    }

    return(
        <div className={`button`}  onClick={changeDisplay}>
            <div className={` ${parseInt(props.buttonVal) === parseInt(props.showVal) ? 'button__current': ''}`}> 
            </div>
            <span className="button__text"> {props.text}</span>
        </div>
    );
};

export default Button;