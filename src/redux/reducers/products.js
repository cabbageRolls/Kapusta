import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const products = (state = INITIAL_STATE.products, { payload, type }) => {
  switch (type) {
    case types.GET_PRODUCTS_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export default products;
