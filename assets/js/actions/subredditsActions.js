import { client } from '../utils';

const r = client.connect();

export const fetchSubredditsSuccess = subreddits => ({
  type: 'FETCH_SUBREDDITS_SUCCESS',
  subreddits,
});

export const fetchSubreddits = () => dispatch =>
  r.getSubscriptions()
   .then(subreddits => dispatch(fetchSubredditsSuccess(subreddits)));
