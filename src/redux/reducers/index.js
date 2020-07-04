import { combineReducers } from 'redux';
import realCategories from './realCategories';
import transactions from './transactions';
import error from './error';
import loader from './loader';
import session from './session';
import products from './products';
import alertReducer from './alert';
// import costsReduser from './costs';
import costs from './postCosts';
import dataPickerReducer from '../reducers/monthPicker';
import currentCategory from './currentCategory';
import isExpenses from './isExpenses';

const rootReducers = combineReducers({
  isExpenses,
  session,
  realCategories,
  currentCategory,
  transactions,
  error,
  loader,
  session,
  products,
  alert: alertReducer,
  costs,
  dataPicker: dataPickerReducer,
});
export default rootReducers;
