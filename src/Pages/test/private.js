import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LetStart from "../lets-start/LetStart";
import ResponsiveAppBar from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import MyAccount from "../my-account/MyAccount";
import Profile from "../profile/Profile";
import Products from "../products/Products";
import Productdetailpage from "../products/Productdetailpage";
import ObjectiveInterest from "../objectives-interests/Objectives-Interests"
import NewUser from "../new-user/New-User";
import CompleteRegistration from "../complete-registration/Complete-Registration";
import Simulator from "../products/Simulator";
import Recurringdash from "../RecurringDash/Recurringdash";
import ConfirmRequest from "../confirm-request/Confirm-Request";
import RiskProfile from "../risk-profile/Risk-Profile";
import GoalInterest from "../goal-interest/Goal-Interest";
import ConfigureNotification from "../configure-notifcation/Configure-Notification";
import MyNotification from "../my-notifcation/My-Notification";
import Myinvestmentdetail from "../myinvestmentdetail/Myinvestmentdetail";

function Private() {
  const router = useLocation();
  return (
    <>
      {(router.pathname === "/lets-start" ||
        router.pathname === "/profile-investor" ||
        router.pathname === "/my-account" ||

        router.pathname === "/products" || router.pathname === "/objectives-interests"|| router.pathname === "/new-user"|| router.pathname === "/complete-registration"|| router.pathname === "/simulator"|| router.pathname === "/product-detail" || router.pathname === "/recurring-dash" || router.pathname === "/confirm-request" || router.pathname === "/risk-profile" || router.pathname === "/my-goal-interest" || router.pathname === "/configure-notification" || router.pathname === "/my-notification" || router.pathname === "/my-investment") && <ResponsiveAppBar />}

      <Routes>
        <Route exact path="/profile-investor" element={<Profile />} />
        <Route exact path="/lets-start" element={<LetStart />} />
        <Route exact path="/my-account" element={<MyAccount />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product-detail" element={<Productdetailpage />} />
        <Route exact path="/objectives-interests" element={<ObjectiveInterest />} />
        <Route exact path="/new-user" element={<NewUser />} />
        <Route exact path="/complete-registration" element={<CompleteRegistration />} />
        <Route exact path="/simulator" element={<Simulator />} />
        <Route exact path="/recurring-dash" element={<Recurringdash />} />
         <Route exact path="/confirm-request" element={<ConfirmRequest />} />
        <Route exact path="/risk-profile" element={<RiskProfile />} />
        <Route exact path="/my-goal-interest" element={<GoalInterest />} />
        <Route exact path="/configure-notification" element={<ConfigureNotification />} />
        <Route exact path="/my-notification" element={<MyNotification />} />
        <Route exact path="/my-investment" element={<Myinvestmentdetail />} />

      </Routes>

      {(router.pathname === "/my-account" || router.pathname === "/products" || router.pathname === "/objectives-interests"|| router.pathname === "/new-user"|| router.pathname === "/complete-registration"|| router.pathname === "/simulator"|| router.pathname === "/product-detail" || router.pathname === "/recurring-dash" || router.pathname === "/confirm-request" || router.pathname === "/risk-profile" || router.pathname === "/my-goal-interest" || router.pathname === "/configure-notification" || router.pathname === "/my-notification" || router.pathname === "/my-investment") && <Footer />}
    </>
  );
}

export default Private;
