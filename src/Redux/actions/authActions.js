import { LOGIN_ERROR, LOGIN_SUCCESS, SIGNOUT_SUCCESS } from './action-types';
import firebase from '../../config/firebase';

export const signIn = credentials => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: LOGIN_SUCCESS
        });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: SIGNOUT_SUCCESS
        });
      })
      .catch(err => console.log(err));
  };
};
