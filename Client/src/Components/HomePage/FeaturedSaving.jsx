import { Box, Flex, Text, VStack, Image, Button } from "@chakra-ui/react";
import React from "react";

const FeaturedSaving = () => {
  return (
    <VStack p="5" align={"left"} gap={5}>
      <Text fontSize={"2xl"}>FeaturedSaving</Text>
      <Flex gap={3}>
        <Box>
          <Image
            width="100%"
            src="https://www.adorama.com/col/CDP/Laptops%20%26%20Notebooks-IS-Banner-Desktop%402x.jpg"
          />
        </Box>
        <Box>
          <Image
            width="100%"
            src="https://www.adorama.com/col/CDP/Desktop%20Computers-IS-Banner-Desktop%402x.jpg"
          />
        </Box>
        <Box>
          <Image
            width="100%"
            src="https://www.adorama.com/col/CDP/iPads%20%26%20Tablets-IS-Banner-Desktop%402x.jpg"
          />
        </Box>
        <Box>
          <Image
            width="100%"
            src="https://www.adorama.com/col/CDP/Drives%2C%20SSD%20%26%20Storage-IS-Banner-Desktop%402x.jpg"
          />
        </Box>
      </Flex>
      <Box>
        <Image
          w="100%"
          src="https://www.adorama.com/images/cms/36471Yamaha_HE_Sale-Spotlight-Large-Desktop_62650.jpg"
        ></Image>
      </Box>
      <Flex gap={5}>
        <VStack align={"left"}>
          <Image
            src="https://www.adorama.com/images/cms/36471Westcott_Backdrop_-_NPA-Spotlight-Desktop_11120.jpg"
            maxH={400}
          />
          <Text fontSize="2xl" fontWeight={500}>
            Smooth & Seamless for Studio & Travel
          </Text>
          <Text>
            New Wrinkle-Resistant Colored Backdrops for photographers who need
            to work fast and travel light. Easy to use, machine-washable, and
            reflection-free.
          </Text>
          <Button color="blue.600" variant="link">
            Shop Now
          </Button>
        </VStack>
        <VStack align={"left"}>
          <Image
            src="https://www.adorama.com/images/cms/36471Canon_XA60_FREE_BATTERY-Spotlight-Desktop_49158.jpg"
            maxH={400}
          />
          <Text fontSize="2xl" fontWeight={500}>
            Smooth & Seamless for Studio & Travel
          </Text>
          <Text>
            Purchase an XA60 & Receive a Free Canon BP-828 2670mAh Lithium-Ion
            Battery Pack valued at $149.99. Now through March 31st, 2023.
          </Text>
          <Button color="blue.600" variant="link">
            Shop Now
          </Button>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default FeaturedSaving;
