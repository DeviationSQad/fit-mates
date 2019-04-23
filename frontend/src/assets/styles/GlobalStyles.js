import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Muli:300,400,700,800&subset=latin-ext');
    *,*::before,*::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html { 
        font-size: 62.5%;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Muli', sans-serif;
    }

`;

export default GlobalStyle;
