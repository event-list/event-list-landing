import type {AppProps} from 'next/app';

import {ChakraProvider} from '@chakra-ui/react';
import {theme} from '../components/ui/theme/theme';

import './style.css';
import {appWithTranslation} from "next-i18next";

function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(App)
