import styled from "styled-components"

export const ClientDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h4{
        font-size: 1.5vw;
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
        :nth-child(2){
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

    @media screen and (max-width: 500px) {
        h1{
            font-size: 5vw;
            margin: 5vw 0;
        }
        h4{
            font-size: 5vw;
        }
        button{
            width: 17vw;
            height: 3vh;
            font-size: 3.5vw;
        }
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        h1{
            font-size: 4vw;
            margin: 3vw 0;
        } 
        h4{
            font-size: 4vw;
        }
        button{
            width: 14vw;
            height: 3.5vh;
            font-size: 3vw;
        }       
    }
    @media screen and (min-width: 1001px) and (max-width: 1700px){
        h1{
            font-size: 3vw;
            margin: 3vw 0;
        }
        h4{
            font-size: 3vw;
        }
        button{
            width: 10vw;
            height: 3.5vh;
            font-size: 2vw;
        }
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 50vh;
    margin-bottom: 1vw;
    border-radius: 30%;    
    background-color: var(--peach-puff);

    p{
        font-size: 1.5vw;
        font-weight: bold;
        margin-bottom: 1vw;
    }

    button{
        width: 5vw;
        height: 3vh;
        font-size: 1vw;
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
        width: 90vw;
        height: 30vh;
        p{
            font-size: 4vw;
            margin-bottom: 2vw;
        }
        button{
            width: 17vw;
            height: 3vh;
            font-size: 3.5vw;
            margin-left: 4vw;

            img{
                width: 4vw;
                height: 2vh;
            }
        }
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        width: 65vw;
        height: 40vh;
        p{
            font-size: 3vw;
            margin-bottom: 2vw;
        }
        button{
            width: 14vw;
            height: 3.5vh;
            font-size: 3vw;
            margin-left: 3vw;
            img{
                width: 5vw;
                height: 2.5vh;
            }
        }  
    }
    @media screen and (min-width: 1001px) and (max-width: 1700px){
        width: 65vw;
        height: 40vh;
        p{
            font-size: 2vw;
            margin-bottom: 2vw;
        }
        button{
            width: 10vw;
            height: 3.5vh;
            font-size: 2vw;
            margin-left: 2vw;
            img{
                width: 5vw;
                height: 2.5vh;
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