import { Box, Center, Heading, Image, Text, Wrap } from "@chakra-ui/react";

import cate from "./categoryData";
const Category = () => {
  return (
    <>
      <Box textAlign={"center"} backgroundColor={"rgb(245,245,245)"}>
        <Heading fontSize={{ base: "3xl", md: "2xl", lg: "3xl" }}>
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",

              position: "absolute",
              bottom: 1,
              left: 0,

              zIndex: -1,
            }}
            fontWeight={"450"}
            color={"black.700"}
          >
            Photography by Category
          </Text>
        </Heading>
      </Box>

      <Center py={12} backgroundColor={"rgb(245,245,245)"}>
        <Wrap spacing={"80px"} width={"90%"} justify="center">
          <Box
            w={{ base: "75%", md: "85%", lg: "95%" }}
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(4,1fr)",
              lg: "repeat(6,1fr)",
            }}
            gap={"15px"}
            m={"auto"}
          >
            {cate.length > 0 &&
              cate.map((e, i) => (
                <Box key={i}>
                  
                  <Box
                    m="auto"
                    w={{ base: "", md: "", lg: "75%" }}
                    bg="white"
                    borderRadius={"50%"}
                    padding="25px"
                    _hover={{
                      boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                    }}
                  >
                    <Image src={e.img} w="100%" alt="jyoti" />
                  </Box>
                  <Text
                    textAlign={"center"}
                    color="blue.900"
                    _hover={{ textDecoration: "underLine" }}
                    cursor="pointer"
                  >
                    {e.title}
                  </Text>
                </Box>
              ))}
          </Box>
        </Wrap>
      </Center>
      <Box>
      <Heading fontSize={{ base: "1xl", md: "2xl", lg: "2xl" }}>
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",

              position: "absolute",
              bottom: 1,
              left: 0,

              zIndex: -1,
            }}
            fontWeight={"450"}
            color={"black.700"}
            textAlign={"center"}
          >
            Trending Deals
          </Text>
        </Heading>

      </Box>
    </>
  );
};
export default Category;
