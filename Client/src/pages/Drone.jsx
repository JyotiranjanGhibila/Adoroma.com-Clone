import React from "react";
import ProductList from "../components/productspage/products";
const DroneCategory = () => {

  let api="https://taupe-raven-gear.cyclic.app/api/products?category=drone";
  return(
    <>
    <ProductList apiUrl={api}/>
    </>
  )
};

export default DroneCategory;
