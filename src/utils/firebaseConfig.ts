import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAp3SlkFzmyX6Kt6v3LhXqdB9TPey0643U",
  authDomain: "scottys-420.firebaseapp.com",
  projectId: "scottys-420",
  storageBucket: "scottys-420.appspot.com",
  messagingSenderId: "813394470154",
  appId: "1:813394470154:web:696f7485ffffd9e84846f3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app};
