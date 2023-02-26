import React, { useState } from "react";

import Gaming from "../../Components/HomeComponents/ProductCarousels/Gaming";
import Footer from "../../Components/HomeComponents/Footer";
import MobileAccessories from "../../Components/HomeComponents/ProductCarousels/MobileAccessories";
import Photography from "../../Components/HomeComponents/ProductCarousels/Photography";
import Ads from "../../Components/HomeComponents/Ads/Ads";

import { Box, Text } from "@chakra-ui/react";

import Camera from "../../Components/HomeComponents/ProductCarousels/Camera";
import Carousel from "../../Components/HomeComponents/Carousel";
import SearchData from "../../Components/HomeComponents/ProductCarousels/SearchData";
const Home = () => {
  const [render,setRender]=useState(false)
  return (
    <div>
      
      <Carousel />

      <Camera />
     <SearchData/>
      <Gaming />
      <Photography />
      <MobileAccessories />
      <hr />
      <Ads />
      <Box width={"95%"} padding={"20px"} margin="auto">
        <Text fontSize="3xl" textAlign={"center"} margin="1rem">
          Photography Equipment, Video Gear, and Electronics
        </Text>
        <Text>
          We are the world's only full-service destination for photo, video and
          electronics. We're more than a camera store—we offer the best
          selection and prices on professional photography and video gear,
          pro-audio, and consumer electronics such as home theaters , desktop
          computers, laptops, iPads, home office equipment and more. Equip your
          creativity with the best & newest Mirrorless, Point & Shoot, and DSLR
          photography equipment from brands like Sony, Canon and Nikon, or shop
          for the latest in smart tech, gaming, drones, musical instruments and
          recording studio gear.
        </Text>
        <Text fontSize="3xl" textAlign={"center"} margin="1rem">
          Exclusive Savings All Year Long
        </Text>
        <Text>
          For savings you won't find anywhere else and for weekly trending deals
          on top products from industry leading brands, browse Deals, Used, Deal
          Of The Day, only at Adorama.
        </Text>
      </Box>

      <br />
      <br />

      <Footer />
    </div>
  );
};

export default Home;
