import "@total-typescript/ts-reset";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@cradleapoth/ui";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import { NextSeo } from 'next-seo';
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Head>
      <title>Cradle Apothecary</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Analytics />
    <NextSeo
      title="Cradle Apothecary"
      description="Wellness services, traditional medicine"

    />
    {/* @ts-ignore */}
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
