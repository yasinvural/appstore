import React, { useEffect } from "react";
import { useAppState } from "../../context/appContext";
import { baseService } from "../../services/index";
import { SET_APPLICATIONS, SET_APP_ISLOADING } from "../../const/index";
import Card from "../Card/Card";

import "./AppList.css";

const AppList = () => {
  const { app, dispatch } = useAppState();
  const { applications, search, isLoading } = app;

  useEffect(() => {
    async function fetchAppList() {
      dispatch({
        type: SET_APP_ISLOADING,
        payload: true,
      });
      const res = await baseService.get("/applications");
      dispatch({
        type: SET_APPLICATIONS,
        payload: res.data,
      });
      dispatch({
        type: SET_APP_ISLOADING,
        payload: false,
      });
    }

    fetchAppList();
  }, []);

  useEffect(() => {
    async function fetchAppList() {
      dispatch({
        type: SET_APP_ISLOADING,
        payload: true,
      });
      const res = await baseService.get(`/search?name=${search}`);
      dispatch({
        type: SET_APPLICATIONS,
        payload: res.data,
      });
      dispatch({
        type: SET_APP_ISLOADING,
        payload: false,
      });
    }
    fetchAppList();
  }, [search]);

  return (
    <div className="appList">
      {applications.map((app) => (
        <Card key={app._id} app={app} />
      ))}
      {isLoading && <div className="loader"></div>}
    </div>
  );
};

export default AppList;
