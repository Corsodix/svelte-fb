/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyB_IAgkUtcV_KbZtSRcB2chntOzIZObNCY",
  authDomain: "svelte-fb-22986.firebaseapp.com",
  projectId: "svelte-fb-22986",
  storageBucket: "svelte-fb-22986.appspot.com",
  messagingSenderId: "973478483796",
  appId: "1:973478483796:web:5f29b967513db0e573dac1"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}