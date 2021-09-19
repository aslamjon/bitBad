import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*, ul, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
ul {
    list-style: none;
}
a {
    text-decoration: none;
}
body {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    line-height: 1.45;
    color: #006400;
    font-weight: 500;
}
`;

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={{ dark: false }}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}

export default Theme
