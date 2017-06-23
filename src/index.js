import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';

import './stylesheets/main.scss';

import App from './components/App';
import reducers from './reducers/index';

let users = [];
for(let i=1; i<11; i++) {
  users.push({
    id: i,
    name: 'Owais',
    job: 'Software Engineer'
  });
}

let initial_state = {
  users: {
    list: users
  }
};

let store = createStore(
  reducers,
  initial_state,
  composeWithDevTools(applyMiddleware(createLogger()))
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);
