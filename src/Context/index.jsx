import React, { createContext, useState } from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1',[]);
      const [searchValue, setSearchValue] = useState('');
      
      const [openModal, setOpenModal] = useState(false);

      const completedTodos = todos.filter(todo => !!todo.completed).length;

      const totalTodos = todos.length;
     
      const searchTodos = todos.filter(todo => {
          // función texto sin tildes
          const noTildes = (text) => (
            text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          );
    
          // Normalizando texto sin tildes y a Lower Case
          const TodoTextLC = noTildes(todo.text.toLowerCase());
          
          const searchTextLC = noTildes(searchValue.toLowerCase());
    
          //renderizar con filtro
          return TodoTextLC.includes(searchTextLC);
    });

    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false,
      });   
      saveTodos(newTodos);
    }
    
    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    };
    
    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };


  return (
    <TodoContext.Provider value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal, 
        setOpenModal,
        addTodo,
    }}>
      { children }
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
