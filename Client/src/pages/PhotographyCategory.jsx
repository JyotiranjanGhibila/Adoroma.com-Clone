import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Box, Center, Heading, Image, Wrap
} from "@chakra-ui/react";


import ReactStars from "react-stars";

import { Link } from "react-router-dom";
const cate = [
  {
    img: "https://www.adorama.com/images/cms/15616isoa7r4_98448.jpg",
    title: "Cameras",
  },
  {
    img: "https://www.adorama.com/images/cms/15616lenses_47765.jpg",
    title: "Lenses",
  },
  {
    img: "https://www.adorama.com/images/cms/15616lighting_81170.jpg",
    title: "Lighting&Studio",
  },
  {
    img: "https://www.adorama.com/images/cms/15616tripod_89995.jpg",
    title: "Tripod",
  },
  {
    img: "https://www.adorama.com/images/cms/15616battery_grip_09677.jpg",
    title: "Cameras Accessories",
  },
  {
    img: "https://www.adorama.com/images/cms/15616lens_accessory_44970.jpg",
    title: "Lense Accessories",
  },
  {
    img: "https://www.adorama.com/images/cms/15616Lens_Filter_37689.jpg",
    title: "Lenses Filter",
  },
  {
    img: "https://www.adorama.com/images/cms/15616underwater_50466.jpg",
    title: "Underwater Photography",
  },
  {
    img: "https://www.adorama.com/images/cms/15616mobile_photography_89004.jpg",
    title: "Mobile Photography",
  },
  {
    img: "https://www.adorama.com/images/cms/15616memory_card_photography_78143.jpg",
    title: "Memory Cards",
  },
  {
    img: "https://www.adorama.com/images/cms/15616frames_53390.jpg",
    title: "Albums Frames",
  },
  {
    img: "https://www.adorama.com/images/cms/15616backpacks_10788.jpg",
    title: "Bags & Cases",
  },
];
const Tred=[
  {
      img:"https://www.adorama.com/images/product/pcs5m2k.jpg",
      title:"Panasonic LUMIX S5 II Mirrorless Digital Camera with Lumix S 20-60mm f/3.5-5.6 Lens,",
      price:2297,
      tag:"NewArrivals",
      id:1
  },
  {
      img:"https://www.adorama.com/images/product/ikkwpz2bl.jpg",
      title:"Kodak PIXPRO WPZ2 Waterproof Rugged Digital Camera, Blue",
      price:149,
      tag:"NewArrivals",
      id:2
  },
  
  {
      img:"https://www.adorama.com/images/product/sg60600l.jpg",
      title:"Sigma 60-600mm f/4.5-6.3 DG DN OS Sports Lens for Leica L",
      price:1399,
      tag:"NewArrivals",
      id:3
  },
  {
      img:"https://www.adorama.com/images/product/car5.jpg",
      title:"Canon EOS R5 Mirrorless Digital Camera Body",
      price:3699,
      tag:"NewArrivals",
      id:4
  },
  
  {
      img:"https://www.adorama.com/images/product/fplfbl200v.jpg",
      title:"Flashpoint BLAZ 200-V 200Ws R2 Studio Monolight Flash With 10W LED Modeling Lamp and Bowens Mount",
      price:190,
      tag:"NewArrivals",
      id:6
  },
  {
      img:"https://www.adorama.com/images/Large/ipcdmczs80bd.jpg",
      title:"Panasonic Lumix DC-ZS80 Digital Camera, Black with Essential Accessories Kit",
      price:439,
      tag:"NewArrivals",
      id:7
  }
]


const PhotographyCategory = () => {
  return (
    <>
    <Flex
      w={"full"}
      h={{ base: "14vh", md: "24vh", lg: "27vh" }}
      backgroundImage={
        "url(https://www.adorama.com/images/cms/15616Photography-Category-Header-BG_18641.jpg)"
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
          <Text
            color={"white"}
            fontWeight={600}
            lineHeight={1.2}
            fontSize={{ base: "27", md: "50", lg: "80" }}
          >
            Photography
          </Text>
        </Stack>
      </VStack>
    </Flex>
    <br />
    <Box textAlign={"center"} backgroundColor={"rgb(245,245,245)"}>
        <Heading fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}>
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
              md: "repeat(3,1fr)",
              lg: "repeat(6,1fr)",
            }}
            gap={"15px"}
            m={"auto"}
            
          >
            {cate.length > 0 &&
              cate.map((e, i) => (
                <Box key={i} >
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
            NewArrivals
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
              {Tred.length > 0 &&
                Tred.map((e, i) => (
                  <Box key={i}>
                    <Box
                      m="auto"
                      w={{ base: "", md: "", lg: "75%" }}
                      bg="white"
                     
                      padding="25px"
                      _hover={{
                        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                      }}
                    >
                      <Image src={e.img} w="100%" alt="jyoti" borderRadius={'60%'}/>
                    </Box>
                    <Center>
                      <ReactStars count={5} size={24} />
                    </Center>
                    <Link to="https://www.adorama.com/sg60600l.html" target={'_blank'}>
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
          News & Reviews from 42 West
        </Text>
      </Heading>
     
    </>
  );
};
export default PhotographyCategory;
