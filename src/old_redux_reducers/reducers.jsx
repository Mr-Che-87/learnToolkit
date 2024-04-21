//REDUX
import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({  //combineReducers – функция объединения всех редукторов в корневой
  tasks: taskReducer,  //у нас тут только один, но м.б. много
});

export default rootReducer
