import snackbarTypes from '../types/snackbarTypes';

const initState = {
  open: false,
  message: '',
  notifId: ''
}

const snackbarReducer = (state = initState, action) => {
  switch (action.type) {
    case snackbarTypes.SHOW_SNACKBAR:
      console.log('Showing snackbar with message ' + action.message);
      return {
        ...state,
        open: true,
        message: action.message,
        notifId: action.id
      }
    case snackbarTypes.HIDE_SNACKBAR:
      return {
        ...state,
        open: false,
        message: ''
      }
    default:
      return state;
  }
}

export default snackbarReducer;