import React from "react";
import ProductList from "./products";

const apiUrl = "https://taupe-raven-gear.cyclic.app/api/products?category=computer";

const Computer = () => {
  return (
    <div>
      <ProductList apiUrl={apiUrl} />
    </div>
  );
};

export default Computer;