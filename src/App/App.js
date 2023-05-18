import React from 'react';
import { TodoButton } from "../TodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoHeader } from "../TodoHeader";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { EmptyTodos } from "../loading/EmptyTodo";
import { TodosError } from "../loading/ErrorTodos";
import { TodosLoading } from "../loading/LoadingTodos";
import { Modal } from "../modal";
import { TodoForm } from "../todoForm";
import "../todoStyle.css";
import { useTodos } from './useTodos';
import { ChangeAlertWithStorlis } from '../changeAlert';




function App() {

  const { error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();




return (
  <React.Fragment>
    <TodoHeader loading={loading}> 
          <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}  
          />

          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}  
          />
    </TodoHeader>

    <TodoList 
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      onError={() => <TodosError /> }
      onLoading={() => <TodosLoading /> }
      onEmptyTodos={() => <EmptyTodos /> }
      totalTodos={totalTodos}
      onEmptySearchResult={(searchText) => <p>No hay resultados para {searchText}</p> }
      searchText={searchValue}
      // render={todo => (
      //   <TodoItem
      //     key={todo.text}
      //     text={todo.text}
      //     completed={todo.completed}
      //     onComplete={() => completeTodo(todo.text)}
      //     onDelete={() => deleteTodo(todo.text)}
      //   />
      // )}
    >
      {todo => (
         <TodoItem
           key={todo.text}
           text={todo.text}
           completed={todo.completed}
           onComplete={() => completeTodo(todo.text)}
           onDelete={() => deleteTodo(todo.text)}
         />
       )}
    </TodoList>
   

    {!!openModal && (
      <Modal>
        <TodoForm setOpenModal={setOpenModal}
      addTodo={addTodo}/>
      </Modal>
    )}

    <TodoButton 
      setOpenModal={setOpenModal}
    />

    <ChangeAlertWithStorlis sincronize={sincronizeTodos} />
  </React.Fragment>
);
}

export default App;
