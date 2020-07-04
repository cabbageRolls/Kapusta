import axios from 'axios';
import { productsSet } from '../../services/api';
import expensesFormActions from '../actions/products';

const fetchProducts = () => dispatch => {
  dispatch(expensesFormActions.getProductsStarted());

  axios
    .get(productsSet)
    .then(({ data }) => {
      dispatch(expensesFormActions.getProductsSuccess(data.products));
    })
    .catch(error => dispatch(expensesFormActions.getProductsFailure(error)));
};
export default fetchProducts;
