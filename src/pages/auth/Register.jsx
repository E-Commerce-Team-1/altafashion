import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Helmet } from "react-helmet";
import { InputText, InputEmail, InputPassword } from "../../components/Input";
import ButtonPrimary from "../../components/Button";
import LoginRegister from "../../assets/LoginRegister.png";
import { apiRequest } from "../../utils/apiRequest";

function Register() {
  const navigate = useNavigate();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (fullname && email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [fullname, email, password]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      fullname: fullname,
      email,
      password,
    };
    apiRequest("register", "post", body)
      .then((res) => {
        const { message, data } = res;
        if (data) {
          navigate("/login");
        }
        alert(message);
      })
      .catch((err) => {
        const { message } = err.response.data;
        alert(message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Register | altafashion</title>
        <meta name="description" content="App Description" />
      </Helmet>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="hidden md:flex lg:flex justify-center place-items-center w-full h-screen bg-slate-100">
          <img src={LoginRegister} alt="Logo" className="w-2/4" />
        </div>
        <div className="flex flex-wrap justify-center place-items-center w-full h-screen p-2">
          <div>
            <h1 className="font-serif font-semibold text-primary text-5xl my-9">
              Registration
            </h1>
            <p className="font-medium text-primary text-lg lg:text-xl my-5">
              Manage your account here
            </p>
            <div>
              <label className="text-lg text-secondary">Full Name</label>
              <InputText
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
              />
            </div>
            <br />
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
            <br />
            <ButtonPrimary
              className="bg-primary font-medium text-base text-center text-white m-auto p-4 w-full h-14 max-w-md cursor-pointer"
              label="Register Account"
              onClick={(e) => handleSubmit(e)}
            />
            <p className="text-base text-center text-gray-400 my-9">
              Already have an account?
              <a className="text-primary text-base cursor-pointer">
                <Link to="/login"> Login Here</Link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
