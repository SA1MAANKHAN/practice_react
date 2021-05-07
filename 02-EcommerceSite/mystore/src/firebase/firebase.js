import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC5j0ftfz4YhipF_wJbNh7xBp2--09qjwg",
  authDomain: "shopereact.firebaseapp.com",
  projectId: "shopereact",
  storageBucket: "shopereact.appspot.com",
  messagingSenderId: "364796431219",
  appId: "1:364796431219:web:a22080ff35d6164159d306",
  measurementId: "G-W7JRMW2VGT",
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData,
      });
    } catch (error) {
      console.log("error creating a user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
