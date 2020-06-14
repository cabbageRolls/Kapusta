import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const categories = (state = INITIAL_STATE.categories, { payload, type }) => {
  switch (type) {
    case types.GET_CATEGORIES_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export default categories;
