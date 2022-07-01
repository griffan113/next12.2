import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: `'Kantumruy Pro', sans-serif`,
    heading: `'Kantumruy Pro', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
});
