import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBg508sB_fNydXpHE-d4zRd95_Ezxzixt4",
  authDomain: "helps-8b70d.firebaseapp.com",
  projectId: "helps-8b70d",
  storageBucket: "helps-8b70d.appspot.com",
  messagingSenderId: "147279777970",
  appId: "1:147279777970:web:792486ecb380abda1639ab"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore();