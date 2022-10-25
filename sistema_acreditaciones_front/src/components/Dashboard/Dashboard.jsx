import React from "react";
import SideBar from "../SideBar/SideBar";
import Aside from "../Aside/Aside";
import Error from "../Error/Error";
const Dashboard = () => {
  const tk = localStorage.getItem("token");

  console.log("TKKK", tk);

  if (tk) {
    return (
      <div className="w-full">
        <SideBar></SideBar>
        <Aside></Aside>
        <h1>Dashboard</h1>
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <Error></Error>
      </div>
    );
  }
};

export default Dashboard;
