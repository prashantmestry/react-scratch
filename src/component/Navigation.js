import React from "react";
import { NavLink } from "react-router-dom";
import pageScreen from "../../assets/pageScreen.jpg";
//
const Navigation = () => {
  return (
    <div className="bg-slate-400 p-1 flex justify-between items-center">
      <nav className="mx-4">
        <NavLink className="mr-5" to="/">
          Home
        </NavLink>
        <NavLink className="mr-5" to="/about">
          About
        </NavLink>
        <NavLink className="mr-5" to="/contact">
          Contact
        </NavLink>
      </nav>

      <div>
        <img src={pageScreen} className="w-[100px]" />
      </div>
    </div>
  );
};

export default Navigation;
