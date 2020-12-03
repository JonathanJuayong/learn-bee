import { Box, ChakraProvider, GlobalStyle } from '@chakra-ui/react';
import { Component } from 'react';
import 'focus-visible/dist/focus-visible';
import { AppProps } from 'next/app';
import { theme } from '../components/theme';
import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;700&family=Yeseva+One&display=swap" rel="stylesheet"/>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps } />
      </ChakraProvider>
    </>
  )
}

export default MyApp
