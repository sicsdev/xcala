import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./components/Pages/Register/Register";
import Layout from "./components/Layout/Layout/Layout";
import "./Global/global.scss";
import Usercontext from "./context/userContext";
import Usercontextprovider from "./context/Usercontextprovider";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Usercontextprovider value = {null}> */}
            <Route exact path="/Login" element={<Firstpage />} />
            <Route exact path="/" element={<Layout />} />
          {/* </Usercontextprovider>   */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
