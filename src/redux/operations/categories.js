import axios from 'axios';
import { productsSet } from '../../services/api';
import expensesFormActions from '../actions/categories';

const fetchCategories = () => dispatch => {
  dispatch(expensesFormActions.getCategoriesStarted());

  axios
    .get(productsSet)
    .then(({ data }) => {
      dispatch(expensesFormActions.getCategoriesSuccess(data.products));
    })
    .catch(error => dispatch(expensesFormActions.getCategoriesFailure(error)));
};
export default fetchCategories;
