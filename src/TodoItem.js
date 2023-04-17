import React from "react";
import './todoStyle.css';



const TodoItem = (props) => {
    const onCompleted = () => {
        alert('Se completo esto! ' + props.text);
    }
    
    
    const onDelete = () => {
        alert('Borraste este ' + props.text);
    }
    



    return(
        <li className="todoItem">
            <span  className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={onCompleted}>√</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete"
            onClick={onDelete}>X</span>
        </li>
    )
}


export { TodoItem };