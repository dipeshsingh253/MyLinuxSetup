import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../services/ProductService";

const ProductPage = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getProductById(id);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    setLoading(false);
    fetchData();
  }, []);

  return <div>ProductPage</div>;
};

export default ProductPage;
