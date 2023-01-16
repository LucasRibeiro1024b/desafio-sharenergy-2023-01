import styled from "styled-components"

export const CreateClientContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h4{
        font-size: 1.5vw;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        font-family: 'Gothic A1';
        border: 0;
        font-size: 1vw;
        font-weight: bold;
        height: 2.3vw;
        width: 20vw;
        padding-left: 1vw;
        margin-bottom: 1.4vw;
        :focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }

    button{
        width: 6vw;
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
        h1{
            font-size: 5vw;
            margin: 5vw 0;
        }
        input{
            height: 4vh;
            width: 50vw;
            font-size: 3.5vw;
        }
        button{
            margin-top: 3vw;
            width: 16vw;
            height: 6vw;
            font-size: 3.5vw;
        }
        
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        h1{
            font-size: 4vw;
            margin: 3vw 0;
        }
        input{
            height: 4vh;
            width: 50vw;
            font-size: 2.5vw;
        }
        button{
            margin-top: 3vw;
            width: 14vw;
            height: 4vw;
            font-size: 2.5vw;
        }
               
    }
    @media screen and (min-width: 1001px) and (max-width: 1700px){
        h1{
            font-size: 3vw;
            margin: 3vw 0;
        }
        input{
            height: 4vh;
            width: 50vw;
            font-size: 1.5vw;
        }
        button{
            margin-top: 3vw;
            width: 9vw;
            height: 2.5vh;
            font-size: 1.5vw;
        }        
    }
`