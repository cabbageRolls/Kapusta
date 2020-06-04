import { combineReducers } from 'redux';
import transactions from './transactions';
import error from './error';

const rootReducers = combineReducers({
  transactions,
  error,
});
export default rootReducers;
