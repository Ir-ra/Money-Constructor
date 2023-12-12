import firebase from "firebase/app";

//services
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDtNTs2uCgkldRMPUMSs5ExF3pf_zQwbbw",
  authDomain: "mymoney-m.firebaseapp.com",
  projectId: "mymoney-m",
  storageBucket: "mymoney-m.appspot.com",
  messagingSenderId: "260532793325",
  appId: "1:260532793325:web:6cb55ccfc204eb85de41e4"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
