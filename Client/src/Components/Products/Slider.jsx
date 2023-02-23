import React, { useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Carousel from "react-elastic-carousel";
import news from "./news";
import { Link } from "react-router-dom";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Slider() {
  return (
   
        <Carousel breakPoints={breakPoints}>
          {news.map((item, i) => (
            <Box key={i} p={{ base: "3", md: "3", lg: "3" }}>
              <Image src={item.img} />
              <Text>{item.title}</Text>
              
            </Box>
          ))}
        </Carousel>
   
  );
}

export default Slider;
