import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Nav() {
  return (
    <div className="nav">
      <div className="nav--right">
        <NavLink to="/">Tripo Games</NavLink>
      </div>
      <div className="nav--left">
        <NavLink to="/" exact="true">
          Home
        </NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/about">About</NavLink>
        <HashLink smooth to="/#contact">
          Contact
        </HashLink>
      </div>
    </div>
  );
}

export default Nav;
