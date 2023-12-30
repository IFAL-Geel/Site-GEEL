import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfzMaYtEKB4kNTAyk6tt9aG00dLnHupHU",
    authDomain: "geel-site.firebaseapp.com",
    projectId: "geel-site",
    storageBucket: "geel-site.appspot.com",
    messagingSenderId: "919586036372",
    appId: "1:919586036372:web:c3840fc553002302967281",
    measurementId: "G-5BJP2XKZXZ"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)