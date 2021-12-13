import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background-color: #f2f2f2;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Revalia',
            'Viaoda Libre', 'Open Sans Condensed', sans-serif, cursive;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    button {
        border: none;
        outline: none;
    }

    input, textarea {
        -webkit-appearance: media-slider;
        outline:none;
    }

    a {
        text-decoration: none;
        outline: 0;
    }   
`;