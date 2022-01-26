import React from "react";
import "react-phone-number-input/style.css";
import ResponsiveAppBar from "../Header/Header"
import Profile from "../../Pages/profile/Profile";
import Styles from "../Layout/Layout.module.scss"
function Layout() {
    return (
        <div className={Styles.layout_main}>
            < ResponsiveAppBar />
            <Profile />
        </div>
    );
}

export default Layout;

