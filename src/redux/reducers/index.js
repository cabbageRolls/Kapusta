import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import transactions from './transactions';
import error from './error';
import loader from './loader';
import session from './session';
import categories from './categories';
import alertReducer from './alert';

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
  categories,
  alert: alertReducer,
});
export default rootReducers;
