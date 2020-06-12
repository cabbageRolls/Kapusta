import * as types from '../types';

export const fetchCostsStart = () => ({
  type: types.GET_COSTS_STARTED,
});

export const fetchCostsSuccess = costs => ({
  type: types.GET_COSTS_SUCCESS,
  payload: {
    costs,
  },
});

export const fetchCostsError = error => ({
  type: types.GET_COSTS_ERROR,
  payload: {
    error,
  },
});

// DELETE

export const deleteCostStart = () => ({
  type: types.DELETE_COST_STARTED,
});

export const deleteCostSuccess = id => ({
  type: types.DELETE_COST_SUCCESS,
  payload: {
    id,
  },
});

export const deleteCostError = error => ({
  type: types.DELETE_COST_ERROR,
  payload: {
    error,
  },
});
