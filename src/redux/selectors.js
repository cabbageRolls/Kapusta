import { CostByPeriodAndCategories } from '../services/helpers';
import { createSelector } from 'reselect';

export const getBalance = store => {
  return store.transactions.balance;
};

export const getError = store => {
  return store.error;
};

export const isAuthenticated = state => state.session.authenticated;

export const loader = store => {
  return store.loader;
};

//ЭТО ПРОДУКТЫ
export const getCategories = store => {
  return store.categories;
};

export const realCategories = store => {
  return store.realCategories;
};

export const monthPicker = store => {
  return store.dataPicker.month;
};

export const yearPicker = store => {
  return store.dataPicker.year;
};

export const getCosts = store => {
  return store.transactions.costs;
};

export const getPeriod = store => store.dataPicker;

export const getCostByPeriodAndCategories = createSelector(
  [getPeriod, getCosts, realCategories],
  (period, costs, categories) =>
    CostByPeriodAndCategories(period, costs, categories),
);
