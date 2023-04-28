import React, { useEffect } from 'react';
import { AppUI } from './AppUI';

{/*import './App.css';*/}

{/*const defaulTodos = [
  { text: 'Cortar Cebolla ejem', completed: true },
  { text: 'tomar agua', completed: false },
  { text: 'Aprender Vue', completed: true },
  { text: 'Ver trabajo', completed: false },
]*/}


const useLocalStorage = (itemName, initialValue) =>{
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

 
  React.useEffect(() => {
    setTimeout(() => {
    try {
      let parsedItem;


      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      }else{
        parsedItem = JSON.parse(localStorageItem);
      }
    
      setItem(parsedItem);
      setLoading(false);
    } catch(error){
      setError(error);
    }
    }, 1000);
  });



  const localStorageItem = localStorage.getItem(itemName);
  


  const saveItem = (newItem) =>{
    try{
      const stringifiedItem= JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
    } catch(error){
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}


function App() {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);


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

//console.log('Render');

//React.useEffect(() =>{
//  console.log('use Effect');
//}, [totalTodos]);

//console.log('last use Effect');


  return (
    <AppUI 
    loading={loading}
    error={error}
    totalTodos={totalTodos} completedTodos={completedTodos}
    searchValue={searchValue} setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
