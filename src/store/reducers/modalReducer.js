import modalTypes from '../types/modalTypes';

const initState = {
  open: false
}

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case modalTypes.OPEN_MODAL:
      console.log('Opening modal');
      return {
        open: true
      }
    case modalTypes.CLOSE_MODAL:
      console.log('Closing modal');
      return {
        open: false
      }
    default:
      return state;
  }
}

export default modalReducer;