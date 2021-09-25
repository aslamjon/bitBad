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
    overflow-x: hidden;
}
.pagination {
    display: flex;
    margin-top: 15px;
    li {
        margin: 5px;
        a {
            padding: 5px 10px;
            border: 1px solid #006400;
            cursor: pointer;
            border-radius: 10px;
            transition: 0.3s;
            &:hover {
                background: #fff;
                border: 1px solid #fff;
            }
        }
    }
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
