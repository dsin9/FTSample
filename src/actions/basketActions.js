import * as actionTypes from './actionTypes';
import Axios from 'axios';

const apiUrl = 'https://57c64baac1fc8711008f2a82.mockapi.io/book';

// export const createBook = (book) => {
//   return {
//     type: actionTypes.CREATE_BOOK,
//     book
//   }
// };

export const fetchPreferencesSuccess = (preferences) => {
  return {
    type: actionTypes.FETCH_PREFERENCES_SUCCESS,
    preferences
  }
};

export const fetchBasketsSuccess = (baskets) => {
  return {
    type: actionTypes.FETCH_BASKETS_SUCCESS,
    baskets
  }
};

export const fetchBaskets = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        const tempbaskets = [
          {
            "id": 2000,
            "side": "Buy",
            "flag": "US",
            "symbol": "RXZ7",
            "originalSize": 0.2,
            "remainingSize": 0.2,
            "measure": "CTD",
            "complianceStatus": "orange",
            "stageTimestamp": "2017-04-23T18:25:43.511Z"
          },
          {
            "id": 2001,
            "side": "Sell",
            "flag": "US",
            "symbol": "TYZ7",
            "originalSize": 0.2,
            "remainingSize": 0.2,
            "measure": "CTD",
            "complianceStatus": "red",
            "stageTimestamp": "2017-04-23T18:25:43.511Z"
          },
          {
            "id": 2002,
            "side": "Buy",
            "flag": "US",
            "symbol": "EDH1",
            "originalSize": 0.3,
            "remainingSize": 0.3,
            "measure": "CTD",
            "side2": "Sell",
            "flag2": "IN",
            "symbol2": "EDH5",
            "originalSize2": 0.3,
            "remainingSize2": 0.3,
            "measure2": "CTD",
            "stageTimestamp": "2017-04-23T18:25:43.511Z"
          }
        ];
        // dispatch(fetchBasketsSuccess(response.data));
        dispatch(fetchBasketsSuccess(tempbaskets));
      })
      .catch(error => {
        console.log('inside catch');
        throw (error);
      });
  };
};

export const fetchSubmissionsSuccess = (submissions) => {
  return {
    type: actionTypes.FETCH_SUBMISSIONS_SUCCESS,
    submissions
  }
};

