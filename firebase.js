import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB3BpFAAs53Dk9XrbxmnZvCl6Q83UeFAKU",
    authDomain: "gifted-chat-72923.firebaseapp.com",
    projectId: "gifted-chat-72923",
    storageBucket: "gifted-chat-72923.appspot.com",
    messagingSenderId: "957282374422",
    appId: "1:957282374422:web:f6c70992cb64003317f637"
  };

  let app;

  if (firebase.apps.length === 0) {
      app = initializeApp(firebaseConfig);
  }else {
      app = firebase.app()
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};