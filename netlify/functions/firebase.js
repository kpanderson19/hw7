const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDqR5vzMs3OH6qRsHn2Pe7SpkvIAKKbnYE",
  authDomain: "kiei-451-2939a.firebaseapp.com",
  projectId: "kiei-451-2939a",
  storageBucket: "kiei-451-2939a.appspot.com",
  messagingSenderId: "112854868795",
  appId: "1:112854868795:web:03f58ebb6198752b080d1e"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase