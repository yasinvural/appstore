import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";

import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise
      .then((data) => {
        history.push("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise
      .then((data) => {
        history.push("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => handleEmailChange(e)}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => handlePasswordChange(e)}
        />
        <button
          className="loginButton"
          type="submit"
          onClick={(e) => handleLogin(e)}
        >
          Login
        </button>
        <button
          className="registerButton"
          type="submit"
          onClick={(e) => handleRegister(e)}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
