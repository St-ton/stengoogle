import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import logo from "./logo.jpg";
import Search from "./Search";

const Navbar = () => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
    <div className="flex justify-between items-center space-x-5 w-screen ">
      <Logo />
    </div>
    <Search />
  </div>
);

export default Navbar;
