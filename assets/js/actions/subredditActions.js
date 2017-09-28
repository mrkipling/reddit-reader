import { client } from '../utils';

const r = client.connect();

export const fetchSubredditSuccess = subreddit => ({
  type: 'FETCH_SUBREDDIT_SUCCESS',
  subreddit,
});

export const fetchSubreddit = subredditName => dispatch =>
  r.getHot(subredditName)
   .map(post => post)
   .then(subreddit => dispatch(fetchSubredditSuccess(subreddit)));
