const { initializeApp } = require('firebase-admin/app');
var admin = require("firebase-admin");
var serviceAccount = require("path/to/serviceAccountKey.json");

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDTfR0xsQ_zAgH2CIk_WqE4iI2ZSyd6V08",
  authDomain: "web-ecommerce-node.firebaseapp.com",
  projectId: "web-ecommerce-node",
  storageBucket: "web-ecommerce-node.appspot.com",
  messagingSenderId: "207325026181",
  appId: "1:207325026181:web:f2a274c03bf7f643f5d6ec",
  measurementId: "G-3GKRGS6F1T"
});



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = initializeApp(firebaseConfig);