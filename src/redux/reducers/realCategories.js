import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const realCategories = (
  state = INITIAL_STATE.realCategories,
  { payload, type },
) => {
  switch (type) {
    case types.GET_REAL_CATEGORIES_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export default realCategories;
