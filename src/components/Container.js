import { Box } from "@kuma-ui/core";

export const Container = ({ children }) => {
  return (
    <Box maxWidth={1280} px="2rem" mx="auto">
      {children}
    </Box>
  );
};
