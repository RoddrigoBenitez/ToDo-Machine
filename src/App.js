import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'; 
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton'
import './todoStyle.css';
{/*import './App.css';*/}

const defaulTodos = [
  { text: 'Cortar Cebolla ejem', completed: true },
  { text: 'tomar agua', completed: false },
  { text: 'Aprender Vue', completed: true },
  { text: 'Ver trabajo', completed: false },
]

function App() {

  const [todos, setTodos] = React.useState(defaulTodos);

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

  setTodos(newTodos);

};

const deleteTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text ===  text);

  const newTodos = [...todos];

  newTodos.splice(todoIndex, 1);

  setTodos(newTodos);

};


  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      
      <TodoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={()=> completeTodo(todo.text) } 
          onDelete={()=> deleteTodo(todo.text)}
          />
        ) )}
      </TodoList>

      <TodoButton />
      
    </React.Fragment>
  );
}

export default App;
