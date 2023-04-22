// import {firebase} from 'firebase/app';

// import firebase from 'firebase/compat/app';
// import 'firebase/firestore';
// import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const config = {
  apiKey: "AIzaSyAVCqTnmfzm8sYsK_Re7Z8w95OxRK5fTiI",
  authDomain: "projects-plan-4665f.firebaseapp.com",
  projectId: "projects-plan-4665f",
  storageBucket: "projects-plan-4665f.appspot.com",
  messagingSenderId: "830689527768",
  appId: "1:830689527768:web:b12f49dc5f08129964d4ad",
  measurementId: "G-YE9SRK6Q7T"
};

// Initialize Firebase
firebase.initializeApp(config);
//config.firestore();
firebase.firestore().settings({timeStampInSnapshots:true});

export default firebase;
