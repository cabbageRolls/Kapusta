import axios from 'axios';
import { userIncome } from '../../../services/api';
import {
  deleteIncomeStart,
  deleteIncomeSuccess,
  deleteIncomeFailure,
} from '../../actions/incomeActions/deleteIncome';
import { fetchCosts } from '../../operations/costsOperations/costs';

const deleteIncome = id => dispatch => {
  dispatch(deleteIncomeStart());

  axios
    .delete(`${userIncome}/${id}`)
    .then(({ data }) => {
      dispatch(deleteIncomeSuccess(data));
      dispatch(fetchCosts());
    })
    .catch(error => dispatch(deleteIncomeFailure(error)));
};
export default deleteIncome;
