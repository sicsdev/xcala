import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Firstpage from './components/Pages/1';
import Page_Background from './components/Pages/PageBackground';
import "./Global/global.scss"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Firstpage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
