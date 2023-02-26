import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "../Components/Auth/Signup";
import Login from "../Components/Auth/Login";
import Photography from "../Components/Products/Photography";
import Admin from "../Components/Admin/sidebar";
import Home from ".././Pages/Home/Home";
import Gaming from "../Components/Products/Gaming"
const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/photography" element={<Photography />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/gaming" element={<Gaming />} />
      </Routes>
    </>
  );
};

export default Allroutes;
