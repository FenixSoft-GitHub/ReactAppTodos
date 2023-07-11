import React from 'react';
import './TodoButton.css';
import { TodoContext } from '../../Context';

const TodoButton = () => {
  const {
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <button className='button2' onClick={() => {
      setOpenModal(state => !state);
    }}>
      Add TODOs
    </button>
  )
}

export { TodoButton }

