export const SET_PARAMS = 'SET_PARAMS';

export const setParams = ({ x, y }) => ({
  type: SET_PARAMS,
  chart: { x, y },
});
