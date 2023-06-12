import React from "react";
import { useLocalStorage } from "./useLocalStorege";

const useTodos = () => {
    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      // filtra las notas del input dejando las q buscamos
      let searchedTodos = [];
    
      if (!searchValue.length >= 1){
        searchedTodos = todos;
      } else{
        searchedTodos = todos.filter(todo =>{
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        })
      }
    
      // const para complet notas
    
    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text ===  text);
    
      const newTodos = [...todos];
    
      newTodos[todoIndex].completed = true;
    
      saveTodos(newTodos);
    
    };
    
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text ===  text);
    
      const newTodos = [...todos];
    
      newTodos.splice(todoIndex, 1);
    
      saveTodos(newTodos);
    
    };

    const addTodo = (text) => {
    
      const newTodos = [...todos];
    
      newTodos.push({
        completed: false,
        text,
      });
    
      saveTodos(newTodos);
    
    };


    const states = {
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      searchedTodos,
      openModal,
      
    };

    const stateUpdaters = {
      setOpenModal,
      setSearchValue,
      completeTodo,
      deleteTodo,
      addTodo,
      sincronizeTodos,

    };    
    
    return {states, stateUpdaters}
}


export { useTodos };