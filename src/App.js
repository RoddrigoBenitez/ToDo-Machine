import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'; 
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton'
import './todoStyle.css';
{/*import './App.css';*/}

const todos = [
  { text: 'Cortar Cebolla ejem', completed: true },
  { text: 'tomar agua', completed: false },
  { text: 'Aprender Vue', completed: true },
  { text: 'Ver trabajo', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      
      <TodoSearch />

      <TodoList>
        {todos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ) )}
      </TodoList>

      <TodoButton />
      
    </React.Fragment>
  );
}

export default App;
