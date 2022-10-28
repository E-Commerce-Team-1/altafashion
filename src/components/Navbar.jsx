import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";
import {
  RiAccountCircleLine,
  RiShoppingCart2Line,
  RiArrowDropRightLine,
  RiBarChartHorizontalLine,
  RiArrowDropDownFill,
} from "react-icons/ri";

function Navbar() {
  const [removeCookie] = useCookies();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("token");
    navigate("/");
  };

  return (
    <div className="navbar border border-b border-x-0 border-gray-300 bg-white px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden ">
            <RiBarChartHorizontalLine className="w-6 h-6" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 bg-white border border-primary w-52"
          >
            <li>
              <a>Placeholder SearchBar</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                <RiAccountCircleLine className="w-6 h-6" />
                <RiArrowDropRightLine className="w-6 h-6" />
              </a>
              <ul className="menu p-2 bg-white border border-black">
                <li>
                  <a>
                    <Link to="/myprofile">My Profile</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to="/myproduct">My Product</Link>
                  </a>
                </li>
                <hr />
                <li>
                  <a onClick={() => handleLogout()}>Logout</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                <Link to="/cart">
                  <RiShoppingCart2Line className="w-6 h-6" />{" "}
                </Link>
              </a>
            </li>
          </ul>
        </div>
        <a className="normal-case font-serif font-semibold text-2xl">
          {" "}
          <Link to="/home">ALTAFASHION</Link>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li tabIndex={0}>
            <a>
              <RiAccountCircleLine className="w-6 h-6" />
              <RiArrowDropDownFill className="w-6 h-6" />
            </a>
            <ul className="rounded-none border menu menu-compact dropdown-content bg-base-100 border-black">
              <li>
                <a>
                  <Link to="/myprofile">My Profile</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/myproduct">My Product</Link>
                </a>
              </li>
              <hr />
              <li>
                <a onClick={() => handleLogout()}>Logout</a>
              </li>
            </ul>
          </li>
          <li>
            <a>
              <Link to="/cart">
                <RiShoppingCart2Line className="w-6 h-6" />
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
