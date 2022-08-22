import { Global, css } from '@emotion/react';
import reset from 'styled-reset';

const style = css`
  ${reset},
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: black;

    &:visited {
      text-decoration: none;
    }

    &:hover {
      text-decoration: none;
    }

    &:focus {
      text-decoration: none;
    }

    &:hover,
    &:active {
      text-decoration: none;
    }
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
