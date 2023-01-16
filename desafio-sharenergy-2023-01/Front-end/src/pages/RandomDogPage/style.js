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

    @media screen and (max-width: 500px) {
        h1{
            font-size: 5vw;
            margin: 5vw 0;
        }
        h4{
            font-size: 5vw;
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
    }
    @media screen and (min-width: 1001px) and (max-width: 1700px){
        h1{
            font-size: 3vw;
            margin: 3vw 0;
        }
        h4{
            font-size: 3vw;
        }
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
        width: 35vw;
        height: 50vh;
        border-radius: 10%;        
    }

    video{
        width: 35vw;
        height: 50vh;
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

    @media screen and (max-width: 500px) {
        img{
            width: 80vw;
            height: 50vh;       
        }
        video{
            width: 80vw;
            height: 50vh;
        }
        button{
            margin-top: 3vw;
            width: 11vw;
            height: 6vh;

            img{
                width: 8vw;
                height: 4vh;
            }
        }
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        img{
            width: 60vw;
            height: 60vh;       
        }
        video{
            width: 60vw;
            height: 60vh;
        }
        button{
            margin-top: 2vw;
            width: 9vw;
            height: 7vh;

            img{
                width: 6vw;
                height: 5vh;
            }
        }       
    }
    @media screen and (min-width: 1001px) and (max-width: 1700px){
        img{
            width: 65vw;
            height: 55vh;       
        }
        video{
            width: 65vw;
            height: 55vh;
        }
        button{
            margin-top: 3vw;
            width: 7vw;
            height: 8vh;

            img{
                width: 5vw;
                height: 5vh;
            }
        }
    }
`
