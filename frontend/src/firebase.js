import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2HT8CZxzD3M2B91NohIcOAn7qWRvS4fI",
  authDomain: "appstore-8cc02.firebaseapp.com",
  databaseURL: "https://appstore-8cc02.firebaseio.com",
  projectId: "appstore-8cc02",
  storageBucket: "appstore-8cc02.appspot.com",
  messagingSenderId: "229773543053",
  appId: "1:229773543053:web:c4a361005330b8597c04c4",
  measurementId: "G-V4TVMJDR50",
});

const auth = firebase.auth();

export { auth };
