import { Flex, Heading, Input, Link } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useGetProductQuery } from "../generated/graphql";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const [product, productValue] = React.useState("");
  const { data, loading } = useGetProductQuery({
    variables: {
      productName: product,
    },
  });
  // console.log(data?.getProduct.map((data) => data.productName));
  if (!data && loading) return <div>Loading...</div>;

  return (
    <Flex
      background="whitesmoke"
      position="sticky"
      top={0}
      zIndex={999}
      p={4}
      boxShadow="lg"
      borderBottom="2px solid teal"
    >
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <Link>
          <Heading color="black">Trapp</Heading>
        </Link>
        <Input
          borderColor="teal"
          color="black"
          _placeholder={{ color: "black" }}
          placeholder="Search Products"
          maxW={600}
          ml={{ md: "4", base: "2" }}
          pr="2"
          alignSelf="center"
          onChange={(e) => productValue(e.target.value)}
        />
      </Flex>
      <ColorModeSwitcher ml="3" justifySelf="flex-end" />
    </Flex>
  );
};
