import * as types from '../types';

export const GET_TRANSACTIONS_STARTED = () => ({
  type: types.GET_TRANSACTIONS_STARTED,
});
export const GET_TRANSACTIONS_SUCCESS = payload => ({
  type: types.GET_TRANSACTIONS_SUCCESS,
  payload: {
    balance: payload.balance,
    income: payload.income,
    costs: payload.costs,
  },
});
export const GET_TRANSACTIONS_FAILURE = payload => ({
  type: types.GET_TRANSACTIONS_FAILURE,
  payload,
});
