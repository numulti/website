import { createGlobalStyle } from 'styled-components';

import { lightColors } from '../components/global';

export const LayoutStyle = createGlobalStyle`
  body {
    background-color: ${lightColors.consMint};
  }
`;
