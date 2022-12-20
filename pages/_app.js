import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import React from 'react';

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp