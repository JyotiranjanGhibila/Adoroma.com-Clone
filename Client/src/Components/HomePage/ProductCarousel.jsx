import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Button, Divider, Image, Text, VStack } from "@chakra-ui/react";

const ProductCarousel = ({ data }) => {
  let items = data.map((el, i) => (
    <VStack marginX={2} key={i} bg={"#fff"} mt={3} color="black">
      <Image src={el.imageURL} />
      <Text fontSize={"sm"} noOfLines={1}>
        {el.name}
      </Text>
      <Text paddingBottom={3}>${el.price}</Text>
    </VStack>
  ));

  return (
    <Carousel
      autoPlay={true}
      labels={false}
      showThumbs={false}
      centerMode={true}
      centerSlidePercentage={15}
    >
      {items}
    </Carousel>
  );
};

export default ProductCarousel;
