import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Image,
  Box,
  Center,
  Wrap,
  Heading,
  Skeleton,
} from "@chakra-ui/react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import Plat from "./Platform";
import Con from "./Console";
import Fgames from "./Fgames";
const Gaming = () => {
  return (
    <>
      <Flex
        w={"full"}
        h={{ base: "5vh", md: "9vh", lg: "17vh" }}
        backgroundImage={
          "url(https://www.adorama.com/col/_gaming/Gaming_Header_Background_Desktop.jpg)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          // bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Box display={"flex"}>
              <Image
                src="https://www.adorama.com/col/_gaming/h1-controller.svg"
                w={{ base: "15%", md: "20%", lg: "23%" }}
                mr={{ lg: "6" }}
              ></Image>
              <Text
                color={"white"}
                fontWeight={600}
                lineHeight={1.2}
                letterSpacing={7}
                fontSize={{ base: "30", md: "50", lg: "80" }}
              >
                GAMING
              </Text>
            </Box>
          </Stack>
        </VStack>
      </Flex>

      <Image
        src="https://www.adorama.com/images/cms/33095Gaming_Page-Gaming_Consoles_In_Stock-Gaming-Hero-Desktop_(1)_76118.jpg"
        w="100%"
      ></Image>

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
            SHOP BY PLATFORM
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
              md: "repeat(3,1fr)",
              lg: "repeat(3,1fr)",
            }}
            gap={"15px"}
            m={"auto"}
          >
            {Plat.length > 0 &&
              Plat.map((e, i) => (
                <Box key={i}>
                  <Box
                    m="auto"
                    w={{ base: "", md: "", lg: "75%" }}
                    bg="white"
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
        <Heading
          fontSize={{ base: "1xl", md: "2xl", lg: "2xl" }}
          backgroundColor={"rgb(245,245,245)"}
        >
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
            BestSeller
          </Text>
        </Heading>
        <Center py={12} backgroundColor={"rgb(245,245,245)"}>
          <Wrap spacing={"80px"} width={"90%"} justify="center">
            <Box
              w={{ base: "75%", md: "85%", lg: "95%" }}
              display={"grid"}
              gridTemplateColumns={{
                base: "repeat(2,1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(6,1fr)",
              }}
              gap={"15px"}
              m={"auto"}
            >
              {Con.length > 0 &&
                Con.map((e, i) => (
                  <Box key={i}>
                    <Box
                      m="auto"
                      w={{ base: "", md: "", lg: "75%" }}
                      bg="white"
                      // borderRadius={"50%"}
                      padding="25px"
                      _hover={{
                        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                      }}
                    >
                      <Image src={e.img} w="100%" alt="jyoti" />
                    </Box>
                    <Center>
                      <ReactStars count={5} size={24} />
                    </Center>
                    <Link
                      to="https://www.adorama.com/sops5gowb.html"
                      target={"_blank"}
                    >
                      <Text
                        textAlign={"center"}
                        color="blue.900"
                        fontSize={"14px"}
                        cursor="pointer"
                      >
                        {e.title}
                      </Text>
                    </Link>
                    <br />
                    <Text textAlign={"center"} color="black" fontWeight={"600"}>
                      ${e.price}
                    </Text>

                    <Text
                      textAlign={"center"}
                      color="grey"
                      fontSize={"12px"}
                      fontWeight={"100"}
                    >
                      {e.tag}
                    </Text>
                  </Box>
                ))}
            </Box>
          </Wrap>
        </Center>
      </Box>
      <Heading
        fontSize={{ base: "1xl", md: "2xl", lg: "2xl" }}
        backgroundColor={"rgb(245,245,245)"}
      >
        <Box display={"flex"}>
          <Image
            src="https://www.adorama.com/col/_gaming/featured-games-controller.svg"
            w={{ lg: "5%" }}
            mr={{ lg: "6" }}
          ></Image>
          <Text
            color={"black"}
            fontWeight={400}
            lineHeight={1.2}
            letterSpacing={4}
            fontSize={{ base: "20px", md: "20px", lg: "40px" }}
          >
            Featured Games
          </Text>
        </Box>

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
          TRENDING NOW
        </Text>
      </Heading>
      <Center py={12} backgroundColor={"rgb(245,245,245)"}>
        <Wrap spacing={"80px"} width={"90%"} justify="center">
          <Box
            w={{ base: "75%", md: "85%", lg: "95%" }}
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(2,1fr)",
            }}
            gap={"15px"}
            m={"auto"}
          >
            {Fgames.length > 0 &&
              Fgames.map((e, i) => (
                <Box
                  m="auto"
                  w={{ base: "", md: "", lg: "95%" }}
                  bg="white"
                  _hover={{
                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                  }}
                  key={i}
                >
                  <Link to={e.link} target={"_blank"}>
                    <Image src={e.img} w="100%" alt="jyoti" />
                  </Link>
                </Box>
              ))}
          </Box>
        </Wrap>
      </Center>
      <Center py={12} backgroundColor={"rgb(245,245,245)"}>
        <Wrap spacing={"80px"} width={"90%"} justify="center">
          <Box w={{ base: "75%", md: "85%", lg: "97%" }} m={"auto"}>
            <Image src="https://www.adorama.com/images/cms/33095Gaming_Page_-_Aug_22_-Spotlight-Large-Desktop_99465.jpg"></Image>
          </Box>
        </Wrap>
      </Center>
    </>
  );
};
export default Gaming;
