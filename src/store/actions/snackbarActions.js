import snackbarTypes from '../types/snackbarTypes';

export const showSnackbar = (message, id) => {
  return {
    type: snackbarTypes.SHOW_SNACKBAR,
    message,
    id
  }
}

export const hideSnackbar = () => {
  console.log('Hiding snackbar');
  return {
    type: snackbarTypes.HIDE_SNACKBAR
  }
}