// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrknvX1eghdk1P5T2uXSl8NTf1GJCET5g",
  authDomain: "myflix-100.firebaseapp.com",
  projectId: "myflix-100",
  storageBucket: "myflix-100.appspot.com",
  messagingSenderId: "1017493337514",
  appId: "1:1017493337514:web:71825ca3e454184f9ee7d3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }