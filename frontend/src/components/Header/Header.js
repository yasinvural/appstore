import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <Link to="/">
      <div className="header">
        <div className="appName">AppStore</div>
        <div className="searchContainer">
          <input type="text" placeholder="Seach for an application here..." />
        </div>
        <div className="loginButton">Login</div>
      </div>
    </Link>
  );
};

export default Header;
