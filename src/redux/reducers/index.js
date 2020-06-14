import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import transactions from './transactions';
import error from './error';
import loader from './loader';
import session from './session';
import products from './products';
import alertReducer from './alert';
import costs from './postCosts';
import dataPickerReducer from '../reducers/monthPicker';

const sessionPersistConfig = {
  key: 'kapusta',
  storage,
  whitelist: ['token'],
};

const rootReducers = combineReducers({
  transactions,
  error,
  loader,
  session: persistReducer(sessionPersistConfig, session),
  products,
  alert: alertReducer,
  costs,
  dataPicker: dataPickerReducer,
});
export default rootReducers;
