import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBiJXFH5-RfLvN01JPbBBieCq4xPvdGxW0",
  authDomain: "authe-5b85d.firebaseapp.com",
  projectId: "authe-5b85d",
  storageBucket: "authe-5b85d.appspot.com",
  messagingSenderId: "932724992734",
  appId: "1:932724992734:web:bd1aa4a1491e626c29f04f",
  measurementId: "G-FRR70TP85Q"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}
