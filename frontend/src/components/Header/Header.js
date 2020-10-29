import React from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../../context/appContext";
import { SET_SEARCH } from "../../const/index";

import "./Header.css";

const Header = () => {
  const { dispatch } = useAppState();

  const searchChange = (e) => {
    const { value } = e.target;
    dispatch({
      type: SET_SEARCH,
      payload: value,
    });
  };
  return (
    <Link to="/">
      <div className="header">
        <div className="appName">AppStore</div>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Seach for an application here..."
            onChange={searchChange}
          />
        </div>
        <div className="loginButton">Login</div>
      </div>
    </Link>
  );
};

export default Header;
