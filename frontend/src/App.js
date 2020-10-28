import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AppList from "./components/AppList/AppList";
import AppDetail from "./components/AppDetail/AppDetail";
import Login from "./components/Login/Login";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/detail/:id">
            <AppDetail />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <AppList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
