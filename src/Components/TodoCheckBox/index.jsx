import './TodoCheckBox.css';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { LuCheckCircle } from 'react-icons/lu';

const TodoCheckBox = ({completed, onClick}) => {
  const iconSelected = completed ? <LuCheckCircle /> : <MdRadioButtonUnchecked />;
  return (
    <span className={completed ? 'span-icon span-icon-done' : 'span-icon span-icon-uncompleted'}
      onClick={onClick}>
        { iconSelected }
    </span>
  )
}

export {TodoCheckBox}
