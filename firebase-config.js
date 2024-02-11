import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBqRtjdBccbND3rJ046u4ULamGfsSkR6xE",
    authDomain: "ow-ua-eb53f.firebaseapp.com",
    projectId: "ow-ua-eb53f",
    storageBucket: "ow-ua-eb53f.appspot.com",
    messagingSenderId: "165150994804",
    appId: "1:165150994804:web:c92fc19c22dc78abc73c21",
    measurementId: "G-J2F1GMJDTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
