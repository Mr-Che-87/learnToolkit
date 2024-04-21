//REDUX
const initialState = {
    tasks: []
  };
  
  const taskReducer = (state = initialState, action) => {  //редуктор получает 2 аргумента: state и action.
    console.log("Current state:", state);
    
    //switch - условный оператор переключения для type:
    switch (action.type) {
      case 'ADD_TASK':   // если type 'добавить' 
        return {  //редуктор возвращает новый объект состояния с новой задачей, добавленной в массив tasks:
          ...state,
          tasks: [...state.tasks, action.payload]
        };
  
      case 'DELETE_TASK':  //если type 'удалить' 
          return {  //возвращает новый объект состояния с текущими задачами, отфильтрованными для удаления задачи с указанным id:
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        };

      default:
        return state;
    }
  };
  
  export default taskReducer;
  
  