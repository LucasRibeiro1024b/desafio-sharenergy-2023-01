import styled from "styled-components"

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 17vw;
    min-height: 15vh;
    margin-bottom: 1vw;
    border-radius: 30%;    
    background-color: var(--peach-puff);

    p{
        font-size: 1vw;
        font-weight: bold;
    }

    button{
        width: 4vw;
        height: 1.2vw;
        font-size: 0.9vw;
        font-weight: bold;
        margin-left: 0.5vw;
        background-color: var(--dark-orange);
        border-radius: 15px 20px 15px 20px;
        border: solid 2px var(--burly-wood);
        text-align: center;

        :hover{
            transform: scale(1.1);
            transition: all 0.5s;
        }

        img{
            width: 0.8vw;
            height: 1.5vh;
        }
    } 

    @media screen and (max-width: 500px) {
        width: 45vw;
        height: 20vh;
        p{
            font-size: 4vw;
        }
        button{
            width: 13vw;
            height: 5vw;
            font-size: 3vw;
            margin-top: 2vw;
            img{
                width: 3vw;
                height: 2vh; 
                margin-left: 3vw;
            }
        }
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        width: 40vw;
        height: 25vh;
        p{
            font-size: 3vw;
        }
        button{
            width: 11vw;
            height: 5vw;
            font-size: 2vw;
            margin-top: 2vw;
            img{
                width: 3vw;
                height: 2vh; 
                margin-left: 3vw;
            }
        }   
    }
    @media screen and (min-width: 1001px) and (max-width: 1700px){
        width: 30vw;
        height: 30vh;
        p{
            font-size: 2vw;
        }
        button{
            width: 6vw;
            height: 3vw;
            font-size: 1.5vw;
            margin-top: 2vw;
            img{
                width: 3vw;
                height: 2vh; 
                margin-left: 3vw;
            }
        }   
    } 
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5vw 0 0;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        :nth-child(3){
            width: 1.6vw;
            height: 2.9vh;
            background-color: var(--peach-puff);
            border-radius: 0;
            border: 0;
            text-align: center;
            :hover{
            transform: scale(1.5);
            transition: all 0.5s;
        }
        }
    }
`