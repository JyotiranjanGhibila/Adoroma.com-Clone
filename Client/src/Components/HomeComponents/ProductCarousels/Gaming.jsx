import { Badge, Heading } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Flex, Circle, Box, Image } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

import AddtoCartModal from "../../cartComponents/AddtoCartModal";
import ReactStars from "react-stars";

const data = [
  {
    isNew: true,
    imageURL: "https://www.adorama.com/images/product/sops5gowb.jpg",
    name: "Sony PlayStation 5 825GB Gaming Console w/God of War Ragnarok, Standard Edition",
    price: 14099.0,
    rating: 4.5,
    numReviews: 34,
    id: 1,
  },
  {
    isNew: false,
    name: "Nintendo Switch 64GB OLED Console with White Joy-Con Controllers and Bundle Kit",
    imageURL: "https://www.adorama.com/images/product/niswioledwak.jpg",
    price: 10099.0,
    rating: 3,
    numReviews: 34,
    id: 2,
  },
  {
    isNew: true,
    name: "Nintendo Switch 64GB OLED Console with White Joy-Con Controllers",
    imageURL: "https://www.adorama.com/images/product/niswioledw.jpg",
    price: 87200.0,
    rating: 2,
    numReviews: 34,
    id: 3,
  },
  {
    isNew: false,
    name: "Microsoft Xbox Series S Gilded Hunters Bundle",
    imageURL: "https://www.adorama.com/images/product/xbfxssghb.jpg",
    price: 56000.0,
    rating: 2,
    numReviews: 34,
    id: 4,
  },
  {
    isNew: false,
    name: "Nintendo Switch 64GB OLED Console with Joy-Con Controllers and Bundle Kit",
    imageURL: "https://www.adorama.com/images/product/niswioldrbak.jpg",
    price: 34500.0,
    rating: 4,
    numReviews: 34,
    id: 5,
  },
  {
    isNew: false,
    name: "Nintendo Switch 64GB OLED Console with Neon Red & Neon Blue Joy-Con Controllers",
    imageURL: "https://www.adorama.com/images/product/niswioledrb.jpg",
    price: 20700.0,
    rating: 2,
    numReviews: 34,
    id: 6,
  },
  {
    isNew: false,
    name: "Microsoft Xbox Series S Console",
    imageURL: "https://www.adorama.com/images/product/xbrrs00001.jpg",
    price: 18500.0,
    rating: 5,
    numReviews: 34,
    id: 7
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


const Gaming = () => {
  return (
    <div
      style={{
        padding: "10px",
        marginTop: "30px",
        marginBottom: "30px",
        width: "100%",
      }}
    >
      <Flex textAlign={"left"} alignItems="baseline" padding="10px">
        <Heading textAlign={"left"} fontWeight="normal">
          Gaming and Accessories
        </Heading>
        {}
        <span>Special offers</span>
      </Flex>

      <Slide
        slidesToScroll={1}
        slidesToShow={3}
        responsive={responsiveSettings}
      >
        {data.map((el,i) => (
          <Flex
            p={2}
            w="full"
            alignItems="center"
            justifyContent="center"
            className="myDiv"
            key={i}
          >
            <Box
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative"
            >
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
                    <Box as="span" color={"gray.600"} fontSize="sm" margin={1}>
                      <strike> {`Regular Price: $${el.price * 1.5}.00`}</strike>
                    </Box>
                  </Box>
                </Flex>
                <Flex justifyContent="center" alignContent="center">
                  <Box fontSize="md">
                    <Box as="span" color={"gray.600"} fontSize="sm" margin={1}>
                      {`Instant Rebate: $${el.price / 2}.00`}
                    </Box>
                  </Box>
                </Flex>
<<<<<<< HEAD
                <Flex
                  mt="1"
                  justifyContent="center"
                  alignContent="center"
                  margin={1}
                >
                  <Box fontSize="md" as="p" lineHeight="tight" margin={1}>
                    <ReactStars
                      count={el.rating}
                      size={24}
                      color1={"#ffd700"}
                    />
=======

                <Flex mt="1" justifyContent="center" alignContent="center">
                  <Box fontSize="md" lineHeight="tight" margin={1}>
                    <ReactStars count={el.rating} color1={"#ffd700"} />
>>>>>>> 41390e3b1630bde987ec6d8e2e55f0b4f6675060
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
                  <Box fontSize="md" margin="auto">
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

<<<<<<< HEAD
                <Box className="hide" margin="auto">
                  <AddtoCartModal data={data} />
=======
                <Box className="hide" margin="auto" width="fit-content">
                  <AddtoCartModal />
>>>>>>> 41390e3b1630bde987ec6d8e2e55f0b4f6675060
                </Box>
              </Box>
            </Box>
          </Flex>
        ))}
      </Slide>
    </div>
  );
};

export default Gaming;
