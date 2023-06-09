import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword ,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  writeBatch, 
  getDocs 
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDERID,
  appId: import.meta.env.VITE_APP_ID
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

    if (!docSnap.exists()) {
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


// Make an authentication with google and obtain the user
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

  return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    //Create a user document
    createUserDocument(user, displayName);
    return user;
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

// Sign out user auth
export function signOutUser() {
  signOut(auth).then()
  .catch((error) => {
    console.error(error);
  });
}

// auth changed lister for users
export function authStateChangedListener(callback) {
  return onAuthStateChanged(auth, callback);
}

// export async function addCategoriesDocumentsInCollections(categories) {
//   const batch = writeBatch(db);
//   const collectionRef = collection(db, "categories");

//   categories.forEach(categorie => {
//     const documentRef = doc(collectionRef, categorie.title);
//     batch.set(documentRef, categorie)
//     })

//   // Commit the batch
//   await batch.commit();

//   console.log('successful operation');
// }

export async function getCategoriesAndDocuments() {
  // Get a reference to the categories collection
  const documentsRef = collection(db, "categories");

  // Get all documents in the collection
  const snapshot = await getDocs(documentsRef);
  return snapshot.docs.map(doc => doc.data())
}
