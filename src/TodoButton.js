import React from "react";
import './todoStyle.css';

const TodoButton = () => {
    const onClickButton = () => {
        alert('Hello');
    }
    
    
    
    return(
        <button className="todoButton" onClick={onClickButton}>
            +
        </button>
    )
}

export { TodoButton };