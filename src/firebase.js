import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { user } from './store.js';  // import the store

const firebaseConfig = {
  apiKey: 'AIzaSyDf-zcmQxzLO1vq1zyWfokwqEJ3c_gNubI',
  authDomain: 'videostreaming-3845.firebaseapp.com',
  projectId: 'videostreaming-3845',
  storageBucket: 'videostreaming-3845.appspot.com',
  messagingSenderId: '556024614451',
  appId: '1:556024614451:web:cc919b51489b2adc04dd46',
  measurementId: 'G-NLWLQM4PTV',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// This function is called whenever the user's login state changes
auth.onAuthStateChanged(_user => {
  user.set(_user);
});
