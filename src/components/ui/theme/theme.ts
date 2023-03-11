import {extendTheme} from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontFamily: 'Noto Sans',
      },
    },
    Container: {
      variants: {
        home: {
          maxW: '100vw',
          h: '100vh',
          display: 'flex',
          alignItems: 'center',
        },
        'page-fold': {
          maxW: '100vw',
          h: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        },
      },
    },
  },
  config: {
    initialColorMode: 'dark',
  }
});
