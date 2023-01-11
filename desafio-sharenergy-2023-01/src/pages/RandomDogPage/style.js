import styled from "styled-components"

export const RandomDogPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h4{
        font-size: 1.5vw;
    }   

    h1{
        margin-bottom: 1vw;
    }

`

export const DogCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 30vw;
    height: 70vh;
    background-color: var(--antique-white);
    
    img{
        width: 30vw;
        height: 60vh;
        border-radius: 10%;        
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.5vw;
        height: 6vh;
        margin-top: 1vw;
        margin-bottom: 0.4vw;
        font-size: 1vw;
        font-weight: bold;
        text-align: center;
        background-color: var(--dark-orange);
        border-radius: 100%;
        border: solid 2px var(--burly-wood);
        :hover{
            transform: scale(1.2);
            transition: all 0.5s;
        }

        img{
            width: 2vw;
            height: 3.8vh;
        }
    }
`
