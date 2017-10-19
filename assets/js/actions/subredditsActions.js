import { client } from '../utils';

const reddit = client.connect();

export const fetchSubredditsSuccess = subreddits => ({
  type: 'FETCH_SUBREDDITS_SUCCESS',
  subreddits,
});

export const fetchSubreddits = () => dispatch =>
  reddit.getSubscriptions()
   .then(subreddits => dispatch(fetchSubredditsSuccess(subreddits)));
