import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../pages/Admin";
import Cart from "../pages/Cart";
import GamingCategory from "../pages/GamingCategory";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import PhotographyCategory from "../pages/PhotographyCategory";
import Search from "../pages/Search";
import SignupPage from "../pages/SignupPage";
import Photography from "../pages/Photography";
import Gaming from "../pages/Gaming";
import Computer from "../pages/Computer";
import Video from "../pages/Video";
import Drone from "../pages/Drone";
import AddressPage from "../components/Cart/address";
import PaymentPage from "../components/Cart/payment";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/gaming-category" element={<GamingCategory />} />
      <Route path="/photography-category" element={<PhotographyCategory />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search" element={<Search />} />
      <Route path="/gaming" element={<Gaming />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/computer" element={<Computer />} />
      <Route path="/video" element={<Video />} />
      <Route path="/drone" element={<Drone />} />
      <Route path="/address" element={<AddressPage/>}/>
      <Route path="/payment" element={<PaymentPage/>}/>

    </Routes>
  );
};

export default AppRoutes;
