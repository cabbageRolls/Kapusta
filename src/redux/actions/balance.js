import * as types from '../types';

export const POST_BALANCE_STARTED = () => ({
  type: types.POST_BALANCE_STARTED,
});
export const POST_BALANCE_SUCCESS = payload => ({
  type: types.POST_BALANCE_SUCCESS,
  payload: {
    balance: payload.balance,
  },
});
export const POST_BALANCE_FAILURE = payload => ({
  type: types.POST_BALANCE_FAILURE,
  payload,
});
