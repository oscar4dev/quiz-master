import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzfXJj6dYq5uE9sFij7OPX58C06ytkGOI",
  authDomain: "quizz-time-717ca.firebaseapp.com",
  projectId: "quizz-time-717ca",
  storageBucket: "quizz-time-717ca.appspot.com",
  messagingSenderId: "254706697616",
  appId: "1:254706697616:web:5af689511cdf5b38ba1f15",
  measurementId: "G-Z3WLTC7LRH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)