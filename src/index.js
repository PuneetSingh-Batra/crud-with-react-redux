import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers/index';

import App from './components/App';
import Home from './pages/Home';
import UserEdit from './pages/UserEdit';
import NotFound from './pages/NotFound';

import './stylesheets/main.scss';

let users = [];
for(let i=1; i<=100; i++) {
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
  composeWithDevTools(applyMiddleware(createLogger(), routerMiddleware(browserHistory)))
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="user-edit(/:id)" component={ UserEdit } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
