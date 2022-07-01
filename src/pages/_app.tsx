import "../styles/globals.css";
import "nprogress/nprogress.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Router from "next/router";
import nProgress from "nprogress";

import { theme } from "../styles/theme";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
