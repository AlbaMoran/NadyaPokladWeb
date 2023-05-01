// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore   } from 'firebase/firestore';
import env from '../env'

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: env.REACT_APP_APIKEY,
  authDomain: env.REACT_APP_AUTHDOMAIN,
  projectId: env.REACT_APP_PROJECTID,
  storageBucket: env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: env.REACT_APP_MESSAGINGSENDERID,
  appId: env.REACT_APP_APPID,
  measurementId: env.REACT_APP_MESUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); 
export const auth = getAuth(app); 
export default app;

