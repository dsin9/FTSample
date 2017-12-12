export const basketsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BASKETS_SUCCESS':
          return action.baskets;
    case 'APPLY_FILTER':
          return  Object.assign([], state, {filteredBasket : action.filteredBasket,filter : action.filter})
          case 'UPDATE_COUNT':
          return Object.assign([], state, {filterCount : action.filterCount})
    default:
          return state;
  }
};

