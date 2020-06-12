import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const error = (state = INITIAL_STATE.dataPicker, { payload, type }) => {
  switch (type) {
    case types.GET_CATEGORIES_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export default error;
