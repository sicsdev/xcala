
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Codeverification from "../../Pages/CodeVerification/Codeverification";
import Success from "../../components/UI/Success";
import Password from "../../Pages/password/Password";
import Login from "../../Pages/login/Login";
import Forgetpassword from "../../Pages/password/Forgetpassword";
import Resetpasswordemail from "../../Pages/password/Resetpasswordemail";
import Firstpage from "../Register/Register";
function Public() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Firstpage/>} />
          <Route exact path="/codeverification" element={<Codeverification/>} />
          <Route exact path="/success" element={<Success/>} />
          <Route exact path="/password" element={<Password/>} />    
          <Route exact path="/login" element={<Login/>} />  
          <Route exact path="/forgetpassword" element={<Forgetpassword/>} />
          <Route exact path="/resetpassword" element={<Resetpasswordemail/>} />  
        </Routes>
    </>
  );
}

export default Public;