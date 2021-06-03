import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyACKKFfYB6zK1vmGdan-BrTNQ0YvWRf7WE",
    authDomain: "playlist-fa977.firebaseapp.com",
    projectId: "playlist-fa977",
    storageBucket: "playlist-fa977.appspot.com",
    messagingSenderId: "654969940639",
    appId: "1:654969940639:web:2385d7fc5592704c5990aa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }