// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";   // 👈 import auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCljyiFq9caUXqias24lDVY53oRlRPWZXg",
  authDomain: "chitchat-de6db.firebaseapp.com",
  projectId: "chitchat-de6db",
  storageBucket: "chitchat-de6db.firebasestorage.app",
  messagingSenderId: "582360800020",
  appId: "1:582360800020:web:d54ceb8e4d9c9be905c001",
  measurementId: "G-9GKRC0WZZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Auth and export it
export const auth = getAuth(app);

export default app;
