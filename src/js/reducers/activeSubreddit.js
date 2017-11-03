export default (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE_SUBREDDIT':
      return action.activeSubreddit;
    default:
      return state;
  }
};
