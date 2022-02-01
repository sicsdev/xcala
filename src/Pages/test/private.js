import React from "react";
import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import LetStart from "../lets-start/LetStart";
import ResponsiveAppBar from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import MyAccount from "../my-account/MyAccount";
import Profile from "../profile/Profile";
import Products from "../products/Products";
import Productgraph from "../../components/productgraph/Productgraph";
import ObjectiveInterest from "../objectives-interests/Objectives-Interests"
function Private() {
  const router = useLocation();
  return (
    <>
      {(router.pathname === "/lets-start" ||
        router.pathname === "/profile-investor" ||
        router.pathname === "/my-account" ||
        router.pathname === "/products" || router.pathname === "/objectives-interests") && <ResponsiveAppBar />}
      <Routes>
        <Route exact path="/profile-investor" element={<Profile />} />
        <Route exact path="/lets-start" element={<LetStart />} />
        <Route exact path="/my-account" element={<MyAccount />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/productgraph" element={<Productgraph />} />
        <Route exact path="/objectives-interests" element={<ObjectiveInterest />} />
      </Routes>
      {(router.pathname === "/my-account" || router.pathname === "/products" || router.pathname === "/objectives-interests") && <Footer />}
    </>
  );
}

export default Private;