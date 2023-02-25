import { Box, Button, Image, Progress, Spacer, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddressDetails } from "../Components/AddressDetails";
import { AddressInput } from "../Components/AddressInput";
import { CartPageFooter } from "../Components/CartPageFooter";
import { ProductPriceDetails } from "../Components/ProductPriceDetails";
import { getAddres } from "../Redux/CartAddress/action";
import Wardrobe from "../Utils/Wardrobe.png";
import { Link } from "react-router-dom";

export const CartAddress = () => {
  const dispatch = useDispatch();

  const address = useSelector((store) => store.CartAddress.address);

  useEffect(() => {
    dispatch(getAddres());
  }, []);

  console.log("get", address);
  return (
    <Box>
      <Box
        display={"flex"}
        boxShadow=" rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;"
        padding="15px 60px"
        justifyContent={"space-between"}
      >
        <Box w="13%">
          <Link to='/'><Image w="35%" src={Wardrobe} /></Link>
        </Box>

        <Box
          mt="10px"
          letterSpacing={"2px"}
          fontSize={"12px"}
          display={"flex"}
          textAlign={"center"}
          color="grey"
          fontWeight="bold"
        >
          BAG ------------ <span style={{ color: "#48BB78" }}>ADDRESS</span>{" "}
          ------------ PAYMENT
        </Box>

        <Box>
          <Box display={"flex"}>
            <Image
              w="15%"
              src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            />
            <Text
              fontSize={"12px"}
              mt="3px"
              ml="2px"
              color="#535766"
              letterSpacing={"2px"}
            >
              100% SECURE
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        m="auto"
        width={{ base: "100%", md: "100%", lg: "60%" }}
        justifyContent="space-evenly"
      >
        <Box>{address.length > 0 ? <AddressDetails /> : <AddressInput />}</Box>

        <Box>
          <ProductPriceDetails />
          {address.length > 0 && (
            <Link to="/cartpayment">
              <Button
                mt="15px"
                p="20px"
                bg="#FF3F6C"
                colorScheme={"white"}
                w="100%"
              >
                CONTINUE
              </Button>
            </Link>
          )}
        </Box>
      </Box>

      <Box mt="40px">
        <CartPageFooter />
      </Box>
    </Box>
  );
};
