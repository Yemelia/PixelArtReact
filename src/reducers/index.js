import { combineReducers } from 'redux';

import chart from './chart';
import figures from './figures';

const reducer = combineReducers({
  chart,
  figures,
});

export default reducer;
