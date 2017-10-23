export default (state = null, action) => {
  switch (action.type) {
    case 'FETCH_POST_SUCCESS':
      return action.post;
    default:
      return state;
  }
};
