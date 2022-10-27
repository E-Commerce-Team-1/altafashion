import React, { useEffect, useState } from "react";
import { WithRouter } from "../utils/Navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import Layout from "../components/Layout";
import Background from "../assets/background.svg";
import Profile from "../assets/profile.png";
import { InputText, InputEmail, InputPassword } from "../components/Input";
import { apiRequest } from "../utils/apiRequest";

const MyProfile = () => {
  const navigate = useNavigate();
  const [token, removeCookie] = useCookies();
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [objSubmit, setObjSubmit] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`https://immersiveapp.site/users`)
      .then((res) => {
        const { data } = res.data;
        setDatas(data);
        console.log(datas);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  const handleEditProfile = async () => {
    setLoading(true);
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    apiRequest("users", "put", objSubmit, "multipart/form-data")
      .then((res) => {
        alert("Update Successfuly");
        setObjSubmit({});
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  function deleteUser() {
    axios
      .delete(`https://immersiveapp.site/users`)
      .then((res) => {
        const { data } = res.data;
        setDatas(data);
        removeCookie("token");
        alert("Account Deleted");
        navigate("/");
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  return (
    <Layout>
      <div>
        <img className="w-screen" src={Background} alt="Background" />
        <div className="flex mx-20">
          <div className="w-44 h-44 -mt-14 rounded-full">
            {/* <img src={Profile} alt="Profile" /> */}
            <img src={datas?.profile} alt="Profile" />
          </div>
          <div className="mt-4 ml-6">
            <h5 className="font-bold text-xl text-primary">
              {datas?.fullname}
            </h5>
            <p className="font-normal text-sm mt-1.5 text-secondary">
              {datas?.email}
            </p>
          </div>
        </div>
      </div>
      <hr className="mx-20 mt-4 mb-6 text-line" />

      <div className="mx-20">
        <h2 className="font-medium text-xl text-primary">Edit Profile</h2>
        <div className="mt-6">
          <div>
            <label className="text-lg text-secondary">Profile Photo</label>
          </div>
          <InputText
            value={objSubmit.profile}
            onChange={(e) => handleChange(e.target.value, "profile")}
            placeholder="Upload your photo"
          />
        </div>
        <div className="mt-6">
          <div>
            <label className="text-lg text-secondary">Full Name</label>
          </div>
          <InputText
            value={objSubmit.fullname}
            onChange={(e) => handleChange(e.target.value, "fullname")}
            placeholder="Edit your name"
          />
        </div>
        <div className="mt-5">
          <div>
            <label className="text-lg text-secondary">Your Email</label>
          </div>
          <InputEmail
            value={objSubmit.email}
            onChange={(e) => handleChange(e.target.value, "email")}
            placeholder="Edit your email"
          />
        </div>
        <div className="mt-5">
          <div>
            <label className="text-lg text-secondary">Password</label>
          </div>
          <InputPassword
            value={objSubmit.password}
            onChange={(e) => handleChange(e.target.value, "password")}
            placeholder="Enter new password"
          />
        </div>
        <div className="mt-10 mb-32 sm:flex sm:justify-between flex-col sm:flex-row">
          <button
            onClick={() => handleEditProfile()}
            className="bg-primary text-white h-12 w-52 text-base font-medium"
          >
            Save Changes
          </button>
          <button
            onClick={() => deleteUser()}
            className="border-[#B3B3B3] border text-secondary h-12 w-52 text-base font-medium"
          >
            Delete Account
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default WithRouter(MyProfile);
