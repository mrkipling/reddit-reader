export const voteCommentSuccess = (commentId, direction) => ({
  type: 'VOTE_COMMENT_SUCCESS',
  commentId,
  direction,
});

export const voteComment = (comment, commentLikes, up) => (dispatch) => {
  // unvote
  if ((up && commentLikes) || (!up && commentLikes !== null && commentLikes === false)) {
    comment.unvote();
    return dispatch(voteCommentSuccess(comment.id, 'unvote'));
  }

  if (up) {
    comment.upvote();
    return dispatch(voteCommentSuccess(comment.id, 'upvote'));
  }

  comment.downvote();
  return dispatch(voteCommentSuccess(comment.id, 'downvote'));
};
