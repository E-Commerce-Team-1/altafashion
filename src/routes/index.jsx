import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useCookies } from "react-cookie";

import { TokenContext } from "../utils/context";
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
  const [cookie, setCookie, removeCookie] = useCookies();
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const jwtToken = useMemo(() => ({ token, setToken }), [token]);
  const checkToken = cookie.token;

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { data } = error.response;
      if (
        data === "Missing or malformed JWT" ||
        [401, 403].includes(data.code)
      ) {
        removeCookie("token");
      }
      return Promise.reject(error);
    }
  );

  (function () {
    if (checkToken) {
      const { token } = cookie;
      dispatch(handleAuth(true));
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      dispatch(handleAuth(false));
      delete axios.defaults.headers.common["Authorization"];
    }
  })();
  // useEffect(() => {
  //   const getToken = localStorage.getItem("token");
  //   if (getToken) {
  //     dispatch(handleAuth(true));
  //   } else {
  //     dispatch(handleAuth(false));
  //   }
  //   axios.defaults.headers.common["Authorization"] = getToken
  //     ? `Bearer ${getToken}`
  //     : "";
  // }, [isLoggedin]);

  useEffect(() => {
    const getProduct = localStorage.getItem("addCart");
    if (getProduct) {
      dispatch(setCarts(JSON.parse(getProduct)));
    }
  });

  return (
    <TokenContext.Provider value={jwtToken}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            path="/login"
            element={checkToken ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/register"
            element={checkToken ? <Navigate to="/home" /> : <Register />}
          />
          <Route path="/home" element={checkToken ? <HomePage /> : <Login />} />
          <Route
            path="/myprofile"
            element={checkToken ? <MyProfile /> : <Login />}
          />
          <Route
            path="/myproduct"
            element={checkToken ? <MyProduct /> : <Login />}
          />
          <Route
            path="/detail/:id"
            element={checkToken ? <DetailProduct /> : <Login />}
          />
          <Route
            path="/cart"
            element={checkToken ? <CartDetail /> : <Login />}
          />
          <Route
            path="/checkout"
            element={checkToken ? <Checkout /> : <Login />}
          />
          <Route
            path="/history"
            element={checkToken ? <OrderHistory /> : <Login />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}

export default Index;
