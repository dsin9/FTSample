import * as actionTypes from './actionTypes';


export const fetchSecurities = (items) => {
  let securities = [];
  let symbols = [];
  for(let item of items){
    if(item.symbol && symbols.indexOf(item.symbol)==-1){
      symbols.push(item.symbol);
      securities.push({symbol:item.symbol,flag:item.flag})
    }
    if(item.symbol2 && symbols.indexOf(item.symbol2)==-1){
      symbols.push(item.symbol2);
      securities.push({symbol:item.symbol2,flag:item.flag2})
    }

  }
  return{
    type: actionTypes.FETCH_SECURITIES_SUCCESS,
    securities
  }
};







