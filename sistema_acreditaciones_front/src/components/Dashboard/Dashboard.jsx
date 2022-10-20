import React from "react";
import SideBar from "../SideBar/SideBar";
import Aside from "../Aside/Aside";
const Dashboard = () => {
  return (
    <div className="w-full">
      <SideBar></SideBar>
      <Aside></Aside>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
