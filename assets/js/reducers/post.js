const checkComments = (comments, fetchedComments, commentId) =>
  comments.map((comment) => {
    if (comment.id === commentId) {
      return Object.assign({}, comment, {
        replies: fetchedComments,
      });
    }

    return Object.assign({}, comment, {
      replies: checkComments(comment.replies, fetchedComments, commentId),
    });
  });

const updateComments = (state, fetchedComments, commentId) =>
  Object.assign({}, state, {
    comments: checkComments(state.comments, fetchedComments, commentId),
  });

export default (state = null, action) => {
  switch (action.type) {
  case 'FETCH_POST_SUCCESS':
    return action.post;
  case 'FETCH_MORE_COMMENTS_SUCCESS':
    return updateComments(state, action.fetchedComments, action.commentId);
  default:
    return state;
  }
};
