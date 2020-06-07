import { combineReducers } from 'redux';
import transactions from './transactions';
import error from './error';
import loader from './loader';

const rootReducers = combineReducers({
  transactions,
  error,
  loader,
});
export default rootReducers;
