import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwE_rVjeeMV9qQTTlgLpA4p5qcIBdyFKk",
    authDomain: "etica-d5268.firebaseapp.com",
    projectId: "etica-d5268",
    storageBucket: "etica-d5268.appspot.com",
    messagingSenderId: "365947502362",
    appId: "1:365947502362:web:7476536ea80f06114276a3",
    measurementId: "G-Z50DER0V6W"
  };


  const firebaseApp = initializeApp(firebaseConfig);
  const database = getFirestore(firebaseApp);

  export default database;