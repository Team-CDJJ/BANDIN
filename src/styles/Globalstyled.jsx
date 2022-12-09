import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyled = createGlobalStyle`
    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('SpoqaHanSansNeo-Light.woff2') format('woff2'),
            url('SpoqaHanSansNeo-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('SpoqaHanSansNeo-Medium.woff2') format('woff2'),
            url('SpoqaHanSansNeo-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('SpoqaHanSansNeo-Bold.woff2') format('woff2'),
            url('SpoqaHanSansNeo-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('SpoqaHanSansNeo-Regular.woff2') format('woff2'),
            url('SpoqaHanSansNeo-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: url('SpoqaHanSansNeo-Thin.woff2') format('woff2'),
            url('SpoqaHanSansNeo-Thin.woff') format('woff');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }

    ${reset}

    * {
        font-family: "Spoqa Han Sans Neo", sans-serif;
        font-weight: 400;
    }

    .ir {
        position: absolute;
        overflow: hidden;
        width: 1px;
        height: 1px;
        margin: -1px;
        clip-path: inset(0 0 0 0);
    }
`;

export default GlobalStyled;
