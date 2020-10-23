import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDlJUUaKjaNBKg12runbneNWOm-kS63vK4",
  authDomain: "yamini-twitterclone.firebaseapp.com",
  databaseURL: "https://yamini-twitterclone.firebaseio.com",
  projectId: "yamini-twitterclone",
  storageBucket: "yamini-twitterclone.appspot.com",
  messagingSenderId: "350324199489",
  appId: "1:350324199489:web:903c7a68f4f2bc3dbc76c0",
  measurementId: "G-56WXWSVDBL"
};

// below 3 steps are standard to initialise app and db
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
