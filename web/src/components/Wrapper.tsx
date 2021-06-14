import { Box } from "@chakra-ui/react";
import React from "react";

export type WrapperVariant = "small" | "regular";
interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      mx="auto"
      maxW={variant === "regular" ? "850px" : "400px"}
      w="100%"
      mt={8}
    >
      {children}
    </Box>
  );
};
