import * as types from '../types';

const postCostsStarted = () => ({
  type: types.POST_COSTS_STARTED,
});
const postCostsSuccess = data => ({
  type: types.POST_COSTS_SUCCESS,
  payload: data,
});
const postCostsFailure = data => ({
  type: types.POST_COSTS_FAILURE,
  payload: {
    error: data,
  },
});
export default {
  postCostsStarted,
  postCostsSuccess,
  postCostsFailure,
};
