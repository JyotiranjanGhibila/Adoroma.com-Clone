import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const DealBanner = () => {
  return (
    <Box p="5">
      <VStack bg="blue.600" color="#fff" py="2">
        <Text fontSize="4xl">Deals of the Day</Text>
        <Text fontSize="md" color="gray.100">
          CHECK BACK FOR NEW DEALS EVERY DAY
        </Text>
      </VStack>
    </Box>
  );
};

export default DealBanner;
