import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { handleAuth, setCarts } from "../utils/redux/reducers/reducer";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import HomePage from "../pages/HomePage";
import MyProfile from "../pages/MyProfile";
import MyProduct from "../pages/MyProduct";
import CartDetail from "../pages/CartDetail";
import DetailProduct from "../pages/DetailProduct";
import Checkout from "../pages/Checkout";
import OrderHistory from "../pages/OrderHistory";
import NotFound from "../pages/NotFound";

axios.defaults.baseURL = "https://immersiveapp.site/";

function Index() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.data.isLoggedin);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      dispatch(handleAuth(true));
    } else {
      dispatch(handleAuth(false));
    }
    axios.defaults.headers.common["Authorization"] = getToken
      ? `Bearer ${getToken}`
      : "";
  }, [isLoggedin]);

  useEffect(() => {
    const getProduct = localStorage.getItem("addCart");
    if (getProduct) {
      dispatch(setCarts(JSON.parse(getProduct)));
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={isLoggedin ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/register"
          element={isLoggedin ? <Navigate to="/home" /> : <Register />}
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myproduct" element={<MyProduct />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="/cart" element={<CartDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/history" element={<OrderHistory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
