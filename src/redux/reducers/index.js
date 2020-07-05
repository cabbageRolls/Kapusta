import { combineReducers } from 'redux';
import realCategories from './realCategories';
import transactions from './transactions';
import error from './error';
import loader from './loader';
import session from './session';
import products from './products';
import alertReducer from './alert';
import costs from './postCosts';
import dataPickerReducer from '../reducers/monthPicker';
import currentCategory from './currentCategory';
import incomeReducer from './incomeReducer';
import isExpenses from './isExpenses';

const rootReducers = combineReducers({
  session,
  realCategories,
  currentCategory,
  transactions,
  error,
  loader,
  products,
  alert: alertReducer,
  costs,
  dataPicker: dataPickerReducer,
  incomeReducer,
  isExpenses,
});
export default rootReducers;
