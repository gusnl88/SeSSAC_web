import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './store';
import { Provider } from 'react-redux';

const store=configureStore({reducer:rootReducer});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