export const fetchSubmissions = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        const tempsubmissions = [
          {
            "id": 1000,
            "side": "Buy",
            "flag": "US",
            "symbol": "RXZ10",
            "size": 0.2,
            "measure": "CTD",
            "status": "Completed",
            "pctExecuted": 67.8,
            "avgPrice": 101.3,
            "age": 1,
            "traderInitial": "CYX",
            "traderPhone": "(617)-123-3456",
            "submissionTimestamp": "2017-12-13T18:25:43.511Z"
          },
          {
            "id": 1001,
            "side": "Sell",
            "flag": "US",
            "symbol": "TYZ9",
            "size": 0.2,
            "measure": "CTD",
            "status": "Part. Alloc.",
            "pctExecuted": 67.8,
            "avgPrice": 101.3,
            "age": 1,
            "traderInitial": "CYX",
            "traderPhone": "(617)-123-3456",
            "submissionTimestamp": "2017-12-14T18:25:43.511Z"
          },
          {
            "id": 1002,
            "side": "Buy",
            "flag": "US",
            "symbol": "EDH5",
            "size": 0.3,
            "measure": "CTD",
            "side2": "Sell",
            "flag2": "IN",
            "symbol2": "EDH5",
            "size2": 0.3,
            "measure2": "CTD",
            "status": "Accepted",
            "pctExecuted": 67.8,
            "avgPrice": 101.3,
            "age": 1,
            "traderInitial": "CYX",
            "traderPhone": "(617)-123-3456",
            "submissionTimestamp": "2017-04-23T18:25:43.511Z"
          }
        ];
        // dispatch(fetchBasketsSuccess(response.data));
        dispatch(fetchSubmissionsSuccess(tempsubmissions));
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const fetchPreferences = () => {
  return (dispatch) => {
    return Axios.get(apiUrl)
      .then(response => {
        const preferences = {
          "landingPage": "Release Orders",
          "landingPageDescription": "Controls whether initial screen shows release order or track submission. Possible value is either Release Orders or Track Submissions",
          "refreshInternalInSeconds": 30,
          "refreshInternalInSecondsDescription": "Number of seconds to wait before the landing page refreshes",
          "timeframeSearchOptionsForReleaseOrders": [
            "1d",
            "5d",
            "10d",
            "MTD",
            "QTD",
            "YTD",
            "Last 30d",
            "Last 90d",
            "All"
          ],
          "timeframeSearchOptionsForReleaseOrdersDescription": "Controls what options to show when filtering by time frame on release order screen",
          "defaulTimeframeSearchOptionsForReleaseOrders": "All",
          "timeframeSearchOptionsForTrackSubmissions": [
            "1d",
            "5d",
            "10d",
            "MTD",
            "QTD",
            "YTD",
            "Last 30d",
            "Last 90d",
            "All"
          ],
          "timeframeSearchOptionsForTrackSubmissionsDescription": "Controls what options to show when filtering by time frame on track submission screen",
          "defaultTimeframeSearchOptionsForTrackSubmissions": "5d",
          "orderSizingOptions": [
            "CTD",
            "% of",
            "bps"
          ],
          "orderSizingOptionsDescription": "Enumerates what are the first order choices available in the screen after a basket is chosen to be released. Max of three choices can be made from CTD, % Of, bps. If only once choice is made, then the second button should be hidden from view, and the first and only choice should be selected by default. There should be at least one order sizing option",
          "limitTypes": [
            "Price",
            "BMK Treasury Spread",
            "CD Spread",
            "OAS",
            "Yield",
            "E - Spread",
            "L - Spread",
            "2% below Mkt Open"
          ],
          "limitTypesDescription": "Controls what choices are available as limit type",
          "defaultLimitType": "Price",
          "defaultLimitTypeDescription": "Controls what is the default limit type option",
          "fractionsForSizingMetricCTD": [
            0.05,
            0.10,
            0.15,
            0.20
          ],
          "fractionsForSizingMetricCTDDescription": "2-4 presets available if CTD option is chosen",
          "fractionsForSizingMetricBPS": [
            10,
            25,
            50,
            100
          ],
          "fractionsForSizingMetricBPSDescription": "2-4 presets available if BPS option is chosen",
          "fractionsForSizingMetric%Of": [
            10,
            25,
            50,
            100
          ],
          "fractionsForSizingMetric%OfDescription": "2-4 presets available if %of option is chosen",
          "traderInstructions": [
            "Good till cancel",
            "Good till close",
            "Phone call to follow"
          ],
          "traderInstructionsDescription": "0 - 3 presets available for trader Instructions, dominantTraderInstructions will be populated if two or three are available",
          "dominantTraderInstructions" : "Phone call to follow"
        };
        // dispatch(fetchBasketsSuccess(response.data));
        dispatch(fetchPreferencesSuccess(preferences));
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const applyFilter = (items,filter) => {
  let filtered = [...items];
      delete filtered.filter;
      delete filtered.filteredBasket;
      delete filtered.filterCount;
      if(filter && filter.side){
        filtered =  filtered.filter(item => item.side == filter.side  || item.side2 == filter.side)
      }
      if(filter && filter.security){
        filtered = filtered.filter(item => item.symbol == filter.security || item.symbol2 == filter.security)
      }
     
        filtered = filterByTimeframe(filtered,filter.timeframe);
      
   return {
    type: actionTypes.APPLY_FILTER,
    filteredBasket : filtered,
    filter : filter
  }
};

export const updateCount = (items,filter) => {
  let filtered = [...items];
  delete filtered.filter;
  delete filtered.filteredBasket;
  delete filtered.filterCount;
  if(filter && filter.security){
    filtered = filtered.filter(item => item.symbol == filter.security || item.symbol2 == filter.security)
  }
  if(filter && filter.timeframe && filter.timeframe!='All'){
    filtered = filterByTimeframe(filtered,filter.timeframe);
  }
  return {
   type: actionTypes.UPDATE_COUNT,
   filterCount : {
        buy : (filtered.filter(item => item.side == 'Buy' || item.side2 == 'Buy')).length,
        sell :(filtered.filter(item => item.side == 'Sell' || item.side2 == 'Sell')).length
   }
 }
};

 function filterByTimeframe(items,timeframe){
     switch(timeframe){
        case '1d':
          return isUnderTimeframe(items,1);
        case '5d':
          return isUnderTimeframe(items,5);
        case '10d':
          return isUnderTimeframe(items,10);
        case 'Last 30d':
          return isUnderTimeframe(items,30);
        case 'Last 90d':
          return isUnderTimeframe(items,90);
        case 'MTD':
             let currDate = new Date();
          return isUnderTimeframe(items,currDate.getDate());
        case 'QTD':
          return isUnderTimeframe(items,getNoOfDays('QTD'));
        case 'YTD':
          return isUnderTimeframe(items,getNoOfDays('YTD'));
        default : 
          return items;

    } 
  

}

function getNoOfDays(input){
    switch(input){
      case 'QTD':
        let now = new Date();
        let quarter = Math.floor((now.getMonth() / 3));
        let firstDate = new Date(now.getFullYear(), quarter * 3, 1);
        return days_between(firstDate,new Date());
      case 'YTD':
         firstDate = new Date(new Date().getFullYear(), 0, 1);
        return days_between(firstDate,new Date());
    
    }
}


function days_between(date1, date2) {
  
      // The number of milliseconds in one day
      var ONE_DAY = 1000 * 60 * 60 * 24
  
      // Convert both dates to milliseconds
      var date1_ms = date1.getTime()
      var date2_ms = date2.getTime()
  
      // Calculate the difference in milliseconds
      var difference_ms = Math.abs(date1_ms - date2_ms)
  
      // Convert back to days and return
      console.log("Number of days",Math.round(difference_ms/ONE_DAY));
      return Math.round(difference_ms/ONE_DAY)
  
  }

function isUnderTimeframe(items,noOfDays){
  let filteredItems = [];
  for(let i=0;i<items.length;i++){
    let item = items[i];
    let currDate = new Date();
    let timestamp = new Date(item.stageTimestamp || item.submissionTimestamp);
    var priorDate = new Date().setDate(currDate.getDate()-noOfDays);
    if(timestamp.getTime()<=currDate.getTime() && timestamp.getTime()>=priorDate){
      filteredItems.push(item);
    }
  }
  return filteredItems;
} 



export const appAction = (linktext) => {
  return {
   type: actionTypes.CHANGE_SELECTION,
   linktext : linktext
 }
};




