// firebaseConfig.js
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAf5zR1saHRTf4MKud-26BGCiUpuTkUHcQ",  
    authDomain: "duelbar.firebaseapp.com",
    databaseURL: "https://duelbar-default-rtdb.europe-west1.firebasedatabase.app/",  
    projectId: "duelbar",  
    storageBucket: "duelbar.firebasestorage.app",  
    messagingSenderId: "435010095052",  
    appId: "1:435010095052:web:2bcc79a10d62c82c15ff69"  
  };
  


// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;