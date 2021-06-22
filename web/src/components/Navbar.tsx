import { Flex, Heading, Input, Link } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

interface NavbarProps {
  setData: any;
}

export const Navbar: React.FC<NavbarProps> = ({ setData }) => {
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
          onChange={(e) => setData(e.target.value)}
        />
      </Flex>
      <ColorModeSwitcher ml="3" justifySelf="flex-end" />
    </Flex>
  );
};
