import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllOrder = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated == "false") {
      navigate("/errorpage");
    }
  }, []);

  return <div>
    <Orde
  </div>;
};

export default AllOrder;
