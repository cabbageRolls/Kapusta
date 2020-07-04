import * as types from '../types';

const getProductsStarted = () => ({
  type: types.GET_PRODUCTS_STARTED,
});
const getProductsSuccess = data => ({
  type: types.GET_PRODUCTS_SUCCESS,
  payload: data,
});
const getProductsFailure = data => ({
  type: types.GET_PRODUCTS_FAILURE,
  payload: {
    error: data,
  },
});
export default {
  getProductsStarted,
  getProductsSuccess,
  getProductsFailure,
};
