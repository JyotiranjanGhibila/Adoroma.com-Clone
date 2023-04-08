import React from "react";
import ProductList from "../components/productspage/products";
const PhotographyCategory = () => {

  let api="https://taupe-raven-gear.cyclic.app/api/products?category=photography";
  return(
    <>
    <ProductList apiUrl={api}/>
    </>
  )
};

export default PhotographyCategory;
