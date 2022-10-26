import React from "react";
import "../styles/index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
