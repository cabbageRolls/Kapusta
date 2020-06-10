import * as types from '../types';
import { fetchCostsSuccess } from '../actions/costs';
import INITIAL_STATE from '../INITIAL_STATE';

const costsReducer = (
  state = INITIAL_STATE.transactions.costs,
  { payload, type },
) => {
  switch (type) {
    case fetchCostsSuccess:
      return payload.costs;

    default:
      return state;
  }
};
export default costsReducer;
