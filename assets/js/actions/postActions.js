import { client } from '../utils';

const r = client.connect();

export const fetchPostSuccess = post => ({
  type: 'FETCH_POST_SUCCESS',
  post,
});

export const fetchPost = postId => dispatch =>
  r.getSubmission(postId)
   .expandReplies({ limit: 5, depth: 5 })
   .then(post => dispatch(fetchPostSuccess(post)));
