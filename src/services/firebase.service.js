// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: 'open-mining.firebaseapp.com',
  projectId: 'open-mining',
  storageBucket: 'open-mining.appspot.com',
  messagingSenderId: '26636248081',
  appId: '1:26636248081:web:200f37fd3cbe37506a7db0',
};

// Initialize Firebase
initializeApp(firebaseConfig);
