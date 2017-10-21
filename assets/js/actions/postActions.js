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

export const fetchMoreCommentsSuccess = (commentId, fetchedComments) => ({
  type: 'FETCH_MORE_COMMENTS_SUCCESS',
  commentId,
  fetchedComments,
});

export const fetchMoreComments = comment => (dispatch) => {
  comment.replies.fetchMore(comment.replies._more.count)
         .then(fetchedComments =>
           dispatch(fetchMoreCommentsSuccess(comment.id, fetchedComments)));
};
