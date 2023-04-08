import { Badge, Heading } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Flex, Circle, Box, Image } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import "./style.css";
import ReactStars from "react-stars";

const data = [
  {
    _id: "63f6154372140ac3966e62c0",
    title:
      "Swellpro SplashDrone 4 Waterproof Drone with Fixed Camera 1080p, Payload Release",
    img: "https://www.adorama.com/images/product/spcp01005prd.jpg",
    brand: "DJI",
    rating: 3.5,
    review: 0,
    price: 2136,
    isActive: true,
    item_tag: "Kit Savings",
    category: "drone",
    inventory: 70,
  },
  {
    _id: "63f6154372140ac3966e62c2",
    title: "Parrot ANAFI USA Thermal Drone with Accessories Kit",
    img: "https://www.adorama.com/images/product/paranafiak.jpg",
    brand: "CHASING",
    rating: 5,
    review: 1,
    price: 7852.9,
    isActive: true,
    item_tag: "Kit Savings",
    category: "drone",
    inventory: 70,
  },
  {
    _id: "63f6154372140ac3966e62c3",
    title: "Parrot ANAFI Ai Drone with Accessories Kit",
    img: "https://www.adorama.com/images/product/parpf72831ak.jpg",
    brand: "Autel Robotics",
    rating: 4.5,
    review: 1,
    price: 5412.9,
    isActive: true,
    item_tag: "Kit Savings",
    category: "drone",
    inventory: 70,
  },
  {
    _id: "63f6154372140ac3966e62c4",
    title:
      "Swellpro SplashDrone 4 Multi-Functional Waterproof Drone with Payload Release",
    img: "https://www.adorama.com/images/product/spcp01005e.jpg",
    brand: "CHASING",
    rating: 3,
    review: 0,
    price: 1718,
    isActive: true,
    item_tag: "Kit Savings",
    category: "drone",
    inventory: 70,
  },
  {
    _id: "63f6154372140ac3966e62c5",
    title:
      "DJI Mini 3 Pro Drone with RC Controller, Fly More Plus Kit, Essential Acc Kit",
    img: "https://www.adorama.com/images/product/djim3prorcn.jpg",
    brand: "DJI",
    rating: 4.7,
    review: 42,
    price: 1178,
    isActive: true,
    item_tag: "Kit Savings",
    category: "drone",
    inventory: 70,
  },
  {
    _id: "63f6154372140ac3966e62c6",
    title: "DJI Mini 2 Drone Fly More Combo",
    img: "https://www.adorama.com/images/product/djimvmnc2.jpg",
    brand: "Autel Robotics",
    rating: 4.9,
    review: 145,
    price: 599,
    isActive: true,
    item_tag: "Top Rated Gear",
    category: "drone",
    inventory: 70,
  },
  {
    _id: "63f6154372140ac3966e62c7",
    title:
      "Swellpro SplashDrone 4 Waterproof Drone with Night-Vision 1080p, Extra Battery",
    img: "https://www.adorama.com/images/product/spcp01005ebc.jpg",
    brand: "DJI",
    rating: 4.7,
    review: 0,
    price: 2597,
    isActive: true,
    item_tag: "Kit Savings",
    category: "drone",
    inventory: 70,
  },
  {
    _id: "63f6154372140ac3966e62c8",
    title:
      "DJI Mini 3 Pro Drone with RC Controller, Fly More Plus Kit, Complete Acc. Kit",
    img: "https://www.adorama.com/images/product/djim3prorco.jpg",
    brand: "CHASING",
    rating: 4.3,
    review: 42,
    price: 1268,
    isActive: true,
    item_tag: "Kit Savings",
    category: "drone",
    inventory: 70,
  },
  {
    _id: "63f6154372140ac3966e62c9",
    title:
      "DJI Mini 3 Pro Drone with RC Remote Controller with Essential Accessories Kit",
    img: "https://www.adorama.com/images/product/djim3prorch.jpg",
    brand: "CHASING",
    rating: 4.7,
    review: 42,
    price: 929,
    isActive: true,
    item_tag: "Kit Savings",
    category: "drone",
    inventory: 70,
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

const Drones = () => {
  function Added() {
    // console.log("ijns");
  }

  return (
    <div
      style={{
        padding: "10px",
        marginTop: "30px",
        marginBottom: "30px",
        width: "100%",
      }}
    >
      <Flex textAlign={"left"} alignItems="baseline" padding="15px">
        <Heading textAlign={"left"} fontWeight="normal">
          Drones Accessories
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
            key={el._id}
          >
            <Box
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative"
            >
              <Image
                src={el.img}
                alt={`Picture of ${el.name}`}
                roundedTop="lg"
                height={"150px"}
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
                    {el.title}
                  </Box>
                </Flex>
                <Flex justifyContent="center" alignContent="center">
                  <Box fontSize="md">
                    <Box as="span" color={"gray.600"} fontSize="sm" margin={1}>
                      <strike>
                        {" "}
                        {`Regular Price: $${Math.floor(el.price * 1.5)}.00`}
                      </strike>
                    </Box>
                  </Box>
                </Flex>
                <Flex justifyContent="center" alignContent="center">
                  <Box fontSize="md">
                    <Box as="span" color={"gray.600"} fontSize="sm" margin={1}>
                      {`Instant Rebate: $${Math.floor(el.price / 2)}.00`}
                    </Box>
                  </Box>
                </Flex>

                <Flex
                  mt="1"
                  justifyContent="center"
                  alignContent="center"
                  margin={1}
                >
                  <Box fontSize="md" lineHeight="tight" margin={1}>
                    <ReactStars count={el.rating} color1={"#ffd700"} />
                  </Box>
                </Flex>
                <Flex justifyContent="center" alignContent="center">
                  <Box fontSize="md">
                    <Box as="span" color={"gray.600"} fontSize="md">
                      {`Price: $${el.price}.00`}
                    </Box>
                  </Box>
                </Flex>
                <Flex justifyContent="center" alignContent="center">
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
              </Box>
            </Box>
          </Flex>
        ))}
      </Slide>
    </div>
  );
};

export default Drones;
