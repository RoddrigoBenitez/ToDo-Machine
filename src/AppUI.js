import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoButton } from "./TodoButton";
import { Modal } from "./modal";
import { EmptyTodos } from "./loading/EmptyTodo";
import { TodosLoading } from "./loading/LoadingTodos";
import { TodosError } from "./loading/ErrorTodos";
import "./todoStyle.css";
import { TodoForm } from "./todoForm";

const AppUI = () => {
  const { error, 
          loading, 
          searchedTodos, 
          completeTodo, 
          deleteTodo,
          openModal,
          setOpenModal,
        } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
      {error && <TodosError />}
      {loading && <TodosLoading />}
      {(!loading && !searchedTodos.length) && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <TodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
};

export { AppUI };
