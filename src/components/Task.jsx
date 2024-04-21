import { useRef } from "react";  
import { useDispatch } from "react-redux"; 

import { addTodo } from "../features/todoSlice"; 
//import { addTodo } from "../old_redux_actions/actions";  //REDUX

const Task = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    //Обработчик клика кнопки "Добавить задачу":
    function addNewTask() {  //???????????????почему addNewTask не требует аргумент id, а «видит» его напрямую из {id: Date.now(), text: action.payload}, а handleDelete требует???????
      
        const task = inputRef.current.value.trim();   
        if (task !== "") {  
          
          //1 редуктор addTodo передаёт разные ВЕРСИИ состояния разным компонентам(и этому и в SelectDefaultTasks.jsx):
          dispatch(addTodo(task));  //диспатчим экшн addTodo (принимаем экшн с action.payload = inputRef.current.value)
          
          inputRef.current.value = "";  //очищаем инпут
        }
      }
  
    return (
      <div className="task-component">
        <div className="add-task">
          <input
            type="text"
            placeholder="Add task here..."
            ref={inputRef}
            className="taskInput"
          />
          <button onClick={addNewTask}>Add task</button>
        </div>
      </div>
    );
  };
  
  export default Task;
  
