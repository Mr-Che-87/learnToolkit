//изначальный стейт:
const state = [
    {
        id:1,
        task: 'Do homework',
        complited: true
    },
    {
        id:2,
        task: 'Buy bread',
        complited: false
    },
]

//экшн - добавляем новую задачу
const action = {
    type: 'ADD_TODO',
    task: 'learn new words',
    id:3
}

//функция-редуктор создаёт копию массива, добавляет туда задание, а затем возвращает массив:
function reducer(currentState, action) {
    switch (action.type) {
        case 'ADD_TODO': {
            const newState = [...currentState, { id: action.id, task: action.task, complited:false } ]
            return newState
        }
        break;
        default: return currentState;
    }
}

