import "./App.scss";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import "./Global/global.scss";
import Public from "./Pages/test/public";
import Private from "./Pages/test/private";
function AuthRoute() {
  return (
    <>
      <BrowserRouter>
        <Private /> 
        <Public />
      </BrowserRouter>
    </>
  );
}

export default AuthRoute;