import React, { Children } from "react";
import './todoStyle.css';

const TodoList = (props) =>{
    const renderFunc = props.children  || props.render;

    return(
        <section className="todoList todoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.searchedTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchText)}

            {props.searchedTodos.map(renderFunc)}

            <ul>
            {props.children}
            </ul>
        </section>
    )
}

export { TodoList };