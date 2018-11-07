import { ADD_FIGURE } from '../actions';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FIGURE:
      return [
        ...state,
        action.figure,
      ];
    default:
      return state;
  }
};

export default reducer;
