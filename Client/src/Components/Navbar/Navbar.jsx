


import {Link} from "react-router-dom"


import {
  Box,
  Flex,
  Text,
  HStack,

  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  Input,
  Grid,
} from "@chakra-ui/react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { BsCart, BsPerson } from "react-icons/bs";
import FetchProduct from "./FetchProduct";
import { AiFillGift } from "react-icons/ai";
import Dropdown from "../NavComponents/Dropdown";
import NavDrawer from "../NavComponents/Drawer";
import { FcLike } from "react-icons/fc";
import { FaRegAddressCard } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";


import Ads from "../HomeComponents/Ads/Ads";
import { useEffect, useState } from "react";
import SearchData from "../HomeComponents/ProductCarousels/SearchData";
const Links = ["Dashboard", "Projects", "Team"];


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   FetchProduct("")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((er) => {
  //       console.log("err:", er);
  //     });
  // }, []);

  
  const handleSearch = () => {
    FetchProduct(query)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
     
  };

  return (
    <>
      <Flex
        justifyContent={"center"}
        background="black"
        color="white"
        padding={"5px"}
        fontSize="sm"
        display={["none", "none", "none", "flex"]}
      >
        <Text textColor={"orange"} fontWeight="bold" marginRight={"5px"}>
          CALL & SAVE.
        </Text>{" "}
        Save up to $200 on most brands exclusively when you call your Personal
        Shopper at
        <Text
          textColor={"orange"}
          fontWeight="bold"
          marginRight={"5px"}
          marginLeft={"5px"}
        >
          888-270-6162.
        </Text>{" "}
        CALL NOW
      </Flex>

      <Box
        bg={useColorModeValue("#002f6c")}
        color="white"
        px={4}
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={1} alignItems={"left"} marginLeft="-15px">
            <Grid
              display={["flex", "flex", "flex", "none"]}
              alignItems="center"
            >
              <NavDrawer />
            </Grid>

            <Box fontSize={["xl", "2xl", "4xl", "4xl"]} fontFamily="cursive">
              ElectroGlad
            </Box>
          </HStack>
          <Flex
            alignItems={"center"}
            width={["40%", "40%", "50%", "50%"]}
            justifyContent="space-evenly"
          >
            <InputGroup
              mt={2}
              display={["none", "none", "block"]}
              marginRight="40px"
            >
              <Input
              
                borderRadius="20px"
                variant={"none"}
                height="35px"
                color="black"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="search"
              />
              <button onClick={handleSearch}>SEARCH</button>
              <InputRightElement
                children={<Search2Icon size={"18px"} color={"gray"} />}
              />
            </InputGroup>
            <Menu>
              <Flex
                variant={"Avatar"}
                cursor={"pointer"}
                alignItems="center"
                textAlign={"center"}
              >
                <BsPerson size={"30px"} />
                <Box
                  lineHeight={1}
                  textAlign="center"
                  w={"fit-content"}
                  display={["none", "block", "block", "block"]}
                  padding="10px"
                >
                  <p style={{ marginRight: "60px" }}> Hi,Braj</p>
                  <Menu>
                    <Link to="/login">
                      <MenuButton
                        as={Button}
                        bg="none"
                        height="fit-content"
                        width={"max-content"}
                        rightIcon={<ChevronDownIcon />}
                      >
                        My Account
                      </MenuButton>
                    </Link>
                    <MenuList textColor="black" padding={"10px"}>
                      <MenuItem>
                        <AiFillGift /> Join VIP Rewards
                      </MenuItem>
                      <MenuItem>
                        <BsPerson /> My Account
                      </MenuItem>
                      <MenuItem>
                        <BiShoppingBag /> My Orders
                      </MenuItem>
                      <MenuItem>
                        <FcLike /> <span>Wishlists</span>
                      </MenuItem>
                      <MenuItem>
                        <FaRegAddressCard /> Address books
                      </MenuItem>
                      <a href="">Signout</a>
                    </MenuList>
                  </Menu>
                </Box>
              </Flex>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"Avatar"}
                cursor={"pointer"}
                minW={0}
              >
                <BsCart size={"30px"} />
              </MenuButton>
              <MenuList alignItems={"flex-start"} color="black">
                <MenuItem>Total items:</MenuItem>
                <MenuItem>Total price:</MenuItem>
                <MenuDivider />
                <MenuItem>Quantity:</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      <Box display={["none", "none", "none", "block"]}>
        <Dropdown />
      </Box>
      <Flex
        alignItems={"center"}
        background="#002f6c"
        justifyContent="space-evenly"
        height={"50px"}
        display={["block", "block", "none", "none"]}
      >
        <InputGroup w={"80%"} margin="auto">
          <Input
            placeholder="Search"
            borderRadius="20px"
            variant={"none"}
            height="35px"
            marginTop={2}
          />
          <InputRightElement
            children={
              <Search2Icon size={"18px"} color={"gray"} marginTop={2} />
            }
          />
        </InputGroup>
      </Flex>
       
          {
            data.map((el)=>{
              return <SearchData key={el.id} img={el.img} title={el.title} brand={el.brand} />
            })
          }
       
    </>
  );
}
