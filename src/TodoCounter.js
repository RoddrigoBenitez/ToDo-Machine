import React from "react";
import './todoStyle.css';

const TodoCounter = ({ total, completed }) => {


    return(
    <h2 className="todoCounter">
        Completaste {completed} de {total} ToDos!
    </h2>
    )
}

export { TodoCounter };