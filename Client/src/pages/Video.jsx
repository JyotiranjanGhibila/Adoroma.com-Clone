import React from "react";
import ProductList from "../components/productspage/products";
const VideoCategory = () => {

  let api="https://taupe-raven-gear.cyclic.app/api/products?category=video";
  return(
    <>
    <ProductList apiUrl={api}/>
    </>
  )
};

export default VideoCategory;
