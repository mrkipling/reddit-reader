export default (state = [], action) => {
  switch (action.type) {
  case 'FETCH_SUBREDDIT_SUCCESS':
    return action.subreddit;
  default:
    return state;
  }
};
