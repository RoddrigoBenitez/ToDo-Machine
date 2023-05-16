import React from "react";
import './todoStyle.css';

const TodoCounter = ({ totalTodos, completedTodos, loading }) => {
    return(
    <h2 className={`todoCounter ${!!loading && "todoCounter--loading"}`}>
        Completaste {completedTodos} de {totalTodos} ToDos!
    </h2>
    )
}

export { TodoCounter };

