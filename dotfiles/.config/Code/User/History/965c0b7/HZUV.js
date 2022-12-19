import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const navigate = useNavigate();

  console.log(isLoggedIn);

  useEffect(() => {
    if (isLoggedIn == false) {
      console.log("in here");
      navigate("/login");
    }
  }, [isLoggedIn]);

  return <div>Dashboard</div>;
};

export default Dashboard;
