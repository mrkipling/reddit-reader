import { client } from '../utils';
import { loadingStart, loadingEnd } from './loadingActions';

const reddit = client.connect();

export const fetchSubredditsSuccess = subreddits => ({
  type: 'FETCH_SUBREDDITS_SUCCESS',
  subreddits,
});

export const fetchSubreddits = () => (dispatch) => {
  dispatch(loadingStart('subreddits'));
  return reddit.getSubscriptions()
               .then((subreddits) => {
                 dispatch(loadingEnd());
                 dispatch(fetchSubredditsSuccess(subreddits));
               });
};
