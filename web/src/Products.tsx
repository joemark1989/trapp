import {
  Box,
  Flex,
  Image,
  Input,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { useGetProductsQuery } from "./generated/graphql";

function Products() {
  const [productName, setProductName] = React.useState("");
  const onChangeHandler = (e?: any) => {
    setProductName(e.target.value);
    return e?.target.value ? e.target.value : "";
  };

  const { data, loading } = useGetProductsQuery({
    variables: { productName: productName ? productName : "" },
  });

  if (data?.getProducts?.length === 0) {
    // if (products.length > 0) {
    //   onChangeHandler(products);
    // }
    return (
      <>
        <Text fontSize="3xl" color="inherit" mb="10" textAlign="center">
          Start typing and see the magic happen
        </Text>
        <Flex justifyContent="center" mb="4">
          <Input
            borderColor="teal"
            color="inherit"
            maxW={600}
            ml={{ md: "4", base: "2" }}
            alignSelf="center"
            onChange={(e) => onChangeHandler(e)}
            _hover={{ borderColor: "teal" }}
            maxLength={50}
          />
        </Flex>
        <Text fontSize="1xl" color="inherit" mb="10" textAlign="center">
          Oh no... no products found. You entered {productName} please try
          agian.
        </Text>
      </>
    );
  }

  return (
    <Box>
      <Text fontSize="3xl" color="inherit" mb="10" textAlign="center">
        Start typing and see the magic happen
      </Text>
      <Flex justifyContent="center" mb="4">
        <Input
          borderColor="teal"
          color="inherit"
          maxW={600}
          ml={{ md: "4", base: "2" }}
          alignSelf="center"
          onChange={(e) => onChangeHandler(e)}
          _hover={{ borderColor: "teal" }}
          maxLength={50}
        />
      </Flex>
      <Wrap justify="center" overflow="hidden">
        {data &&
          data?.getProducts?.map((product) => (
            <WrapItem key={product.productId} p={0.5}>
              <Box
                p={4}
                maxW={{ lg: "26rem", sm: "20rem", base: "18rem" }}
                borderWidth={2}
                rounded="base"
                height="100%"
              >
                <Image
                  width="100vw"
                  src={product.productImage}
                  alt="random images"
                  height="15rem"
                  key={product.productId}
                />
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="lg"
                  mt="1"
                  letterSpacing="wide"
                  color="teal.600"
                >
                  {product.productName}
                </Text>
              </Box>
            </WrapItem>
          ))}
      </Wrap>
    </Box>
  );
}
export default Products;
