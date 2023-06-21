import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZ93Dg5X5oAgr8eYVf9fv2oQANu9beD3c",
  authDomain: "green-hawker.firebaseapp.com",
  projectId: "green-hawker",
  storageBucket: "green-hawker.appspot.com",
  messagingSenderId: "168960014966",
  appId: "1:168960014966:web:2c8bec07eaffccbc537d57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
