import axios from 'axios';
import { userCosts } from '../../services/api';
import expensesFormActions from '../actions/postCosts';

const postCosts = req => dispatch => {
  dispatch(expensesFormActions.postCostsStarted());

  axios
    .post(userCosts, req)
    .then(({ data }) => {
      dispatch(expensesFormActions.postCostsSuccess(data));
    })
    .catch(error => dispatch(expensesFormActions.postCostsFailure(error)));
};
export default postCosts;
