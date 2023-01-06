import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --dark-blue: #00008B;
        --dark-orange: #FF8C00;
        --antique-white: #FAEBD7;
    }

    body{
        background-color: var(--antique-white);
        font-family: 'Prosto One';
    }

    h1{
        font-family: 'Viga';
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`