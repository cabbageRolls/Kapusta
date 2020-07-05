import axios from 'axios';
import { userIncome } from '../../../services/api';
import {
  postIncomeStart,
  postIncomeSuccess,
  postIncomeFailure,
} from '../../actions/incomeActions/postIncome';
import { fetchCosts } from '../../operations/costsOperations/costs';

const postIncome = req => dispatch => {
  dispatch(postIncomeStart());
  axios
    .post(userIncome, req)
    .then(({ data }) => {
      dispatch(postIncomeSuccess(data));
      dispatch(fetchCosts());
    })
    .catch(error => dispatch(postIncomeFailure(error)));
};
export default postIncome;
