import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./components/Pages/Register/Register";
import "./Global/global.scss";
import Codeverification from "./components/Pages/CodeVerification/Codeverification";
import Success from "./components/UI/Success";
import Password from "./components/Pages/Password/Password";
import Login from "./components/Pages/Login/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Firstpage/>} />
          <Route exact path="/codeverification" element={<Codeverification/>} />
          <Route exact path="/success" element={<Success/>} />
          <Route exact path="/password" element={<Password/>} />    
          <Route exact path="/login" element={<Login/>} />        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
