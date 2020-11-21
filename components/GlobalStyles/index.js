import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family:sofia-pro;
}
body {
    font-family: sans-serif;
    font-size: 16px;
}
.content{
    width:50%;
    margin:auto;
}
@media (max-width: 800px) {
    .content {
      width:90%;
    }
  }
`;

export default GlobalStyles;
