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
// это MonthPicker
export const getPeriod = store => store.dataPicker;

export const getCurrentCategory = store => store.currentCategory;

export const getCostByPeriodAndCategories = createSelector(
  [getPeriod, getCosts, realCategories],
  (period, costs, categories) =>
    CostByPeriodAndCategories(period, costs, categories),
);

export const getDataCharts = createSelector(
  [getCurrentCategory, getCostByPeriodAndCategories],
  (category, costs) => {
    if (!category.length) return [];
    const sum = (acc, value) => acc + value;
    const dataByCategory = costs
      .find(item => {
        return item.name === category;
      })
      .allCosts.map(i => ({ value: i.amount, name: i.product.name }));
    const result = [...new Set(dataByCategory.map(i => i.name))].reduce(
      (acc, name) => {
        const value = dataByCategory
          .filter(i => i.name === name)
          .map(i => i.value)
          .reduce(sum);
        acc.push({ name, value });
        return acc;
      },
      [],
    );
    return result;
  },
);
