import "./App.scss";
import React,{useContext} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./Pages/Register/Register";
import "./Global/global.scss";
import Codeverification from "./Pages/CodeVerification/Codeverification";
import Success from "./components/UI/Success";
import Password from "./Pages/password/Password";
import Login from "./Pages/login/Login";
import Layout from "./components/Layout/Layout/Layout"
import Forgetpassword from "./Pages/password/Forgetpassword";
import Resetpasswordemail from "./Pages/password/Resetpasswordemail";
import LetStart from "./Pages/lets-start/LetStart";
import MyAccount from "./Pages/my-account/MyAccount";
function AuthRoute() {
  // useContext(Usercontext)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Firstpage/>} />
          <Route exact path="/codeverification" element={<Codeverification/>} />
          <Route exact path="/success" element={<Success/>} />
          <Route exact path="/password" element={<Password/>} />    
          <Route exact path="/login" element={<Login/>} />  
          <Route exact path="/forgetpassword" element={<Forgetpassword/>} />
          <Route exact path="/resetpassword" element={<Resetpasswordemail/>} />  
          <Route exact path="/profile-investor" element={<Layout />} />
          <Route exact path="/my-account" element={<MyAccount/>} />  
          <Route exact path="/lets-start" element={<LetStart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AuthRoute;