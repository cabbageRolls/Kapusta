import axios from 'axios';
import actions from '../../actions/costs';
import * as API from '../../../services/api';

export const fetchCosts = () => dispatch => {
  dispatch(actions.fetchCostsStart());
  axios
    .get(API.userTransactions)
    .then(({ data }) => {
      dispatch(actions.fetchCostsSuccess(data));
    })
    .catch(error => {
      dispatch(actions.fetchCostsError(error));
    });
};

export const deleteCost = id => dispatch => {
  dispatch(actions.deleteCostStart(id.slice(25)));
  axios
    .delete(API.userCosts + `/${id}`)
    .then(() => {
      dispatch(actions.deleteCostSuccess(id.slice(25)));
      dispatch(fetchCosts());
    })
    .catch(error => {
      dispatch(actions.deleteCostError(error));
    });
};

export const postCosts = req => dispatch => {
  dispatch(actions.postCostsStart());

  axios
    .post(API.userCosts, req)
    .then(({ data }) => {
      dispatch(actions.postCostsSuccess(data));
      dispatch(fetchCosts());
    })
    .catch(error => dispatch(actions.postCostsError(error)));
};
