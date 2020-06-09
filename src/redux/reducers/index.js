import { combineReducers } from 'redux';
import transactions from './transactions';
import error from './error';
import loader from './loader';
import categories from './categories';
import alertReducer from './alert';

const rootReducers = combineReducers({
  transactions,
  error,
  loader,
  categories,
  alert: alertReducer,
});
export default rootReducers;
