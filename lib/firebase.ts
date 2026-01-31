import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAgfMvR9HjzJ7QW2sqXcJYq791grFP8liQ",
  authDomain: "ipo-g-a9db7.firebaseapp.com",
  projectId: "ipo-g-a9db7",
  storageBucket: "ipo-g-a9db7.firebasestorage.app",
  messagingSenderId: "1068626122683",
  appId: "1:1068626122683:web:0f5abeb34e5bffe1fe569e",
  measurementId: "G-X0G4R9BWPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

export default app;
