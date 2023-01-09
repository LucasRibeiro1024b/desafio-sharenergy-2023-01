import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --dark-blue: #00008B;
        --dark-orange: #FF8C00;
        --antique-white: #FAEBD7;
        --burly-wood: #DEB887;
    }

    body{
        background-color: var(--antique-white);
        font-family: 'Gothic A1';
    }

    h1{
        font-family: 'Viga';
        font-size: 2.3vw;
        padding: 1vw;
        margin-bottom: 1vw;
    }

    h2{
        font-family: 'Viga';
        font-size: 2vw;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`