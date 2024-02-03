import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "casamientomarijuan.firebaseapp.com",
    projectId: "casamientomarijuan",
    storageBucket: "casamientomarijuan.appspot.com",
    messagingSenderId: "659420624465",
    appId: "1:659420624465:web:1eb7f45b6cd5c2110bea70",
    measurementId: "G-PJVT4DX9TH"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);