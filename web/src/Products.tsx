import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { useProductsQuery } from "./generated/graphql";

function Products({ productName }: any) {
  const { data, loading, fetchMore, variables } = useProductsQuery({
    variables: {
      limit: 20,
      cursor: null,
      name: productName ? productName : "",
    },
  });
  // const { data: productList } = useGetProductsQuery({
  //   variables: { productName: productName ? productName : "" },
  // });

  if (data?.products.products?.length === 0) {
    return (
      <Text fontSize="2xl" color="inherit" mb="10" textAlign="center">
        No products found. You entered {productName} please try agian.
      </Text>
    );
  }
  if (loading) {
    return <Box>...Loading</Box>;
  }

  return (
    <Box>
      <Wrap justify="center" overflow="hidden">
        {data?.products.products?.map((product, idx) => (
          <WrapItem key={product.productId} p={0.5}>
            <Box
              p={4}
              maxW={{ lg: "26rem", sm: "20rem", base: "18rem" }}
              borderWidth={2}
              rounded="base"
              borderColor="#CDCDCD"
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
      {data && data.products.hasMore ? (
        <Flex>
          <Button
            onClick={() => {
              fetchMore({
                variables: {
                  limit: variables?.limit,
                  cursor:
                    data.products.products[data.products.products.length - 1]
                      .createdAt,
                },
              });
            }}
            isLoading={loading}
            m="auto"
            my="8"
            background="teal.400"
          >
            Load More
          </Button>
        </Flex>
      ) : null}
    </Box>
  );
}
export default Products;
