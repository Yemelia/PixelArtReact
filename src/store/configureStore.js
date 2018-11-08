import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

import initialState from './initialState';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;