import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAm6ruB3RodCQuZ_MiZGvrmG2qtMEhBjGg",
    authDomain: "chirp-4f737.firebaseapp.com",
    projectId: "chirp-4f737",
    storageBucket: "chirp-4f737.appspot.com",
    messagingSenderId: "841653784091",
    appId: "1:841653784091:web:a2aacffb1d71e365dcf2be",
    measurementId: "G-FF9X52RXEE"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};