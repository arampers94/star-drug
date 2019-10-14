import authTypes from '../types/authTypes';

const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case authTypes.LOGIN_SUCCESS:
      console.log('Login success!');
      return {
        ...state,
        authError: null
      }
    case authTypes.LOGIN_ERROR:
      console.log('Login error');
      return {
        ...state,
        authError: action.err.message
      }
    case authTypes.SIGNUP_SUCCESS:
      console.log('Sign up success');
      return {
        ...state,
        authError: null
      }
    case authTypes.SIGNUP_ERROR:
      console.log('Sign up error');
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
}

export default authReducer;