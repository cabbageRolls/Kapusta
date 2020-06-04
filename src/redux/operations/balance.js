import axios from 'axios';
import * as actions from '../actions/balance';
import * as API from '../../services/api';

const postBalance = value => {
  return dispatch => {
    dispatch(actions.POST_BALANCE_STARTED());
    axios
      .post(
        API.userBalance,
        JSON.stringify({
          amount: value,
        }),
      )
      .then(res => {
        dispatch(actions.POST_BALANCE_SUCCESS(res.data));
      })
      .catch(error => dispatch(actions.POST_BALANCE_FAILURE(error)));
  };
};
export default postBalance;
