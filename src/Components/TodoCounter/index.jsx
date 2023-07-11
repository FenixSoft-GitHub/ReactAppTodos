import React from 'react';
import { TodoContext } from '../../Context';
import './TodoCounter.css';

const TodoCounter = () => {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

    return (
      <h1 className='TodoCounter_title' >
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </h1>
    )
  }

  export { TodoCounter };