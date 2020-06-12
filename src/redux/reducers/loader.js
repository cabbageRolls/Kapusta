import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const error = (state = INITIAL_STATE.loader, { type }) => {
  switch (type) {
    case types.GET_TRANSACTIONS_STARTED:
    case types.POST_BALANCE_STARTED:
    case types.POST_COSTS_STARTED:
      return true;
    case types.GET_TRANSACTIONS_FAILURE:
    case types.POST_BALANCE_FAILURE:
    case types.GET_TRANSACTIONS_SUCCESS:
    case types.POST_BALANCE_SUCCESS:
    case types.POST_COSTS_SUCCESS:
    case types.POST_COSTS_FAILURE:
      return false;
    default:
      return state;
  }
};

export default error;
