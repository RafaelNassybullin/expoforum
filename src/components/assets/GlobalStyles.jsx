import {createGlobalStyle} from 'styled-components';

const GlobalStyless = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ::selection{
    background: pink;
  }

  body {
    font-family: Roboto, sans-serif;
    visibility: hidden;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  
`

export default GlobalStyless;
