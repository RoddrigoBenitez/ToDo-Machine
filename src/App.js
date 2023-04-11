import React from 'react';
import { TodoCounter } from './TodoCounter';
import './App.css';

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
      <input placeholder='Buscar' />
      {/*<TodoSearch />*/}

      {/*<TodoList>
        {todos.map(todo =>(
          <Todoitem />
        ) )}
      </Todolist>*/}

      {/*<CrearTodoButton />*/}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
