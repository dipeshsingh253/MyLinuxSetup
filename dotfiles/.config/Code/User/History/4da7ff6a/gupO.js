import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import UserService from "../../services/UserService";
const Test = () => {
  const toggleMenu = () => {
    console.log("hello");
    const menu = document.getElementById("navbar-default");
    console.log(menu);
    menu.classList.toggle("hidden");
  };
  const [action, setAction] = useState("");
  const isLoggedin = localStorage.getItem("isLoggedIn");

  console.log(typeof isLoggedin);
  const navigate = useNavigate();
  useEffect(() => {
    const updateAction = () => {
      if (isLoggedin == "true") {
        setAction("Logout");
      } else if (isLoggedin == "false") {
        setAction("Login");
      }
    };

    updateAction();
  }, []);

  const logOut = () => {
    if (isLoggedin == "false") {
      console.log("hello");
      navigate("/login");
      return;
    }
    UserService.logOutUser()
      .then((res) => {
        console.log(res);

        swal({
          title: res.data,
          icon: "success",
        });

        localStorage.setItem("isLoggedIn", false);
        localStorage.setItem("token", null);
        localStorage.setItem("isAuthenticated", false);
      })
      .catch((err) => {
        swal({
          title: err.response.data.message,
          icon: "error",
        });
        console.log(err);
      });
  };

  return (

  );
};

export default Test;
