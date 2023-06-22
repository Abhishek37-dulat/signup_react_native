// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsFcg-G7506ckV7dLQ6V6uCFFXV4tNvgA",
  authDomain: "react-native-app-97d90.firebaseapp.com",
  projectId: "react-native-app-97d90",
  storageBucket: "react-native-app-97d90.appspot.com",
  messagingSenderId: "532059105146",
  appId: "1:532059105146:web:43162a4e33191fdaf898c3",
};

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseApp);
onAuthStateChanged(async (auth, user) => {
  const result = await getRedirectResult(auth);
  if (result === null || provider.credentialFromResult(result) === null) {
    return null;
  }
  return result;
});

export { auth };
