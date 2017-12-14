// Set up your root reducer here...
import { combineReducers } from 'redux';
import {basketsReducer} from './basketsReducers'
import {submissionsReducer} from './submissionsReducers'
import {preferencesReducer} from './preferencesReducers'
import {searchBarReducer} from './searchBarReducer'
import {securityReducer} from './securityReducer'
import {timeframeReducer} from './timeframeReducer'
// import cart from './cartReducers';

export default combineReducers({
  baskets: basketsReducer,
  submissions: submissionsReducer,
  preferences: preferencesReducer,
  linktext : searchBarReducer,
  securities : securityReducer,
  timeframes : timeframeReducer
  // basket: basketReducer
  // cart
});
