import { Box, Flex, Grid, GridItem, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import {Link } from "react-router-dom";
import "./dropdown.css";

 const brandsArr = [
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-1.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-2.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-3.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-4.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-5.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-6.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-7.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-8.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-9.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-10.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-11.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-12.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-18.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-14.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-15.png",
   "https://www.adorama.com/col/header-21/prod/brands/brand-image-17.png",
 ];


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
            <div className="dropdown">
              <a to="">
                <button className="dropbtn" style={{ fontSize: "16px" }}>
                  Products
                </button>
              </a>
              <div className="dropdown-content">
                <div className="row">
                  <div className="column">
                    <Box
                      style={{ display: "flex", gap: "50px" }}
                      pl={10}
                      pt={4}
                    >

                      <Box >
                        <Link to='/photography'>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Camera
                        </Text>
                        </Link>
                        <Text pt={6} pb={6} fontWeight={"semibold"}>
                          Lenses
                        </Text>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Tripods and supports
                        </Text>
                      </Box>

                      <Box>
                        <Stack>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            Camera
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Mirrorless Cameras
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Digital SLR Cameras
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Digital Point & Shoot Cameras
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Medium Format Cameras
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Instant Cameras
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Specialty Cameras
                          </Text>
                        </Stack>

                        <Stack pt={6} pb={6}>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            Light Stands & Mounting
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Light Booms & Stands
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Grips, Clamps & Arms
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Trussing Equipment Railing
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Hardware Umbrella Mounts
                          </Text>
                        </Stack>
                      </Box>
                      <Box>
                        <Stack pb={6}>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            Headphones & Earphones
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Wireless & Bluetooth Headphones
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Earphones & Earbuds Headphones
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            DJ & Studio Headphones
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Computer & Gaming Headsets
                          </Text>
                        </Stack>

                        <Stack>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            PlayStation
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            PlayStation Consoles
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            PlayStation Games
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            PlayStation Accessories
                          </Text>
                        </Stack>
                      </Box>
                      <Box>
                        <Stack>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            Desktop Computers
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            All in One PCs
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Apple Desktops
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Barebone PCs Desktops
                          </Text>
                        </Stack>

                        <Stack>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            Drone Accessories
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Drone Lighting
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Propellers & Guards
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Replacement Parts
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Lens Filters
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Landing Gear
                          </Text>
                        </Stack>
                      </Box>
                      <Box>
                        <Image
                          ml={12}
                          height="380px"
                          src="https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVqaWZpbG0lMjBjYW1lcmF8ZW58MHx8MHx8&w=1000&q=80"
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
            <div className="dropdown">
              <a to="/televisions">
                <button className="dropbtn" style={{ fontSize: "16px" }}>
                  Brands
                </button>
              </a>
              <div className="dropdown-content">
                <div className="row">
                  <div className="column">
                    <Box
                      style={{ display: "flex", gap: "50px" }}
                      pl={10}
                      pt={4}
                      pb={6}
                    >
                      <Box>
                        <SimpleGrid columns={[2, 4, 4]} spacing="10px">
                          {brandsArr.map((el,i) => (
                            <Box border={"1px solid silver"} width={"150px"} key={i}>
                              {" "}
                              <Image src={el} width={"100%"} padding={"10px"} />
                            </Box>
                          ))}
                        </SimpleGrid>
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
                        <Image
                          ml={12}
                          height="450px"
                          src="https://images.unsplash.com/photo-1613047503507-b8d01ce6af26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHklMjBjYW1lcmF8ZW58MHx8MHx8&w=1000&q=80"
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
            <div className="dropdown">
              <a to="">
                <button className="dropbtn" style={{ fontSize: "16px" }}>
                  Used
                </button>
              </a>
              <div className="dropdown-content">
                <div className="row">
                  <div className="column">
                    <Box
                      style={{ display: "flex", gap: "50px" }}
                      pl={10}
                      pt={4}
                      pb={6}
                    >
                      <Box>
                        <Stack>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            Photography
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Lighting & Studio
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Tripods & Supports
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Camera Accessories
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Medium Format Cameras
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Bags & Cases
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Mobile Photography
                          </Text>
                        </Stack>

                        <Stack pt={6} pb={6}>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            Light Stands & Mounting
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Light Booms & Stands
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Grips, Clamps & Arms
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Trussing Equipment Railing
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Hardware Umbrella Mounts
                          </Text>
                        </Stack>
                      </Box>
                      <Box>
                        <Stack pb={6}>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            Headphones & Earphones
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Wireless & Bluetooth Headphones
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Earphones & Earbuds Headphones
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            DJ & Studio Headphones
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Computer & Gaming Headsets
                          </Text>
                        </Stack>

                        <Stack>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            PlayStation
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            PlayStation Consoles
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            PlayStation Games
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            PlayStation Accessories
                          </Text>
                        </Stack>
                      </Box>
                      <Box>
                        <Stack>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            Desktop Computers
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            All in One PCs
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Apple Desktops
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Barebone PCs Desktops
                          </Text>
                        </Stack>

                        <Stack>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            Drone Accessories
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Drone Lighting
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Propellers & Guards
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Replacement Parts
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Lens Filters
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Landing Gear
                          </Text>
                        </Stack>
                      </Box>

                      <Box>
                        <Stack pb={6}>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            Computers
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Laptops & Notebook
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Computers
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Computer Monitors & Mounts
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Digital Storage & Duplication
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Desktop Computers
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            iPads & Tablets
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Drives, SSD & Storage
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Computer Accessories
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Computer Components
                          </Text>
                        </Stack>
                      </Box>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
            <BiChevronDown />
          </Flex>

          <Flex alignItems="center">
            <div className="dropdown">
              <a to="">
                <button className="dropbtn" style={{ fontSize: "16px" }}>
                  Deals
                </button>
              </a>
              <div className="dropdown-content">
                <div className="row">
                  <div className="column">
                    <Box
                      style={{ display: "flex", gap: "50px" }}
                      pl={10}
                      pt={4}
                      pb={6}
                    >
                      <Box>
                        <Stack>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            Photography
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Lighting & Studio
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Tripods & Supports
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Camera Accessories
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Medium Format Cameras
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Bags & Cases
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Mobile Photography
                          </Text>
                        </Stack>
                        <Box>
                          <Stack pb={6} pt={4}>
                            <Text fontWeight={"semibold"} fontSize={"16px"}>
                              Computers
                            </Text>
                            <Text fontSize={"small"} id="menuSunLinksColor">
                              Laptops & Notebook
                            </Text>
                            <Text fontSize={"small"} id="menuSunLinksColor">
                              Computers
                            </Text>
                            <Text fontSize={"small"} id="menuSunLinksColor">
                              Computer Monitors & Mounts
                            </Text>
                            <Text fontSize={"small"} id="menuSunLinksColor">
                              Digital Storage & Duplication
                            </Text>
                            <Text fontSize={"small"} id="menuSunLinksColor">
                              Desktop Computers
                            </Text>
                            <Text fontSize={"small"} id="menuSunLinksColor">
                              iPads & Tablets
                            </Text>
                            <Text fontSize={"small"} id="menuSunLinksColor">
                              Drives, SSD & Storage
                            </Text>
                            <Text fontSize={"small"} id="menuSunLinksColor">
                              Computer Accessories
                            </Text>
                            <Text fontSize={"small"} id="menuSunLinksColor">
                              Computer Components
                            </Text>
                          </Stack>
                        </Box>
                      </Box>
                      <Box>
                        <Stack pb={6}>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            Drone Accessories
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Drone Lighting
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Propellers & Guards
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Replacement Parts
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Lens Filters
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Landing Gear
                          </Text>
                        </Stack>
                        <Stack pb={6} pt={4}>
                          <Text fontWeight={"semibold"} fontSize={"16px"}>
                            Desktop Computers
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            All in One PCs
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Apple Desktops
                          </Text>
                          <Text fontSize={"small"} id="menuSunLinksColor">
                            Barebone PCs Desktops
                          </Text>
                        </Stack>
                      </Box>
                    </Box>
                    <Box>
                      {" "}
                      <Stack pt={6} pb={6}>
                        <Text fontWeight={"semibold"} fontSize={"16px"}>
                          Light Stands & Mounting
                        </Text>
                        <Text fontSize={"small"} id="menuSunLinksColor">
                          Light Booms & Stands
                        </Text>
                        <Text fontSize={"small"} id="menuSunLinksColor">
                          Grips, Clamps & Arms
                        </Text>
                        <Text fontSize={"small"} id="menuSunLinksColor">
                          Trussing Equipment Railing
                        </Text>
                        <Text fontSize={"small"} id="menuSunLinksColor">
                          Hardware Umbrella Mounts
                        </Text>
                      </Stack>
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
