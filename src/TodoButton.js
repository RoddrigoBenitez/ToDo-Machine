import React from "react";
import './todoStyle.css';

const TodoButton = (props) => {
    const onClickButton = () => {
        props.setOpenModal(true);
    }
    
    
    
    return(
        <button className="todoButton" onClick={onClickButton}>
            +
        </button>
    )
}

export { TodoButton };