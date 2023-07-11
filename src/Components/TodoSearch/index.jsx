import React from 'react';
import './TodoSearch.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import { TodoContext } from '../../Context';

const TodoSearch = () => {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <div className='search-container'>
      <BiSearchAlt2 className='search-icon'/>
      <input 
        placeholder='Cortar cebolla'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }} />
    </div>
  )
}

export { TodoSearch };