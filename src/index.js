import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import calculatorReducer from './reducers/Calculator';
import { Provider } from 'react-redux';
import Calculator from './components/Calculator';

// STORE
const calculatorStore = createStore(
  calculatorReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

ReactDOM.render(
  <Provider store={calculatorStore}>
    <Calculator />
  </Provider>,
  document.getElementById('root')
);

