export const loadingStartAction = content => ({
  type: 'LOADING_START',
  content,
});

export const loadingEndAction = () => ({
  type: 'LOADING_END',
});

export const loadingStart = content => dispatch =>
  dispatch(loadingStartAction(content));

export const loadingEnd = () => dispatch =>
  dispatch(loadingEndAction());
