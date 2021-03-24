import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: props => ({
      body: {
        fontSize: 'sm',
        lineHeight: 'tall',
        boxSizing: 'border-box',
      },
      h1: {
        fontWeight: 'bold',
      },
    }),
  },
  colors: {
    cubes: '#B9B9B9',
  },
});

export default theme;
