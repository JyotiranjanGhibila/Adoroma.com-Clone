import React from "react";
import ProductList from "../components/productspage/products";
const ComputerCategory = () => {

  let api="https://taupe-raven-gear.cyclic.app/api/products?category=computer";
  return(
    <>
    <ProductList apiUrl={api}/>
    </>
  )
};

export default ComputerCategory;
