/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCUS-TPGq89-jjX32rfwVlZXqjJtLr7fx8",
  authDomain: "friendlychat-9f2cf.firebaseapp.com",
  projectId: "friendlychat-9f2cf",
  storageBucket: "friendlychat-9f2cf.appspot.com",
  messagingSenderId: "753783110751",
  appId: "1:753783110751:web:5a2434bdb97813a0b96fea",
  measurementId: "G-4SJ5HTTD13"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}