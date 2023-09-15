import React from "react";
import "./header.css";
import { logoUrl } from "../utils/constants";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logoUrl} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
