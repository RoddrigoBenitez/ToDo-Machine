import React, { useEffect } from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from  "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButton } from "../TodoButton";
import { Modal } from "../modal";
import { EmptyTodos } from "../loading/EmptyTodo";
import { TodosLoading } from "../loading/LoadingTodos";
import { TodosError } from "../loading/ErrorTodos";
import "../todoStyle.css";
import { TodoForm } from "../todoForm";




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
  } = useTodos();




return (
  <React.Fragment>
    <TodoHeader> 
          <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />

          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </TodoHeader>

    <TodoList 
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      onError={() => <TodosError /> }
      onLoading={() => <TodosLoading /> }
      onEmptyTodos={() => <EmptyTodos /> }
      render={todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      )}
    />

   

    {!!openModal && (
      <Modal>
        <TodoForm setOpenModal={setOpenModal}
      addTodo={addTodo}/>
      </Modal>
    )}

    <TodoButton 
      setOpenModal={setOpenModal}
    />
  </React.Fragment>
);
}

export default App;
