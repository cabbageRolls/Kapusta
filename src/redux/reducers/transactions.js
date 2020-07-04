import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const transactions = (
  state = INITIAL_STATE.transactions,
  { payload, type },
) => {
  switch (type) {
    case types.GET_TRANSACTIONS_STARTED:
    case types.POST_BALANCE_STARTED:
    case types.GET_TRANSACTIONS_SUCCESS:
    case types.POST_BALANCE_SUCCESS:
    case types.GET_COSTS_STARTED:
    case types.GET_COSTS_SUCCESS:
      return { ...state, ...payload };

    case types.DELETE_COST_SUCCESS:
      return {
        ...state,
        ...payload,
        costs: state.costs.filter(cost => cost.costsId !== payload.id),
      };

    default:
      return state;
  }
};
export default transactions;
