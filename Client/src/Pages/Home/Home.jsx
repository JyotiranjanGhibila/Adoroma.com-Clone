import React from "react";

import Carousal from "../../Components/HomeComponents/Carousel";
import ContinuousLighting from "../../Components/HomeComponents/ContinuousLighting";
import Footer from "../../Components/HomeComponents/Footer";
import MoonLightCards from "../../Components/HomeComponents/MoonLightCards";

const Home = () => {
  return (
    <div>
      <Carousal />
      <MoonLightCards/>
     <ContinuousLighting/>
     <Footer/>
    </div>
  );
};

export default Home;
