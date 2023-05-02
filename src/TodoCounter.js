import React from "react";
import './todoStyle.css';
import { TodoContext } from "./TodoContext";

const TodoCounter = () => {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return(
    <h2 className="todoCounter">
        Completaste {completedTodos} de {totalTodos} ToDos!
    </h2>
    )
}

export { TodoCounter };