export default (state = [], action) => {
  switch (action.type) {

    case 'VOTE_COMMENT_SUCCESS': {
      let existingIndex = null;

      const obj = {
        contentId: action.contentId,
        direction: action.direction,
      };

      for (let i = 0; i < state.length; i += 1) {
        if (state[i].contentId === action.contentId) {
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

    case 'RESET_VOTES':
      return [];

    default:
      return state;
  }
};
