import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import FlightData from "./components/FlightData"
import StatusCard from "./components/StatusCard";
import Home from "./pages/HomePage/Home";
import Profile from "./profile";
import { requestPermission } from "./firebase/firebase";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function () {
  // useEffect(() => {
  //   requestPermission();
  // }, []);

  // if ('serviceWorker' in navigator) {
  //   window.addEventListener('load', () => {
  //     const swUrl = `${process.env.PUBLIC_URL}/firebase-messaging-sw.js`;
  
  //     navigator.serviceWorker.register(swUrl).then((registration) => {
  //       console.log('Service Worker registered with scope:', registration.scope);
  //     }).catch((error) => {
  //       console.error('Service Worker registration failed:', error);
  //     });
  //   });
  // }

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/table" element={<Table />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/user/:id" element={<UpdateUser />} />
          <Route exact path="/flights" element={<FlightData />} />
          <Route exact path="/status" element={<StatusCard />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </>
    
  );

}
