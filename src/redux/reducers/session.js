import INITIAL_STATE from '../INITIAL_STATE';
import * as types from '../types';

const authReducer = (state = INITIAL_STATE.session, { payload, type }) => {
  switch (type) {
    case types.SIGNUP_USER_REQUEST:
    case types.SIGNUP_USER_ERROR:
    case types.LOGIN_USER_REQUEST:
    case types.LOGIN_USER_ERROR:
      return state;
    case types.LOGIN_USER_SUCCESS:
    case types.SIGNUP_USER_SUCCESS:
      return {
        fullName: payload.user.userData.name.fullName,
        email: payload.user.userData.email,
        token: payload.user.token,
        isLogin: true,
      };
    case types.LOGOUT:
      return {
        isLogin: false,
      };
    default:
      return state;
  }
};
export default authReducer;

// import { combineReducers } from 'redux';
// import * as types from '../types';

// const user = (state = null, { type, payload }) => {
//   switch (type) {
//     case types.LOGIN_USER_SUCCESS:
//     case types.SIGNUP_USER_SUCCESS:
//       return payload.response.user.userData;

//     case types.LOGOUT:
//       return null;

//     default:
//       return state;
//   }
// };

// const authenticated = (state = false, { type, payload }) => {
//   switch (type) {
//     case types.LOGIN_USER_SUCCESS:
//     case types.SIGNUP_USER_SUCCESS:
//       return true;

//     case types.LOGOUT:
//       return false;

//     default:
//       return state;
//   }
// };

// const token = (state = null, { type, payload }) => {
//   switch (type) {
//     case types.LOGIN_USER_SUCCESS:
//     case types.SIGNUP_USER_SUCCESS:
//       return payload.response.user.token;

//     case types.LOGOUT:
//       return null;

//     default:
//       return state;
//   }
// };

// const session = combineReducers({
//   user,
//   authenticated,
//   token,
// });

// export default session;
