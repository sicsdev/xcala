import React from "react";

import ResponsiveAppBar from "../Header/Header"
import Profile from "../../../Pages/profile/Profile";
import MyAccount from "../../../Pages/my-account/MyAccount";
import Footer from "../Footer/Footer";
function Layout() {
    return (
        <>
            <MyAccount />
            <Footer />
        </>
    );
}

export default Layout;

