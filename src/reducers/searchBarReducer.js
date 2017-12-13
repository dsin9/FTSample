export const searchBarReducer = (state = [], action) => {
    switch (action.type) {
      
      case 'CHANGE_SELECTION':
            return action.linktext;
      default:
            return state;
    }
  };