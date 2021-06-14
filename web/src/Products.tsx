import { Box, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { useGetAllProductsQuery } from "./generated/graphql";

function Products() {
  const { data, loading } = useGetAllProductsQuery();

  if (!loading && !data) {
    return <div>Oh no...Products. :(</div>;
  }

  return (
    <Box>
      {!data && loading ? (
        <div>loading...</div>
      ) : (
        <Wrap>
          {data?.getAllproducts.map((product) =>
            !product ? null : (
              <WrapItem>
                <Box p={4} maxWidth="26rem" borderWidth={2} rounded="base">
                  <Image
                    width="100%"
                    src={product.productImage}
                    alt="random images"
                    height="auto"
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
            )
          )}
        </Wrap>
      )}
    </Box>
  );
}
export default Products;
