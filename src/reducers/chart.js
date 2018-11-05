import { SET_X, SET_Y } from '../actions';

const initalState = {
  x: 0,
  y: 0,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_X:
      return { x: action.coordinateX, y: state.y };
    case SET_Y:
      return { x: state.x, y: action.coordinateY };
    default:
      return state;
  }
};

export default reducer;
