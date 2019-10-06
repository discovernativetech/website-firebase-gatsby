const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBSGia0iFv_pVx10kzEbLuer5CkoweN8B8",
  authDomain: "discovernative-web.firebaseapp.com",
  databaseURL: "https://discovernative-web.firebaseio.com",
  projectId: "discovernative-web",
  storageBucket: "discovernative-web.appspot.com",
  messagingSenderId: "555829801523",
  appId: "1:555829801523:web:0746511d3d2140393c6946",
  measurementId: "G-JMBBJBVBB0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;