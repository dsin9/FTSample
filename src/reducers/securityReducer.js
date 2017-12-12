export const securityReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_SECURITIES_SUCCESS':
            return action.securities;
      default:
            return state;
    }
  };
  
  