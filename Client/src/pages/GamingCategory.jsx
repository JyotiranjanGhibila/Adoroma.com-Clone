const Fgames=[
  {
      img:"https://www.adorama.com/images/cms/33095God_of_War_Ragnarok_-_Desktop_05765.jpg",
      link:"https://www.adorama.com/sogowrps5.html"
  },
  {
      img:"https://www.adorama.com/images/cms/33095Pokemon_Scarlet_and_Pokemon_Violet_Double_Pack_-_Desktop_(1)_49286.jpg",
      link:"https://www.adorama.com/nipkmscrvlt.html"
  },
  {
      img:"https://www.adorama.com/images/cms/33095EA-Fifa23-Featured-Game-Desktop_33103.jpg",
      link:"https://www.adorama.com/eafifa23xsx.html"
  },
  {
      img:"https://www.adorama.com/images/cms/33095COD-MW2-Featured-Game-Desktop_86677.jpg",
      link:"https://www.adorama.com/so74720.html"
  }
]
const Con=[
  {
      img:"https://www.adorama.com/images/Large/sops5gowb.jpg",
      title:"Sony PlayStation 5 825GB Gaming Console with God of War Ragnarok, Standard Edition",
      price:559,
      tag:"BestSeller",
      id:1
  },
  {
      img:"https://www.adorama.com/images/Large/mirrs25.jpg",
      title:"Microsoft Xbox Series S 512GB Gaming Console, White",
      price:249,
      tag:"BestSeller",
      id:2
  },
  
  {
      img:"https://www.adorama.com/images/Large/asvg27aq.jpg",
      title:"Asus TUF VG27AQ 27 16:9 QHD 165Hz IPS HDR Gaming Monitor with G-SYNC/Adaptive Sync",
      price:397,
      tag:"BestSeller",
      id:3
  },
  {
      img:"https://www.adorama.com/images/product/tm5gf628.jpg",
      title:"Thrustmaster T.Flight HOTAS 4 Flight Stick for PlayStation and PC",
      price:3699,
      tag:"BestSeller",
      id:4
  },
  
  {
      img:"https://www.adorama.com/images/Large/vrjaero.jpg",
      title:"Varjo Aero Virtual Reality Headset",
      price:1990,
      tag:"BestSeller",
      id:6
  },
  {
      img:"https://www.adorama.com/images/Large/hosb003011.jpg",
      title:"Honeycomb Alpha Flight Controls Yoke and Switch Panel",
      price:439,
      tag:"BestSeller",
      id:7
  }
]
const Plat = [
  {
    img: "https://www.adorama.com/col/_gaming/l1/Platform_Playstation_Desktop.jpg",
  },
  {
    img: "https://www.adorama.com/col/_gaming/l1/Platform_XBox_Desktop.jpg",
  },
  {
    img: "https://www.adorama.com/col/_gaming/l1/Platform_Switch_Desktop.jpg",
  },
  {
    img: "https://www.adorama.com/col/_gaming/l1/Platform_Retro_Desktop.jpg",
  },
  {
    img: "https://www.adorama.com/col/_gaming/l1/Platform_PC_Desktop.jpg",
  },
  {
    img: "https://www.adorama.com/col/_gaming/l1/Platform_VR_Desktop.jpg",
  },
];

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
 
} from "@chakra-ui/react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";


const GamingCategory = () => {
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
        <Wrap spacing={"80px"} width={"100%"} justify="center">
          <Box w={{ base: "75%", md: "85%", lg: "70%" }} m={"auto"}>
            <Image src="https://www.adorama.com/images/cms/33095Gaming_Page_-_Aug_22_-Spotlight-Large-Desktop_99465.jpg"></Image>
          </Box>
        </Wrap>
      </Center>
    </>
  );
};
export default GamingCategory;
