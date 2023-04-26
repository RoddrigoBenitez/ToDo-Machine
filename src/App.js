import React from 'react';
import { AppUI } from './AppUI';

{/*import './App.css';*/}

{/*const defaulTodos = [
  { text: 'Cortar Cebolla ejem', completed: true },
  { text: 'tomar agua', completed: false },
  { text: 'Aprender Vue', completed: true },
  { text: 'Ver trabajo', completed: false },
]*/}

function App() {

  const localStorageTodo = localStorage.getItem('TODOS_V1');

  let parsedTodos;
  if(!localStorageTodo){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodo);
  }

  const saveTodos = (newTodos) =>{
    const stringifiedTodos= JSON.stringify(newTodos);
    localStorage.setItem('Todos_V1', stringifiedTodos);
    setTodos(newTodos);
  };



  const [todos, setTodos] = React.useState(parsedTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const [searchValue, setSearchValue] = React.useState('');
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


  return (
    <AppUI 
    totalTodos={totalTodos} completedTodos={completedTodos}
    searchValue={searchValue} setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
