import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword ,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZtzJ7ltzRm1MOaOAAnR6LG4yD5wWmbkI",
  authDomain: "ecommerce-wolves.firebaseapp.com",
  projectId: "ecommerce-wolves",
  storageBucket: "ecommerce-wolves.appspot.com",
  messagingSenderId: "484709560728",
  appId: "1:484709560728:web:2b9f4825d121b10cc6fbed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();


//Create user document
async function createUserDocument(user, displayNameEmailPass) {
  try {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      console.log("Document alredy exist!", docSnap);
    } else {
      // Data of the document user
      const {displayName, email} = user;
      const createdAt = new Date();
      const data = {
        displayName: displayName ?? displayNameEmailPass,
        email,
        createdAt
      }
      //Create a document user
      await setDoc(doc(db, "users", user.uid), data);
    }
  } catch (error) {
    console.log(error);
  }
} 


// Make an authentication with google and obtain a user
export function handleSignInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      
      // Create a user document
      createUserDocument(user);

    }).catch((error) => {
      console.log(error);
  });
}

// Create user with email and password
export function createAuthWithEmailAndPassword(email, password, displayName) {
  if (!email || !password || !displayName) return;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    //Create a user document
    createUserDocument(user, displayName);
  })
  .catch((error) => {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return alert('Your account is already registered');
      default:
        return console.error(error);
    }
  });
}

// Handles email and password login
export function handleLoginSubmit(email, password) {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    return user;
    
    
  })
  .catch((error) => {
    switch (error.code) {
      case 'auth/wrong-password':
        return alert('Email and password combination is incorrect');
      case 'auth/user-not-found':
        return alert('user not registered');
      default:
        return console.log(error.code);
    }
  })
}