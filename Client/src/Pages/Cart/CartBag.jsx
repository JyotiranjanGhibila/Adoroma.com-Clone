import React, { useState, useEffect } from "react";
import { Box, Image, Text, FormLabel } from "@chakra-ui/react";
import { ProductPriceDetails } from "../Components/ProductPriceDetails";
import { CartPageFooter } from "../Components/CartPageFooter";
import { PaymentDetails } from "../Components/PaymentDetails";
import Wardrobe from "../Utils/Wardrobe.png";
import { getCartData } from "../Redux/Cart/action";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TbDiscount2 } from "react-icons/tb";
import { BagDetails } from "../Components/BagDetails";
export const CartBag = ({ coupon = 0, convience = 0 }) => {
  const [price, setprice] = useState(0);
  const [afterdeduction, setafterdeduction] = useState(0);
  const cartData = useSelector((store) => store.CartReducer.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartData());
    let sum = 0;
    let finalprice = 0;
    let newPrice = cartData?.map((el) => {
      let y = +el.strike_price;
      let x = +el.discounted_price;

      sum = sum + y;
      finalprice += x;
      console.log("cart amoyun", sum, finalprice);
    });
    setprice(sum);
    setafterdeduction(finalprice);
  }, [cartData.length]);

  console.log("cart bag price details", price, afterdeduction);

  return (
    <Box>
      <Box
        display={"flex"}
        boxShadow=" rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;"
        padding="15px 60px"
        justifyContent={"space-between"}
      >
        <Box w="13%">
          <Link to="/">
            <Image w="35%" src={Wardrobe} />
          </Link>
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
          <span style={{ color: "#48BB78" }}> BAG</span> ------------ ADDRESS
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
        <Box>
          <Box mt="20px" w={{ base: "95%", md: "95%", lg: "650px" }} mr="50px">
            <Box
              p="10px"
              boxShadow="  rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
              justifyContent="space-between"
            >
              <Box gap="2" display={"flex"}>
                <TbDiscount2 />
                <FormLabel fontWeight="bold" fontSize="14px">
                  Bank Offer
                </FormLabel>
              </Box>

              <Accordion allowMultiple>
                <AccordionItem>
                  <Box
                    color={"grey"}
                    textAlign={"left"}
                    fontSize="13px"
                    ml="30px"
                  >
                    <ul>
                      <li>
                        <span>
                          10% Instant Discount on Citi Credit and Debit Cards on
                          a min spend of Rs 3,000. TCA
                        </span>
                      </li>
                    </ul>
                  </Box>
                  <AccordionPanel pb={4}>
                    <Box
                      color={"grey"}
                      textAlign={"left"}
                      fontSize="13px"
                      ml="15px"
                    >
                      <ul>
                        <li>
                          10% Instant Discount on ICICI Bank Credit Cards on a
                          min spend of Rs 4,000. TCA
                        </li>
                        <li>
                          10% Instant Discount on ICICI Bank Credit Cards on a
                          min spend of Rs 4,000. TCA
                        </li>
                        <li>
                          Get up to Rs 500 Cashback on CRED Pay UPI on a min
                          spend of Rs 1,000. TCA
                        </li>
                        <li>
                          5% Cashback on Paytm Wallet and Postpaid Transactions
                          on a min spend of Rs 1,500. TCA
                        </li>
                        <li>
                          5% Unlimited Cashback on Flipkart Axis Bank Credit
                          Card. TCA
                        </li>
                        <li>
                          10% Cashback upto Rs 150 on Freecharge Paylater
                          transaction. TCA
                        </li>
                      </ul>
                    </Box>
                  </AccordionPanel>
                  <Text>
                    <AccordionButton>
                      <Button
                        bg="white"
                        fontWeight={"bold"}
                        color={"#FF3F6C"}
                        fontSize={"12px"}
                        size="sm"
                        as="span"
                        textAlign="left"
                      >
                        Show More <AccordionIcon />
                      </Button>
                    </AccordionButton>
                  </Text>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box>
              <FormLabel fontWeight="bold" mb="25px" mt="25px" fontSize="16px">
                TOTAL {cartData && cartData.length} ITEMS
              </FormLabel>
            </Box>
            <Box boxShadow="  rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;">
              {cartData?.map((el) => (
                <BagDetails {...el} />
              ))}
            </Box>
          </Box>
        </Box>

        <Box>
          <Box mt="5px" width="280px">
            <Box>
              add some picture here
              <Image />
            </Box>
            <Box lineHeight={"25px"} gap={7} display={"flex"}>
              <Box textAlign={"left"}>
                <FormLabel fontSize="13px">
                  PRICE DETAILS({cartData.length} Items)
                </FormLabel>
                <Text fontSize={"14px"}>Total MRP</Text>
                <Text fontSize={"14px"}>Discount on MRP</Text>
                <Text fontSize={"14px"}>Coupon Discount</Text>
                <Text mb="10px" fontSize={"14px"}>
                  Convience Fee{" "}
                  <span
                    style={{
                      color: "#FF3F6C",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
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

          <Link to="/cartaddress">
            <Button
              mt="15px"
              p="20px"
              bg="#FF3F6C"
              colorScheme={"white"}
              w="100%"
            >
              PLACE ORDER
            </Button>
          </Link>
        </Box>
      </Box>

      <Box mt="40px">
        <CartPageFooter />
      </Box>
    </Box>
  );
};
