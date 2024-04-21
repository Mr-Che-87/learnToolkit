
//Redux-Toolkit:
import { configureStore } from "@reduxjs/toolkit";  //вместо старого createStore и кучи приблуд для ассинхронности
import todoSlice from "../features/todoSlice";  //т.к. экпорт todoSlice дефолтный -  можно использовать любое имя (import todoReduser, например).

const store = configureStore({
  reducer: {   
    todo: todoSlice,    //todo - имя слайса
     ///....все редукторы через запятую
  }, 

 // ...далее тут могут быть и другие параметры

});

export default store;



//REDUX:
/*
import { legacy_createStore as createStore, applyMiddleware } from 'redux' //createStore устарел. Вместо него - метод configureStore из пакета @reduxjs/toolkit

import taskReducer from '../old_redux_reducers/taskReducer';

//ассинхронность вместо thunk:
const asyncFunction = storeAPI => next => action => {  //реализация через  последовательность стрелочных функций
  if (typeof action === "function") {
    return action(storeAPI.dispatch, storeAPI.getState);
  }
  return next(action);
};

//тоже самое - так длиннее, но понятнее:
//function asyncFunction(storeAPI) {
//  return function(next) {
 //   return function(action) {
 //     if (typeof action === "function") {
 //       return action(storeAPI.dispatch, storeAPI.getState);
 //     }
 //     return next(action);
//    };
//  };
// }


const store = createStore(
  taskReducer,
  applyMiddleware(asyncFunction) //applyMiddleware - функция для применения ассинхронности к хранилищу
);

export default store;
*/






//ИЗ ТЕОРИИ (но тут не подключается redux-devtools-extension и не работает thunk):
/*
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import taskReducer from "./reducers/taskReducer";
import rootReducer from "../redusers/redusers";


/*
//если ассинхронность вообще не нужна:
const store = createStore(rootReducer);

export default store;
*/


/*
//если ассинхронность на всё:
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
*/


/* 
//если ассинхронность только к taskReducer:
const store = createStore(
  taskReducer,  //пишется отдельно taskReducer, а не общий rootReducer, т.к. thunk В ДАННОМ СЛУЧАЕ нужно применить только к taskReducer. Т.е. taskReducer будет обрабатывать и асинхронные действия(если они будут) в то время как другие редукторы, если они есть - только синхронные действия.
  composeWithDevTools(applyMiddleware(thunk))  //composeWithDevTools - функция для расширения хранилища с помощью Redux DevTools; applyMiddleware - функция для применения промежуточного программного обеспечения Thunk к хранилищу.
);

export default store;
*/


