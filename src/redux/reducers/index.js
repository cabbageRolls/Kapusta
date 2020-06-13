import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
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

const sessionPersistConfig = {
  key: 'kapusta',
  storage,
  whitelist: ['token'],
};

const rootReducers = combineReducers({
  realCategories,
  currentCategory,
  transactions,
  error,
  loader,
  session: persistReducer(sessionPersistConfig, session),
  categories,
  alert: alertReducer,
  costs,
  dataPicker: dataPickerReducer,
});
export default rootReducers;
