import React from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../../context/appContext";
import { useAuthState } from "../../context/authContext";
import { SET_SEARCH } from "../../const/index";

import "./Header.css";

const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const Header = () => {
  const { dispatch } = useAppState();
  const { authState } = useAuthState();

  const searchChange = debounce((e) => {
    const { value } = e.target;
    dispatch({
      type: SET_SEARCH,
      payload: value,
    });
  }, 500);

  return (
    <div className="header">
      <Link to="/">
        <div className="appName">AppStore</div>
      </Link>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Seach for an application here..."
          onChange={searchChange}
        />
      </div>
      <div className="loginButton">{authState.user ? "Logout" : "Login"}</div>
    </div>
  );
};

export default Header;
