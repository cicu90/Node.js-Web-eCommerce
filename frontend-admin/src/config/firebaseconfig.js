// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDTfR0xsQ_zAgH2CIk_WqE4iI2ZSyd6V08",
  authDomain: "web-ecommerce-node.firebaseapp.com",
  projectId: "web-ecommerce-node",
  storageBucket: "web-ecommerce-node.appspot.com",
  messagingSenderId: "207325026181",
  appId: "1:207325026181:web:f2a274c03bf7f643f5d6ec",
  measurementId: "G-3GKRGS6F1T"
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }