import React from "react";
import './todoStyle.css';

const TodoCounter = ({ totalTodos, completedTodos }) => {
    return(
    <h2 className="todoCounter">
        Completaste {completedTodos} de {totalTodos} ToDos!
    </h2>
    )
}

export { TodoCounter };