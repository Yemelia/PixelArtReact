import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  chart: {
    x: 12,
    y: 10,
  },
  figures: [
    {
      type: 'line',
      x1: 1,
      x2: 5,
      y1: 5,
      y2: 5,
    }
  ],
};

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;