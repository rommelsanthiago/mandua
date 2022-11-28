import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = initializeApp({
    apiKey: import.meta.env.VITE_API_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_API_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_API_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_API_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_API_FIREBASE_MESSEAGINGSENDERID,
    appId: import.meta.env.VITE_API_FIREBASE_APPID
});

export const storage = getFirestore(firebaseConfig);
export const dataBase = getStorage(firebaseConfig);
