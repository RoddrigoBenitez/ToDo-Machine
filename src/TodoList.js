import React, { Children } from "react";
import './todoStyle.css';

const TodoList = (props) =>{
    return(
        <section className="todoList">
            <ul>
            {props.children}
            </ul>
        </section>
    )
}

export { TodoList };