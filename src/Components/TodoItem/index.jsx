import './TodoItem.css';
import { DeleteIcon } from '../DeleteIcon';
import { TodoCheckBox } from "../TodoCheckBox";

const TodoItem = (props) => {
    return (
      <li className="todo-item">
        <TodoCheckBox completed={props.completed}  onClick={props.onComplete} />
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <DeleteIcon onClick={props.onDelete} />
      </li>
    )
  }

  export { TodoItem };