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
import incomeReducer from './incomeReducer';

const rootReducers = combineReducers({
  isExpenses,
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
});
export default rootReducers;
