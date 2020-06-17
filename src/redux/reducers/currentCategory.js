import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const currentCategory = (
  state = INITIAL_STATE.currentCategory,
  { payload, type },
) => {
  switch (type) {
    case types.SET_CURRENT_CATEGORY:
      return payload;
    default:
      return state;
  }
};
export default currentCategory;
