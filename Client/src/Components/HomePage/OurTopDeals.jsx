import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import { ourTopDeals } from "../../constants/CarouselData";

const OurTopDeals = () => {
  return (
    <Box p="5">
      <VStack bg="blue.600" color="#fff" paddingBottom="10">
        <Text fontSize="4xl">OUR TOP DEALS</Text>
        <ProductCarousel data={ourTopDeals} />
      </VStack>
    </Box>
  );
};

export default OurTopDeals;
