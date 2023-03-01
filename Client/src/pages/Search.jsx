import FetchProduct from "./FetchProduct";
import { useEffect, useState } from "react";
import { Box, Button, Center, Image, Text, Wrap } from "@chakra-ui/react";
function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchProduct("")
      .then((res) => {
        setData(res.data);
      })
      .catch((er) => {
        console.log("err:", er);
      });
  }, []);

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
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search"
      />
      <button onClick={handleSearch}>SEARCH</button>
      <Center>
        <Wrap spacing={"40px"} width={"100%"} justify="center">
          <Box
            w={{ base: "75%", md: "85%", lg: "95%" }}
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            gap={"15px"}
            m={"auto"}
          >
            {data.map((el, i) => {
              return (
                <Box key={i}>
                  <Box
                    m="auto"
                    w={{ base: "", md: "", lg: "70%" }}
                    bg="white"
                    // borderRadius={"50%"}
                    padding="25px"
                    _hover={{
                      boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                    }}
                  >
                    <Image src={el.img} alt="img" w="80%" />
                  </Box>
                  <Text
                    textAlign={"center"}
                    color="blue.900"
                    fontSize={"14px"}
                    cursor="pointer"
                  >
                    {el.title}
                  </Text>
                  <Text textAlign={"center"} color="black" fontWeight={"600"}>
                    {el.brand}
                  </Text>
                  <Text textAlign={"center"} color="black" fontWeight={"600"}>
                    ${el.price}
                  </Text>
                  <Text textAlign={"center"} color="black" fontWeight={"600"}>
                    ${el.rating}
                  </Text>
                  <Text textAlign={"center"} color="black" fontWeight={"600"}>
                    {el.item_tag}
                  </Text>
                  <Button
                    w={"full"}
                    backgroundColor="#f35634"
                    color="white"
                    fontWeight={"500"}
                  >
                    Add to cart
                  </Button>
                </Box>
              );
            })}
          </Box>
        </Wrap>
      </Center>
    </div>
  );
}
export default Search;
