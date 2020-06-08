import { combineReducers } from 'redux';
import transactions from './transactions';
import error from './error';
import loader from './loader';
import categories from './categories';

const rootReducers = combineReducers({
  transactions,
  error,
  loader,
  categories,
});
export default rootReducers;
