import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../Context';

const App = () => {
   
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export { App };
