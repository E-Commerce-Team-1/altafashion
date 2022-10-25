import React from "react";
import { WithRouter } from "../utils/Navigation";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="text-center mt-52">
        <h2 className="text-primary font-bold font-serif xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
          404 - Looks like you’re lost.
        </h2>
        <p className="text-secondary mt-8 text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-sm font-normal">
          Maybe this page used to exist or you just spelled something wrong.
          <br />
          Chances are you Spelled something wrong, so you can double check the
          URL?
        </p>
        <Link to={"/home"}>
          <button className="mt-11 text-xs px-14 py-3 text-white font-semibold bg-primary">
            RETURN TO HOME
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default WithRouter(NotFound);
