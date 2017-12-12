export const submissionsReducer = (state = [], action) => {
  switch (action.type) {
    // case 'CREATE_BOOK_SUCCESS':
    //     return [
    //       ...state,
    //       Object.assign({}, action.book)
    //     ];
    case 'FETCH_SUBMISSIONS_SUCCESS':
          return action.submissions;
    case 'APPLY_FILTER':
          return  Object.assign([], state, {filteredBasket : action.filteredBasket})
    case 'UPDATE_COUNT':
          return Object.assign([], state, {filterCount : action.filterCount})
    default:
          return state;
  }
};

// export const basketReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'FETCH_BOOK_BY_ID_SUCCESS':
//       return action.book;
//     default:
//       return state;
//   }
// };
