import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { a, Link } from "react-router-dom";
import "./dropdown.css";

const Dropdown = () => {
  return (
    <div>
      <Box
        backgroundColor={"#002f6c"}
        color="white"
        p={2}
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "space-between",
        }}
        pl={[0, 0, 0, 4, 4]}
        pr={[0, 0, 0, 4, 4]}
        fontSize={["13px", "13px", "13px", "16px"]}
       
      >
        <Flex width="400px" justify={"space-between"}>
          <Flex alignItems="center">
            <div class="dropdown">
              <a to="">
                <button class="dropbtn" style={{ fontSize: "16px" }}>
                  Products
                </button>
              </a>
              <div class="dropdown-content">
                <div class="row">
                  <div class="column">
                    <Box
                      style={{ display: "flex", gap: "50px" }}
                      pl={10}
                      pt={4}
                    >
                      <Box >
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Camera
                        </Text>
                        <Text pt={6} pb={6} fontWeight={"semibold"}>
                          Lenses
                        </Text>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Tripods and supports
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Headphones & Headsets
                        </Text>
                        <Text
                          fontWeight={"semibold"}
                          fontSize={"16px"}
                          pt={6}
                          pb={6}
                        >
                          Tablets & eReaders
                        </Text>
                        <Text fontSize={"14px"} mt={2}>
                          Every Day use Tablets below 15000
                        </Text>
                        <Text fontSize={"14px"} mt={2}>
                          Premium Tablets, above 15001
                        </Text>
                        <Text
                          fontWeight={"semibold"}
                          fontSize={"16px"}
                          pt={6}
                          pb={6}
                        >
                          Power Banks
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          AI Learning Robots
                        </Text>
                      </Box>

                      <Box>
                        <Image
                          mb={-2}
                          ml={14}
                          width="95%"
                          src="https://i.ibb.co/8D0JyY3/tablet-nav1.jpg"
                          alt="image"
                        />
                      </Box>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
            <BiChevronDown />
          </Flex>

          <Flex alignItems="center">
            <div class="dropdown">
              <a to="/televisions">
                <button class="dropbtn" style={{ fontSize: "16px" }}>
                  Brands
                </button>
              </a>
              <div class="dropdown-content">
                <div class="row">
                  <div class="column">
                    <Box
                      style={{ display: "flex", gap: "50px" }}
                      pl={10}
                      pt={4}
                      pb={6}
                    >
                      <Box>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Televisions
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Smart TV's
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          32 Inch Tv's
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          43 Inc TV's
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          55 Inch TV's
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Android TV's
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Gaming
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Gaming Consoles
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Gaming Accessories
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Gaming Titles
                        </Text>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Projectors
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Streming Devices
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Reconnect Disney | Marvel Audio Collections
                        </Text>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          TV & Audio Accessiories
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Vertual Reality Headsets
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Stablizers & Surge Protections
                        </Text>
                      </Box>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
            <BiChevronDown />
          </Flex>

          <Flex alignItems="center">
            <div class="dropdown">
              <a to="">
                <button class="dropbtn" style={{ fontSize: "16px" }}>
                  Used
                </button>
              </a>
              <div class="dropdown-content">
                <div class="row">
                  <div class="column">
                    <Box
                      style={{ display: "flex", gap: "50px" }}
                      pl={10}
                      pt={4}
                      pb={6}
                    >
                      <Box>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Headphones & Headsets
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          True Wireless
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Bluetooth Nechbands
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Wired Earphones
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          On Ear Headphones
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Hoise Cancellling Headphones
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Bluetooth & WiFi Speakers
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Blueetooth Speakers
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Smart Speakers
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Gaming Titles
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          TV Speakers & Soundbars
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Soundbars
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Home Theatre System
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Party Speakers
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Multimedia
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Musical Insturments
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Guitars and Ukuleses
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Microphones
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Musical Keyboards
                        </Text>
                      </Box>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
            <BiChevronDown />
          </Flex>

          <Flex alignItems="center">
            <div class="dropdown">
              <a to="">
                <button class="dropbtn" style={{ fontSize: "16px" }}>
                  Deals
                </button>
              </a>
              <div class="dropdown-content">
                <div class="row">
                  <div class="column">
                    <Box
                      style={{ display: "flex", gap: "50px" }}
                      pl={10}
                      pt={4}
                      pb={6}
                    >
                      <Box>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Air conditioners
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Split Air Conditions
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Window Air Conditions
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Smart Air Conditions
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Energy Efficient Air Conditions
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          1 ton Air Conditions
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          1.5 ton Air Conditions
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          5 ton Air Conditions
                        </Text>
                        <Text fontWeight={"semibold"} mt={4} fontSize={"16px"}>
                          Air Cooler
                        </Text>
                        <Text fontWeight={"semibold"} mt={4} fontSize={"16px"}>
                          Air Purifier
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Washing Machines
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Fully Automatic Front Load
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Fully Automatic Top Load
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Semi-Automatic Top Load
                        </Text>
                        <Text fontWeight={"semibold"} fontSize={"16px"} mt={4}>
                          Refrigerator
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Single Door
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Double Door
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Side by Side Refrigerator
                        </Text>
                        <Text fontSize={"14px"} mt={3}>
                          Convertible
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Vacuum Cleaners
                        </Text>
                        <Text fontWeight={"semibold"} fontSize={"16px"} mt={4}>
                          Robotic Vacuum Cleaners
                        </Text>
                        <Text fontWeight={"semibold"} fontSize={"16px"} mt={4}>
                          Dishwashers
                        </Text>
                        <Text fontWeight={"semibold"} fontSize={"16px"} mt={4}>
                          FAns
                        </Text>
                        <Text fontWeight={"semibold"} fontSize={"16px"} mt={4}>
                          Cloth Dryers
                        </Text>
                        <Text fontWeight={"semibold"} fontSize={"16px"} mt={4}>
                          Geysers
                        </Text>
                        <Text fontWeight={"semibold"} fontSize={"16px"} mt={4}>
                          Room Heater
                        </Text>
                      </Box>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
            <BiChevronDown />
          </Flex>
        </Flex>
        <Flex fontSize={"sm"} justify="space-evenly" width={"60%"}>
          <a href="#jhbfv">Deals of the day</a>
          <a href="#jhbfv">ElectroGlad Credit Card</a>
          <a href="#jhbfv">VIP REwards</a>
          <a href="#jhbfv">Gift Cards</a>
          <a href="#jhbfv">Students</a>
          <a href="#jhbfv">#CreateNoMatterWhat</a>
        </Flex>
      </Box>
    </div>
  );
};

export default Dropdown;
