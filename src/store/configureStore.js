import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  chart: {
    x: 0,
    y: 0,
  }
};

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;