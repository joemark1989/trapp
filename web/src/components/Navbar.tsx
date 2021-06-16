import { Flex, Heading, IconButton, Input, Link } from "@chakra-ui/react";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useGetProductsQuery } from "../generated/graphql";

interface NavbarProps {}

export const Navbar = () => {
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
      </Flex>
      <ColorModeSwitcher ml="3" justifySelf="flex-end" />
    </Flex>
  );
};
