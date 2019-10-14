import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import authReducer from './authReducer';
import modalReducer from './modalReducer';
import snackbarReducer from './snackbarReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  items: productsReducer,
  auth: authReducer,
  modal: modalReducer,
  snackbar: snackbarReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});


export default rootReducer;