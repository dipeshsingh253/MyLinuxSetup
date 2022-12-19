import React, { useState } from "react";
import CategoryService from "../../../services/CategoryService";
import { useEffect } from "react";
import Category from "./Category";
const AllCategory = () => {
  const [loading, setloading] = useState(true);
  const [catogories, setCatogories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await CategoryService.getAllCategories();
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8 ">
      <div className="h-12">
        <button
          onClick={() => navigate("/addemployee")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>

      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>

          {!loading && (
            <tbody className="bg-white">
              {employees.map((employe) => (

              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default AllCategory;
