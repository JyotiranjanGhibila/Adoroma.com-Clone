import React from "react";
import { Routes, Route } from "react-router-dom";

import Photography from "../Components/Products/Photography";
import Gaming from "./Products/Gaming";

const AllComponents = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Photography />} />
        <Route path="/gaming" element={<Gaming />} />
        
      </Routes>
    </div>
  );
};

export default AllComponents;
