import React from "react";
import './todoStyle.css';



const TodoItem = (props) => {
    


    return(
        <li className="todoItem">
            <span  className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}>√</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}>X</span>
        </li>
    )
}


export { TodoItem };