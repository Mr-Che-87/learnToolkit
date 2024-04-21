//REDUX

//Первый создатель действий:
export const addTodo = (text) => {
    return {
      name: "todo",
      type: "ADD_TASK",
      payload: {   //содержит объект с новой задачей(с полями id и text): 
        id: new Date().getTime(),  //генерируется id с использованием new Date().getTime()-метода создания уникального-id на основе текущей отметки времени
        text: text,
        
      },
    };
  };
  

 //Второй создатель действий: 
  export const deleteTodo = (id) => {
    return {
      type: "DELETE_TASK",
      payload: id,  //содержит id удаляемой задачи
    };
  };