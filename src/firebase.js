import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBpRPl-4XxK7_KkWVraOVNvhEEy-bdd81E",
    authDomain: "imessage-clone-c140a.firebaseapp.com",
    databaseURL: "https://imessage-clone-c140a.firebaseio.com",
    projectId: "imessage-clone-c140a",
    storageBucket: "imessage-clone-c140a.appspot.com",
    messagingSenderId: "155574868441",
    appId: "1:155574868441:web:0634b2832b6b4cbe92a1c8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;