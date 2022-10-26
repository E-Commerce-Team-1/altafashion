import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { handleAuth } from "../utils/redux/reducers/reducer";

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

const Index = () => {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={isLoggedin ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/register"
          element={isLoggedin ? <Navigate to="/home" /> : <Register />}
        />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/myprofile"
          element={isLoggedin ? <MyProfile /> : <Navigate to="/login" />}
        />
        <Route
          path="/myproduct"
          element={isLoggedin ? <MyProduct /> : <Navigate to="/login" />}
        />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route
          path="/cart"
          element={isLoggedin ? <CartDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="/checkout"
          element={isLoggedin ? <Checkout /> : <Navigate to="/login" />}
        />
        <Route
          path="/history"
          element={isLoggedin ? <OrderHistory /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
