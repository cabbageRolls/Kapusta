import * as types from '../../types';

export const deleteIncomeStart = () => ({
  type: types.DELETE_INCOME_STARTED,
});

export const deleteIncomeSuccess = costs => ({
  type: types.DELETE_INCOME_SUCCESS,
  payload: {
    costs,
  },
});

export const deleteIncomeFailure = error => ({
  type: types.DELETE_INCOME_FAILURE,
  payload: {
    error,
  },
});
