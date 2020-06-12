// import { fetchCostsSuccess, deleteCostSuccess } from '../actions/costs';
import * as types from '../types';

import INITIAL_STATE from '../INITIAL_STATE';

const costsReducer = (
  state = INITIAL_STATE.transactions,
  { payload, type },
) => {
  switch (type) {
    case types.GET_COSTS_SUCCESS:
      return { ...state, costs: payload.costs };

    case types.DELETE_COST_SUCCESS:
      return state.filter(cost => cost.id !== payload.id);

    default:
      return state;
  }
};
export default costsReducer;
