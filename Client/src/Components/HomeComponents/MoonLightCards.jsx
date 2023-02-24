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
import AddtoCartModal from "../cartComponents/AddtoCartModal"


const data = [
  {
    isNew: true,
    imageURL:
      "https://www.reliancedigital.in/medias/boAt-Rockerz-255-Pro-Active-Bluetooth-Earphones-492912673-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMzcwNHxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaGE3Lzk4MzIxMDEwODUyMTQuanBnfDJkNjAyYzhmNjBmMTIzYTRmZGNjMmJhZWEyY2ZiYzNkYmY3MjM1NjUwODIyOTNjNzg1YzE5MzFkNjc0ZWI2NDg",
    name: "boAt Rockerz 255R Pro in Ear Bluetooth Neckband with Upto 10 Hours Playback, ASAP Charge, IPX5, boAt Signature Sound & Integrated Controls(Active Black)",
    price: 14099.00,
    rating: 4.5,
    numReviews: 34,
  },
  {
    isNew: false,
    name: "boAt Airdopes 131 RTL Twin Wireless Earbuds with IWP Technology, Bluetooth V5.0, Immersive Audio, Up to 15H Total Playback, Instant Voice Assistant and Type-C Charging",
    imageURL:
      "https://www.reliancedigital.in/medias/boAt-Airdopes-131-RTL-Earbuds-491973401-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODM2fGltYWdlL2pwZWd8aW1hZ2VzL2g2OC9oYzgvOTgzMjI2MTg3Nzc5MC5qcGd8ZmIzMWZlZDQxNGRiYmQ1YWVjYTNmNDM3MTc4MGNlYmNlYjg1NTZmNDA0NzAzOTY5NmQyNjYyNmJhOWIwZGMxYg",
    price: 10099.00,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    name: "Apple MME73HN/A 3rd Generation Airpods with Mic and Wireless Charging Case, White",
    imageURL:
      "https://www.reliancedigital.in/medias/Apple-Airpods-492571632-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTQ1NnxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaGU2Lzk4MjU2MDg5OTA3NTAuanBnfGU0MjZmMjM3YjYwMDhkYmUxOWIwYjllNTczODI0YzdjY2EyYTMyYjY5MTQ3ZTE4Y2I2YzEwNGMyN2Q1N2MwMzU",
    price: 87200.00,
    rating: 3.2,
    numReviews: 34,
  },
  {
    isNew: false,
    name: "Apple MME73HN/A 3rd Generation Airpods with Mic and Wireless Charging Case, White",
    imageURL:
      "https://www.reliancedigital.in/medias/Apple-Airpods-492571632-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTQ1NnxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaGU2Lzk4MjU2MDg5OTA3NTAuanBnfGU0MjZmMjM3YjYwMDhkYmUxOWIwYjllNTczODI0YzdjY2EyYTMyYjY5MTQ3ZTE4Y2I2YzEwNGMyN2Q1N2MwMzU",
    price: 56000.00,
    rating: 3.2,
    numReviews: 34,
  },
  {
    isNew: false,
    name: "Apple MME73HN/A 3rd Generation Airpods with Mic and Wireless Charging Case, White",
    imageURL:
      "https://www.reliancedigital.in/medias/Apple-Airpods-492571632-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTQ1NnxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaGU2Lzk4MjU2MDg5OTA3NTAuanBnfGU0MjZmMjM3YjYwMDhkYmUxOWIwYjllNTczODI0YzdjY2EyYTMyYjY5MTQ3ZTE4Y2I2YzEwNGMyN2Q1N2MwMzU",
    price: 34500.00,
    rating: 3.2,
    numReviews: 34,
  },
  {
    isNew: false,
    name: "Apple MME73HN/A 3rd Generation Airpods with Mic and Wireless Charging Case, White",
    imageURL:
      "https://www.reliancedigital.in/medias/Apple-Airpods-492571632-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTQ1NnxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaGU2Lzk4MjU2MDg5OTA3NTAuanBnfGU0MjZmMjM3YjYwMDhkYmUxOWIwYjllNTczODI0YzdjY2EyYTMyYjY5MTQ3ZTE4Y2I2YzEwNGMyN2Q1N2MwMzU",
    price: 20700.00,
    rating: 3.2,
    numReviews: 34,
  },
  {
    isNew: false,
    name: "Apple MME73HN/A 3rd Generation Airpods with Mic and Wireless Charging Case, White",
    imageURL:
      "https://www.reliancedigital.in/medias/Apple-Airpods-492571632-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTQ1NnxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaGU2Lzk4MjU2MDg5OTA3NTAuanBnfGU0MjZmMjM3YjYwMDhkYmUxOWIwYjllNTczODI0YzdjY2EyYTMyYjY5MTQ3ZTE4Y2I2YzEwNGMyN2Q1N2MwMzU",
    price: 18500.00,
    rating: 3.2,
    numReviews: 34,
  },
];


function Rating({ rating, numReviews }) {
  return (
    <Flex d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Flex>
  );
}


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
const MoonLightCards = () => {
  
  return (
    <div style={{ padding: "10px", marginTop: "30px" }}>
      <Flex textAlign={"left"} alignItems="baseline">
        <Heading textAlign={"left"} fontWeight="normal" padding={"10px"}>
          Mobile Accessories
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
                  <Box fontSize="lg" as="p" lineHeight="tight" id="userName">
                    {el.name}
                  </Box>
                </Flex>
                <Flex justifyContent="center" alignContent="center">
                  <Box fontSize="md">
                    <Box as="span" color={"gray.600"} fontSize="md">
                      <strike> {`Regular Price: $${el.price * 1.5}.00`}</strike>
                    </Box>
                  </Box>
                </Flex>
                <Flex justifyContent="center" alignContent="center">
                  <Box fontSize="md">
                    <Box as="span" color={"gray.600"} fontSize="md">
                      {`Instant Rebate: $${el.price / 2}.00`}
                    </Box>
                  </Box>
                </Flex>
                <Flex mt="1" justifyContent="center" alignContent="center">
                  <Box fontSize="md" as="p" lineHeight="tight">
                    <Rating />
                  </Box>
                </Flex>
                <Flex justifyContent="center" alignContent="center">
                  <Box fontSize="md">
                    <Box as="span" color={"gray.600"} fontSize="md">
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
                    <Box as="span" color={"blue.500"} fontSize="smaller">
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

export default MoonLightCards
