export default (state = [], action) => {
  switch (action.type) {

  case 'FETCH_MORE_COMMENTS_SUCCESS': {
    return [
      ...state,
      {
        commentId: action.commentId,
        comments: action.fetchedComments,
      },
    ];
  }

  default:
    return state;
  }
};
