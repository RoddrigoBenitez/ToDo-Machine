import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'; 
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton'
import './todoStyle.css';
{/*import './App.css';*/}

const todos = [
  { text: 'Cortar Cebolla ejem', completed: false },
  { text: 'tomar agua', completed: false },
  { text: 'Aprender Vue', completed: false },
  { text: 'Ver trabajo', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      
      <TodoSearch />

      <TodoList>
        {todos.map(todo =>(
          <TodoItem text={todo.text} />
        ) )}
      </TodoList>

      <TodoButton />
      
    </React.Fragment>
  );
}

export default App;
