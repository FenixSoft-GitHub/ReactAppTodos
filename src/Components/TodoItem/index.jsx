import './TodoItem.css';
// import { GiCheckMark } from 'react-icons/gi';
// import { AiTwotoneDelete } from 'react-icons/ai';
import { DeleteIcon } from '../DeleteIcon';

import { TodoCheckBox } from "../TodoCheckBox";
// import { TodoDeleteButton } from "../TodoDeleteButton";

const TodoItem = (props) => {
    return (
      <li className="todo-item">
        <TodoCheckBox completed={props.completed}  onClick={props.onComplete} />
        {/* <TodoCheckBox className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}/> */}
        {/* <GiCheckMark 
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          onClick={props.onComplete}
          /> */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <DeleteIcon onClick={props.onDelete} />
        {/* <AiTwotoneDelete className='Button_Delete'  onClick={props.onDelete} /> */}
        {/* <TodoDeleteButton  onClick={props.onComplete} /> */}
      </li>
    )
  }

  export { TodoItem };