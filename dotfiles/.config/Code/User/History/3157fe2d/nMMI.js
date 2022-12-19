import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../services/ProductService";

const ProductPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await ProductService.getProductById(id);
      console.log(response.data);
    };
  }, []);

  return <div>ProductPage</div>;
};

export default ProductPage;
