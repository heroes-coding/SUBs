import * as firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from '../config/firebaseConfig';
import { loadUser } from '../store/user.era';
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export const signIn = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()
export const registerAuthWithStore = (dispatch) => auth.onAuthStateChanged(user => {
  console.log('Subscribing to Firebase Auth (one time)');
  dispatch(loadUser(user))
})
