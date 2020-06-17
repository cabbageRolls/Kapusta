import axios from 'axios';
import * as actions from '../actions/realCategories';
import * as API from '../../services/api';

const getRealCategories = () => {
  return dispatch => {
    dispatch(actions.GET_REAL_CATEGORIES_STARTED());
    axios
      .get(API.categoriesSet)
      .then(res => {
        dispatch(actions.GET_REAL_CATEGORIES_SUCCESS(res.data.categories));
      })
      .catch(error => dispatch(actions.GET_REAL_CATEGORIES_FAILURE(error)));
  };
};
export default getRealCategories;
