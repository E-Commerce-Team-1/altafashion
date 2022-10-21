import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import HomePage from "../pages/HomePage";
import MyProfile from "../pages/MyProfile";
import MyProduct from "../pages/MyProduct";
import CartDetail from "../pages/CartDetail";
import DetailProduct from "../pages/DetailProduct";
import Checkout from "../pages/Checkout";
import OrderHistory from "../pages/OrderHistory";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myproduct" element={<MyProduct />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="/cart" element={<CartDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/history" element={<OrderHistory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
