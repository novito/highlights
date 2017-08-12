import * as firebase from 'firebase';

const config = require('../config.json');
const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DATABASE_URL,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
