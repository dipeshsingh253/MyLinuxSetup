import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import UserService from "../../../services/UserService";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  var text = "In";
  if (isLoggedIn == true) {
    text = "Out";
  } else {
    text = "In";
  }
  const navigate = useNavigate();

  const logOut = () => {
    console.log(isLoggedIn);

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
    // }
  };

  return (
    <div className="flex bg-blue-300 justify-around items-center p-4">
      <div className="text-xl font-bold">
        <h1>SuperStore</h1>
      </div>
      <div>
        <a href="/home">admin</a>
      </div>
      <div>
        <a href="/allproduct">Products</a>
      </div>
      <div>
        <a href="/orders">Orders</a>
      </div>
      <div>
        <a href="/cart">Cart</a>
      </div>

      <div>
        <a href="/login">Log In</a>
      </div>

      <div>
        <a onClick={logOut}>Log Out</a>
      </div>
      <div>
        <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default Navbar;
