import * as types from '../types';
import { fetchCostsSuccess, deleteCostSuccess } from '../actions/costs';
import INITIAL_STATE from '../INITIAL_STATE';

const costsReducer = (
  state = INITIAL_STATE.transactions.costs,
  { payload, type },
) => {
  switch (type) {
    case fetchCostsSuccess:
      return payload.costs;

    case deleteCostSuccess:
      return state.filter(cost => cost.id !== payload.id);

    default:
      return state;
  }
};
export default costsReducer;
