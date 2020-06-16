import * as types from '../types';

const isExpenses = payload => ({
  type: types.IS_EXPENSES,
  payload,
});
export default isExpenses;
