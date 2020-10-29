import React, { useState, useEffect } from "react";
import { useAppState } from "../../context/appContext";
import { baseService } from "../../services/index";
import { SET_APPLICATIONS } from "../../const/index";
import Card from "../Card/Card";

import "./AppList.css";

const AppList = () => {
  const { app, dispatch } = useAppState();
  const { applications, search } = app;

  useEffect(() => {
    async function fetchAppList() {
      const res = await baseService.get("/applications");
      dispatch({
        type: SET_APPLICATIONS,
        payload: res.data,
      });
    }
    fetchAppList();
  }, []);

  useEffect(() => {
    async function fetchAppList() {
      const res = await baseService.get(`/search?name=${search}`);
      dispatch({
        type: SET_APPLICATIONS,
        payload: res.data,
      });
    }
    fetchAppList();
  }, [search]);

  return (
    <div className="appList">
      {applications.map((app) => (
        <Card key={app._id} app={app} />
      ))}
    </div>
  );
};

export default AppList;
