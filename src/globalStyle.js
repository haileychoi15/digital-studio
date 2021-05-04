import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    font-style: normal;
    line-height: 1;

    padding: 0;
    margin: 0;

    overscroll-behavior-y: none;
  }
  
  body * {
    box-sizing: border-box;
    &::selection {
    }
  }
  
  ul, ol, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  dl, dt, dd,
  h1, h2, h3, h4, h5, h6,
  p,
  input[type=radio] {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  
  a {
    text-decoration: none;
    color: #000;
  }
  
  button, input, textarea, select, option {
    outline: none;
    cursor: pointer;
  }

  button {
    border: none;
    border-radius: 6px;
    padding: 0;
    margin: 0;
  }

  video {
    outline: none;
  }
`;

export default GlobalStyle;