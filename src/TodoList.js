import React, { Children } from "react";
import './todoStyle.css';

const TodoList = (props) =>{
    return(
        <section className="todoList todoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
            <ul>
            {props.searchedTodos.map(props.render)}
            {props.children}
            </ul>
        </section>
    )
}

export { TodoList };