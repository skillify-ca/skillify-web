import { initializeApp, getApps } from "firebase/app";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtZ-IXjxgX7CI3CgnBLSbVN-tNCuHc_-g",
  authDomain: "math-champ-b7e77.firebaseapp.com",
  projectId: "math-champ-b7e77",
  storageBucket: "math-champ-b7e77.appspot.com",
  messagingSenderId: "904289223243",
  appId: "1:904289223243:web:5ab008455a547a13b603ce",
  measurementId: "G-6G80JHY0FC",
};

if (!getApps().length) {
  //....
}

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
