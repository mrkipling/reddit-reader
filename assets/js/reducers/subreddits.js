export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SUBREDDITS_SUCCESS':
      return action.subreddits;
    default:
      return state;
  }
};
