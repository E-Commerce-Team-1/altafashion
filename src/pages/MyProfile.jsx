import React from "react";
import { WithRouter } from "../utils/Navigation";

import Layout from "../components/Layout";
import Background from "../assets/background.svg";
import Profile from "../assets/profile.png";
import { InputText, InputEmail, InputPassword } from "../components/Input";

const MyProfile = () => {
  return (
    <Layout>
      <div>
        <img className="w-screen" src={Background} alt="Background" />
        <div className="flex mx-20">
          <div className="w-44 h-44 -mt-14 rounded-full">
            <img src={Profile} alt="Profile" />
          </div>
          <div className="mt-4 ml-6">
            <h5 className="font-bold text-xl text-primary">John Doe</h5>
            <p className="font-normal text-sm mt-1.5 text-secondary">
              johndoe@mail.id
            </p>
          </div>
        </div>
      </div>
      <hr className="mx-20 mt-4 mb-6 text-line" />

      <div className="mx-20">
        <h2 className="font-medium text-xl text-primary">Edit Profile</h2>
        <div className="mt-6">
          <div>
            <label className="text-lg text-secondary">Full Name</label>
          </div>
          <InputText
            // value={fullname}
            // onChange={(e) => setFullName(e.target.value)}
            placeholder="Edit your name"
          />
        </div>
        <div className="mt-5">
          <div>
            <label className="text-lg text-secondary">Your Email</label>
          </div>
          <InputEmail
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Edit your email"
          />
        </div>
        <div className="mt-5">
          <div>
            <label className="text-lg text-secondary">Password</label>
          </div>
          <InputPassword
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
          />
        </div>
        <div className="mt-10 mb-32 sm:flex sm:justify-between flex-col sm:flex-row">
          <button
            // onClick={() => handleUpdateProfile()}
            className="bg-primary text-white h-12 w-52 text-base font-medium"
          >
            Save Changes
          </button>
          <button
            // onClick={() => handleDeleteAccount()}
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
