import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineRight } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const DrawerBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Text ref={btnRef} p="0" color="#fff" fontSize="3xl" onClick={onOpen}>
        <GiHamburgerMenu />
      </Text>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="blue.600" color="#fff">
          <DrawerCloseButton />
          <DrawerHeader>
            <RouterLink to="/" onClick={onClose}>
              ElectroGlad
            </RouterLink>
          </DrawerHeader>

          <DrawerBody>
            <RouterLink to="/photography-category">
              <Flex
                p="2"
                justifyContent="space-between"
                alignItems="center"
                fontSize="lg"
                onClick={onClose}
              >
                <Text>Photography</Text>
                <AiOutlineRight />
              </Flex>
            </RouterLink>

            <RouterLink to="/video">
              <Flex
                p="2"
                justifyContent="space-between"
                alignItems="center"
                fontSize="lg"
                onClick={onClose}
              >
                <Text>Video</Text>
                <AiOutlineRight />
              </Flex>
            </RouterLink>

            <RouterLink to="/computer">
              <Flex
                p="2"
                justifyContent="space-between"
                alignItems="center"
                fontSize="lg"
                onClick={onClose}
              >
                <Text>Computers</Text>
                <AiOutlineRight />
              </Flex>
            </RouterLink>

            <RouterLink to="/drone">
              <Flex
                p="2"
                justifyContent="space-between"
                alignItems="center"
                fontSize="lg"
                onClick={onClose}
              >
                <Text>Drones</Text>
                <AiOutlineRight />
              </Flex>
            </RouterLink>

            <RouterLink to="/gaming-category">
              <Flex
                p="2"
                justifyContent="space-between"
                alignItems="center"
                fontSize="lg"
                onClick={onClose}
              >
                <Text>Gaming</Text>
                <AiOutlineRight />
              </Flex>
            </RouterLink>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerBtn;
