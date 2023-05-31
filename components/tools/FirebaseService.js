import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYpYi6nhMXIXpAYwwWSjlEbHo57XYkkrM",
  authDomain: "nbcs-a7bc7.firebaseapp.com",
  projectId: "nbcs-a7bc7",
  storageBucket: "nbcs-a7bc7.appspot.com",
  messagingSenderId: "873249352524",
  appId: "1:873249352524:web:786134eae2f0b09f90fde9",
  measurementId: "G-5LNYS8BGJX",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
