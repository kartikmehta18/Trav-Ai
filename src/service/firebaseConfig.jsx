// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLjM0lklGb_MuyM1G-qCbItMAL2q66X9o",
  authDomain: "aitrip-7ced5.firebaseapp.com",
  projectId: "aitrip-7ced5",
  storageBucket: "aitrip-7ced5.appspot.com",
  messagingSenderId: "565446551728",
  appId: "1:565446551728:web:2d31c90102ef04576ef375",
  measurementId: "G-FDPTCHPF4F"
};

// Initialize Firebase

 export const app = initializeApp(firebaseConfig);
 export const db =getFirestore(app);

// const analytics = getAnalytics(app);