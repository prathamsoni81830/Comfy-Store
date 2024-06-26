import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXxB8_ihtEI5-LbTKpOwpImkPanwIewWA",
  authDomain: "geekster-ecom-9dc5d.firebaseapp.com",
  projectId: "geekster-ecom-9dc5d",
  storageBucket: "geekster-ecom-9dc5d.appspot.com",
  messagingSenderId: "642447272852",
  appId: "1:642447272852:web:e783fd4354ca3e88393d81"
};

const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);