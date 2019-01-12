import { createGlobalStyle } from "styled-components/macro";
import { normalize } from "polished";

import { black } from "styles/color";
import { getDefaultFontStyle } from "styles/typography";

export const GlobalStyle = createGlobalStyle`
  ${normalize()};

  * {
    box-sizing: border-box;
  }

  html,
  body {
    background: ${black({ luminosity: 100 })};
    ${getDefaultFontStyle()};
    -webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
  }

  a {
    border-bottom: 1px solid ${black()};
    color: ${black()};
    text-decoration: none;
  }
`;
