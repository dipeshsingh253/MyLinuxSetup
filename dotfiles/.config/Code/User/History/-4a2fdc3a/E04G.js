import React from "react";
import Product from "../Product";
import { useState } from "react";
import ProductService from "../../services/ProductService";
import { useEffect } from "react";

const AllProducts = () => {
  const [productData, setproductData] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await ProductService.getAllProducts();
        setproductData(response.data);
        // console.log(response.data);
        console.log(productData);
      } catch (error) {
        console.log(error);
      }

      setloading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="grid md:gap-4 md:grid-cols-3 sm:grid sm:gap-4 sm:grid-cols-2 justify-center bg-red-200 p-5">
      {!loading &&
        productData.map((pro) => (
          <Product
            key={pro.id}
            name={pro.name}
            description={pro.description}
            imageUrl={pro.imageUrl}
            price={pro.price}
            stock={pro.stock}
          />
        ))}
    </div>
  );
};

export default AllProducts;
