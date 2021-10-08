import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        
    }

    body {
        background: #a4ac86;
        font-family: 'Roboto Mono', monospace;
    }

    border-style, input, button {
        // font and font-size
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Ephesis', cursive;
    }

    button {
        cursor: pointer;
    }

    a {
        color: white;
        text-decoration: none;
    }
`;
