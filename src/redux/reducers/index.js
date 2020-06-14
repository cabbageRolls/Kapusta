import { combineReducers } from 'redux';
import realCategories from './realCategories';
import transactions from './transactions';
import error from './error';
import loader from './loader';
import session from './session';
import categories from './categories';
import alertReducer from './alert';
import costs from './postCosts';
import dataPickerReducer from '../reducers/monthPicker';
import currentCategory from './currentCategory';

const rootReducers = combineReducers({
  session,
  realCategories,
  currentCategory,
  transactions,
  error,
  loader,
  categories,
  alert: alertReducer,
  costs,
  dataPicker: dataPickerReducer,
});
export default rootReducers;
