/* eslint-disable */

export default (state = [], action) => {
  switch (action.type) {

    case 'VOTE_COMMENT_SUCCESS': {
      /**
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
      **/
      return state;
    }

    case 'RESET_VOTES':
      return [];

    default:
      return state;
  }
};
