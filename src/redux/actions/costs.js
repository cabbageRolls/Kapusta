import * as types from '../types';

const fetchCostsStart = () => ({
  type: types.GET_COSTS_STARTED,
});

const fetchCostsSuccess = data => ({
  type: types.GET_COSTS_SUCCESS,
  payload: {
    ...data,
  },
});

const fetchCostsError = error => ({
  type: types.GET_COSTS_ERROR,
  payload: {
    error,
  },
});

// DELETE

const deleteCostStart = () => ({
  type: types.DELETE_COST_STARTED,
});

const deleteCostSuccess = id => ({
  type: types.DELETE_COST_SUCCESS,
  payload: {
    id,
  },
});

const deleteCostError = error => ({
  type: types.DELETE_COST_ERROR,
  payload: {
    error,
  },
});

const postCostsStart = () => ({
  type: types.POST_COSTS_STARTED,
});

const postCostsSuccess = data => ({
  type: types.POST_COSTS_SUCCESS,
  payload: data,
});

const postCostsError = data => ({
  type: types.POST_COSTS_FAILURE,
  payload: {
    error: data,
  },
});
export default {
  fetchCostsStart,
  fetchCostsSuccess,
  fetchCostsError,
  deleteCostStart,
  deleteCostSuccess,
  deleteCostError,
  postCostsStart,
  postCostsSuccess,
  postCostsError,
};
