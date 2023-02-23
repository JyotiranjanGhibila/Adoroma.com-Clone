
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
  Text
} from "@chakra-ui/react";
import React from "react";

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      <Button leftIcon={<HamburgerIcon  />} onClick={onOpen}></Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Stack spacing="24px">
              <Box mt="30px">
                <Text>Products</Text>
                <Text>Brands</Text>
                <Text>Used</Text>
                <Text>Deals</Text>
              </Box>
              <hr />
              <Box>
                <Text>New Arrivals</Text>
                <Text>Pre order</Text>
                <Text>Gift cards</Text>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Select Owner</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="segun">Segun Adebayo</option>
                  <option value="kola">Kola Tioluwani</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
