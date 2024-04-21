import './App.css'

import Task from "./components/Task.jsx";
import TaskList from "./components/TaskList.jsx";
import FilterTasks from './components/FilterTasks.jsx';
import SelectDefaultTasks from './components/SelectDefaultTasks.jsx';


export default function App() {
  return (
    <>
    <div>привет</div>
    <div className="App">
      <SelectDefaultTasks />
      <Task />
      <FilterTasks />
      <TaskList />
    </div>
    </>
  );
}


/*
//Redux на ЧИСТОМ JS(без react):
//Создание store-хранилища:
import { createStore } from 'redux';
const store = createStore(changeStore);

//Редуктор (обработчик события):
function changeStore(state = [], action) {
  //обработка действия типа 'WRITE': добавление нового элемента в массив состояния:
  switch (action.type) {
    case 'WRITE':
      return [...state, action.payload];
      break;
    default:
      return state;
  }
}

//получение ссылок на DOM-элементы
const testButton = document.querySelector('.testButton');
const items = document.querySelector('.testUl');
const inputValue = document.querySelector('.testInput');

//Subscribe - аналог хука в реакт:
store.subscribe(() => {     //анонимная стрелочная функция, которая вызывается каждый раз, когда изменяется состояние 
  //очистка списка и поля ввода (после того как subscribe всё сделал)
  items.innerHTML = '';  //мы сначала очищаем уже лежащий в хранилище массив items, а потом (в обрабочике ниже) создаём новый массив со всем лежавшими в нём до этого элементами, добавляя в конце новый li. НЕ ПОНЯЛ - а куда тогда добавлять новый li, если все предыдущие очищены???
  inputValue.value = '';  //почему сначала очистка, а потом создание массива эл-тов li? НЕ ПОНЯЛ (это вроде можно и внизу написать - итак итак работает)

    store.getState().map(item => {    //getState (возвращает текущее состояние хранилища в виде массива li-элементов)
      const li = document.createElement('li');
      li.textContent = item;  //содержимое li = значению текущего элемента item из состояния хранилища 
      items.appendChild(li);  //добавление элемента списка в DOM-дерево items(в конец ul)
  });
});

//Cобытие (dispatch и addEventListener):
testButton.addEventListener('click', () => {
  store.dispatch({ type: 'WRITE', payload: inputValue.value }); //отправка действия типа 'WRITE' с данными из поля ввода в хранилище
});
*/
    




/*
//СДЕЛАТЬ ЭТУ ЗАДАЧУ!!!
Реализуйте любое действие с UI, обрабатывая его с помощью Redux. 
Например, поиск совпадений по store. На подстроку «Re...» поиск выдаст значения «React» и  «Redux». Добавлять новые значения в store можно, используя пример, описанный в видео.
*/




