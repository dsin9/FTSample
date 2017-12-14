import * as actionTypes from './actionTypes';


export const fetchTimeframes = (type) => {
  let timeframes=[];
  if(type == 'Release Orders'){
    timeframes =  [
      "1d",
      "5d",
      "10d",
      "MTD",
      "QTD",
      "YTD",
      "Last 30d",
      "Last 90d",
      "All"
      ]
  }else if(type == 'Track Submissions'){
    timeframes = [
      "1d",
      "5d",
      "10d",
      "MTD",
      "QTD",
      "YTD",
      "Last 30d",
      "Last 90d",
      "All"
      ]
  }
  return{
    type: actionTypes.FETCH_TIMEFRAMES,
    timeframes
  }
};







