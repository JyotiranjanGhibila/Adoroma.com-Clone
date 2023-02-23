import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Users from "./Users";
import ProductForm from "./Addproducts";
import Allcatpro from "./Allcatpro";
const AdminPanel = (props) => {
  const [selectedOption, setSelectedOption] = useState("all-products");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Box>
      <Flex align="center" justify="space-between">
        <Text fontWeight="600" fontSize="25px">
          Dashboard
        </Text>
        <Box>
          <Flex align="center">
            <Select mx="2" w="200px" value={selectedOption} onChange={handleOptionChange}>
              <option value="all-products">All Products</option>
              <option value="all-users">Customers and Users</option>
              <option value="add-products">Add Products</option>
            </Select>
          </Flex>
        </Box>
      </Flex>
      <Box>
        {selectedOption === "all-products" && (
          <Box>
            {
              <Allcatpro/>
            }
          </Box>
        )}
        {selectedOption === "all-users" && (
          <Box>
            {
<Users/>
            }
          </Box>
        )}
        {selectedOption === "add-products" && (
          <Box>
            {
              <ProductForm/>
            }
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AdminPanel;
