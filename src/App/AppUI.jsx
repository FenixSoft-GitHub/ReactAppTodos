import React from 'react'
import { TodoItem } from '../Components/TodoItem';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoButton } from '../Components/TodoButton';
import { TodosLoading } from '../Components/TodosLoading';
import { TodosError } from '../Components/TodosError';
import { TodosEmpty } from '../Components/TodosEmpty';
import { TodoContext } from '../Context';
import { Modal } from '../Components/TodoModal';
import { TodoForm } from '../Components/TodoForm';

const AppUI = () => {
  const {
    searchTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
    <TodoCounter />
    <TodoSearch />
    <TodoList>
      {loading && <TodosLoading />}
      {error && <TodosError />}
      {(!loading && searchTodos.length === 0) && <TodosEmpty />}
      
      {searchTodos.map(todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>
    <TodoButton />
    {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )
    }
  </>
  )
}

export { AppUI }

// const defaultTodo = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Tomar el curso de Introducción a React', completed: true},
//   {text: 'Crear mi Block personal', completed: true},
//   {text: 'Crear los nuevos proyectos', completed: true},
//   {text: 'LALALALALA', completed: true},
//   {text: 'tararararar', completed: false},
// ]

// localStorage.setItem('TODOS_V1',  JSON.stringify( defaultTodo));
// localStorage.removeItem('TODOS_V1');
