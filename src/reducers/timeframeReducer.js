export const timeframeReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_TIMEFRAMES':
            return action.timeframes;
      default:
            return state;
    }
  };
  
  