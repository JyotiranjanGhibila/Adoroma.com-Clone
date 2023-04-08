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
    _id: "63f616b6524b408fb9d9f028",
    title: "Sony FX3 Full-Frame Cinema Line Camera",
    img: "https://www.adorama.com/images/product/soilmefx3.jpg",
    brand: "Canon",
    rating: 4.8,
    review: 70,
    price: 3899.99,
    isActive: true,
    item_tag: "Top Rated Gear",
    category: "video",
    inventory: 70,
  },
  {
    _id: "63f616b6524b408fb9d9f029",
    title: "RED Digital Cinema KOMODO 6K Camera",
    img: "https://www.adorama.com/images/product/rd7100333.jpg",
    brand: "Sony",
    rating: 4.9,
    review: 14,
    price: 5995,
    isActive: true,
    item_tag: "Top Rated Gear",
    category: "video",
    inventory: 70,
  },
  {
    _id: "63f616b6524b408fb9d9f02a",
    title: "Blackmagic Design URSA Mini Pro 12K Camera",
    img: "https://www.adorama.com/images/product/bmcieurupr12.jpg",
    brand: "BirdDog",
    rating: 4.4,
    review: 10,
    price: 6385,
    isActive: true,
    item_tag: "Top Rated Gear",
    category: "video",
    inventory: 70,
  },
  {
    _id: "63f616b6524b408fb9d9f02b",
    title: "Panasonic Lumix BS1H Mirrorless Live & Cinema Camera",
    img: "https://www.adorama.com/images/product/pcbs1h.jpg",
    brand: "BirdDog",
    rating: 5,
    review: 1,
    price: 2497.99,
    isActive: true,
    item_tag: "$1000 Off",
    category: "video",
    inventory: 70,
  },
  {
    _id: "63f616b6524b408fb9d9f02c",
    title:
      "Canon EOS R5 C Mirrorless Digital Cinema Camera w/RF 24-105mm f/4 L IS USM Lens",
    img: "https://www.adorama.com/images/product/car5cbk.jpg",
    brand: "BZB GEAR",
    rating: 4.3,
    review: 21,
    price: 5499,
    isActive: true,
    item_tag: "Special",
    category: "video",
    inventory: 70,
  },
  {
    _id: "63f616b6524b408fb9d9f02d",
    title: "Sony PXW-FX9 XDCAM 6K Full Frame Camera System",
    img: "https://www.adorama.com/images/product/sopxwfx9.jpg",
    brand: "Canon",
    rating: 4.8,
    review: 6,
    price: 10999.99,
    isActive: true,
    item_tag: "Top Rated Gear",
    category: "video",
    inventory: 70,
  },
  {
    _id: "63f616b6524b408fb9d9f02e",
    title: "Blackmagic Design Pocket Cinema Camera 6K Pro",
    img: "https://www.adorama.com/images/product/bmccamp6kpro.jpg",
    brand: "BirdDog",
    rating: 4.8,
    review: 150,
    price: 2535,
    isActive: true,
    item_tag: "Top Rated Gear",
    category: "video",
    inventory: 70,
  },
  {
    _id: "63f616b6524b408fb9d9f02f",
    title: "RED Digital Cinema KOMODO 6K Production Pack",
    img: "https://www.adorama.com/images/product/rd7100340.jpg",
    brand: "BirdDog",
    rating: 4.9,
    review: 14,
    price: 8200,
    isActive: true,
    item_tag: "Top Rated Gear",
    category: "video",
    inventory: 70,
  },
  {
    _id: "63f616b6524b408fb9d9f030",
    title:
      "Sony FX3 Full-Frame Cinema Line Camera with DJI RS 3 Pro Combo Gimbal",
    img: "https://www.adorama.com/images/product/soilmefx3gk.jpg",
    brand: "Sony",
    rating: 4.8,
    review: 70,
    price: 4849.99,
    isActive: true,
    item_tag: "Kit Savings",
    category: "video",
    inventory: 70,
  },
  {
    _id: "63f616b6524b408fb9d9f031",
    title:
      "Sony FX3 Full-Frame Cinema Line Camera with FE 24-70mm f/2.8 GM II Lens",
    img: "https://www.adorama.com/images/product/soilmefx3l1.jpg",
    brand: "Sony",
    rating: 4.8,
    review: 70,
    price: 6197.99,
    isActive: true,
    item_tag: "Kit Savings",
    category: "video",
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

const Camera = () => {
  function Added() {
    console.log("ijns");
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
          Camera Accessories
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
                      <strike> {`Regular Price: $${Math.floor(el.price * 1.5)}.00`}</strike>
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

export default Camera;
