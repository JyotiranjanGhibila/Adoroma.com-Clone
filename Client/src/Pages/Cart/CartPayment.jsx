import React, { useState, useEffect } from "react";
import { Box, Image, Text, FormLabel } from "@chakra-ui/react";
import { ProductPriceDetails } from "../Components/ProductPriceDetails";
import { CartPageFooter } from "../Components/CartPageFooter";
import { PaymentDetails } from "../Components/PaymentDetails";
import Wardrobe from "../Utils/Wardrobe.png";
import { getCartData } from "../../Redux/Cart/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const CartPayment = ({ coupon = 0, convience = 0 }) => {

  const [price, setprice] = useState(0)
  const [afterdeduction, setafterdeduction] = useState(0)
  const cartData = useSelector(store => store.CartReducer.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCartData())
    let sum = 0;
    let finalprice = 0
    let newPrice = cartData?.map((el) => {

      let y = +el.strike_price
      let x = +el.discounted_price

      sum = sum + y
      finalprice += x
      console.log("cart amoyun", sum, finalprice)


    })
    setprice(sum)
    setafterdeduction(finalprice)
  }, [])



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
          BAG ------------ ADDRESS ------------{" "}
          <span style={{ color: "#48BB78" }}>PAYMENT</span>
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
        <Box>
          <PaymentDetails />
        </Box>

        <Box>

          <Box mt="5px" width="280px">

            <Box lineHeight={"25px"} gap={7} display={"flex"}>
              <Box textAlign={"left"}>
                <FormLabel fontSize="13px">PRICE DETAILS({cartData.length} Items)</FormLabel>
                <Text fontSize={"14px"}>Total MRP</Text>
                <Text fontSize={"14px"}>Discount on MRP</Text>
                <Text fontSize={"14px"}>Coupon Discount</Text>
                <Text mb="10px" fontSize={"14px"}>
                  Convience Fee{" "}
                  <span
                    style={{ color: "#FF3F6C", fontWeight: "bold", fontSize: "15px" }}
                  >
                    Know More
                  </span>
                </Text>
                <hr />
                <FormLabel fontSize="14px">Total Amount</FormLabel>
              </Box>
              <Box mt="30px" lineHeight={"25px"} textAlign={"right"}>
                <Text fontSize={"14px"}>₹{price}</Text>
                <Text fontSize={"14px"} color="green.400">
                  -₹{price - afterdeduction}
                </Text>
                <Text fontSize={"14px"} color="green.400">
                  -₹{coupon}
                </Text>
                <Text mb="14px" fontSize={"14px"} color="green.400">
                  {convience > 0 ? convience : "FREE"}
                </Text>
                <hr />
                <FormLabel fontSize="14px">
                  ₹{afterdeduction - coupon + convience}
                </FormLabel>
              </Box>
            </Box>
          </Box>






        </Box>
      </Box>

      <Box mt="40px">
        <CartPageFooter />
      </Box>
    </Box>
  );
};
