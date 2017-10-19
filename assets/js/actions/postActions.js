import { client } from '../utils';

const reddit = client.connect();

export const fetchPostSuccess = post => ({
  type: 'FETCH_POST_SUCCESS',
  post,
});

export const fetchPost = postId => dispatch =>
  reddit.getSubmission(postId)
   .expandReplies({ limit: 5, depth: 5 })
   .then(post => dispatch(fetchPostSuccess(post)));
