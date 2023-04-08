import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCJknpLIag4nvh3p2gQGUt8m0ANXyvzPz0',
  authDomain: 'react-chat-54535.firebaseapp.com',
  projectId: 'react-chat-54535',
  storageBucket: 'react-chat-54535.appspot.com',
  messagingSenderId: '412369458186',
  appId: '1:412369458186:web:18e4f38c1b8d5692737bf3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { Auth, Provider, db };
