import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  FormLabel,
  Input,
  Box,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Button
        leftIcon={<HamburgerIcon />}
        onClick={onOpen}
        background="none"
       fontSize={"3xl"}
      ></Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"white"} />

          <DrawerBody backgroundColor={"#002f6c"} color={"white"}>
            <Stack spacing="24px">
              <Box mt="30px">
                <Text
                  cursor={"pointer"}
                  _hover={{
                    fontWeight: "bold",
                  }}
                >
                  Products
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    fontWeight: "bold",
                  }}
                >
                  Brands
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    fontWeight: "bold",
                  }}
                >
                  Used
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    fontWeight: "bold",
                  }}
                >
                  Deals
                </Text>
              </Box>
              <hr />
              <Box lineHeight={1.7}>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  New Arrivals
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  Pre order
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  Gift cards
                </Text>
              </Box>
              <hr />
              <Box lineHeight={1.7}>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  Deals of the day
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  ElectroGlad Credit Card
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  VIP Rewards
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  Gift Cards
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  Students
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  #CreateNoMatterWhat
                </Text>
              </Box>
              <hr />
              <Box lineHeight={1.7}>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  Help
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  Live Chat
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  Our NYC Store
                </Text>
              </Box>
              <hr />
              <Box lineHeight={1.7}>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  ElectroGlad Business
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  ElectroGlad Rentals
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  PRINTIQUE
                </Text>
                <Text
                  cursor={"pointer"}
                  _hover={{
                    color: "pink",
                    marginLeft: "5px",
                    textDecoration: "underline",
                  }}
                >
                  OUR BLOG
                </Text>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px"></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
