import styled from "styled-components"

export const LoginPageContainer = styled.div`
    text-align: center;
`

export const LoginContainer = styled.main`
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

        button{
            width: 10vw;
            height: 2vw;
            margin-top: 0.7vw;
            margin-bottom: 0.4vw;
            font-size: 1vw;
            font-weight: bold;
            background-color: var(--dark-orange);
            border-radius: 15px 20px 15px 20px;
            border: solid 2px var(--burly-wood);
            :hover{
                transform: scale(1.2);
                transition: all 0.5s;
            }
        }
        
    }
`

export const RememberFormContainer = styled.form`
    display: flex;
    justify-content: center;
    
    input{
        width: 2vw;
        margin: 1vw 0 0 0;
    }

    p{
        margin: 1vw 0 0 0;
    }

`

