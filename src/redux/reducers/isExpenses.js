import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const isExpensesReducer = (
  state = INITIAL_STATE.isExpenses,
  { type, payload },
) => {
  switch (type) {
    case types.IS_EXPENSES:
      return payload;
    default:
      return state;
  }
};

export default isExpensesReducer;
