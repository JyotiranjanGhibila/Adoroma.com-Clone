import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import DrawerBtn from "./DrawerBtn";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/authSlice";

const Navbar = () => {
  // REDUX
  const { user, cart } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <Flex
        px="5"
        py="3"
        bg="blue.600"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack gap="3">
          <DrawerBtn />
          <RouterLink to="/">
            <Heading color="#fff">ElectroGlad</Heading>
          </RouterLink>
        </HStack>
        <HStack gap="3" cursor="pointer">
          <Input
            width="300px"
            bg="#fff"
            placeholder="Search..."
            display={{ base: "none", lg: "flex" }}
          />
          <RouterLink to="/login">
            <HStack color="#fff" fontSize={"3xl"} gap="0">
              <VscAccount />
              <Box
                w="20"
                _hover={{ textDecoration: "underline" }}
                display={{ base: "none", md: "block" }}
              >
                <Text fontSize="xs">{user ? user.first_name : "Sign In"}</Text>
                <Box fontSize="sm" fontWeight="500">
                  {user ? (
                    <Text onClick={() => dispatch(logoutUser())}>Sign Out</Text>
                  ) : (
                    "My Account"
                  )}
                </Box>
              </Box>
            </HStack>
          </RouterLink>
          <RouterLink to="/cart">
            <Flex fontSize={"3xl"} color="#fff" alignItems="center" gap="2">
              <FiShoppingCart />
              <Text fontSize={"sm"}>{cart?.length}</Text>
            </Flex>
          </RouterLink>
        </HStack>
      </Flex>
      <Flex
        px="5"
        py="2"
        bg="blue.600"
        alignItems="center"
        display={{ base: "flex", lg: "none" }}
      >
        <Input bg="#fff" placeholder="Search..."></Input>
      </Flex>
    </>
  );
};

export default Navbar;
