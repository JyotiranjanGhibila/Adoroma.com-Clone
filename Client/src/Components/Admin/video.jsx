import React from "react";
import ProductList from "./products";

const apiUrl = "https://taupe-raven-gear.cyclic.app/api/products?category=video";

const Video = () => {
  return (
    <div>
      <ProductList apiUrl={apiUrl} />
    </div>
  );
};

export default Video;