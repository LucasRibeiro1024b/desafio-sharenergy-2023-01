import styled from "styled-components"

export const Card = styled.div`
    width: 14vw;
    height: 39vh;
    margin-bottom: 1vw;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    background-color: white;

    p{
        font-size: 0.8vw;
        font-weight: bold;
    }

    img{
        width: 12vw;
        height: 26vh;
        margin: 0.7vw;
    }

    @media screen and (max-width: 500px) {
        width: 42vw;
        height: 29vh;
        img{
            width: 40vw;
            height: 20vh;
            margin: 1vw;
        }
        p{
            font-size: 2.5vw;
        }
    }
    @media screen and (min-width: 501px) and (max-width: 1000px) {
        width: 42vw;
        height: 48vh;
        img{
            width: 40vw;
            height: 30vh;
            margin: 1vw;
        }
        p{
            font-size: 2.5vw;
        }           
    }
    @media screen and (min-width: 1001px) and (max-width: 1700px){
        width: 30vw;
        height: 45vh;
        img{
            width: 27vw;
            height: 30vh;
            margin: 1vw;
        }
        p{
            font-size: 1.5vw;
        }           
    }

`