import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { Layout } from "./components/Layout";
import Products from "./Products";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout variant="regular">
        <Products />
      </Layout>
    </ChakraProvider>
  );
};
