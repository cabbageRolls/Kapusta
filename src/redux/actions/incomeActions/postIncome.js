import * as types from '../../types';

export const postIncomeStart = () => ({
  type: types.POST_INCOME_STARTED,
});

export const postIncomeSuccess = costs => ({
  type: types.POST_INCOME_SUCCESS,
  payload: {
    costs,
  },
});

export const postIncomeFailure = error => ({
  type: types.POST_INCOME_FAILURE,
  payload: {
    error,
  },
});
