import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIgWLY12tq0mmp6xEHc8p2PsTa8QpP8rI",
  authDomain: "netflix-clone-a3029.firebaseapp.com",
  projectId: "netflix-clone-a3029",
  storageBucket: "netflix-clone-a3029.appspot.com",
  messagingSenderId: "1065605062983",
  appId: "1:1065605062983:web:1005e8310c7a241f6a6c62",
  measurementId: "G-VRQFNC0PBT"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);