import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBm7fSC-Ke9eLoMfZMNXXQqp2lSesCkHK0",
  authDomain: "ned-semester-project.firebaseapp.com",
  databaseURL: "https://ned-semester-project-default-rtdb.firebaseio.com",
  projectId: "ned-semester-project",
  storageBucket: "ned-semester-project.appspot.com",
  messagingSenderId: "127553456101",
  appId: "1:127553456101:web:1412e9fa4c40b6555a510c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const providerFb = new firebase.auth.FacebookAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider, providerFb };
export default db;
