export const voteSuccess = (contentId, direction) => ({
  type: 'VOTE_SUCCESS',
  contentId,
  direction,
});

export const vote = (content, contentLikes, up) => (dispatch) => {
  // unvote
  if ((up && contentLikes) || (!up && contentLikes !== null && contentLikes === false)) {
    content.unvote();
    return dispatch(voteSuccess(content.id, 'unvote'));
  }

  if (up) {
    content.upvote();
    return dispatch(voteSuccess(content.id, 'upvote'));
  }

  content.downvote();
  return dispatch(voteSuccess(content.id, 'downvote'));
};

export const resetVotesSuccess = () => ({
  type: 'RESET_VOTES',
});

export const resetVotes = () => (dispatch) => {
  dispatch(resetVotesSuccess());
};
