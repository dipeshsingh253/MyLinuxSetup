import React from "react";
import { useState } from "react";
import UserService from "../services/UserService";
import swal from "sweetalert";

export const RegistrationFrom = () => {
  const [user, setUser] = useState({
    address: {
      area: "",
      building: "",
      city: "",
      country: "",
      pincode: "",
      society: "",
      state: "",
    },
    email: "",
    firstName: "",
    id: 0,
    lastName: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setUser({ ...user, [e.target.name]: value });
  };

  const handleChangeAddress = (e) => {
    const value = e.target.value;

    setUser({
      ...user,
      address: {
        ...user.address,
        [e.target.name]: value,
      },
    });
  };
  const saveUser = (e) => {
    e.preventDefault();

    UserService.saveUser(user)
      .then((res) => {
        console.log(res);

        swal({
          title: res.data,
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error.response);

        swal({
          title: error.response.data,
          icon: "error",
        });
      });

    console.log(user);
  };

  return (
    <div className="flex rounded justify-center items-center w-3/4 mx-auto my-8">
      <div className="px-8 py-8">
        <div className="font-bold text-2xl tracking-wider">
          <h1>Registration Page</h1>
        </div>

        {/* Input Fields */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            E-Mail
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <br></br>
        <div className="font-bold text-xl tracking-wider">
          <h1>Address</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Building
          </label>
          <input
            type="text"
            name="building"
            value={user.address.building}
            onChange={(e) => handleChangeAddress(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Society
          </label>
          <input
            type="text"
            name="society"
            value={user.address.society}
            onChange={(e) => handleChangeAddress(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Area
          </label>
          <input
            type="text"
            name="area"
            value={user.address.area}
            onChange={(e) => handleChangeAddress(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            City
          </label>
          <input
            type="text"
            name="city"
            value={user.address.city}
            onChange={(e) => handleChangeAddress(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Pincode
          </label>
          <input
            type="text"
            name="pincode"
            value={user.address.pincode}
            onChange={(e) => handleChangeAddress(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            State
          </label>
          <input
            type="text"
            name="state"
            value={user.address.state}
            onChange={(e) => handleChangeAddress(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={user.address.country}
            onChange={(e) => handleChangeAddress(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        {/* Buttons */}

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveUser}
            className="rounded text-white bg-green-500 hover:bg-green-700 px-6 py-2"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFrom;
