import React from "react";
import './todoStyle.css';

const TodoButton = (props) => {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }
    
    
    
    return(
        <button className="todoButton" onClick={onClickButton}>
            +
        </button>
    )
}

export { TodoButton };