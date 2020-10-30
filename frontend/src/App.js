import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from "./context/appContext";
import { AuthContext } from "./context/authContext";
import { auth } from "./firebase";
import { initialState, appReducer } from "./reducer/appReducer";
import {
  initialState as authInitialState,
  authReducer,
} from "./reducer/authReducer";
import { SET_ISLOADING, SET_USER } from "./const/index";
import Header from "./components/Header/Header";
import AppList from "./components/AppList/AppList";
import AppDetail from "./components/AppDetail/AppDetail";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [app, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        authDispatch({
          type: SET_USER,
          payload: user,
        });
        authDispatch({
          type: SET_ISLOADING,
          payload: false,
        });
      } else {
        authDispatch({
          type: SET_USER,
          payload: null,
        });
        authDispatch({
          type: SET_ISLOADING,
          payload: false,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      <AppContext.Provider value={{ app, dispatch }}>
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
      </AppContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
