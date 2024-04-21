////УСЛОЖНЯЕМ:
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../features/todoSlice';

const TaskList = () => {
  const tasks = useSelector(state => {
    if (state.todo.filter === 'all') {
      return state.todo.tasks;
    } else if (state.todo.filter === 'completed') {
      return state.todo.tasks.filter(task => task.completed);
    } else {
      return state.todo.tasks.filter(task => !task.completed);
    }
  });
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = id => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            <button onClick={() => handleToggle(task.id)}>{task.completed ? 'Undo' : 'Complete'}</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;





/*
import { useSelector } from "react-redux";  //хук useSelector обеспечивает доступ к состоянию из хранилища Redux
import { useDispatch } from "react-redux"; 

import { deleteTodo } from "../features/todoSlice";  //Redux-Toolkit
//import { deleteTodo } from "../old_redux_actions/actions";  //REDUX




const TaskList = () => {
  const tasks = useSelector((state) => state.todo.tasks)  //РАЗОБРАТЬСЯ С useSelector???????????   //Redux-Toolkit 
  //const tasks = useSelector((state) => state.tasks || []); //или просто без "|| []"   //REDUX
 
  const dispatch = useDispatch();

  const handleDelete = (id) => {   //???????????????почему addNewTask не требует аргумент id, а «видит» его напрямую из {id: Date.now(), text: action.payload}, а handleDelete требует???????
    dispatch(deleteTodo(id));  //диспатчим экшн deleteTodo (action.payload = id того, у которого мы ткнули "delete")
  };

  return (
    //компонент перебирает каждую задачу в массиве задач и отображает текст и кнопку удаления: 
    <div className="tasklist">
      <div className="display-tasks">
        <h3>Your tasks:</h3>

        <ul className="tasks">
          {tasks && tasks.map((task) => ( 
            //id и text берём из slice  - { id: Date.now(), text: action.payload = inputRef.current.value } :
            <li className="task" key={task.id}>
              {task.text}    
              <button
                className="delete-btn"
                onClick={() => handleDelete(task.id)}  //тут стрелочная с аргументом, а не просто {handleDelete} - т.к. handleDelete иницирована с аргументом handleDelete(id)
              >
                delete
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default TaskList;
*/