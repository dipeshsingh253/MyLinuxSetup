import React, { useState } from "react";
import CategoryService from "../../../services/CategoryService";
import { useEffect } from "react";
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

  return <div>AllCategory</div>;
};

export default AllCategory;
