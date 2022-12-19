import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../services/ProductService";

const ProductPage = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getProductById(id);
        // console.log(response.data);
        setProduct(response.data);
        console.log(product);
      } catch (error) {
        console.log(error);
      }
    };
    setLoading(false);
    fetchData();
  }, product);

  return (
    <div>
      ProductPage
      <h1>Hey</h1>
    </div>
  );
};

export default ProductPage;