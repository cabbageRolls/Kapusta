import * as actions from '../actions/currentCategory';

const setCurrentCategory = data => {
  return dispatch => {
    dispatch(actions.SET_CURRENT_CATEGORY(data));
  };
};
export default setCurrentCategory;
