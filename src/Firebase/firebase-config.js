import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//import { Link } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyBiQYd5QfeMBWrRZRmMRtpCxQ5T33TEyU4",
  authDomain: "on-track-one.firebaseapp.com",
  projectId: "on-track-one",
  storageBucket: "on-track-one.appspot.com",
  messagingSenderId: "284485229187",
  appId: "1:284485229187:web:f890082d4a5c8a51d199b6"
};


  const app = initializeApp(firebaseConfig);

  export const authentication = getAuth(app);

  const provider = new GoogleAuthProvider()


  export const signInWithGoogle = () => {
    signInWithPopup(authentication, provider).then((result) => {
      const name = result.user.displayName
      const email = result.user.email
      const profilePic = result.user.photoURL

      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("profilePic", profilePic)

      

      console.log(result);
    }).catch((error) => {
      console.log(error);
    })
  }