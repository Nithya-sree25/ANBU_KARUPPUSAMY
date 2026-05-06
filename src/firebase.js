// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYznO_z21jOGKhbPeMnZ4P5XizkY-Gjak",
  authDomain: "anbukaruppusamy-31f91.firebaseapp.com",
  projectId: "anbukaruppusamy-31f91",
  storageBucket: "anbukaruppusamy-31f91.firebasestorage.app",
  messagingSenderId: "552657012748",
  appId: "1:552657012748:web:fb6febf317917cecec4629",
  measurementId: "G-T457S0C6C4"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };