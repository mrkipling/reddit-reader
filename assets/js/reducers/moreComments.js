export default (state = [], action) => {
  switch (action.type) {

  case 'FETCH_MORE_COMMENTS_SUCCESS': {
    let existingIndex = null;

    const obj = {
      commentId: action.commentId,
      comments: action.fetchedComments,
    };

    for (let i = 0; i < state.length; i += 1) {
      if (state[i].commentId === action.commentId) {
        existingIndex = i;
        break;
      }
    }

    if (existingIndex !== null) {
      return state.map((item, index) => {
        if (index !== existingIndex) return item;
        return obj;
      });
    }

    return [
      ...state,
      obj,
    ];
  }

  case 'RESET_MORE_COMMENTS':
    return [];

  default:
    return state;
  }
};
