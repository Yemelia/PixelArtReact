export const SET_X = 'SET_X';
export const SET_Y = 'SET_Y';

export const setX = x => ({
  type: SET_X,
  cooordinateX: x,
});

export const setY = y => ({
  type: SET_Y,
  cooordinateX: y,
});
