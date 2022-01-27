import "./App.scss";
import React,{useContext} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./components/Pages/Register/Register";
import "./Global/global.scss";
import Codeverification from "./components/Pages/CodeVerification/Codeverification";
import Success from "./components/UI/Success";
import Password from "./components/Pages/Password/Password";
import Login from "./components/Pages/Login/Login";
import Layout from "./components/Layout/Layout/Layout"
import Forgetpassword from "./components/Pages/Password/Forgetpassword";
import Resetpasswordemail from "./components/Pages/Password/Resetpasswordemail";
import LetStart from "./components/Pages/lets-start/LetStart";

function App() {
  // useContext(Usercontext)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Firstpage/>} />
          <Route exact path="/codeverification" element={<Codeverification/>} />
          <Route exact path="/success" element={<Success/>} />
          <Route exact path="/password" element={<Password/>} />    
          <Route exact path="/login" element={<Login/>} />  
          <Route exact path="/profile-investor" element={<Layout/>} />  
          <Route exact path="/forgetpassword" element={<Forgetpassword/>} />
          <Route exact path="/resetpassword" element={<Resetpasswordemail/>} />  
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;