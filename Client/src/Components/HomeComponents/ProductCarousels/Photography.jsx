import { Heading, Img } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import AddtoCartModal from "../../cartComponents/AddtoCartModal";
import ReactStars from "react-stars";

const data = [
  {
    isNew: true,
    imageURL: "https://www.adorama.com/images/Large/ipczs80bak.jpg",
    name: "Panasonic LUMIX DC-ZS80D Digital Camera, Black with Accessories Kit",
    price: 14099.0,
    rating: 4.5,
    numReviews: 34,
  },
  {
    isNew: false,
    name: "Panasonic LUMIX DC-ZS80D Digital Camera, Silver with Accessories Kit",
    imageURL: "https://www.adorama.com/images/product/ipczs80sak.jpg",
    price: 10099.0,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    name: "Panasonic LUMIX S5 II Mirrorless Camera with Lumix S 20-60mm f/3.5-5.6 Lens",
    imageURL: "https://www.adorama.com/images/product/pcs5m2k.jpg",
    price: 87200.0,
    rating: 3.2,
    numReviews: 34,
  },
  {
    isNew: true,
    name: "Nintendo Switch 64GB OLED Console with White Joy-Con Controllers",
    imageURL: "https://www.adorama.com/images/product/niswioledw.jpg",
    price: 87200.0,
    rating: 3.2,
    numReviews: 34,
  },
  {
    isNew: false,
    name: "Panasonic LUMIX DC-ZS80D Digital Camera, Silver with PC Software & Accessories",
    imageURL: "https://www.adorama.com/images/product/ipczs80spc.jpg",
    price: 56000.0,
    rating: 3.2,
    numReviews: 34,
  },
  {
    isNew: false,
    name: "Panasonic LUMIX DC-ZS80D Digital Camera, Black with Mac Software & Accessories",
    imageURL: "https://www.adorama.com/images/product/ipczs80bmc.jpg",
    price: 34500.0,
    rating: 3.2,
    numReviews: 34,
  },

  {
    isNew: false,
    name: "Nintendo Switch 64GB OLED Console with White Joy-Con Controllers and Bundle Kit",
    imageURL: "https://www.adorama.com/images/product/niswioledwak.jpg",
    price: 10099.0,
    rating: 4.2,
    numReviews: 34,
  },
];





const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
};
const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="black"
      >
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="black"
      >
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </button>
  ),
};
const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 1,
    },
  },
];
const Photography = () => {
  return (
    <div style={{ padding: "10px", marginTop: "30px", marginBottom: "30px" }}>
      <Flex textAlign={"left"} alignItems="baseline">
        <Heading textAlign={"left"} fontWeight="normal" padding={"10px"}>
          Photography
        </Heading>
        {}
        <span>Special offers</span>
      </Flex>

      <Slide
        slidesToScroll={1}
        slidesToShow={3}
        responsive={responsiveSettings}
      >
        {data.map((el) => (
          <Flex
            p={2}
            w="full"
            alignItems="center"
            justifyContent="center"
            className="myDiv"
          >
            <Box
              maxW="md"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative"
            >
              {el.isNew && (
                <Circle
                  size="10px"
                  position="absolute"
                  top={2}
                  right={2}
                  bg="red.200"
                />
              )}

              <Image
                src={el.imageURL}
                alt={`Picture of ${el.name}`}
                roundedTop="lg"
                height={"200px"}
              />

              <Box p="1">
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Box
                    fontSize="lg"
                    as="p"
                    lineHeight="tight"
                    id="userName"
                    margin={1}
                  >
                    {el.name}
                  </Box>
                </Flex>
                <Flex justifyContent="center" alignContent="center">
                  <Box fontSize="md">
                    <Box as="span" color={"gray.600"} fontSize="md" margin={1}>
                      <strike> {`Regular Price: $${el.price * 1.5}.00`}</strike>
                    </Box>
                  </Box>
                </Flex>
                <Flex justifyContent="center" alignContent="center">
                  <Box fontSize="md">
                    <Box as="span" color={"gray.600"} fontSize="md" margin={1}>
                      {`Instant Rebate: $${el.price / 2}.00`}
                    </Box>
                  </Box>
                </Flex>
                <Flex mt="1" justifyContent="center" alignContent="center">
                  <Box fontSize="md" as="p" lineHeight="tight" margin={1}>
                    <ReactStars
                      count={el.rating}
                      size={24}
                      color1={"#ffd700"}
                    />
                  </Box>
                </Flex>
                <Flex justifyContent="center" alignContent="center" margin={1}>
                  <Box fontSize="md">
                    <Box as="span" color={"gray.600"} fontSize="md" margin={1}>
                      {`Price: $${el.price}.00`}
                    </Box>
                  </Box>
                </Flex>
                <Flex
                  justifyContent="center"
                  alignContent="center"
                  margin="4px"
                >
                  <Box fontSize="md">
                    <Box
                      as="span"
                      color={"blue.500"}
                      fontSize="smaller"
                      margin={1}
                    >
                      Get Reward points
                    </Box>
                  </Box>
                </Flex>
                <Box className="hide">
                  <AddtoCartModal />
                </Box>
              </Box>
            </Box>
          </Flex>
        ))}
      </Slide>
    </div>
  );
};

export default Photography;
