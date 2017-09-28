import { fetchSubreddit } from './subredditActions';

export const updateActiveSubreddit = activeSubreddit => ({
  type: 'UPDATE_ACTIVE_SUBREDDIT',
  activeSubreddit,
});

export const changeSubreddit = activeSubreddit => (dispatch) => {
  dispatch(updateActiveSubreddit(activeSubreddit));
  dispatch(fetchSubreddit(activeSubreddit));
};
