import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const transactions = (
  state = INITIAL_STATE.transactions,
  { payload, type },
) => {
  switch (type) {
    case types.GET_TRANSACTIONS_STARTED:
    case types.GET_TRANSACTIONS_SUCCESS:
    case types.POST_BALANCE_STARTED:
    case types.POST_BALANCE_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default transactions;
