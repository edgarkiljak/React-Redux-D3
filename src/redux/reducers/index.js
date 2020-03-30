import authReducer from './auth';
import dashboard from './dashboard';
import projectReducer from './project';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboard,
  project: projectReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
