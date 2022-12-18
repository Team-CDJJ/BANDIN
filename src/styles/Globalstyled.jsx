import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
    ${reset}
    
    * {
        font-family: "Spoqa Han Sans Neo", sans-serif;
        font-weight: 400;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html, body {
        font-family: "Spoqa Han Sans Neo", sans-serif;
        font-weight: 400;
        box-sizing: border-box;
    }

    .ir {
        position: absolute;
        overflow: hidden;
        width: 1px;
        height: 1px;
        margin: -1px;
        clip-path: inset(0 0 0 0);
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyled;
