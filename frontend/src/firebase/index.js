import firebase from 'firebase/app'
import 'firebase/auth'

export const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyB6AF6lHRNPPgW8TO7gtluua3YWIOlnQ9Q',
  authDomain: 'openmedical-98a00.firebaseapp.com',
  projectId: 'openmedical-98a00',
  storageBucket: 'openmedical-98a00.appspot.com',
  messagingSenderId: '1095447506124',
  appId: '1:1095447506124:web:ac3690f167fbccffede669',
  measurementId: 'G-YQ4HHYCM0H',
})

// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// }
