import firebase from "firebase";
// import data from 'variables/result.json';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const db = firebase.database();
const emailAuthProvider = new firebase.auth.EmailAuthProvider();

export { firebase, emailAuthProvider, db as default };

// import data to Firebase DB

// data.forEach(item => {
//   db.ref('/products').push(item);
// });
// db.ref()
//   .once('value')
//   .then(snapshot => console.log(snapshot.val()))
//   .catch(e => console.log('fetch failed', e));
