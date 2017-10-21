export const fetchMoreCommentsSuccess = (commentId, fetchedComments) => ({
  type: 'FETCH_MORE_COMMENTS_SUCCESS',
  commentId,
  fetchedComments,
});

export const fetchMoreComments = comment => (dispatch) => {
  comment.replies.fetchMore({ amount: 40, append: false })
         .then(fetchedComments =>
           dispatch(fetchMoreCommentsSuccess(comment.id, fetchedComments)));
};
