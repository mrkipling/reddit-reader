export default (state = '', action) => {
  switch (action.type) {
    case 'LOADING_START':
      return action.content;
    case 'LOADING_END':
      return '';
    default:
      return state;
  }
};
