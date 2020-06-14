import * as actions from '../actions/currentCategory';
import * as types from '../types';

const setCurrentCategory = data => {
  return dispatch => {
    dispatch(actions.SET_CURRENT_CATEGORY(data));
  };
};
export default setCurrentCategory;
