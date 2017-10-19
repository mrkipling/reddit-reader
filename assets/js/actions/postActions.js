import { client } from '../utils';
import { loadingStart, loadingEnd } from './loadingActions';

const reddit = client.connect();

export const fetchPostSuccess = post => ({
  type: 'FETCH_POST_SUCCESS',
  post,
});

export const fetchPost = postId => (dispatch) => {
  dispatch(loadingStart('post'));
  return reddit.getSubmission(postId)
               .expandReplies({ limit: 0, depth: 0 })
               .then((post) => {
                 dispatch(loadingEnd());
                 dispatch(fetchPostSuccess(post));
               });
};
