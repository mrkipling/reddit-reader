export const voteCommentSuccess = (comment, direction) => ({
  type: 'VOTE_COMMENT_SUCCESS',
  comment,
  direction,
});

export const voteComment = (comment, up) => (dispatch) => {
  // unvote
  if ((up && comment.likes) || (!up && comment.likes !== null && comment.likes === false)) {
    return comment.unvote().then(comm =>
      dispatch(voteCommentSuccess(comm, 'unvote')));
  }

  if (up) {
    return comment.upvote().then(comm =>
      dispatch(voteCommentSuccess(comm, 'upvote')));
  }

  return comment.downvote().then(comm =>
    dispatch(voteCommentSuccess(comm, 'downvote')));
};
