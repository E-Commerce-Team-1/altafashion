import React from "react";
import { WithRouter } from "../utils/Navigation";

import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import CardProduct from "../components/CardProduct";
import ButtonPrimary from "../components/Button";
import hero from "../assets/hero.png";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | altafashion</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Layout>
        {/* Jumbotron */}
        <div className="hero bg-white mx-4">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={hero} alt="hero" className="mr-36" />
            <div className="w-full h-full ml-20 mr-32">
              <h1 className="font-serif font-bold text-primary text-6xl my-2.5">
                Color your days and make your story
              </h1>
              <p className="w-auto text-secondary text-lg my-2.5">
                Don't worry about your appearance today, we are here to provide
                what you need to color your day and let's make a beatiful story
                today.
              </p>
              <ButtonPrimary
                className="flex justify-center items-center bg-primary text-base text-white w-36 h-12 cursor-pointer my-9"
                label="Shop Now"
              />
            </div>
          </div>
        </div>

        {/* Header Product */}
        <div className="flex justify-center mt-36 mb-4 mx-20 p-4 border border-x-0 border-t-gray-300 border-b-gray-300 font-serif font-semibold text-primary text-3xl">
          <h1>Our Best Styles</h1>
        </div>

        {/* Category */}
        <div className="flex flex-wrap w-full gap-2 mx-20">
          <ButtonPrimary
            className="w-32 h-10 flex justify-center items-center text-base font-medium border border-gray-300  active:bg-primary active:text-white cursor-pointer"
            label="All"
          />
          <ButtonPrimary
            className="w-32 h-10 flex justify-center items-center text-base font-medium border border-gray-300  active:bg-primary active:text-white cursor-pointer"
            label="Topwear"
          />
          <ButtonPrimary
            className="w-32 h-10 flex justify-center items-center text-base font-medium border border-gray-300  active:bg-primary active:text-white cursor-pointer"
            label="Footwear"
          />
          <ButtonPrimary
            className="w-32 h-10 flex justify-center items-center text-base font-medium border border-gray-300  active:bg-primary active:text-white cursor-pointer"
            label="Bottomwear"
          />
          <ButtonPrimary
            className="w-32 h-10 flex justify-center items-center text-base font-medium border border-gray-300  active:bg-primary active:text-white cursor-pointer"
            label="Accessories"
          />
        </div>

        {/* list products */}
        <div className="mx-20">
          <CardProduct />
        </div>
        {/* Pagination */}
        <div className="flex justify-end gap-4 mx-20 my-11 mb-32">
          {/* left */}
          <div className="border border-gray-300 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          {/* right */}
          <div className="border border-gray-300 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </Layout>
      ;
    </>
  );
}

export default WithRouter(HomePage);
