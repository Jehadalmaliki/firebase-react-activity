import "./App.css";


import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/SignUp/Signup";
import Profile from "./components/Profile/Profile";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./util/firebase";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default App;
