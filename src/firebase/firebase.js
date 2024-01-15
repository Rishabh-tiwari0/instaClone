import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDV9VmOtQvQ1naTcjpEquN0jv89Z19ceXs",
  authDomain: "the-gram-c534e.firebaseapp.com",
  projectId: "the-gram-c534e",
  storageBucket: "the-gram-c534e.appspot.com",
  messagingSenderId: "736515544249",
  appId: "1:736515544249:web:f0730063c114808d11f768",
  measurementId: "G-JYL257TPST",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
