import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'

import { Provider } from "react-redux";  //импортируем Provider
import store from './store/store.jsx';  //импортируем хранилище

ReactDOM.createRoot(document.getElementById("root")).render(
  // оборачиваем App в <Provider>. В Provider передаём store как пропс:
  <React.StrictMode>
    <Provider store={store}>   {/*пробрасываем пропс store всему приложению сразу*/}
      <App />
    </Provider>
  </React.StrictMode>
);


