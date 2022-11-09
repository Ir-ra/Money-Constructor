import firebase  from "firebase/app";  //імпортуємо файбейс яку щойно скачали (core of Firebase)
import 'firebase/firestore'           //імпортуємо сервіси, які нам знадобляться

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDtNTs2uCgkldRMPUMSs5ExF3pf_zQwbbw",
    authDomain: "mymoney-m.firebaseapp.com",
    projectId: "mymoney-m",
    storageBucket: "mymoney-m.appspot.com",
    messagingSenderId: "260532793325",
    appId: "1:260532793325:web:6cb55ccfc204eb85de41e4"
  };

  //initialize firebase (цей метод підєднує до нашої Firebase backend)
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timestamp}