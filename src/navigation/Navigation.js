import React from "react";
//import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import GuestLayout from "../layouts/GuestLayout";
import "../App.css";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Home from "../pages/Home";
import Header from "../components/Header";
// import * as authActions from "../store/actions/auth";
const Navigation = () => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const dispatch = useDispatch();
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
