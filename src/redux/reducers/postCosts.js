import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const costs = (state = INITIAL_STATE.costs, { payload, type }) => {
  switch (type) {
    case types.POST_COSTS_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export default costs;
