import styled from "styled-components"

export const LoginPageContainer = styled.main`
    text-align: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 1vw;

        label{
            font-size: 1.5vw;
        }

        input{
            font-family: 'Gothic A1';
            font-size: 1.2vw;
            text-align: center;
            width: 20vw;
            height: 2.5vw;
            border-radius: 15px 20px 15px 20px;
            border: solid 2px var(--dark-orange);
        }
        
    }
`

