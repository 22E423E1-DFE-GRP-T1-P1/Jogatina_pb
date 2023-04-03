import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyCsRE9UQOLS8OtuvEUjL7_SlsmZPV-d-Bg",
    authDomain: "jogatina-2a7a2.firebaseapp.com",
    databaseURL: "https://jogatina-2a7a2-default-rtdb.firebaseio.com",
    projectId: "jogatina-2a7a2",
    storageBucket: "jogatina-2a7a2.appspot.com",
    messagingSenderId: "866150906247",
    appId: "1:866150906247:web:7649251def3a0f5417bb22"
  };

  
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }
const db = getFirestore(app);

export { db }


