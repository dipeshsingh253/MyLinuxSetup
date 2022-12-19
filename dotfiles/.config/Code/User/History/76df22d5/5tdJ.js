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

  return <div>
    <Category></Category>
    </div>;
};

export default AllCategory;
