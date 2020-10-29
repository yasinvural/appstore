import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AppList from "./components/AppList/AppList";
import AppDetail from "./components/AppDetail/AppDetail";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/detail/:id">
            <AppDetail />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
            <Footer />
          </Route>
          <Route path="/">
            <AppList />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
