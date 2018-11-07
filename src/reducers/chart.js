import { SET_PARAMS } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PARAMS:
      return { x: action.chart.x, y: action.chart.y };
    default:
      return state;
  }
};

export default reducer;
