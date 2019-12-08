import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }

    body {
        font-size: 10px;
        font-family: 'Hind', sans-serif;
    }
`;

export default GlobalStyle;
