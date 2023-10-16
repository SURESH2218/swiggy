import React, { useEffect, useState } from "react";
import "./header.css";
import { logoUrl } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnName, setbtnName] = useState("logout");

  useEffect(() => {
    console.log("useeffect called ");
  }, [btnName]);

  const handleEvent = () => {
    btnName === "login" ? setbtnName("logout") : setbtnName("login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logoUrl} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
           <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/newcomponent">Contact us</Link></li>
          <li>Cart</li>
          <button className="loginButton" onClick={handleEvent}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
