import styled from "styled-components"

export const LoginPageContainer = styled.div`
    text-align: center;

    header{
        display: flex;
        justify-content: space-around;
        background-color: var(--dark-orange);
        text-align: center;
        width: 100%;
        height: 100px;
        line-height: 100px;
    }

    h1{
        font-size: 2vw;
        margin: 1vw 0;
    }

    @media screen and (max-width: 500px) {
        h1{
            font-size: 6vw;
            margin: 5vw 0;
        }
        header{
            h2{
                font-size: 6vw;
            }
        }
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        h1{
            font-size: 4.5vw;
            margin: 4vw 0;
        }
        header{
            h2{
                font-size: 4.5vw;
            }
        }  
    }
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

        @media screen and (max-width: 500px) {
            label{
                font-size: 5vw;
            }
            input{
                width: 40vw;
                height: 4vh;
                font-size: 3.5vw;
            }
            button{
                margin: 3vw 0;
                width: 20vw;
                height: 4vh;
                font-size: 3.5vw;
            }
        }
        @media screen and (min-width: 500px) and (max-width: 1000px) {
            label{
                font-size: 4vw;
            }
            input{
                width: 40vw;
                height: 4vh;
                font-size: 3.5vw;
            }
            button{
                margin: 3vw 0;
                width: 20vw;
                height: 4vh;
                font-size: 3vw;
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
        font-size: 1vw;
        margin: 1vw 0 0 0;
    }

    @media screen and (max-width: 500px) {
        input{
            width: 4vw;
            margin: 1vw 0 0 0;
        }
        p{
            font-size: 4vw;
            margin: 1vw 0 0 2vw;
        }
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        input{
            width: 3vw;
            margin: 1vw 0 0 0;
        }
        p{
            font-size: 2vw;
            margin: 1vw 0 0 1vw;
        }   
    }

`
