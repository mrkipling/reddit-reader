export const voteCommentSuccess = (commentId, direction) => ({
  type: 'VOTE_COMMENT_SUCCESS',
  commentId,
  direction,
});

export const voteComment = (comment, commentLikes, up) => (dispatch) => {
  // unvote
  if ((up && commentLikes) || (!up && commentLikes !== null && commentLikes === false)) {
    return comment.unvote().then(() =>
      dispatch(voteCommentSuccess(comment.id, 'unvote')));
  }

  if (up) {
    return comment.upvote().then(() =>
      dispatch(voteCommentSuccess(comment.id, 'upvote')));
  }

  return comment.downvote().then(() =>
    dispatch(voteCommentSuccess(comment.id, 'downvote')));
};
