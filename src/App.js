import "./App.scss";
import React from 'react';
import "./Global/global.scss";
import AuthRoute from "./authRoute";
function App() {
  // useContext(Usercontext)
  return (
    <>
      <AuthRoute/>
    </>
  );
}

export default App;