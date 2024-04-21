import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'all',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("Current state:", state);
      state.tasks.push({ id: Date.now(), text: action.payload, completed: false });
    },
    deleteTodo: (state, action) => {
      console.log("Current state:", state);
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      console.log("Current state:", state);
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter: (state, action) => {
      console.log("Current state:", state);
      state.filter = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;





/*
//Redux-Toolkit

import { createSlice } from "@reduxjs/toolkit";

//ИЛИ//const initialState = { tasks: [] };

const todoSlice = createSlice({   //createSlice - для создания слайса (генерации экшнов и их типов в редукторах)
  name: "todo",
  initialState: {tasks: []},  //ИЛИ//initialState,
  reducers: {
    addTodo: (state, action) => {  //редуктор-экшн-обработчик-1 - добавления задачи
      //ДЕЙСТВИЕ над состоянием:
      console.log("Current state:", state);  //опционально для отслеживания состояния
      state.tasks.push({ id: Date.now(), text: action.payload });  //создаётся новый объект с полями id и text, который пушится в массив tasks
    },
    deleteTodo: (state, action) => {  //редуктор-экшн-обработчик-2 - удаления задачи
      //ДЕЙСТВИЕ над состоянием:
      console.log("Current state:", state);  //опционально для отслеживания состояния
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);  //обработчик обновляет state, фильтруя массив tasks - оставляя в нём только те задачи, id которых не равен id удаляемой задачи
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;   //экспорт экшнов для диспатчера

export default todoSlice.reducer;  //экспорт куторов для store (default позволяет обьединять его с другими редукторами в общем хранилище)
*/
