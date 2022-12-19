import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const navigate = useNavigate();

  console.log(isLoggedIn);

  if (!isLoggedIn) {
    console.log("in here");
    navigate("/login");
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
