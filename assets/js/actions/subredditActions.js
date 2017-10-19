import { client } from '../utils';

const reddit = client.connect();

export const fetchSubredditSuccess = subreddit => ({
  type: 'FETCH_SUBREDDIT_SUCCESS',
  subreddit,
});

export const fetchSubreddit = subredditName => dispatch =>
  reddit.getHot(subredditName)
   .map(post => post)
   .then(subreddit => dispatch(fetchSubredditSuccess(subreddit)));
