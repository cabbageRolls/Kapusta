import axios from 'axios';
import { categoriesSet } from '../../services/api';
import expensesFormActions from '../actions/categories';

const fetchCategories = () => dispatch => {
  dispatch(expensesFormActions.getCategoriesStarted());

  axios
    .get(categoriesSet)
    .then(({ data }) =>
      dispatch(expensesFormActions.getCategoriesSuccess(data.categories)),
    )
    .catch(error => dispatch(expensesFormActions.getCategoriesFailure(error)));
};
export default fetchCategories;
