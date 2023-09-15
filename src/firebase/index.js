import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDbTCt0aztjyU6yrM4KJ9Pp2tDDsnn7HT0",
  authDomain: "mulaqat-17f29.firebaseapp.com",
  projectId: "mulaqat-17f29",
  storageBucket: "mulaqat-17f29.appspot.com",
  messagingSenderId: "266169600543",
  appId: "1:266169600543:web:f34bd8a4443bd100a1e32a",
  measurementId: "G-4GK2K87ZGE"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
