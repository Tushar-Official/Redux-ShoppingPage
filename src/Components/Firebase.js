import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyC9tYH6Qlh_8BzXDAfoIIKHOaf7Eq7kHIk",
  authDomain: "taragini-fc0ae.firebaseapp.com",
  databaseURL: "https://taragini-fc0ae-default-rtdb.firebaseio.com",
  projectId: "taragini-fc0ae",
  storageBucket: "taragini-fc0ae.appspot.com",
  messagingSenderId: "1066668880898",
  appId: "1:1066668880898:web:ffd77c62d4fc089e5de31b",
  measurementId: "G-DTESFKTK3Z"
};


  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
export default db;