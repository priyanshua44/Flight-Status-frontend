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
import SignUp from "./SignUp";
import Login from "./Login";
import Profile from "./profile";
import { requestPermission } from "./firebase";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

export default function () {
  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);

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
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
    
  );

}
