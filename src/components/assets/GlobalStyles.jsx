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
    overflow-x: hidden;
  }

  

  

`

export default GlobalStyless;
