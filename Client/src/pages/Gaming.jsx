import React from "react";
import ProductList from "../components/productspage/products";
const GamingCategory = () => {

  let api="https://taupe-raven-gear.cyclic.app/api/products?category=gaming";
  return(
    <>
    <ProductList apiUrl={api}/>
    </>
  )
};
export default GamingCategory;
