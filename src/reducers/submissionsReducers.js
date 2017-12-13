export const submissionsReducer = (state = [], action) => {
  switch (action.type) {

    case 'FETCH_SUBMISSIONS_SUCCESS':
          return action.submissions;
    case 'APPLY_FILTER':
          return  Object.assign([], state, {filteredBasket : action.filteredBasket,filter : action.filter})
    case 'UPDATE_COUNT':
          return Object.assign([], state, {filterCount : action.filterCount})
    default:
          return state;
  }
};

