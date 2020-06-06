import axios from 'axios';
import * as actions from '../actions/transactions';
import * as API from '../../services/api';

const getTransactions = () => {
  return dispatch => {
    dispatch(actions.GET_TRANSACTIONS_STARTED());
    axios
      .get(API.userTransactions)
      .then(res => {
        dispatch(actions.GET_TRANSACTIONS_SUCCESS(res.data));
      })
      .catch(error => dispatch(actions.GET_TRANSACTIONS_FAILURE(error)));
  };
};
export default getTransactions;
