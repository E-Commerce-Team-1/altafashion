import React from "react";
import "../styles/index.css";

function Layout({ children }) {
  return (
    <div>
      {/* Navbar */}
      <div className="w-full h-full">{children}</div>
      {/* footer */}
    </div>
  );
}

export default Layout;
