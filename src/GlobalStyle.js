import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    #root {
        font-family: 'Montserrat', sans-serif;
        background-color: ${({ theme }) => theme.secondaryColor};
    }
    `;

export const theme = {
    primaryColor: '#fff',
    secondaryColor: '#eee',
    accentColor: 'hsl(187, 100%, 25%)',
    accentHover: 'hsl(187, 100%, 30%)',
    accentActive: 'hsl(187, 100%, 35%)'
};