import React from "react";

import Carousal from "../../Components/HomeComponents/Carousel";
import ContinuousLighting from "../../Components/HomeComponents/ContinuousLighting";
import MoonLightCards from "../../Components/HomeComponents/MoonLightCards";

const Home = () => {
  return (
    <div>
      <Carousal />
      <MoonLightCards/>
     <ContinuousLighting/>
    </div>
  );
};

export default Home;
