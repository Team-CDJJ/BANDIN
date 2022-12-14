import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('../assets/fonts/SpoqaHanSansNeo-Light.woff2') format('font-woff2'),
            url('../assets/fonts/SpoqaHanSansNeo-Light.woff') format('font-woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('../assets/fonts/SpoqaHanSansNeo-Light.woff2') format('font-woff2'),
            url('../assets/fonts/SpoqaHanSansNeo-Light.woff') format('font-woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('../assets/fonts/SpoqaHanSansNeo-Medium.woff2') format('font-woff2'),
            url('../assets/fonts/poqaHanSansNeo-Medium.woff') format('font-woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('../assets/fonts/SpoqaHanSansNeo-Bold.woff2') format('font-woff2'),
            url('../assets/fonts/SpoqaHanSansNeo-Bold.woff') format('font-woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('../assets/fonts/SpoqaHanSansNeo-Regular.woff2') format('font-woff2'),
            url('../assets/fonts/SpoqaHanSansNeo-Regular.woff') format('font-woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('../assets/fonts/SpoqaHanSansNeo-Thin.woff2') format('font-woff2'),
            url('../assets/fonts/SpoqaHanSansNeo-Thin.woff') format('font-woff');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }

    
    ${reset}
    
    * {
        font-family: "Spoqa Han Sans Neo", sans-serif;
        font-weight: 400;
        box-sizing: border-box;
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

    input {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyled;
