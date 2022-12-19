import React from "react";
import { useState } from "react";

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
    role: "user",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(e.target.name + "==>" + value);
    
    setUser({ ...user,[user.address.area]:"pahad", [e.target.name]: value });
    console.log(user.address.area);
  };

  const saveUser = (e) => {
    e.preventDefault();
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
            name="address.building"
            value={user.address.building}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Society
          </label>
          <input
            type="text"
            name="address.society"
            value={user.address.society}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Area
          </label>
          <input
            type="text"
            name="address.area"
            value={user.address.area}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            City
          </label>
          <input
            type="text"
            name="address.city"
            value={user.address.city}
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
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
//address-1
export default RegistrationFrom;
/*

"address.area": "address-1"
​
"address.building": "address-1"
​
"address.city": "address-1"
​
"address.society": "address-1"
​
country: "address-1"
​
email: "dj@mail.com"
​
firstName: "Dipesh"
​
id: 0
​
lastName: "Singh"
​
password: "password"
​
pincode: "address-1"
​
role: "user"
​
state: "address-1"
*/