
import React from 'react';
import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import Layout from "../../components/Layout/Layout/Layout"
import LetStart from "../lets-start/LetStart";
import ResponsiveAppBar from "../../components/Layout/Header/Header";
import MyAccount from "../my-account/MyAccount";
import Profile from '../profile/Profile';
function Private() {
    const router = useLocation()
    return (
        <>
            {router.pathname == "/lets-start" || router.pathname == "/profile-investor" || router.pathname == "/my-account" && (
                <ResponsiveAppBar />)}
            <Routes>
                <Route exact path="/profile-investor" element={<Profile />} />
                <Route exact path="/lets-start" element={<LetStart />} />
                <Route exact path="/my-account" element={<Layout />} />
            </Routes>
        </>
    );
}

export default Private;