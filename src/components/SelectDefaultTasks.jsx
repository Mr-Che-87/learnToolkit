//УСЛОЖНЯЕМ:

import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

const SelectDefaultTasks = () => {
  const dispatch = useDispatch();
  const selectRef = useRef(null);


  const handleSelectTask = (event) => {
    const selectedTask = selectRef.current.value;
    if (selectedTask) {

    //1 редуктор addTodo передаёт разные ВЕРСИИ состояния разным компонентам(и этому и в Task.jsx):
      dispatch(addTodo(selectedTask));  //диспатчим экшн addTodo (принимаем экшн с action.payload = selectRef.current.value)
            
      selectRef.current.value = ''; 
    }
  };


  return (
    <div>
      <select ref={selectRef}>
        <option value="">Select a task...</option>
        <option value="Wash dishes">Wash dishes</option>
        <option value="Do laundry">Do laundry</option>
        <option value="Clean the house">Clean the house</option>
      </select>
      <button onClick={handleSelectTask}>Add default task</button>
    </div>
  );
};

export default SelectDefaultTasks;
