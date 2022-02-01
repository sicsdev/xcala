
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Codeverification from "../CodeVerification/Codeverification";
import Success from "../../components/UI/Success";
import Password from "../Password/Password";
import Login from "../Login/Login";
import Forgetpassword from "../Password/Forgetpassword";
import Resetpasswordemail from "../Password/Resetpasswordemail";
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