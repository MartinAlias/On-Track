import "./Login.css";
import React from "react";
import { authentication, signInWithGoogle } from "../Firebase/firebase-config";
import { useNavigate } from "react-router-dom";


function Login() {  
    const navigate = useNavigate();

    authentication.onAuthStateChanged(user => {
        if (user){
            navigate("/home");
        }
        console.log(user)
    })
  
  return (
   <div className="LoginDiv">
        <button className= "google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
   </div>
  );
}

export default Login;
