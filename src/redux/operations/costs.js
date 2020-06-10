import axios from 'axios';
import {
  fetchCostsStart,
  fetchCostsSuccess,
  fetchCostsError,
  deleteCostStart,
  deleteCostSuccess,
  deleteCostError,
} from '../actions/costs';
import * as API from '../../services/api';

export const fetchCosts = () => dispatch => {
  dispatch(fetchCostsStart());
  axios
    .get(API.userTransactions)
    .then(res => {
      dispatch(fetchCostsSuccess(res.data.costs));
    })
    .catch(error => {
      dispatch(fetchCostsError(error));
    });
};

export const deleteCost = id => dispatch => {
  dispatch(deleteCostStart());
  axios
    .delete(API.userCosts + `${id}`)
    .then(() => {
      dispatch(deleteCostSuccess(id));
    })
    .catch(error => {
      dispatch(deleteCostError(error));
    });
};
