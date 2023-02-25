import React from "react";
import ProductList from "./products";

const apiUrl = "https://taupe-raven-gear.cyclic.app/api/products?category=gaming";

const Gaming = () => {
  return (
    <div>
      <ProductList apiUrl={apiUrl} />
    </div>
  );
};

export default Gaming;