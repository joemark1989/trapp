import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import Products from "./Products";

export const App = () => {
  const [productName, setProductName] = React.useState("");
  const handleChange = (value: string) => {
    setProductName(value);
    return value;
  };
  return (
    <ChakraProvider theme={theme}>
      <Navbar setData={handleChange} />
      <Layout variant="regular">
        <Products productName={productName} />
      </Layout>
    </ChakraProvider>
  );
};
