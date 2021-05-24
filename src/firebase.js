// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDwxlt9Rep4-tUms2s3mZJZmMsLNPjqt3s",
        authDomain: "todo-list-test-2d997.firebaseapp.com",
        projectId: "todo-list-test-2d997",
        storageBucket: "todo-list-test-2d997.appspot.com",
        messagingSenderId: "263652033491",
        appId: "1:263652033491:web:ca58bac0afdd4376a0a526",
        measurementId: "G-9C360HZE5Q"
  });

  const db = firebaseApp.firestore();

  export default db;