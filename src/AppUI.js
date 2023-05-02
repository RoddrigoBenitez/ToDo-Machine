import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'; 
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton'
import './todoStyle.css';

const AppUI = () =>{
  const { error, loading, searchedTodos, completeTodo, deleteTodo } = React.useContext(TodoContext);


    return( 
    <React.Fragment>
      <TodoCounter />
      
      <TodoSearch />

      
            <TodoList>
            {loading && <p>Estamos cargando</p>}
            {error && <p>Hubo un error</p>}
            {(!loading && !searchedTodos.lengt) && <p>Crea tu primer TODO!</p>}
    
            {searchedTodos.map(todo =>(
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={()=> completeTodo(todo.text) } 
              onDelete={()=> deleteTodo(todo.text)}
              />
            ) )}
          </TodoList>
       


      <TodoButton />
      
    </React.Fragment>
    )
}

export { AppUI };