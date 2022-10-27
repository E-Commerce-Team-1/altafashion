import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Helmet } from "react-helmet";
import { InputEmail, InputPassword } from "../../components/Input";
import ButtonPrimary from "../../components/Button";
import { handleAuth } from "../../utils/redux/reducers/reducer";
import LoginRegister from "../../assets/LoginRegister.png";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [disabled, setDisabled] = useState(true);

  // useEffect(() => {
  //   if (email && password) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //   }
  // }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://immersiveapp.site/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        dispatch(handleAuth(true));
        alert("You're logged in");
        navigate("/home");
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          alert("An invalid client request.");
        } else if (error.response?.status === 500) {
          alert("There is problem on server.");
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Login | altafashion</title>
        <meta name="description" content="App Description" />
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="hidden md:flex lg:flex justify-center place-items-center w-full h-screen bg-slate-100">
          <img src={LoginRegister} alt="Logo" className="w-2/4" />
        </div>
        <div className="flex flex-wrap justify-center place-items-center w-full h-screen p-2">
          <div>
            <h1 className="font-serif font-semibold text-primary text-5xl my-9">
              Sign In Account
            </h1>
            <p className="font-medium text-primary text-lg lg:text-xl my-5">
              Enter your email address to continue.
            </p>
            <div>
              <label className="text-lg text-secondary">Your Email</label>
              <InputEmail
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
            </div>
            <br />
            <div>
              <label className="text-lg text-secondary">Password</label>
              <InputPassword
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <p className="flex justify-end text-base my-6">
              <a className="cursor-pointer">Reset Password</a>
            </p>
            <ButtonPrimary
              className="bg-primary font-medium text-base text-center text-white m-auto p-4 w-full h-14 max-w-md cursor-pointer"
              label="Sign In"
              onClick={handleSubmit}
            />
            <p className="text-base text-center text-gray-400 my-9">
              Don't have an account?
              <a className="text-primary text-base cursor-pointer">
                <Link to="/register"> Register Here</Link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
