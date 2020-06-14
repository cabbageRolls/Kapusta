import * as types from '../types';

export const handeleIncrement = payload => ({
  type: types.DO_INCREMENT,
  payload,
});

export const handeleDecrement = payload => ({
  type: types.DO_DECREMENT,
  payload,
});
