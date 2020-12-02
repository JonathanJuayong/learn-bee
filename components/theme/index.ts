import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import fonts from './fonts';
import global from './global';

export const theme = extendTheme({
  styles: { global },
  colors,
  fonts,
})