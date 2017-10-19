import { client } from '../utils';
import { loadingStart, loadingEnd } from './loadingActions';

const reddit = client.connect();

export const fetchSubredditSuccess = subreddit => ({
  type: 'FETCH_SUBREDDIT_SUCCESS',
  subreddit,
});

export const fetchSubreddit = subredditName => (dispatch) => {
  dispatch(loadingStart('subreddit'));
  return reddit.getHot(subredditName)
               .map(post => post)
               .then((subreddit) => {
                 dispatch(loadingEnd());
                 dispatch(fetchSubredditSuccess(subreddit));
               });
};
