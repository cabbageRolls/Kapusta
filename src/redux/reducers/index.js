import { combineReducers } from 'redux';
import transactions from './transactions';
import error from './error';
import loader from './loader';
import session from './session';

const rootReducers = combineReducers({
  transactions,
  error,
  loader,
  session,
});
export default rootReducers;
