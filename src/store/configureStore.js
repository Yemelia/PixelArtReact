import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  chart: {
    x: 20,
    y: 4,
  },
  figures: [
    {
      type: 'line',
      x1: 1,
      x2: 6,
      y1: 2,
      y2: 2
    },
    {
      type: 'line',
      x1: 6,
      x2: 6,
      y1: 3,
      y2: 4
    },
    {
      type: 'rectangle',
      x1: 16,
      x2: 20,
      y1: 1,
      y2: 3
    }
  ],
};

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;