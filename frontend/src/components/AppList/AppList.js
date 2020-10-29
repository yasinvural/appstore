import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { baseService } from "../../services/index";

import "./AppList.css";

const AppList = () => {
  const [appList, setAppList] = useState([]);

  useEffect(() => {
    async function fetchAppList() {
      const res = await baseService.get("/applications");
      setAppList(res.data);
    }
    fetchAppList();
  }, []);

  return (
    <div className="appList">
      {appList.map((app) => (
        <Card key={app._id} app={app} />
      ))}
    </div>
  );
};

export default AppList;
