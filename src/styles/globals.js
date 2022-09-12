// @ts-nocheck
import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

const Globals = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-family: Tahoma, sans-serif;
    color: ${colors.TEXT_CLR};
    scroll-behavior: smooth;
}

body {
    background-color: ${colors.OVERALL_CLR};
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: Tahoma, sans-serif;
    font-weight: normal;
}

button {
    font-family: inherit;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
}

a {
    color: ${colors.TEXT_CLR};
    outline: none;
    text-decoration: none;
}

img {
    width: 100%;
    height: 100%;
}
`;

export default Globals;
