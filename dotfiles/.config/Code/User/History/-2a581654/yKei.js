import React from "react";
import { useState } from "react";
import CategoryService from "../../services/CategoryService";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [category, setCategory] = useState({
    id: "",
    name: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setCategory({
      ...category,
      [e.target.name]: value,
    });
  };

  const saveCategory = (e) => {
    e.preventDefault();
    console.log(category);
    CategoryService.saveCategory(category)
      .then((res) => {
        console.log(res);

        

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex rounded justify-center items-center w-3/4 mx-auto my-8">
      <div className="px-8 py-8">
        <div className="font-bold text-2xl tracking-wider">
          <h1>Add Category</h1>
        </div>

        {/* Input Fields */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">Id</label>
          <input
            type="number"
            name="id"
            value={category.id}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Category
          </label>
          <input
            type="string"
            name="name"
            value={category.name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        {/* Buttons */}

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveCategory}
            className="rounded text-white bg-green-500 hover:bg-green-700 px-6 py-2"
          >
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
