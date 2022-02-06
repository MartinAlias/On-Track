//import { authentication } from "./Firebase/firebase-config";
//import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import Home from "./Pages/Home";
import Login from "./Pages/Login";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
