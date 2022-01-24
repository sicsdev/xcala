import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./components/Pages/Register/Register";
import "./Global/global.scss";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Firstpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
