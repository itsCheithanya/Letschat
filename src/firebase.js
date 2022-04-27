import firebase from 'firebase'
const fbapp = firebase.initializeApp({
  apiKey: 'AIzaSyCJ5t--NIt8HdEkE5IlPEeQ9fI0oRDBVok',
  authDomain: 'letschat-4a.firebaseapp.com',
  projectId: 'letschat-4a',
  storageBucket: 'letschat-4a.appspot.com',
  messagingSenderId: '746541615176',
  appId: '1:746541615176:web:ac31cebbeb54384a4e307d',
  measurementId: 'G-CYB99VGYMF',
})
const db = fbapp.firestore()
const auth = firebase.auth()
export { db, auth }
