import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    // More products...
  ];
  return (
    <div>
      <Navbar />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
