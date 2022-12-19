import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // const navigate = useNavigate();
  // const handleClick = (e) => {
  //   console.log(e.target.getAttribute("href"));
  // };

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const logOut = () =>{
    
  }



  return (
    <div className="flex bg-blue-300 justify-around items-center p-4">
      <div className="text-xl font-bold">
        <h1>SuperStore</h1>
      </div>
      <div>
        <a href="/home">Home</a>
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
        {isLoggedIn ? (
          <a href="/" onClick={logOut}>Log Out</a>
        ) : (
          <a href="/login">Log in</a>
        )}
      </div>
      <div>
        <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default Navbar;
