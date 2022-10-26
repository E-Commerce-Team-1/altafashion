import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-primary text-white py-8 px-32">
      <div className="grid grid-flow-col gap-x-4 lg:gap-x-36 justify-center text-base lg:text-3xl py-8">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Membership</a>
        <a className="link link-hover">Our Story</a>
        <a className="link link-hover">Our Social</a>
      </div>
      <div className="w-full border-b border-white py-8">
        <h1 className="font-serif font-semibold text-center text-lg lg:text-2xl">
          ALTAFASHION
        </h1>
      </div>
      <div>
        <p className="text-sm tracking-wider py-2.5">
          &copy; ALTAFASHION All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
